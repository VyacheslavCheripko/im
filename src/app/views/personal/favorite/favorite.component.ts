import {Component, OnInit} from '@angular/core';
import {FavoriteService} from "../../../shared/services/favorite.service";
import {FavoriteType} from "../../../../types/favorite.type";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {environment} from "../../../../environments/environment";
import {CartService} from "../../../shared/services/cart.service";
import {ProductType} from "../../../../types/product.type";
import {CartType} from "../../../../types/cart.type";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements  OnInit{

  products: FavoriteType[] = [];
  productsInCart: CartType = {items: []};
  serverStaticPath: string = environment.serverStaticPath;
  constructor(private favoriteService: FavoriteService, private cartService: CartService) {

  }

  ngOnInit() {
    this.favoriteService.getFavorites()
      .subscribe((data: FavoriteType[] | DefaultResponseType) => {
        if ((data as DefaultResponseType).error !== undefined){
            const error = (data as DefaultResponseType).message;
            throw new Error(error);
        }

        this.products = data as FavoriteType[];

        this.cartService.getCart()
          .subscribe(data => {
            if ((data as DefaultResponseType).error !== undefined){
              throw new Error((data as DefaultResponseType).message);
            }
            this.productsInCart = data as CartType;

            if (this.products && this.products.length > 0 && this.productsInCart.items.length > 0){
              this.products.map(product => {
                const foundProductInCart = this.productsInCart.items.find(item => item.product.id === product.id);
                if (foundProductInCart){
                  product.isInCart = true;
                  product.quantity = foundProductInCart.quantity;
                  return product;
                }

                return product;
              });
            }
          });
      });
  }
  removeFromFavorites(id: string): void{
    this.favoriteService.removeFavorite(id)
      .subscribe((data: DefaultResponseType) => {
        if (data.error){
          throw new Error(data.message);
        }

        this.products = this.products.filter(item => item.id !== id);
      });
  }

  addToCart(productId: string){
    this.cartService.updateCart(productId, 1)
      .subscribe((data: CartType | DefaultResponseType) => {
        if ((data as DefaultResponseType).error !== undefined){
          throw new Error((data as DefaultResponseType).message);
        }
      });
  }

  updateCount(id: string, count: number){
    if (this.products){
      this.cartService.updateCart(id, count)
        .subscribe((data: CartType | DefaultResponseType) => {
          if ((data as DefaultResponseType).error !== undefined){
            throw new Error((data as DefaultResponseType).message);
          }
          this.products.map(item => {
            if (item.id === id){
              item.quantity = count;
              item.isInCart = true;
              return item;
            }
            return item;
          });
        });
    }
  }
}

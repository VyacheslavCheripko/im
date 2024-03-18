import {ProductCardComponent} from "./product-card.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/auth/auth.service";
import {FavoriteService} from "../../services/favorite.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {of} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('product card', () => {
  let productCardComponent: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let product: ProductType;

  beforeEach(() => {
    const cartServiceSpy = jasmine.createSpyObj('CartService', ['updateCart']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getLoggedIn']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const _snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    const favoriteService = jasmine.createSpyObj('FavoriteService', ['removeFavorite', 'addFavorite']);


    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      providers: [
        {provide: CartService, useValue: cartServiceSpy},
        {provide: AuthService, useValue: authServiceSpy},
        {provide: Router, useValue: routerSpy},
        {provide: MatSnackBar, useValue: _snackBarSpy},
        {provide: FavoriteService, useValue: favoriteService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    productCardComponent = fixture.componentInstance;
    product = {
      id: 'test',
      name: 'test',
      price: 1,
      image: 'test',
      lightning: 'test',
      humidity: 'test',
      temperature: 'test',
      height: 1,
      diameter: 1,
      url: 'test',
      type: {
        id: 'test',
        name: 'test',
        url: 'test'
      },
    };

    productCardComponent.product = product;

  });

  it('should have count init value 1', () => {
    expect(productCardComponent.count).toBe(1);
  });

  it('should set value from input countInCart to count', () => {
    productCardComponent.countInCart = 5;
    fixture.detectChanges();
    expect(productCardComponent.countInCart).toBe(5);
  });

  it('should call removeFromCard with count 0', () => {
    const cartServiceSpy = TestBed.inject(CartService) as jasmine.SpyObj<CartService>;
    cartServiceSpy.updateCart.and.returnValue(of(
      {
        items: [
          {
            product: {
              id: '1',
              name: '1',
              price: '1',
              image: '1',
              url: '1'
            },
            quantity: 1
          }
        ]
      }
    ));

    productCardComponent.removeFromCart();

    expect(cartServiceSpy.updateCart).toHaveBeenCalledWith(product.id, 0);
  });

  it('should hide product-card-info and product-card-extra if it is light card', () => {
    productCardComponent.isLight = true;
    productCardComponent.product = product;

    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    console.log(componentElement);
    const productCartInfo: HTMLElement | null = componentElement.querySelector('.product-card-info');
    const productCartExtra: HTMLElement | null = componentElement.querySelector('.product-card-extra');

    expect(productCartInfo).toBe(null);
    expect(productCartExtra).toBe(null);
  });

  it('should call navigate for light card', () => {
    const routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    productCardComponent.isLight = true;

    productCardComponent.navigate();

    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('should call navigate for full card', () => {
    const routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    productCardComponent.isLight = false;

    productCardComponent.navigate();

    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});

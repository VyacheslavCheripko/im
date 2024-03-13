"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[175],{9175:(b,m,s)=>{s.r(m),s.d(m,{UserModule:()=>v});var c=s(6814),g=s(8124),i=s(95),t=s(9468),h=s(4855),d=s(7707);const C=function(e){return{"border-color":e}};let _=(()=>{class e{constructor(o,u,n,r){this.fb=o,this.authService=u,this._snackBar=n,this.router=r,this.loginForm=this.fb.group({email:["",[i.kI.email,i.kI.required]],password:["",[i.kI.required]],rememberMe:[!1]})}login(){this.loginForm.valid&&this.loginForm.value.email&&this.loginForm.value.password&&this.authService.login(this.loginForm.value.email,this.loginForm.value.password,!!this.loginForm.value.rememberMe).subscribe({next:o=>{let u=null;void 0!==o.error&&(u=o.message);const n=o;if((!n.accessToken||!n.refreshToken||!n.userId)&&(u="\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"),u)throw this._snackBar.open(u),new Error(u);this.authService.setTokens(n.accessToken,n.refreshToken),this.authService.userId=n.userId,this._snackBar.open("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c"),this.router.navigate(["/"])},error:o=>{this._snackBar.open(o.error&&o.error.message?o.error.message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")}})}static#t=this.\u0275fac=function(u){return new(u||e)(t.Y36(i.qu),t.Y36(h.e),t.Y36(d.ux),t.Y36(g.F0))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:23,vars:8,consts:[[1,"login",3,"formGroup"],[1,"container"],[1,"auth-form"],[1,"auth-title"],[1,"auth-inputs"],[1,"auth-input"],["type","text","placeholder","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430","formControlName","email",1,"input",3,"ngStyle"],["type","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c","formControlName","password",1,"input",3,"ngStyle"],[1,"auth-checkbox"],["type","checkbox","id","remember","formControlName","rememberMe"],["for","remember"],[1,"auth-button"],[1,"button",3,"disabled","click"],[1,"auth-link"],["routerLink","/signup"],[1,"page-image"],["src","/assets/images/page/login.png","alt","flower"]],template:function(u,n){if(1&u&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4," \u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 "),t.qZA(),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",5),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"input",9),t.TgZ(12,"label",10),t._uU(13,"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),t.qZA()()(),t.TgZ(14,"div",11)(15,"button",12),t.NdJ("click",function(){return n.login()}),t._uU(16,"\u0412\u043e\u0439\u0442\u0438"),t.qZA()(),t.TgZ(17,"div",13),t._uU(18," \u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? "),t.TgZ(19,"a",14),t._uU(20,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"),t.qZA()()(),t.TgZ(21,"div",15),t._UZ(22,"img",16),t.qZA()()()),2&u){let r,a;t.Q6J("formGroup",n.loginForm),t.xp6(7),t.Q6J("ngStyle",t.VKq(4,C,null!=(r=n.loginForm.get("email"))&&r.invalid&&(null!=(r=n.loginForm.get("email"))&&r.touched||null!=(r=n.loginForm.get("email"))&&r.dirty)?"red":"")),t.xp6(2),t.Q6J("ngStyle",t.VKq(6,C,null!=(a=n.loginForm.get("password"))&&a.invalid&&(null!=(a=n.loginForm.get("password"))&&a.touched||null!=(a=n.loginForm.get("password"))&&a.dirty)?"red":"")),t.xp6(6),t.Q6J("disabled",n.loginForm.invalid)}},dependencies:[c.PC,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u,g.rH],styles:[".auth-form[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:110px}.auth-form[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{font-family:Lora,sans-serif;font-size:36px;font-weight:400;color:#202b21;margin-bottom:35px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]{margin-bottom:30px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]{margin-bottom:8px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:422px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]{max-width:422px;display:flex;align-items:baseline}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;line-height:130%;margin-left:10px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#519057;text-decoration:none}.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%]{margin-top:30px}.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%]   button.button[_ngcontent-%COMP%]{width:422px}.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%]{margin-top:8px;font-size:16px;color:#2c2c2c}.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin-left:5px;color:#519157}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%]{margin-left:49px}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:bottom}"]})}return e})(),f=(()=>{class e{validate(o){const u=o.get("password"),n=o.get("passwordRepeat");return u?.value!==n?.value?(n?.setErrors({passwordRepeat:!0}),{passwordRepeat:!0}):null}static#t=this.\u0275fac=function(u){return new(u||e)};static#n=this.\u0275dir=t.lG2({type:e,selectors:[["","passwordRepeat",""]],features:[t._Bn([{provide:i.Cf,useExisting:e,multi:!0}])]})}return e})();const p=function(e){return{"border-color":e}},M=[{path:"login",component:_},{path:"signup",component:(()=>{class e{constructor(o,u,n,r){this.fb=o,this.authService=u,this._snackBar=n,this.router=r,this.signupForm=this.fb.group({email:["",[i.kI.email,i.kI.required]],password:["",[i.kI.required,i.kI.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],passwordRepeat:["",[i.kI.required,i.kI.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],agree:[!1,[i.kI.requiredTrue]]})}signup(){this.signupForm.valid&&this.signupForm.value.email&&this.signupForm.value.password&&this.signupForm.value.passwordRepeat&&this.authService.signup(this.signupForm.value.email,this.signupForm.value.password,this.signupForm.value.passwordRepeat).subscribe({next:o=>{let u=null;void 0!==o.error&&(u=o.message);const n=o;if((!n.accessToken||!n.refreshToken||!n.userId)&&(u="\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),u)throw this._snackBar.open(u),new Error(u);this.authService.setTokens(n.accessToken,n.refreshToken),this.authService.userId=n.userId,this._snackBar.open("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c"),this.router.navigate(["/"])},error:o=>{this._snackBar.open(o.error&&o.error.message?o.error.message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")}})}static#t=this.\u0275fac=function(u){return new(u||e)(t.Y36(i.qu),t.Y36(h.e),t.Y36(d.ux),t.Y36(g.F0))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-signup"]],decls:30,vars:11,consts:[["passwordRepeat","",1,"signup",3,"formGroup"],[1,"container"],[1,"auth-form"],[1,"auth-title"],[1,"auth-inputs"],[1,"auth-input"],["type","text","placeholder","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430","formControlName","email",1,"input",3,"ngStyle"],["type","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c","formControlName","password",1,"input",3,"ngStyle"],["type","password","placeholder","\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","formControlName","passwordRepeat",1,"input",3,"ngStyle"],[1,"auth-checkbox"],["type","checkbox","id","agree","formControlName","agree"],["for","agree"],["href","#"],[1,"auth-button"],[1,"button",3,"disabled","click"],[1,"auth-link"],["routerLink","/login"],[1,"page-image"],["src","/assets/images/page/signup.png","alt","flower"]],template:function(u,n){if(1&u&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 "),t.qZA(),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",5),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",5),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"div",9),t._UZ(13,"input",10),t.TgZ(14,"label",11),t._uU(15,"\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e "),t.TgZ(16,"a",12),t._uU(17,"\u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"),t.qZA(),t._uU(18," \u0438 \u0434\u0430\u044e "),t.TgZ(19,"a",12),t._uU(20,"\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),t.qZA()()()(),t.TgZ(21,"div",13)(22,"button",14),t.NdJ("click",function(){return n.signup()}),t._uU(23,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),t.qZA()(),t.TgZ(24,"div",15),t._uU(25," \u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? "),t.TgZ(26,"a",16),t._uU(27,"\u0412\u043e\u0439\u0434\u0438\u0442\u0435"),t.qZA()()(),t.TgZ(28,"div",17),t._UZ(29,"img",18),t.qZA()()()),2&u){let r,a,l;t.Q6J("formGroup",n.signupForm),t.xp6(7),t.Q6J("ngStyle",t.VKq(5,p,null!=(r=n.signupForm.get("email"))&&r.invalid&&(null!=(r=n.signupForm.get("email"))&&r.dirty||null!=(r=n.signupForm.get("email"))&&r.touched)?"red":"")),t.xp6(2),t.Q6J("ngStyle",t.VKq(7,p,null!=(a=n.signupForm.get("password"))&&a.invalid&&(null!=(a=n.signupForm.get("password"))&&a.dirty||null!=(a=n.signupForm.get("password"))&&a.touched)?"red":"")),t.xp6(2),t.Q6J("ngStyle",t.VKq(9,p,null!=(l=n.signupForm.get("passwordRepeat"))&&l.invalid&&(null!=(l=n.signupForm.get("passwordRepeat"))&&l.dirty||null!=(l=n.signupForm.get("passwordRepeat"))&&l.touched)?"red":"")),t.xp6(11),t.Q6J("disabled",n.signupForm.invalid)}},dependencies:[c.PC,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u,f,g.rH],styles:[".auth-form[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:110px}.auth-form[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{font-family:Lora,sans-serif;font-size:36px;font-weight:400;color:#202b21;margin-bottom:35px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]{margin-bottom:30px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]{margin-bottom:8px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:422px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]{max-width:422px;display:flex;align-items:baseline}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;line-height:130%;margin-left:10px}.auth-form[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%]   .auth-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#519057;text-decoration:none}.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%]{margin-top:30px}.auth-form[_ngcontent-%COMP%]   .auth-button[_ngcontent-%COMP%]   button.button[_ngcontent-%COMP%]{width:422px}.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%]{margin-top:8px;font-size:16px;color:#2c2c2c}.auth-form[_ngcontent-%COMP%]   .auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin-left:5px;color:#519157}.signup[_ngcontent-%COMP%]{margin-top:10px}.signup[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex}.signup[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%]{margin-left:222px}.signup[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:bottom}"]})}return e})()}];let P=(()=>{class e{static#t=this.\u0275fac=function(u){return new(u||e)};static#n=this.\u0275mod=t.oAB({type:e});static#u=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(M),g.Bz]})}return e})();var O=s(6208);let v=(()=>{class e{static#t=this.\u0275fac=function(u){return new(u||e)};static#n=this.\u0275mod=t.oAB({type:e});static#u=this.\u0275inj=t.cJS({imports:[c.ez,i.UX,O.m,P]})}return e})()}}]);
"use strict";(self.webpackChunksesion21=self.webpackChunksesion21||[]).push([[534],{3534:(C,d,e)=>{e.r(d),e.d(d,{AuthModule:()=>s});var c=e(6895),m=e(187),n=e(4006),p=e(5226),f=e.n(p),o=e(4650),h=e(287),v=e(4859),u=e(9549),Z=e(3336),A=e(4144);function F(r,t){1&r&&(o.TgZ(0,"mat-error"),o._uU(1,"El campo es requerido"),o.qZA())}function y(r,t){1&r&&(o.TgZ(0,"mat-error"),o._uU(1,"El campo es requerido"),o.qZA())}class l{constructor(t,i,g){this.authService=t,this.fb=i,this.router=g,this.loginForm=this.fb.group({username:["",n.kI.required],password:["",n.kI.required]})}login(){const t=this.loginForm.get("username")?.value,i=this.loginForm.get("password")?.value;this.authService.login(t,i),this.authService.authentticatedUser?this.router.navigate(["/dashboard"]):f().fire({icon:"error",title:"Oops...",text:"Usuario o contrase\xf1a incorrecta"})}isFieldInvalid(t){return this.loginForm.controls[t].errors&&this.loginForm.controls[t].touched}}l.\u0275fac=function(t){return new(t||l)(o.Y36(h.e),o.Y36(n.qu),o.Y36(m.F0))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-login-page"]],decls:23,vars:4,consts:[[1,"min-vh-100","d-flex","justify-content-center","align-items-center"],[1,"shadow-lg","p-5","mb-5","bg-body-tertiary","rounded"],[1,"mb-4"],[1,"text-primary","fw-semibold","font-monospace","fs-3","text-center"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["appearance","fill"],["matInput","","placeholder","pepe123","formControlName","username","required",""],[4,"ngIf"],["type","password","matInput","","placeholder","******","formControlName","password","required",""],[1,"row","d-flex","justify-content-center"],["type","submit","mat-fab","","extended","","color","primary",3,"disabled"]],template:function(t,i){1&t&&(o.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"p",3),o._uU(4,"LOGIN"),o.qZA()(),o.TgZ(5,"form",4),o.NdJ("ngSubmit",function(){return i.login()}),o.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),o._uU(9,"Username"),o.qZA(),o._UZ(10,"input",7),o.YNc(11,F,2,0,"mat-error",8),o.qZA()(),o.TgZ(12,"div",5)(13,"mat-form-field",6)(14,"mat-label"),o._uU(15,"Password"),o.qZA(),o._UZ(16,"input",9),o.YNc(17,y,2,0,"mat-error",8),o.qZA()(),o.TgZ(18,"div",10)(19,"button",11)(20,"mat-icon"),o._uU(21,"login"),o.qZA(),o._uU(22," Login "),o.qZA()()()()()),2&t&&(o.xp6(5),o.Q6J("formGroup",i.loginForm),o.xp6(6),o.Q6J("ngIf",i.isFieldInvalid("username")),o.xp6(6),o.Q6J("ngIf",i.isFieldInvalid("password")),o.xp6(2),o.Q6J("disabled",i.loginForm.invalid))},dependencies:[c.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,v.cs,u.KE,u.hX,u.TO,Z.Hw,A.Nt],encapsulation:2});const T=[{path:"",children:[{path:"login",component:l},{path:"**",redirectTo:"login"}]}];class a{}a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[m.Bz.forChild(T),m.Bz]});var U=e(898);class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[c.ez,a,n.UX,U.q]})}}]);
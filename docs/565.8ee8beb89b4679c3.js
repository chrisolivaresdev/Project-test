"use strict";(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[565],{6565:(J,m,a)=>{a.r(m),a.d(m,{AuthModule:()=>I});var s=a(6895),i=a(5479),r=a(4006),p=a(5226),h=a.n(p),o=a(8274),f=a(7556),g=a(4032);function v(n,l){if(1&n&&(o.TgZ(0,"option",11),o._uU(1),o.qZA()),2&n){const t=l.$implicit,e=o.oxw();o.Q6J("value",t)("selected",t===e.lang),o.xp6(1),o.hij(" ",t," ")}}function C(n,l){1&n&&(o.TgZ(0,"div",12),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&n&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function F(n,l){1&n&&(o.TgZ(0,"div",12),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&n&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}const d=function(n){return{invalid:n}},L=function(n,l){return{"btn-danger":n,"btn-primary":l}},A=[{path:"",children:[{path:"",component:(()=>{class n{constructor(t,e,c,u){this.authService=t,this.fb=e,this.router=c,this.translate=u,this.loginForm=this.fb.group({username:["",[r.kI.required,r.kI.minLength(1)]],password:["",[r.kI.required]]})}ngOnInit(){localStorage.getItem("token")&&this.router.navigateByUrl("/dashboard"),this.lang=localStorage.getItem("lang")?localStorage.getItem("lang"):"es",this.changeLanguage(this.lang)}changeLanguage(t){console.log("cambiando"),this.translate.use(t),localStorage.setItem("lang",t)}login(){this.authService.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value)?(this.router.navigateByUrl("/dashboard"),localStorage.setItem("token","true")):h().fire({icon:"error",title:this.translate.instant("upps"),text:this.translate.instant("incorrectCredential")})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(f.e),o.Y36(r.qu),o.Y36(i.F0),o.Y36(g.sK))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:18,vars:27,consts:[[1,"col-1","animate__animated","animate__fadeInLeft"],[1,"form-control","select-lang",3,"change"],["selectedLang",""],[3,"value","selected",4,"ngFor","ngForOf"],[1,"container","d-flex","flex-column","justify-content-center","align-items-center","gap-2","animate__animated","animate__fadeInLeft",2,"height","90vh"],[1,"title"],[1,"col-4","d-flex","flex-column","gap-2",3,"formGroup","ngSubmit"],["type","text","formControlName","username",1,"form-control",3,"placeholder","ngClass"],["style","color:red",4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"placeholder","ngClass"],["type","submit",1,"btn",3,"disabled","ngClass"],[3,"value","selected"],[2,"color","red"]],template:function(t,e){if(1&t){const c=o.EpF();o.TgZ(0,"div",0)(1,"select",1,2),o.NdJ("change",function(){o.CHM(c);const y=o.MAs(2);return o.KtG(e.changeLanguage(y.value))}),o.YNc(3,v,2,3,"option",3),o.qZA()(),o.TgZ(4,"div",4)(5,"h1",5),o._uU(6),o.ALo(7,"translate"),o.qZA(),o.TgZ(8,"form",6),o.NdJ("ngSubmit",function(){return e.login()}),o._UZ(9,"input",7),o.ALo(10,"translate"),o.YNc(11,C,3,3,"div",8),o._UZ(12,"input",9),o.ALo(13,"translate"),o.YNc(14,F,3,3,"div",8),o.TgZ(15,"button",10),o._uU(16),o.ALo(17,"translate"),o.qZA()()()}2&t&&(o.xp6(3),o.Q6J("ngForOf",e.translate.getLangs()),o.xp6(3),o.hij(" ",o.lcZ(7,12,"LogInCount")," "),o.xp6(2),o.Q6J("formGroup",e.loginForm),o.xp6(1),o.s9C("placeholder",o.lcZ(10,14,"name")),o.Q6J("ngClass",o.VKq(20,d,e.loginForm.controls.username.invalid&&e.loginForm.controls.username.touched&&e.loginForm.controls.username.errors)),o.xp6(2),o.Q6J("ngIf",e.loginForm.controls.username.invalid&&e.loginForm.controls.username.touched&&e.loginForm.controls.username.errors),o.xp6(1),o.s9C("placeholder",o.lcZ(13,16,"password")),o.Q6J("ngClass",o.VKq(22,d,e.loginForm.controls.password.invalid&&e.loginForm.controls.password.touched&&e.loginForm.controls.password.errors)),o.xp6(2),o.Q6J("ngIf",e.loginForm.controls.password.invalid&&e.loginForm.controls.password.touched&&e.loginForm.controls.password.errors),o.xp6(1),o.Q6J("disabled",e.loginForm.invalid)("ngClass",o.WLB(24,L,e.loginForm.invalid,e.loginForm.valid)),o.xp6(1),o.Oqu(o.lcZ(17,18,"logIn")))},dependencies:[s.mk,s.sg,s.O5,r._Y,r.YN,r.Kr,r.Fj,r.JJ,r.JL,r.sg,r.u,g.X$],styles:[".invalid[_ngcontent-%COMP%]{border-color:#dc3545}.invalid[_ngcontent-%COMP%]:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem #dc354540}"]}),n})()},{path:"**",redirectTo:""}]}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[i.Bz.forChild(A),i.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[s.ez,Z,r.UX,g.aw]}),n})()}}]);
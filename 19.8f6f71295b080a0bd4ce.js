(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{DVG5:function(t,e,a){"use strict";a.r(e),a.d(e,"ActivateModule",function(){return v});var n=a("ofXK"),i=a("sYmb"),r=a("tyNb"),c=a("SqtC"),o=a("fXoL"),s=a("qfBg"),l=a("F4oO");function b(t,e){1&t&&(o.Mb(0,"app-image-icon",8),o.ec(1,"translate")),2&t&&o.ic("url","mail.png")("alternateText",o.fc(1,3,"pages.admin.mail"))("parentClass","mail")}function p(t,e){1&t&&(o.Mb(0,"app-image-icon",8),o.ec(1,"translate")),2&t&&o.ic("url","error.png")("alternateText",o.fc(1,3,"pages.admin.error"))("parentClass","mail")}function u(t,e){1&t&&(o.Rb(0,"label",9),o.yc(1," pages.admin.emailVerified "),o.Qb())}function f(t,e){1&t&&(o.Rb(0,"label",9),o.yc(1," pages.admin.emailVerificationError "),o.Qb())}const d=[{path:"",component:(()=>{class t{constructor(t,e,a){this.activatedRoute=t,this.router=e,this.userService=a,this.activationId=null,this.error=!1}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{this.activationId=t.get("activationId"),this.activationId?this.userService.activateUser(this.activationId).subscribe(t=>{this.error=!t||!t.data}):this.error=!0})}navigateToLogin(){this.router.navigate([c.d+"/"+c.p])}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a),o.Lb(r.b),o.Lb(s.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-activate"]],decls:11,vars:4,consts:[[1,"row","h-100","activate-container"],[1,"col-12","d-flex","flex-column","justify-content-center","align-items-center"],[1,"icon-container","my-4"],[3,"url","alternateText","parentClass",4,"ngIf"],[1,"help-text-container","text-center","my-4"],["class","h5","translate","",4,"ngIf"],[1,"w-100","my-4"],["type","button","translate","",1,"btn","btn-success","tms-button",3,"click"],[3,"url","alternateText","parentClass"],["translate","",1,"h5"]],template:function(t,e){1&t&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Rb(2,"div",2),o.wc(3,b,2,5,"app-image-icon",3),o.wc(4,p,2,5,"app-image-icon",3),o.Qb(),o.Rb(5,"div",4),o.wc(6,u,2,0,"label",5),o.wc(7,f,2,0,"label",5),o.Qb(),o.Rb(8,"div",6),o.Rb(9,"button",7),o.bc("click",function(){return e.navigateToLogin()}),o.yc(10," pages.login.login "),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.yb(3),o.ic("ngIf",!e.error),o.yb(1),o.ic("ngIf",e.error),o.yb(2),o.ic("ngIf",!e.error),o.yb(1),o.ic("ngIf",e.error))},directives:[n.k,i.a,l.a],pipes:[i.d],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[r.e.forChild(d)],r.e]}),t})();var g=a("omz/");let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[n.b,i.c,m,g.a]]}),t})()}}]);
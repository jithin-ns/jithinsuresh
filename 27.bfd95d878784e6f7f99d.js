(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{hZUU:function(e,t,n){"use strict";n.r(t),n.d(t,"ListModule",function(){return R});var i=n("ofXK"),s=n("tyNb"),r=n("3Pt+"),a=n("DFWg"),c=n("SqtC"),o=n("LdLR"),l=n("ajRT"),b=n("fXoL"),d=n("1kSV"),u=n("sYmb"),p=n("qfBg"),f=n("F4oO");function g(e,t){if(1&e){const e=b.Sb();b.Rb(0,"div",8),b.Rb(1,"div",9),b.Rb(2,"div",10),b.Rb(3,"div",11),b.Rb(4,"label",12),b.yc(5),b.Qb(),b.Rb(6,"label",13),b.yc(7),b.Qb(),b.Qb(),b.Rb(8,"div",14),b.Rb(9,"a",15),b.bc("click",function(){b.rc(e);const n=t.$implicit;return b.dc().edit(n.id)}),b.Mb(10,"app-image-icon",16),b.ec(11,"translate"),b.Qb(),b.Rb(12,"a",17),b.bc("click",function(){b.rc(e);const n=t.$implicit;return b.dc().confirmDelete(n.id)}),b.Mb(13,"app-image-icon",16),b.ec(14,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()}if(2&e){const e=t.$implicit;b.yb(5),b.Bc("",e.firstName," ",e.lastName,""),b.yb(2),b.zc(e.email),b.yb(3),b.ic("url","edit.png")("alternateText",b.fc(11,9,"pages.admin.edit"))("parentClass","edit-offering"),b.yb(3),b.ic("url","trash.png")("alternateText",b.fc(14,11,"pages.admin.delete"))("parentClass","edit-offering")}}function m(e,t){1&e&&(b.Rb(0,"div",18),b.Rb(1,"label",19),b.yc(2,"general.nothingToList"),b.Qb(),b.Qb())}const h=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.router=e,this.modalService=t,this.translate=n,this.userService=i,this.formGroup=new r.f({}),this.pageOptions={search:"",page:1,limit:a.e,sortBy:"id",sortOrder:"asc"}}ngOnInit(){this.translate.get(["general.cancel","general.delete","general.confirm","pages.admin.deleteWarning"]).subscribe(e=>{this.translations=e}),this.getUsers()}getUsers(){this.userService.getUsers().subscribe(e=>{this.users=e&&e.data?Object(o.b)(e.data):[]})}adduser(){const e=[c.d,c.w,c.b].join("/");this.router.navigate([e])}edit(e){const t=[c.d,c.w,c.h,e].join("/");this.router.navigate([t])}confirmDelete(e){const t=this.modalService.open(l.a,{centered:!0});t.componentInstance.config={type:"danger",title:this.translations["general.delete"],body:this.translations["pages.admin.deleteWarning"],buttons:{cancel:{label:this.translations["general.cancel"]},submit:{label:this.translations["general.confirm"]}}},t.componentInstance.action.subscribe(n=>{"submit"===n&&this.delete(e),t.close()})}delete(e){this.userService.delete(e).subscribe(e=>{this.getUsers()})}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(s.b),b.Lb(d.h),b.Lb(u.e),b.Lb(p.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-list"]],decls:12,vars:2,consts:[[1,"w-100","h-100","d-flex","flex-column","user-list-container"],[1,"row"],[1,"col-12","py-4","text-center"],["translate","",1,"h4"],[1,"col-12"],["class","card my-2",4,"ngFor","ngForOf"],["class","col-12 pt-4 text-center",4,"ngIf"],["href","javascript:void(0);",1,"floating-add-btn",3,"click"],[1,"card","my-2"],[1,"card-body"],[1,"row","user-item"],[1,"col-9"],[1,"user-name"],[1,"user-email"],[1,"col-3","d-flex"],["href","javascript:void(0);",1,"mr-3",3,"click"],[3,"url","alternateText","parentClass"],["href","javascript:void(0);",3,"click"],[1,"col-12","pt-4","text-center"],["translate","",1,"h5"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Rb(2,"div",2),b.Rb(3,"p",3),b.yc(4,"pages.admin.users"),b.Qb(),b.Qb(),b.Qb(),b.Rb(5,"div",1),b.Rb(6,"div",4),b.wc(7,g,15,13,"div",5),b.Qb(),b.wc(8,m,3,0,"div",6),b.Qb(),b.Rb(9,"a",7),b.bc("click",function(){return t.adduser()}),b.Rb(10,"span"),b.yc(11,"+"),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.yb(7),b.ic("ngForOf",t.users),b.yb(1),b.ic("ngIf",!t.users||!t.users.length))},directives:[u.a,i.j,i.k,f.a],pipes:[u.d],styles:[".user-list-container[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-size:18px;font-weight:700}"]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({imports:[[s.e.forChild(h)],s.e]}),e})();var y=n("omz/");let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({imports:[[i.b,u.c,d.i,v,y.a]]}),e})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1950],{1950:(b,u,r)=>{r.r(u),r.d(u,{EventosPageModule:()=>p});var v=r(177),g=r(4341),i=r(4742),c=r(8986),e=r(4438),m=r(2651);function f(t,s){if(1&t){const o=e.RV6();e.j41(0,"ion-item")(1,"ion-label")(2,"h3",11),e.EFF(3),e.k0s(),e.j41(4,"h2"),e.EFF(5),e.k0s(),e.j41(6,"h2"),e.EFF(7),e.k0s(),e.j41(8,"h2"),e.EFF(9),e.k0s(),e.j41(10,"h2"),e.EFF(11),e.k0s()(),e.j41(12,"ion-button",12),e.bIt("click",function(){const a=e.eBV(o).$implicit,l=e.XpG();return e.Njj(l.borrarEvento(a))}),e.EFF(13," Eliminar evento "),e.k0s(),e.j41(14,"ion-button",12),e.bIt("click",function(){const a=e.eBV(o).$implicit,l=e.XpG();return e.Njj(l.modificarEvento(a))}),e.EFF(15," Modificar "),e.k0s()()}if(2&t){const o=s.$implicit;e.R7$(3),e.SpI("Id evento: ",o.id,""),e.R7$(2),e.SpI("Nombre evento: ",o.nombre,""),e.R7$(2),e.SpI("Fecha del evento: ",o.fecha,""),e.R7$(2),e.SpI("Lugar del evento: ",o.lugar,""),e.R7$(2),e.SpI("Descripcion del evento: ",o.descripcion,"")}}const d=[{path:"",component:(()=>{var t;class s{constructor(n,a){this.apieventos=n,this.router=a,this.eventos=[]}ngOnInit(){this.apieventos.geteventos().subscribe(n=>{this.eventos=n})}borrarEvento(n){this.apieventos.deleteEvento(n).subscribe(),this.router.navigateByUrl("eventos")}modificarEvento(n){this.router.navigate(["/modificar-evento"],{queryParams:{eventos:JSON.stringify(n)}})}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(m.f),e.rXU(c.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-eventos"]],decls:20,vars:3,consts:[[3,"translucent"],["slot","start"],["defaultHref","/","text","","color","dark"],[3,"fullscreen"],[4,"ngFor","ngForOf"],["color","warning"],["slot","end"],["fill","clear"],["name","logo-instagram"],["name","logo-facebook"],["name","logo-twitter"],[2,"text-align","right"],["expand","block","fill","clear","shape","round",3,"click"]],template:function(n,a){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Eventos"),e.k0s()()(),e.j41(6,"ion-content",3)(7,"ion-list"),e.DNE(8,f,16,5,"ion-item",4),e.k0s()(),e.j41(9,"ion-footer")(10,"ion-toolbar",5)(11,"ion-title"),e.EFF(12,"Duoc UC"),e.k0s(),e.j41(13,"ion-buttons",6)(14,"ion-button",7),e.nrm(15,"ion-icon",8),e.k0s(),e.j41(16,"ion-button",7),e.nrm(17,"ion-icon",9),e.k0s(),e.j41(18,"ion-button",7),e.nrm(19,"ion-icon",10),e.k0s()()()()),2&n&&(e.Y8G("translucent",!0),e.R7$(6),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("ngForOf",a.eventos))},dependencies:[v.Sq,i.Jm,i.QW,i.W9,i.M0,i.eU,i.iq,i.uz,i.he,i.nf,i.BC,i.ai,i.el],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: #f8b31c}ion-title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;color:#000;font-weight:700}ion-content[_ngcontent-%COMP%]{--background: #1e1e1e}"]}),s})()}];let E=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(d),c.iI]}),s})(),p=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[v.MD,g.YN,i.bv,E]}),s})()}}]);
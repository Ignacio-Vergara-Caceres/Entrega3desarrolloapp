"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1169],{1169:(P,u,i)=>{i.r(u),i.d(u,{InicioPageModule:()=>I});var d=i(177),m=i(4341),t=i(4742),l=i(8986),g=i(467),n=i(4438);const f=[{path:"",component:(()=>{var o;class a{constructor(e,c,s){this.menucontroller=e,this.alertcontroller=c,this.router=s}ngOnInit(){}mostrarMenu(){this.menucontroller.open("first")}mensajeIni(){var e=this;return(0,g.A)(function*(){yield(yield e.alertcontroller.create({header:"Redirigiendo al inicio de sesion",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("El usuario ha cancelado la acci\xf3n")}},{text:"OK",role:"confirm",handler:()=>{console.log("El usuario ha confirmado la acci\xf3n"),e.router.navigate(["/alert"])}}]})).present()})()}mensajeReg(){var e=this;return(0,g.A)(function*(){yield(yield e.alertcontroller.create({header:"Redirigiendo al registro de usuario",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("El usuario ha cancelado la acci\xf3n")}},{text:"OK",role:"confirm",handler:()=>{console.log("El usuario ha confirmado la acci\xf3n"),e.router.navigate(["/card"])}}]})).present()})()}}return(o=a).\u0275fac=function(e){return new(e||o)(n.rXU(t._t),n.rXU(t.hG),n.rXU(l.Ix))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-inicio"]],decls:23,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["src","assets/logo_duoc.png",1,"imagen"],[1,"centrar-boton"],["fill","solid","shape","round",3,"click"],["color","warning"],["slot","end"],["fill","clear"],["name","logo-instagram"],["name","logo-facebook"],["name","logo-twitter"]],template:function(e,c){1&e&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n.EFF(3,"Inicio"),n.k0s()()(),n.j41(4,"ion-content",1)(5,"ion-card"),n.nrm(6,"ion-img",2),n.k0s(),n.j41(7,"div",3)(8,"ion-button",4),n.bIt("click",function(){return c.mensajeIni()}),n.EFF(9," Iniciar Sesi\xf3n "),n.k0s(),n.j41(10,"ion-button",4),n.bIt("click",function(){return c.mensajeReg()}),n.EFF(11," Registrar Usuario "),n.k0s()()(),n.j41(12,"ion-footer")(13,"ion-toolbar",5)(14,"ion-title"),n.EFF(15,"Duoc UC"),n.k0s(),n.j41(16,"ion-buttons",6)(17,"ion-button",7),n.nrm(18,"ion-icon",8),n.k0s(),n.j41(19,"ion-button",7),n.nrm(20,"ion-icon",9),n.k0s(),n.j41(21,"ion-button",7),n.nrm(22,"ion-icon",10),n.k0s()()()()),2&e&&(n.Y8G("translucent",!0),n.R7$(4),n.Y8G("fullscreen",!0))},dependencies:[t.Jm,t.QW,t.b_,t.W9,t.M0,t.eU,t.iq,t.KW,t.BC,t.ai],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: #f8b31c}ion-title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;color:#000;font-weight:700}ion-content[_ngcontent-%COMP%]{--background: #1e1e1e}ion-card[_ngcontent-%COMP%]{margin-top:60%;border-radius:15px}ion-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.imagen[_ngcontent-%COMP%]{max-width:100%;height:auto}.centrar-boton[_ngcontent-%COMP%]{text-align:center}"]}),a})()}];let h=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[l.iI.forChild(f),l.iI]}),a})(),I=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[d.MD,m.YN,t.bv,h]}),a})()}}]);
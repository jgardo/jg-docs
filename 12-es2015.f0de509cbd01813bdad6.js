(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3pp/":function(e,t,r){"use strict";r.r(t),r.d(t,"FilePageModule",(function(){return Q}));var n=r("TEn/"),i=r("ofXK"),s=r("3Pt+"),o=r("tyNb"),c=r("fXoL");function l(e,t){if(1&e&&(c.Rb(0,"pre"),c.pc(1),c.Qb()),2&e){const e=c.bc();c.Eb(1),c.qc(e.file.content)}}let a=(()=>{class e{constructor(){}ngOnInit(){}setFile(e){this.file=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-default-file-viewer"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&c.nc(0,l,2,1,"pre",0),2&e&&c.ec("ngIf",t.file)},directives:[i.i],styles:["pre[_ngcontent-%COMP%]{color:var(--color)}"]}),e})();var f=r("Tr1Y");let u=(()=>{class e{constructor(){}ngOnInit(){}setFile(e){this.file=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-markdown-file-viewer"]],decls:1,vars:1,consts:[["name","Content","mode","preview","height","100%",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(c.Rb(0,"md-editor",0),c.Zb("ngModelChange",(function(e){return t.file.content=e})),c.Qb()),2&e&&c.ec("ngModel",t.file.content)},directives:[f.b,s.e,s.f],styles:["md-editor .preview-panel{background-color:initial!important}"]}),e})();var h=r("mrSG"),b=r("jhN1");function d(e,t){if(1&e&&c.Pb(0,"iframe",2),2&e){const e=c.bc();c.ec("src",e.sanitizedUrl,c.ic)}}function p(e,t){if(1&e){const e=c.Sb();c.Rb(0,"div"),c.Rb(1,"p"),c.pc(2," Url otworzony w nowym oknie przegl\u0105darki. "),c.Qb(),c.Rb(3,"ion-button",3),c.Zb("click",(function(){return c.hc(e),c.bc().openInBrowser()})),c.Pb(4,"ion-icon",4),c.pc(5," Otw\xf3rz ponownie "),c.Qb(),c.Qb()}}let m=(()=>{class e{constructor(e,t,r){this.sanitizer=e,this.actionSheetController=t,this.location=r,this.mode="unknown"}static calculateUrl(e){const t=e.split("\n").filter(e=>e.startsWith("URL"))[0];return t.substr(t.indexOf("=")+1).trim()}ngOnInit(){this.presentActionSheet()}presentActionSheet(){return Object(h.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:"Url",buttons:[{text:"Otw\xf3rz w nowym oknie",role:"selected",icon:"open",handler:()=>{this.mode="in-browser",this.openInBrowser()}},{text:"Otw\xf3rz w aplikacji",icon:"eye",handler:()=>{this.mode="in-app"}},{text:"Anuluj",icon:"close",role:"cancel",handler:()=>{this.location.back()}}]});yield e.present()}))}setFile(t){this.file=t,this.url=e.calculateUrl(t.content),this.sanitizedUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)}openInBrowser(){window.open(this.url)}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(b.b),c.Ob(n.a),c.Ob(i.f))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-url-file-viewer"]],decls:2,vars:2,consts:[["width","100%","height","97%","frameborder","0","scrolling","no",3,"src",4,"ngIf"],[4,"ngIf"],["width","100%","height","97%","frameborder","0","scrolling","no",3,"src"],["expand","block",3,"click"],["slot","start","name","eye"]],template:function(e,t){1&e&&(c.nc(0,d,1,1,"iframe",0),c.nc(1,p,6,0,"div",1)),2&e&&(c.ec("ngIf","in-app"===t.mode),c.Eb(1),c.ec("ngIf","in-browser"===t.mode))},directives:[i.i,n.f,n.l],styles:["iframe[_ngcontent-%COMP%]{overflow:hidden;border:none}"]}),e})(),v=(()=>{class e{constructor(e){this.factoryResolver=e}addViewer(e,t){const r=this.resolveComponentType(t),n=this.factoryResolver.resolveComponentFactory(r).create(e.parentInjector),i=n.instance;return i.setFile(t),e.insert(n.hostView),i}resolveComponentType(e){return e.fileSystemEntry.name.endsWith(".md")?u:e.fileSystemEntry.name.endsWith(".url")?m:a}}return e.\u0275fac=function(t){return new(t||e)(c.Vb(c.l))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac}),e})();var y=r("bOdf"),w=r("Cfvw"),S=r("7DJ4"),g=r("YZAu"),R=r("I/6E");const O=["dynamic"];function k(e,t){}let F=(()=>{class e{constructor(e,t,r,n,i,s,o){this.fileViewerProviderService=e,this.route=t,this.fileSystemFacadeCacheService=r,this.toastService=n,this.refresherService=i,this.router=s,this.location=o}ngAfterViewInit(){this.currentViever=this.fileViewerProviderService.addViewer(this.viewContainerRef,this.file)}ngOnInit(){this.routeDataSubscription=this.route.data.subscribe(e=>{this.file=e.file,this.fileSystemFacade=e.fileSystemFacade,this.currentViever&&this.currentViever.setFile(this.file)})}ngOnDestroy(){this.routeDataSubscription.unsubscribe()}goToItem(e){const t=e.path.substr(1).split("/");this.router.navigate([this.getFileSystemPrefix()].concat(t))}getFileSystemPrefix(){return"/tabs/home/file-system/"+this.file.fileSystemEntry.dataSource.id}doRefresh(e){this.fileSystemFacadeCacheService.refresh(this.fileSystemFacade).pipe(Object(y.a)(()=>{const e=(this.file.fileSystemEntry.path+"-details").split("/");return Object(w.a)(this.router.navigate([this.getFileSystemPrefix()].concat(e),{skipLocationChange:!0,state:{refreshTime:new Date}}))}),this.refresherService.finishRefresher(e),this.toastService.catchErrorAndShowToast()).subscribe()}back(){this.location.back()}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(v),c.Ob(o.a),c.Ob(S.a),c.Ob(g.a),c.Ob(R.a),c.Ob(o.g),c.Ob(i.f))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-file"]],viewQuery:function(e,t){var r;1&e&&c.sc(O,!0,c.U),2&e&&c.gc(r=c.ac())&&(t.viewContainerRef=r.first)},decls:12,vars:4,consts:[[3,"translucent"],["slot","start"],[3,"click"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["dynamic",""]],template:function(e,t){1&e&&(c.Rb(0,"ion-header",0),c.Rb(1,"ion-toolbar"),c.Rb(2,"ion-buttons",1),c.Rb(3,"ion-back-button",2),c.Zb("click",(function(){return t.back()})),c.Qb(),c.Qb(),c.Rb(4,"ion-title"),c.Rb(5,"ion-label"),c.pc(6),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(7,"ion-content",3),c.Rb(8,"ion-refresher",4),c.Zb("ionRefresh",(function(e){return t.doRefresh(e)})),c.Pb(9,"ion-refresher-content"),c.Qb(),c.nc(10,k,0,0,"ng-template",null,5,c.oc),c.Qb()),2&e&&(c.ec("translucent",!0),c.Eb(6),c.rc(" /",null==t.file||null==t.file.fileSystemEntry?null:t.file.fileSystemEntry.dataSource.id,"",null==t.file||null==t.file.fileSystemEntry?null:t.file.fileSystemEntry.path," "),c.Eb(1),c.ec("fullscreen",!0))},directives:[n.k,n.G,n.g,n.d,n.e,n.F,n.s,n.h,n.v,n.w],styles:[""]}),e})();var I=r("Yn41");const C=[{path:"",children:[{path:"**",component:F,runGuardsAndResolvers:"always",resolve:{fileSystemFacade:I.a,file:(()=>{class e{constructor(e,t){this.toastService=e,this.fileSystemFacadeResolverService=t}resolve(e,t){const r=e.url.map(e=>e.path).join("/"),n=r.endsWith("-details")?r.substr(0,r.length-"-details".length):r,i={};return this.fileSystemFacadeResolverService.resolve(e,t).pipe(Object(y.a)(e=>this.resolveForUrlAndParamMap(e,n,i)),this.toastService.catchErrorAndShowToast())}resolveForUrlAndParamMap(e,t,r){return e.resolveFile(t)}}return e.\u0275fac=function(t){return new(t||e)(c.Vb(g.a),c.Vb(I.a))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]}];let E=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[o.i.forChild(C)],o.i]}),e})();var P=r("5M1D");let Q=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},providers:[v],imports:[[n.H,i.b,s.a,E,f.a,P.a]]}),e})()}}]);
import{a as ne,b as ae,c as se}from"./chunk-I6HOWSEJ.js";import{a as re}from"./chunk-GT4ADE3S.js";import{a as oe}from"./chunk-HX5QGWPW.js";import{$a as P,A as E,B as T,Ba as g,Bb as Y,Ca as N,Da as B,Db as ee,Ga as j,Ib as te,La as u,Ma as k,Na as w,O as L,P as I,Pa as z,Qa as V,R,Ra as d,Sa as n,T as s,Ta as o,Tb as ie,Ua as m,X as F,Y as O,Ya as v,Z as S,Za as $,_ as W,a as x,ab as h,b as M,ba as A,db as U,eb as H,fb as G,gb as Q,ha as _,hb as y,ib as q,kb as K,la as f,nb as Z,p as D,ra as c,tb as J,ub as X,xb as b}from"./chunk-RDHB6DZO.js";var ce=(()=>{class t{constructor(){this.apiUrl="https://picsum.photos/v2/list",this.http=s(ee)}getPhotos(e){let r=200+Math.random()*100,{page:i,limit:a}=e;return this.http.get(this.apiUrl,{params:{page:i,limit:a}}).pipe(D(ue=>ue.map(p=>({id:p.id,trackId:`${p.id}${p.author}`,author:p.author,url:`https://picsum.photos/id/${p.id}/1200/900.webp`,thumbUrl:`https://picsum.photos/id/${p.id}/400/300.webp`}))),T(r))}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var me=(()=>{class t{constructor(){this.scrollDisabled=X(!1),this.scrolled=J(),this.el=s(f)}ngOnInit(){this.sentinel=document.createElement("div"),this.el.nativeElement.appendChild(this.sentinel),this.observer=new IntersectionObserver(([e])=>{e.isIntersecting&&!this.scrollDisabled()&&(console.log(this.scrollDisabled()),this.scrolled.emit())}),this.observer.observe(this.sentinel)}ngOnDestroy(){this.observer.disconnect()}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275dir=B({type:t,selectors:[["","appInfiniteScroll",""]],inputs:{scrollDisabled:[1,"scrollDisabled"]},outputs:{scrolled:"scrolled"}})}}return t})();var he=["determinateSpinner"];function _e(t,l){if(t&1&&(S(),n(0,"svg",11),m(1,"circle",12),o()),t&2){let e=h();u("viewBox",e._viewBox()),c(),y("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),u("r",e._circleRadius())}}var fe=new R("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:le})}),le=100,ve=10,de=(()=>{class t{_elementRef=s(f);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(fe),r=re(),i=this._elementRef.nativeElement;this._noopAnimations=r==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&r==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=le;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ve)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=g({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,i){if(r&1&&U(he,5),r&2){let a;H(a=G())&&(i._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,i){r&2&&(u("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),K("mat-"+i.color),y("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),q("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",b],diameter:[2,"diameter","diameter",b],strokeWidth:[2,"strokeWidth","strokeWidth",b]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,i){if(r&1&&(j(0,_e,2,8,"ng-template",null,0,Z),n(2,"div",2,1),S(),n(4,"svg",3),m(5,"circle",4),o()(),W(),n(6,"div",5)(7,"div",6)(8,"div",7),v(9,8),o(),n(10,"div",9),v(11,8),o(),n(12,"div",10),v(13,8),o()()()),r&2){let a=Q(1);c(4),u("viewBox",i._viewBox()),c(),y("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),u("r",i._circleRadius()),c(4),d("ngTemplateOutlet",a),c(2),d("ngTemplateOutlet",a),c(2),d("ngTemplateOutlet",a)}},dependencies:[Y],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var pe=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=N({type:t});static \u0275inj=I({imports:[ie]})}return t})();var ge=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-loader"]],decls:2,vars:0,consts:[[1,"loader"]],template:function(r,i){r&1&&(n(0,"div",0),m(1,"mat-spinner"),o())},dependencies:[pe,de],styles:[".loader[_ngcontent-%COMP%]{height:24px;width:24px}"]})}}return t})();var be=(t,l)=>l.trackId;function Ce(t,l){if(t&1){let e=$();n(0,"app-photo-card",3),P("photoClick",function(i){F(e);let a=h(2);return O(a.makeFavorite(i))}),o()}if(t&2){let e=l.$implicit,r=h(2);d("photo",e)("favorite",r.isFavorite(e.id))}}function Se(t,l){t&1&&m(0,"app-loader")}function ke(t,l){if(t&1&&(n(0,"app-card-grid"),z(1,Ce,1,2,"app-photo-card",2,be),o(),k(3,Se,1,0,"app-loader")),t&2){let e=h();c(),V(e.photoList()),c(2),w(e.isPaginateLoading()?3:-1)}}function we(t,l){t&1&&(n(0,"div",1),m(1,"app-loader"),o())}var it=(()=>{class t{constructor(){this.photoList=_([]),this.isPaginateLoading=_(!1),this.isLoading=_(!1),this.filters=_(te),this.photosService=s(ce),this.favoritesService=s(oe),this.destroyRef=s(A)}ngOnInit(){this.getPhotos()}paginatePhotos(){this.isLoading()||(this.isPaginateLoading.set(!0),this.getPhotos(!0))}isFavorite(e){return this.favoritesService.isFavorite(e)}makeFavorite(e){this.favoritesService.addFavorite(e)}getPhotos(e=!1){e?this.filters.update(r=>M(x({},r),{page:r.page+1})):this.isLoading.set(!0),this.photosService.getPhotos(this.filters()).pipe(E(1),ne(this.destroyRef)).subscribe(r=>{e?(this.photoList.update(i=>[...i,...r]),this.isPaginateLoading.set(!1)):(this.photoList.set(r),this.isLoading.set(!1))})}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-photos"]],decls:3,vars:2,consts:[["appInfiniteScroll","",1,"page","scrollable-page",3,"scrolled","scrollDisabled"],[1,"loading-page"],[3,"photo","favorite"],[3,"photoClick","photo","favorite"]],template:function(r,i){r&1&&(n(0,"div",0),P("scrolled",function(){return i.paginatePhotos()}),k(1,ke,4,1)(2,we,2,0,"div",1),o()),r&2&&(d("scrollDisabled",i.isLoading()||i.isPaginateLoading()),c(),w(i.isLoading()?2:1))},dependencies:[ae,me,ge,se],styles:[".loading-page[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:400px}"]})}}return t})();export{it as PhotosComponent};

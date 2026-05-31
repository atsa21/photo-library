import{$a as it,A as X,Ba as f,Ca as E,D as Y,Da as et,Db as ft,G as K,Gb as gt,K as J,Kb as H,L as M,La as nt,M as L,Ma as rt,Na as ot,O as Q,Ob as b,P as S,R as C,Ra as at,Rb as pt,S as I,Sa as z,T as c,Ta as F,Tb as T,a as j,aa as w,b as O,ba as x,bb as v,cb as _,d as $,f as q,fa as D,ha as P,ib as A,jb as st,kb as ct,l as p,la as Z,lb as dt,m as V,oa as h,p as l,pa as tt,qb as N,ra as U,sb as lt,tb as mt,u as W,ub as m,wb as ut,y as G}from"./chunk-RDHB6DZO.js";function ee(r){r||(r=c(x));let i=new q(t=>{if(r.destroyed){t.next();return}return r.onDestroy(t.next.bind(t))});return t=>t.pipe(J(i))}function B(r,i){let e=!i?.manualCleanup?i?.injector?.get(x)??c(x):null,n=Dt(i?.equal),o;i?.requireSync?o=P({kind:0},{equal:n}):o=P({kind:1,value:i?.initialValue},{equal:n});let a,s=r.subscribe({next:d=>o.set({kind:1,value:d}),error:d=>{o.set({kind:2,error:d}),a?.()},complete:()=>{a?.()}});if(i?.requireSync&&o().kind===0)throw new L(601,!1);return a=e?.onDestroy(s.unsubscribe.bind(s)),N(()=>{let d=o();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new L(601,!1)}},{equal:i?.equal})}function Dt(r=Object.is){return(i,t)=>i.kind===1&&t.kind===1&&r(i.value,t.value)}var Et=["*"];var Ft=new C("MAT_CARD_CONFIG"),ht=(()=>{class r{appearance;constructor(){let t=c(Ft,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=f({type:r,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,n){e&2&&A("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Et,decls:1,vars:0,template:function(e,n){e&1&&(v(),_(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return r})();var vt=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275dir=et({type:r,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return r})();var _t=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=E({type:r});static \u0275inj=S({imports:[T]})}return r})();function bt(r){return Error(`Unable to find icon with the name "${r}"`)}function Nt(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ct(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function It(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var u=class{url;svgText;options;svgElement=null;constructor(i,t,e){this.url=i,this.svgText=t,this.options=e}},Mt=(()=>{class r{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new u(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let a=this._sanitizer.sanitize(h.HTML,n);if(!a)throw It(n);let s=b(a);return this._addSvgIconConfig(t,e,new u("",s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new u(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(h.HTML,e);if(!o)throw It(e);let a=b(o);return this._addSvgIconSetConfig(t,new u("",a,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(h.RESOURCE_URL,t);if(!e)throw Ct(t);let n=this._cachedIconsByUrl.get(e);return n?p(R(n)):this._loadSvgIconFromConfig(new u(t,null)).pipe(M(o=>this._cachedIconsByUrl.set(e,o)),l(o=>R(o)))}getNamedSvgIcon(t,e=""){let n=yt(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):V(bt(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?p(R(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(l(e=>R(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return p(n);let o=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(G(s=>{let g=`Loading icon set URL: ${this._sanitizer.sanitize(h.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(g)),p(null)})));return W(o).pipe(l(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw bt(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(M(e=>t.svgText=e),l(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?p(null):this._fetchIcon(t).pipe(M(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,n);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),n);let s=this._svgElementFromString(b("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(b("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){let{name:a,value:s}=n[o];a!=="id"&&e.setAttribute(a,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw Nt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize(h.RESOURCE_URL,e);if(!a)throw Ct(e);let s=this._inProgressUrlFetches.get(a);if(s)return s;let d=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(l(g=>b(g)),Y(()=>this._inProgressUrlFetches.delete(a)),K());return this._inProgressUrlFetches.set(a,d),d}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(yt(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return Tt(o)?new u(o.url,null,o.options):new u(o,null)}}static \u0275fac=function(e){return new(e||r)(I(ft,8),I(gt),I(w,8),I(D))};static \u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function R(r){return r.cloneNode(!0)}function yt(r,i){return r+":"+i}function Tt(r){return!!(r.url&&r.options)}var kt=["*"],Rt=new C("MAT_ICON_DEFAULT_OPTIONS"),jt=new C("mat-icon-location",{providedIn:"root",factory:()=>{let r=c(w),i=r?r.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),St=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ot=St.map(r=>`[${r}]`).join(", "),Lt=/^url\(['"]?#(.*?)['"]?\)$/,wt=(()=>{class r{_elementRef=c(Z);_iconRegistry=c(Mt);_location=c(jt);_errorHandler=c(D);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=$.EMPTY;constructor(){let t=c(new lt("aria-hidden"),{optional:!0}),e=c(Rt,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(a=>{o.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Ot),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)St.forEach(a=>{let s=e[o],d=s.getAttribute(a),g=d?d.match(Lt):null;if(g){let y=n.get(s);y||(y=[],n.set(s,y)),y.push({name:a,value:g[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(X(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=f({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(nt("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),ct(n.color?"mat-"+n.color:""),A("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ut],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:kt,decls:1,vars:0,template:function(e,n){e&1&&(v(),_(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return r})(),xt=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=E({type:r});static \u0275inj=S({imports:[T]})}return r})();function Ut(r,i){r&1&&(z(0,"mat-icon",2),dt(1,"favorite"),F())}var Pe=(()=>{class r{constructor(){this.photo=m.required(),this.favorite=m(!1),this.photoClick=mt()}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=f({type:r,selectors:[["app-photo-card"]],inputs:{photo:[1,"photo"],favorite:[1,"favorite"]},outputs:{photoClick:"photoClick"},decls:3,vars:3,consts:[["appearance","outlined"],["mat-card-image","","loading","lazy","tabindex","0",3,"load","click","keydown.enter","src","alt"],[1,"favorite-icon"]],template:function(e,n){e&1&&(z(0,"mat-card",0)(1,"img",1),it("load",function(a){return a.target.classList.add("loaded")})("click",function(){return n.photoClick.emit(n.photo())})("keydown.enter",function(){return n.photoClick.emit(n.photo())}),F(),rt(2,Ut,2,0,"mat-icon",2),F()),e&2&&(U(),at("src",n.photo().thumbUrl,tt)("alt",n.photo().author),U(),ot(n.favorite()?2:-1))},dependencies:[_t,ht,vt,xt,wt],styles:["[_nghost-%COMP%]{display:block;width:100%}mat-card[_ngcontent-%COMP%]{overflow:hidden;position:relative;transition:transform .2s ease,box-shadow .2s ease}mat-card[_ngcontent-%COMP%]:not(:has(mat-icon)):hover{transform:translateY(-2px);box-shadow:0 8px 24px #0000001f;cursor:pointer}mat-card[_ngcontent-%COMP%]:not(:has(mat-icon)):active{transform:scale(.97);box-shadow:none}.favorite-icon[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;color:#da4a40;filter:drop-shadow(0 1px 3px rgba(0,0,0,.4));pointer-events:none}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:#e0e0e0;transition:opacity .3s,transform .3s ease;opacity:0;width:100%;aspect-ratio:4/3;object-fit:cover}mat-card[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%]{opacity:1}mat-card[_ngcontent-%COMP%]:active   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.03)}"]})}}return r})();var zt=["*"],We=(()=>{class r{constructor(){this.columns=m(3),this.rows=m(1),this.gap=m(8),this.tabletColumn=m(2),this.mobileColumn=m(1),this.breakpointObserver=c(pt),this.isTablet=B(this.breakpointObserver.observe(H.tablet).pipe(l(({matches:t})=>t)),{initialValue:!1}),this.isMobile=B(this.breakpointObserver.observe(H.mobile).pipe(l(({matches:t})=>t)),{initialValue:!1}),this.hostStyle=N(()=>{let t=this.isMobile()?this.mobileColumn():this.isTablet()&&this.tabletColumn()?this.tabletColumn():this.columns();return O(j({display:"grid","grid-template-columns":`repeat(${t}, 1fr)`},this.rows()?{"grid-template-rows":`repeat(${this.rows()}, 1fr)`}:{}),{gap:`${this.gap()}px`})})}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=f({type:r,selectors:[["app-card-grid"]],hostVars:2,hostBindings:function(e,n){e&2&&st(n.hostStyle())},inputs:{columns:[1,"columns"],rows:[1,"rows"],gap:[1,"gap"],tabletColumn:[1,"tabletColumn"],mobileColumn:[1,"mobileColumn"]},ngContentSelectors:zt,decls:1,vars:0,template:function(e,n){e&1&&(v(),_(0))},encapsulation:2})}}return r})();export{ee as a,Pe as b,We as c};

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,I=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),q=new WeakMap;let it=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&q.set(e,t))}return t}toString(){return this.cssText}};const at=r=>new it(typeof r=="string"?r:r+"",void 0,W),lt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new it(e,r,W)},dt=(r,t)=>{if(I)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},K=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return at(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:ut,getOwnPropertyDescriptor:$t,getOwnPropertyNames:ft,getOwnPropertySymbols:_t,getPrototypeOf:gt}=Object,_=globalThis,J=_.trustedTypes,yt=J?J.emptyScript:"",L=_.reactiveElementPolyfillSupport,w=(r,t)=>r,M={toAttribute(r,t){switch(t){case Boolean:r=r?yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},V=(r,t)=>!pt(r,t),Z={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:V};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ut(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=$t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,i=[...ft(e),..._t(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:M).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:M;this._$Em=s,this[s]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??V)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[w("elementProperties")]=new Map,b[w("finalized")]=new Map,L==null||L({ReactiveElement:b}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,R=x.trustedTypes,G=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,rt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+f,mt=`<${ot}>`,m=document,C=()=>m.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",nt=Array.isArray,At=r=>nt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,g=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,ht=/^(?:script|style|textarea|title)$/i,bt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),vt=bt(1),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),et=new WeakMap,y=m.createTreeWalker(m,129);function ct(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=S;for(let c=0;c<e;c++){const h=r[c];let l,p,a=-1,u=0;for(;u<h.length&&(n.lastIndex=u,p=n.exec(h),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=Q:p[1]!==void 0?n=X:p[2]!==void 0?(ht.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??S,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,l=p[1],n=p[3]===void 0?g:p[3]==='"'?tt:Y):n===tt||n===Y?n=g:n===Q||n===X?n=S:(n=g,s=void 0);const $=n===g&&r[c+1].startsWith("/>")?" ":"";o+=n===S?h+mt:a>=0?(i.push(l),h.slice(0,a)+rt+h.slice(a)+f+$):h+f+(a===-2?c:$)}return[ct(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,h=this.parts,[l,p]=Et(t,e);if(this.el=O.createElement(l,i),y.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=y.nextNode())!==null&&h.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(rt)){const u=p[n++],$=s.getAttribute(a).split(f),H=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:H[2],strings:$,ctor:H[1]==="."?wt:H[1]==="?"?xt:H[1]==="@"?Pt:k}),s.removeAttribute(a)}else a.startsWith(f)&&(h.push({type:6,index:o}),s.removeAttribute(a));if(ht.test(s.tagName)){const a=s.textContent.split(f),u=a.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let $=0;$<u;$++)s.append(a[$],C()),y.nextNode(),h.push({type:2,index:++o});s.append(a[u],C())}}}else if(s.nodeType===8)if(s.data===ot)h.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf(f,a+1))!==-1;)h.push({type:7,index:o}),a+=f.length-1}o++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var n,c;if(t===v)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??m).importNode(e,!0);y.currentNode=s;let o=y.nextNode(),n=0,c=0,h=i[0];for(;h!==void 0;){if(n===h.index){let l;h.type===2?l=new F(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new Ct(o,this,t)),this._$AV.push(l),h=i[++c]}n!==(h==null?void 0:h.index)&&(o=y.nextNode(),n++)}return y.currentNode=m,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):At(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(ct(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new St(s,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new O(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new F(this.S(C()),this.S(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==v,n&&(this._$AH=t);else{const c=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=E(this,c[i+h],e,h),l===v&&(l=this._$AH[h]),n||(n=!U(l)||l!==this._$AH[h]),l===d?t=d:t!==d&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class xt extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Pt extends k{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===v)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const D=x.litHtmlPolyfillSupport;D==null||D(O,F),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.1.4");const Ut=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new F(t.insertBefore(C(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return v}}var st;P._$litElement$=!0,P.finalized=!0,(st=globalThis.litElementHydrateSupport)==null||st.call(globalThis,{LitElement:P});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:V},Tt=(r=Ft,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,h,r)},init(c){return c!==void 0&&this.P(n,void 0,r),c}}}if(i==="setter"){const{name:n}=e;return function(c){const h=this[n];t.call(this,c),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+i)};function z(r){return(t,e)=>typeof e=="object"?Tt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}var Ht=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,T=(r,t,e,i)=>{for(var s=i>1?void 0:i?Nt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ht(t,e,s),s};let A=class extends P{constructor(){super(...arguments),this.type="primary",this.label="Button",this.size="md",this.disabled=!1}render(){return vt`
      <button
        class="button ${this.size} ${this.type}"
      >${this.label}</button>
    `}};A.styles=lt`
    .button {
      border: none;
      cursor: pointer;
      border-radius: 5px;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: "Inter", sans-serif;
    }
    .button.xs {
      height: 28px;
      padding-inline: 10px;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }
    .button.sm {
      height: 32px;
      padding-inline: 10px;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }
    .button.md {
      height: 40px;
      padding-inline: 16px;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
    .button.lg {
      height: 48px;
      padding-inline: 22px;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
    .button.primary {
      background-color: #0375F8;
      color: #FFFFFF;
      transition: background-color .3s ease;
    }
    .button.primary:hover {
      background-color: #4B96FC;
    }
    .button.primary:active {
      background-color: #005FDC;
    }
    .button.secondary {
      background-color: #070E27;
      color: #FFFFFF;
    }
    .button.secondary:hover {
      background-color: #0F193E;
    }
    .button.secondary:active {
      background-color: #000000;
    }
    .button.error {
      background-color: #ED3A37;
      color: #FFFFFF;
    }
    .button.error:hover {
      background-color: #F46360;
    }
    .button.error:active {
      background-color: #BF2B2B;
    }
    .button.warning {
      background-color: #DEA722;
      color: #FFFFFF;
    }
    .button.warning:hover {
      background-color: #F4C449;
    }
    .button.warning:active {
      background-color: #C8931E;
    }
    .button.success {
      background-color: #32B375;
      color: #FFFFFF;
    }
    .button.success:hover {
      background-color: #4BC88E;
    }
    .button.success:active {
      background-color: #247951;
    }
  `;T([z()],A.prototype,"type",2);T([z()],A.prototype,"label",2);T([z()],A.prototype,"size",2);T([z()],A.prototype,"disabled",2);A=T([Ot("button-component")],A);
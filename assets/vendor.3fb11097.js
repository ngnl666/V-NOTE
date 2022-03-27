function e(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),n=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=r(R(s)?i(s):s);if(o)for(const e in o)t[e]=o[e]}return t}if(A(e))return e}const s=/;(?![^(]*\))/g,o=/:(.+)/;function i(e){const t={};return e.split(s).forEach((e=>{if(e){const n=e.split(o);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(R(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(A(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function c(e,t){if(e===t)return!0;let n=C(e),r=C(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=I(e),r=I(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=c(e[r],t[r]);return n}(e,t);if(n=A(e),r=A(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!c(e[n],t[n]))return!1}}return String(e)===String(t)}function l(e,t){return e.findIndex((e=>c(e,t)))}const u=e=>null==e?"":A(e)?JSON.stringify(e,d,2):String(e),d=(e,t)=>E(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:T(t)?{[`Set(${t.size})`]:[...t.values()]}:!A(t)||I(t)||L(t)?t:String(t),h={},f=[],p=()=>{},m=()=>!1,g=/^on[^a-z]/,v=e=>g.test(e),y=e=>e.startsWith("onUpdate:"),_=Object.assign,b=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},w=Object.prototype.hasOwnProperty,k=(e,t)=>w.call(e,t),I=Array.isArray,E=e=>"[object Map]"===N(e),T=e=>"[object Set]"===N(e),C=e=>e instanceof Date,S=e=>"function"==typeof e,R=e=>"string"==typeof e,O=e=>"symbol"==typeof e,A=e=>null!==e&&"object"==typeof e,x=e=>A(e)&&S(e.then)&&S(e.catch),P=Object.prototype.toString,N=e=>P.call(e),L=e=>"[object Object]"===N(e),U=e=>R(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,M=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},F=/-(\w)/g,j=D((e=>e.replace(F,((e,t)=>t?t.toUpperCase():"")))),B=/\B([A-Z])/g,V=D((e=>e.replace(B,"-$1").toLowerCase())),$=D((e=>e.charAt(0).toUpperCase()+e.slice(1))),z=D((e=>e?`on${$(e)}`:"")),H=(e,t)=>e!==t&&(e==e||t==t),W=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},q=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},K=e=>{const t=parseFloat(e);return isNaN(t)?e:t},G=new WeakMap,J=[];let X;const Y=Symbol(""),Z=Symbol("");function Q(e,t=h){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return e();if(!J.includes(n)){ne(n);try{return se.push(re),re=!0,J.push(n),X=n,e()}finally{J.pop(),ie(),X=J[J.length-1]}}};return n.id=te++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function ee(e){e.active&&(ne(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let te=0;function ne(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let re=!0;const se=[];function oe(){se.push(re),re=!1}function ie(){const e=se.pop();re=void 0===e||e}function ae(e,t,n){if(!re||void 0===X)return;let r=G.get(e);r||G.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=new Set),s.has(X)||(s.add(X),X.deps.push(s))}function ce(e,t,n,r,s,o){const i=G.get(e);if(!i)return;const a=new Set,c=e=>{e&&e.forEach((e=>{(e!==X||e.allowRecurse)&&a.add(e)}))};if("clear"===t)i.forEach(c);else if("length"===n&&I(e))i.forEach(((e,t)=>{("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(i.get(n)),t){case"add":I(e)?U(n)&&c(i.get("length")):(c(i.get(Y)),E(e)&&c(i.get(Z)));break;case"delete":I(e)||(c(i.get(Y)),E(e)&&c(i.get(Z)));break;case"set":E(e)&&c(i.get(Y))}a.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const le=e("__proto__,__v_isRef,__isVue"),ue=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(O)),de=ve(),he=ve(!1,!0),fe=ve(!0),pe=ve(!0,!0),me=ge();function ge(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ot(this);for(let t=0,s=this.length;t<s;t++)ae(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ot)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){oe();const n=ot(this)[t].apply(this,e);return ie(),n}})),e}function ve(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&s===(e?t?Xe:Je:t?Ge:Ke).get(n))return n;const o=I(n);if(!e&&o&&k(me,r))return Reflect.get(me,r,s);const i=Reflect.get(n,r,s);if(O(r)?ue.has(r):le(r))return i;if(e||ae(n,0,r),t)return i;if(ct(i)){return!o||!U(r)?i.value:i}return A(i)?e?et(i):Ze(i):i}}function ye(e=!1){return function(t,n,r,s){let o=t[n];if(!e&&(r=ot(r),o=ot(o),!I(t)&&ct(o)&&!ct(r)))return o.value=r,!0;const i=I(t)&&U(n)?Number(n)<t.length:k(t,n),a=Reflect.set(t,n,r,s);return t===ot(s)&&(i?H(r,o)&&ce(t,"set",n,r):ce(t,"add",n,r)),a}}const _e={get:de,set:ye(),deleteProperty:function(e,t){const n=k(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ce(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return O(t)&&ue.has(t)||ae(e,0,t),n},ownKeys:function(e){return ae(e,0,I(e)?"length":Y),Reflect.ownKeys(e)}},be={get:fe,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},we=_({},_e,{get:he,set:ye(!0)}),ke=_({},be,{get:pe}),Ie=e=>A(e)?Ze(e):e,Ee=e=>A(e)?et(e):e,Te=e=>e,Ce=e=>Reflect.getPrototypeOf(e);function Se(e,t,n=!1,r=!1){const s=ot(e=e.__v_raw),o=ot(t);t!==o&&!n&&ae(s,0,t),!n&&ae(s,0,o);const{has:i}=Ce(s),a=r?Te:n?Ee:Ie;return i.call(s,t)?a(e.get(t)):i.call(s,o)?a(e.get(o)):void(e!==s&&e.get(t))}function Re(e,t=!1){const n=this.__v_raw,r=ot(n),s=ot(e);return e!==s&&!t&&ae(r,0,e),!t&&ae(r,0,s),e===s?n.has(e):n.has(e)||n.has(s)}function Oe(e,t=!1){return e=e.__v_raw,!t&&ae(ot(e),0,Y),Reflect.get(e,"size",e)}function Ae(e){e=ot(e);const t=ot(this);return Ce(t).has.call(t,e)||(t.add(e),ce(t,"add",e,e)),this}function xe(e,t){t=ot(t);const n=ot(this),{has:r,get:s}=Ce(n);let o=r.call(n,e);o||(e=ot(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?H(t,i)&&ce(n,"set",e,t):ce(n,"add",e,t),this}function Pe(e){const t=ot(this),{has:n,get:r}=Ce(t);let s=n.call(t,e);s||(e=ot(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&ce(t,"delete",e,void 0),o}function Ne(){const e=ot(this),t=0!==e.size,n=e.clear();return t&&ce(e,"clear",void 0,void 0),n}function Le(e,t){return function(n,r){const s=this,o=s.__v_raw,i=ot(o),a=t?Te:e?Ee:Ie;return!e&&ae(i,0,Y),o.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function Ue(e,t,n){return function(...r){const s=this.__v_raw,o=ot(s),i=E(o),a="entries"===e||e===Symbol.iterator&&i,c="keys"===e&&i,l=s[e](...r),u=n?Te:t?Ee:Ie;return!t&&ae(o,0,c?Z:Y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Me(e){return function(...t){return"delete"!==e&&this}}function De(){const e={get(e){return Se(this,e)},get size(){return Oe(this)},has:Re,add:Ae,set:xe,delete:Pe,clear:Ne,forEach:Le(!1,!1)},t={get(e){return Se(this,e,!1,!0)},get size(){return Oe(this)},has:Re,add:Ae,set:xe,delete:Pe,clear:Ne,forEach:Le(!1,!0)},n={get(e){return Se(this,e,!0)},get size(){return Oe(this,!0)},has(e){return Re.call(this,e,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Le(!0,!1)},r={get(e){return Se(this,e,!0,!0)},get size(){return Oe(this,!0)},has(e){return Re.call(this,e,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Le(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((s=>{e[s]=Ue(s,!1,!1),n[s]=Ue(s,!0,!1),t[s]=Ue(s,!1,!0),r[s]=Ue(s,!0,!0)})),[e,n,t,r]}const[Fe,je,Be,Ve]=De();function $e(e,t){const n=t?e?Ve:Be:e?je:Fe;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(k(n,r)&&r in t?n:t,r,s)}const ze={get:$e(!1,!1)},He={get:$e(!1,!0)},We={get:$e(!0,!1)},qe={get:$e(!0,!0)},Ke=new WeakMap,Ge=new WeakMap,Je=new WeakMap,Xe=new WeakMap;function Ye(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function Ze(e){return e&&e.__v_isReadonly?e:tt(e,!1,_e,ze,Ke)}function Qe(e){return tt(e,!1,we,He,Ge)}function et(e){return tt(e,!0,be,We,Je)}function tt(e,t,n,r,s){if(!A(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=Ye(e);if(0===i)return e;const a=new Proxy(e,2===i?r:n);return s.set(e,a),a}function nt(e){return rt(e)?nt(e.__v_raw):!(!e||!e.__v_isReactive)}function rt(e){return!(!e||!e.__v_isReadonly)}function st(e){return nt(e)||rt(e)}function ot(e){return e&&ot(e.__v_raw)||e}function it(e){return q(e,"__v_skip",!0),e}const at=e=>A(e)?Ze(e):e;function ct(e){return Boolean(e&&!0===e.__v_isRef)}function lt(e){return ht(e)}function ut(e){return ht(e,!0)}class dt{constructor(e,t=!1){this._shallow=t,this.__v_isRef=!0,this._rawValue=t?e:ot(e),this._value=t?e:at(e)}get value(){return ae(ot(this),0,"value"),this._value}set value(e){e=this._shallow?e:ot(e),H(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:at(e),ce(ot(this),"set","value",e))}}function ht(e,t=!1){return ct(e)?e:new dt(e,t)}function ft(e){return ct(e)?e.value:e}const pt={get:(e,t,n)=>ft(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ct(s)&&!ct(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function mt(e){return nt(e)?e:new Proxy(e,pt)}class gt{constructor(e){this.__v_isRef=!0;const{get:t,set:n}=e((()=>ae(this,0,"value")),(()=>ce(this,"set","value")));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function vt(e){const t=I(e)?new Array(e.length):{};for(const n in e)t[n]=_t(e,n);return t}class yt{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function _t(e,t){return ct(e[t])?e[t]:new yt(e,t)}class bt{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Q(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,ce(ot(this),"set","value"))}}),this.__v_isReadonly=n}get value(){const e=ot(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),ae(e,0,"value"),e._value}set value(e){this._setter(e)}}const wt=[];function kt(e,...t){oe();const n=wt.length?wt[wt.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=function(){let e=wt[wt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}();if(r)Tt(r,n,11,[e+t.join(""),n&&n.proxy,s.map((({vnode:e})=>`at <${Xs(n,e.type)}>`)).join("\n"),s]);else{const n=[`[Vue warn]: ${e}`,...t];s.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,s=` at <${Xs(e.component,e.type,r)}`,o=">"+n;return e.props?[s,...It(e.props),o]:[s+o]}(e))})),t}(s)),console.warn(...n)}ie()}function It(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...Et(n,e[n]))})),n.length>3&&t.push(" ..."),t}function Et(e,t,n){return R(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:ct(t)?(t=Et(e,ot(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):S(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=ot(t),n?t:[`${e}=`,t])}function Tt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){St(o,t,n)}return s}function Ct(e,t,n,r){if(S(e)){const s=Tt(e,t,n,r);return s&&x(s)&&s.catch((e=>{St(e,t,n)})),s}const s=[];for(let o=0;o<e.length;o++)s.push(Ct(e[o],t,n,r));return s}function St(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const s=t.proxy,o=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,o))return;r=r.parent}const i=t.appContext.config.errorHandler;if(i)return void Tt(i,null,10,[e,s,o])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Rt=!1,Ot=!1;const At=[];let xt=0;const Pt=[];let Nt=null,Lt=0;const Ut=[];let Mt=null,Dt=0;const Ft=Promise.resolve();let jt=null,Bt=null;function Vt(e){const t=jt||Ft;return e?t.then(this?e.bind(this):e):t}function $t(e){if(!(At.length&&At.includes(e,Rt&&e.allowRecurse?xt+1:xt)||e===Bt)){const t=function(e){let t=xt+1,n=At.length;const r=Gt(e);for(;t<n;){const e=t+n>>>1;Gt(At[e])<r?t=e+1:n=e}return t}(e);t>-1?At.splice(t,0,e):At.push(e),zt()}}function zt(){Rt||Ot||(Ot=!0,jt=Ft.then(Jt))}function Ht(e,t,n,r){I(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),zt()}function Wt(e){Ht(e,Mt,Ut,Dt)}function qt(e,t=null){if(Pt.length){for(Bt=t,Nt=[...new Set(Pt)],Pt.length=0,Lt=0;Lt<Nt.length;Lt++)Nt[Lt]();Nt=null,Lt=0,Bt=null,qt(e,t)}}function Kt(e){if(Ut.length){const e=[...new Set(Ut)];if(Ut.length=0,Mt)return void Mt.push(...e);for(Mt=e,Mt.sort(((e,t)=>Gt(e)-Gt(t))),Dt=0;Dt<Mt.length;Dt++)Mt[Dt]();Mt=null,Dt=0}}const Gt=e=>null==e.id?1/0:e.id;function Jt(e){Ot=!1,Rt=!0,qt(e),At.sort(((e,t)=>Gt(e)-Gt(t)));try{for(xt=0;xt<At.length;xt++){const e=At[xt];e&&!1!==e.active&&Tt(e,null,14)}}finally{xt=0,At.length=0,Kt(),Rt=!1,jt=null,(At.length||Pt.length||Ut.length)&&Jt(e)}}let Xt;function Yt(e,t,...n){const r=e.vnode.props||h;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const e=`${"modelValue"===i?"model":i}Modifiers`,{number:t,trim:o}=r[e]||h;o?s=n.map((e=>e.trim())):t&&(s=n.map(K))}let a,c=r[a=z(t)]||r[a=z(j(t))];!c&&o&&(c=r[a=z(V(t))]),c&&Ct(c,e,6,s);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Ct(l,e,6,s)}}function Zt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let i={},a=!1;if(!S(e)){const r=e=>{const n=Zt(e,t,!0);n&&(a=!0,_(i,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||a?(I(o)?o.forEach((e=>i[e]=null)):_(i,o),r.set(e,i),i):(r.set(e,null),null)}function Qt(e,t){return!(!e||!v(t))&&(t=t.slice(2).replace(/Once$/,""),k(e,t[0].toLowerCase()+t.slice(1))||k(e,V(t))||k(e,t))}let en=null,tn=null;function nn(e){const t=en;return en=e,tn=e&&e.type.__scopeId||null,t}function rn(e){tn=e}function sn(){tn=null}const on=e=>an;function an(e,t=en,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&hs(-1);const s=nn(t),o=e(...n);return nn(s),r._d&&hs(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function cn(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:f,ctx:p,inheritAttrs:m}=e;let g;const v=nn(e);try{let e;if(4&n.shapeFlag){const t=s||r;g=Es(u.call(t,t,d,o,f,h,p)),e=c}else{const n=t;0,g=Es(n.length>1?n(o,{attrs:c,slots:a,emit:l}):n(o,null)),e=t.props?c:un(c)}let v=g;if(e&&!1!==m){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&(1&n||6&n)&&(i&&t.some(y)&&(e=dn(e,i)),v=bs(v,e))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v}catch(_){as.length=0,St(_,e,1),g=_s(os)}return nn(v),g}function ln(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!ps(r))return;if(r.type!==os||"v-if"===r.children){if(t)return;t=r}}return t}const un=e=>{let t;for(const n in e)("class"===n||"style"===n||v(n))&&((t||(t={}))[n]=e[n]);return t},dn=(e,t)=>{const n={};for(const r in e)y(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function hn(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!Qt(n,o))return!0}return!1}function fn({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pn={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,o,i,a,c,l){null==e?function(e,t,n,r,s,o,i,a,c){const{p:l,o:{createElement:u}}=c,d=u("div"),h=e.suspense=gn(e,s,r,t,d,n,o,i,a,c);l(null,h.pendingBranch=e.ssContent,d,null,r,h,o,i),h.deps>0?(mn(e,"onPending"),mn(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,o,i),_n(h,e.ssFallback)):h.resolve()}(t,n,r,s,o,i,a,c,l):function(e,t,n,r,s,o,i,a,{p:c,um:l,o:{createElement:u}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const h=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:v}=d;if(m)d.pendingBranch=h,ms(h,m)?(c(m,h,d.hiddenContainer,null,s,d,o,i,a),d.deps<=0?d.resolve():g&&(c(p,f,n,r,s,null,o,i,a),_n(d,f))):(d.pendingId++,v?(d.isHydrating=!1,d.activeBranch=m):l(m,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),g?(c(null,h,d.hiddenContainer,null,s,d,o,i,a),d.deps<=0?d.resolve():(c(p,f,n,r,s,null,o,i,a),_n(d,f))):p&&ms(h,p)?(c(p,h,n,r,s,d,o,i,a),d.resolve(!0)):(c(null,h,d.hiddenContainer,null,s,d,o,i,a),d.deps<=0&&d.resolve()));else if(p&&ms(h,p))c(p,h,n,r,s,d,o,i,a),_n(d,h);else if(mn(t,"onPending"),d.pendingBranch=h,d.pendingId++,c(null,h,d.hiddenContainer,null,s,d,o,i,a),d.deps<=0)d.resolve();else{const{timeout:e,pendingId:t}=d;e>0?setTimeout((()=>{d.pendingId===t&&d.fallback(f)}),e):0===e&&d.fallback(f)}}(e,t,n,r,s,i,a,c,l)},hydrate:function(e,t,n,r,s,o,i,a,c){const l=t.suspense=gn(t,r,n,e.parentNode,document.createElement("div"),null,s,o,i,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,o,i);0===l.deps&&l.resolve();return u},create:gn,normalize:function(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=vn(r?n.default:n),e.ssFallback=r?vn(n.fallback):_s(Comment)}};function mn(e,t){const n=e.props&&e.props[t];S(n)&&n()}function gn(e,t,n,r,s,o,i,a,c,l,u=!1){const{p:d,m:h,um:f,n:p,o:{parentNode:m,remove:g}}=l,v=K(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:i,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:"number"==typeof v?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:r,pendingId:s,effects:o,parentComponent:i,container:a}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&r.transition&&"out-in"===r.transition.mode;e&&(n.transition.afterLeave=()=>{s===y.pendingId&&h(r,a,t,0)});let{anchor:t}=y;n&&(t=p(n),f(n,i,y,!0)),e||h(r,a,t,0)}_n(y,r),y.pendingBranch=null,y.isInFallback=!1;let c=y.parent,l=!1;for(;c;){if(c.pendingBranch){c.effects.push(...o),l=!0;break}c=c.parent}l||Wt(o),y.effects=[],mn(t,"onResolve")},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:s,isSVG:o}=y;mn(t,"onFallback");const i=p(n),l=()=>{y.isInFallback&&(d(null,e,s,i,r,null,o,a,c),_n(y,e))},u=e.transition&&"out-in"===e.transition.mode;u&&(n.transition.afterLeave=l),y.isInFallback=!0,f(n,r,null,!0),u||l()},move(e,t,n){y.activeBranch&&h(y.activeBranch,e,t,n),y.container=e},next:()=>y.activeBranch&&p(y.activeBranch),registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{St(t,e,0)})).then((s=>{if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:o}=e;zs(e,s),r&&(o.el=r);const a=!r&&e.subTree.el;t(e,o,m(r||e.subTree.el),r?null:p(e.subTree),y,i,c),a&&g(a),fn(e,o.el),n&&0==--y.deps&&y.resolve()}))},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&f(y.activeBranch,n,e,t),y.pendingBranch&&f(y.pendingBranch,n,e,t)}};return y}function vn(e){let t;if(S(e)){const n=e._c;n&&(e._d=!1,ls()),e=e(),n&&(e._d=!0,t=cs,us())}if(I(e)){const t=ln(e);e=t}return e=Es(e),t&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function yn(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):Wt(e)}function _n(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,s=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=s,fn(r,s))}function bn(e,t){if(Ds){let n=Ds.provides;const r=Ds.parent&&Ds.parent.provides;r===n&&(n=Ds.provides=Object.create(r)),n[e]=t}else;}function wn(e,t,n=!1){const r=Ds||en;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&S(t)?t.call(r.proxy):t}}function kn(e,t){return Tn(e,null,t)}const In={};function En(e,t,n){return Tn(e,t,n)}function Tn(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=h,a=Ds){let c,l,u=!1,d=!1;if(ct(e)?(c=()=>e.value,u=!!e._shallow):nt(e)?(c=()=>e,r=!0):I(e)?(d=!0,u=e.some(nt),c=()=>e.map((e=>ct(e)?e.value:nt(e)?Rn(e):S(e)?Tt(e,a,2):void 0))):c=S(e)?t?()=>Tt(e,a,2):()=>{if(!a||!a.isUnmounted)return l&&l(),Ct(e,a,3,[f])}:p,t&&r){const e=c;c=()=>Rn(e())}let f=e=>{l=y.options.onStop=()=>{Tt(e,a,4)}},m=d?[]:In;const g=()=>{if(y.active)if(t){const e=y();(r||u||(d?e.some(((e,t)=>H(e,m[t]))):H(e,m)))&&(l&&l(),Ct(t,a,3,[e,m===In?void 0:m,f]),m=e)}else y()};let v;g.allowRecurse=!!t,v="sync"===s?g:"post"===s?()=>Vr(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){Ht(e,Nt,Pt,Lt)}(g):g()};const y=Q(c,{lazy:!0,onTrack:o,onTrigger:i,scheduler:v});return Ks(y,a),t?n?g():m=y():"post"===s?Vr(y,a&&a.suspense):y(),()=>{ee(y),a&&b(a.effects,y)}}function Cn(e,t,n){const r=this.proxy,s=R(e)?e.includes(".")?Sn(r,e):()=>r[e]:e.bind(r,r);let o;return S(t)?o=t:(o=t.handler,n=t),Tn(s,o.bind(r),n,this)}function Sn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Rn(e,t=new Set){if(!A(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),ct(e))Rn(e.value,t);else if(I(e))for(let n=0;n<e.length;n++)Rn(e[n],t);else if(T(e)||E(e))e.forEach((e=>{Rn(e,t)}));else if(L(e))for(const n in e)Rn(e[n],t);return e}function On(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qn((()=>{e.isMounted=!0})),nr((()=>{e.isUnmounting=!0})),e}const An=[Function,Array],xn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},setup(e,{slots:t}){const n=Fs(),r=On();let s;return()=>{const o=t.default&&Dn(t.default(),!0);if(!o||!o.length)return;const i=ot(e),{mode:a}=i,c=o[0];if(r.isLeaving)return Ln(c);const l=Un(c);if(!l)return Ln(c);const u=Nn(l,i,r,n);Mn(l,u);const d=n.subTree,h=d&&Un(d);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===s?s=e:e!==s&&(s=e,f=!0)}if(h&&h.type!==os&&(!ms(l,h)||f)){const e=Nn(h,i,r,n);if(Mn(h,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Ln(c);"in-out"===a&&l.type!==os&&(e.delayLeave=(e,t,n)=>{Pn(r,h)[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}};function Pn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Nn(e,t,n,r){const{appear:s,mode:o,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,_=String(e.key),b=Pn(n,e),w=(e,t)=>{e&&Ct(e,r,9,t)},k={mode:o,persisted:i,beforeEnter(t){let r=a;if(!n.isMounted){if(!s)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const o=b[_];o&&ms(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=l,o=u;if(!n.isMounted){if(!s)return;t=g||c,r=v||l,o=y||u}let i=!1;const a=e._enterCb=t=>{i||(i=!0,w(t?o:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let o=!1;const i=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,b[s]===e&&delete b[s])};b[s]=e,h?(h(t,i),h.length<=1&&i()):i()},clone:e=>Nn(e,t,n,r)};return k}function Ln(e){if(Vn(e))return(e=bs(e)).children=null,e}function Un(e){return Vn(e)?e.children?e.children[0]:void 0:e}function Mn(e,t){6&e.shapeFlag&&e.component?Mn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Dn(e,t=!1){let n=[],r=0;for(let s=0;s<e.length;s++){const o=e[s];o.type===rs?(128&o.patchFlag&&r++,n=n.concat(Dn(o.children,t))):(t||o.type!==os)&&n.push(o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Fn(e){return S(e)?{setup:e,name:e.name}:e}const jn=e=>!!e.type.__asyncLoader;function Bn(e,{vnode:{ref:t,props:n,children:r}}){const s=_s(e,n,r);return s.ref=t,s}const Vn=e=>e.type.__isKeepAlive,$n={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Fs(),r=n.ctx;if(!r.renderer)return t.default;const s=new Map,o=new Set;let i=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=r,h=d("div");function f(e){Gn(e),u(e,n,a)}function p(e){s.forEach(((t,n)=>{const r=Js(t.type);!r||e&&e(r)||m(n)}))}function m(e){const t=s.get(e);i&&t.type===i.type?i&&Gn(i):f(t),s.delete(e),o.delete(e)}r.activate=(e,t,n,r,s)=>{const o=e.component;l(e,t,n,0,a),c(o.vnode,e,t,n,o,a,r,e.slotScopeIds,s),Vr((()=>{o.isDeactivated=!1,o.a&&W(o.a);const t=e.props&&e.props.onVnodeMounted;t&&qr(t,o.parent,e)}),a)},r.deactivate=e=>{const t=e.component;l(e,h,null,1,a),Vr((()=>{t.da&&W(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&qr(n,t.parent,e),t.isDeactivated=!0}),a)},En((()=>[e.include,e.exclude]),(([e,t])=>{e&&p((t=>zn(e,t))),t&&p((e=>!zn(t,e)))}),{flush:"post",deep:!0});let g=null;const v=()=>{null!=g&&s.set(g,Jn(n.subTree))};return Qn(v),tr(v),nr((()=>{s.forEach((e=>{const{subTree:t,suspense:r}=n,s=Jn(t);if(e.type!==s.type)f(e);else{Gn(s);const e=s.component.da;e&&Vr(e,r)}}))})),()=>{if(g=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return i=null,n;if(!(ps(r)&&(4&r.shapeFlag||128&r.shapeFlag)))return i=null,r;let a=Jn(r);const c=a.type,l=Js(jn(a)?a.type.__asyncResolved||{}:c),{include:u,exclude:d,max:h}=e;if(u&&(!l||!zn(u,l))||d&&l&&zn(d,l))return i=a,r;const f=null==a.key?c:a.key,p=s.get(f);return a.el&&(a=bs(a),128&r.shapeFlag&&(r.ssContent=a)),g=f,p?(a.el=p.el,a.component=p.component,a.transition&&Mn(a,a.transition),a.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),h&&o.size>parseInt(h,10)&&m(o.values().next().value)),a.shapeFlag|=256,i=a,r}}};function zn(e,t){return I(e)?e.some((e=>zn(e,t))):R(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Hn(e,t){qn(e,"a",t)}function Wn(e,t){qn(e,"da",t)}function qn(e,t,n=Ds){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(Xn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Vn(e.parent.vnode)&&Kn(r,t,n,e),e=e.parent}}function Kn(e,t,n,r){const s=Xn(t,e,r,!0);rr((()=>{b(r[t],s)}),n)}function Gn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Jn(e){return 128&e.shapeFlag?e.ssContent:e}function Xn(e,t,n=Ds,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;oe(),js(n);const s=Ct(t,n,e,r);return js(null),ie(),s});return r?s.unshift(o):s.push(o),o}}const Yn=e=>(t,n=Ds)=>(!$s||"sp"===e)&&Xn(e,t,n),Zn=Yn("bm"),Qn=Yn("m"),er=Yn("bu"),tr=Yn("u"),nr=Yn("bum"),rr=Yn("um"),sr=Yn("sp"),or=Yn("rtg"),ir=Yn("rtc");function ar(e,t=Ds){Xn("ec",e,t)}let cr=!0;function lr(e){const t=hr(e),n=e.proxy,r=e.ctx;cr=!1,t.beforeCreate&&ur(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:_,destroyed:b,unmounted:w,render:k,renderTracked:E,renderTriggered:T,errorCaptured:C,serverPrefetch:R,expose:O,inheritAttrs:x,components:P,directives:N,filters:L}=t;if(l&&function(e,t,n=p){I(e)&&(e=gr(e));for(const r in e){const n=e[r];A(n)?t[r]="default"in n?wn(n.from||r,n.default,!0):wn(n.from||r):t[r]=wn(n)}}(l,r,null),i)for(const p in i){const e=i[p];S(e)&&(r[p]=e.bind(n))}if(s){const t=s.call(n,n);A(t)&&(e.data=Ze(t))}if(cr=!0,o)for(const I in o){const e=o[I],t=Ys({get:S(e)?e.bind(n,n):S(e.get)?e.get.bind(n,n):p,set:!S(e)&&S(e.set)?e.set.bind(n):p});Object.defineProperty(r,I,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const p in a)dr(a[p],r,n,p);if(c){const e=S(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{bn(t,e[t])}))}function U(e,t){I(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&ur(u,e,"c"),U(Zn,d),U(Qn,h),U(er,f),U(tr,m),U(Hn,g),U(Wn,v),U(ar,C),U(ir,E),U(or,T),U(nr,_),U(rr,w),U(sr,R),I(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===p&&(e.render=k),null!=x&&(e.inheritAttrs=x),P&&(e.components=P),N&&(e.directives=N)}function ur(e,t,n){Ct(I(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function dr(e,t,n,r){const s=r.includes(".")?Sn(n,r):()=>n[r];if(R(e)){const n=t[e];S(n)&&En(s,n)}else if(S(e))En(s,e.bind(n));else if(A(e))if(I(e))e.forEach((e=>dr(e,t,n,r)));else{const r=S(e.handler)?e.handler.bind(n):t[e.handler];S(r)&&En(s,r,e)}}function hr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach((e=>fr(c,e,i,!0))),fr(c,t,i)):c=t,o.set(t,c),c}function fr(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&fr(e,o,n,!0),s&&s.forEach((t=>fr(e,t,n,!0)));for(const i in t)if(r&&"expose"===i);else{const r=pr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}const pr={data:mr,props:yr,emits:yr,methods:yr,computed:yr,beforeCreate:vr,created:vr,beforeMount:vr,mounted:vr,beforeUpdate:vr,updated:vr,beforeDestroy:vr,destroyed:vr,activated:vr,deactivated:vr,errorCaptured:vr,serverPrefetch:vr,components:yr,directives:yr,watch:function(e,t){if(!e)return t;if(!t)return e;const n=_(Object.create(null),e);for(const r in t)n[r]=vr(e[r],t[r]);return n},provide:mr,inject:function(e,t){return yr(gr(e),gr(t))}};function mr(e,t){return t?e?function(){return _(S(e)?e.call(this,this):e,S(t)?t.call(this,this):t)}:t:e}function gr(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function vr(e,t){return e?[...new Set([].concat(e,t))]:t}function yr(e,t){return e?_(_(Object.create(null),e),t):t}function _r(e,t,n,r){const[s,o]=e.propsOptions;let i,a=!1;if(t)for(let c in t){if(M(c))continue;const l=t[c];let u;s&&k(s,u=j(c))?o&&o.includes(u)?(i||(i={}))[u]=l:n[u]=l:Qt(e.emitsOptions,c)||l!==r[c]&&(r[c]=l,a=!0)}if(o){const t=ot(n),r=i||h;for(let i=0;i<o.length;i++){const a=o[i];n[a]=br(s,t,a,r[a],e,!k(r,a))}}return a}function br(e,t,n,r,s,o){const i=e[n];if(null!=i){const e=k(i,"default");if(e&&void 0===r){const e=i.default;if(i.type!==Function&&S(e)){const{propsDefaults:o}=s;n in o?r=o[n]:(js(s),r=o[n]=e.call(null,t),js(null))}else r=e}i[0]&&(o&&!e?r=!1:!i[1]||""!==r&&r!==V(n)||(r=!0))}return r}function wr(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!S(e)){const r=e=>{c=!0;const[n,r]=wr(e,t,!0);_(i,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return r.set(e,f),f;if(I(o))for(let u=0;u<o.length;u++){const e=j(o[u]);kr(e)&&(i[e]=h)}else if(o)for(const u in o){const e=j(u);if(kr(e)){const t=o[u],n=i[e]=I(t)||S(t)?{type:t}:t;if(n){const t=Tr(Boolean,n.type),r=Tr(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||k(n,"default"))&&a.push(e)}}}const l=[i,a];return r.set(e,l),l}function kr(e){return"$"!==e[0]}function Ir(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Er(e,t){return Ir(e)===Ir(t)}function Tr(e,t){return I(t)?t.findIndex((t=>Er(t,e))):S(t)&&Er(t,e)?0:-1}const Cr=e=>"_"===e[0]||"$stable"===e,Sr=e=>I(e)?e.map(Es):[Es(e)],Rr=(e,t,n)=>{const r=an((e=>Sr(t(e))),n);return r._c=!1,r},Or=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Cr(s))continue;const n=e[s];if(S(n))t[s]=Rr(0,n,r);else if(null!=n){const e=Sr(n);t[s]=()=>e}}},Ar=(e,t)=>{const n=Sr(t);e.slots.default=()=>n};function xr(e,t){if(null===en)return e;const n=en.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,i,a=h]=t[s];S(e)&&(e={mounted:e,updated:e}),e.deep&&Rn(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:i,modifiers:a})}return e}function Pr(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(oe(),Ct(c,n,8,[e.el,a,e,t]),ie())}}function Nr(){return{app:null,config:{isNativeTag:m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lr=0;function Ur(e,t){return function(n,r=null){null==r||A(r)||(r=null);const s=Nr(),o=new Set;let i=!1;const a=s.app={_uid:Lr++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:so,get config(){return s.config},set config(e){},use:(e,...t)=>(o.has(e)||(e&&S(e.install)?(o.add(e),e.install(a,...t)):S(e)&&(o.add(e),e(a,...t))),a),mixin:e=>(s.mixins.includes(e)||s.mixins.push(e),a),component:(e,t)=>t?(s.components[e]=t,a):s.components[e],directive:(e,t)=>t?(s.directives[e]=t,a):s.directives[e],mount(o,c,l){if(!i){const u=_s(n,r);return u.appContext=s,c&&t?t(u,o):e(u,o,l),i=!0,a._container=o,o.__vue_app__=a,u.component.proxy}},unmount(){i&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(s.provides[e]=t,a)};return a}}let Mr=!1;const Dr=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,Fr=e=>8===e.nodeType;function jr(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:s,parentNode:o,remove:i,insert:a,createComment:c}}=e,l=(n,r,i,a,c,m=!1)=>{const g=Fr(n)&&"["===n.data,v=()=>f(n,r,i,a,c,g),{type:y,ref:_,shapeFlag:b}=r,w=n.nodeType;r.el=n;let k=null;switch(y){case ss:3!==w?k=v():(n.data!==r.children&&(Mr=!0,n.data=r.children),k=s(n));break;case os:k=8!==w||g?v():s(n);break;case is:if(1===w){k=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=k.outerHTML),t===r.staticCount-1&&(r.anchor=k),k=s(k);return k}k=v();break;case rs:k=g?h(n,r,i,a,c,m):v();break;default:if(1&b)k=1!==w||r.type.toLowerCase()!==n.tagName.toLowerCase()?v():u(n,r,i,a,c,m);else if(6&b){r.slotScopeIds=c;const e=o(n);if(t(r,e,null,i,a,Dr(e),m),k=g?p(n):s(n),jn(r)){let t;g?(t=_s(rs),t.anchor=k?k.previousSibling:e.lastChild):t=3===n.nodeType?ws(""):_s("div"),t.el=n,r.component.subTree=t}}else 64&b?k=8!==w?v():r.type.hydrate(n,r,i,a,c,m,e,d):128&b&&(k=r.type.hydrate(n,r,i,a,Dr(o(n)),c,m,e,l))}return null!=_&&$r(_,null,a,r),k},u=(e,t,n,s,o,a)=>{a=a||!!t.dynamicChildren;const{type:c,props:l,patchFlag:u,shapeFlag:h,dirs:f}=t,p="input"===c&&f||"option"===c;if(p||-1!==u){if(f&&Pr(t,null,n,"created"),l)if(p||!a||16&u||32&u)for(const t in l)(p&&t.endsWith("value")||v(t)&&!M(t))&&r(e,t,null,l[t]);else l.onClick&&r(e,"onClick",null,l.onClick);let c;if((c=l&&l.onVnodeBeforeMount)&&qr(c,n,t),f&&Pr(t,null,n,"beforeMount"),((c=l&&l.onVnodeMounted)||f)&&yn((()=>{c&&qr(c,n,t),f&&Pr(t,null,n,"mounted")}),s),16&h&&(!l||!l.innerHTML&&!l.textContent)){let r=d(e.firstChild,t,e,n,s,o,a);for(;r;){Mr=!0;const e=r;r=r.nextSibling,i(e)}}else 8&h&&e.textContent!==t.children&&(Mr=!0,e.textContent=t.children)}return e.nextSibling},d=(e,t,r,s,o,i,a)=>{a=a||!!t.dynamicChildren;const c=t.children,u=c.length;for(let d=0;d<u;d++){const t=a?c[d]:c[d]=Es(c[d]);if(e)e=l(e,t,s,o,i,a);else{if(t.type===ss&&!t.children)continue;Mr=!0,n(null,t,r,null,s,o,Dr(r),i)}}return e},h=(e,t,n,r,i,l)=>{const{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);const h=o(e),f=d(s(e),t,h,n,r,i,l);return f&&Fr(f)&&"]"===f.data?s(t.anchor=f):(Mr=!0,a(t.anchor=c("]"),h,f),f)},f=(e,t,r,a,c,l)=>{if(Mr=!0,t.el=null,l){const t=p(e);for(;;){const n=s(e);if(!n||n===t)break;i(n)}}const u=s(e),d=o(e);return i(e),n(null,t,d,u,r,a,Dr(d),c),u},p=e=>{let t=0;for(;e;)if((e=s(e))&&Fr(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return s(e);t--}return e};return[(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),void Kt();Mr=!1,l(t.firstChild,e,null,null,null),Kt(),Mr&&console.error("Hydration completed but contains mismatches.")},l]}const Br={scheduler:$t,allowRecurse:!0},Vr=yn,$r=(e,t,n,r,s=!1)=>{if(I(e))return void e.forEach(((e,o)=>$r(e,t&&(I(t)?t[o]:t),n,r,s)));if(jn(r)&&!s)return;const o=4&r.shapeFlag?qs(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,l=t&&t.r,u=a.refs===h?a.refs={}:a.refs,d=a.setupState;if(null!=l&&l!==c&&(R(l)?(u[l]=null,k(d,l)&&(d[l]=null)):ct(l)&&(l.value=null)),R(c)){const e=()=>{u[c]=i,k(d,c)&&(d[c]=i)};i?(e.id=-1,Vr(e,n)):e()}else if(ct(c)){const e=()=>{c.value=i};i?(e.id=-1,Vr(e,n)):e()}else S(c)&&Tt(c,a,12,[i,u])};function zr(e){return Wr(e)}function Hr(e){return Wr(e,jr)}function Wr(e,t){const{insert:n,remove:r,patchProp:s,forcePatchProp:o,createElement:i,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:m,setScopeId:g=p,cloneNode:v,insertStaticContent:y}=e,b=(e,t,n,r=null,s=null,o=null,i=!1,a=null,c=!!t.dynamicChildren)=>{e&&!ms(e,t)&&(r=te(e),G(e,s,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case ss:w(e,t,n,r);break;case os:I(e,t,n,r);break;case is:null==e&&E(t,n,r,i);break;case rs:N(e,t,n,r,s,o,i,a,c);break;default:1&d?T(e,t,n,r,s,o,i,a,c):6&d?L(e,t,n,r,s,o,i,a,c):(64&d||128&d)&&l.process(e,t,n,r,s,o,i,a,c,re)}null!=u&&s&&$r(u,e&&e.ref,o,t||e,!t)},w=(e,t,r,s)=>{if(null==e)n(t.el=a(t.children),r,s);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},I=(e,t,r,s)=>{null==e?n(t.el=c(t.children||""),r,s):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r)},T=(e,t,n,r,s,o,i,a,c)=>{i=i||"svg"===t.type,null==e?C(t,n,r,s,o,i,a,c):O(e,t,s,o,i,a,c)},C=(e,t,r,o,a,c,l,d)=>{let h,f;const{type:p,props:m,shapeFlag:g,transition:y,patchFlag:_,dirs:b}=e;if(e.el&&void 0!==v&&-1===_)h=e.el=v(e.el);else{if(h=e.el=i(e.type,c,m&&m.is,m),8&g?u(h,e.children):16&g&&R(e.children,h,null,o,a,c&&"foreignObject"!==p,l,d),b&&Pr(e,null,o,"created"),m){for(const t in m)M(t)||s(h,t,null,m[t],c,e.children,o,a,Z);(f=m.onVnodeBeforeMount)&&qr(f,o,e)}S(h,e,e.scopeId,l,o)}b&&Pr(e,null,o,"beforeMount");const w=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(h),n(h,t,r),((f=m&&m.onVnodeMounted)||w||b)&&Vr((()=>{f&&qr(f,o,e),w&&y.enter(h),b&&Pr(e,null,o,"mounted")}),a)},S=(e,t,n,r,s)=>{if(n&&g(e,n),r)for(let o=0;o<r.length;o++)g(e,r[o]);if(s){if(t===s.subTree){const t=s.vnode;S(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},R=(e,t,n,r,s,o,i,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Ts(e[l]):Es(e[l]);b(null,c,t,n,r,s,o,i,a)}},O=(e,t,n,r,i,a,c)=>{const l=t.el=e.el;let{patchFlag:d,dynamicChildren:f,dirs:p}=t;d|=16&e.patchFlag;const m=e.props||h,g=t.props||h;let v;if((v=g.onVnodeBeforeUpdate)&&qr(v,n,t,e),p&&Pr(t,e,n,"beforeUpdate"),d>0){if(16&d)P(l,t,m,g,n,r,i);else if(2&d&&m.class!==g.class&&s(l,"class",null,g.class,i),4&d&&s(l,"style",m.style,g.style,i),8&d){const a=t.dynamicProps;for(let t=0;t<a.length;t++){const c=a[t],u=m[c],d=g[c];(d!==u||o&&o(l,c))&&s(l,c,u,d,i,e.children,n,r,Z)}}1&d&&e.children!==t.children&&u(l,t.children)}else c||null!=f||P(l,t,m,g,n,r,i);const y=i&&"foreignObject"!==t.type;f?A(e.dynamicChildren,f,l,n,r,y,a):c||$(e,t,l,null,n,r,y,a,!1),((v=g.onVnodeUpdated)||p)&&Vr((()=>{v&&qr(v,n,t,e),p&&Pr(t,e,n,"updated")}),r)},A=(e,t,n,r,s,o,i)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===rs||!ms(c,l)||6&c.shapeFlag||64&c.shapeFlag)?d(c.el):n;b(c,l,u,null,r,s,o,i,!0)}},P=(e,t,n,r,i,a,c)=>{if(n!==r){for(const l in r){if(M(l))continue;const u=r[l],d=n[l];(u!==d||o&&o(e,l))&&s(e,l,d,u,c,t.children,i,a,Z)}if(n!==h)for(const o in n)M(o)||o in r||s(e,o,n[o],null,c,t.children,i,a,Z)}},N=(e,t,r,s,o,i,c,l,u)=>{const d=t.el=e?e.el:a(""),h=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;p&&(u=!0),m&&(l=l?l.concat(m):m),null==e?(n(d,r,s),n(h,r,s),R(t.children,r,h,o,i,c,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,r,o,i,c,l),(null!=t.key||o&&t===o.subTree)&&Kr(e,t,!0)):$(e,t,r,h,o,i,c,l,u)},L=(e,t,n,r,s,o,i,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,i,c):U(t,n,r,s,o,i,c):D(e,t,c)},U=(e,t,n,r,s,o,i)=>{const a=e.component=function(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Us,o={uid:Ms++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wr(r,s),emitsOptions:Zt(r,s),emit:null,emitted:null,propsDefaults:h,inheritAttrs:r.inheritAttrs,ctx:h,data:h,props:h,attrs:h,slots:h,refs:h,setupState:h,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Yt.bind(null,o),o}(e,r,s);if(Vn(e)&&(a.ctx.renderer=re),function(e,t=!1){$s=t;const{props:n,children:r}=e.vnode,s=Bs(e);(function(e,t,n,r=!1){const s={},o={};q(o,gs,1),e.propsDefaults=Object.create(null),_r(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Qe(s):e.type.props?e.props=s:e.props=o,e.attrs=o})(e,n,s,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ot(t),q(t,"_",n)):Or(t,e.slots={})}else e.slots={},t&&Ar(e,t);q(e.slots,gs,1)})(e,r);const o=s?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=it(new Proxy(e.ctx,Ns));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?Ws(e):null;Ds=e,oe();const s=Tt(r,e,0,[e.props,n]);if(ie(),Ds=null,x(s)){const n=()=>{Ds=null};if(s.then(n,n),t)return s.then((t=>{zs(e,t)})).catch((t=>{St(t,e,0)}));e.asyncDep=s}else zs(e,s)}else Hs(e)}(e,t):void 0;$s=!1}(a),a.asyncDep){if(s&&s.registerDep(a,F),!e.el){const e=a.subTree=_s(os);I(null,e,t,n)}}else F(a,e,t,n,s,o,i)},D=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==i&&(r?!i||hn(r,i,l):!!i);if(1024&c)return!0;if(16&c)return r?hn(r,i,l):!!i;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(i[n]!==r[n]&&!Qt(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,function(e){const t=At.indexOf(e);t>xt&&At.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},F=(e,t,n,r,s,o,i)=>{e.update=Q((function(){if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;n?(n.el=l.el,B(e,n,i)):n=l,r&&W(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&qr(t,c,n,l);const h=cn(e),f=e.subTree;e.subTree=h,b(f,h,d(f.el),te(f),e,s,o),n.el=h.el,null===u&&fn(e,h.el),a&&Vr(a,s),(t=n.props&&n.props.onVnodeUpdated)&&Vr((()=>qr(t,c,n,l)),s)}else{let i;const{el:a,props:c}=t,{bm:l,m:u,parent:d}=e;if(l&&W(l),(i=c&&c.onVnodeBeforeMount)&&qr(i,d,t),a&&ae){const n=()=>{e.subTree=cn(e),ae(a,e.subTree,e,s,null)};jn(t)?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const i=e.subTree=cn(e);b(null,i,n,r,e,s,o),t.el=i.el}if(u&&Vr(u,s),i=c&&c.onVnodeMounted){const e=t;Vr((()=>qr(i,d,e)),s)}256&t.shapeFlag&&e.a&&Vr(e.a,s),e.isMounted=!0,t=n=r=null}}),Br)},B=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=ot(s),[c]=e.propsOptions;let l=!1;if(!(r||i>0)||16&i){let r;_r(e,t,s,o)&&(l=!0);for(const o in a)t&&(k(t,o)||(r=V(o))!==o&&k(t,r))||(c?!n||void 0===n[o]&&void 0===n[r]||(s[o]=br(c,a,o,void 0,e,!0)):delete s[o]);if(o!==a)for(const e in o)t&&k(t,e)||(delete o[e],l=!0)}else if(8&i){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];const u=t[i];if(c)if(k(o,i))u!==o[i]&&(o[i]=u,l=!0);else{const t=j(i);s[t]=br(c,a,t,u,e,!1)}else u!==o[i]&&(o[i]=u,l=!0)}}l&&ce(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=h;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:(_(s,t),n||1!==e||delete s._):(o=!t.$stable,Or(t,s)),i=t}else t&&(Ar(e,t),i={default:1});if(o)for(const a in s)Cr(a)||a in i||delete s[a]})(e,t.children,n),oe(),qt(void 0,e.update),ie()},$=(e,t,n,r,s,o,i,a,c=!1)=>{const l=e&&e.children,d=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(l,h,n,r,s,o,i,a,c);if(256&f)return void z(l,h,n,r,s,o,i,a,c)}8&p?(16&d&&Z(l,s,o),h!==l&&u(n,h)):16&d?16&p?H(l,h,n,r,s,o,i,a,c):Z(l,s,o,!0):(8&d&&u(n,""),16&p&&R(h,n,r,s,o,i,a,c))},z=(e,t,n,r,s,o,i,a,c)=>{t=t||f;const l=(e=e||f).length,u=t.length,d=Math.min(l,u);let h;for(h=0;h<d;h++){const r=t[h]=c?Ts(t[h]):Es(t[h]);b(e[h],r,n,null,s,o,i,a,c)}l>u?Z(e,s,o,!0,!1,d):R(t,n,r,s,o,i,a,c,d)},H=(e,t,n,r,s,o,i,a,c)=>{let l=0;const u=t.length;let d=e.length-1,h=u-1;for(;l<=d&&l<=h;){const r=e[l],u=t[l]=c?Ts(t[l]):Es(t[l]);if(!ms(r,u))break;b(r,u,n,null,s,o,i,a,c),l++}for(;l<=d&&l<=h;){const r=e[d],l=t[h]=c?Ts(t[h]):Es(t[h]);if(!ms(r,l))break;b(r,l,n,null,s,o,i,a,c),d--,h--}if(l>d){if(l<=h){const e=h+1,d=e<u?t[e].el:r;for(;l<=h;)b(null,t[l]=c?Ts(t[l]):Es(t[l]),n,d,s,o,i,a,c),l++}}else if(l>h)for(;l<=d;)G(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=h;l++){const e=t[l]=c?Ts(t[l]):Es(t[l]);null!=e.key&&g.set(e.key,l)}let v,y=0;const _=h-m+1;let w=!1,k=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=d;l++){const r=e[l];if(y>=_){G(r,s,o,!0);continue}let u;if(null!=r.key)u=g.get(r.key);else for(v=m;v<=h;v++)if(0===I[v-m]&&ms(r,t[v])){u=v;break}void 0===u?G(r,s,o,!0):(I[u-m]=l+1,u>=k?k=u:w=!0,b(r,t[u],n,null,s,o,i,a,c),y++)}const E=w?function(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=(o+i)/2|0,e[n[a]]<c?o=a+1:i=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,i=n[o-1];for(;o-- >0;)n[o]=i,i=t[i];return n}(I):f;for(v=E.length-1,l=_-1;l>=0;l--){const e=m+l,d=t[e],h=e+1<u?t[e+1].el:r;0===I[l]?b(null,d,n,h,s,o,i,a,c):w&&(v<0||l!==E[v]?K(d,n,h,2):v--)}}},K=(e,t,r,s,o=null)=>{const{el:i,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void K(e.component.subTree,t,r,s);if(128&u)return void e.suspense.move(t,r,s);if(64&u)return void a.move(e,t,r,re);if(a===rs){n(i,t,r);for(let e=0;e<l.length;e++)K(l[e],t,r,s);return void n(e.anchor,t,r)}if(a===is)return void(({el:e,anchor:t},r,s)=>{let o;for(;e&&e!==t;)o=m(e),n(e,r,s),e=o;n(t,r,s)})(e,t,r);if(2!==s&&1&u&&c)if(0===s)c.beforeEnter(i),n(i,t,r),Vr((()=>c.enter(i)),o);else{const{leave:e,delayLeave:s,afterLeave:o}=c,a=()=>n(i,t,r),l=()=>{e(i,(()=>{a(),o&&o()}))};s?s(i,a,l):l()}else n(i,t,r)},G=(e,t,n,r=!1,s=!1)=>{const{type:o,props:i,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:h}=e;if(null!=a&&$r(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&h;let p;if((p=i&&i.onVnodeBeforeUnmount)&&qr(p,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Pr(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,re,r):l&&(o!==rs||d>0&&64&d)?Z(l,t,n,!1,!0):(o===rs&&(128&d||256&d)||!s&&16&u)&&Z(c,t,n),r&&J(e)}((p=i&&i.onVnodeUnmounted)||f)&&Vr((()=>{p&&qr(p,t,e),f&&Pr(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:s,transition:o}=e;if(t===rs)return void X(n,s);if(t===is)return void(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=m(e),r(e),e=n;r(t)})(e);const i=()=>{r(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,s=()=>t(n,i);r?r(e.el,i,s):s()}else i()},X=(e,t)=>{let n;for(;e!==t;)n=m(e),r(e),e=n;r(t)},Y=(e,t,n)=>{const{bum:r,effects:s,update:o,subTree:i,um:a}=e;if(r&&W(r),s)for(let c=0;c<s.length;c++)ee(s[c]);o&&(ee(o),G(i,e,t,n)),a&&Vr(a,t),Vr((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,s=!1,o=0)=>{for(let i=o;i<e.length;i++)G(e[i],t,n,r,s)},te=e=>6&e.shapeFlag?te(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),ne=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),Kt(),t._vnode=e},re={p:b,um:G,m:K,r:J,mt:U,mc:R,pc:$,pbc:A,n:te,o:e};let se,ae;return t&&([se,ae]=t(re)),{render:ne,hydrate:se,createApp:Ur(ne,se)}}function qr(e,t,n,r=null){Ct(e,t,7,[n,r])}function Kr(e,t,n=!1){const r=e.children,s=t.children;if(I(r)&&I(s))for(let o=0;o<r.length;o++){const e=r[o];let t=s[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[o]=Ts(s[o]),t.el=e.el),n||Kr(e,t))}}const Gr=e=>e&&(e.disabled||""===e.disabled),Jr=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Xr=(e,t)=>{const n=e&&e.to;if(R(n)){if(t){return t(n)}return null}return n};function Yr(e,t,n,{o:{insert:r},m:s},o=2){0===o&&r(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:l,props:u}=e,d=2===o;if(d&&r(i,t,n),(!d||Gr(u))&&16&c)for(let h=0;h<l.length;h++)s(l[h],t,n,2);d&&r(a,t,n)}const Zr={__isTeleport:!0,process(e,t,n,r,s,o,i,a,c,l){const{mc:u,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:m,createComment:g}}=l,v=Gr(t.props);let{shapeFlag:y,children:_,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),l=t.anchor=m("");f(e,n,r),f(l,n,r);const d=t.target=Xr(t.props,p),h=t.targetAnchor=m("");d&&(f(h,d),i=i||Jr(d));const g=(e,t)=>{16&y&&u(_,e,t,s,o,i,a,c)};v?g(n,l):d&&g(d,h)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=Gr(e.props),g=m?n:u,y=m?r:f;if(i=i||Jr(u),b?(h(e.dynamicChildren,b,g,s,o,i,a),Kr(e,t,!0)):c||d(e,t,g,y,s,o,i,a,!1),v)m||Yr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Xr(t.props,p);e&&Yr(t,e,null,l,0)}else m&&Yr(t,u,f,l,1)}},remove(e,t,n,r,{um:s,o:{remove:o}},i){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:h}=e;if(d&&o(u),(i||!Gr(h))&&(o(l),16&a))for(let f=0;f<c.length;f++){const e=c[f];s(e,t,n,!0,!!e.dynamicChildren)}},move:Yr,hydrate:function(e,t,n,r,s,o,{o:{nextSibling:i,parentNode:a,querySelector:c}},l){const u=t.target=Xr(t.props,c);if(u){const c=u._lpa||u.firstChild;16&t.shapeFlag&&(Gr(t.props)?(t.anchor=l(i(e),t,a(e),n,r,s,o),t.targetAnchor=c):(t.anchor=i(e),t.targetAnchor=l(c,t,u,n,r,s,o)),u._lpa=t.targetAnchor&&i(t.targetAnchor))}return t.anchor&&i(t.anchor)}};function Qr(e,t){return ts("components",e,!0,t)||e}const es=Symbol();function ts(e,t,n=!0,r=!1){const s=en||Ds;if(s){const n=s.type;if("components"===e){const e=Js(n);if(e&&(e===t||e===j(t)||e===$(j(t))))return n}const o=ns(s[e]||n[e],t)||ns(s.appContext[e],t);return!o&&r?n:o}}function ns(e,t){return e&&(e[t]||e[j(t)]||e[$(j(t))])}const rs=Symbol(void 0),ss=Symbol(void 0),os=Symbol(void 0),is=Symbol(void 0),as=[];let cs=null;function ls(e=!1){as.push(cs=e?null:[])}function us(){as.pop(),cs=as[as.length-1]||null}let ds=1;function hs(e){ds+=e}function fs(e,t,n,r,s){const o=_s(e,t,n,r,s,!0);return o.dynamicChildren=ds>0?cs||f:null,us(),ds>0&&cs&&cs.push(o),o}function ps(e){return!!e&&!0===e.__v_isVNode}function ms(e,t){return e.type===t.type&&e.key===t.key}const gs="__vInternal",vs=({key:e})=>null!=e?e:null,ys=({ref:e})=>null!=e?R(e)||ct(e)||S(e)?{i:en,r:e}:e:null,_s=function(e,t=null,n=null,s=0,o=null,i=!1){e&&e!==es||(e=os);if(ps(e)){const r=bs(e,t,!0);return n&&Cs(r,n),r}c=e,S(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){(st(t)||gs in t)&&(t=_({},t));let{class:e,style:n}=t;e&&!R(e)&&(t.class=a(e)),A(n)&&(st(n)&&!I(n)&&(n=_({},n)),t.style=r(n))}const l=R(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:A(e)?4:S(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vs(t),ref:t&&ys(t),scopeId:tn,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,shapeFlag:l,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null};Cs(u,n),128&l&&e.normalize(u);ds>0&&!i&&cs&&(s>0||6&l)&&32!==s&&cs.push(u);return u};function bs(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?Ss(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&vs(a),ref:t&&t.ref?n&&s?I(s)?s.concat(ys(t)):[s,ys(t)]:ys(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==rs?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bs(e.ssContent),ssFallback:e.ssFallback&&bs(e.ssFallback),el:e.el,anchor:e.anchor}}function ws(e=" ",t=0){return _s(ss,null,e,t)}function ks(e,t){const n=_s(is,null,e);return n.staticCount=t,n}function Is(e="",t=!1){return t?(ls(),fs(os,null,e)):_s(os,null,e)}function Es(e){return null==e||"boolean"==typeof e?_s(os):I(e)?_s(rs,null,e.slice()):"object"==typeof e?Ts(e):_s(ss,null,String(e))}function Ts(e){return null===e.el?e:bs(e)}function Cs(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(I(t))n=16;else if("object"==typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Cs(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||gs in t?3===r&&en&&(1===en.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=en}}else S(t)?(t={default:t,_ctx:en},n=32):(t=String(t),64&r?(n=16,t=[ws(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ss(...e){const t=_({},e[0]);for(let n=1;n<e.length;n++){const s=e[n];for(const e in s)if("class"===e)t.class!==s.class&&(t.class=a([t.class,s.class]));else if("style"===e)t.style=r([t.style,s.style]);else if(v(e)){const n=t[e],r=s[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=s[e])}return t}function Rs(e,t){let n;if(I(e)||R(e)){n=new Array(e.length);for(let r=0,s=e.length;r<s;r++)n[r]=t(e[r],r)}else if("number"==typeof e){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(A(e))if(e[Symbol.iterator])n=Array.from(e,t);else{const r=Object.keys(e);n=new Array(r.length);for(let s=0,o=r.length;s<o;s++){const o=r[s];n[s]=t(e[o],o,s)}}else n=[];return n}function Os(e,t,n={},r,s){let o=e[t];o&&o._c&&(o._d=!1),ls();const i=o&&As(o(n)),a=fs(rs,{key:n.key||`_${t}`},i||(r?r():[]),i&&1===e._?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function As(e){return e.some((e=>!ps(e)||e.type!==os&&!(e.type===rs&&!As(e.children))))?e:null}const xs=e=>e?Bs(e)?qs(e)||e.proxy:xs(e.parent):null,Ps=_(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$emit:e=>e.emit,$options:e=>hr(e),$forceUpdate:e=>()=>$t(e.update),$nextTick:e=>Vt.bind(e.proxy),$watch:e=>Cn.bind(e)}),Ns={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let l;if("$"!==t[0]){const a=i[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return s[t];case 3:return n[t];case 2:return o[t]}else{if(r!==h&&k(r,t))return i[t]=0,r[t];if(s!==h&&k(s,t))return i[t]=1,s[t];if((l=e.propsOptions[0])&&k(l,t))return i[t]=2,o[t];if(n!==h&&k(n,t))return i[t]=3,n[t];cr&&(i[t]=4)}}const u=Ps[t];let d,f;return u?("$attrs"===t&&ae(e,0,t),u(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==h&&k(n,t)?(i[t]=3,n[t]):(f=c.config.globalProperties,k(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;if(s!==h&&k(s,t))s[t]=n;else if(r!==h&&k(r,t))r[t]=n;else if(k(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return void 0!==n[i]||e!==h&&k(e,i)||t!==h&&k(t,i)||(a=o[0])&&k(a,i)||k(r,i)||k(Ps,i)||k(s.config.globalProperties,i)}},Ls=_({},Ns,{get(e,t){if(t!==Symbol.unscopables)return Ns.get(e,t,e)},has:(e,n)=>"_"!==n[0]&&!t(n)}),Us=Nr();let Ms=0;let Ds=null;const Fs=()=>Ds||en,js=e=>{Ds=e};function Bs(e){return 4&e.vnode.shapeFlag}let Vs,$s=!1;function zs(e,t,n){S(t)?e.render=t:A(t)&&(e.setupState=mt(t)),Hs(e)}function Hs(e,t,n){const r=e.type;if(!e.render){if(Vs&&!r.render){const t=r.template;if(t){const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:i}=r,a=_(_({isCustomElement:n,delimiters:o},s),i);r.render=Vs(t,a)}}e.render=r.render||p,e.render._rc&&(e.withProxy=new Proxy(e.ctx,Ls))}Ds=e,oe(),lr(e),ie(),Ds=null}function Ws(e){const t=t=>{e.exposed=t||{}};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}function qs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mt(it(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Ps?Ps[n](e):void 0}))}function Ks(e,t=Ds){t&&(t.effects||(t.effects=[])).push(e)}const Gs=/(?:^|[-_])(\w)/g;function Js(e){return S(e)&&e.displayName||e.name}function Xs(e,t,n=!1){let r=Js(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?r.replace(Gs,(e=>e.toUpperCase())).replace(/[-_]/g,""):n?"App":"Anonymous"}function Ys(e){const t=function(e){let t,n;return S(e)?(t=e,n=p):(t=e.get,n=e.set),new bt(t,n,S(e)||!e.set)}(e);return Ks(t.effect),t}const Zs=e=>"function"==typeof e;function Qs(){return null}const eo=Qs;function to(){const e=Fs();return e.setupContext||(e.setupContext=Ws(e))}function no(e,t,n){const r=arguments.length;return 2===r?A(t)&&!I(t)?ps(t)?_s(e,null,[t]):_s(e,t):_s(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ps(n)&&(n=[n]),_s(e,t,n))}const ro=Symbol("");const so="3.1.5",oo="undefined"!=typeof document?document:null,io=new Map,ao={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?oo.createElementNS("http://www.w3.org/2000/svg",e):oo.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>oo.createTextNode(e),createComment:e=>oo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>oo.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const s=n?n.previousSibling:t.lastChild;let o=io.get(e);if(!o){const t=oo.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}io.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const co=/\s*!important$/;function lo(e,t,n){if(I(n))n.forEach((n=>lo(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=ho[t];if(n)return n;let r=j(t);if("filter"!==r&&r in e)return ho[t]=r;r=$(r);for(let s=0;s<uo.length;s++){const n=uo[s]+r;if(n in e)return ho[t]=n}return t}(e,t);co.test(n)?e.setProperty(V(r),n.replace(co,""),"important"):e[r]=n}}const uo=["Webkit","Moz","ms"],ho={};const fo="http://www.w3.org/1999/xlink";let po=Date.now,mo=!1;if("undefined"!=typeof window){po()>document.createEvent("Event").timeStamp&&(po=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);mo=!!(e&&Number(e[1])<=53)}let go=0;const vo=Promise.resolve(),yo=()=>{go=0};function _o(e,t,n,r){e.addEventListener(t,n,r)}function bo(e,t,n,r,s=null){const o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{const[n,a]=function(e){let t;if(wo.test(e)){let n;for(t={};n=e.match(wo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[V(e.slice(2)),t]}(t);if(r){_o(e,n,o[t]=function(e,t){const n=e=>{const r=e.timeStamp||po();(mo||r>=n.attached-1)&&Ct(function(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>go||(vo.then(yo),go=po()))(),n}(r,s),a)}else i&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,i,a),o[t]=void 0)}}const wo=/(?:Once|Passive|Capture)$/;const ko=/^on[a-z]/;function Io(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{Io(n.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)Eo(e.el,t);else if(e.type===rs)e.children.forEach((e=>Io(e,t)));else if(e.type===is){let{el:n,anchor:r}=e;for(;n&&(Eo(n,t),n!==r);)n=n.nextSibling}}function Eo(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e])}}const To=(e,{slots:t})=>no(xn,Ao(e),t);To.displayName="Transition";const Co={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},So=To.props=_({},xn.props,Co),Ro=(e,t=[])=>{I(e)?e.forEach((e=>e(...t))):e&&e(...t)},Oo=e=>!!e&&(I(e)?e.some((e=>e.length>1)):e.length>1);function Ao(e){const t={};for(const _ in e)_ in Co||(t[_]=e[_]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:l=i,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,p=function(e){if(null==e)return null;if(A(e))return[xo(e.enter),xo(e.leave)];{const t=xo(e);return[t,t]}}(s),m=p&&p[0],g=p&&p[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:k,onBeforeAppear:I=v,onAppear:E=y,onAppearCancelled:T=b}=t,C=(e,t,n)=>{No(e,t?u:a),No(e,t?l:i),n&&n()},S=(e,t)=>{No(e,f),No(e,h),t&&t()},R=e=>(t,n)=>{const s=e?E:y,i=()=>C(t,e,n);Ro(s,[t,i]),Lo((()=>{No(t,e?c:o),Po(t,e?u:a),Oo(s)||Mo(t,r,m,i)}))};return _(t,{onBeforeEnter(e){Ro(v,[e]),Po(e,o),Po(e,i)},onBeforeAppear(e){Ro(I,[e]),Po(e,c),Po(e,l)},onEnter:R(!1),onAppear:R(!0),onLeave(e,t){const n=()=>S(e,t);Po(e,d),Bo(),Po(e,h),Lo((()=>{No(e,d),Po(e,f),Oo(w)||Mo(e,r,g,n)})),Ro(w,[e,n])},onEnterCancelled(e){C(e,!1),Ro(b,[e])},onAppearCancelled(e){C(e,!0),Ro(T,[e])},onLeaveCancelled(e){S(e),Ro(k,[e])}})}function xo(e){return K(e)}function Po(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function No(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Lo(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Uo=0;function Mo(e,t,n,r){const s=e._endId=++Uo,o=()=>{s===e._endId&&r()};if(n)return setTimeout(o,n);const{type:i,timeout:a,propCount:c}=Do(e,t);if(!i)return r();const l=i+"end";let u=0;const d=()=>{e.removeEventListener(l,h),o()},h=t=>{t.target===e&&++u>=c&&d()};setTimeout((()=>{u<c&&d()}),a+1),e.addEventListener(l,h)}function Do(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r("transitionDelay"),o=r("transitionDuration"),i=Fo(s,o),a=r("animationDelay"),c=r("animationDuration"),l=Fo(a,c);let u=null,d=0,h=0;"transition"===t?i>0&&(u="transition",d=i,h=o.length):"animation"===t?l>0&&(u="animation",d=l,h=c.length):(d=Math.max(i,l),u=d>0?i>l?"transition":"animation":null,h=u?"transition"===u?o.length:c.length:0);return{type:u,timeout:d,propCount:h,hasTransform:"transition"===u&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function Fo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>jo(t)+jo(e[n]))))}function jo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Bo(){return document.body.offsetHeight}const Vo=new WeakMap,$o=new WeakMap,zo={name:"TransitionGroup",props:_({},So,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Fs(),r=On();let s,o;return tr((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))}));n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=Do(r);return s.removeChild(r),o}(s[0].el,n.vnode.el,t))return;s.forEach(Ho),s.forEach(Wo);const r=s.filter(qo);Bo(),r.forEach((e=>{const n=e.el,r=n.style;Po(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const s=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",s),n._moveCb=null,No(n,t))};n.addEventListener("transitionend",s)}))})),()=>{const i=ot(e),a=Ao(i);let c=i.tag||rs;s=o,o=t.default?Dn(t.default()):[];for(let e=0;e<o.length;e++){const t=o[e];null!=t.key&&Mn(t,Nn(t,a,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];Mn(t,Nn(t,a,r,n)),Vo.set(t,t.el.getBoundingClientRect())}return _s(c,null,o)}}};function Ho(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Wo(e){$o.set(e,e.el.getBoundingClientRect())}function qo(e){const t=Vo.get(e),n=$o.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${s}px)`,t.transitionDuration="0s",e}}const Ko=e=>{const t=e.props["onUpdate:modelValue"];return I(t)?e=>W(t,e):t};function Go(e){e.target.composing=!0}function Jo(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const Xo={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Ko(s);const o=r||"number"===e.type;_o(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():o&&(r=K(r)),e._assign(r)})),n&&_o(e,"change",(()=>{e.value=e.value.trim()})),t||(_o(e,"compositionstart",Go),_o(e,"compositionend",Jo),_o(e,"change",Jo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},s){if(e._assign=Ko(s),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((r||"number"===e.type)&&K(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Yo={deep:!0,created(e,t,n){e._assign=Ko(n),_o(e,"change",(()=>{const t=e._modelValue,n=ni(e),r=e.checked,s=e._assign;if(I(t)){const e=l(t,n),o=-1!==e;if(r&&!o)s(t.concat(n));else if(!r&&o){const n=[...t];n.splice(e,1),s(n)}}else if(T(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(ri(e,r))}))},mounted:Zo,beforeUpdate(e,t,n){e._assign=Ko(n),Zo(e,t,n)}};function Zo(e,{value:t,oldValue:n},r){e._modelValue=t,I(t)?e.checked=l(t,r.props.value)>-1:T(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=c(t,ri(e,!0)))}const Qo={created(e,{value:t},n){e.checked=c(t,n.props.value),e._assign=Ko(n),_o(e,"change",(()=>{e._assign(ni(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Ko(r),t!==n&&(e.checked=c(t,r.props.value))}},ei={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=T(t);_o(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?K(ni(e)):ni(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=Ko(r)},mounted(e,{value:t}){ti(e,t)},beforeUpdate(e,t,n){e._assign=Ko(n)},updated(e,{value:t}){ti(e,t)}};function ti(e,t){const n=e.multiple;if(!n||I(t)||T(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],o=ni(s);if(n)I(t)?s.selected=l(t,o)>-1:s.selected=t.has(o);else if(c(ni(s),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ni(e){return"_value"in e?e._value:e.value}function ri(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const si={created(e,t,n){oi(e,t,n,null,"created")},mounted(e,t,n){oi(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){oi(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){oi(e,t,n,r,"updated")}};function oi(e,t,n,r,s){let o;switch(e.tagName){case"SELECT":o=ei;break;case"TEXTAREA":o=Xo;break;default:switch(n.props&&n.props.type){case"checkbox":o=Yo;break;case"radio":o=Qo;break;default:o=Xo}}const i=o[s];i&&i(e,t,n,r)}const ii=["ctrl","shift","alt","meta"],ai={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ii.some((n=>e[`${n}Key`]&&!t.includes(n)))},ci=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ai[t[e]];if(r&&r(n,t))return}return e(n,...r)},li={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ui=(e,t)=>n=>{if(!("key"in n))return;const r=V(n.key);return t.some((e=>e===r||li[e]===r))?e(n):void 0},di={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):hi(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),hi(e,!0),r.enter(e)):r.leave(e,(()=>{hi(e,!1)})):hi(e,t))},beforeUnmount(e,{value:t}){hi(e,t)}};function hi(e,t){e.style.display=t?e._vod:"none"}const fi=_({patchProp:(e,t,r,s,o=!1,i,a,c,l)=>{switch(t){case"class":!function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o);break;case"style":!function(e,t,n){const r=e.style;if(n)if(R(n)){if(t!==n){const t=r.display;r.cssText=n,"_vod"in e&&(r.display=t)}}else{for(const e in n)lo(r,e,n[e]);if(t&&!R(t))for(const e in t)null==n[e]&&lo(r,e,"")}else e.removeAttribute("style")}(e,r,s);break;default:v(t)?y(t)||bo(e,t,0,s,a):function(e,t,n,r){if(r)return"innerHTML"===t||!!(t in e&&ko.test(t)&&S(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(ko.test(t)&&R(n))return!1;return t in e}(e,t,s,o)?function(e,t,n,r,s,o,i){if("innerHTML"===t||"textContent"===t)return r&&i(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(a){}return void e.removeAttribute(t)}}try{e[t]=n}catch(c){}}(e,t,s,i,a,c,l):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),function(e,t,r,s,o){if(s&&t.startsWith("xlink:"))null==r?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,r);else{const s=n(t);null==r||s&&!1===r?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}(e,t,s,o))}},forcePatchProp:(e,t)=>"value"===t},ao);let pi,mi=!1;function gi(){return pi||(pi=zr(fi))}function vi(){return pi=mi?pi:Hr(fi),mi=!0,pi}const yi=(...e)=>{const t=gi().createApp(...e),{mount:n}=t;return t.mount=e=>{const r=_i(e);if(!r)return;const s=t._component;S(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function _i(e){if(R(e)){return document.querySelector(e)}return e}var bi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",compile:()=>{},customRef:function(e){return new gt(e)},isProxy:st,isReactive:nt,isReadonly:rt,isRef:ct,markRaw:it,proxyRefs:mt,reactive:Ze,readonly:et,ref:lt,shallowReactive:Qe,shallowReadonly:function(e){return tt(e,!0,ke,qe,Xe)},shallowRef:ut,toRaw:ot,toRef:_t,toRefs:vt,triggerRef:function(e){ce(ot(e),"set","value",void 0)},unref:ft,camelize:j,capitalize:$,toDisplayString:u,toHandlerKey:z,BaseTransition:xn,Comment:os,Fragment:rs,KeepAlive:$n,Static:is,Suspense:pn,Teleport:Zr,Text:ss,callWithAsyncErrorHandling:Ct,callWithErrorHandling:Tt,cloneVNode:bs,compatUtils:null,computed:Ys,createBlock:fs,createCommentVNode:Is,createHydrationRenderer:Hr,createRenderer:zr,createSlots:function(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(I(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.fn)}return e},createStaticVNode:ks,createTextVNode:ws,createVNode:_s,defineAsyncComponent:function(e){S(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:o,suspensible:i=!0,onError:a}=e;let c,l=null,u=0;const d=()=>{let e;return l||(e=l=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),a)return new Promise(((t,n)=>{a(e,(()=>t((u++,l=null,d()))),(()=>n(e)),u+1)}));throw e})).then((t=>e!==l&&l?l:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),c=t,t))))};return Fn({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const e=Ds;if(c)return()=>Bn(c,e);const t=t=>{l=null,St(t,e,13,!r)};if(i&&e.suspense)return d().then((t=>()=>Bn(t,e))).catch((e=>(t(e),()=>r?_s(r,{error:e}):null)));const a=lt(!1),u=lt(),h=lt(!!s);return s&&setTimeout((()=>{h.value=!1}),s),null!=o&&setTimeout((()=>{if(!a.value&&!u.value){const e=new Error(`Async component timed out after ${o}ms.`);t(e),u.value=e}}),o),d().then((()=>{a.value=!0,e.parent&&Vn(e.parent.vnode)&&$t(e.parent.update)})).catch((e=>{t(e),u.value=e})),()=>a.value&&c?Bn(c,e):u.value&&r?_s(r,{error:u.value}):n&&!h.value?_s(n):void 0}})},defineComponent:Fn,defineEmit:eo,defineEmits:Qs,defineExpose:function(e){},defineProps:function(){return null},get devtools(){return Xt},getCurrentInstance:Fs,getTransitionRawChildren:Dn,h:no,handleError:St,initCustomFormatter:function(){},inject:wn,isRuntimeOnly:()=>!Vs,isVNode:ps,mergeDefaults:function(e,t){for(const n in t){const r=e[n];r?r.default=t[n]:null===r&&(e[n]={default:t[n]})}return e},mergeProps:Ss,nextTick:Vt,onActivated:Hn,onBeforeMount:Zn,onBeforeUnmount:nr,onBeforeUpdate:er,onDeactivated:Wn,onErrorCaptured:ar,onMounted:Qn,onRenderTracked:ir,onRenderTriggered:or,onServerPrefetch:sr,onUnmounted:rr,onUpdated:tr,openBlock:ls,popScopeId:sn,provide:bn,pushScopeId:rn,queuePostFlushCb:Wt,registerRuntimeCompiler:function(e){Vs=e},renderList:Rs,renderSlot:Os,resolveComponent:Qr,resolveDirective:function(e){return ts("directives",e)},resolveDynamicComponent:function(e){return R(e)?ts("components",e,!1)||e:e||es},resolveFilter:null,resolveTransitionHooks:Nn,setBlockTracking:hs,setDevtoolsHook:function(e){Xt=e},setTransitionHooks:Mn,ssrContextKey:ro,ssrUtils:null,toHandlers:function(e){const t={};for(const n in e)t[z(n)]=e[n];return t},transformVNodeArgs:function(e){},useAttrs:function(){return to().attrs},useContext:function(){return to()},useSSRContext:()=>{{const e=wn(ro);return e||kt("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}},useSlots:function(){return to().slots},useTransitionState:On,version:so,warn:kt,watch:En,watchEffect:kn,withAsyncContext:function(e){const t=Fs();let n=e();var r;return js(null),(e=>null!==e&&"object"==typeof e)(r=n)&&Zs(r.then)&&Zs(r.catch)&&(n=n.catch((e=>{throw js(t),e}))),[n,()=>js(t)]},withCtx:an,withDefaults:function(e,t){return null},withDirectives:xr,withScopeId:on,Transition:To,TransitionGroup:zo,createApp:yi,createSSRApp:(...e)=>{const t=vi().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=_i(e);if(t)return n(t,!0,t instanceof SVGElement)},t},hydrate:(...e)=>{vi().hydrate(...e)},render:(...e)=>{gi().render(...e)},useCssModule:function(e="$style"){{const t=Fs();if(!t)return h;const n=t.type.__cssModules;if(!n)return h;const r=n[e];return r||h}},useCssVars:function(e){const t=Fs();if(!t)return;const n=()=>Io(t.subTree,e(t.proxy));Qn((()=>kn(n,{flush:"post"}))),tr(n)},vModelCheckbox:Yo,vModelDynamic:si,vModelRadio:Qo,vModelSelect:ei,vModelText:Xo,vShow:di,withKeys:ui,withModifiers:ci});
/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const wi="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ki=e=>wi?Symbol(e):"_vr_"+e,Ii=ki("rvlm"),Ei=ki("rvd"),Ti=ki("r"),Ci=ki("rl"),Si=ki("rvl"),Ri="undefined"!=typeof window;const Oi=Object.assign;function Ai(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}let xi=()=>{};const Pi=/\/$/;function Ni(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),s=e(o)),c>-1&&(r=r||t.slice(0,c),i=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,o,i=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],1!==i&&"."!==o){if(".."!==o)break;i--}return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+i,path:r,query:s,hash:i}}function Li(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function Ui(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!Di(e[n],t[n]))return!1;return!0}function Di(e,t){return Array.isArray(e)?Fi(e,t):Array.isArray(t)?Fi(t,e):e===t}function Fi(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var ji,Bi,Vi,$i;function zi(e){if(!e)if(Ri){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Pi,"")}(Bi=ji||(ji={})).pop="pop",Bi.push="push",($i=Vi||(Vi={})).back="back",$i.forward="forward",$i.unknown="";const Hi=/^[^#]+#/;function Wi(e,t){return e.replace(Hi,"#")+t}const qi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ki(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#"),s="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Gi(e,t){return(history.state?history.state.position-t:-1)+e}const Ji=new Map;function Xi(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let t=s.includes(e.slice(o))?e.slice(o).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),Li(n,"")}return Li(n,e)+r+s}function Yi(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?qi():null}}function Zi(e){const{history:t,location:n}=window;let r={value:Xi(e,n)},s={value:t.state};function o(r,o,i){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[i?"replaceState":"pushState"](o,"",c),s.value=o}catch(l){console.error(l),n[i?"replace":"assign"](c)}}return s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:function(e,n){const i=Oi({},s.value,t.state,{forward:e,scroll:qi()});o(i.current,i,!0),o(e,Oi({},Yi(r.value,e,null),{position:i.position+1},n),!1),r.value=e},replace:function(e,n){o(e,Oi({},t.state,Yi(s.value.back,e,s.value.forward,!0),n,{position:s.value.position}),!0),r.value=e}}}function Qi(e){const t=Zi(e=zi(e)),n=function(e,t,n,r){let s=[],o=[],i=null;const a=({state:o})=>{const a=Xi(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,i&&i===c)return void(i=null);u=l?o.position-l.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:u,type:ji.pop,direction:u?u>0?Vi.forward:Vi.back:Vi.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(Oi({},e.state,{scroll:qi()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){i=n.value},listen:function(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return o.push(t),t},destroy:function(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=Oi({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Wi.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function ea(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),Qi(e)}function ta(e){return"string"==typeof e||"symbol"==typeof e}const na={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ra=ki("nf");var sa,oa;function ia(e,t){return Oi(new Error,{type:e,[ra]:!0},t)}function aa(e,t){return e instanceof Error&&ra in e&&(null==t||!!(e.type&t))}(oa=sa||(sa={}))[oa.aborted=4]="aborted",oa[oa.cancelled=8]="cancelled",oa[oa.duplicated=16]="duplicated";const ca={sensitive:!1,strict:!1,start:!0,end:!0},la=/[.+*?^${}()[\]/\\]/g;function ua(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function da(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const e=ua(r[n],s[n]);if(e)return e;n++}return s.length-r.length}const ha={type:0,value:""},fa=/[a-zA-Z0-9_]/;function pa(e,t,n){const r=function(e,t){const n=Oi({},ca,t);let r=[],s=n.start?"^":"";const o=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let t=0;t<c.length;t++){const r=c[t];let i=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(la,"\\$&"),i+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;o.push({name:e,repeatable:n,optional:l});const d=u||"[^/]+?";if("[^/]+?"!==d){i+=10;try{new RegExp(`(${d})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+a.message)}}let h=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(h=l&&c.length<2?`(?:/${h})`:"/"+h),l&&(h+="?"),s+=h,i+=20,l&&(i+=-8),n&&(i+=-20),".*"===d&&(i+=-50)}e.push(i)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");return{re:i,score:r,keys:o,parse:function(e){const t=e.match(i),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=o[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:i,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!i)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[ha]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a,c=0,l="",u="";function d(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),i()):":"===a?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:fa.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),d(),i(),s}(e.path),n),s=Oi(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function ma(e,t){const n=[],r=new Map;function s(e,n,r){let a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ga(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=_a(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Oi({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let d,h;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(d=pa(t,n,l),r?r.alias.push(d):(h=h||d,h!==d&&h.alias.push(d),a&&e.name&&!va(d)&&o(e.name)),"children"in c){let e=c.children;for(let t=0;t<e.length;t++)s(e[t],d,r&&r.children[t])}r=r||d,i(d)}return h?()=>{o(h)}:xi}function o(e){if(ta(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function i(e){let t=0;for(;t<n.length&&da(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!va(e)&&r.set(e.record.name,e)}return t=_a({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:function(e,t){let s,o,i,a={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw ia(1,{location:e});i=s.record.name,a=Oi(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),o=s.stringify(a)}else if("path"in e)o=e.path,s=n.find((e=>e.re.test(o))),s&&(a=s.parse(o),i=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw ia(1,{location:e,currentLocation:t});i=s.record.name,a=Oi({},t.params,e.params),o=s.stringify(a)}const c=[];let l=s;for(;l;)c.unshift(l.record),l=l.parent;return{name:i,path:o,params:a,matched:c,meta:ya(c)}},removeRoute:o,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ga(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function va(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ya(e){return e.reduce(((e,t)=>Oi(e,t.meta)),{})}function _a(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const ba=/#/g,wa=/&/g,ka=/\//g,Ia=/=/g,Ea=/\?/g,Ta=/\+/g,Ca=/%5B/g,Sa=/%5D/g,Ra=/%5E/g,Oa=/%60/g,Aa=/%7B/g,xa=/%7C/g,Pa=/%7D/g,Na=/%20/g;function La(e){return encodeURI(""+e).replace(xa,"|").replace(Ca,"[").replace(Sa,"]")}function Ua(e){return La(e).replace(Ta,"%2B").replace(Na,"+").replace(ba,"%23").replace(wa,"%26").replace(Oa,"`").replace(Aa,"{").replace(Pa,"}").replace(Ra,"^")}function Ma(e){return function(e){return La(e).replace(ba,"%23").replace(Ea,"%3F")}(e).replace(ka,"%2F")}function Da(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Fa(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(Ta," ");let s=e.indexOf("="),o=Da(s<0?e:e.slice(0,s)),i=s<0?null:Da(e.slice(s+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(i)}else t[o]=i}return t}function ja(e){let t="";for(let n in e){const r=e[n];if(n=Ua(n).replace(Ia,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&Ua(e))):[r&&Ua(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ba(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Va(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function $a(e,t,n,r,s){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((i,a)=>{const c=e=>{var c;!1===e?a(ia(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(ia(2,{from:t,to:e})):(o&&r.enterCallbacks[s]===o&&"function"==typeof e&&o.push(e),i())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function za(e,t,n,r){const s=[];for(const i of e)for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if("object"==typeof(o=a)||"displayName"in o||"props"in o||"__vccOpts"in o){const o=(a.__vccOpts||a)[t];o&&s.push($a(o,n,r,i,e))}else{let o=a();s.push((()=>o.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const o=(a=s).__esModule||wi&&"Module"===a[Symbol.toStringTag]?s.default:s;var a;i.components[e]=o;const c=(o.__vccOpts||o)[t];return c&&$a(c,n,r,i,e)()}))))}}var o;return s}function Ha(e){const t=wn(Ti),n=wn(Ci),r=Ys((()=>t.resolve(ft(e.to)))),s=Ys((()=>{let{matched:e}=r.value,{length:t}=e;const s=e[t-1];let o=n.matched;if(!s||!o.length)return-1;let i=o.findIndex(Ui.bind(null,s));if(i>-1)return i;let a=qa(e[t-2]);return t>1&&qa(s)===a&&o[o.length-1].path!==a?o.findIndex(Ui.bind(null,e[t-2])):i})),o=Ys((()=>s.value>-1&&function(e,t){for(let n in t){let r=t[n],s=e[n];if("string"==typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}(n.params,r.value.params))),i=Ys((()=>s.value>-1&&s.value===n.matched.length-1&&Mi(n.params,r.value.params)));return{route:r,href:Ys((()=>r.value.href)),isActive:o,isExactActive:i,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[ft(e.replace)?"replace":"push"](ft(e.to)).catch(xi):Promise.resolve()}}}const Wa=Fn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ha,setup(e,{slots:t}){const n=Ze(Ha(e)),{options:r}=wn(Ti),s=Ys((()=>({[Ka(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ka(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:no("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}});function qa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ka=(e,t,n)=>null!=e?e:null!=t?t:n;function Ga(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ja=Fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=wn(Si),s=Ys((()=>e.route||r.value)),o=wn(Ei,0),i=Ys((()=>s.value.matched[o]));bn(Ei,o+1),bn(Ii,i),bn(Si,s);const a=lt();return En((()=>[a.value,i.value,e.name]),(([e,t,n],[r,s,o])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&Ui(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,o=i.value,c=o&&o.components[e.name],l=e.name;if(!c)return Ga(n.default,{Component:c,route:r});const u=o.props[e.name],d=u?!0===u?r.params:"function"==typeof u?u(r):u:null,h=no(c,Oi({},d,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[l]=null)},ref:a}));return Ga(n.default,{Component:h,route:r})||h}}});function Xa(e){const t=ma(e.routes,e);let n=e.parseQuery||Fa,r=e.stringifyQuery||ja,s=e.history;const o=Va(),i=Va(),a=Va(),c=ut(na);let l=na;Ri&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ai.bind(null,(e=>""+e)),d=Ai.bind(null,Ma),h=Ai.bind(null,Da);function f(e,o){if(o=Oi({},o||c.value),"string"==typeof e){let r=Ni(n,e,o.path),i=t.resolve({path:r.path},o),a=s.createHref(r.fullPath);return Oi(r,i,{params:h(i.params),hash:Da(r.hash),redirectedFrom:void 0,href:a})}let i;"path"in e?i=Oi({},e,{path:Ni(n,e.path,o.path).path}):(i=Oi({},e,{params:d(e.params)}),o.params=d(o.params));let a=t.resolve(i,o);const l=e.hash||"";a.params=u(h(a.params));const f=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,Oi({},e,{hash:(p=l,La(p).replace(Aa,"{").replace(Pa,"}").replace(Ra,"^")),path:a.path}));var p;let m=s.createHref(f);return Oi({fullPath:f,hash:l,query:r===ja?Ba(e.query):e.query},a,{redirectedFrom:void 0,href:m})}function p(e){return"string"==typeof e?Ni(n,e,c.value.path):Oi({},e)}function m(e,t){if(l!==e)return ia(8,{from:t,to:e})}function g(e){return y(e)}function v(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),Oi({query:e.query,hash:e.hash,params:e.params},r)}}function y(e,t){const n=l=f(e),s=c.value,o=e.state,i=e.force,a=!0===e.replace,u=v(n);if(u)return y(Oi(p(u),{state:o,force:i,replace:a}),t||n);const d=n;let h;return d.redirectedFrom=t,!i&&function(e,t,n){let r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ui(t.matched[r],n.matched[s])&&Mi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,s,n)&&(h=ia(16,{to:d,from:s}),A(s,s,!0,!1)),(h?Promise.resolve(h):b(d,s)).catch((e=>aa(e)?e:R(e,d,s))).then((e=>{if(e){if(aa(e,2))return y(Oi(p(e.to),{state:o,force:i,replace:a}),t||d)}else e=k(d,s,!0,a,o);return w(d,s,e),e}))}function _(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e,t){let n;const[r,s,a]=function(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const o=t.matched[i];o&&(e.matched.find((e=>Ui(e,o)))?r.push(o):n.push(o));const a=e.matched[i];a&&(t.matched.find((e=>Ui(e,a)))||s.push(a))}return[n,r,s]}(e,t);n=za(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push($a(r,e,t))}));const c=_.bind(null,e,t);return n.push(c),Ya(n).then((()=>{n=[];for(const r of o.list())n.push($a(r,e,t));return n.push(c),Ya(n)})).then((()=>{n=za(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push($a(r,e,t))}));return n.push(c),Ya(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push($a(s,e,t));else n.push($a(r.beforeEnter,e,t));return n.push(c),Ya(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=za(a,"beforeRouteEnter",e,t),n.push(c),Ya(n)))).then((()=>{n=[];for(const r of i.list())n.push($a(r,e,t));return n.push(c),Ya(n)})).catch((e=>aa(e,8)?e:Promise.reject(e)))}function w(e,t,n){for(const r of a.list())r(e,t,n)}function k(e,t,n,r,o){const i=m(e,t);if(i)return i;const a=t===na,l=Ri?history.state:{};n&&(r||a?s.replace(e.fullPath,Oi({scroll:a&&l&&l.scroll},o)):s.push(e.fullPath,o)),c.value=e,A(e,t,n,a),O()}let I;function E(){I=s.listen(((e,t,n)=>{let r=f(e);const o=v(r);if(o)return void y(Oi(o,{replace:!0}),r).catch(xi);l=r;const i=c.value;var a,u;Ri&&(a=Gi(i.fullPath,n.delta),u=qi(),Ji.set(a,u)),b(r,i).catch((e=>aa(e,12)?e:aa(e,2)?(y(e.to,r).then((e=>{aa(e,20)&&!n.delta&&n.type===ji.pop&&s.go(-1,!1)})).catch(xi),Promise.reject()):(n.delta&&s.go(-n.delta,!1),R(e,r,i)))).then((e=>{(e=e||k(r,i,!1))&&(n.delta?s.go(-n.delta,!1):n.type===ji.pop&&aa(e,20)&&s.go(-1,!1)),w(r,i,e)})).catch(xi)}))}let T,C=Va(),S=Va();function R(e,t,n){O(e);const r=S.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function O(e){T||(T=!0,E(),C.list().forEach((([t,n])=>e?n(e):t())),C.reset())}function A(t,n,r,s){const{scrollBehavior:o}=e;if(!Ri||!o)return Promise.resolve();let i=!r&&function(e){const t=Ji.get(e);return Ji.delete(e),t}(Gi(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Vt().then((()=>o(t,n,i))).then((e=>e&&Ki(e))).catch((e=>R(e,t,n)))}const x=e=>s.go(e);let P;const N=new Set;return{currentRoute:c,addRoute:function(e,n){let r,s;return ta(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)},removeRoute:function(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:g,replace:function(e){return g(Oi(p(e),{replace:!0}))},go:x,back:()=>x(-1),forward:()=>x(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:S.add,isReady:function(){return T&&c.value!==na?Promise.resolve():new Promise(((e,t)=>{C.add([e,t])}))},install(e){e.component("RouterLink",Wa),e.component("RouterView",Ja),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(c)}),Ri&&!P&&c.value===na&&(P=!0,g(s.location).catch((e=>{})));const t={};for(let r in na)t[r]=Ys((()=>c.value[r]));e.provide(Ti,this),e.provide(Ci,Ze(t)),e.provide(Si,c);let n=e.unmount;N.add(e),e.unmount=function(){N.delete(e),N.size<1&&(I(),c.value=na,P=!1,T=!1),n()}}}}function Ya(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function Za(){return wn(Ti)}function Qa(){return wn(Ci)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],o=s+1<e.length,i=o?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,l=t>>2,u=(3&t)<<4|i>>4;let d=(15&i)<<2|c>>6,h=63&c;a||(h=64,o||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&o)}else if(s>239&&s<365){const o=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&o)<<6|63&i)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],o=s<e.length?n[e.charAt(s)]:0;++s;const i=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==i||null==a)throw Error();const c=t<<2|o>>4;if(r.push(c),64!==i){const e=o<<4&240|i>>2;if(r.push(e),64!==a){const e=i<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class rc extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,rc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sc.prototype.create)}}class sc{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?function(e,t){return e.replace(oc,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",i=`${this.serviceName}: ${o} (${r}).`;return new rc(r,i,n)}}const oc=/\{\$([^}]+)}/g;function ic(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],o=t[s];if(ac(n)&&ac(o)){if(!ic(n,o))return!1}else if(n!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ac(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function lc(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function uc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class dc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=hc),void 0===r.error&&(r.error=hc),void 0===r.complete&&(r.complete=hc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function hc(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e){return e&&e._delegate?e._delegate:e}class pc{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new tc;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class gc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vc,yc;(yc=vc||(vc={}))[yc.DEBUG=0]="DEBUG",yc[yc.VERBOSE=1]="VERBOSE",yc[yc.INFO=2]="INFO",yc[yc.WARN=3]="WARN",yc[yc.ERROR=4]="ERROR",yc[yc.SILENT=5]="SILENT";const _c={debug:vc.DEBUG,verbose:vc.VERBOSE,info:vc.INFO,warn:vc.WARN,error:vc.ERROR,silent:vc.SILENT},bc=vc.INFO,wc={[vc.DEBUG]:"log",[vc.VERBOSE]:"log",[vc.INFO]:"info",[vc.WARN]:"warn",[vc.ERROR]:"error"},kc=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=wc[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class Ic{constructor(e){this.name=e,this._logLevel=bc,this._logHandler=kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in vc))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?_c[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,vc.DEBUG,...e),this._logHandler(this,vc.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,vc.VERBOSE,...e),this._logHandler(this,vc.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,vc.INFO,...e),this._logHandler(this,vc.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,vc.WARN,...e),this._logHandler(this,vc.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,vc.ERROR,...e),this._logHandler(this,vc.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Tc="@firebase/app",Cc=new Ic("@firebase/app"),Sc={[Tc]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Rc=new Map,Oc=new Map;function Ac(e,t){try{e.container.addComponent(t)}catch(n){Cc.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xc(e){const t=e.name;if(Oc.has(t))return Cc.debug(`There were multiple attempts to register component ${t}.`),!1;Oc.set(t,e);for(const n of Rc.values())Ac(n,e);return!0}function Pc(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new sc("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lc{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new pc("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nc.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Nc.create("bad-app-name",{appName:String(r)});const s=Rc.get(r);if(s){if(ic(e,s.options)&&ic(n,s.config))return s;throw Nc.create("duplicate-app",{appName:r})}const o=new gc(r);for(const a of Oc.values())o.addComponent(a);const i=new Lc(e,n,o);return Rc.set(r,i),i}function Mc(e="[DEFAULT]"){const t=Rc.get(e);if(!t)throw Nc.create("no-app",{appName:e});return t}function Dc(e,t,n){var r;let s=null!==(r=Sc[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Cc.warn(e.join(" "))}xc(new pc(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fc;Fc="",xc(new pc("platform-logger",(e=>new Ec(e)),"PRIVATE")),Dc(Tc,"0.7.7",Fc),Dc(Tc,"0.7.7","esm2017"),Dc("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Dc("firebase","9.4.0","app");class jc extends rc{constructor(e,t){super(Bc(e),`Firebase Storage: ${t} (${Bc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jc.prototype)}_codeEquals(e){return Bc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Bc(e){return"storage/"+e}function Vc(){return new jc("unknown","An unknown error occurred, please check the error payload for server response.")}function $c(e){return new jc("invalid-argument",e)}function zc(){return new jc("app-deleted","The Firebase app was deleted.")}function Hc(e,t){return new jc("invalid-format","String does not match format '"+e+"': "+t)}function Wc(e){throw new jc("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=qc.makeFromUrl(e,t)}catch(r){return new qc(e,"")}if(""===n.path)return n;throw new jc("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let c=0;c<a.length;c++){const t=a[c],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let s=r[t.indices.path];s||(s=""),n=new qc(e,s),t.postModify(n);break}}if(null==n)throw function(e){return new jc("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class Kc{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e){return"string"==typeof e||e instanceof String}function Jc(e){return Xc()&&e instanceof Blob}function Xc(){return"undefined"!=typeof Blob}function Yc(e,t,n,r){if(r<t)throw $c(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw $c(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Qc(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var el,tl;(tl=el||(el={}))[tl.NO_ERROR=0]="NO_ERROR",tl[tl.NETWORK_ERROR=1]="NETWORK_ERROR",tl[tl.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl{constructor(e,t,n,r,s,o,i,a,c,l,u){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new rl(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===el.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=n.getErrorCode()===el.ABORT;return void e(!1,new rl(!1,null,t))}const o=-1!==this.successCodes_.indexOf(s);e(!0,new rl(o,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponseText());void 0!==e?n(e):n()}catch(o){r(o)}else if(null!==s){const e=Vc();e.serverResponse=s.getResponseText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?zc():new jc("canceled","User canceled the upload/download."))}else{r(new jc("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new rl(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,o=!1,i=0;function a(){return 2===i}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function u(t){s=setTimeout((()=>{s=null,e(d,a())}),t)}function d(e,...t){if(c)return;if(e)return void l.call(null,e,...t);if(a()||o)return void l.call(null,e,...t);let n;r<64&&(r*=2),1===i?(i=2,n=0):n=1e3*(r+Math.random()),u(n)}let h=!1;function f(e){h||(h=!0,c||(null!==s?(e||(i=2),clearTimeout(s),u(0)):e||(i=1)))}return u(0),setTimeout((()=>{o=!0,f(!0)}),n),f}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class rl{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function sl(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Xc())return new Blob(e);throw new jc("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ol="raw",il="base64",al="base64url",cl="data_url";class ll{constructor(e,t){this.data=e,this.contentType=t||null}}function ul(e,t){switch(e){case ol:return new ll(dl(t));case il:case al:return new ll(hl(e,t));case cl:return new ll(function(e){const t=new fl(e);return t.base64?hl(il,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw Hc(cl,"Malformed data URL.")}return dl(t)}(t.rest)}(t),new fl(t).contentType)}throw Vc()}function dl(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function hl(e,t){switch(e){case il:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw Hc(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case al:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw Hc(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(s){throw Hc(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class fl{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Hc(cl,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class pl{constructor(e,t){let n=0,r="";Jc(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Jc(this.data_)){const o=this.data_,i=(r=e,s=t,(n=o).webkitSlice?n.webkitSlice(r,s):n.mozSlice?n.mozSlice(r,s):n.slice?n.slice(r,s):null);return null===i?null:new pl(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new pl(n,!0)}var n,r,s;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(Xc()){const t=e.map((e=>e instanceof pl?e.data_:e));return new pl(sl.apply(null,t))}{const t=e.map((e=>Gc(e)?ul(ol,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new pl(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(e){let t;try{t=JSON.parse(e)}catch(r){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e,t){return t}class yl{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||vl}}let _l=null;function bl(){if(_l)return _l;const e=[];e.push(new yl("bucket")),e.push(new yl("generation")),e.push(new yl("metageneration")),e.push(new yl("name","fullPath",!0));const t=new yl("name");t.xform=function(e,t){return function(e){return!Gc(e)||e.length<2?e:gl(e)}(t)},e.push(t);const n=new yl("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new yl("timeCreated")),e.push(new yl("updated")),e.push(new yl("md5Hash",null,!0)),e.push(new yl("cacheControl",null,!0)),e.push(new yl("contentDisposition",null,!0)),e.push(new yl("contentEncoding",null,!0)),e.push(new yl("contentLanguage",null,!0)),e.push(new yl("contentType",null,!0)),e.push(new yl("metadata","customMetadata",!0)),_l=e,_l}function wl(e,t,n){const r={type:"file"},s=n.length;for(let o=0;o<s;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new qc(n,r);return t._makeStorageReference(s)}})}(r,e),r}function kl(e,t,n){const r=ml(t);if(null===r)return null;return wl(e,r,n)}class Il{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e){if(!e)throw Vc()}function Tl(e,t){return function(n,r){const s=kl(e,r,t);return El(null!==s),function(e,t,n,r){const s=ml(t);if(null===s)return null;if(!Gc(s.downloadTokens))return null;const o=s.downloadTokens;if(0===o.length)return null;const i=encodeURIComponent;return o.split(",").map((t=>{const s=e.bucket,o=e.fullPath;return Zc("/b/"+i(s)+"/o/"+i(o),n,r)+Qc({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function Cl(e){return function(t,n){let r;var s,o;return 401===t.getStatus()?r=t.getResponseText().includes("Firebase App Check token is invalid")?new jc("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new jc("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new jc("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new jc("unauthorized","User does not have permission to access '"+s+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function Sl(e){const t=Cl(e);return function(n,r){let s=t(n,r);var o;return 404===n.getStatus()&&(o=e.path,s=new jc("object-not-found","Object '"+o+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function Rl(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const c=function(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}(t,r,s),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",u="\r\n--"+a+"--",d=pl.getBlob(l,r,u);if(null===d)throw new jc("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const h={name:c.fullPath},f=Zc(o,e.host,e._protocol),p=e.maxUploadRetryTime,m=new Il(f,"POST",function(e,t){return function(n,r){const s=kl(e,r,t);return El(null!==s),s}}(e,n),p);return m.urlParams=h,m.headers=i,m.body=d.uploadData(),m.errorHandler=Cl(t),m}class Ol{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=el.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=el.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=el.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw Wc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wc("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw Wc("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function Al(){return new Ol}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this._service=e,this._location=t instanceof qc?t:qc.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xl(e,t)}get root(){const e=new qc(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gl(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new qc(this._location.bucket,e);return new xl(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new jc("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Pl(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Zc(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new Il(r,"GET",Tl(e,n),s);return o.errorHandler=Sl(t),o}(e.storage,e._location,bl());return e.storage.makeRequestWithTokens(t,Al).then((e=>{if(null===e)throw new jc("no-download-url","The given file does not have any download URLs.");return e}))}function Nl(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=Zc(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,s=new Il(n,"DELETE",(function(e,t){}),r);return s.successCodes=[200,204],s.errorHandler=Sl(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Al)}function Ll(e,t){if(e instanceof Dl){const n=e;if(null==n._bucket)throw new jc("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new xl(n,n._bucket);return null!=t?Ll(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new qc(e._location.bucket,n);return new xl(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function Ul(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Dl)return new xl(e,t);throw $c("To use ref(service, url), the first argument must be a Storage instance.")}return Ll(e,t)}function Ml(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:qc.makeFromBucketSpec(n,e)}class Dl{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?qc.makeFromBucketSpec(r,this._host):Ml(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=qc.makeFromBucketSpec(this._url,e):this._bucket=Ml(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xl(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new Kc(zc());{const s=function(e,t,n,r,s,o){const i=Qc(e.urlParams),a=e.url+i,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new nl(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fl(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const r=Rl(e.storage,e._location,bl(),new pl(t,!0),n);return e.storage.makeRequestWithTokens(r,Al).then((t=>({metadata:t,ref:e})))}(e=fc(e),t,n)}function jl(e){return Pl(e=fc(e))}function Bl(e){return Nl(e=fc(e))}function Vl(e,t){return Ul(e=fc(e),t)}function $l(e=Mc(),t){return Pc(e=fc(e),"storage").getImmediate({identifier:t})}function zl(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Dl(n,r,s,t,"9.4.0")}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Hl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}function Wl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}xc(new pc("storage",zl,"PUBLIC").setMultipleInstances(!0)),Dc("@firebase/storage","0.8.6",""),Dc("@firebase/storage","0.8.6","esm2017");const ql=Wl,Kl=new sc("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Gl=new Ic("@firebase/auth");function Jl(e,...t){Gl.logLevel<=vc.ERROR&&Gl.error(`Auth (9.4.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e,...t){throw Zl(e,...t)}function Yl(e,...t){return Zl(e,...t)}function Zl(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kl.create(e,...t)}function Ql(e,t,...n){if(!e)throw Zl(t,...n)}function eu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jl(t),new Error(t)}function tu(e,t){e||eu(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Map;function ru(e){tu(e instanceof Function,"Expected a class definition");let t=nu.get(e);return t?(tu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,nu.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function su(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ou(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ou()&&"https:"!==ou()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(e,t){this.shortDelay=e,this.longDelay=t,tu(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nc())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return iu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(e,t){tu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void eu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void eu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void eu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},du=new au(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fu(e,t,n,r,s={}){return pu(e,s,(()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const i=cc(Object.assign({key:e.config.apiKey},o)).slice(1),a=new(lu.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),lu.fetch()(gu(e,e.config.apiHost,n,i),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function pu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uu),t);try{const t=new vu(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yu(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const t=s.ok?o.errorMessage:o.error.message,[n,i]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw yu(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw yu(e,"email-already-in-use",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw function(e,t,n){const r=Object.assign(Object.assign({},ql()),{[t]:n});return new sc("auth","Firebase",r).create(t,{appName:e.name})}(e,a,i);Xl(e,a)}}catch(s){if(s instanceof rc)throw s;Xl(e,"network-request-failed")}}async function mu(e,t,n,r,s={}){const o=await fu(e,t,n,r,s);return"mfaPendingCredential"in o&&Xl(e,"multi-factor-auth-required",{_serverResponse:o}),o}function gu(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?cu(e.config,s):`${e.config.apiScheme}://${s}`}class vu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Yl(this.auth,"timeout"))),du.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function yu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yl(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _u(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function bu(e){return 1e3*Number(e)}function wu(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Jl("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return ec.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(Jl("Failed to decode base64 JWT payload"),null)}catch(s){return Jl("Caught error parsing JWT payload as JSON",s),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ku(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof rc&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Iu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(e){var t;const n=e.auth,r=await e.getIdToken(),s=await ku(e,async function(e,t){return fu(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ql(null==s?void 0:s.users.length,n,"internal-error");const o=s.users[0];e._notifyReloadListener(o);const i=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Hl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=i,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Eu(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ql(e.idToken,"internal-error"),Ql(void 0!==e.idToken,"internal-error"),Ql(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=wu(e);return Ql(t,"internal-error"),Ql(void 0!==t.exp,"internal-error"),Ql(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ql(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await pu(e,{},(()=>{const n=cc({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=gu(e,r,"/v1/token",`key=${s}`);return lu.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,o=new Cu;return n&&(Ql("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(Ql("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),s&&(Ql("number"==typeof s,"internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cu,this.toJSON())}_performRefresh(){return eu("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(e,t){Ql("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ru{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=Hl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Iu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Eu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ku(this,this.stsTokenManager.getToken(this.auth,e));return Ql(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=fc(e),r=await n.getIdToken(t),s=wu(r);Ql(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,i=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:_u(bu(s.auth_time)),issuedAtTime:_u(bu(s.iat)),expirationTime:_u(bu(s.exp)),signInProvider:i||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=fc(e);await Tu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ql(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ru(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ql(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Tu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ku(this,async function(e,t){return fu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,o,i,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(i=t.tenantId)&&void 0!==i?i:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:k}=t;Ql(y&&k,e,"internal-error");const I=Cu.fromJSON(this.name,k);Ql("string"==typeof y,e,"internal-error"),Su(u,e.name),Su(d,e.name),Ql("boolean"==typeof _,e,"internal-error"),Ql("boolean"==typeof b,e,"internal-error"),Su(h,e.name),Su(f,e.name),Su(p,e.name),Su(m,e.name),Su(g,e.name),Su(v,e.name);const E=new Ru({uid:y,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Cu;r.updateFromServerResponse(t);const s=new Ru({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Tu(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ou.type="NONE";const Au=Ou;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(e,t,n){return`firebase:${e}:${t}:${n}`}class Pu{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=xu(this.userKey,r.apiKey,s),this.fullPersistenceKey=xu("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ru._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Pu(ru(Au),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||ru(Au);const o=xu(n,e.config.apiKey,e.name);let i=null;for(const l of t)try{const t=await l._get(o);if(t){const n=Ru._fromJSON(e,t);l!==s&&(i=n),s=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],i&&await s._set(o,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(o)}catch(c){}}))),new Pu(s,e,n)):new Pu(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Du(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Lu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ju(t))return"Blackberry";if(Bu(t))return"Webos";if(Uu(t))return"Safari";if((t.includes("chrome/")||Mu(t))&&!t.includes("edge/"))return"Chrome";if(Fu(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Lu(e=nc()){return/firefox\//i.test(e)}function Uu(e=nc()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mu(e=nc()){return/crios\//i.test(e)}function Du(e=nc()){return/iemobile/i.test(e)}function Fu(e=nc()){return/android/i.test(e)}function ju(e=nc()){return/blackberry/i.test(e)}function Bu(e=nc()){return/webos/i.test(e)}function Vu(e=nc()){return/iphone|ipad|ipod/i.test(e)}function $u(){return function(){const e=nc();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()&&10===document.documentMode}function zu(e=nc()){return Vu(e)||Fu(e)||Bu(e)||ju(e)||/windows phone/i.test(e)||Du(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hu(e,t=[]){let n;switch(e){case"Browser":n=Nu(nc());break;case"Worker":n=`${Nu(nc())}-${e}`;break;default:n=e}return`${n}/JsCore/9.4.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ku(this),this.idTokenSubscription=new Ku(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ru(t)),this._initializationPromise=this.queue((async()=>{var n,r;this._deleted||(this.persistenceManager=await Pu.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==s||!(null==o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(Ql(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tu(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?fc(e):null;return t&&Ql(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Ql(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ru(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sc("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ru(e)||this._popupRedirectResolver;Ql(t,this,"argument-error"),this.redirectPersistenceManager=await Pu.create(this,[ru(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ql(o,this,"internal-error"),o.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ql(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function qu(e){return fc(e)}class Ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new dc(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ql(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return eu("not implemented")}_getIdTokenResponse(e){return eu("not implemented")}_linkToIdToken(e,t){return eu("not implemented")}_getReauthenticationResolver(e){return eu("not implemented")}}async function Ju(e,t){return async function(e,t){return fu(e,"POST","/v1/accounts:sendOobCode",hu(e,t))}(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xu extends Gu{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xu(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xu(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return mu(e,"POST","/v1/accounts:signInWithPassword",hu(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return mu(e,"POST","/v1/accounts:signInWithEmailLink",hu(e,t))}(e,{email:this._email,oobCode:this._password});default:Xl(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return fu(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return mu(e,"POST","/v1/accounts:signInWithEmailLink",hu(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Xl(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(e,t){return mu(e,"POST","/v1/accounts:signInWithIdp",hu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zu(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xl("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=Hl(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Zu(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){return Yu(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Yu(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yu(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cc(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){var t,n,r,s,o,i;const a=lc(uc(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Ql(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(i=a.tenantId)&&void 0!==i?i:null}static parseLink(e){const t=function(e){const t=lc(uc(e)).link,n=t?lc(uc(t)).deep_link_id:null,r=lc(uc(e)).deep_link_id;return(r?lc(uc(r)).link:null)||r||n||t||e}(e);try{return new Qu(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.providerId=ed.PROVIDER_ID}static credential(e,t){return Xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qu.parseLink(t);return Ql(n,"argument-error"),Xu._fromEmailAndCode(e,n.code,n.tenantId)}}ed.PROVIDER_ID="password",ed.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ed.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class td{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends td{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends nd{constructor(){super("facebook.com")}static credential(e){return Zu._fromParams({providerId:rd.PROVIDER_ID,signInMethod:rd.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rd.credentialFromTaggedObject(e)}static credentialFromError(e){return rd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rd.credential(e.oauthAccessToken)}catch(t){return null}}}rd.FACEBOOK_SIGN_IN_METHOD="facebook.com",rd.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sd extends nd{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zu._fromParams({providerId:sd.PROVIDER_ID,signInMethod:sd.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sd.credentialFromTaggedObject(e)}static credentialFromError(e){return sd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return sd.credential(t,n)}catch(r){return null}}}sd.GOOGLE_SIGN_IN_METHOD="google.com",sd.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od extends nd{constructor(){super("github.com")}static credential(e){return Zu._fromParams({providerId:od.PROVIDER_ID,signInMethod:od.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return od.credentialFromTaggedObject(e)}static credentialFromError(e){return od.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return od.credential(e.oauthAccessToken)}catch(t){return null}}}od.GITHUB_SIGN_IN_METHOD="github.com",od.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class id extends nd{constructor(){super("twitter.com")}static credential(e,t){return Zu._fromParams({providerId:id.PROVIDER_ID,signInMethod:id.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return id.credentialFromTaggedObject(e)}static credentialFromError(e){return id.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return id.credential(t,n)}catch(r){return null}}}id.TWITTER_SIGN_IN_METHOD="twitter.com",id.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ad{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Ru._fromIdTokenResponse(e,n,r),o=cd(n);return new ad({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=cd(n);return new ad({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function cd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends rc{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ld.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ld(e,t,n,r)}}function ud(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ld._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dd(e,t,n=!1){const r="signIn",s=await ud(e,r,t),o=await ad._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(o.user),o}async function hd(e,t,n){const r=qu(e),s=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return mu(e,"POST","/v1/accounts:signUp",hu(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),o=await ad._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(o.user),o}function fd(e,t,n){return async function(e,t){return dd(qu(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(fc(e),ed.credential(t,n))}async function pd(e,t){const n=fc(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&function(e,t,n){var r;Ql((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Ql(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Ql(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Ql(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(n.auth,r,t);const{email:s}=await Ju(n.auth,r);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function md(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=fc(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await ku(r,async function(e,t){return fu(e,"POST","/v1/accounts:update",t)}(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const i=r.providerData.find((({providerId:e})=>"password"===e));i&&(i.displayName=r.displayName,i.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gd(e){return fc(e).signOut()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends vd{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=nc();return Uu(e)||Vu(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=zu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);$u()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yd.type="LOCAL";const _d=yd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends vd{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bd.type="SESSION";const wd=bd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new kd(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const i=Array.from(o).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(i);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Id(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kd.receivers=[];class Ed{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise(((i,a)=>{const c=Id("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),i(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cd(){return void 0!==Td().WorkerGlobalScope&&"function"==typeof Td().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sd="firebaseLocalStorageDb";class Rd{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Od(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ad(){const e=indexedDB.open(Sd,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Sd);return new Rd(e).toPromise()}(),t(await Ad()))}))}))}async function xd(e,t,n){const r=Od(e,!0).put({fbase_key:t,value:n});return new Rd(r).toPromise()}function Pd(e,t){const n=Od(e,!0).delete(t);return new Rd(n).toPromise()}class Nd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ad()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kd._getInstance(Cd()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ed(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ad();return await xd(e,"__sak","1"),await Pd(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>xd(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Od(e,!1).get(t),r=await new Rd(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Pd(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Od(e,!1).getAll();return new Rd(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Nd.type="LOCAL";const Ld=Nd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(e){return new Promise(((t,n)=>{const r=document.createElement("script");var s,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Yl("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==o?o:document).appendChild(r)}))}new au(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Md extends Gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yu(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yu(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yu(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dd(e){return dd(e.auth,new Md(e),e.bypassAuthState)}function Fd(e){const{auth:t,user:n}=e;return Ql(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const o=await ku(e,ud(r,s,t,e),n);Ql(o.idToken,r,"internal-error");const i=wu(o.idToken);Ql(i,r,"internal-error");const{sub:a}=i;return Ql(e.uid===a,r,"user-mismatch"),ad._forOperation(e,s,o)}catch(o){throw"auth/user-not-found"===(null==o?void 0:o.code)&&Xl(r,"user-mismatch"),o}}(n,new Md(e),e.bypassAuthState)}async function jd(e){const{auth:t,user:n}=e;return Ql(n,t,"internal-error"),async function(e,t,n=!1){const r=await ku(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ad._forOperation(e,"link",r)}(n,new Md(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:o,type:i}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dd;case"linkViaPopup":case"linkViaRedirect":return jd;case"reauthViaPopup":case"reauthViaRedirect":return Fd;default:Xl(this.auth,"internal-error")}}resolve(e){tu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new au(2e3,1e4);class $d extends Bd{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,$d.currentPopupAction&&$d.currentPopupAction.cancel(),$d.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ql(e,this.auth,"internal-error"),e}async onExecution(){tu(1===this.filter.length,"Popup operations only handle one event");const e=Id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Yl(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Yl(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$d.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Yl(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Vd.get())};e()}}$d.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zd=new Map;class Hd extends Bd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zd.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return xu("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return ru(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}zd.set(this.auth._key(),e)}return this.bypassAuthState||zd.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Wd(e,t,n=!1){const r=qu(e),s=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?ru(t):(Ql(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),o=new Hd(r,s,n),i=await o.execute();return i&&!n&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gd(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Gd(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Yl(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kd(e))}saveEventToCache(e){this.cachedEventUids.add(Kd(e)),this.lastProcessedEventTime=Date.now()}}function Kd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Gd({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xd=/^https?/;async function Yd(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return fu(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Zd(r))return}catch(n){}Xl(e,"unauthorized-domain")}function Zd(e){const t=su(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Xd.test(n))return!1;if(Jd.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=new au(3e4,6e4);function eh(){const e=Td().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function th(e){return new Promise(((t,n)=>{var r,s,o;function i(){eh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{eh(),n(Yl(e,"network-request-failed"))},timeout:Qd.get()})}if(null===(s=null===(r=Td().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Td().gapi)||void 0===o?void 0:o.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Td()[t]=()=>{gapi.load?i():n(Yl(e,"network-request-failed"))},Ud(`https://apis.google.com/js/api.js?onload=${t}`)}i()}})).catch((e=>{throw nh=null,e}))}let nh=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rh=new au(5e3,15e3),sh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ih(e){const t=e.config;Ql(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cu(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.4.0"},s=oh.get(e.config.apiHost);s&&(r.eid=s);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${cc(r).slice(1)}`}async function ah(e){const t=await function(e){return nh=nh||th(e),nh}(e),n=Td().gapi;return Ql(n,e,"internal-error"),t.open({where:document.body,url:ih(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sh,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=Yl(e,"network-request-failed"),o=Td().setTimeout((()=>{r(s)}),rh.get());function i(){Td().clearTimeout(o),n(t)}t.ping(i).then(i,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function uh(e,t,n,r=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ch),{width:r.toString(),height:s.toString(),top:o,left:i}),l=nc().toLowerCase();n&&(a=Mu(l)?"_blank":n),Lu(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=nc()){var t;return Vu(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new lh(null);const d=window.open(t||"",a,u);Ql(d,e,"popup-blocked");try{d.focus()}catch(h){}return new lh(d)}function dh(e,t,n,r,s,o){Ql(e.config.authDomain,e,"auth-domain-config-required"),Ql(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.4.0",eventId:s};if(t instanceof td){t.setDefaultLanguage(e.languageCode),i.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(i.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))i[e]=t}if(t instanceof nd){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(i.scopes=e.join(","))}e.tenantId&&(i.tid=e.tenantId);const a=i;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return cu(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${cc(a).slice(1)}`}const hh=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wd,this._completeRedirectFn=Wd}async _openPopup(e,t,n,r){var s;tu(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return uh(e,dh(e,t,n,su(),r),Id())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=dh(e,t,n,su(),r),Td().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(tu(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await ah(e),n=new qd(e);return t.register("authEvent",(t=>{Ql(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),Xl(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zu()||Uu()||Vu()}};var fh,ph="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ql(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gh(e=Mc()){const t=Pc(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Pc(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ic(n.getOptions(),null!=t?t:{}))return e;Xl(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:hh,persistence:[Ld,_d,wd]})}fh="Browser",xc(new pc("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=n.options;return(e=>{Ql(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Ql(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:s,clientPlatform:fh,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hu(fh)},o=new Wu(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ru);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),xc(new pc("auth-internal",(e=>{const t=qu(e.getProvider("auth").getImmediate());return new mh(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Dc(ph,"0.19.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fh)),Dc(ph,"0.19.2","esm2017");var vh="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function yh(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}var _h={exports:{}},bh=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},wh=bh,kh=Object.prototype.toString;function Ih(e){return"[object Array]"===kh.call(e)}function Eh(e){return void 0===e}function Th(e){return null!==e&&"object"==typeof e}function Ch(e){if("[object Object]"!==kh.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function Sh(e){return"[object Function]"===kh.call(e)}function Rh(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),Ih(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var Oh={isArray:Ih,isArrayBuffer:function(e){return"[object ArrayBuffer]"===kh.call(e)},isBuffer:function(e){return null!==e&&!Eh(e)&&null!==e.constructor&&!Eh(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:Th,isPlainObject:Ch,isUndefined:Eh,isDate:function(e){return"[object Date]"===kh.call(e)},isFile:function(e){return"[object File]"===kh.call(e)},isBlob:function(e){return"[object Blob]"===kh.call(e)},isFunction:Sh,isStream:function(e){return Th(e)&&Sh(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:Rh,merge:function e(){var t={};function n(n,r){Ch(t[r])&&Ch(n)?t[r]=e(t[r],n):Ch(n)?t[r]=e({},n):Ih(n)?t[r]=n.slice():t[r]=n}for(var r=0,s=arguments.length;r<s;r++)Rh(arguments[r],n);return t},extend:function(e,t,n){return Rh(t,(function(t,r){e[r]=n&&"function"==typeof t?wh(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},Ah=Oh;function xh(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ph=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(Ah.isURLSearchParams(t))r=t.toString();else{var s=[];Ah.forEach(t,(function(e,t){null!=e&&(Ah.isArray(e)?t+="[]":e=[e],Ah.forEach(e,(function(e){Ah.isDate(e)?e=e.toISOString():Ah.isObject(e)&&(e=JSON.stringify(e)),s.push(xh(t)+"="+xh(e))})))})),r=s.join("&")}if(r){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},Nh=Oh;function Lh(){this.handlers=[]}Lh.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},Lh.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},Lh.prototype.forEach=function(e){Nh.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var Uh=Lh,Mh=Oh,Dh=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Fh=Dh,jh=function(e,t,n,r,s){var o=new Error(e);return Fh(o,t,n,r,s)},Bh=jh,Vh=Oh,$h=Vh.isStandardBrowserEnv()?{write:function(e,t,n,r,s,o){var i=[];i.push(e+"="+encodeURIComponent(t)),Vh.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Vh.isString(r)&&i.push("path="+r),Vh.isString(s)&&i.push("domain="+s),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},zh=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Hh=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Wh=Oh,qh=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Kh=Oh,Gh=Kh.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=Kh.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function Jh(e){this.message=e}Jh.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Jh.prototype.__CANCEL__=!0;var Xh=Jh,Yh=Oh,Zh=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(Bh("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},Qh=$h,ef=Ph,tf=function(e,t){return e&&!zh(t)?Hh(e,t):t},nf=function(e){var t,n,r,s={};return e?(Wh.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=Wh.trim(e.substr(0,r)).toLowerCase(),n=Wh.trim(e.substr(r+1)),t){if(s[t]&&qh.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s},rf=Gh,sf=jh,of=gf,af=Xh,cf=function(e){return new Promise((function(t,n){var r,s=e.data,o=e.headers,i=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}Yh.isFormData(s)&&delete o["Content-Type"];var c=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+u)}var d=tf(e.baseURL,e.url);function h(){if(c){var r="getAllResponseHeaders"in c?nf(c.getAllResponseHeaders()):null,s={data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};Zh((function(e){t(e),a()}),(function(e){n(e),a()}),s),c=null}}if(c.open(e.method.toUpperCase(),ef(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(n(sf("Request aborted",e,"ECONNABORTED",c)),c=null)},c.onerror=function(){n(sf("Network Error",e,null,c)),c=null},c.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||of.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(sf(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},Yh.isStandardBrowserEnv()){var f=(e.withCredentials||rf(d))&&e.xsrfCookieName?Qh.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}"setRequestHeader"in c&&Yh.forEach(o,(function(e,t){void 0===s&&"content-type"===t.toLowerCase()?delete o[t]:c.setRequestHeader(t,e)})),Yh.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){c&&(n(!e||e&&e.type?new af("canceled"):e),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),s||(s=null),c.send(s)}))},lf=Oh,uf=function(e,t){Mh.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},df=Dh,hf={"Content-Type":"application/x-www-form-urlencoded"};function ff(e,t){!lf.isUndefined(e)&&lf.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var pf,mf={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(pf=cf),pf),transformRequest:[function(e,t){return uf(t,"Accept"),uf(t,"Content-Type"),lf.isFormData(e)||lf.isArrayBuffer(e)||lf.isBuffer(e)||lf.isStream(e)||lf.isFile(e)||lf.isBlob(e)?e:lf.isArrayBufferView(e)?e.buffer:lf.isURLSearchParams(e)?(ff(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):lf.isObject(e)||t&&"application/json"===t["Content-Type"]?(ff(t,"application/json"),function(e,t,n){if(lf.isString(e))try{return(t||JSON.parse)(e),lf.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||mf.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||r&&lf.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s){if("SyntaxError"===o.name)throw df(o,this,"E_JSON_PARSE");throw o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};lf.forEach(["delete","get","head"],(function(e){mf.headers[e]={}})),lf.forEach(["post","put","patch"],(function(e){mf.headers[e]=lf.merge(hf)}));var gf=mf,vf=Oh,yf=gf,_f=function(e){return!(!e||!e.__CANCEL__)},bf=Oh,wf=function(e,t,n){var r=this||yf;return vf.forEach(n,(function(n){e=n.call(r,e,t)})),e},kf=_f,If=gf,Ef=Xh;function Tf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ef("canceled")}var Cf=Oh,Sf=function(e,t){t=t||{};var n={};function r(e,t){return Cf.isPlainObject(e)&&Cf.isPlainObject(t)?Cf.merge(e,t):Cf.isPlainObject(t)?Cf.merge({},t):Cf.isArray(t)?t.slice():t}function s(n){return Cf.isUndefined(t[n])?Cf.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function o(e){if(!Cf.isUndefined(t[e]))return r(void 0,t[e])}function i(n){return Cf.isUndefined(t[n])?Cf.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var c={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a};return Cf.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||s,r=t(e);Cf.isUndefined(r)&&t!==a||(n[e]=r)})),n},Rf="0.24.0",Of=Rf,Af={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Af[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var xf={};Af.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Of+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,s,o){if(!1===e)throw new Error(r(s," has been removed"+(t?" in "+t:"")));return t&&!xf[s]&&(xf[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,s,o)}};var Pf=Oh,Nf=Ph,Lf=Uh,Uf=function(e){return Tf(e),e.headers=e.headers||{},e.data=wf.call(e,e.data,e.headers,e.transformRequest),e.headers=bf.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),bf.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||If.adapter)(e).then((function(t){return Tf(e),t.data=wf.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return kf(t)||(Tf(e),t&&t.response&&(t.response.data=wf.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Mf=Sf,Df={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),s=r.length;s-- >0;){var o=r[s],i=t[o];if(i){var a=e[o],c=void 0===a||i(a,o,e);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+o)}},validators:Af},Ff=Df.validators;function jf(e){this.defaults=e,this.interceptors={request:new Lf,response:new Lf}}jf.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Mf(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&Df.assertOptions(t,{silentJSONParsing:Ff.transitional(Ff.boolean),forcedJSONParsing:Ff.transitional(Ff.boolean),clarifyTimeoutError:Ff.transitional(Ff.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var s,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!r){var i=[Uf,void 0];for(Array.prototype.unshift.apply(i,n),i=i.concat(o),s=Promise.resolve(e);i.length;)s=s.then(i.shift(),i.shift());return s}for(var a=e;n.length;){var c=n.shift(),l=n.shift();try{a=c(a)}catch(u){l(u);break}}try{s=Uf(a)}catch(u){return Promise.reject(u)}for(;o.length;)s=s.then(o.shift(),o.shift());return s},jf.prototype.getUri=function(e){return e=Mf(this.defaults,e),Nf(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Pf.forEach(["delete","get","head","options"],(function(e){jf.prototype[e]=function(t,n){return this.request(Mf(n||{},{method:e,url:t,data:(n||{}).data}))}})),Pf.forEach(["post","put","patch"],(function(e){jf.prototype[e]=function(t,n,r){return this.request(Mf(r||{},{method:e,url:t,data:n}))}}));var Bf=jf,Vf=Xh;function $f(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new Vf(e),t(n.reason))}))}$f.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},$f.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},$f.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},$f.source=function(){var e;return{token:new $f((function(t){e=t})),cancel:e}};var zf=$f,Hf=Oh,Wf=bh,qf=Bf,Kf=Sf;var Gf=function e(t){var n=new qf(t),r=Wf(qf.prototype.request,n);return Hf.extend(r,qf.prototype,n),Hf.extend(r,n),r.create=function(n){return e(Kf(t,n))},r}(gf);Gf.Axios=qf,Gf.Cancel=Xh,Gf.CancelToken=zf,Gf.isCancel=_f,Gf.VERSION=Rf,Gf.all=function(e){return Promise.all(e)},Gf.spread=function(e){return function(t){return e.apply(null,t)}},Gf.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},_h.exports=Gf,_h.exports.default=Gf;var Jf=_h.exports;function Xf(e){return(Xf="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Yf(e,t){if(!Yf.installed)if(t){if(Yf.installed=!0,e.version&&e.version.split(".")[0]<3)Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}});else{if(!(e.version&&e.version.split(".")[0]>=3))return void console.error("Unknown Vue version");e.config.globalProperties.axios=t,e.config.globalProperties.$http=t}e.axios=t,e.$http=t}else console.error("You have to install axios")}"object"==("undefined"==typeof exports?"undefined":Xf(exports))?module.exports=Yf:"function"==typeof define&&define.amd?define([],(function(){return Yf})):window.Vue&&window.axios&&window.Vue.use&&Vue.use(Yf,window.axios);export{vh as $,ws as A,wn as B,vt as C,u as D,lt as E,Qn as F,Za as G,bn as H,Is as I,xr as J,Yo as K,ci as L,yi as M,Yf as N,di as O,rs as P,Rs as Q,an as R,Os as S,To as T,rr as U,Xo as V,ui as W,ks as X,Zr as Y,yh as Z,bi as _,jl as a,Qa as a0,gh as b,hd as c,Bl as d,md as e,pd as f,$l as g,gd as h,Uc as i,Xa as j,ea as k,Jf as l,Ze as m,Ys as n,et as o,rn as p,sn as q,Vl as r,fd as s,Qr as t,Fl as u,ls as v,En as w,fs as x,_s as y,on as z};

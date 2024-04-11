!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.porscheDesignSystem=t():e.porscheDesignSystem=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{componentsReady:()=>c,load:()=>r});const n="porscheDesignSystem";function o(){return document[n]||(document[n]={}),document[n]}function s({script:e,version:t,prefix:s}){const r=function(e){const t=o(),{[e]:n}=t;if(!n){let n=()=>{};const o=new Promise((e=>n=e));t[e]={isInjected:!1,isReady:()=>o,readyResolve:n,prefixes:[],registerCustomElements:null}}return t[e]}(t),{isInjected:c,prefixes:i=[],registerCustomElements:d}=r,[m]=Object.entries(o()).filter((([e,n])=>e!==t&&"object"==typeof n&&n.prefixes.includes(s)));if(m)throw new Error(`[Porsche Design System v${t}] prefix '${s}' is already registered with version '${m[0]}' of the Porsche Design System. Please use a different one.\nTake a look at document.${n} for more details.`);c||(function(e){const t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}(e),r.isInjected=!0),i.includes(s)||(i.push(s),d&&d(s))}const r=(e={})=>{const t="PORSCHE_DESIGN_SYSTEM_CDN";window[t]=e.cdn||window[t]||(window.location.origin.match(/\.cn$/)?"cn":"auto");const n="porscheDesignSystem";document[n]||(document[n]={}),document[n].cdn={url:"https://cdn.ui.porsche."+("cn"===window[t]?"cn":"com"),prefixes:[]},s({version:"3.9.0",script:document[n].cdn.url+"/porsche-design-system/components/porsche-design-system.v3.9.0.2fa162e9f67ff34cccd2.js",prefix:e.prefix||""})},c=(e=document.body)=>{let t;const n=new Promise((e=>t=e)),o=()=>{d().then((()=>m(e,t)))};if(i())o();else{const e="readystatechange",t=()=>{i()&&(document.removeEventListener(e,t),o())};document.addEventListener(e,t)}return n},i=()=>"complete"===document.readyState,d=()=>{if(document.porscheDesignSystem?.["3.9.0"]?.isReady)return document.porscheDesignSystem["3.9.0"].isReady();{let e;const t=new Promise((t=>e=t)),n={set(t,n,o){return"3.9.0"===n&&o.isReady().then(e),Reflect.set(...arguments)}};return document.porscheDesignSystem=new Proxy(document.porscheDesignSystem||{},n),t}},m=(e,t)=>{const n=u(e);Promise.all(n).then((e=>t(e.length))).catch((e=>console.error("[Porsche Design System]",e)))},u=e=>{let t=[];return 1===e?.nodeType&&Array.from(e.children).forEach((e=>{f(e)&&t.push(e.componentOnReady()),t=t.concat(u(e))})),t},p=/^(.*-)?P-(.*)$/,f=e=>p.exec(e.tagName)&&"function"==typeof e.componentOnReady;return t})()));
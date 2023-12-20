"use strict";(self.webpackChunkPorscheDesignSystem_3_9_0=self.webpackChunkPorscheDesignSystem_3_9_0||[]).push([["tabs"],{3662:(t,e,s)=>{s.d(e,{b:()=>o});const o="4px"},9621:(t,e,s)=>{s.d(e,{c:()=>n,h:()=>o});const o={"&([hidden])":{display:"none"}},n={colorScheme:"light dark"}},1639:(t,e,s)=>{s.d(e,{g:()=>o});const o=(t,e)=>t.getAttribute(e)},6264:(t,e,s)=>{function o(t,e){return t?Array.from(t.querySelectorAll(e)):[]}s.d(e,{g:()=>o})},876:(t,e,s)=>{s.d(e,{g:()=>n});var o=s(8634);const n=(t,e)=>`${e} is deprecated for component ${(0,o.j)(t)} and will be removed with next major release.`},101:(t,e,s)=>{s.d(e,{i:()=>n});var o=s(8634);const n=(t,e)=>{const{parentElement:s}=t;return s&&(0,o.j)(s)===e}},5445:(t,e,s)=>{s.r(e),s.d(e,{p_tabs:()=>f,p_tabs_item:()=>v});var o=s(8634),n=s(1536),i=s(171),a=s(1695),r=s(269),l=s(2935),h=s(3108),d=s(9621),c=s(882),b=s(3662);s(876),s(101);const m=()=>(0,o.g)({"@global":{":host":{display:"block",...(0,o.a)({...d.c,...d.h})}},root:{marginBottom:"8px"}}),u={size:o.A.breakpoint(h.T),weight:o.A.oneOf(h.a),theme:o.A.oneOf(r.T),gradientColorScheme:o.A.oneOf([void 0,...a.G]),gradientColor:o.A.oneOf(a.a),activeTabIndex:o.A.number},f=class{constructor(t){(0,o.r)(this,t),this.tabChange=(0,o.C)(this,"tabChange",3),this.update=(0,o.C)(this,"update",3),this.defineTabsItemElements=()=>{(0,l.t)(this.host,"p-tabs-item"),this.tabsItemElements=Array.from(this.host.children)},this.setAccessibilityAttributes=()=>{this.tabsItemElements.forEach(((t,e)=>{const s={role:"tabpanel","aria-label":t.label};(0,n.s)(t,s),e===this.activeTabIndex?((0,o.S)(t,"hidden"),(0,o.J)(t,"tabindex","0")):((0,o.J)(t,"hidden"),(0,o.S)(t,"tabindex"))}))},this.onTabsBarUpdate=t=>{t.stopPropagation(),this.activeTabIndex=t.detail.activeTabIndex},this.size="small",this.weight="regular",this.theme="light",this.gradientColorScheme=void 0,this.gradientColor="background-base",this.activeTabIndex=0,this.tabsItemElements=[]}activeTabHandler(t){this.setAccessibilityAttributes(),this.update.emit({activeTabIndex:t}),this.tabChange.emit({activeTabIndex:t})}componentWillLoad(){this.defineTabsItemElements()}componentDidLoad(){(0,o.R)(this.host,"slot").addEventListener("slotchange",this.defineTabsItemElements)}componentShouldUpdate(t,e){return(0,o.h)(t,e)}componentDidRender(){this.setAccessibilityAttributes()}render(){var t,e;(0,o.v)(this,u),(0,i.w)(this,"gradientColorScheme","Please use gradientColor prop instead."),(0,o.e)(this.host,m),t=this.tabsItemElements,e=this.theme,t.forEach((t=>{t.theme=e,(0,o.B)(t)}));const s=(0,o.k)(this.host);return(0,o.f)(o.H,null,(0,o.f)(s.pTabsBar,{class:"root",size:this.size,weight:this.weight,theme:this.theme,gradientColorScheme:this.gradientColorScheme,gradientColor:this.gradientColor,activeTabIndex:this.activeTabIndex,onUpdate:this.onTabsBarUpdate,onTabChange:t=>t.stopPropagation()},this.tabsItemElements.map(((t,e)=>(0,o.f)("button",{key:e,type:"button"},t.label)))),(0,o.f)("slot",null))}get host(){return(0,o.i)(this)}static get watchers(){return{activeTabIndex:["activeTabHandler"]}}},g=t=>{const{primaryColor:e,focusColor:s}=(0,o.x)(t),{primaryColor:n,focusColor:i}=(0,o.x)("dark");return(0,o.g)({"@global":{":host":(0,o.a)({display:"block",position:"relative",color:e,outline:0,...d.h,...(0,o.q)(t,{color:n}),"&(:focus:focus-visible)::before":{content:'""',position:"absolute",...(0,o.u)(-4),border:`${o.o} solid ${s}`,borderRadius:b.b,...(0,o.q)(t,{borderColor:i})}})}})},p={label:o.A.string},v=class{constructor(t){(0,o.r)(this,t),this.label=void 0}handleLabelChange(){(0,l.u)(this.host)}connectedCallback(){(0,c.t)(this.host,"p-tabs")}render(){return(0,o.v)(this,p),(0,o.e)(this.host,g,this.host.theme||"light"),(0,o.f)("slot",null)}get host(){return(0,o.i)(this)}static get watchers(){return{label:["handleLabelChange"]}}}},2937:(t,e,s)=>{s.d(e,{s:()=>o});const o="scroll-area"},1695:(t,e,s)=>{s.d(e,{G:()=>a,S:()=>l,a:()=>r,b:()=>i,c:()=>h,g:()=>m,i:()=>d,s:()=>c});s(8634);var o=s(6264),n=s(2937);const i=["role"],a=["default","surface"],r=["background-base","background-surface"],l=["top","center"],h=(t,e)=>{const{scrollLeft:s}=t,o=b(t);return"next"===e?s+o:s-o},d=(t,e)=>!(t&&e),c=(t,e)=>{t.scrollTo({left:e,behavior:"smooth"})},b=t=>Math.round(.2*t.offsetWidth),m=(t,e,s,i)=>{const{offsetLeft:a,offsetWidth:r}=t[s<=0?0:s]||{},l=0===t[0]?.offsetLeft?a:a-i.offsetLeft,[h,d]=(t=>(0,o.g)(t.shadowRoot,`.${n.s},.action-prev`))(i);let c;return c="next"===e?s===t.length-1?l-4:l-d.offsetWidth+8:0===s?0:l+r+d.offsetWidth-h.offsetWidth,c}},1536:(t,e,s)=>{s.d(e,{s:()=>o});const o=(t,e)=>Object.entries(e).forEach((e=>t.setAttribute(...e)))},3108:(t,e,s)=>{s.d(e,{T:()=>i,a:()=>a,b:()=>c,c:()=>h,g:()=>d,s:()=>r});var o=s(8634),n=s(1639);const i=["small","medium"],a=["regular","semi-bold","semibold"],r=(t,e)=>{const s=e-1;return null==t||s<0||t<0||t>s?void 0:t},l=(t={})=>{const e=t.getBoundingClientRect();return`transform: translate3d(${t.offsetLeft>0?t.offsetLeft:0}px,0,0);width: ${e.width}px`},h=(t,e,s)=>(s+("next"===t?1:-1)+e)%e,d=t=>{const e=t.indexOf(document.activeElement);return e<0?0:e},c=(t,e,s)=>{if(s){const i=t.find((t=>"true"===(0,n.g)(t,"aria-selected")||"true"===(0,n.g)(t,"aria-current")));i&&(0,o.J)(s,"style","transition: none;"+l(i));const a=t[e];a&&(0,o.J)(s,"style",l(a)),i&&(s.style.animation="none",window.requestAnimationFrame((()=>s.style.animation="")))}}},269:(t,e,s)=>{s.d(e,{T:()=>o});const o=["light","dark","auto"]},2935:(t,e,s)=>{s.d(e,{t:()=>i,u:()=>n});var o=s(8634);const n=t=>{(0,o.B)(t.parentElement)},i=(t,e)=>{if(!((t,e)=>{const s=Array.from(t.children),n=(0,o.k)(t)[(0,o.G)(e)];return!s.some((t=>(0,o.l)(t)!==n))})(t,e)){const s=(0,o.k)(t)[(0,o.G)(e)],n=Array.from(t.children,o.l).filter((t=>t!==s)).join(", ");(0,o.t)(`child HTMLElements of ${(0,o.j)(t)} should be of kind ${s} but got ${n}.`)}}},882:(t,e,s)=>{s.d(e,{t:()=>i});var o=s(8634),n=s(101);const i=(t,e)=>{if(t.parentElement&&!(0,n.i)(t,e)){const s=(0,o.k)(t)[e],n=(0,o.l)(t.parentElement);(0,o.t)(`parent HTMLElement of ${(0,o.l)(t)} should be of kind ${s} but got ${n}.`)}}},171:(t,e,s)=>{s.d(e,{w:()=>i});var o=s(876),n=s(8634);const i=(t,e,s)=>{const i=t[e];null!=i&&(0,n.c)((0,o.g)(t.host,e),s||"")}}}]);
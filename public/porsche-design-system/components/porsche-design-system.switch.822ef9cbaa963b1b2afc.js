"use strict";(self.webpackChunkPorscheDesignSystem_3_9_0=self.webpackChunkPorscheDesignSystem_3_9_0||[]).push([["switch"],{9206:(o,t,r)=>{r.d(t,{A:()=>e});const e=["start","end","left","right"]},9621:(o,t,r)=>{r.d(t,{c:()=>a,h:()=>e});const e={"&([hidden])":{display:"none"}},a={colorScheme:"light dark"}},411:(o,t,r)=>{r.d(t,{a:()=>a,f:()=>e});const e="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif",a="calc(6px + 2.125ex)"},4876:(o,t,r)=>{r.d(t,{f:()=>e});const e="1rem"},6397:(o,t,r)=>{r.d(t,{a:()=>a,f:()=>e});const e="normal",a="normal"},5030:(o,t,r)=>{r.d(t,{f:()=>e});const e=400},3234:(o,t,r)=>{r.d(t,{g:()=>a});var e=r(524);r(8634);const a=(o,t)=>({"aria-disabled":(0,e.i)(o,t)?"true":null,"aria-busy":t?"true":null})},876:(o,t,r)=>{r.d(t,{g:()=>a});var e=r(8634);const a=(o,t)=>`${t} is deprecated for component ${(0,e.j)(o)} and will be removed with next major release.`},7042:(o,t,r)=>{r.d(t,{h:()=>e});const e=o=>({"@media(hover:hover)":o})},524:(o,t,r)=>{r.d(t,{i:()=>e});const e=(o,t)=>o||t},4566:(o,t,r)=>{r.r(t),r.d(t,{p_switch:()=>C});var e=r(8634),a=r(524),s=r(8647),n=r(269),i=r(9206),l=r(9621),d=r(7042),c=r(8217),h=r(1332),g=r(3234);r(876),r(4545);const u=(o,t,r,s)=>{const{primaryColor:n,contrastMediumColor:i,successColor:l,successColorDarken:d,disabledColor:c}=(0,e.x)(s),{backgroundColor:h}=(0,e.x)("light"),{canvasColor:g,canvasTextColor:u}=(0,e.z)(),b=e.y?u:l,p=(0,a.i)(t,r)&&c;return{buttonBorderColor:p||(o?b:i),buttonBorderColorHover:o?e.y?n:d:n,buttonBackgroundColor:o?p||b:"transparent",buttonBackgroundColorHover:o?e.y?b:d:"transparent",toggleBackgroundColor:(r?"transparent":t&&!o&&c)||(o?e.y?g:h:e.y?u:n),toggleBackgroundColorHover:o?h:e.y?u:n,textColor:p||n}},b=(o,t,r,s,n,i,g)=>{const{buttonBorderColor:b,buttonBorderColorHover:p,buttonBackgroundColor:C,buttonBackgroundColorHover:k,toggleBackgroundColor:f,toggleBackgroundColorHover:w,textColor:x}=u(s,n,i,g),{buttonBorderColor:m,buttonBorderColorHover:v,buttonBackgroundColor:$,buttonBackgroundColorHover:B,toggleBackgroundColor:y,toggleBackgroundColorHover:A,textColor:H}=u(s,n,i,"dark"),{focusColor:S}=(0,e.x)(g),{focusColor:_}=(0,e.x)("dark");return(0,e.g)({"@global":{":host":(0,e.a)({outline:0,...l.c,...l.h,...(0,e.d)(r,(o=>({display:o?"block":"inline-block",width:o?"100%":"auto",...!o&&{verticalAlign:"top"}})))})},root:{display:"flex",alignItems:"flex-start",gap:c.s,width:"100%",padding:0,margin:0,outline:0,border:0,textAlign:"start",background:"transparent",WebkitAppearance:"none",appearance:"none",cursor:(0,a.i)(n,i)?"auto":"pointer",...(0,e.d)(r,(o=>({justifyContent:o?"space-between":"flex-start"}))),...!(0,a.i)(n,i)&&(0,d.h)({"&:hover .switch":{borderColor:p,backgroundColor:k,...(0,e.q)(g,{borderColor:v,backgroundColor:B}),"& .toggle":{backgroundColor:w,...(0,e.q)(g,{backgroundColor:A})}}}),"&:focus .switch::before":{content:'""',position:"absolute",...(0,e.u)(-6),border:`${e.o} solid ${S}`,...(0,e.q)(g,{borderColor:_}),borderRadius:"18px"},"&:not(:focus-visible) .switch::before":{borderColor:"transparent"}},switch:{position:"relative",width:"48px",height:"28px",flexShrink:0,boxSizing:"border-box",border:`${e.o} solid ${b}`,borderRadius:"14px",backgroundColor:C,cursor:(0,a.i)(n,i)?"not-allowed":"pointer",transition:`${(0,e.w)("background-color")}, ${(0,e.w)("border-color")}, ${(0,e.w)("color")}`,...(0,e.q)(g,{borderColor:m,backgroundColor:$})},toggle:{position:"absolute",top:"2px",left:"2px",width:"20px",height:"20px",display:"block",borderRadius:"50%",backgroundColor:f,...(0,e.q)(g,{backgroundColor:y}),transform:`translate3d(${s?"20px":"0"}, 0, 0)`,transition:`${(0,e.w)("background-color")}, ${(0,e.w)("transform")}`},...i&&{spinner:{position:"absolute",top:"-4px",left:"-4px",width:"28px",height:"28px"}},label:{...h.t,minWidth:0,minHeight:0,color:x,...(0,e.q)(g,{color:H}),...(0,e.m)((0,e.d)(o,(o=>({order:"left"===o||"start"===o?-1:0}))),(0,e.d)(t,(o=>(0,e.P)(o,{paddingTop:"2px"}))))}})},p={alignLabel:e.A.breakpoint(i.A),hideLabel:e.A.breakpoint("boolean"),stretch:e.A.breakpoint("boolean"),checked:e.A.boolean,disabled:e.A.boolean,loading:e.A.boolean,theme:e.A.oneOf(n.T)},C=class{constructor(o){(0,e.r)(this,o),this.switchChange=(0,e.C)(this,"switchChange",3),this.update=(0,e.C)(this,"update",3),this.onSwitchClick=()=>{this.update.emit({checked:!this.checked}),this.switchChange.emit({checked:!this.checked})},this.alignLabel="end",this.hideLabel=!1,this.stretch=!1,this.checked=!1,this.disabled=!1,this.loading=!1,this.theme="light"}onClick(o){(0,a.i)(this.disabled,this.loading)&&o.stopPropagation()}componentShouldUpdate(o,t){return(0,e.h)(o,t)}render(){(0,e.v)(this,p);(0,s.w)(this,"alignLabel",{left:"start",right:"end"}),(0,e.e)(this.host,b,this.alignLabel,this.hideLabel,this.stretch,this.checked,this.disabled,this.loading,this.theme);const o=(0,e.k)(this.host);return(0,e.f)("button",{...(t=this.disabled,r=this.loading,a=this.checked,{...(0,g.g)(t,r),"aria-checked":a?"true":"false"}),class:"root",type:"button",role:"switch",onClick:this.onSwitchClick},(0,e.f)("span",{class:"switch"},(0,e.f)("span",{class:"toggle"},this.loading&&(0,e.f)(o.pSpinner,{class:"spinner",size:"inherit",theme:this.theme,aria:{"aria-label":"Loading state"}}))),(0,e.f)("span",{class:"label"},(0,e.f)("slot",null)));var t,r,a}static get delegatesFocus(){return!0}get host(){return(0,e.i)(this)}}},8217:(o,t,r)=>{r.d(t,{s:()=>e});const e="8px"},4545:(o,t,r)=>{r.d(t,{_:()=>i,a:()=>l,f:()=>n});var e=r(411),a=r(5030),s=r(6397);const n={overflowWrap:"break-word",hyphens:"auto"},i=`${s.f} ${s.a} ${a.f} `,l=`/${e.a} ${e.f}`},1332:(o,t,r)=>{r.d(t,{t:()=>s});var e=r(4545),a=r(4876);const s={font:`${e._}${a.f}${e.a}`,...e.f}},269:(o,t,r)=>{r.d(t,{T:()=>e});const e=["light","dark","auto"]},8647:(o,t,r)=>{r.d(t,{w:()=>s});var e=r(876),a=r(8634);const s=(o,t,r)=>{const s=o[t];if(r[s]){const n=(0,e.g)(o.host,`${t}='${s}'`);(0,a.c)(n,`Please use ${t}='${r[s]}' instead.`)}}}}]);
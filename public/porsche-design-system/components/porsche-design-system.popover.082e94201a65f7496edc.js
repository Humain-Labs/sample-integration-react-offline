"use strict";(self.webpackChunkPorscheDesignSystem_3_9_0=self.webpackChunkPorscheDesignSystem_3_9_0||[]).push([["popover"],{3662:(t,o,e)=>{e.d(o,{b:()=>r});const r="4px"},9621:(t,o,e)=>{e.d(o,{c:()=>i,h:()=>r});const r={"&([hidden])":{display:"none"}},i={colorScheme:"light dark"}},6447:(t,o,e)=>{e.d(o,{B:()=>a,F:()=>n,M:()=>i,P:()=>s,T:()=>r});const r=999999,i=99999,n=99998,s=9999,a=99},411:(t,o,e)=>{e.d(o,{a:()=>i,f:()=>r});const r="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif",i="calc(6px + 2.125ex)"},4876:(t,o,e)=>{e.d(o,{f:()=>r});const r="1rem"},6397:(t,o,e)=>{e.d(o,{a:()=>i,f:()=>r});const r="normal",i="normal"},5030:(t,o,e)=>{e.d(o,{f:()=>r});const r=400},7042:(t,o,e)=>{e.d(o,{h:()=>r});const r=t=>({"@media(hover:hover)":t})},5911:(t,o,e)=>{e.d(o,{i:()=>r});const r=(t,o)=>!t.composedPath().includes(o)},8790:(t,o,e)=>{e.r(o),e.d(o,{p_popover:()=>q});var r=e(8634),i=e(5911),n=e(2937),s=e(9621),a=e(7042),l=e(6447),d=e(1332),c=e(411),h=e(3662),p=e(269);e(4545);const{canvasColor:b,canvasTextColor:u}=(0,r.z)(),f={top:{bottom:"100%",left:"50%",transform:"translate3d(-50%, 0, 0)"},right:{top:"50%",left:"100%",transform:"translate3d(0, -50%, 0)"},bottom:{top:"100%",left:"50%",transform:"translate3d(-50%, 0, 0)"},left:{top:"50%",right:"100%",transform:"translate3d(0, -50%, 0)"}},m="12px",g="transparent",v=(...t)=>t.join(" "),C=t=>{const{backgroundColor:o,backgroundSurfaceColor:e}=(0,r.x)(t),{backgroundSurfaceColor:i}=(0,r.x)("dark"),n=(0,r.a1)(t);return{top:{top:0,left:"50%",transform:"translateX(-50%)",borderWidth:v(m,m,0),...r.y?{borderColor:v(u,b,b)}:{borderColor:v(n?e:o,g,g),...(0,r.q)(t,{borderColor:v(i,g,g)})}},right:{top:"50%",right:0,transform:"translateY(-50%)",borderWidth:v(m,m,m,0),...r.y?{borderColor:v(b,u,b,b)}:{borderColor:v(g,n?e:o,g,g),...(0,r.q)(t,{borderColor:v(g,i,g,g)})}},bottom:{bottom:0,left:"50%",transform:"translateX(-50%)",borderWidth:v(0,m,m),...r.y?{borderColor:v(b,b,u)}:{borderColor:v(g,g,n?e:o),...(0,r.q)(t,{borderColor:v(g,g,i)})}},left:{top:"50%",left:0,transform:"translateY(-50%)",borderWidth:v(m,0,m,m),...r.y?{borderColor:v(b,b,b,u)}:{borderColor:v(g,g,g,n?e:o),...(0,r.q)(t,{borderColor:v(g,g,g,i)})}}}},w=(t,o,e)=>{const{hoverColor:i,focusColor:n,backgroundColor:p,primaryColor:b,backgroundSurfaceColor:m}=(0,r.x)(e),{hoverColor:g,focusColor:v,primaryColor:w,backgroundSurfaceColor:y}=(0,r.x)("dark"),x="rgba(0,0,0,0.3)";return(0,r.g)({"@global":{":host":{...(0,r.a)({position:"relative",display:"inline-block",...s.c,...s.h}),verticalAlign:"top"},p:{...d.t,margin:0},button:{display:"block",position:"relative",WebkitAppearance:"none",appearance:"none",background:"transparent",border:0,padding:0,outline:0,cursor:"pointer",...d.t,width:c.a,height:c.a,borderRadius:"50%",...(0,a.h)({transition:(0,r.w)("background-color"),"&:hover":{...r.$,backgroundColor:i,...(0,r.q)(e,{backgroundColor:g})}}),"&::before":{content:'""',position:"absolute",...(0,r.u)(-2),border:`${r.o} solid transparent`,borderRadius:"50%"},"&:focus::before":{borderColor:n,...(0,r.q)(e,{borderColor:v})},"&:focus:not(:focus-visible)::before":{borderColor:"transparent"}}},label:(0,r.P)(),icon:{display:"inline-block",transform:"translate3d(0,0,0)"},spacer:{...o?{overflow:"initial",backgroundColor:"transparent",border:"none",margin:0,padding:0}:(0,r.u)(-k),position:"absolute",zIndex:l.P,filter:`drop-shadow(0 0 16px ${x})`,backdropFilter:"drop-shadow(0px 0px 0px transparent)",pointerEvents:"none",animation:`${r.a4} $fadeIn ${r.a9} forwards`,"&::before":{content:'""',position:"absolute",borderStyle:"solid",...C(e)[t]},...(0,r.q)(e,{filter:`drop-shadow(0 0 16px ${x})`})},popover:{position:"absolute",maxWidth:"min(90vw, 27rem)",width:"max-content",boxSizing:"border-box",background:(0,r.a1)(e)?m:p,padding:"8px 16px",pointerEvents:"auto",...f[t],...d.t,listStyleType:"none",color:b,whiteSpace:"inherit",borderRadius:h.b,...r.y&&{outline:`1px solid ${u}`},...(0,r.q)(e,{background:y,color:w})},"@keyframes fadeIn":{from:{opacity:0},to:{opacity:1}}})},k=16,y=(t,o,e,i,n=!1,s)=>{e.style.margin="0",$(o,e,i)||(i=E(o,e),(0,r.e)(t,w,i,n,s)),e.style.margin=S(o,e,i)},x=()=>{const{clientWidth:t,clientHeight:o}=document.documentElement;return{clientWidth:t-k,clientHeight:o-k}},$=(t,o,e)=>{const{clientWidth:r,clientHeight:i}=x(),n=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=n.left>=k&&n.right<=r,l=n.top>=k&&n.bottom<=i;switch(e){case"top":return a&&s.top>=k;case"right":return l&&s.right<=r;case"bottom":return a&&s.bottom<=i;case"left":return l&&s.left>=k}},E=(t,o)=>{const e=((t,o)=>{const{clientWidth:e,clientHeight:r}=document.documentElement,i=t.getBoundingClientRect(),n=o.getBoundingClientRect();return{top:i.top-n.height,right:e-(i.right+n.width),bottom:r-(i.bottom+n.height),left:i.left-n.width}})(t,o);return Object.keys(e).reduce(((t,o)=>e[t]>=e[o]?t:o),"bottom")},S=(t,o,e)=>{const{clientWidth:r,clientHeight:i}=x(),n=t.getBoundingClientRect(),s=o.getBoundingClientRect();if(["top","bottom"].includes(e)&&s.width>n.width){if(s.left<k)return`0 0 0 ${Math.min(k-s.left,n.left-s.left)}px`;if(s.right>r)return`0 0 0 ${Math.max(r-s.right,n.right-s.right)}px`}else{if(!(["left","right"].includes(e)&&s.height>n.height))return"0";if(s.top<k)return`${Math.min(k-s.top,n.top-s.top)}px 0 0 0`;if(s.bottom>i)return`${Math.max(i-s.bottom,n.bottom-s.bottom)}px 0 0 0`}},N=[],R=t=>{const o=N.find((o=>o.open&&(0,i.i)(t,o.host)));o&&(o.open=!1)},T=t=>{const{key:o}=t,e="Escape"===o;if(e||"Enter"===o||"SpaceBar"===o||" "===o){const o=N.find((o=>o.open&&(e||(0,i.i)(t,o.host))));o&&(o.open=!1)}},W={direction:r.A.oneOf(["top","right","bottom","left"]),description:r.A.string,aria:r.A.aria(["aria-label"]),theme:r.A.oneOf(p.T)},q=class{constructor(t){(0,r.r)(this,t),this.isNative=!1,this.onKeydown=t=>{"Escape"===t.key&&this.button.focus()},this.detectNativeCase=()=>{var t,o;(0,r.ah)()&&(this.parentTableElement=(t=this.host,o="pTable",t.closest((0,r.k)(t)[o])),this.parentTableElement&&(this.isNative=!0))},this.onToggle=t=>{"open"===t.newState&&(0,r.B)(this.host)},this.direction="bottom",this.description=void 0,this.aria=void 0,this.theme="light",this.open=!1}connectedCallback(){var t;t=this,N.includes(t)||(N.push(t),document.addEventListener("mousedown",R),document.addEventListener("keydown",T)),this.detectNativeCase()}componentShouldUpdate(t,o){return(0,r.h)(t,o)}componentDidRender(){this.isNative&&this.spacer?.matches(":popover-open")?(((t,o,e)=>{const i=o.shadowRoot.querySelector((0,r.k)(t).pScroller).shadowRoot.querySelector(`.${n.s}`),s=()=>{e.hidePopover(),window.removeEventListener("scroll",s),window.removeEventListener("resize",s),i.removeEventListener("scroll",s)};window.addEventListener("scroll",s,{once:!0}),window.addEventListener("resize",s,{once:!0}),i.addEventListener("scroll",s,{once:!0})})(this.host,this.parentTableElement,this.spacer),((t,o)=>{const{left:e,top:r,width:i,height:n}=o.getBoundingClientRect();t.style.left=e+window.scrollX-k+"px",t.style.top=r+window.scrollY-k+"px",t.style.width=`${i+2*k}px`,t.style.height=`${n+2*k}px`})(this.spacer,this.button),y(this.host,this.spacer,this.popover,this.direction,this.isNative,this.theme)):this.open&&y(this.host,this.spacer,this.popover,this.direction,!1,this.theme)}disconnectedCallback(){(t=>{const o=N.indexOf(t);o>-1&&N.splice(o,1),0===N.length&&(document.removeEventListener("mousedown",R),document.removeEventListener("keydown",T))})(this)}render(){(0,r.v)(this,W),(0,r.e)(this.host,w,this.direction,this.isNative,this.theme);const t=(0,r.k)(this.host);return(0,r.f)(r.H,{onKeydown:this.onKeydown},(0,r.f)("button",{type:"button",...this.isNative?{popoverTarget:"spacer"}:{onClick:()=>this.open=!this.open},...(0,r.F)({...(0,r.F)(this.aria),...!this.isNative&&{"aria-expanded":this.open}}),ref:t=>this.button=t},(0,r.f)(t.pIcon,{class:"icon",name:"information",theme:this.theme}),(0,r.f)("span",{class:"label"},"More information")),(this.open||this.isNative)&&(0,r.f)("div",{class:"spacer",ref:t=>this.spacer=t,...this.isNative&&{popover:"auto",id:"spacer",onToggle:this.onToggle}},(0,r.f)("div",{class:"popover",ref:t=>this.popover=t},this.description?(0,r.f)("p",null,this.description):(0,r.f)("slot",null))))}get host(){return(0,r.i)(this)}}},2937:(t,o,e)=>{e.d(o,{s:()=>r});const r="scroll-area"},4545:(t,o,e)=>{e.d(o,{_:()=>a,a:()=>l,f:()=>s});var r=e(411),i=e(5030),n=e(6397);const s={overflowWrap:"break-word",hyphens:"auto"},a=`${n.f} ${n.a} ${i.f} `,l=`/${r.a} ${r.f}`},1332:(t,o,e)=>{e.d(o,{t:()=>n});var r=e(4545),i=e(4876);const n={font:`${r._}${i.f}${r.a}`,...r.f}},269:(t,o,e)=>{e.d(o,{T:()=>r});const r=["light","dark","auto"]}}]);
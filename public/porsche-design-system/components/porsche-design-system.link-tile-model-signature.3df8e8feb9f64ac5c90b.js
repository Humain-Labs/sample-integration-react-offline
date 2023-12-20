"use strict";(self.webpackChunkPorscheDesignSystem_3_9_0=self.webpackChunkPorscheDesignSystem_3_9_0||[]).push([["link-tile-model-signature"],{1797:(t,o,i)=>{i.d(o,{b:()=>r});const r="12px"},9621:(t,o,i)=>{i.d(o,{c:()=>a,h:()=>r});const r={"&([hidden])":{display:"none"}},a={colorScheme:"light dark"}},6750:(t,o,i)=>{i.d(o,{g:()=>s});var r=i(5030),a=i(7336);const e={regular:r.f,"semi-bold":a.f,bold:700},s=t=>e[t]},411:(t,o,i)=>{i.d(o,{a:()=>a,f:()=>r});const r="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif",a="calc(6px + 2.125ex)"},7160:(t,o,i)=>{i.d(o,{f:()=>r});const r="clamp(1.27rem, 0.51vw + 1.16rem, 1.78rem)"},4876:(t,o,i)=>{i.d(o,{f:()=>r});const r="1rem"},6397:(t,o,i)=>{i.d(o,{a:()=>a,f:()=>r});const r="normal",a="normal"},5030:(t,o,i)=>{i.d(o,{f:()=>r});const r=400},7336:(t,o,i)=>{i.d(o,{f:()=>r});const r=600},2801:(t,o,i)=>{i.d(o,{g:()=>a});var r=i(8634);const a=(t,o)=>(0,r.O)(t,`[slot="${o}"]`)},6646:(t,o,i)=>{i.d(o,{G:()=>r,g:()=>e});const r=["row","column"],a={column:{flexFlow:"column nowrap",alignItems:"stretch"},row:{flexFlow:"row wrap",alignItems:"center"}},e=t=>a[t]},7042:(t,o,i)=>{i.d(o,{h:()=>r});const r=t=>({"@media(hover:hover)":t})},7253:(t,o,i)=>{i.r(o),i.d(o,{p_link_tile_model_signature:()=>b});var r=i(8634),a=i(6646),e=i(8121),s=i(2801),n=i(6641),l=i(6750),c=i(1970),d=i(4828),h=i(1332),g=i(3163);i(4545),i(9621),i(5777);const p=(t,o)=>(0,s.g)(t,o)||(0,r.t)(`named slot='${o}' is missing for component ${(0,r.j)(t)}.`),f=["h2","h3","h4","h5","h6"],m=(t,o,i,s)=>{const n=(0,e.a)(t);return(0,r.g)({...n,"@global":{...n["@global"],[f.join(",")]:{margin:(0,r.N)(0)}},content:{...n.content,flexDirection:"column",bottom:0,padding:`${c.s} ${d.s} ${d.s}`,...e.g},signature:{position:"absolute",top:d.s,left:d.s,right:d.s,display:"flex"},heading:{margin:0,...e.t,hyphens:"inherit",...(0,r.d)(o,(t=>({fontWeight:(0,l.g)(t)})))},...s&&{description:{margin:"-12px 0 0 ",...h.t,hyphens:"inherit"}},"link-group":{display:"flex",width:"100%",gap:g.s,...(0,r.d)(i,a.g)},"link-overlay":{position:"fixed",...(0,r.u)()}})},u={model:r.A.oneOf(["718","911","boxster","cayenne","cayman","macan","panamera","taycan","turbo-s","turbo"]),weight:r.A.breakpoint(e.T),aspectRatio:r.A.breakpoint(e.c),heading:r.A.string,description:r.A.string,linkDirection:r.A.breakpoint(a.G),headingTag:r.A.oneOf(f)},b=class{constructor(t){(0,r.r)(this,t),this.model="911",this.weight="semi-bold",this.aspectRatio="3:4",this.heading=void 0,this.description=void 0,this.linkDirection={base:"column",xs:"row"},this.headingTag="h2"}componentShouldUpdate(t,o){return(0,r.h)(t,o)}render(){(0,r.v)(this,u);const t=p(this.host,"primary"),o=p(this.host,"secondary");(0,n.t)(this.host,t,"p-link"),(0,n.t)(this.host,o,"p-link"),[t,o].forEach((t=>{t.theme="dark",t.variant=t.slot}));const i=(a=t).href?a:a.querySelector("a");var a;(0,r.e)(this.host,m,this.aspectRatio,this.weight,this.linkDirection,!!this.description);const e={class:"link-overlay",href:i.href,target:i.target||"_self",download:i.download,rel:i.rel,tabIndex:-1,"aria-hidden":"true"},s=(0,r.k)(this.host);return(0,r.f)("div",{class:"root"},(0,r.f)("div",{class:"image-container"},(0,r.f)("slot",null)),(0,r.f)("div",{class:"signature"},(0,r.f)(s.pModelSignature,{theme:"dark",model:this.model})),(0,r.f)("div",{class:"content"},(0,r.f)("a",{...e}),(0,r.f)(this.headingTag,{class:"heading"},this.heading),this.description&&(0,r.f)("p",{class:"description"},this.description),(0,r.f)("div",{class:"link-group",role:"group"},(0,r.f)("slot",{name:"primary"}),(0,r.f)("slot",{name:"secondary"}))))}get host(){return(0,r.i)(this)}}},1970:(t,o,i)=>{i.d(o,{s:()=>r});const r="clamp(32px, 2.75vw + 23px, 76px)"},4828:(t,o,i)=>{i.d(o,{s:()=>r});const r="clamp(16px, 1.25vw + 12px, 36px)"},3163:(t,o,i)=>{i.d(o,{s:()=>r});const r="clamp(8px, 0.5vw + 6px, 16px)"},2236:(t,o,i)=>{i.d(o,{s:()=>r});const r="16px"},5777:(t,o,i)=>{i.d(o,{g:()=>a});var r=i(8634);const a=(t,o)=>{const{primaryColor:i,contrastHighColor:a,contrastMediumColor:e,contrastLowColor:s,successColor:n,errorColor:l,warningColor:c,infoColor:d}=(0,r.x)(t);return{primary:i,default:i,"contrast-low":s,"contrast-medium":e,"contrast-high":a,"notification-success":n,"notification-warning":c,"notification-error":l,"notification-info":d,inherit:"currentColor"}[o]}},4545:(t,o,i)=>{i.d(o,{_:()=>n,a:()=>l,f:()=>s});var r=i(411),a=i(5030),e=i(6397);const s={overflowWrap:"break-word",hyphens:"auto"},n=`${e.f} ${e.a} ${a.f} `,l=`/${r.a} ${r.f}`},1332:(t,o,i)=>{i.d(o,{t:()=>e});var r=i(4545),a=i(4876);const e={font:`${r._}${a.f}${r.a}`,...r.f}},6641:(t,o,i)=>{i.d(o,{t:()=>a});var r=i(8634);const a=(t,o,i)=>{const a=(0,r.k)(t)[(0,r.G)(i)],e=(0,r.l)(o);e!==a&&(0,r.t)(`child ${e} of ${(0,r.l)(t)} has to be a ${a}.`)}},8121:(t,o,i)=>{i.d(o,{T:()=>u,_:()=>h,a:()=>w,b:()=>m,c:()=>f,d:()=>b,g:()=>g,t:()=>p});var r=i(4545),a=i(7160),e=i(8634),s=i(9621),n=i(7042),l=i(5777),c=i(1797),d=i(2236);const h="rgba(31,31,31,0.9) 0%,rgba(31,31,31,0.9) 20%,rgba(31,31,31,0.852589) 26.67%,rgba(32,32,32,0.768225) 33.33%,rgba(33,33,33,0.668116) 40%,rgba(34,34,34,0.557309) 46.67%,rgba(35,35,35,0.442691) 53.33%,rgba(36,36,36,0.331884) 60%,rgba(37,37,37,0.231775) 66.67%,rgba(38,38,38,0.147411) 73.33%,rgba(39,39,39,0.0816599) 80%,rgba(39,39,39,0.03551) 86.67%,rgba(39,39,39,0.0086472) 93.33%,rgba(39,39,39,0)",g={background:`linear-gradient(to top, ${h} 100%);`},p={font:`${r._}${a.f}${r.a}`,...r.f},f=["1:1","4:3","3:4","16:9","9:16"],m=["default","inherit"],u=["regular","semi-bold"],b=["top","bottom"],v={"1:1":"100%","4:3":"75%","3:4":"133.33%","16:9":"56.25%","9:16":"177.75%"},w=(t,o)=>({"@global":{":host":{display:"block",hyphens:"auto",...(0,e.a)({...s.c,...s.h})},...(0,e.a)({"::slotted":{"&(picture)":{position:"absolute",...(0,e.u)()},"&(img)":{height:"100%",width:"100%",objectFit:"cover"}}})},root:{position:"relative",overflow:"hidden",transform:"translate3d(0,0,0)",borderRadius:c.b,color:(0,l.g)("dark","primary"),...(0,e.d)(t,(t=>({paddingTop:v[t]}))),...!o&&(0,n.h)({"&:hover .image-container":{transform:"scale3d(1.05,1.05,1.05)"}})},"image-container":{position:"absolute",transition:(0,e.w)("transform","moderate"),...(0,e.u)()},content:{position:"absolute",left:0,right:0,display:"flex",justifyItems:"start",gap:d.s,borderRadius:c.b,"@media (forced-colors: active)":{background:"rgba(0,0,0,0.7)"}}})}}]);
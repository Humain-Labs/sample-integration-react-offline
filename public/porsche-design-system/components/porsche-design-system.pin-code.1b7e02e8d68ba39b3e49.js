"use strict";(self.webpackChunkPorscheDesignSystem_3_9_0=self.webpackChunkPorscheDesignSystem_3_9_0||[]).push([["pin-code"],{3662:(t,e,o)=>{o.d(e,{b:()=>r});const r="4px"},9621:(t,e,o)=>{o.d(e,{c:()=>s,h:()=>r});const r={"&([hidden])":{display:"none"}},s={colorScheme:"light dark"}},411:(t,e,o)=>{o.d(e,{a:()=>s,f:()=>r});const r="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif",s="calc(6px + 2.125ex)"},4876:(t,e,o)=>{o.d(e,{f:()=>r});const r="1rem"},3749:(t,e,o)=>{o.d(e,{f:()=>r});const r="clamp(0.81rem, 0.23vw + 0.77rem, 0.88rem)"},6397:(t,e,o)=>{o.d(e,{a:()=>s,f:()=>r});const r="normal",s="normal"},5030:(t,e,o)=>{o.d(e,{f:()=>r});const r=400},2392:(t,e,o)=>{o.d(e,{a:()=>b,b:()=>f,c:()=>g,d:()=>v,e:()=>y,f:()=>m,g:()=>u,h:()=>p});var r=o(8634),s=o(7042),i=o(2037),a=o(411),n=o(931),l=o(8217),d=o(2236),h=o(3662),c=o(1332);const u=(t,e,o,n,d)=>{const{primaryColor:u,contrastLowColor:p,contrastMediumColor:m,disabledColor:b}=(0,r.x)(n),{primaryColor:f,contrastLowColor:g,contrastMediumColor:v,disabledColor:y}=(0,r.x)("dark"),{formStateColor:$,formStateHoverColor:C}=(0,i.a)(n,e),{formStateColor:x,formStateHoverColor:w}=(0,i.a)("dark",e);return{[`::slotted(${t})`]:{display:"block",width:"100%",height:"textarea"!==t?`calc(${a.a} + 10px + ${r.o} * 2 + ${l.s} * 2)`:"auto",margin:0,outline:0,WebkitAppearance:"none",appearance:"none",boxSizing:"border-box",border:`${r.o} solid ${$||m}`,borderRadius:h.b,background:"transparent",font:c.t.font.replace("ex","ex + 6px"),textIndent:0,color:u,transition:`${(0,r.w)("background-color")}, ${(0,r.w)("border-color")}, ${(0,r.w)("color")}`,...(0,r.q)(n,{borderColor:x||v,color:f}),...d},...!o&&(0,s.h)({[`::slotted(${t}:not(:disabled):not(:focus):not([readonly]):hover),label:hover~.wrapper ::slotted(${t}:not(:disabled):not(:focus):not([readonly]))${"select"===t?",label:hover~.wrapper ::part(select-wrapper-dropdown)":""}`]:{borderColor:C||u,...(0,r.q)(n,{borderColor:w||f})}}),[`::slotted(${t}:focus)`]:{borderColor:u,...(0,r.q)(n,{borderColor:f})},[`::slotted(${t}:disabled)`]:{cursor:"not-allowed",color:b,borderColor:b,WebkitTextFillColor:b,...(0,r.q)(n,{color:y,borderColor:y,WebkitTextFillColor:y})},..."select"!==t&&{[`::slotted(${t}[readonly])`]:{borderColor:p,background:p,...(0,r.q)(n,{borderColor:g,background:g})}}}},p="9px",m=`calc(${p} + ${r.o})`,b=n.s,f=l.s,g=d.s,v=t=>`calc(${p} + ${g} / 2 + (${a.a} + ${b} * 2) * ${t})`,y=(t,e)=>{const{disabledColor:o,contrastMediumColor:s}=(0,r.x)(e),{disabledColor:i,contrastMediumColor:a}=(0,r.x)("dark");return{pointerEvents:"none",maxWidth:"100%",boxSizing:"border-box",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",font:c.t.font,color:s,...(0,r.q)(e,{color:a}),...t&&{color:o,...(0,r.q)(e,{color:i})}}}},4193:(t,e,o)=>{function r(t,e){return t?.closest(e)}o.d(e,{g:()=>r})},949:(t,e,o)=>{o.d(e,{g:()=>s});var r=o(8634);function s(t){return`@media(max-width:${r.X[t]-1}px)`}},2801:(t,e,o)=>{o.d(e,{g:()=>s});var r=o(8634);const s=(t,e)=>(0,r.O)(t,`[slot="${e}"]`)},5366:(t,e,o)=>{o.d(e,{h:()=>s});var r=o(8582);o(8634);const s=(t,e)=>!!e||(0,r.h)(t,"description")},8582:(t,e,o)=>{o.d(e,{h:()=>s});var r=o(2801);const s=(t,e)=>!!(0,r.g)(t,e)},7042:(t,e,o)=>{o.d(e,{h:()=>r});const r=t=>({"@media(hover:hover)":t})},524:(t,e,o)=>{o.d(e,{i:()=>r});const r=(t,e)=>t||e},101:(t,e,o)=>{o.d(e,{i:()=>s});var r=o(8634);const s=(t,e)=>{const{parentElement:o}=t;return o&&(0,r.j)(o)===e}},3927:(t,e,o)=>{o.d(e,{i:()=>s});var r=o(4193);o(8634);const s=t=>!!(0,r.g)(t,"form")},9212:(t,e,o)=>{o.d(e,{L:()=>g,d:()=>f,g:()=>m,i:()=>p,l:()=>b});var r=o(8634),s=o(2037),i=o(1332),a=o(931),n=o(3749),l=o(4193),d=o(5366),h=o(101);const c=t=>!!t?.required,u=t=>((0,h.i)(t,"p-fieldset")||(0,h.i)(t,"p-fieldset-wrapper"))&&c(t.parentElement),p=(t,e)=>c(e)&&!u(t),m=(t,e,o,l,d)=>{const{primaryColor:h,disabledColor:c,contrastHighColor:u}=(0,r.x)(o),{primaryColor:p,disabledColor:m,contrastHighColor:b}=(0,r.x)("dark");return{label:{...i.t,cursor:t?"not-allowed":"pointer",justifySelf:"flex-start",color:t?c:h,transition:(0,r.w)("color"),...(0,r.d)(e,(t=>(0,r.P)(t,d))),...(0,r.q)(o,{color:t?m:p}),"&:empty":{display:"none"},"&+&":{cursor:"unset",marginTop:`-${a.s}`,fontSize:n.f,...!t&&{color:u,...(0,r.q)(o,{color:b})}},...l},...(0,s.b)()}},b="label",f="description",g=({host:t,label:e,description:o,htmlFor:i,isRequired:a,isLoading:n,isDisabled:l,formElement:h})=>(0,r.f)(r.Q,null,(0,r.f)("label",{class:"label",id:b,"aria-disabled":n||l?"true":null,...i?{htmlFor:i}:{onClick:e=>v(e,h,n,l,t)}},(0,s.h)(t,e)&&(0,r.f)(r.Q,null,e||(0,r.f)("slot",{name:"label"}),(a&&!u(t)||h&&p(t,h))&&(0,r.f)(s.R,null))),(0,d.h)(t,o)&&(0,r.f)("span",{class:"label",id:f,"aria-disabled":n||l?"true":null},o||(0,r.f)("slot",{name:"description"}))),v=(t,e,o,r,s)=>{if(!o&&!r&&null===(0,l.g)(t.target,"a"))if("INPUT"!==e.tagName||"checkbox"!==e.type&&"radio"!==e.type)if("SELECT"===e.tagName){const t=s.shadowRoot.children[0].querySelector(".dropdown")?.shadowRoot.children[0];t?(t.click(),t.focus()):e.focus()}else"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||e.focus();else e.click()}},2162:(t,e,o)=>{o.r(e),o.d(e,{p_pin_code:()=>S});var r=o(8634),s=o(1536),i=o(4193),a=o(524),n=o(2037),l=o(3927),d=o(269),h=o(9621),c=o(2392),u=o(9212),p=o(931),m=o(949),b=o(8217),f=o(411);o(8582),o(2801),o(1332),o(4545),o(5366),o(101);const g=t=>Object.fromEntries(Object.entries(t).map((([t,e])=>(e="object"==typeof e?g(e):e,[t.replace(/::slotted\(([^,]+)\)/g,"$1"),e])))),v=(t,e)=>Object.fromEntries(Object.entries(e).filter((([e])=>e!==t)).map((([e,o])=>[e,o="object"==typeof o?v(t,o):o]))),y=(t,e)=>{const o=`Property value of component ${(0,r.j)(t)}:`;(0,r.c)(o,e?`Provided value has too many characters and was truncated to the max length of ${e}.`:"Provided value contains characters that are not of type number, the value was therefore reset.")},$=t=>t.map((t=>t.value||" ")).join(""),C=(t,e,o)=>e&&!/^[\d ]+$/.test(e)?(y(t),""):x(e)?.length>o?(y(t,o),e.slice(0,o)):e,x=t=>t.replace(/\s/g,""),w=(t,e,o,r,i)=>{(0,s.s)(t,{...e&&{name:e},value:x(o)}),t.toggleAttribute("disabled",r),t.toggleAttribute("required",i)},k=(t,e,o,s,i,a,l)=>{const d=`calc(${f.a} + 10px + ${r.o} * 2 + ${b.s} * 2)`,y=v("input[readonly]",g((0,c.g)("input",e,s,l,{padding:`${c.b} ${p.s}`,textAlign:"center",width:d,...a>4&&{[(0,m.g)("xs")]:{width:`calc((276px - (${b.s} * ${a-1})) / ${a})`}},...s&&{opacity:.2,cursor:"not-allowed"},...Object.fromEntries(Array.from(Array(a)).map(((t,e)=>[`&:nth-of-type(${e+1})`,{gridArea:`1/${e+1}`}])))})));return(0,r.g)({"@global":{":host":{display:"block",...(0,r.a)({...h.c,...h.h})},...y,...i&&(0,r.a)({"::slotted([slot=internal-input])":{position:"absolute",height:d,width:0,opacity:0}})},root:{display:"grid",gap:p.s},wrapper:{display:"grid",justifySelf:"flex-start",gap:b.s},...s&&{spinner:{gridArea:`1/1/1/${a+1}`,placeSelf:"center",width:d,height:d,pointerEvents:"none"}},...(0,u.g)(o,t,l),...(0,n.g)(l,e)})},A={label:r.A.string,description:r.A.string,name:r.A.string,length:r.A.oneOf([1,2,3,4,5,6]),hideLabel:r.A.breakpoint("boolean"),state:r.A.oneOf(n.F),disabled:r.A.boolean,loading:r.A.boolean,required:r.A.boolean,message:r.A.string,type:r.A.oneOf(["number","password"]),value:r.A.string,theme:r.A.oneOf(d.T)},S=class{constructor(t){(0,r.r)(this,t),this.update=(0,r.C)(this,"update",3),this.inputElements=[],this.onInput=t=>{const{target:e}=t;if(e.value.length>=this.length){const t=x(C(this.host,e.value,this.length));this.updateValue(t),this.focusFirstEmptyOrLastInput(t)}},this.onKeyDown=t=>{const{key:e,target:o,target:{previousElementSibling:s,nextElementSibling:i}}=t;(0,a.i)(this.disabled,this.loading)&&"Tab"!==e?t.preventDefault():/^\d$/.test(e)?(t.preventDefault(),o.value=e,this.updateValue($(this.inputElements)),i?.focus()):1!==e.length||t.ctrlKey||t.metaKey?"Backspace"===e||"Delete"===e?(o.value||(t.preventDefault(),"Backspace"===e&&s?(s.value="",s.focus()):"Delete"===e&&i&&(i.value="",i.focus())),o.value="",this.updateValue($(this.inputElements))):"Enter"===e?l.i&&((t,e)=>{const o=(0,r.k)(t);return!(1!==e.querySelectorAll("input:not([type=submit]):not([type=hidden])").length&&!Array.from(e.querySelectorAll(`${o.pButton},${o.pButtonPure},button[type=submit],input[type=submit]`)).some((t=>"submit"===t.type)))})(this.host,this.form)&&this.form.requestSubmit():"Dead"!==e&&"Process"!==e||(o.blur(),requestAnimationFrame((()=>o.focus()))):t.preventDefault()},this.onPaste=t=>{const e=x(C(this.host,t.clipboardData.getData("Text"),this.length));e!==this.value&&(this.updateValue(e),this.focusFirstEmptyOrLastInput(e)),t.preventDefault()},this.updateValue=t=>{this.value=t,this.update.emit({value:t,isComplete:x(t).length===this.length})},this.focusFirstEmptyOrLastInput=t=>{this.inputElements[t.length===this.length?t.length-1:t.length]?.focus()},this.label="",this.description="",this.name=void 0,this.length=4,this.hideLabel=!1,this.state="none",this.disabled=!1,this.loading=!1,this.required=!1,this.message="",this.type="number",this.value="",this.theme="light"}componentWillLoad(){this.form=(0,i.g)(this.host,"form"),this.isWithinForm=!!this.form,this.isWithinForm&&(this.hiddenInput=((t,e,o,r,i)=>{const a=document.createElement("input");return(0,s.s)(a,{"aria-hidden":"true",slot:"internal-input",tabindex:"-1"}),w(a,e,o,r,i),t.prepend(a),a})(this.host,this.name,this.value,this.disabled,this.required)),this.value=C(this.host,this.value,this.length)}componentWillUpdate(){this.isWithinForm&&w(this.hiddenInput,this.name,this.value,this.disabled,this.required)}componentShouldUpdate(t,e){return(0,r.h)(t,e)}render(){(0,r.v)(this,A),(0,r.e)(this.host,k,this.hideLabel,this.state,this.disabled,this.loading,this.isWithinForm,this.length,this.theme);const t=(0,r.k)(this.host);this.inputElements=[];const e="current-input";return(0,r.f)("div",{class:"root"},(0,r.f)(u.L,{host:this.host,label:this.label,description:this.description,htmlFor:e,isRequired:this.required,isLoading:this.loading,isDisabled:this.disabled}),(0,r.f)("div",{class:"wrapper",onKeyDown:this.onKeyDown,onPaste:this.onPaste,onInput:this.onInput},Array.from(Array(this.length),((t,o)=>(0,r.f)("input",{key:o,id:o===this.value.length?e:null,type:"number"===this.type?"text":this.type,"aria-label":`${o+1}-${this.length}`,"aria-describedby":`${u.l} ${u.d} ${n.m}`,"aria-invalid":"error"===this.state?"true":null,"aria-busy":this.loading?"true":null,"aria-disabled":this.loading?"true":null,autoComplete:"one-time-code",pattern:"\\d*",inputMode:"numeric",value:" "===this.value[o]?null:this.value[o],disabled:this.disabled,required:this.required,ref:t=>this.inputElements.push(t)}))),this.loading&&(0,r.f)(t.pSpinner,{class:"spinner",size:"inherit",theme:this.theme,aria:{"aria-label":"Loading state"}})),(0,r.f)(n.S,{state:this.state,message:this.message,theme:this.theme,host:this.host}),this.isWithinForm&&(0,r.f)("slot",{name:"internal-input"}))}get host(){return(0,r.i)(this)}}},2037:(t,e,o)=>{o.d(e,{F:()=>n,R:()=>f,S:()=>b,a:()=>c,b:()=>p,c:()=>h,g:()=>u,h:()=>d,m:()=>m});var r=o(8582),s=o(8634),i=o(931),a=o(1332);const n=["none","error","success"],l=t=>"error"===t?"alert":"success"===t?"status":null,d=(t,e)=>!!e||(0,r.h)(t,"label"),h=(t,e,o)=>(e||(0,r.h)(t,"message"))&&["success","error"].includes(o),c=(t,e)=>{const o=(0,s.x)(t);return{formStateColor:o[`${e}Color`],formStateHoverColor:o[`${e}ColorDarken`]}},u=(t,e,o)=>({message:{display:"flex",gap:i.s,...a.t,color:c(t,e).formStateColor,...(0,s.q)(t,{color:c("dark",e).formStateColor}),transition:(0,s.w)("color"),...o}}),p=()=>({required:{userSelect:"none"}}),m="message",b=({state:t,message:e,theme:o,host:r})=>{const i=(0,s.k)(r),a="error"===t;return h(r,e,t)&&(0,s.f)("span",{id:m,class:"message",role:l(t)},(0,s.f)(i.pIcon,{name:a?"exclamation":"check",color:a?"notification-error":"notification-success",theme:o,"aria-hidden":"true"}),e||(0,s.f)("slot",{name:"message"}))},f=()=>(0,s.f)("span",{class:"required"}," *")},1536:(t,e,o)=>{o.d(e,{s:()=>r});const r=(t,e)=>Object.entries(e).forEach((e=>t.setAttribute(...e)))},2236:(t,e,o)=>{o.d(e,{s:()=>r});const r="16px"},8217:(t,e,o)=>{o.d(e,{s:()=>r});const r="8px"},931:(t,e,o)=>{o.d(e,{s:()=>r});const r="4px"},4545:(t,e,o)=>{o.d(e,{_:()=>n,a:()=>l,f:()=>a});var r=o(411),s=o(5030),i=o(6397);const a={overflowWrap:"break-word",hyphens:"auto"},n=`${i.f} ${i.a} ${s.f} `,l=`/${r.a} ${r.f}`},1332:(t,e,o)=>{o.d(e,{t:()=>i});var r=o(4545),s=o(4876);const i={font:`${r._}${s.f}${r.a}`,...r.f}},269:(t,e,o)=>{o.d(e,{T:()=>r});const r=["light","dark","auto"]}}]);
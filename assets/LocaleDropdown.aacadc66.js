import{u as a,b as o,i as e,_ as s,f as n,s as l,p as c,g as t}from"./index.b30bf786.js";import{b as r,r as i,o as u,f as m,n as d,u as p,$ as g,e as f,G as b,g as _,a0 as v,H as j,a1 as w,j as h,a2 as C,a3 as L,Y as k,P as I,a4 as P}from"./vendor.5173cf7d.js";/* empty css                  */import{u as y}from"./useIcon.7852c754.js";/* empty css                  *//* empty css                  */const E=r({setup(e){const{getPrefixCls:s}=o(),n=s("theme-switch"),l=y({icon:"emojione-monotone:sun",color:"#fde047"}),c=y({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),t=a(),r=i(t.getIsDark),f="var(--el-color-black)",b=a=>{t.setIsDark(a)};return(a,o)=>(u(),m(p(g),{class:d(p(n)),modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),"inline-prompt":"","border-color":f,"inactive-color":f,"active-color":f,"active-icon":p(l),"inactive-icon":p(c),onChange:b},null,8,["class","modelValue","active-icon","inactive-icon"]))}});const V=()=>({changeLocale:async a=>{const o=e.global,c=await function(a){switch(a){case"../../locales/en.ts":return s((()=>import("./en.cc25b3a7.js")),[]);case"../../locales/zh-CN.ts":return s((()=>import("./zh-CN.2c9d63da.js")),[]);default:return new Promise((function(o,e){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+a)))}))}}(`../../locales/${a}.ts`);o.setLocaleMessage(a,c.default),(a=>{const o=n();"legacy"===e.mode?e.global.locale=a:e.global.locale.value=a,o.setCurrentLocale({lang:a}),l(a)})(a)}}),x=r({props:{color:c.string.def("")},setup(a){const{getPrefixCls:e}=o(),s=e("locale-dropdown"),n=t(),l=f((()=>n.getLocaleMap)),c=f((()=>n.getCurrentLocale)),r=a=>{if(a===p(c).lang)return;window.location.reload(),n.setCurrentLocale({lang:a});const{changeLocale:o}=V();o(a)};return(o,e)=>{const n=b("Icon");return u(),m(p(v),{class:d(p(s)),trigger:"click",onCommand:r},{dropdown:_((()=>[j(p(w),null,{default:_((()=>[(u(!0),h(P,null,C(p(l),(a=>(u(),m(p(L),{key:a.lang,command:a.lang},{default:_((()=>[k(I(a.name),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:_((()=>[j(n,{size:18,icon:"ion:language-sharp",class:d(["cursor-pointer",o.$attrs.class]),color:a.color},null,8,["class","color"])])),_:1},8,["class"])}}});export{E as _,x as a};

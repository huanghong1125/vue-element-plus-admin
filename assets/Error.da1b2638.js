import{p as e,c as r}from"./index.622449e0.js";import{b as s,o as t,j as o,k as a,P as i,H as n,u as l,_ as u,g as c,Y as m}from"./vendor.5173cf7d.js";/* empty css                  */const p={class:"flex justify-center"},d={class:"text-center"},x=["src"],f={class:"text-14px text-[var(--el-color-info)]"},g={class:"mt-20px"},v=s({props:{type:e.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:s}){const v=e,{t:b}=r(),y={404:{url:"/assets/404.904e236c.svg",message:b("error.pageError"),buttonText:b("error.returnToHome")},500:{url:"/assets/500.40f0978f.svg",message:b("error.networkError"),buttonText:b("error.returnToHome")},403:{url:"/assets/403.7832526d.svg",message:b("error.noPermission"),buttonText:b("error.returnToHome")}},T=()=>{s("errorClick",v.type)};return(r,s)=>(t(),o("div",p,[a("div",d,[a("img",{width:"350",src:y[e.type].url,alt:""},null,8,x),a("div",f,i(y[e.type].message),1),a("div",g,[n(l(u),{type:"primary",onClick:T},{default:c((()=>[m(i(y[e.type].buttonText),1)])),_:1})])])]))}});export{v as _};

import{p as r}from"./index.622449e0.js";import{b as e,e as t,ay as s,u as o}from"./vendor.5173cf7d.js";var l=e({name:"Highlight",props:{tag:r.string.def("span"),keys:{type:Array,default:()=>[]},color:r.string.def("var(--el-color-primary)")},emits:["click"],setup(r,{emit:e,slots:l}){const a=t((()=>r.keys.map((t=>s("span",{onClick:()=>{e("click",t)},style:{color:r.color,cursor:"pointer"}},t))))),n=()=>{if(!(null==l?void 0:l.default))return null;const e=null==l?void 0:l.default()[0].children;if(!e)return null==l?void 0:l.default()[0];const t=(n=e,r.keys.forEach(((r,e)=>{const t=new RegExp(r,"g");n=n.replace(t,`{{${e}}}`)})),n.split(/{{|}}/));var n;const i=/^[0-9]*$/,c=t.map((r=>i.test(r)&&o(a)[r]||r));return s(r.tag,c)};return()=>n()}});export{l as _};

import{r as a,m as s,u as t}from"./vendor.5173cf7d.js";const e=e=>{const n=a(),c=a(),o=async()=>{await s();const a=t(n);return a},l={setProps:async(a={})=>{const s=await o();null==s||s.setProps(a)},setValues:async a=>{const s=await o();null==s||s.setValues(a)},setSchema:async a=>{const s=await o();null==s||s.setSchema(a)},addSchema:async(a,s)=>{const t=await o();null==t||t.addSchema(a,s)},delSchema:async a=>{const s=await o();null==s||s.delSchema(a)},getFormData:async()=>{const a=await o();return null==a?void 0:a.formModel}};return e&&l.setProps(e),{register:(a,s)=>{n.value=a,c.value=s},elFormRef:c,methods:l}};export{e as u};

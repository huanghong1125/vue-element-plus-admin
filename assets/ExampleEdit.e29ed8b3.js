import e from"./Write.eb1bbb50.js";import{_ as a}from"./ContentWrap.4396b0ec.js";import{b as t,O as s,b3 as r,r as o,o as i,f as l,g as p,u as m,H as d,k as u,Y as n,P as c,_ as f}from"./vendor.5173cf7d.js";/* empty css                  */import{c as j}from"./index.b30bf786.js";import{a as b,s as v}from"./index.383e69a5.js";import{u as x}from"./useEmitt.f6e206d0.js";import"./Form.vue_vue_type_script_lang.9a657774.js";/* empty css               *//* empty css                  *//* empty css                 *//* empty css               */import"./tsxHelper.ff1c87df.js";/* empty css                        *//* empty css                  *//* empty css                   */import"./InputPassword.a45ab04d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.e5ec304a.js";import"./useForm.14fbe6ea.js";import"./formRules.26e58489.js";/* empty css                */import"./useAxios.16e3dbc7.js";const g={class:"text-center"},_=t({setup(t){const{emitter:_}=x(),{push:w}=s(),{query:y}=r(),{t:h}=j(),k=o(null);(async()=>{const e=await b({params:{id:y.id}});e&&(k.value=e.data)})();const D=o(),F=o(!1),C=async()=>{var e,a;const t=m(D);if(await(null==(a=null==(e=null==t?void 0:t.elFormRef)?void 0:e.validate())?void 0:a.catch((()=>{})))){F.value=!0;const e=await(null==t?void 0:t.getFormData());await v({data:e}).catch((()=>{})).finally((()=>{F.value=!1}))&&(_.emit("getList","edit"),w("/example/example-page"))}};return(t,s)=>(i(),l(m(a),{title:m(h)("exampleDemo.edit")},{default:p((()=>[d(e,{ref_key:"writeRef",ref:D,"current-row":k.value},null,8,["current-row"]),u("div",g,[d(m(f),{type:"primary",loading:F.value,onClick:C},{default:p((()=>[n(c(m(h)("exampleDemo.save")),1)])),_:1},8,["loading"]),d(m(f),{onClick:s[0]||(s[0]=e=>m(w)("/example/example-page"))},{default:p((()=>[n(c(m(h)("dialogDemo.close")),1)])),_:1})])])),_:1},8,["title"]))}});export{_ as default};

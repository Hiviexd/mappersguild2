import{d as a,o as t,b as e,f as l,F as s,g as d,t as r,r as n,l as o,e as i}from"./vendor.cb33bf1d.js";var u=a({name:"DataTable",props:{data:{type:Array,required:!0},headers:{type:Array,required:!0},isLoading:Boolean,customDataTarget:{type:String,default:null}},emits:["update:selectedId"]});const b={key:0,class:"table table-sm"},c=l("th",null,"EDIT",-1),g=["data-bs-target","onClick"],p={key:1,class:"text-white-50"};u.render=function(a,u,y,h,m,f){return t(),e("div",null,[a.data.length?(t(),e("table",b,[l("thead",null,[l("tr",null,[(t(!0),e(s,null,d(a.headers,(a=>(t(),e("th",{key:a},r(a),1)))),128)),c])]),l("tbody",null,[(t(!0),e(s,null,d(a.data,(s=>(t(),e("tr",{key:s.id,class:"text-white-50"},[n(a.$slots,"default",{obj:s}),l("td",null,[l("a",{href:"#","data-bs-toggle":"modal","data-bs-target":a.customDataTarget||"#edit",onClick:o((t=>a.$emit("update:selectedId",s.id)),["prevent"])}," edit ",8,g)])])))),128))])])):a.isLoading?i("",!0):(t(),e("span",p,"None..."))])};export{u as _};

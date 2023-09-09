import{d as u,_ as d,o as l,e as s,a,t as n,n as f,Y as g,l as F,c as $,w as y,r as b,f as h,F as v}from"./index-8f2def50.js";const V=u({name:"FormFieldBase",props:{label:{type:String,required:!0},description:{type:String,default:""},autoColumns:{type:Boolean,default:!1}}}),C={key:0,class:"text-secondary small"};function B(e,t,p,i,m,c){return l(),s("div",{class:f(["row",e.autoColumns?"":"mb-3"])},[a("div",{class:f([e.autoColumns?"col-auto filter-title":"col-sm-3","col-form-label"])},n(e.label),3),a("div",{class:f(e.autoColumns?"col":"col-sm-9")},[g(e.$slots,"default"),e.description?(l(),s("p",C,n(e.description),1)):F("",!0)],2)],2)}const _=d(V,[["render",B]]),q=u({name:"FormField",components:{FormFieldBase:_},props:{label:{type:String,required:!0},placeholder:{type:String,default:"..."},modelValue:{type:String,required:!0},type:{type:String,default:"text"},options:{type:Array,default:()=>[]},autoColumns:{type:Boolean,default:!1}},emits:["update:modelValue"]}),w={value:"",selected:""},k=["value","selected"];function I(e,t,p,i,m,c){const r=b("form-field-base");return l(),$(r,{label:e.label,"auto-columns":e.autoColumns},{default:y(()=>[a("select",{class:"form-select form-select-sm",onInput:t[0]||(t[0]=o=>e.$emit("update:modelValue",o.target.value))},[a("option",w,n(e.placeholder),1),g(e.$slots,"default",{},()=>[(l(!0),s(v,null,h(e.options,(o,S)=>(l(),s("option",{key:S,value:o,selected:o===e.modelValue},n(o),9,k))),128))])],32)]),_:3},8,["label","auto-columns"])}const Y=d(q,[["render",I]]),N=u({name:"FormField",components:{FormFieldBase:_},props:{label:{type:String,required:!0},placeholder:{type:String,default:""},modelValue:{type:[String,Number],required:!0},type:{type:String,default:"text"},description:{type:String,default:""}},emits:["update:modelValue"]}),z=["value","type","placeholder"];function A(e,t,p,i,m,c){const r=b("form-field-base");return l(),$(r,{label:e.label,description:e.description},{default:y(()=>[a("input",{value:e.modelValue,type:e.type,placeholder:e.placeholder,class:"form-control form-control-sm",autocomplete:"off",onInput:t[0]||(t[0]=o=>e.$emit("update:modelValue",o.target.value))},null,40,z)]),_:1},8,["label","description"])}const j=d(N,[["render",A]]),D=u({name:"FormField",components:{FormFieldBase:_},props:{label:{type:String,required:!0},placeholder:{type:String,default:""},modelValue:{type:String,required:!0},rows:{type:Number,default:3}},emits:["update:modelValue"]}),E=["value","rows","placeholder"];function L(e,t,p,i,m,c){const r=b("form-field-base");return l(),$(r,{label:e.label},{default:y(()=>[a("textarea",{value:e.modelValue,class:"form-control form-control-sm",rows:e.rows,placeholder:e.placeholder,onInput:t[0]||(t[0]=o=>e.$emit("update:modelValue",o.target.value))},null,40,E)]),_:1},8,["label"])}const G=d(D,[["render",L]]);export{Y as F,_ as a,j as b,G as c};

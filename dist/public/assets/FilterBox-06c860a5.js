import{d as a,_ as r,o as n,e as i,a as t,l as d,B as u,L as o}from"./index-0b72a673.js";const p=a({props:{placeholder:{type:String,required:!0},filterValue:{type:String,default:""}},emits:["update:filterValue"],data(){return{newFilterValue:""}}}),f={class:"row mb-2"},c={class:"col"},m={class:"input-group"},h=t("i",{class:"fas fa-search"},null,-1),v=[h],_=["placeholder","value"],V={class:"row small"},$={class:"col"};function w(e,s,g,y,B,F){return n(),i("div",null,[t("div",f,[t("div",c,[t("div",m,[t("button",{class:"btn btn-primary",href:"#",onClick:s[0]||(s[0]=d(l=>e.$emit("update:filterValue",e.newFilterValue),["prevent"]))},v),t("input",{class:"form-control",type:"text",maxlength:"48",placeholder:e.placeholder,autocomplete:"off",value:e.filterValue,onInput:s[1]||(s[1]=l=>e.newFilterValue=l.target.value),onKeyup:s[2]||(s[2]=u(l=>e.$emit("update:filterValue",l.target.value),["enter"]))},null,40,_),o(e.$slots,"default")])])]),t("div",V,[t("div",$,[o(e.$slots,"filters")])])])}const k=r(p,[["render",w]]);export{k as F};

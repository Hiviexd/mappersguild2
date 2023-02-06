var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{d as o,m as n,i as r,o as c,b as m,f as l,j as p,w as q,t as b,u as f,e as h}from"./vendor.df51a6ea.js";import{_ as y}from"./SubmitQuestModal.2df23e3a.js";import{_ as Q}from"./QuestInfo.085ec709.js";import{_ as I}from"./DataTable.88222fe0.js";import{_ as M}from"./index.ec1ad404.js";import"./ModalDialog.472e77e7.js";import"./AssociatedBeatmaps.42345698.js";import"./beatmap.8dd9b4cb.js";var j,P,v={state:{quests:[]},mutations:{setQuests(e,t){e.quests=t},updateQuest(e,t){const s=e.quests.findIndex((e=>e.id===t.id));-1!==s&&(e.quests[s]=t)},addQuest(e,t){e.quests.push(t)},deleteQuest(e,t){const s=e.quests.findIndex((e=>e.id===t.id));e.quests.splice(s,1)},renameQuest(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.name=t.name)},updatePrice(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.price=t.price)},updateRequiredMapsets(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.requiredMapsets=t.requiredMapsets)},updateDescription(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.descriptionMain=t.description)},resetQuestDeadline(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.deadline=t.deadline)},updateExpiration(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.expiration=t.expiration)},updateMinParty(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.minParty=t.minParty)},updateMaxParty(e,t){const s=e.quests.find((e=>e.id==t.questId));s&&(s.maxParty=t.maxParty)}}},x=o({components:{DataTable:I,SubmitQuestModal:y,QuestInfo:Q,ModesIcons:M},data:()=>({selectedQuestId:""}),computed:(j=((e,t)=>{for(var s in t||(t={}))d.call(t,s)&&u(e,s,t[s]);if(a)for(var s of a(t))i.call(t,s)&&u(e,s,t[s]);return e})({},n({quests:e=>e.questsAdmin.quests})),P={selectedQuest(){return this.quests.find((e=>e.id===this.selectedQuestId))}},t(j,s(P))),beforeCreate(){this.$store.hasModule("questsAdmin")||this.$store.registerModule("questsAdmin",v)},unmounted(){this.$store.hasModule("questsAdmin")&&this.$store.unregisterModule("questsAdmin")},async created(){const e=await this.$http.initialRequest("/admin/quests/load");this.$http.isError(e)||this.$store.commit("setQuests",e)},methods:{deleteQuest(e){const t=this.quests.findIndex((t=>t.id==e.id));this.quests.splice(t,1)},updateQuest(e){const t=this.quests.findIndex((t=>t.id==e.id));-1!==t&&(this.quests[t]=e)},async removeDuplicatePartyMembers(e){await this.$http.executePost("/admin/quests/removeDuplicatePartyMembers",{},e)&&this.$store.dispatch("updateToastMessages",{message:"removed duplicate party members",type:"success"})}}});const g={class:"container card card-body py-1"},w={class:"row"},D={class:"col"},O=l("button",{class:"btn btn-sm btn-info w-100 mb-1","data-bs-toggle":"modal","data-bs-target":"#submitQuest"}," Add quest ",-1);x.render=function(e,t,s,a,d,i){const u=r("modes-icons"),o=r("data-table"),n=r("submit-quest-modal"),y=r("quest-info");return c(),m("div",null,[l("div",g,[l("div",w,[l("div",D,[O,l("button",{class:"btn btn-sm btn-info w-100 mb-1",onClick:t[0]||(t[0]=t=>e.removeDuplicatePartyMembers(t))}," Remove duplicate party members "),p(o,{data:e.quests,headers:["name","creator","modes","status","mapsets"],"custom-data-target":"#editQuest","onUpdate:selectedId":t[1]||(t[1]=t=>e.selectedQuestId=t)},{default:q((({obj:e})=>[l("td",null,b(e.name),1),l("td",null,b(e.creator.username),1),l("td",null,[p(u,{modes:e.modes},null,8,["modes"])]),l("td",null,b(e.status),1),l("td",null,b(e.requiredMapsets),1)])),_:1},8,["data"])])])]),p(n,{"is-admin":!0}),e.selectedQuest?(c(),f(y,{key:0,quest:e.selectedQuest,onUpdateQuest:t[2]||(t[2]=t=>e.updateQuest(t)),onDeleteQuest:t[3]||(t[3]=t=>e.deleteQuest(t))},null,8,["quest"])):h("",!0)])};export{x as default};

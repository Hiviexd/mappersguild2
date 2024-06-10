import{d as Q,M as b,m as h,_ as I,o as a,e as M,a as n,c as r,w as _,t as u,i as m,k as l,p as o}from"./index-ad0627c4.js";import{S as $}from"./SubmitQuestModal-e5dce965.js";import{Q as x}from"./QuestInfo-66df7799.js";import{D as g}from"./DataTable-6a607ea6.js";import"./ModalDialog-0ac35608.js";import"./FormTextarea-591b1313.js";import"./AssociatedBeatmaps-b38720a9.js";const P={state:{quests:[],exampleQuest:null},mutations:{setQuests(t,e){t.quests=e},setExampleQuest(t,e){t.exampleQuest=e},updateQuest(t,e){const s=t.quests.findIndex(d=>d.id===e.id);s!==-1&&(t.quests[s]=e)},addQuest(t,e){t.quests.push(e)},deleteQuest(t,e){const s=t.quests.findIndex(d=>d.id===e.id);t.quests.splice(s,1)},renameQuest(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.name=e.name)},updatePrice(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.price=e.price)},updateRequiredMapsets(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.requiredMapsets=e.requiredMapsets)},updateDescription(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.descriptionMain=e.description)},resetQuestDeadline(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.deadline=e.deadline)},updateExpiration(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.expiration=e.expiration)},updateMinParty(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.minParty=e.minParty)},updateMaxParty(t,e){const s=t.quests.find(d=>d.id==e.questId);s&&(s.maxParty=e.maxParty)}}},k=P,A=Q({components:{DataTable:g,SubmitQuestModal:$,QuestInfo:x,ModesIcons:b},data(){return{selectedQuestId:""}},computed:{...h({quests:t=>t.questsAdmin.quests}),selectedQuest(){return this.quests.find(t=>t.id===this.selectedQuestId)}},beforeCreate(){this.$store.hasModule("questsAdmin")||this.$store.registerModule("questsAdmin",k)},unmounted(){this.$store.hasModule("questsAdmin")&&this.$store.unregisterModule("questsAdmin")},methods:{async loadQuests(t){const e=await this.$http.executeGet("/admin/beatmaps/load",t);this.$http.isError(e)||this.$store.commit("setQuests",e)},deleteQuest(t){const e=this.quests.findIndex(s=>s.id==t.id);this.quests.splice(e,1)},updateQuest(t){const e=this.quests.findIndex(s=>s.id==t.id);e!==-1&&(this.quests[e]=t)}}}),C={class:"container card card-body py-3"},y=n("h5",null,"Quests list",-1),D=n("div",{class:"container card card-body py-3 mt-2"},[n("h5",null,"Create quest"),n("button",{class:"btn btn-sm btn-info w-100 mb-1","data-bs-toggle":"modal","data-bs-target":"#submitQuest"}," Add quest ")],-1);function w(t,e,s,d,v,B){const c=o("modes-icons"),q=o("data-table"),p=o("submit-quest-modal"),f=o("quest-info");return a(),M("div",null,[n("div",C,[y,n("button",{class:"btn btn-sm btn-info w-100",onClick:e[0]||(e[0]=i=>t.loadQuests(i))}," Load all quests "),t.quests.length?(a(),r(q,{key:0,data:t.quests,headers:["name","creator","modes","status","mapsets"],"custom-data-target":"#editQuest","onUpdate:selectedId":e[1]||(e[1]=i=>t.selectedQuestId=i)},{default:_(({obj:i})=>[n("td",null,u(i.name),1),n("td",null,u(i.creator.username),1),n("td",null,[m(c,{modes:i.modes},null,8,["modes"])]),n("td",null,u(i.status),1),n("td",null,u(i.requiredMapsets),1)]),_:1},8,["data"])):l("",!0)]),D,m(p,{"is-admin":!0}),t.selectedQuest?(a(),r(f,{key:0,quest:t.selectedQuest,onUpdateQuest:e[2]||(e[2]=i=>t.updateQuest(i)),onDeleteQuest:e[3]||(e[3]=i=>t.deleteQuest(i))},null,8,["quest"])):l("",!0)])}const L=I(A,[["render",w]]);export{L as default};
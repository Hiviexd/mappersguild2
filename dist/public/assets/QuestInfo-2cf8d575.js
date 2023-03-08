import{M as $}from"./ModalDialog-0651c23b.js";import{A as b}from"./AssociatedBeatmaps-d4b410d7.js";import{d as g,M as w,_ as P,o as n,c as r,w as m,h as l,t as h,q as d,a as i,b as o,A as a,e as M,F as Q,k as x,i as u}from"./index-fc4c7aa0.js";const C=g({name:"QuestInfo",components:{AssociatedBeatmaps:b,ModalDialog:$,ModesIcons:w},props:{quest:{type:Object,required:!0}},data(){return{renameQuestName:this.quest.name,price:this.quest.price,requiredMapsets:this.quest.requiredMapsets,minParty:this.quest.minParty,maxParty:this.quest.maxParty,description:this.quest.descriptionMain,duplicateQuestName:this.quest.name,expiration:this.quest.expiration?this.quest.expiration.toString():""}},watch:{quest(){this.renameQuestName=this.quest.name,this.price=this.quest.price,this.requiredMapsets=this.quest.requiredMapsets,this.minParty=this.quest.minParty,this.maxParty=this.quest.maxParty,this.description=this.quest.descriptionMain,this.duplicateQuestName=this.quest.name,this.expiration=this.quest.expiration?this.quest.expiration.toString():""}},methods:{async renameQuest(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/rename`,{name:this.renameQuestName},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"renamed quest",type:"info"}),this.$store.commit("renameQuest",{questId:this.quest.id,name:t}))},async updatePrice(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/updatePrice`,{price:this.price},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"updated price",type:"info"}),this.$store.commit("updatePrice",{questId:this.quest.id,price:t}))},async updateRequiredMapsets(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/updateRequiredMapsets`,{requiredMapsets:this.requiredMapsets},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"updated required mapsets",type:"info"}),this.$store.commit("updateRequiredMapsets",{questId:this.quest.id,requiredMapsets:t}))},async updateDescription(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/updateDescription/`,{description:this.description},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"updated quest description",type:"info"}),this.$store.commit("updateDescription",{questId:this.quest.id,description:t}))},async dropQuest(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/drop`,{},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"quest force dropped",type:"info"}),this.$store.commit("updateStatus",{questId:this.quest.id,status:t}))},async scheduleQuestForCompletion(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/scheduleForCompletion`,{queuedForCompletion:!this.quest.queuedForCompletion},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:`quest queued for completion toggled: ${t}`,type:"info"}),this.$store.commit("updateQueuedForCompletion",{questId:this.quest.id,queuedForCompletion:t}))},async duplicateQuest(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/duplicate`,{name:this.duplicateQuestName},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"quest duplicated",type:"info"}),this.$store.commit("addQuest",{quest:t}))},async resetQuestDeadline(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/reset`,{},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:`reset quest deadline to ${t}`,type:"info"}),this.$store.commit("resetQuestDeadline",{questId:this.quest.id,deadline:t}))},async deleteQuest(e){if(confirm("Are you sure?")){const p=await this.$http.executePost(`/admin/quests/${this.quest.id}/delete`,{},e);this.$http.isError(p)||(this.$bs.hideModal("editQuest"),this.$store.dispatch("updateToastMessages",{message:"quest deleted",type:"info"}),this.$store.commit("deleteQuest",{questId:this.quest.id}))}},async toggleQuestMode(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/toggleMode`,{mode:e});this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"changed quest modes",type:"info"}),this.$store.commit("quests/updateQuest",t))},async updateExpiration(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/updateExpiration/`,{expiration:this.expiration},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"updated quest expiration",type:"info"}),this.$store.commit("updateExpiration",{questId:this.quest.id,expiration:t}))},async updateMinParty(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/updateMinParty/`,{minParty:this.minParty},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"updated minParty",type:"info"}),this.$store.commit("updateMinParty",{questId:this.quest.id,minParty:t}))},async updateMaxParty(e){const t=await this.$http.executePost(`/admin/quests/${this.quest.id}/updateMaxParty/`,{maxParty:this.maxParty},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"updated maxParty",type:"info"}),this.$store.commit("updateMaxParty",{questId:this.quest.id,maxParty:t}))}}}),k={class:"container"},E={class:"row"},T={class:"row"},I={class:"row"},N={class:"row"},D={class:"row"},U={class:"row"},V={class:"row"},F={class:"col-sm-6"},R={class:"text-danger"},S={class:"row"},B={class:"row"},v=["placeholder"];function A(e,t,p,j,O,z){const c=u("user-link"),q=u("modes-icons"),f=u("associated-beatmaps"),y=u("modal-dialog");return n(),r(y,{id:"editQuest"},{header:m(()=>[l(h(e.quest.name)+" by ",1),e.quest.creator?(n(),r(c,{key:0,class:"text-dark",user:e.quest.creator},null,8,["user"])):d("",!0)]),default:m(()=>[i("div",k,[i("p",E,[o(i("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.renameQuestName=s),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"quest name..."},null,512),[[a,e.renameQuestName]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[1]||(t[1]=s=>e.renameQuest(s))}," Rename quest ")]),i("p",T,[o(i("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.price=s),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"price..."},null,512),[[a,e.price]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[3]||(t[3]=s=>e.updatePrice(s))}," Update price ")]),i("p",I,[o(i("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>e.requiredMapsets=s),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"required mapsets..."},null,512),[[a,e.requiredMapsets]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[5]||(t[5]=s=>e.updateRequiredMapsets(s))}," Update required mapsets ")]),i("p",N,[o(i("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e.minParty=s),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"minParty..."},null,512),[[a,e.minParty]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[7]||(t[7]=s=>e.updateMinParty(s))}," Update minParty ")]),i("p",D,[o(i("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>e.maxParty=s),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"maxParty..."},null,512),[[a,e.maxParty]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[9]||(t[9]=s=>e.updateMaxParty(s))}," Update maxParty ")]),i("p",U,[o(i("textarea",{"onUpdate:modelValue":t[10]||(t[10]=s=>e.description=s),class:"form-control form-control-sm mx-2 mt-2 w-50",type:"text",autocomplete:"off",placeholder:"quest description..."},null,512),[[a,e.description]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[11]||(t[11]=s=>e.updateDescription(s))}," Update description ")]),e.quest.status=="wip"?(n(),M(Q,{key:0},[i("p",null,[i("button",{class:"btn btn-sm btn-outline-danger w-100",onClick:t[12]||(t[12]=s=>e.dropQuest(s))}," Drop quest ")]),i("p",null,[i("button",{class:"btn btn-sm btn-outline-info w-100",onClick:t[13]||(t[13]=s=>e.resetQuestDeadline(s))}," Reset quest deadline ")]),i("p",V,[i("span",F,[l("Scheduled for completion: "),i("span",R,h(e.quest.queuedForCompletion?"true":"false"),1)]),i("button",{class:"btn btn-sm btn-outline-success col-sm-6 ms-3 w-25",onClick:t[14]||(t[14]=s=>e.scheduleQuestForCompletion(s))}," Toggle ")])],64)):d("",!0),i("p",S,[o(i("input",{"onUpdate:modelValue":t[15]||(t[15]=s=>e.duplicateQuestName=s),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"new quest name..."},null,512),[[a,e.duplicateQuestName]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[16]||(t[16]=s=>e.duplicateQuest(s))}," Duplicate quest ")]),i("p",B,[o(i("input",{"onUpdate:modelValue":t[17]||(t[17]=s=>e.expiration=s),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:e.quest.expiration},null,8,v),[[a,e.expiration]]),i("button",{class:"btn btn-sm btn-outline-info w-25",onClick:t[18]||(t[18]=s=>e.updateExpiration(s))}," Set expiration date ")]),i("p",null,[x(q,{modes:e.quest.modes,toggler:!0,onToggle:t[19]||(t[19]=s=>e.toggleQuestMode(s))},null,8,["modes"])]),e.quest.status=="done"||e.quest.status=="wip"?(n(),r(f,{key:1,class:"mb-4","associated-maps":e.quest.associatedMaps},null,8,["associated-maps"])):d("",!0),i("p",null,[i("button",{class:"btn btn-sm btn-outline-danger w-100",onClick:t[20]||(t[20]=s=>e.deleteQuest(s))}," Delete quest ")])])]),_:1})}const K=P(C,[["render",A]]);export{K as Q};

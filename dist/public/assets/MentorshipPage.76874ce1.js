var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,c=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&r(e,s,t[s]);if(n)for(var s of n(t))o.call(t,s)&&r(e,s,t[s]);return e},a=(e,n)=>t(e,s(n));import{d as i,m as d,L as u,i as m,o as p,b as h,f as y,F as f,g,j as C,s as I,q as v,O as b,P as M,G as D,t as w,e as $,l as U,n as k}from"./vendor.df51a6ea.js";var x={namespaced:!0,state:{admins:[],cycles:[],selectedCycleId:null,selectedUser:null},mutations:{setAdmins(e,t){e.admins=t},setCycles(e,t){e.cycles=t},removeAdmin(e,t){const s=e.admins.findIndex((e=>e.id==t));-1!==s&&e.admins.splice(s,1)},setSelectedCycleId(e,t){e.selectedCycleId=t},updateCycle(e,t){const s=e.cycles.findIndex((e=>e.id===t.id));-1!==s&&(e.cycles[s]=t)},setSelectedUser(e,t){e.selectedUser=t}},getters:{allAdmins:e=>e.admins,allCycles:e=>e.cycles,selectedCycle:e=>e.cycles.find((t=>t.id===e.selectedCycleId))}},S=i({name:"Administrators",components:{},data:()=>({userInput:null,confirmDelete:null}),computed:c(c({},d(["loggedInUser"])),u("mentorship",["allAdmins"])),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{async toggleIsMentorshipAdmin(e,t){const s=await this.$http.executePost("/mentorship/toggleIsMentorshipAdmin",{userInput:this.userInput,userId:t},e);if(!this.$http.isError(s))if(this.$store.dispatch("updateToastMessages",{message:""+(s.isMentorshipAdmin?"Added":"Removed"),type:"info"}),s.isMentorshipAdmin){const e=[...this.allAdmins];e.push(s),this.$store.commit("mentorship/setAdmins",e)}else this.$store.commit("mentorship/removeAdmin",t)}}});const A={class:"container card card-body py-3"},E=y("h5",null,"Mentorship Administrators",-1),N=y("div",{class:"text-secondary"}," Users with access to mentorship tools: ",-1),P=["onClick"],V=["onClick"],T={class:"input-group w-25"},L={class:"input-group-append"},O=[y("i",{class:"fas fa-plus fa-xs"},null,-1)];S.render=function(e,t,s,n,l,o){const r=m("user-link");return p(),h("div",null,[y("div",A,[E,N,y("ul",null,[(p(!0),h(f,null,g(e.allAdmins,(t=>(p(),h("li",{key:t.id},[C(r,{user:t},null,8,["user"]),e.confirmDelete!=t.id?(p(),h("a",{key:0,href:"#",class:"text-danger",onClick:I((s=>e.confirmDelete=t.id),["prevent"])}," delete ",8,P)):(p(),h("a",{key:1,class:"text-danger",href:"#",onClick:I((s=>e.toggleIsMentorshipAdmin(s,t.id)),["prevent"])}," confirm ",8,V))])))),128))]),y("div",T,[v(y("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.userInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"new admin username/osuId...",onKeyup:t[1]||(t[1]=M((t=>e.toggleIsMentorshipAdmin(t,null)),["enter"]))},null,544),[[b,e.userInput,void 0,{number:!0}]]),y("div",L,[y("button",{class:"btn btn-primary",href:"#",onClick:t[2]||(t[2]=I((t=>e.toggleIsMentorshipAdmin(t,null)),["prevent"]))},O)])])])])};var j=i({name:"Cycles",data:()=>({cycleNumberInput:null,cycleNameInput:null,cycleUrlInput:null,cycleStartInput:null,cycleEndInput:null,duplicateCycleId:""}),computed:c(c({},d(["loggedInUser"])),u("mentorship",["allCycles"])),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{async addCycle(e){if(confirm("Are you sure? Details cannot be changed after adding.")){const t=await this.$http.executePost("/mentorship/addCycle",{number:this.cycleNumberInput,name:this.cycleNameInput,url:this.cycleUrlInput,startDate:this.cycleStartInput,endDate:this.cycleEndInput,duplicateCycleId:this.duplicateCycleId},e);if(!this.$http.isError(t)){this.$store.dispatch("updateToastMessages",{message:`Added "${t.number} - ${t.name}"`,type:"info"});const e=[...this.allCycles];e.unshift(t),this.$store.commit("mentorship/setCycles",e)}}}}});const R={class:"container card card-body py-3 mb-2"},K=y("h5",null,"New cycle",-1),q=y("div",{class:"text-secondary"}," Add a new cycle based on input below. ",-1),G=y("div",{class:"text-secondary"}," To copy relationships from an existing cycle, select the cycle in the dropdown. ",-1),F={class:"row"},_={class:"col-sm-6 mb-2"},z=y("option",{value:"",selected:"",disabled:""}," Select a cycle to duplicate ",-1),B=["value"],H={class:"input-group mt-2"},J={class:"input-group-append"},Q=[y("i",{class:"fas fa-plus fa-xs"},null,-1)];j.render=function(e,t,s,n,l,o){return p(),h("div",null,[y("div",R,[K,q,G,y("div",F,[y("div",_,[v(y("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.duplicateCycleId=t),class:"form-select form-select d-inline"},[z,(p(!0),h(f,null,g(e.allCycles,(e=>(p(),h("option",{key:e.id,value:e.id},w(e.number)+" - "+w(e.name),9,B)))),128))],512),[[D,e.duplicateCycleId]])])]),y("div",H,[v(y("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.cycleNumberInput=t),class:"form-control form-control-sm",autocomplete:"off",type:"number",placeholder:"new cycle number..."},null,512),[[b,e.cycleNumberInput,void 0,{number:!0}]]),v(y("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.cycleNameInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"new cycle name..."},null,512),[[b,e.cycleNameInput,void 0,{number:!0}]]),v(y("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.cycleUrlInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"cycle details link..."},null,512),[[b,e.cycleUrlInput,void 0,{number:!0}]]),v(y("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.cycleStartInput=t),class:"form-control form-control-sm",type:"date"},null,512),[[b,e.cycleStartInput]]),v(y("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.cycleEndInput=t),class:"form-control form-control-sm",type:"date"},null,512),[[b,e.cycleEndInput]]),y("div",J,[y("button",{class:"btn btn-primary",href:"#",onClick:t[6]||(t[6]=I((t=>e.addCycle(t)),["prevent"]))},Q)])])])])};var W=i({name:"ParticipantList",props:{mode:{type:String,default:""}},data:()=>({mentorInput:null,menteeInput:null,editingMentorId:"",confirmDeleteMentor:"",confirmDeleteMentee:""}),computed:a(c(c({},d(["loggedInUser"])),u("mentorship",["selectedCycle"])),{modeMentors(){return this.selectedCycle.participants.filter((e=>{for(const t of e.mentorships)if(t.mode==this.mode&&"mentor"==t.group&&t.cycle.toString()==this.selectedCycle.id)return!0})).sort(((e,t)=>e.username.toLowerCase()>t.username.toLowerCase()?1:t.username.toLowerCase()>e.username.toLowerCase()?-1:0))},modeMentees(){return this.selectedCycle.participants.filter((e=>{for(const t of e.mentorships)if(t.mode==this.mode&&"mentee"==t.group&&t.cycle.toString()==this.selectedCycle.id)return!0})).sort(((e,t)=>e.username.toLowerCase()>t.username.toLowerCase()?1:t.username.toLowerCase()>e.username.toLowerCase()?-1:0))},title(){return"modding"==this.mode||"graduation"==this.mode?this.mode:"osu"==this.mode?"osu!":"osu!"+this.mode}}),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{findMentees(e){return this.modeMentees.filter((t=>{for(const s of t.mentorships)if("mentee"==s.group&&s.mentor.toString()==e&&s.cycle.toString()==this.selectedCycle.id)return!0}))},async addMentor(e){const t=await this.$http.executePost("/mentorship/addMentor",{cycleId:this.selectedCycle.id,userInput:this.mentorInput,mode:this.mode},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:`Added "${this.mentorInput}"`,type:"info"}),this.$store.commit("mentorship/updateCycle",t),this.mentorInput=null)},async addMentee(e,t){const s=await this.$http.executePost("/mentorship/addMentee",{cycleId:this.selectedCycle.id,userInput:this.menteeInput,mode:this.mode,mentorId:t},e);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:`Added "${this.menteeInput}"`,type:"info"}),this.$store.commit("mentorship/updateCycle",s),this.menteeInput=null,this.editingMentorId="")},async removeParticipant(e,t){const s=await this.$http.executePost("/mentorship/removeParticipant",{cycleId:this.selectedCycle.id,userId:t,mode:this.mode},e);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"Removed user",type:"info"}),this.$store.commit("mentorship/updateCycle",s),this.confirmDeleteMentee="",this.confirmDeleteMentor="")}}});const X={class:"col-sm-3"},Y=["onClick"],Z=[y("i",{class:"fas fa-plus"},null,-1)],ee={key:0},te=["onClick"],se=[y("i",{class:"fas fa-minus"},null,-1)],ne=["onClick"],le=["onClick"],oe=[y("i",{class:"fas fa-minus"},null,-1)],re=["onClick"],ce={key:1,class:"input-group"},ae=["onKeyup"],ie={class:"input-group-append"},de=["onClick"],ue=[y("i",{class:"fas fa-plus fa-xs"},null,-1)],me={class:"input-group mb-3"},pe={class:"input-group-append"},he=[y("i",{class:"fas fa-plus fa-xs"},null,-1)];W.render=function(e,t,s,n,l,o){const r=m("user-link");return p(),h("div",X,[y("h5",null,w(e.title),1),y("ol",null,[(p(!0),h(f,null,g(e.modeMentors,(s=>(p(),h("li",{key:s.id+e.mode},[C(r,{user:s},null,8,["user"]),y("a",{href:"#",class:"text-success ms-1 small",onClick:I((t=>e.editingMentorId=s.id),["prevent"])},Z,8,Y),e.findMentees(s.id).length?$("",!0):(p(),h("span",ee,[e.confirmDeleteMentor!=s.id?(p(),h("a",{key:0,href:"#",class:"text-danger ms-1 small",onClick:I((t=>e.confirmDeleteMentor=s.id),["prevent"])},se,8,te)):(p(),h("a",{key:1,class:"text-danger",href:"#",onClick:I((t=>e.removeParticipant(t,s.id)),["prevent"])}," confirm ",8,ne))])),y("ul",null,[(p(!0),h(f,null,g(e.findMentees(s.id),(t=>(p(),h("li",{key:t.id+e.mode,class:"small"},[C(r,{user:t},null,8,["user"]),e.confirmDeleteMentee!=t.id?(p(),h("a",{key:0,href:"#",class:"text-danger ms-1 small",onClick:I((s=>e.confirmDeleteMentee=t.id),["prevent"])},oe,8,le)):(p(),h("a",{key:1,class:"text-danger",href:"#",onClick:I((s=>e.removeParticipant(s,t.id)),["prevent"])}," confirm ",8,re))])))),128))]),e.editingMentorId==s.id?(p(),h("div",ce,[v(y("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.menteeInput=t),class:"form-control form-control-sm ms-2",autocomplete:"off",placeholder:"new mentee username/osuId...",onKeyup:M((t=>e.addMentee(t,s.id)),["enter"])},null,40,ae),[[b,e.menteeInput]]),y("div",ie,[y("button",{class:"btn btn-primary",href:"#",onClick:I((t=>e.addMentee(t,s.id)),["prevent"])},ue,8,de)])])):$("",!0)])))),128))]),y("div",me,[v(y("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.mentorInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"new mentor username/osuId...",onKeyup:t[2]||(t[2]=M((t=>e.addMentor(t)),["enter"]))},null,544),[[b,e.mentorInput]]),y("div",pe,[y("button",{class:"btn btn-primary",href:"#",onClick:t[3]||(t[3]=I((t=>e.addMentor(t)),["prevent"]))},he)])])])};var ye=i({name:"Participants",components:{ParticipantList:W},data:()=>({cycleId:"",showCycleInputs:!1,cycleNameInput:null,cycleNumberInput:null,cycleUrlInput:null,cycleStartDateInput:new Date,cycleEndDateInput:new Date}),computed:c(c({},d(["loggedInUser"])),u("mentorship",["allCycles","selectedCycle"])),watch:{cycleId(){this.$store.commit("mentorship/setSelectedCycleId",this.cycleId),this.cycleNameInput=this.selectedCycle.name,this.cycleNumberInput=this.selectedCycle.number,this.cycleUrlInput=this.selectedCycle.url,this.cycleStartDateInput=new Date(this.selectedCycle.startDate),this.cycleEndDateInput=new Date(this.selectedCycle.endDate)}},beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{async updateCycleName(e){const t=await this.$http.executePost("/mentorship/updateCycleName",{cycleId:this.selectedCycle.id,name:this.cycleNameInput},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"Updated cycle name",type:"info"}),this.$store.commit("mentorship/updateCycle",t))},async updateCycleNumber(e){const t=await this.$http.executePost("/mentorship/updateCycleNumber",{cycleId:this.selectedCycle.id,number:this.cycleNumberInput},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"Updated cycle number",type:"info"}),this.$store.commit("mentorship/updateCycle",t))},async updateCycleUrl(e){const t=await this.$http.executePost("/mentorship/updateCycleUrl",{cycleId:this.selectedCycle.id,url:this.cycleUrlInput},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"Updated cycle url",type:"info"}),this.$store.commit("mentorship/updateCycle",t))},async updateCycleStartDate(e){console.log(this.cycleStartDateInput);const t=await this.$http.executePost("/mentorship/updateCycleStartDate",{cycleId:this.selectedCycle.id,startDate:this.cycleStartDateInput},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"Updated cycle start date",type:"info"}),this.$store.commit("mentorship/updateCycle",t))},async updateCycleEndDate(e){const t=await this.$http.executePost("/mentorship/updateCycleEndDate",{cycleId:this.selectedCycle.id,endDate:this.cycleEndDateInput},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:"Updated cycle end date",type:"info"}),this.$store.commit("mentorship/updateCycle",t))}}});const fe={class:"container card card-body py-3 mb-2"},ge={class:"row"},Ce={class:"col-sm-6 mb-2"},Ie=y("option",{value:"",selected:"",disabled:""}," Select a cycle ",-1),ve=["value"],be={key:0},Me=y("hr",null,null,-1),De={key:0,class:"mb-4"},we={class:"row"},$e=y("div",{class:"col-sm-2"}," Cycle name: ",-1),Ue={class:"col-sm-4 mb-2"},ke={class:"input-group"},xe={class:"input-group-append"},Se={class:"row"},Ae=y("div",{class:"col-sm-2"}," Cycle number: ",-1),Ee={class:"col-sm-4 mb-2"},Ne={class:"input-group"},Pe={class:"input-group-append"},Ve={class:"row"},Te=y("div",{class:"col-sm-2"}," Cycle url: ",-1),Le={class:"col-sm-4 mb-2"},Oe={class:"input-group"},je={class:"input-group-append"},Re={class:"row"},Ke=y("div",{class:"col-sm-2"}," Cycle start date: ",-1),qe={class:"col-sm-4 mb-2"},Ge={class:"input-group"},Fe={class:"input-group-append"},_e={class:"row"},ze=y("div",{class:"col-sm-2"}," Cycle end date: ",-1),Be={class:"col-sm-4 mb-2"},He={class:"input-group"},Je={class:"input-group-append"},Qe={key:1},We={key:0,class:"fas fa-edit"},Xe={class:"text-secondary small"},Ye={class:"row"};ye.render=function(e,t,s,n,l,o){const r=m("participant-list");return p(),h("div",null,[y("div",fe,[y("div",ge,[y("div",Ce,[v(y("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.cycleId=t),class:"form-select form-select d-inline"},[Ie,(p(!0),h(f,null,g(e.allCycles,(e=>(p(),h("option",{key:e.id,value:e.id},w(e.number)+" - "+w(e.name),9,ve)))),128))],512),[[D,e.cycleId]])])]),e.selectedCycle?(p(),h("div",be,[Me,e.showCycleInputs?(p(),h("div",De,[y("div",we,[$e,y("div",Ue,[y("div",ke,[v(y("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.cycleNameInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"cycle name..."},null,512),[[b,e.cycleNameInput]]),y("div",xe,[y("button",{class:"btn btn-primary",href:"#",onClick:t[2]||(t[2]=I((t=>e.updateCycleName(t)),["prevent"]))}," save ")])])])]),y("div",Se,[Ae,y("div",Ee,[y("div",Ne,[v(y("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.cycleNumberInput=t),class:"form-control form-control-sm",autocomplete:"off",type:"number",placeholder:"cycle number..."},null,512),[[b,e.cycleNumberInput,void 0,{number:!0}]]),y("div",Pe,[y("button",{class:"btn btn-primary",href:"#",onClick:t[4]||(t[4]=I((t=>e.updateCycleNumber(t)),["prevent"]))}," save ")])])])]),y("div",Ve,[Te,y("div",Le,[y("div",Oe,[v(y("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.cycleUrlInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"cycle url..."},null,512),[[b,e.cycleUrlInput]]),y("div",je,[y("button",{class:"btn btn-primary",href:"#",onClick:t[6]||(t[6]=I((t=>e.updateCycleUrl(t)),["prevent"]))}," save ")])])])]),y("div",Re,[Ke,y("div",qe,[y("div",Ge,[v(y("input",{"onUpdate:modelValue":t[7]||(t[7]=t=>e.cycleStartDateInput=t),class:"form-control form-control-sm",type:"date",placeholder:"cycle start date..."},null,512),[[b,e.cycleStartDateInput]]),y("div",Fe,[y("button",{class:"btn btn-primary",href:"#",onClick:t[8]||(t[8]=I((t=>e.updateCycleStartDate(t)),["prevent"]))}," save ")])])])]),y("div",_e,[ze,y("div",Be,[y("div",He,[v(y("input",{"onUpdate:modelValue":t[9]||(t[9]=t=>e.cycleEndDateInput=t),class:"form-control form-control-sm",type:"date",placeholder:"cycle end date..."},null,512),[[b,e.cycleEndDateInput]]),y("div",Je,[y("button",{class:"btn btn-primary",href:"#",onClick:t[10]||(t[10]=I((t=>e.updateCycleEndDate(t)),["prevent"]))}," save ")])])])]),y("a",{href:"#",onClick:t[11]||(t[11]=I((t=>e.showCycleInputs=!e.showCycleInputs),["prevent"]))}," stop editing (close without saving) ")])):(p(),h("h4",Qe,[U(w(e.selectedCycle.name)+" ",1),y("a",{href:"#",onClick:t[12]||(t[12]=I((t=>e.showCycleInputs=!e.showCycleInputs),["prevent"]))},[U(w(e.showCycleInputs?"close":"")+" ",1),e.showCycleInputs?$("",!0):(p(),h("i",We))])])),y("h5",Xe,w(e.selectedCycle.startDate.slice(0,10))+" - "+w(e.selectedCycle.endDate.slice(0,10)),1),y("div",null,[y("div",Ye,[C(r,{mode:"osu"}),C(r,{mode:"taiko"}),C(r,{mode:"catch"}),C(r,{mode:"mania"}),C(r,{mode:"modding"}),C(r,{mode:"graduation"})])])])):$("",!0)])])};var Ze=i({name:"CycleList",props:{mode:{type:String,default:""},group:{type:String,default:""}},computed:a(c({},d("mentorship",["selectedUser"])),{modeMentorships(){return this.selectedUser.mentorships?this.selectedUser.mentorships.filter((e=>{if(e.group==this.group&&e.mode==this.mode)return!0})):[]},modeDuration(){return this.calculateDuration(this.modeMentorships)},title(){return"modding"==this.mode||"graduation"==this.mode?this.mode:"osu"==this.mode?"osu!":"osu!"+this.mode}}),methods:{calculateDuration(e){let t=0;for(const s of e)if(new Date>new Date(s.cycle.endDate)){t+=(new Date(s.cycle.endDate).getTime()-new Date(s.cycle.startDate).getTime())/864e5}return t},findRelevantMentees(e){return this.selectedUser.mentees.filter((t=>{for(const s of t.mentorships)if(s.cycle.toString()==e&&"mentee"==s.group&&s.mode==this.mode)return!0}))}}});const et={class:"col-sm-3"},tt={class:"text-center"},st=["href"],nt={class:"small text-secondary"},lt={key:0},ot={class:"small text-secondary"},rt=U(" mentored by "),ct={key:1},at=U(" mentor of ");Ze.render=function(e,t,s,n,l,o){const r=m("user-link");return p(),h("div",et,[y("div",tt,[y("b",{class:k(e.modeMentorships.length>=4&&"mentee"==e.group?"text-danger":"")},w(e.title)+" "+w(e.group)+" cycles ("+w(e.modeMentorships.length)+")",3)]),y("ul",null,[(p(!0),h(f,null,g(e.modeMentorships,(t=>(p(),h("li",{key:t.id+e.mode},[y("a",{href:t.cycle.url,target:"_blank"},w(t.cycle.number)+": "+w(t.cycle.name),9,st),y("span",nt," ("+w(e.calculateDuration([t]))+" days) ",1),t.mentor?(p(),h("ul",lt,[y("li",ot,[rt,C(r,{user:t.mentor},null,8,["user"])])])):$("",!0),"mentor"==e.group&&e.findRelevantMentees(t.cycle.id).length?(p(),h("ul",ct,[(p(!0),h(f,null,g(e.findRelevantMentees(t.cycle.id),(s=>(p(),h("li",{key:s.id+e.mode+t.cycle.id,class:"small text-secondary"},[at,C(r,{user:s},null,8,["user"])])))),128))])):$("",!0)])))),128))])])};var it=i({name:"UserDetails",components:{CycleList:Ze},data:()=>({userInput:""}),computed:a(c({},d("mentorship",["selectedUser"])),{totalMentorDuration(){const e=this.selectedUser.mentorships.filter((e=>{if("mentor"==e.group)return!0})).reduce(((e,t)=>(e.some((e=>e.cycle.id===t.cycle.id))||e.push(t),e)),[]);return this.calculateDuration(e)},totalMenteeDuration(){const e=this.selectedUser.mentorships.filter((e=>{if("mentee"==e.group)return!0})).reduce(((e,t)=>(e.some((e=>e.cycle.id===t.cycle.id))||e.push(t),e)),[]);return this.calculateDuration(e)}}),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{async searchUser(e){const t=await this.$http.executeGet("/mentorship/searchUser/"+this.userInput,e);this.$http.isError(t)||this.$store.commit("mentorship/setSelectedUser",t)},calculateDuration(e){let t=0;for(const s of e)if(new Date>new Date(s.cycle.endDate)){t+=(new Date(s.cycle.endDate).getTime()-new Date(s.cycle.startDate).getTime())/864e5}return t}}});const dt={class:"container card card-body py-3"},ut=y("h5",null,"User Details",-1),mt=y("div",{class:"text-secondary mb-2"}," View a user's mentorship history ",-1),pt={class:"input-group w-25"},ht={class:"input-group-append"},yt=[y("i",{class:"fas fa-search fa-xs"},null,-1)],ft={key:0},gt={class:"mt-2"},Ct=U(" Mentor for "),It=U(" across all cycles and game modes "),vt={class:"row mt-2"},bt=U(" Mentee for "),Mt=U(" across all cycles and game modes "),Dt={class:"row mt-2"};it.render=function(e,t,s,n,l,o){const r=m("cycle-list");return p(),h("div",null,[y("div",dt,[ut,mt,y("div",pt,[v(y("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.userInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"username/osuId...",onKeyup:t[1]||(t[1]=M((t=>e.searchUser(t)),["enter"]))},null,544),[[b,e.userInput]]),y("div",ht,[y("button",{class:"btn btn-primary",href:"#",onClick:t[2]||(t[2]=I((t=>e.searchUser(t)),["prevent"]))},yt)])]),e.selectedUser?(p(),h("div",ft,[y("div",gt,[Ct,y("b",null,w(e.totalMentorDuration)+" days",1),It]),y("div",vt,[C(r,{mode:"osu",group:"mentor"}),C(r,{mode:"taiko",group:"mentor"}),C(r,{mode:"catch",group:"mentor"}),C(r,{mode:"mania",group:"mentor"}),C(r,{mode:"modding",group:"mentor"}),C(r,{mode:"graduation",group:"mentor"})]),y("div",null,[bt,y("b",null,w(e.totalMenteeDuration)+" days",1),Mt]),y("div",Dt,[C(r,{mode:"osu",group:"mentee"}),C(r,{mode:"taiko",group:"mentee"}),C(r,{mode:"catch",group:"mentee"}),C(r,{mode:"mania",group:"mentee"}),C(r,{mode:"modding",group:"mentee"}),C(r,{mode:"graduation",group:"mentee"})])])):$("",!0)])])};var wt=i({name:"MentorshipPage",components:{Administrators:S,Cycles:j,Participants:ye,UserDetails:it},data:()=>({userInput:null,confirmDelete:null}),computed:c(c({},d(["loggedInUser"])),u("mentorship",["allCycles"])),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},async created(){const e=await this.$http.initialRequest("/mentorship/query");this.$http.isError(e)||(this.$store.commit("mentorship/setAdmins",e.admins),this.$store.commit("mentorship/setCycles",e.cycles))},methods:{}});const $t=y("hr",null,null,-1);wt.render=function(e,t,s,n,l,o){const r=m("participants"),c=m("user-details"),a=m("cycles"),i=m("administrators");return p(),h("div",null,[C(r),C(c),$t,C(a),C(i)])};export{wt as default};
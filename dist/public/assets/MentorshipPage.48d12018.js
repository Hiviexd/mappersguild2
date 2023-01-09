var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,i=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&l(e,s,t[s]);if(n)for(var s of n(t))r.call(t,s)&&l(e,s,t[s]);return e},a=(e,n)=>t(e,s(n));import{d as c,m as d,L as u,i as m,o as p,b as h,f as y,F as f,g,j as I,s as C,q as v,O as M,P as b,t as k,e as D,G as $,l as w,n as U}from"./vendor.df51a6ea.js";var x={namespaced:!0,state:{admins:[],cycles:[],selectedCycleId:null,selectedUser:null},mutations:{setAdmins(e,t){e.admins=t},setCycles(e,t){e.cycles=t},removeAdmin(e,t){const s=e.admins.findIndex((e=>e.id==t));-1!==s&&e.admins.splice(s,1)},setSelectedCycleId(e,t){e.selectedCycleId=t},updateCycle(e,t){const s=e.cycles.findIndex((e=>e.id===t.id));-1!==s&&(e.cycles[s]=t)},setSelectedUser(e,t){e.selectedUser=t}},getters:{allAdmins:e=>e.admins,allCycles:e=>e.cycles,selectedCycle:e=>e.cycles.find((t=>t.id===e.selectedCycleId))}},A=c({name:"Administrators",components:{},data:()=>({userInput:null,confirmDelete:null}),computed:i(i({},d(["loggedInUser"])),u("mentorship",["allAdmins"])),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{async toggleIsMentorshipAdmin(e,t){const s=await this.$http.executePost("/mentorship/toggleIsMentorshipAdmin",{userInput:this.userInput,userId:t},e);if(!this.$http.isError(s))if(this.$store.dispatch("updateToastMessages",{message:""+(s.isMentorshipAdmin?"Added":"Removed"),type:"info"}),s.isMentorshipAdmin){const e=[...this.allAdmins];e.push(s),this.$store.commit("mentorship/setAdmins",e)}else this.$store.commit("mentorship/removeAdmin",t)}}});const P={class:"container card card-body py-3"},S=y("h5",null,"Mentorship Administrators",-1),L=y("div",{class:"text-secondary"}," Users with access to mentorship tools: ",-1),E=["onClick"],K=["onClick"],O={class:"input-group w-25"},V={class:"input-group-append"},T=[y("i",{class:"fas fa-plus fa-xs"},null,-1)];A.render=function(e,t,s,n,o,r){const l=m("user-link");return p(),h("div",null,[y("div",P,[S,L,y("ul",null,[(p(!0),h(f,null,g(e.allAdmins,(t=>(p(),h("li",{key:t.id},[I(l,{user:t},null,8,["user"]),e.confirmDelete!=t.id?(p(),h("a",{key:0,href:"#",class:"text-danger",onClick:C((s=>e.confirmDelete=t.id),["prevent"])}," delete ",8,E)):(p(),h("a",{key:1,class:"text-danger",href:"#",onClick:C((s=>e.toggleIsMentorshipAdmin(s,t.id)),["prevent"])}," confirm ",8,K))])))),128))]),y("div",O,[v(y("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.userInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"new admin username/osuId...",onKeyup:t[1]||(t[1]=b((t=>e.toggleIsMentorshipAdmin(t,null)),["enter"]))},null,544),[[M,e.userInput,void 0,{number:!0}]]),y("div",V,[y("button",{class:"btn btn-primary",href:"#",onClick:t[2]||(t[2]=C((t=>e.toggleIsMentorshipAdmin(t,null)),["prevent"]))},T)])])])])};var j=c({name:"MentorshipPage",data:()=>({cycleNumberInput:null,cycleNameInput:null,cycleUrlInput:null,cycleStartInput:null,cycleEndInput:null}),computed:i(i({},d(["loggedInUser"])),u("mentorship",["allCycles"])),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{async addCycle(e){if(confirm("Are you sure? Details cannot be changed after adding.")){const t=await this.$http.executePost("/mentorship/addCycle",{number:this.cycleNumberInput,name:this.cycleNameInput,url:this.cycleUrlInput,startDate:this.cycleStartInput,endDate:this.cycleEndInput},e);if(!this.$http.isError(t)){this.$store.dispatch("updateToastMessages",{message:`Added "${t.number} - ${t.name}"`,type:"info"});const e=[...this.allCycles];e.unshift(t),this.$store.commit("mentorship/setCycles",e)}}}}});const N={class:"container card card-body py-3 mb-2"},R=y("h5",null,"Add cycle",-1),q={class:"input-group"},G={class:"input-group-append"},F=[y("i",{class:"fas fa-plus fa-xs"},null,-1)];j.render=function(e,t,s,n,o,r){return p(),h("div",null,[y("div",N,[R,y("div",q,[v(y("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.cycleNumberInput=t),class:"form-control form-control-sm",autocomplete:"off",type:"number",placeholder:"new cycle number...",onKeyup:t[1]||(t[1]=b((t=>e.addCycle(t)),["enter"]))},null,544),[[M,e.cycleNumberInput,void 0,{number:!0}]]),v(y("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.cycleNameInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"new cycle name...",onKeyup:t[3]||(t[3]=b((t=>e.addCycle(t)),["enter"]))},null,544),[[M,e.cycleNameInput,void 0,{number:!0}]]),v(y("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.cycleUrlInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"cycle details link...",onKeyup:t[5]||(t[5]=b((t=>e.addCycle(t)),["enter"]))},null,544),[[M,e.cycleUrlInput,void 0,{number:!0}]]),v(y("input",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.cycleStartInput=t),class:"form-control form-control-sm",type:"date",onKeyup:t[7]||(t[7]=b((t=>e.addCycle(t)),["enter"]))},null,544),[[M,e.cycleStartInput]]),v(y("input",{"onUpdate:modelValue":t[8]||(t[8]=t=>e.cycleEndInput=t),class:"form-control form-control-sm",type:"date",onKeyup:t[9]||(t[9]=b((t=>e.addCycle(t)),["enter"]))},null,544),[[M,e.cycleEndInput]]),y("div",G,[y("button",{class:"btn btn-primary",href:"#",onClick:t[10]||(t[10]=C((t=>e.addCycle(t)),["prevent"]))},F)])])])])};var _=c({name:"ParticipantList",props:{mode:{type:String,default:""}},data:()=>({mentorInput:null,menteeInput:null,editingMentorId:"",confirmDeleteMentor:"",confirmDeleteMentee:""}),computed:a(i(i({},d(["loggedInUser"])),u("mentorship",["selectedCycle"])),{modeMentors(){return this.selectedCycle.participants.filter((e=>{for(const t of e.mentorships)if(t.mode==this.mode&&"mentor"==t.group&&t.cycle.toString()==this.selectedCycle.id)return!0})).sort(((e,t)=>e.username.toLowerCase()>t.username.toLowerCase()?1:t.username.toLowerCase()>e.username.toLowerCase()?-1:0))},modeMentees(){return this.selectedCycle.participants.filter((e=>{for(const t of e.mentorships)if(t.mode==this.mode&&"mentee"==t.group&&t.cycle.toString()==this.selectedCycle.id)return!0})).sort(((e,t)=>e.username.toLowerCase()>t.username.toLowerCase()?1:t.username.toLowerCase()>e.username.toLowerCase()?-1:0))},title(){return"modding"==this.mode||"graduation"==this.mode?this.mode:"osu"==this.mode?"osu!":"osu!"+this.mode}}),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{findMentees(e){return this.modeMentees.filter((t=>{for(const s of t.mentorships)if("mentee"==s.group&&s.mentor.toString()==e)return!0}))},async addMentor(e){const t=await this.$http.executePost("/mentorship/addMentor",{cycleId:this.selectedCycle.id,userInput:this.mentorInput,mode:this.mode},e);this.$http.isError(t)||(this.$store.dispatch("updateToastMessages",{message:`Added "${this.mentorInput}"`,type:"info"}),this.$store.commit("mentorship/updateCycle",t),this.mentorInput=null)},async addMentee(e,t){const s=await this.$http.executePost("/mentorship/addMentee",{cycleId:this.selectedCycle.id,userInput:this.menteeInput,mode:this.mode,mentorId:t},e);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:`Added "${this.menteeInput}"`,type:"info"}),this.$store.commit("mentorship/updateCycle",s),this.menteeInput=null,this.editingMentorId="")},async removeParticipant(e,t){const s=await this.$http.executePost("/mentorship/removeParticipant",{cycleId:this.selectedCycle.id,userId:t,mode:this.mode},e);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"Removed user",type:"info"}),this.$store.commit("mentorship/updateCycle",s),this.confirmDeleteMentee="",this.confirmDeleteMentor="")}}});const z={class:"col-sm-3"},B=["onClick"],H=[y("i",{class:"fas fa-plus"},null,-1)],J={key:0},Q=["onClick"],W=[y("i",{class:"fas fa-minus"},null,-1)],X=["onClick"],Y=["onClick"],Z=[y("i",{class:"fas fa-minus"},null,-1)],ee=["onClick"],te={key:1,class:"input-group"},se=["onKeyup"],ne={class:"input-group-append"},oe=["onClick"],re=[y("i",{class:"fas fa-plus fa-xs"},null,-1)],le={class:"input-group mb-3"},ie={class:"input-group-append"},ae=[y("i",{class:"fas fa-plus fa-xs"},null,-1)];_.render=function(e,t,s,n,o,r){const l=m("user-link");return p(),h("div",z,[y("h5",null,k(e.title),1),y("ol",null,[(p(!0),h(f,null,g(e.modeMentors,(s=>(p(),h("li",{key:s.id+e.mode},[I(l,{user:s},null,8,["user"]),y("a",{href:"#",class:"text-success ms-1 small",onClick:C((t=>e.editingMentorId=s.id),["prevent"])},H,8,B),e.findMentees(s.id).length?D("",!0):(p(),h("span",J,[e.confirmDeleteMentor!=s.id?(p(),h("a",{key:0,href:"#",class:"text-danger ms-1 small",onClick:C((t=>e.confirmDeleteMentor=s.id),["prevent"])},W,8,Q)):(p(),h("a",{key:1,class:"text-danger",href:"#",onClick:C((t=>e.removeParticipant(t,s.id)),["prevent"])}," confirm ",8,X))])),y("ul",null,[(p(!0),h(f,null,g(e.findMentees(s.id),(t=>(p(),h("li",{key:t.id+e.mode,class:"small"},[I(l,{user:t},null,8,["user"]),e.confirmDeleteMentee!=t.id?(p(),h("a",{key:0,href:"#",class:"text-danger ms-1 small",onClick:C((s=>e.confirmDeleteMentee=t.id),["prevent"])},Z,8,Y)):(p(),h("a",{key:1,class:"text-danger",href:"#",onClick:C((s=>e.removeParticipant(s,t.id)),["prevent"])}," confirm ",8,ee))])))),128))]),e.editingMentorId==s.id?(p(),h("div",te,[v(y("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.menteeInput=t),class:"form-control form-control-sm ms-2",autocomplete:"off",placeholder:"new mentee username/osuId...",onKeyup:b((t=>e.addMentee(t,s.id)),["enter"])},null,40,se),[[M,e.menteeInput]]),y("div",ne,[y("button",{class:"btn btn-primary",href:"#",onClick:C((t=>e.addMentee(t,s.id)),["prevent"])},re,8,oe)])])):D("",!0)])))),128))]),y("div",le,[v(y("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.mentorInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"new mentor username/osuId...",onKeyup:t[2]||(t[2]=b((t=>e.addMentor(t)),["enter"]))},null,544),[[M,e.mentorInput]]),y("div",ie,[y("button",{class:"btn btn-primary",href:"#",onClick:t[3]||(t[3]=C((t=>e.addMentor(t)),["prevent"]))},ae)])])])};var ce=c({name:"Participants",components:{ParticipantList:_},data:()=>({cycleId:""}),computed:i(i({},d(["loggedInUser"])),u("mentorship",["allCycles","selectedCycle"])),watch:{cycleId(){this.$store.commit("mentorship/setSelectedCycleId",this.cycleId)}},beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)}});const de={class:"container card card-body py-3 mb-2"},ue={class:"row"},me={class:"col-sm-6 mb-2"},pe=y("option",{value:"",selected:"",disabled:""}," Select a cycle ",-1),he=["value"],ye={key:0},fe=y("hr",null,null,-1),ge={class:"small text-secondary"},Ie={class:"row"};ce.render=function(e,t,s,n,o,r){const l=m("participant-list");return p(),h("div",null,[y("div",de,[y("div",ue,[y("div",me,[v(y("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.cycleId=t),class:"form-select form-select d-inline"},[pe,(p(!0),h(f,null,g(e.allCycles,(e=>(p(),h("option",{key:e.id,value:e.id},k(e.number)+" - "+k(e.name),9,he)))),128))],512),[[$,e.cycleId]])])]),e.selectedCycle?(p(),h("div",ye,[fe,y("h4",null,[w(k(e.selectedCycle.name)+" ",1),y("div",ge,k(e.selectedCycle.startDate.slice(0,10))+" - "+k(e.selectedCycle.endDate.slice(0,10)),1)]),y("div",null,[y("div",Ie,[I(l,{mode:"osu"}),I(l,{mode:"taiko"}),I(l,{mode:"catch"}),I(l,{mode:"mania"}),I(l,{mode:"modding"}),I(l,{mode:"graduation"})])])])):D("",!0)])])};var Ce=c({name:"CycleList",props:{mode:{type:String,default:""},group:{type:String,default:""}},computed:a(i({},d("mentorship",["selectedUser"])),{modeMentorships(){return this.selectedUser.mentorships?this.selectedUser.mentorships.filter((e=>{if(e.group==this.group&&e.mode==this.mode)return!0})):[]},modeDuration(){return this.calculateDuration(this.modeMentorships)},title(){return"modding"==this.mode||"graduation"==this.mode?this.mode:"osu"==this.mode?"osu!":"osu!"+this.mode}}),methods:{calculateDuration(e){let t=0;for(const s of e)if(new Date>new Date(s.cycle.endDate)){t+=(new Date(s.cycle.endDate).getTime()-new Date(s.cycle.startDate).getTime())/864e5}return t},findRelevantMentees(e){return this.selectedUser.mentees.filter((t=>{for(const s of t.mentorships)if(s.cycle.toString()==e&&"mentee"==s.group&&s.mode==this.mode)return!0}))}}});const ve={class:"col-sm-3"},Me={class:"text-center"},be=["href"],ke={class:"small text-secondary"},De={key:0},$e={class:"small text-secondary"},we=w(" mentored by "),Ue={key:1},xe=w(" mentor of ");Ce.render=function(e,t,s,n,o,r){const l=m("user-link");return p(),h("div",ve,[y("div",Me,[y("b",{class:U(e.modeMentorships.length>=4&&"mentee"==e.group?"text-danger":"")},k(e.title)+" "+k(e.group)+" cycles ("+k(e.modeMentorships.length)+")",3)]),y("ul",null,[(p(!0),h(f,null,g(e.modeMentorships,(t=>(p(),h("li",{key:t.id+e.mode},[y("a",{href:t.cycle.url,target:"_blank"},k(t.cycle.number)+": "+k(t.cycle.name),9,be),y("span",ke," ("+k(e.calculateDuration([t]))+" days) ",1),t.mentor?(p(),h("ul",De,[y("li",$e,[we,I(l,{user:t.mentor},null,8,["user"])])])):D("",!0),"mentor"==e.group&&e.findRelevantMentees(t.cycle.id).length?(p(),h("ul",Ue,[(p(!0),h(f,null,g(e.findRelevantMentees(t.cycle.id),(s=>(p(),h("li",{key:s.id+e.mode+t.cycle.id,class:"small text-secondary"},[xe,I(l,{user:s},null,8,["user"])])))),128))])):D("",!0)])))),128))])])};var Ae=c({name:"UserDetails",components:{CycleList:Ce},data:()=>({userInput:""}),computed:a(i({},d("mentorship",["selectedUser"])),{totalMentorDuration(){const e=this.selectedUser.mentorships.filter((e=>{if("mentor"==e.group)return!0})).reduce(((e,t)=>(e.some((e=>e.cycle.id===t.cycle.id))||e.push(t),e)),[]);return this.calculateDuration(e)},totalMenteeDuration(){const e=this.selectedUser.mentorships.filter((e=>{if("mentee"==e.group)return!0})).reduce(((e,t)=>(e.some((e=>e.cycle.id===t.cycle.id))||e.push(t),e)),[]);return this.calculateDuration(e)}}),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},methods:{async searchUser(e){const t=await this.$http.executeGet("/mentorship/searchUser/"+this.userInput,e);this.$http.isError(t)||this.$store.commit("mentorship/setSelectedUser",t)},calculateDuration(e){let t=0;for(const s of e)if(new Date>new Date(s.cycle.endDate)){t+=(new Date(s.cycle.endDate).getTime()-new Date(s.cycle.startDate).getTime())/864e5}return t}}});const Pe={class:"container card card-body py-3"},Se=y("h5",null,"User Details",-1),Le={class:"input-group w-25"},Ee={class:"input-group-append"},Ke=[y("i",{class:"fas fa-search fa-xs"},null,-1)],Oe={key:0},Ve={class:"mt-2"},Te=w(" Mentor for "),je=w(" across all cycles and game modes "),Ne={class:"row mt-2"},Re=w(" Mentee for "),qe=w(" across all cycles and game modes "),Ge={class:"row mt-2"};Ae.render=function(e,t,s,n,o,r){const l=m("cycle-list");return p(),h("div",null,[y("div",Pe,[Se,y("div",Le,[v(y("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.userInput=t),class:"form-control form-control-sm",autocomplete:"off",placeholder:"username/osuId...",onKeyup:t[1]||(t[1]=b((t=>e.searchUser(t)),["enter"]))},null,544),[[M,e.userInput]]),y("div",Ee,[y("button",{class:"btn btn-primary",href:"#",onClick:t[2]||(t[2]=C((t=>e.searchUser(t)),["prevent"]))},Ke)])]),e.selectedUser?(p(),h("div",Oe,[y("div",Ve,[Te,y("b",null,k(e.totalMentorDuration)+" days",1),je]),y("div",Ne,[I(l,{mode:"osu",group:"mentor"}),I(l,{mode:"taiko",group:"mentor"}),I(l,{mode:"catch",group:"mentor"}),I(l,{mode:"mania",group:"mentor"}),I(l,{mode:"modding",group:"mentor"}),I(l,{mode:"graduation",group:"mentor"})]),y("div",null,[Re,y("b",null,k(e.totalMenteeDuration)+" days",1),qe]),y("div",Ge,[I(l,{mode:"osu",group:"mentee"}),I(l,{mode:"taiko",group:"mentee"}),I(l,{mode:"catch",group:"mentee"}),I(l,{mode:"mania",group:"mentee"}),I(l,{mode:"modding",group:"mentee"}),I(l,{mode:"graduation",group:"mentee"})])])):D("",!0)])])};var Fe=c({name:"MentorshipPage",components:{Administrators:A,Cycles:j,Participants:ce,UserDetails:Ae},data:()=>({userInput:null,confirmDelete:null}),computed:i(i({},d(["loggedInUser"])),u("mentorship",["allCycles"])),beforeCreate(){this.$store.hasModule("mentorship")||this.$store.registerModule("mentorship",x)},async created(){const e=await this.$http.initialRequest("/mentorship/query");this.$http.isError(e)||(this.$store.commit("mentorship/setAdmins",e.admins),this.$store.commit("mentorship/setCycles",e.cycles))},methods:{}});const _e=y("hr",null,null,-1);Fe.render=function(e,t,s,n,o,r){const l=m("participants"),i=m("user-details"),a=m("cycles"),c=m("administrators");return p(),h("div",null,[I(l),I(i),_e,I(a),I(c)])};export{Fe as default};
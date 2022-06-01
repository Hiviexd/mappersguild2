var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,d=(t,e)=>{for(var s in e||(e={}))n.call(e,s)&&r(t,s,e[s]);if(i)for(var s of i(e))o.call(e,s)&&r(t,s,e[s]);return t};import{d as a,m as c,H as l,i as u,o as g,u as m,w as h,l as b,t as C,f as p,b as f,q as y,O as S,s as j,F as v,g as D,e as I,j as k,n as $}from"./vendor.8b5721c7.js";import{_ as w}from"./ContestCard.f4b3ec41.js";import{_ as x}from"./ModalDialog.2c18b0dc.js";import"./ModesIcons.88090f43.js";var B=a({name:"EditingCriteriaModal",components:{ModalDialog:x},data:()=>({editingScore:0,editingComment:""}),computed:d(d({},c({selectedContestId:t=>t.judging.selectedContestId,judgingDone:t=>t.judging.judgingDone})),l(["editingSubmission","editingCriteria"])),watch:{editingSubmission(){this.getUserInput()},editingCriteria(){this.getUserInput()}},methods:{getUserInput(){if(this.editingSubmission){const t=this.getJudgingToCriterias(this.editingSubmission.id,this.editingCriteria.id);t?(this.editingScore=t.score,this.editingComment=t.comment):(this.editingScore=0,this.editingComment="")}},getJudgingToCriterias(t,e){const s=this.judgingDone.find((e=>e.submission.id===t));if(!s)return null;const i=s.judgingScores.find((t=>t.criteria.id===e));return i||null},async save(t){var e,s;const i=await this.$http.executePost("/contests/judging/save",{submissionId:null==(e=this.editingSubmission)?void 0:e.id,criteriaId:null==(s=this.editingCriteria)?void 0:s.id,score:this.editingScore,comment:this.editingComment},t);this.$http.isError(i)||(this.$store.commit("setJudgingDone",i.judgingDone),this.$store.dispatch("updateToastMessages",{message:i.success,type:"info"}))},closeModal(){var t;null==(t=document.getElementById("close-button"))||t.click()}}});const E={class:"text-capitalize"},M={key:0,class:"mb-3"},T=p("label",{class:"form-label",for:"score"},"Score",-1),O=["max"],J={key:1,class:"mb-3"},P=p("label",{class:"form-label",for:"comment"}," Comment ",-1),U=p("div",{id:"close-button","data-bs-dismiss":"modal"},null,-1);B.render=function(t,e,s,i,n,o){const r=u("modal-dialog");return g(),m(r,{id:"editing-judging-modal","data-bs-backdrop":"static","data-bs-keyboard":"false",loaded:Boolean(t.editingSubmission)},{header:h((()=>[b(C(t.editingSubmission.name)+": ",1),p("span",E,C(t.editingCriteria.name),1)])),default:h((()=>["comments"!=t.editingCriteria.name?(g(),f("div",M,[T,y(p("input",{id:"score","onUpdate:modelValue":e[0]||(e[0]=e=>t.editingScore=e),type:"number",step:"1",min:"0",max:t.editingCriteria.maxScore,class:"form-control"},null,8,O),[[S,t.editingScore]])])):(g(),f("div",J,[P,y(p("textarea",{id:"comment","onUpdate:modelValue":e[1]||(e[1]=e=>t.editingComment=e),maxlength:"3000",rows:"4",class:"form-control"},null,512),[[S,t.editingComment]])]))])),footer:h((()=>[p("button",{type:"button",class:"btn btn-sm btn-outline-secondary",onClick:e[2]||(e[2]=j((e=>t.closeModal()),["prevent"]))}," Close "),p("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:e[3]||(e[3]=j((e=>t.save(e)),["prevent"]))}," Save changes "),U])),_:1},8,["loaded"])};var q=a({name:"JudgingInstructions"});const _={class:"mb-2"},F=[p("ul",null,[p("li",null,"Set scores for every category. Talk to the contest host about what each category means!"),p("li",null,"DO NOT discuss your scores with anyone else, including other judges.")],-1)];q.render=function(t,e,s,i,n,o){return g(),f("div",_,F)};var N,R,V={state:{contests:[],selectedContestId:null,judgingDone:[],editingSubmissionId:null,editingCriteriaId:null},mutations:{setContests(t,e){t.contests=e},setSelectedContestId(t,e){t.selectedContestId=e},setJudgingDone(t,e){t.judgingDone=e},setEditingSubmissionId(t,e){t.editingSubmissionId=e},setEditingCriteriaId(t,e){t.editingCriteriaId=e}},getters:{selectedContest:t=>t.contests.find((e=>e.id===t.selectedContestId)),editingSubmission:(t,e)=>{var s;return null==(s=e.selectedContest)?void 0:s.submissions.find((e=>e.id===t.editingSubmissionId))},editingCriteria:(t,e)=>{var s;return null==(s=e.selectedContest)?void 0:s.criterias.find((e=>e.id===t.editingCriteriaId))}}},z=a({name:"JudgingPage",components:{EditingCriteriaModal:B,ContestCard:w,JudgingInstructions:q},data:()=>({sortBy:"name",sortByCriteria:"",sortDesc:!1,loadedSpecificContest:!1}),computed:(N=d(d({},c({contests:t=>t.judging.contests,judgingDone:t=>t.judging.judgingDone})),l(["selectedContest"])),R={filteredSubmissions(){const t=[];for(let s=0;s<this.selectedContest.submissions.length;s++)this.selectedContest.submissions[s].screenings.reduce(((t,e)=>e.vote?t+e.vote:t),0)>=this.selectedContest.judgingThreshold&&t.push(s);const e=[];for(const s of t)e.push(this.selectedContest.submissions[s]);return e},sortedSubmissions(){const t=this.filteredSubmissions;return t?("name"===this.sortBy?t.sort(((t,e)=>{var s,i;const n=null==(s=t.name)?void 0:s.toUpperCase(),o=null==(i=e.name)?void 0:i.toUpperCase();return n<o?this.sortDesc?-1:1:n>o?this.sortDesc?1:-1:0})):"total"===this.sortBy?t.sort(((t,e)=>{const s=this.getTotalScore(t.id),i=this.getTotalScore(e.id);return this.sortDesc?s-i:i-s})):"criteria"===this.sortBy?t.sort(((t,e)=>{const s=this.getScore(t.id,this.sortByCriteria),i=this.getScore(e.id,this.sortByCriteria);return this.sortDesc?s-i:i-s})):"completed"===this.sortBy&&t.sort(((t,e)=>{const s=this.isCompleted(t.id);return s===this.isCompleted(e.id)?0:this.sortDesc?s?1:-1:s?-1:1})),t):[]},maxPossibleScore(){return this.selectedContest.criterias.reduce(((t,e)=>e.maxScore+t),0)}},e(N,s(R))),beforeCreate(){this.$store.hasModule("judging")||this.$store.registerModule("judging",V)},unmounted(){this.$store.hasModule("judging")&&this.$store.unregisterModule("judging")},async created(){await this.loadContests()},methods:{async loadContests(){const t=this.$route.query.contest;if(t&&!this.contests.length){const e=await this.$http.initialRequest(`/contests/judging/searchContest/${t}`);this.$http.isError(e)||(this.$store.commit("setContests",[e.contest]),this.$store.commit("setSelectedContestId",t),this.$store.commit("setJudgingDone",e.judgingDone),this.loadedSpecificContest=!0)}else{this.$router.replace("/contests/judging");const t=await this.$http.initialRequest("/contests/judging/relevantInfo");this.$http.isError(t)||(this.$store.commit("setContests",t.contests),this.$store.commit("setSelectedContestId",null),this.$store.commit("setJudgingDone",t.judgingDone),this.loadedSpecificContest=!1)}},selectForEditing(t,e){this.$store.commit("setEditingSubmissionId",t),this.$store.commit("setEditingCriteriaId",e)},getJudgingToCriterias(t,e){const s=this.judgingDone.find((e=>e.submission.id===t));if(!s)return null;const i=s.judgingScores.find((t=>t.criteria.id===e));return i||null},getScore(t,e){const s=this.getJudgingToCriterias(t,e);return s?s.score:0},getTotalScore(t){const e=this.judgingDone.find((e=>e.submission.id===t));return e?e.judgingScores.reduce(((t,e)=>e.score+t),0):0},isCompleted(t){const e=this.judgingDone.find((e=>e.submission.id===t));return!!e&&e.judgingScores.length===this.selectedContest.criterias.length},sortSubmissionsBy(t,e){this.sortBy=t,this.sortDesc=!this.sortDesc,"criteria"===t&&e&&(this.sortByCriteria=e)},async loadMore(){await this.loadContests()},getComment(t){const e=this.judgingDone.find((e=>e.submission.id===t));if(!e)return"...";let s="...";for(const i of e.judgingScores)i.comment&&i.comment.length&&(s=i.comment.length>10?i.comment.slice(0,10)+"...":i.comment);return s}}});const H={class:"container card card-body py-1"},L={key:0,class:"row"},A={key:0,class:"col-sm-4 my-2"},G={key:1},K=p("hr",null,null,-1),Q={class:"card"},W={class:"my-2"},X=["href"],Y={class:"mb-2"},Z=[b(" See judging instructions "),p("i",{class:"fas fa-angle-down"},null,-1)],tt={class:"card-body p-0 mt-2"},et={class:"table table-responsive-sm mb-0"},st={class:"text-start"},it=["onClick"],nt={class:"text-start"},ot=["onClick"],rt={key:0},dt={key:1},at=p("i",{class:"ms-1 fas fa-edit"},null,-1),ct={class:"text-center"};z.render=function(t,e,s,i,n,o){const r=u("contest-card"),d=u("judging-instructions"),a=u("editing-criteria-modal");return g(),f("div",H,[t.contests&&t.contests.length?(g(),f("div",L,[(g(!0),f(v,null,D(t.contests,(t=>(g(),m(r,{key:t.id,class:"col-sm-4 my-2",contest:t,route:"judging"},null,8,["contest"])))),128)),t.loadedSpecificContest?(g(),f("div",A,[p("button",{class:"btn w-100 btn-info h-100",type:"button",onClick:e[0]||(e[0]=e=>t.loadMore())}," Load other contests ")])):I("",!0),t.selectedContest?(g(),f("div",G,[K,p("div",Q,[p("h4",W,C(t.selectedContest.name),1),p("h5",null,[p("a",{href:t.selectedContest.download,target:"_blank"}," Download all submissions ",8,X)]),p("div",Y,[p("a",{href:"#judgingInstructions","data-bs-toggle":"collapse",onClick:e[1]||(e[1]=j((()=>{}),["prevent"]))},Z)]),k(d,{id:"judgingInstructions",class:"collapse"}),p("div",tt,[p("table",et,[p("thead",null,[p("tr",null,[p("th",st,[p("a",{href:"#",onClick:e[2]||(e[2]=j((e=>t.sortSubmissionsBy("name")),["prevent"]))}," Entry's Name ")]),(g(!0),f(v,null,D(t.selectedContest.criterias,(e=>(g(),f("th",{key:e.id},[p("a",{href:"#",class:"text-start",onClick:j((s=>t.sortSubmissionsBy("criteria",e.id)),["prevent"])},C(e.name),9,it)])))),128)),p("th",null,[p("a",{href:"#",onClick:e[3]||(e[3]=j((e=>t.sortSubmissionsBy("total")),["prevent"]))}," Total ")]),p("th",null,[p("a",{href:"#",onClick:e[4]||(e[4]=j((e=>t.sortSubmissionsBy("completed")),["prevent"]))}," Completed ")])])]),p("tbody",null,[(g(!0),f(v,null,D(t.sortedSubmissions,(e=>(g(),f("tr",{key:e.id},[p("td",nt,C(e.name),1),(g(!0),f(v,null,D(t.selectedContest.criterias,(s=>(g(),f("td",{key:s.id,class:"text-start"},[p("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#editing-judging-modal",onClick:j((i=>t.selectForEditing(e.id,s.id)),["prevent"])},["comments"!=s.name?(g(),f("span",rt,C(t.getScore(e.id,s.id)+`/${s.maxScore}`),1)):(g(),f("span",dt,C(t.getComment(e.id)),1)),at],8,ot)])))),128)),p("td",null,C(t.getTotalScore(e.id))+"/"+C(t.maxPossibleScore),1),p("td",ct,[p("i",{class:$(["fa",t.isCompleted(e.id)?"fa-check text-success":"fa-times text-danger"])},null,2)])])))),128))])])])])])):I("",!0)])):I("",!0),k(a)])};export{z as default};

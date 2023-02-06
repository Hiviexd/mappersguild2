var e,t,s=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&c(e,s,t[s]);if(i)for(var s of i(t))a.call(t,s)&&c(e,s,t[s]);return e};import{d as l,m,L as u,p as h,a as p,o as g,b,F as v,g as C,n as f,s as w,f as y,e as S,t as I,q as k,O as $,i as V,j as x,z as O,u as j,w as L,x as N,l as P}from"./vendor.df51a6ea.js";import{_}from"./ContestCard.7f227bc1.js";import"./index.ec1ad404.js";(t=e||(e={}))[t.First=5]="First",t[t.Second=4]="Second",t[t.Third=3]="Third",t[t.Fourth=2]="Fourth",t[t.Fifth=1]="Fifth",t[t.None=0]="None";var q=l({name:"ScreeningVote",props:{submissionId:{type:String,required:!0},savedVote:{type:Number,default:0},screeningVoteCount:{type:Number,default:0}},computed:d(d({},m({voteLoading:e=>e.screening.voteLoading})),u(["usedVotes"])),methods:{async updateVote(t){this.$store.commit("setVoteLoading",!0),this.savedVote==t&&(t=e.None);const s=await this.$http.executePost("/contests/screening/updateSubmission/"+this.submissionId,{vote:t});this.$http.isError(s)||this.$store.commit("updateSubmission",s),this.$store.commit("setVoteLoading",!1)}}});h("data-v-a65d9dd4");const F=["disabled","onClick"];p(),q.render=function(e,t,s,n,o,i){return g(),b("div",null,[(g(!0),b(v,null,C(e.screeningVoteCount,(t=>(g(),b("a",{key:t,class:f(["mx-1",{"disabled-star":e.usedVotes.includes(t)&&e.savedVote!=t||e.voteLoading}]),disabled:e.voteLoading,href:"#",onClick:w((s=>e.updateVote(t)),["prevent"])},[y("i",{class:f(["fa-star fas",{"text-warning":e.usedVotes.includes(t)&&e.savedVote==t}])},null,2)],10,F)))),128))])},q.__scopeId="data-v-a65d9dd4";var M=l({name:"ScreeningNotes",props:{submissionId:{type:String,required:!0},savedComment:{type:String,default:""}},data(){return{showCommentInput:!1,newComment:this.savedComment}},methods:{cancelUpdate(){this.showCommentInput=!this.showCommentInput,this.newComment=this.savedComment},async updateComment(e){if(this.savedComment!=this.newComment){const t=await this.$http.executePost("/contests/screening/updateSubmission/"+this.submissionId,{comment:this.newComment.trim()},e);this.$http.isError(t)||(this.showCommentInput=!this.showCommentInput,this.$store.commit("updateSubmission",t))}else this.showCommentInput=!this.showCommentInput}}});const E={class:""},U=[y("i",{class:"fas fa-edit"},null,-1)],T={key:1,class:"small text-white-50"},D={class:"text-end"};M.render=function(e,t,s,n,o,i){return g(),b("div",E,[e.showCommentInput?S("",!0):(g(),b("a",{key:0,href:"#",onClick:t[0]||(t[0]=w((t=>e.showCommentInput=!e.showCommentInput),["prevent"]))},U)),e.showCommentInput?(g(),b(v,{key:2},[k(y("textarea",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.newComment=t),class:"form-control form-control-sm",rows:"4",type:"text",placeholder:"map comments...",style:{overflow:"hidden","overflow-wrap":"break-word"},maxlength:"1000"},null,512),[[$,e.newComment,void 0,{trim:!0}]]),y("div",D,[y("button",{type:"button",class:"btn btn-sm btn-outline-info mt-1 mx-1",onClick:t[2]||(t[2]=t=>e.cancelUpdate())}," Cancel "),y("button",{type:"button",class:"btn btn-sm btn-outline-info mt-1 mx-1",onClick:t[3]||(t[3]=t=>e.updateComment(t))}," Save ")])],64)):(g(),b("span",T,I(e.newComment||"..."),1))])};var R,z,Y=l({name:"SubmissionCard",components:{ScreeningVote:q,ScreeningNotes:M},props:{submission:{type:Object,required:!0},screeningVoteCount:{type:Number,default:0}},computed:(R=d({},m(["loggedInUser"])),z={relatedScreening(){return this.submission.screenings.find((e=>e.screener._id===this.loggedInUser.id))}},n(R,o(z)))});h("data-v-41124992");const A={class:"col-sm-12 my-1"},B={class:"card-body p-2"},G={class:"row"},H={class:"col-sm-6"},J={class:"col-sm-6 text-end"},K={class:"row"},Q={class:"col-sm"};p(),Y.render=function(e,t,s,n,o,i){const r=V("screening-vote"),a=V("screening-notes");return g(),b("div",A,[y("div",{class:f(["card",e.relatedScreening&&e.relatedScreening.vote?"bg-vote":"bg-dark"])},[y("div",B,[y("div",G,[y("div",H,I(e.submission.name),1),y("div",J,[x(r,{"submission-id":e.submission.id,"saved-vote":e.relatedScreening&&e.relatedScreening.vote,"screening-vote-count":e.screeningVoteCount},null,8,["submission-id","saved-vote","screening-vote-count"])])]),y("div",K,[y("div",Q,[x(a,{"submission-id":e.submission.id,"saved-comment":e.relatedScreening&&e.relatedScreening.comment},null,8,["submission-id","saved-comment"])])])])],2)])},Y.__scopeId="data-v-41124992";var W=l({name:"ScreeningInstructions"});const X={class:"mb-2"},Z=[O('<ul><li>Mark your personal <b>top 5</b> submissions with stars. If the contest has a theme/additional rules, consider those when making your choices.</li><li> Stars <i class="fa-star fas text-warning"></i> indicate the order of your top 5. The star on the <b>left is the lowest score</b>, while the star on the <b>right is the highest score</b>. </li><li>Comments will be seen by the map creator. Your name will be anonymous.</li><li>DO NOT discuss your choices with other screeners or outsiders until after the contest is concluded.</li><li>The overall highest scoring submissions will be included in the judging phase!</li></ul>',1)];W.render=function(e,t,s,n,o,i){return g(),b("div",X,Z)};var ee={state:{contests:[],selectedContestId:null,voteLoading:!1},mutations:{setContests(e,t){e.contests=t},setSelectedContestId(e,t){e.selectedContestId=t},setVoteLoading(e,t){e.voteLoading=t},updateSubmission(e,t){let s=-1;const n=e.contests.findIndex((e=>{if(s=e.submissions.findIndex((e=>e.id===t.id)),-1!==s)return!0}));-1!==n&&-1!==s&&(e.contests[n].submissions[s]=t)}},getters:{selectedContest:e=>e.contests.find((t=>t.id===e.selectedContestId)),usedVotes:(e,t,s)=>{const n=t.selectedContest,o=[];return n.submissions.forEach((e=>{const t=e.screenings.find((e=>{var t;return e.screener.id===(null==(t=s.loggedInUser)?void 0:t.id)}));t&&o.push(t.vote)})),o}}},te=l({name:"ScreeningPage",components:{SubmissionCard:Y,ContestCard:_,ScreeningInstructions:W},data:()=>({loadedSpecificContest:!1}),computed:d(d({},m({contests:e=>e.screening.contests})),u(["selectedContest"])),beforeCreate(){this.$store.hasModule("screening")||this.$store.registerModule("screening",ee)},unmounted(){this.$store.hasModule("screening")&&this.$store.unregisterModule("screening")},async created(){await this.loadContests()},methods:{async loadContests(){const e=this.$route.query.contest;if(e&&!this.contests.length){const t=await this.$http.initialRequest(`/contests/screening/searchContest/${e}`);this.$http.isError(t)||(this.$store.commit("setContests",[t]),this.$store.commit("setSelectedContestId",e),this.loadedSpecificContest=!0)}else{this.$router.replace("/contests/screening");const e=await this.$http.initialRequest("/contests/screening/relevantInfo");this.$http.isError(e)||(this.$store.commit("setContests",e||[]),this.$store.commit("setSelectedContestId",null),this.loadedSpecificContest=!1)}},async loadMore(){await this.loadContests()}}});const se={class:"container card card-body py-1"},ne={key:0,class:"row"},oe={key:0,class:"col-sm-4 my-2"},ie={key:1},re=y("hr",null,null,-1),ae={class:"my-2"},ce=["href"],de={class:"mb-2"},le=[P(" See screening instructions "),y("i",{class:"fas fa-angle-down"},null,-1)],me={key:1,class:"ms-4"},ue={key:1,class:"text-center p-3"};te.render=function(e,t,s,n,o,i){const r=V("contest-card"),a=V("screening-instructions"),c=V("submission-card");return g(),b("div",se,[e.contests&&e.contests.length?(g(),b("div",ne,[(g(!0),b(v,null,C(e.contests,(e=>(g(),j(r,{key:e.id,class:"col-sm-4 my-2",contest:e,route:"screening"},null,8,["contest"])))),128)),e.loadedSpecificContest?(g(),b("div",oe,[y("button",{class:"btn w-100 btn-info h-100",type:"button",onClick:t[0]||(t[0]=t=>e.loadMore())}," Load other contests ")])):S("",!0),e.selectedContest?(g(),b("div",ie,[re,y("h4",ae,I(e.selectedContest.name),1),y("h5",null,[y("a",{href:e.selectedContest.download,target:"_blank"}," Download all submissions ",8,ce)]),y("div",de,[y("a",{href:"#screeningInstructions","data-bs-toggle":"collapse",onClick:t[1]||(t[1]=w((()=>{}),["prevent"]))},le)]),x(a,{id:"screeningInstructions",class:"collapse"}),e.selectedContest.submissions.length?(g(),j(N,{key:0,name:"list",tag:"div",class:"row"},{default:L((()=>[(g(!0),b(v,null,C(e.selectedContest.submissions,(t=>(g(),j(c,{key:t.id,submission:t,"screening-vote-count":e.selectedContest.screeningVoteCount},null,8,["submission","screening-vote-count"])))),128))])),_:1})):(g(),b("p",me," No submissions... "))])):S("",!0)])):(g(),b("div",ue," No contests available for screening. "))])};export{te as default};

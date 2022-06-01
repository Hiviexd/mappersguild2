var e,s,t=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(e,s,n)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,d=(e,s)=>{for(var t in s||(s={}))r.call(s,t)&&c(e,t,s[t]);if(i)for(var t of i(s))a.call(s,t)&&c(e,t,s[t]);return e};import{d as l,m,H as u,p as h,a as p,o as b,b as g,F as v,g as f,f as C,n as w,s as y,e as S,t as I,q as k,O as $,i as x,j as V,z as O,u as j,w as L,x as N,l as M}from"./vendor.8b5721c7.js";import{_ as P}from"./ContestCard.f4b3ec41.js";import"./ModesIcons.88090f43.js";(s=e||(e={}))[s.First=5]="First",s[s.Second=4]="Second",s[s.Third=3]="Third",s[s.Fourth=2]="Fourth",s[s.Fifth=1]="Fifth",s[s.None=0]="None";var _=l({name:"ScreeningVote",props:{submissionId:{type:String,required:!0},savedVote:{type:Number,default:0}},computed:d(d({},m({voteLoading:e=>e.screening.voteLoading})),u(["usedVotes"])),methods:{async updateVote(s){this.$store.commit("setVoteLoading",!0),this.savedVote==s&&(s=e.None);const t=await this.$http.executePost("/contests/screening/updateSubmission/"+this.submissionId,{vote:s});this.$http.isError(t)||this.$store.commit("updateSubmission",t),this.$store.commit("setVoteLoading",!1)}}});h("data-v-1cef01af");const q=["disabled","onClick"];p(),_.render=function(e,s,t,n,o,i){return b(),g("div",null,[(b(),g(v,null,f(5,(s=>C("a",{key:s,class:w(["mx-1",{"disabled-star":e.usedVotes.includes(s)&&e.savedVote!=s||e.voteLoading}]),disabled:e.voteLoading,href:"#",onClick:y((t=>e.updateVote(s)),["prevent"])},[C("i",{class:w(["fa-star fas",{"text-warning":e.usedVotes.includes(s)&&e.savedVote==s}])},null,2)],10,q))),64))])},_.__scopeId="data-v-1cef01af";var F=l({name:"ScreeningNotes",props:{submissionId:{type:String,required:!0},savedComment:{type:String,default:""}},data(){return{showCommentInput:!1,newComment:this.savedComment}},methods:{cancelUpdate(){this.showCommentInput=!this.showCommentInput,this.newComment=this.savedComment},async updateComment(e){if(this.savedComment!=this.newComment){const s=await this.$http.executePost("/contests/screening/updateSubmission/"+this.submissionId,{comment:this.newComment.trim()},e);this.$http.isError(s)||(this.showCommentInput=!this.showCommentInput,this.$store.commit("updateSubmission",s))}else this.showCommentInput=!this.showCommentInput}}});const E={class:""},U=[C("i",{class:"fas fa-edit"},null,-1)],T={key:1,class:"small text-white-50"},D={class:"text-end"};F.render=function(e,s,t,n,o,i){return b(),g("div",E,[e.showCommentInput?S("",!0):(b(),g("a",{key:0,href:"#",onClick:s[0]||(s[0]=y((s=>e.showCommentInput=!e.showCommentInput),["prevent"]))},U)),e.showCommentInput?(b(),g(v,{key:2},[k(C("textarea",{"onUpdate:modelValue":s[1]||(s[1]=s=>e.newComment=s),class:"form-control form-control-sm",rows:"4",type:"text",placeholder:"map comments...",style:{overflow:"hidden","overflow-wrap":"break-word"},maxlength:"1000"},null,512),[[$,e.newComment,void 0,{trim:!0}]]),C("div",D,[C("button",{type:"button",class:"btn btn-sm btn-outline-info mt-1 mx-1",onClick:s[2]||(s[2]=s=>e.cancelUpdate())}," Cancel "),C("button",{type:"button",class:"btn btn-sm btn-outline-info mt-1 mx-1",onClick:s[3]||(s[3]=s=>e.updateComment(s))}," Save ")])],64)):(b(),g("span",T,I(e.newComment||"..."),1))])};var R,z,H=l({name:"SubmissionCard",components:{ScreeningVote:_,ScreeningNotes:F},props:{submission:{type:Object,required:!0}},computed:(R=d({},m(["loggedInUser"])),z={relatedScreening(){return this.submission.screenings.find((e=>e.screener._id===this.loggedInUser.id))}},n(R,o(z)))});h("data-v-448c659c");const Y={class:"col-sm-12 my-1"},A={class:"card-body p-2"},B={class:"row"},G={class:"col-sm-6"},J={class:"col-sm-6 text-end"},K={class:"row"},Q={class:"col-sm"};p(),H.render=function(e,s,t,n,o,i){const r=x("screening-vote"),a=x("screening-notes");return b(),g("div",Y,[C("div",{class:w(["card",e.relatedScreening&&e.relatedScreening.vote?"bg-vote":"bg-dark"])},[C("div",A,[C("div",B,[C("div",G,I(e.submission.name),1),C("div",J,[V(r,{"submission-id":e.submission.id,"saved-vote":e.relatedScreening&&e.relatedScreening.vote},null,8,["submission-id","saved-vote"])])]),C("div",K,[C("div",Q,[V(a,{"submission-id":e.submission.id,"saved-comment":e.relatedScreening&&e.relatedScreening.comment},null,8,["submission-id","saved-comment"])])])])],2)])},H.__scopeId="data-v-448c659c";var W=l({name:"ScreeningInstructions"});const X={class:"mb-2"},Z=[O('<ul><li>Mark your personal <b>top 5</b> submissions with stars. If the contest has a theme/additional rules, consider those when making your choices.</li><li> Stars <i class="fa-star fas text-warning"></i> indicate the order of your top 5. The star on the <b>left is the lowest score</b>, while the star on the <b>right is the highest score</b>. </li><li>Comments will be seen by the map creator. Your name will be anonymous.</li><li>DO NOT discuss your choices with other screeners or outsiders until after the contest is concluded.</li><li>The overall highest scoring submissions will be included in the judging phase!</li></ul>',1)];W.render=function(e,s,t,n,o,i){return b(),g("div",X,Z)};var ee={state:{contests:[],selectedContestId:null,voteLoading:!1},mutations:{setContests(e,s){e.contests=s},setSelectedContestId(e,s){e.selectedContestId=s},setVoteLoading(e,s){e.voteLoading=s},updateSubmission(e,s){let t=-1;const n=e.contests.findIndex((e=>{if(t=e.submissions.findIndex((e=>e.id===s.id)),-1!==t)return!0}));-1!==n&&-1!==t&&(e.contests[n].submissions[t]=s)}},getters:{selectedContest:e=>e.contests.find((s=>s.id===e.selectedContestId)),usedVotes:(e,s,t)=>{const n=s.selectedContest,o=[];return n.submissions.forEach((e=>{const s=e.screenings.find((e=>{var s;return e.screener.id===(null==(s=t.loggedInUser)?void 0:s.id)}));s&&o.push(s.vote)})),o}}},se=l({name:"ScreeningPage",components:{SubmissionCard:H,ContestCard:P,ScreeningInstructions:W},data:()=>({loadedSpecificContest:!1}),computed:d(d({},m({contests:e=>e.screening.contests})),u(["selectedContest"])),beforeCreate(){this.$store.hasModule("screening")||this.$store.registerModule("screening",ee)},unmounted(){this.$store.hasModule("screening")&&this.$store.unregisterModule("screening")},async created(){await this.loadContests()},methods:{async loadContests(){const e=this.$route.query.contest;if(e&&!this.contests.length){const s=await this.$http.initialRequest(`/contests/screening/searchContest/${e}`);this.$http.isError(s)||(this.$store.commit("setContests",[s]),this.$store.commit("setSelectedContestId",e),this.loadedSpecificContest=!0)}else{this.$router.replace("/contests/screening");const e=await this.$http.initialRequest("/contests/screening/relevantInfo");this.$http.isError(e)||(this.$store.commit("setContests",e||[]),this.$store.commit("setSelectedContestId",null),this.loadedSpecificContest=!1)}},async loadMore(){await this.loadContests()}}});const te={class:"container card card-body py-1"},ne={key:0,class:"row"},oe={key:0,class:"col-sm-4 my-2"},ie={key:1},re=C("hr",null,null,-1),ae={class:"my-2"},ce=["href"],de={class:"mb-2"},le=[M(" See screening instructions "),C("i",{class:"fas fa-angle-down"},null,-1)],me={key:1,class:"ms-4"},ue={key:1,class:"text-center p-3"};se.render=function(e,s,t,n,o,i){const r=x("contest-card"),a=x("screening-instructions"),c=x("submission-card");return b(),g("div",te,[e.contests&&e.contests.length?(b(),g("div",ne,[(b(!0),g(v,null,f(e.contests,(e=>(b(),j(r,{key:e.id,class:"col-sm-4 my-2",contest:e,route:"screening"},null,8,["contest"])))),128)),e.loadedSpecificContest?(b(),g("div",oe,[C("button",{class:"btn w-100 btn-info h-100",type:"button",onClick:s[0]||(s[0]=s=>e.loadMore())}," Load other contests ")])):S("",!0),e.selectedContest?(b(),g("div",ie,[re,C("h4",ae,I(e.selectedContest.name),1),C("h5",null,[C("a",{href:e.selectedContest.download,target:"_blank"}," Download all submissions ",8,ce)]),C("div",de,[C("a",{href:"#screeningInstructions","data-bs-toggle":"collapse",onClick:s[1]||(s[1]=y((()=>{}),["prevent"]))},le)]),V(a,{id:"screeningInstructions",class:"collapse"}),e.selectedContest.submissions.length?(b(),j(N,{key:0,name:"list",tag:"div",class:"row"},{default:L((()=>[(b(!0),g(v,null,f(e.selectedContest.submissions,(e=>(b(),j(c,{key:e.id,submission:e},null,8,["submission"])))),128))])),_:1})):(b(),g("p",me," No submissions... "))])):S("",!0)])):(b(),g("div",ue," No contests available for screening. "))])};export{se as default};

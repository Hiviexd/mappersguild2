var s=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(s,e)=>{for(var t in e||(e={}))o.call(e,t)&&r(s,t,e[t]);if(n)for(var t of n(e))i.call(e,t)&&r(s,t,e[t]);return s},a=(s,n)=>e(s,t(n));import{d as u,m as c,i as d,L as m,o as h,b,f as g,t as v,j as p,l as f,e as y,F as k,g as S,k as x,G as C,n as w,E as j,q as R}from"./vendor.cb33bf1d.js";var $={state:{contest:null,submissions:[],submission:null},mutations:{setContest(s,e){s.contest=e},setSubmissions(s,e){s.submissions=e},setSubmission(s,e){s.submission=e}}},O=u({name:"SubmissionResult",computed:a(l({},c({submission:s=>s.contestResults.submission,loggedInUser:s=>s.loggedInUser})),{voteCount(){let s=0;return this.submission.evaluations.forEach((e=>{isNaN(e.vote)||(s+=e.vote)})),s},emptyEvaluationCount(){return this.submission.contest.screeners.length-this.submission.evaluations.length},randomizedJudging(){let s=[...this.submission.judgings];return s=s.sort((()=>Math.random()-.5)),s},randomizedScreening(){let s=[...this.submission.evaluations];return s=s.sort((()=>Math.random()-.5)),s}}),methods:{findTotalJudgingPoints(s){let e=0;return s.forEach((s=>{e+=s.score})),e},findTotalCriteriaPoints(s){let e=0;return s.forEach((s=>{e+=s.criteria.maxScore})),e},findJudgeComment(s){let e="";return s.forEach((s=>{"comments"==s.criteria.name&&(e=s.comment)})),e},filteredAndSortedJudgingScores(s){s=s.filter((s=>"comments"!=s.criteria.name));const e=["musical representation","creativity","limitation","gameplay"];return[...s].sort((function(s,t){return e.indexOf(s.criteria.name)-e.indexOf(t.criteria.name)}))}}});const E={key:0,class:"container p-3"},P=x(" Submission by "),J={key:0},T={key:1,class:"mt-2"},z=["href"],N=["href"],U=g("hr",null,null,-1),q={class:"mx-2"},A=g("h5",null," Screening results ",-1),M={key:0},I=g("p",{class:"ms-3"}," Comments are usually each screener's initial thoughts. They're not intended to be constructive feedback and many screeners use comments as notes for determining their top 5. ",-1),D={class:"ms-3"},_={key:0,class:"fas fa-check text-done"},F={class:"ms-4 mb-2 small text-white-50",style:{"word-break":"break-word"}},G={class:"ms-3"},L=g("div",{class:"ms-4 mb-2 small text-white-50",style:{"word-break":"break-word"}}," [no comment] ",-1),Y={key:1,class:"ms-3"},B=g("hr",null,null,-1),H={class:"mx-2"},K=g("h5",null," Judging results ",-1),Q={key:0},V={class:"ms-3"},W={class:"row ms-3"},X={class:"col-sm-5"},Z={class:"table table-sm table-responsive-sm"},ss=g("thead",null,[g("tr",null,[g("th",{class:"text-start"}," Category "),g("th",{class:"text-start"}," Score ")])],-1),es={class:"text-start text-capitalize"},ts={class:"text-start"},ns=g("td",{class:"text-start"}," TOTAL ",-1),os={class:"text-start"},is={class:"col-sm-7 small"},rs=x(" Comment: "),ls={class:"text-white-50",style:{"white-space":"pre-line"}},as={key:1,class:"ms-3"};O.render=function(s,e,t,n,o,i){const r=d("user-link"),l=m("bs-tooltip");return h(),b("div",null,[s.submission?(h(),b("div",E,[g("div",null,[g("h3",null,v(s.submission.contest.name),1),g("h4",null,[P,p(r,{user:s.submission.creator},null,8,["user"])]),g("h5",null,' Anonymized as "'+v(s.submission.name)+'" ',1),s.loggedInUser&&s.loggedInUser.id==s.submission.creator.id?(h(),b("div",J,[g("a",{href:"#",onClick:e[0]||(e[0]=f((e=>s.$store.commit("setSubmission",null)),["prevent"]))}," Your previous contest submissions ")])):y("",!0),s.submission.contest.download?(h(),b("div",T,[g("div",null,[g("a",{href:"/contestresults?contest="+s.submission.contest.id,target:"_blank"}," Full "+v(s.submission.contest.name)+" results ",9,z)]),g("div",null,[g("a",{href:s.submission.contest.download,target:"_blank"}," Download all "+v(s.submission.contest.name)+" submissions ",9,N)])])):y("",!0)]),U,g("div",q,[A,s.submission.evaluations&&s.submission.evaluations.length?(h(),b("div",M,[I,(h(!0),b(k,null,S(s.randomizedScreening,((s,e)=>(h(),b("div",{key:s.id},[g("div",null,[g("div",D,[x(" User "+v(e+1)+" ",1),s.vote?C((h(),b("i",_,null,512)),[[l,"user placed in top 5"]]):y("",!0)]),g("div",F,v(s.comment?s.comment:"[no comment]"),1)])])))),128)),(h(!0),b(k,null,S(s.emptyEvaluationCount,(e=>(h(),b("div",{key:e},[g("div",null,[g("div",G," User "+v(s.submission.evaluations.length+e),1),L])])))),128))])):(h(),b("div",Y," This contest skipped screening. "))]),B,g("div",H,[K,s.submission.judgings&&s.submission.judgings.length?(h(),b("div",Q,[(h(!0),b(k,null,S(s.randomizedJudging,((e,t)=>(h(),b("div",{key:e.id},[g("div",null,[g("p",V," User "+v(t+1),1),g("div",W,[g("div",X,[g("table",Z,[ss,g("tbody",null,[(h(!0),b(k,null,S(s.filteredAndSortedJudgingScores(e.judgingScores),(s=>(h(),b("tr",{key:s.id},[g("td",es,v(s.criteria.name),1),g("td",ts,v(s.score)+"/"+v(s.criteria.maxScore),1)])))),128)),g("tr",null,[ns,g("td",os,v(s.findTotalJudgingPoints(e.judgingScores))+"/"+v(s.findTotalCriteriaPoints(e.judgingScores)),1)])])])]),g("div",is,[rs,g("span",ls,v(s.findJudgeComment(e.judgingScores)),1)])])])])))),128))])):(h(),b("div",as," This entry did not receive enough screening votes to reach the judging stage. :( "))])])):y("",!0)])};var us=u({name:"ContestResults",computed:a(l({},c({contest:s=>s.contestResults.contest})),{maxScore(){let s=0;for(const e of this.contest.criterias)s+=e.maxScore;return s*this.contest.judges.length}}),methods:{voteCount(s,e){let t=0;for(const n of s)n.vote&&!isNaN(n.vote)&&(e?t+=n.vote:t++);return t},judgeScore(s){let e=0;for(const t of s)for(const s of t.judgingScores)e+=s.score;return 0==e?"N/A":e}}});const cs={key:0,class:"container p-3"},ds=["href"],ms={class:"table table-sm"},hs={scope:"col"},bs=[x(" Submission ")],gs=g("th",{scope:"col"}," Creator ",-1),vs={scope:"col"},ps={scope:"col"},fs={scope:"row"},ys=["href"],ks={scope:"row"},Ss={key:0},xs=[g("i",{class:"fas fa-check text-done me-1"},null,-1)],Cs={key:0},ws={key:1};us.render=function(s,e,t,n,o,i){const r=d("user-link"),l=m("bs-tooltip");return h(),b("div",null,[s.contest?(h(),b("div",cs,[g("h4",null,v(s.contest.name)+" results",1),g("div",null,[g("a",{href:s.contest.download,target:"_blank"}," Download all submissions ",8,ds)]),g("table",ms,[g("thead",null,[g("tr",null,[C(g("th",hs,bs,512),[[l,"anonymized name seen by screeners/judges"]]),gs,C(g("th",vs,[x(" Screener votes ("+v(5*s.contest.screeners.length)+") ",1)],512),[[l,"screeners sort entries in their ordered top 5. #1 adds 5 points, #2 adds 4 points, etc."]]),C(g("th",ps,[x(" Judge scores ("+v(s.maxScore)+") ",1)],512),[[l,"see results news post for cases where standardized scores affect outcome"]])])]),g("tbody",null,[(h(!0),b(k,null,S(s.contest.submissions,(e=>(h(),b("tr",{key:e.id+"screen"},[g("td",fs,[g("a",{href:"/contestresults?submission="+e.id},v(e.name),9,ys)]),g("td",ks,[p(r,{user:e.creator},null,8,["user"])]),s.contest.judgingThreshold?(h(),b("td",Ss,[(h(!0),b(k,null,S(s.voteCount(e.evaluations),(s=>(h(),b("span",{key:s},xs)))),128)),s.voteCount(e.evaluations,!0)>0?(h(),b("span",Cs," ("+v(s.voteCount(e.evaluations,!0))+") ",1)):y("",!0)])):(h(),b("td",ws," N/A ")),g("td",null,[g("span",{class:w(s.judgeScore(e.judgings)>0?"text-done":"")},v(s.judgeScore(e.judgings)),3)])])))),128))])])])):y("",!0)])};var js=u({name:"ContestResultsPage",components:{SubmissionResult:O,ContestResults:us},computed:l({},c({contest:s=>s.contestResults.contest,submissions:s=>s.contestResults.submissions,submission:s=>s.contestResults.submission})),beforeCreate(){this.$store.hasModule("contestResults")||this.$store.registerModule("contestResults",$)},unmounted(){this.$store.hasModule("contestResults")&&this.$store.unregisterModule("contestResults")},async created(){const s=this.$route.query.contest,e=this.$route.query.submission;let t,n,o;s?(t=await this.$http.initialRequest("/contestResults/searchContest/"+s),this.$http.isError(t)||this.setContest(t)):e?([o,n]=await Promise.all([this.$http.initialRequest("/contestResults/searchSubmission/"+e),this.$http.executeGet("/contestResults/participated")]),!o||this.$http.isError(o)?this.$router.replace("/contestResults"):this.setSubmission(o)):n=await this.$http.initialRequest("/contestResults/participated"),this.$http.isError(n)||this.setSubmissions(n)},methods:l({},j(["setContest","setSubmissions","setSubmission"]))});const Rs={class:"container card card-body"},$s={key:2,class:"row"},Os=["onClick"],Es={class:"card card-hover card-level-2 card-body"},Ps={key:3,class:"text-center"};js.render=function(s,e,t,n,o,i){const r=d("contest-results"),l=d("submission-result");return h(),b("div",Rs,[s.contest?(h(),R(r,{key:0})):s.submission?(h(),R(l,{key:1})):s.submissions.length?(h(),b("div",$s,[(h(!0),b(k,null,S(s.submissions,(t=>(h(),b("div",{key:t.id,class:"col-sm-4 my-2",onClick:e=>s.setSubmission(t)},[g("div",Es,[g("p",null,v(t.contest.name),1),g("a",{href:"#",class:"text-secondary small text-end",onClick:e[0]||(e[0]=f((()=>{}),["prevent"]))}," details ")])],8,Os)))),128))])):(h(),b("div",Ps," Nothing to see here "))])};export{js as default};
import{M as g}from"./ModalDialog-91f51b61.js";import{d as S,M as T,_ as v,o,c as Q,w as h,e as i,t as d,h as l,k as c,a,b as n,v as m,r as f,F as y,A as u,q as k,i as b}from"./index-0b72a673.js";const M=S({name:"BeatmapInfoAdmin",components:{ModalDialog:g,ModesIcons:T},props:{beatmap:{type:Object,required:!0}},data(){return{status:this.beatmap.status,taskId:null,modderId:null,beatmapUrl:this.beatmap.url,storyboardQuality:null,storyboardTaskId:null,packId:this.beatmap.packId,rejectionInput:""}},computed:{sortedTasks(){const t=["Easy","Normal","Hard","Insane","Expert","Storyboard"];return[...this.beatmap.tasks].sort(function(s,r){return t.indexOf(s.name)-t.indexOf(r.name)})}},watch:{beatmap(){this.findBeatmapInfo()}},mounted(){this.findBeatmapInfo()},methods:{findBeatmapInfo(){this.status=this.beatmap.status,this.taskId=null,this.modderId=null,this.beatmapUrl=this.beatmap.url,this.storyboardQuality=null,this.storyboardTaskId=null,this.packId=this.beatmap.packId,this.beatmap.tasks.forEach(t=>{t.name=="Storyboard"&&(t.sbQuality&&(this.storyboardQuality=t.sbQuality),this.storyboardTaskId=t.id)}),this.rejectionInput=""},findTaskInfo(t){let s=`${t.name} --- `;const r=t.mappers.map(p=>p.username);return s+=r.join(", "),t.name=="Storyboard"&&(s+=` --- ${t.sbQuality}`),s},async updateBeatmapStatus(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateStatus`,{status:this.status},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"updated beatmap status",type:"info"}),this.$store.commit("updateBeatmapStatus",{beatmapId:this.beatmap.id,status:s}))},async deleteTask(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/tasks/${this.taskId}/delete`,{},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"deleted task",type:"info"}),this.$store.commit("deleteTask",{beatmapId:this.beatmap.id,taskId:this.taskId}))},async deleteModder(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/modders/${this.modderId}/delete`,{},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"deleted modder",type:"info"}),this.$store.commit("deleteModder",{beatmapId:this.beatmap.id,modderId:this.modderId}))},async updateUrl(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateUrl`,{url:this.beatmapUrl},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"updated URL",type:"info"}),this.$store.commit("updateUrl",{beatmapId:this.beatmap.id,url:s}))},async updateStoryboardQuality(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateStoryboardQuality`,{storyboardQuality:this.storyboardQuality,taskId:this.storyboardTaskId},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"updated storyboard quality",type:"info"}),this.$store.commit("updateStoryboardQuality",{beatmapId:this.beatmap.id,taskId:this.storyboardTaskId,task:s}))},async updatePackId(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updatePackId`,{packId:this.packId},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:"updated pack id",type:"info"}),this.$store.commit("updatePackId",{beatmapId:this.beatmap.id,packId:s}))},async updateIsShowcase(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateIsShowcase`,{isShowcase:!this.beatmap.isShowcase},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:`updated isShowcase: ${s}`,type:"info"}),this.$store.commit("updateIsShowcase",{beatmapId:this.beatmap.id,isShowcase:s}))},async updateQueuedForRank(t){const s=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateQueuedForRank`,{queuedForRank:!this.beatmap.queuedForRank},t);this.$http.isError(s)||(this.$store.dispatch("updateToastMessages",{message:`updated queuedForRank: ${s}`,type:"info"}),this.$store.commit("updateQueuedForRank",{beatmapId:this.beatmap.id,queuedForRank:s}))},async rejectMapset(t,s){if(confirm("Are you sure? THIS ONLY WORKS LOCALLY I DON'T KNOW WHY")){const p=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/rejectMapset`,{messages:this.rejectionInput,isResolvable:s},t);this.$http.isError(p)||(this.$store.dispatch("updateToastMessages",{message:"updated beatmap status",type:"info"}),this.$store.commit("updateBeatmapStatus",{beatmapId:this.beatmap.id,status:p}))}}}}),U=["href"],R={key:1},B={class:"container"},C={class:"row"},P=a("option",{value:"WIP"}," WIP ",-1),j=a("option",{value:"Done"}," Done ",-1),E=a("option",{value:"Qualified"}," Qualified ",-1),F=a("option",{value:"Ranked"}," Ranked ",-1),V=[P,j,E,F],O={class:"row"},q=["value"],D={class:"row"},N=["value"],L={class:"row"},A={key:0,class:"row"},W=a("option",{value:"1"}," 1 ",-1),H=a("option",{value:"2"}," 2 ",-1),Y=a("option",{value:"3"}," 3 ",-1),K=[W,H,Y],_={class:"row"},z={class:"row"},G={class:"col-sm-6"},J={class:"text-danger me-2"},X={key:1},Z={class:"row"},x={class:"col-sm-6"},tt={class:"text-danger me-2"},st={class:"row"};function et(t,s,r,p,at,ot){const I=b("user-link"),$=b("modes-icons"),w=b("modal-dialog");return o(),Q(w,{id:"editBeatmap",loaded:Boolean(t.beatmap)},{header:h(()=>[t.beatmap.url?(o(),i("a",{key:0,href:t.beatmap.url,target:"_blank"},d(t.beatmap.song.artist)+" - "+d(t.beatmap.song.title),9,U)):(o(),i("span",R,d(t.beatmap.song.artist)+" - "+d(t.beatmap.song.title),1)),l(" | "),c(I,{class:"me-1",user:t.beatmap.host},null,8,["user"]),c($,{modes:[t.beatmap.mode]},null,8,["modes"])]),default:h(()=>[a("div",B,[a("p",C,[n(a("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>t.status=e),class:"form-select form-select-sm w-50 mx-2"},V,512),[[m,t.status]]),a("button",{class:"btn btn-sm btn-outline-info w-25",onClick:s[1]||(s[1]=e=>t.updateBeatmapStatus(e))}," Save status ")]),a("p",O,[n(a("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>t.taskId=e),class:"form-select form-select-sm w-50 mx-2"},[(o(!0),i(y,null,f(t.sortedTasks,e=>(o(),i("option",{key:e.id,value:e.id},d(t.findTaskInfo(e)),9,q))),128))],512),[[m,t.taskId]]),a("button",{class:"btn btn-sm btn-outline-danger w-25",onClick:s[3]||(s[3]=e=>t.deleteTask(e))}," Remove difficulty ")]),a("p",D,[n(a("select",{"onUpdate:modelValue":s[4]||(s[4]=e=>t.modderId=e),class:"form-select form-select-sm w-50 mx-2"},[(o(!0),i(y,null,f(t.beatmap.modders,e=>(o(),i("option",{key:e.id,value:e.id},d(e.username),9,N))),128))],512),[[m,t.modderId]]),a("button",{class:"btn btn-sm btn-outline-danger w-25",onClick:s[5]||(s[5]=e=>t.deleteModder(e))}," Remove modder ")]),a("p",L,[n(a("input",{"onUpdate:modelValue":s[6]||(s[6]=e=>t.beatmapUrl=e),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"beatmap url..."},null,512),[[u,t.beatmapUrl]]),a("button",{class:"btn btn-sm btn-outline-info w-25",onClick:s[7]||(s[7]=e=>t.updateUrl(e))}," Save URL ")]),t.storyboardTaskId?(o(),i("p",A,[n(a("select",{"onUpdate:modelValue":s[8]||(s[8]=e=>t.storyboardQuality=e),class:"form-select form-select-sm w-50 mx-2"},K,512),[[m,t.storyboardQuality]]),a("button",{class:"btn btn-sm btn-outline-info w-25",onClick:s[9]||(s[9]=e=>t.updateStoryboardQuality(e))}," Save Storyboard Quality ")])):k("",!0),a("p",_,[n(a("input",{"onUpdate:modelValue":s[10]||(s[10]=e=>t.packId=e),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"osu! beatmap pack ID..."},null,512),[[u,t.packId]]),a("button",{class:"btn btn-sm btn-outline-info w-25",onClick:s[11]||(s[11]=e=>t.updatePackId(e))}," Save pack ID ")]),a("p",z,[a("span",G,[l(" Featured Artist showcase: "),a("span",J,d(t.beatmap.isShowcase?"true":"false"),1)]),a("button",{class:"btn btn-sm btn-outline-info ms-3 w-25",onClick:s[12]||(s[12]=e=>t.updateIsShowcase(e))}," Toggle ")]),t.beatmap.status=="Qualified"?(o(),i("span",X,[a("p",Z,[a("span",x,[l(" Queued for rank: "),a("span",tt,d(t.beatmap.queuedForRank?"true":"false"),1)]),a("button",{class:"btn btn-sm btn-outline-info ms-3 w-25",onClick:s[13]||(s[13]=e=>t.updateQueuedForRank(e))}," Toggle ")]),a("p",st,[n(a("textarea",{"onUpdate:modelValue":s[14]||(s[14]=e=>t.rejectionInput=e),class:"form-control form-control-sm w-25",type:"text",autocomplete:"off",placeholder:"messages separated by new lines..."},null,512),[[u,t.rejectionInput]]),a("button",{class:"btn btn-sm btn-outline-info ms-2 w-25",onClick:s[15]||(s[15]=e=>t.rejectMapset(e,!0))}," Reject with resolution option "),a("button",{class:"btn btn-sm btn-outline-danger ms-2 w-25",onClick:s[16]||(s[16]=e=>t.rejectMapset(e,!1))}," Reject WITHOUT resolution ")])])):k("",!0)])]),_:1},8,["loaded"])}const nt=v(M,[["render",et]]);export{nt as B};

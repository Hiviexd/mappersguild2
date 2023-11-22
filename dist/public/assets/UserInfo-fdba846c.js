import{M as c}from"./ModalDialog-cb218548.js";import{d as l,_ as h,o as m,c as g,w as r,i as b,a as t,b as i,v as M,f as n,t as a,p as d}from"./index-0d4d7327.js";const f=l({name:"UserInfo",components:{ModalDialog:c},props:{user:{type:Object,default:null},currentGroup:{type:String,default:""}},data(){return{badge:0,discordId:"",group:""}},watch:{user(){this.badge=this.user.badge||0,this.discordId=this.user.discordId||"",this.group=this.user.group||""}},created(){this.user&&(this.badge=this.user.badge||0,this.discordId=this.user.discordId||"",this.group=this.user.group||"")},methods:{async updateGroup(e){const s=await this.$http.executePost(`/admin/users/${this.user.id}/updateGroup`,{group:this.group},e);s&&(this.$store.dispatch("updateToastMessages",{message:`set group to ${s}`,type:"info"}),this.$store.commit("updateGroup",{userId:this.user.id,group:s}))},async updateBadge(e){const s=await this.$http.executePost(`/admin/users/${this.user.id}/updateBadge`,{badge:this.badge},e);s&&(this.$store.dispatch("updateToastMessages",{message:`set queued badge to ${s}`,type:"info"}),this.$store.commit("updateBadge",{userId:this.user.id,badge:s}))},async updateDiscordId(e){const s=await this.$http.executePost(`/admin/users/${this.user.id}/updateDiscordId`,{discordId:this.discordId},e);s&&(this.$store.dispatch("updateToastMessages",{message:`set discord ID to ${s}`,type:"info"}),this.$store.commit("updateDiscordId",{userId:this.user.id,discordId:s}))},async calculateUserPoints(e){await this.$http.executePost(`/admin/users/${this.user.id}/calculateUserPoints`,{},e)&&this.$store.dispatch("updateToastMessages",{message:"calculated points",type:"info"})},async toggleIsShowcaseMapper(e){const s=await this.$http.executePost(`/admin/users/${this.user.id}/toggleIsShowcaseMapper`,{isShowcaseMapper:!this.user.isShowcaseMapper},e);s&&(this.$store.dispatch("updateToastMessages",{message:`set isShowcaseMapper ${s.isShowcaseMapper}`,type:"info"}),this.$store.commit("updateIsShowcaseMapper",{userId:this.user.id,isShowcaseMapper:s.isShowcaseMapper}))},async toggleIsMentorshipAdmin(e){const s=await this.$http.executePost(`/admin/users/${this.user.id}/toggleIsMentorshipAdmin`,{isMentorshipAdmin:!this.user.isMentorshipAdmin},e);s&&(this.$store.dispatch("updateToastMessages",{message:`set isMentorshipAdmin ${s.isMentorshipAdmin}`,type:"info"}),this.$store.commit("updateIsMentorshipAdmin",{userId:this.user.id,isMentorshipAdmin:s.isMentorshipAdmin}))},async toggleHasMerchAccess(e){const s=await this.$http.executePost(`/admin/users/${this.user.id}/toggleHasMerchAccess`,{hasMerchAccess:!this.user.hasMerchAccess},e);s&&(this.$store.dispatch("updateToastMessages",{message:`set hasMerchAccess ${s.hasMerchAccess}`,type:"info"}),this.$store.commit("updateHasMerchAccess",{userId:this.user.id,hasMerchAccess:s.hasMerchAccess}))}}}),$={class:"container"},w={class:"row"},I=t("option",{value:"user"}," User ",-1),A=t("option",{value:"admin"}," Admin ",-1),y=t("option",{value:"secret"}," Secret ",-1),S=[I,A,y],k={class:"row"},D={class:"row"};function v(e,s,C,U,P,B){const u=d("user-link"),p=d("modal-dialog");return m(),g(p,{id:`editUser${e.currentGroup}`,"header-class":e.user?"bg-rank-"+e.user.rank:"",loaded:Boolean(e.user)},{header:r(()=>[b(u,{user:e.user},null,8,["user"])]),default:r(()=>[t("div",$,[t("p",w,[i(t("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.group=o),class:"form-select form-select-sm w-50 mx-2"},S,512),[[M,e.group]]),t("button",{class:"btn btn-sm btn-outline-info w-25",onClick:s[1]||(s[1]=o=>e.updateGroup(o))}," Save group ")]),t("p",k,[i(t("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.badge=o),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off"},null,512),[[n,e.badge]]),t("button",{class:"btn btn-sm btn-outline-info w-25",onClick:s[3]||(s[3]=o=>e.updateBadge(o))}," Queue badge ")]),t("p",D,[i(t("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>e.discordId=o),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off"},null,512),[[n,e.discordId]]),t("button",{class:"btn btn-sm btn-outline-info w-25",onClick:s[5]||(s[5]=o=>e.updateDiscordId(o))}," Save Discord ID ")]),t("p",null,[t("button",{class:"btn btn-sm btn-outline-info w-100",onClick:s[6]||(s[6]=o=>e.calculateUserPoints(o))}," Calculate user points ")]),t("p",null,[t("button",{class:"btn btn-sm btn-outline-info w-100",onClick:s[7]||(s[7]=o=>e.toggleIsShowcaseMapper(o))},a(e.user.isShowcaseMapper?"Disable":"Enable")+" isShowcaseMapper ",1)]),t("p",null,[t("button",{class:"btn btn-sm btn-outline-info w-100",onClick:s[8]||(s[8]=o=>e.toggleIsMentorshipAdmin(o))},a(e.user.isMentorshipAdmin?"Disable":"Enable")+" isMentorshipAdmin ",1)]),t("p",null,[t("button",{class:"btn btn-sm btn-outline-info w-100",onClick:s[9]||(s[9]=o=>e.toggleHasMerchAccess(o))},a(e.user.hasMerchAccess?"Disable":"Enable")+" hasMerchAccess ",1)])])]),_:1},8,["id","header-class","loaded"])}const V=h(f,[["render",v]]);export{V as U};
webpackJsonp([33],{"1UuH":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("TToO"),a=s("7+uW"),i=s("c+8m"),r=s.n(i),n=s("gN+L"),d=s("DZ+H"),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.userInfo={},t.user_active="0",t.radio="男",t.oldPassword="",t.newPassword="",t.renewPassword="",t}return o.c(t,e),t.prototype.clickLogo=function(){this.$refs.logo.click()},t.prototype.userSwitchover=function(e){this.user_active=e},t.prototype.recPassword=function(){var e=this;""!=this.oldPassword?""!=this.newPassword?this.newPassword.length<6?this.$Message.warning("新密码长度不能小于6位"):this.renewPassword==this.renewPassword?a.default.prototype.$reqFormPost1("/user/password/update",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,oldPassword:s("VI/i").createHash("md5").update(this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].loginName+this.oldPassword).digest("hex"),newPassword:this.newPassword},function(t){200==t.returnCode?(e.$Message.success("保存成功"),e.userInfo=t.data,e.queryuserinfo(),console.log(t.data)):e.$Message.warning(t.message)}):this.$Message.warning("两次输入密码不一致"):this.$Message.warning("新密码不能为空"):this.$Message.warning("请输入原密码")},t.prototype.changeLogo=function(){var e=this,t=this.$refs.logo,s=new FormData;s.append("file",t.files[0]),a.default.prototype.$reqFormUpload("/fileupload",s,function(t){e.userInfo.userIcon=t.data.data.filename})},t.prototype.queryuserinfo=function(){var e=this;a.default.prototype.$reqFormPost1("/user/query",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token},function(t){200==t.returnCode?(console.log("=-------------",t.data),e.userInfo=t.data,e.radio=e.userInfo.sex):e.$Message.warning(t.message)})},t.prototype.doUpdate=function(){var e=this;a.default.prototype.$reqFormPost1("/user/update",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,userIcon:this.userInfo.userIcon,sex:this.radio,nickName:this.userInfo.nickName},function(t){200==t.returnCode?(e.$Message.success("保存成功"),e.userInfo=t.data,e.queryuserinfo()):e.$Message.warning(t.message)})},t.prototype.mounted=function(){this.queryuserinfo()},t=o.b([r()({components:{Swipe:n.a},mixins:[d.a]})],t)}(a.default),p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("div",{staticClass:"flex",staticStyle:{height:"40px","background-color":"#f7f7f7","font-size":"15px","border-bottom":"1px solid #e5e5e5"}},[s("div",{staticClass:"taber",class:"0"==e.user_active?"selecttaber":"",on:{click:function(t){e.userSwitchover("0")}}},[e._v("基本信息")]),e._v(" "),s("div",{staticClass:"taber",class:"1"==e.user_active?"selecttaber":"",on:{click:function(t){e.userSwitchover("1")}}},[e._v("修改密码")])]),e._v(" "),s("div",["0"==e.user_active?s("div",{staticClass:"user_tab"},[s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"18px 0",margin:"0 20px"}},[s("div",{staticStyle:{"font-size":"15px",padding:"0 20px",width:"140px"}},[e._v("用户头像：")]),e._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.userInfo.userIcon,expression:"userInfo.userIcon"}],staticStyle:{width:"50px",height:"50px","border-radius":"60px"},on:{click:function(t){e.clickLogo()}}}),e._v(" "),s("input",{ref:"logo",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.changeLogo}})]),e._v(" "),s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"18px 0",margin:"0 20px"}},[s("div",{staticStyle:{"font-size":"15px",padding:"0 20px",width:"140px"}},[e._v("用户名：")]),e._v(" "),s("div",{staticStyle:{border:"1px #e5e5e5 solid"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.nickName,expression:"userInfo.nickName"}],staticStyle:{border:"0"},domProps:{value:e.userInfo.nickName},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"nickName",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"18px 0",margin:"0 20px"}},[s("div",{staticStyle:{"font-size":"15px",padding:"0 20px",width:"140px"}},[e._v("手机号码：")]),e._v(" "),s("div",[e._v("\n            "+e._s(e.userInfo.mobile.substring(0,3))+"****"+e._s(e.userInfo.mobile.substring(7,13))+"\n          ")])]),e._v(" "),s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"18px 0",margin:"0 20px","border-bottom":"1px solid #e5e5e5"}},[s("div",{staticStyle:{"font-size":"15px",padding:"0 20px",width:"140px"}},[e._v("性别：")]),e._v(" "),s("div",[s("el-radio",{attrs:{label:"男"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("男")]),e._v(" "),s("el-radio",{attrs:{label:"女"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("女")])],1)]),e._v(" "),s("div",{staticStyle:{padding:"30px"}},[s("van-button",{staticStyle:{"border-radius":"4%","background-color":"#F4C542",color:"#FFFFFF",border:"#F4C542",padding:"0 60px"},on:{click:function(t){t.stopPropagation(),e.doUpdate()}}},[e._v("保存")])],1)]):e._e(),e._v(" "),"1"==e.user_active?s("div",{staticClass:"user_tab"},[s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"18px 0",margin:"0 20px"}},[s("div",{staticStyle:{"font-size":"15px",padding:"0 20px",width:"140px"}},[e._v("原密码：")]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPassword,expression:"oldPassword"}],staticStyle:{height:"35px"},attrs:{type:"password"},domProps:{value:e.oldPassword},on:{input:function(t){t.target.composing||(e.oldPassword=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"18px 0",margin:"0 20px"}},[s("div",{staticStyle:{"font-size":"15px",padding:"0 20px",width:"140px"}},[e._v("新密码：")]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],staticStyle:{height:"35px"},attrs:{type:"password"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"18px 0",margin:"0 20px","border-bottom":"1px solid #e5e5e5"}},[s("div",{staticStyle:{"font-size":"15px",padding:"0 20px",width:"140px"}},[e._v("确认密码：")]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.renewPassword,expression:"renewPassword"}],staticStyle:{height:"35px"},attrs:{type:"password"},domProps:{value:e.renewPassword},on:{input:function(t){t.target.composing||(e.renewPassword=t.target.value)}}})])]),e._v(" "),s("div",{staticStyle:{padding:"30px"}},[s("van-button",{staticStyle:{"border-radius":"4%","background-color":"#F4C542",color:"#FFFFFF",border:"#F4C542",padding:"0 60px"},on:{click:function(t){t.stopPropagation(),e.recPassword()}}},[e._v("保存")])],1)]):e._e()])])},staticRenderFns:[]};var c=s("VU/8")(l,p,!1,function(e){s("mO6P")},"data-v-54f90a1f",null);t.default=c.exports},mO6P:function(e,t){}});
//# sourceMappingURL=33.fa93600fab0efe513093.js.map
webpackJsonp([33],{NrpJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("TToO"),s=a("7+uW"),n=a("c+8m"),r=a.n(n),i=a("DZ+H"),l=a("ymRw"),d=a("TJML"),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nickName="",t.sex="",t.oldPassword="",t.newPassword="",t.againnewPassword="",t.updatename="",t}return o.c(t,e),t.prototype.updatepassword=function(){var e=this;""!=this.oldPassword?""!=this.newPassword?this.newPassword===this.againnewPassword?s.default.prototype.$reqFormPost("/user/password/update",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,oldPassword:a("VI/i").createHash("md5").update(this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].loginName+this.oldPassword).digest("hex"),newPassword:a("VI/i").createHash("md5").update(this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].loginName+this.newPassword).digest("hex")},function(t){if(null!=t){if(console.log(t),200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(l.Toast)(t.data.message);Object(l.Toast)("修改成功"),console.log("res.data",t.data),e.$router.go(-1)}else console.log("网络请求错误！")}):Object(l.Toast)("两次输入密码不一致"):Object(l.Toast)("新密码不能为空"):Object(l.Toast)("请输入原密码")},t.prototype.updateinfo=function(){var e=this;""==this.nickName&&""==this.sex||(""!==this.nickName&&s.default.prototype.$reqFormPost("/user/update",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,nickName:this.nickName},function(t){if(null!=t){if(console.log(t),200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(l.Toast)(t.data.message);console.log("res.data",t.data),e.$router.go(-1)}else console.log("网络请求错误！")}),""!==this.sex&&s.default.prototype.$reqFormPost("/user/update",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,sex:this.sex},function(t){if(null!=t){if(console.log(t),200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(l.Toast)(t.data.message);console.log("res.data",t.data),e.$router.go(-1)}else console.log("网络请求错误！")}))},t.prototype.handlePX=function(e,t){return e+":"+this.$store.getters[s.default.prototype.MutationTreeType.SYSTEM].availWidth/750*t+"px;"},t.prototype.mounted=function(){this.updatename=this.$route.query.updatename,this.$route.query.nickName&&(this.nickName=this.$route.query.nickName),this.$route.query.sex&&(this.sex=this.$route.query.sex),console.log("收藏页面")},t=o.b([r()({components:{comhead:d.a},mixins:[i.a]})],t)}(s.default),c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab-contents",staticStyle:{height:"-webkit-fill-available","background-color":"#f3f3f3"}},[a("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"修改密码",isRightIcon:"true"},on:{leftClick:!1}}),e._v(" "),"password"===e.updatename?a("van-cell-group",[a("van-field",{attrs:{type:"password",label:"原密码",placeholder:"请输入原密码"},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}}),e._v(" "),a("van-field",{attrs:{type:"password",label:"新密码",placeholder:"请输入新密码"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),e._v(" "),a("van-field",{attrs:{type:"password",label:"重新新密码",placeholder:"请再次输入新密码"},model:{value:e.againnewPassword,callback:function(t){e.againnewPassword=t},expression:"againnewPassword"}})],1):e._e(),e._v(" "),"nickName"===e.updatename?a("van-cell-group",[a("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:e.nickName,callback:function(t){e.nickName=t},expression:"nickName"}})],1):e._e(),e._v(" "),"sex"===e.updatename?a("van-radio-group",{model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[a("van-cell-group",[a("van-cell",[a("van-radio",{attrs:{name:"男"}},[e._v("男")])],1),e._v(" "),a("van-cell",[a("van-radio",{attrs:{name:"女"}},[e._v("女")])],1)],1)],1):e._e(),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},["password"===e.updatename?a("van-button",{attrs:{size:"large"},on:{click:function(t){e.updatepassword()}}},[e._v("确定修改")]):e._e(),e._v(" "),"sex"===e.updatename||"nickName"===e.updatename?a("van-button",{attrs:{size:"large"},on:{click:function(t){e.updateinfo()}}},[e._v("修改")]):e._e()],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,c,!1,function(e){a("WHme")},"data-v-6c63b83b",null);t.default=p.exports},WHme:function(e,t){}});
//# sourceMappingURL=33.f779bf0666d2a0f13830.js.map
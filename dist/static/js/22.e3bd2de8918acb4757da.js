webpackJsonp([22],{"0Wt/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("TToO"),n=a("7+uW"),s=a("c+8m"),i=a.n(s),l=a("DZ+H"),r=a("Fd2+"),u=a("TJML"),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.userIcon="",t.nickName="",t.sex="",t.loginName="",t}return o.c(t,e),t.prototype.queryuser=function(){var e=this;n.default.prototype.$reqFormPost("/user/query",{userId:this.$store.getters[n.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[n.default.prototype.MutationTreeType.TOKEN_INFO].token},function(t){if(null!=t){if(console.log(t),200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(r.b)(t.data.message);e.userIcon=t.data.data.userIcon,e.nickName=t.data.data.nickName,e.sex=t.data.data.sex,e.loginName=t.data.data.loginName}else console.log("网络请求错误！")})},t.prototype.go_updatenickName=function(){this.$router.push({path:"/update_info",query:{updatename:"nickName",nickName:this.nickName}})},t.prototype.go_updatesex=function(){this.$router.push({path:"/update_info",query:{updatename:"sex",sex:this.sex}})},t.prototype.onRead=function(e){var t=this,a=new FormData;a.append("file",e.file),n.default.prototype.$reqFormUpload("/fileupload",a,function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(r.b)(e.data.message);console.log("文件上传",e.data.data.filename),t.updateuserinfo(e.data.data.filename)}else console.log("网络请求错误！")})},t.prototype.updateuserinfo=function(e){var t=this;n.default.prototype.$reqFormPost("/user/update",{userId:this.$store.getters[n.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[n.default.prototype.MutationTreeType.TOKEN_INFO].token,userIcon:e},function(e){if(null!=e){if(console.log(e),200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(r.b)(e.data.message);console.log("updateuserinfo",e.data),t.queryuser()}else console.log("网络请求错误！")})},t.prototype.handlePX=function(e,t){return e+":"+this.$store.getters[n.default.prototype.MutationTreeType.SYSTEM].availWidth/750*t+"px;"},t.prototype.mounted=function(){this.queryuser(),console.log("收藏页面")},t=o.b([i()({components:{comhead:u.a},mixins:[l.a]})],t)}(n.default),c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tab-contents",staticStyle:{height:"-webkit-fill-available","background-color":"#f3f3f3"}},[o("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"基本信息",isRightIcon:"true"},on:{leftClick:!1}}),e._v(" "),o("van-cell-group",[o("van-uploader",{staticStyle:{width:"100%",height:"100%"},attrs:{"after-read":e.onRead,accept:"image/jpg,image/png, image/jpeg"}},[o("van-cell",{attrs:{"is-link":""}},[o("template",{slot:"title"},[o("span",{staticClass:"van-cell-text",style:e.handlePX("line-height",60)},[e._v("头像")])]),e._v(" "),o("div",{style:e.handlePX("height",60)},[e.userIcon?o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.userIcon,expression:"userIcon"}],staticStyle:{"border-radius":"50%"},style:e.handlePX("width",60)+e.handlePX("height",60)}):o("img",{staticStyle:{"border-radius":"50%"},style:e.handlePX("width",60)+e.handlePX("height",60),attrs:{src:a("nqO4")}})])],2)],1),e._v(" "),o("van-cell",{attrs:{title:"用户名","is-link":"",value:e.nickName},on:{click:function(t){e.go_updatenickName()}}}),e._v(" "),o("van-cell",{attrs:{title:"性别","is-link":"",value:e.sex},on:{click:function(t){e.go_updatesex()}}}),e._v(" "),o("van-cell",{attrs:{title:"手机","is-link":"",value:e.loginName}})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(d,c,!1,function(e){a("d5TL")},"data-v-a0024c8e",null);t.default=p.exports},d5TL:function(e,t){}});
//# sourceMappingURL=22.e3bd2de8918acb4757da.js.map
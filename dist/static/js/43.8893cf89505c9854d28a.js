webpackJsonp([43],{"TF/7":function(e,t){},bUHp:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("TToO"),n=i("7+uW"),s=i("c+8m"),a=i.n(s),r=i("DZ+H"),d=i("ymRw"),l=i("TJML"),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.pageindex=0,t.memberList=[],t.isLoading=!1,t.list=[],t.loading=!1,t.finished=!1,t}return o.c(t,e),t.prototype.getMemberList=function(){var e=this;n.default.prototype.$reqFormPost("/member/list",{userId:this.$store.getters[n.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[n.default.prototype.MutationTreeType.TOKEN_INFO].token},function(t){if(null!=t)return 200!=t.data.status?(console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(d.Toast)(t.data.message)):void(e.memberList=t.data.data.messageList);console.log("网络请求错误！")})},t.prototype.onRefresh=function(){setTimeout(function(){},500)},t.prototype.onLoad=function(){var e=this,t=this;setTimeout(function(){console.log("加载"),console.log("this.finished",e.finished),console.log("this.loading",e.loading),e.finished||(t.pageindex=t.pageindex+1,t.getMemberList())},500)},t.prototype.loadMore=function(){console.log("刷新"),this.loading=!0;var e=this;setTimeout(function(){e.loading||(e.pageindex=e.pageindex+1,e.getMemberList(),e.loading=!1)},1e3)},t.prototype.handlePX=function(e,t){return e+":"+this.$store.getters[n.default.prototype.MutationTreeType.SYSTEM].availWidth/750*t+"px;"},t.prototype.mounted=function(){console.log("mount"),this.getMemberList(),console.log("我的成员")},t=o.b([a()({components:{comhead:l.a},mixins:[r.a]})],t)}(n.default),u={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{},[o("div",{staticStyle:{padding:"30px"}},e._l(e.memberList,function(t,n){return o("div",{key:n,staticClass:"flex flex-pack-justify",staticStyle:{padding:"15px 0","border-bottom":"1px dashed #E5E5E5"}},[o("div",[t.userIcon?o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.userIcon,expression:"item.userIcon"}],staticStyle:{"vertical-align":"middle","border-radius":"100%",width:"25px",height:"25px"}}):o("img",{staticStyle:{"vertical-align":"middle","border-radius":"100%",width:"25px",height:"25px"},attrs:{src:i("nqO4")}}),e._v(" "),o("span",[e._v(e._s(t.nickName))])]),e._v(" "),o("div",[o("span",[e._v(e._s(t.mobile))])])])})),e._v(" "),o("div",{staticClass:"flex flex-align-center flex-v"},[0==e.memberList.length?o("div",{staticStyle:{color:"#BFBFBF",padding:"120px 0 30px"}},[e._v("暂无成员~~~")]):e._e()])])},staticRenderFns:[]};var p=i("VU/8")(c,u,!1,function(e){i("TF/7")},"data-v-2a68c0ea",null);t.default=p.exports}});
//# sourceMappingURL=43.8893cf89505c9854d28a.js.map
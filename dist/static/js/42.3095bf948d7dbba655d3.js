webpackJsonp([42],{"3IPY":function(t,e){},"G/+7":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("TToO"),s=o("7+uW"),n=o("c+8m"),r=o.n(n),i=o("DZ+H"),l=o("ymRw"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.messagelist=[],e.orderId="",e.lookMesge="",e.pageSize=20,e.page=0,e.total=0,e}return a.c(e,t),e.prototype.handleContent=function(t){"ORDER_MSG"==t.type&&this.goOrderDetail(t),"AWARD_MSG"==t.type&&this.goReward(),"MEMBER_MSG"==t.type&&this.goMember()},e.prototype.onPageChange=function(t){this.page=t-1,this.getList()},e.prototype.getList=function(){var t=this;s.default.prototype.$reqFormPost("/message/list",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,page:this.page,pageSize:20},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(l.Toast)(e.data.message);console.log(e.data.data),t.messagelist=e.data.data.messageList,t.total=e.data.data.page.total}else console.log("网络请求错误！")})},e.prototype.unGetList=function(){var t=this;console.log("消息",this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId),console.log("消息",this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token),s.default.prototype.$reqFormPost("/message/unread/count",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e)return 200!=e.data.status?(console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(l.Toast)(e.data.message)):void(t.messagelist=e.data.data.messageList);console.log("网络请求错误！")})},e.prototype.goOrderDetail=function(t){console.log("查看详情"),this.$router.push({name:"orderdetail",query:{orderId:t.actionValue}})},e.prototype.goReward=function(){console.log("积分详情"),this.$router.push({name:"my_reward"})},e.prototype.goMember=function(){this.$router.push({name:"my_member"})},e.prototype.mounted=function(){this.getList(),this.unGetList(),this.$emit("selectMenu",{name:"消息通知",url:"/messagelist"})},e=a.b([r()({components:{},mixins:[i.a]})],e)}(s.default),u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",{staticStyle:{padding:"30px"}},t._l(t.messagelist,function(e,a){return o("div",{key:a,staticClass:"flex flex-pack-justify",staticStyle:{padding:"15px 0",cursor:"pointer","border-bottom":"1px dashed #E5E5E5"},on:{click:function(o){t.handleContent(e)}}},[o("div",{style:0==e.status?"font-size: 14px;color:#000":"font-size: 14px;color:#a9a9a9"},[0==e.status?o("span",{staticStyle:{"margin-top":"-2px","margin-right":"8px",display:"inline-block","vertical-align":"middle","background-color":"#FF0506","border-radius":"50px",width:"10px",height:"10px"}}):t._e(),t._v(t._s(e.content)),o("span",{staticStyle:{color:"#FDD273"}},[t._v("查看详情》")])]),t._v(" "),o("div",{staticStyle:{color:"#B4B4B4","font-size":"13px"}},[t._v(t._s(e.updateTime))])])})),t._v(" "),t.total>0?o("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.onPageChange}}):t._e(),t._v(" "),0==t.messagelist.length?o("div",[o("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[t._v("\n            暂无通知\n          ")])]):t._e()],1)},staticRenderFns:[]};var d=o("VU/8")(p,u,!1,function(t){o("3IPY")},"data-v-3a051245",null);e.default=d.exports}});
//# sourceMappingURL=42.3095bf948d7dbba655d3.js.map
webpackJsonp([36],{DwOg:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("TToO"),i=o("7+uW"),n=o("c+8m"),r=o.n(n),a=o("gN+L"),c=o("DZ+H"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.couponId="",e.page="1",e.pageSize="10",e.discList=[],e.get="",e}return s.c(e,t),e.prototype.discountList=function(){var t=this;console.log("进入页面token",this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token),console.log("领券中心id",this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId),i.default.prototype.$reqFormPost1("/coupon/center/list",{token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId},function(e){200==e.returnCode?(t.$Message.success("成功"),t.discList=e.data.couponList):t.$Message.warning(e.message)})},e.prototype.getDiccount=function(t){var e=this;console.log("点击领取",t.id),i.default.prototype.$reqFormPost1("/coupon/user/linkadd",{token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,couponId:t.id},function(t){200==t.returnCode?(e.$Message.success("领取成功"),e.discountList()):e.$Message.warning(t.message)})},e.prototype.mounted=function(){this.discountList()},e=s.b([r()({components:{Swipe:a.a},mixins:[c.a]})],e)}(i.default),p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticStyle:{height:"40px","line-height":"40px",background:"#fbfbfb","border-bottom":"1px solid #e6e6e6","padding-left":"40px"}},[t._v("领卷中心")]),t._v(" "),o("div",{staticClass:"discountBox"},t._l(t.discList,function(e,s){return o("div",{key:s,staticClass:"dis_list"},[o("p",{staticStyle:{"font-size":"18px",color:"#fff"}},[o("span",{staticStyle:{"font-size":"28px",color:"#fff"}},[t._v("\n            "+t._s(e.fullDenomination))]),t._v("元")]),t._v(" "),o("div",{staticClass:"distype",class:e.getStatus?"distypeed":"distype",on:{click:function(o){t.getDiccount(e)}}},[t._v("\n              "+t._s(e.getStatus?"已领取":"领取"))]),t._v(" "),o("div",[o("span",{staticStyle:{"margin-right":"15px",color:"#fff"}},[t._v(t._s(e.couponName))]),t._v(" "),o("i",{staticStyle:{"margin-right":"15px",color:"#fff"}},[t._v(t._s(e.createTime))])]),t._v(" "),o("div",{staticClass:"newtext"},[t._v("新人专享：全场通用;特价商品或其他优惠活动商品不可")])])}))])},staticRenderFns:[]};var d=o("VU/8")(u,p,!1,function(t){o("iDWn")},"data-v-421bfadc",null);e.default=d.exports},iDWn:function(t,e){}});
//# sourceMappingURL=36.49e941f3a7e68e89ab5d.js.map
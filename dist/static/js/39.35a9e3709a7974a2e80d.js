webpackJsonp([39],{DwOg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("TToO"),o=s("7+uW"),n=s("c+8m"),a=s.n(n),r=s("gN+L"),c=s("DZ+H"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.couponId="",e.page="1",e.pageSize="10",e.discList=[],e.get="",e}return i.c(e,t),e.prototype.discountList=function(){var t=this;o.default.prototype.$reqFormPost1("/coupon/center/list",{token:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].token,userId:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].userId},function(e){200==e.returnCode?(t.discList=e.data.couponList,console.log(e.data.couponList)):t.$Message.warning(e.message)})},e.prototype.getDiccount=function(t){var e=this;console.log("点击领取",t.id),o.default.prototype.$reqFormPost1("/coupon/user/linkadd",{token:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].token,userId:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].userId,couponId:t.id},function(t){200==t.returnCode?e.discountList():e.$Message.warning(t.message)})},e.prototype.mounted=function(){this.discountList(),this.$emit("selectMenu",{name:"优惠券",url:"/discount"})},e=i.b([a()({components:{Swipe:r.a},mixins:[c.a]})],e)}(o.default),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{height:"40px","line-height":"40px",background:"#fbfbfb","border-bottom":"1px solid #e6e6e6","padding-left":"40px"}},[t._v("领卷中心")]),t._v(" "),s("div",{staticClass:"discountBox"},t._l(t.discList,function(e,i){return s("div",{key:i,staticClass:"dis_list"},[s("p",{staticStyle:{"font-size":"18px",color:"#fff"}},[s("span",{staticStyle:{"font-size":"28px",color:"#fff"}},[t._v("\n            "+t._s(e.fullDenomination))]),t._v("元")]),t._v(" "),s("div",{staticClass:"distype",class:e.getStatus?"distypeed":"distype",on:{click:function(s){t.getDiccount(e)}}},[t._v("\n              "+t._s(e.getStatus?"已领取":"领取"))]),t._v(" "),s("div",{staticClass:"flex",staticStyle:{"justify-content":"space-between"}},[s("span",{staticStyle:{"margin-right":"5px",color:"#fff","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"}},[t._v("\n                      "+t._s(e.couponName))]),t._v(" "),e.getStatus||"RELATIVE_DATE"!=e.validityType?s("div",[s("i",{staticStyle:{color:"#fff"}},[t._v(t._s(e.createTime.split(" ")[0])+" ")]),t._v(" "),s("i",{staticStyle:{color:"#fff"}},[t._v("- "+t._s(e.endDate.split(" ")[0]))])]):s("div",{staticClass:"time"},[t._v(t._s(e.days)+"天有效")])]),t._v(" "),s("div",{staticClass:"newtext"},["NEW_USER"==e.conditionType?s("span",[t._v("新人专享;")]):t._e(),t._v(" "),"ALL"==e.rangeType?s("span",[t._v("全场通用;")]):s("span",[t._v(t._s(e.catName)+"类商品适用")]),t._v("\n            特价商品或其他优惠活动商品不可用\n            ")])])}))])},staticRenderFns:[]};var d=s("VU/8")(p,u,!1,function(t){s("Spdw")},"data-v-4d3c3533",null);e.default=d.exports},Spdw:function(t,e){}});
//# sourceMappingURL=39.35a9e3709a7974a2e80d.js.map
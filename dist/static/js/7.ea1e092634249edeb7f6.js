webpackJsonp([7],{"7ZuN":function(t,e){},Ixll:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("TToO"),a=s("7+uW"),r=s("c+8m"),n=s.n(r),o=s("DZ+H"),c=s("ymRw"),l=s("h1Nz"),u=s("au/Y"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.num=1,e.tavkend=!1,e.result=[],e.checked=!1,e}return i.c(e,t),Object.defineProperty(e.prototype,"totalPrice",{get:function(){for(var t=0,e=0;e<this.cartList.length;e++)-1!==this.result.indexOf(this.cartList[e].id)&&(t+=this.cartList[e].price*this.cartList[e].num);return(t=t).toString(),t.toFixed(2)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cartList",{get:function(){var t=this.$refs.wintabe;return this.tavkend?t.cartList:""},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var t=this;this.result.length<=0?Object(c.Toast)("您还没选择商品"):a.default.prototype.$reqFormPost1("/prepare/order/add",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,cartIdList:this.result.join(",")},function(e){if(200!==e.returnCode)return t.$Message.warning(e.message),void console.log("网络请求错误！");t.$store.commit(a.default.prototype.MutationTreeType.PREPAREID,e.data.prepareId),t.$router.push({path:"/settle"})})},e.prototype.changeStatus=function(){this.tavkend=!0},e.prototype.allSelect=function(){if(this.checked){var t=[];this.cartList.forEach(function(e,s){console.log(),t.push(e.id)}),this.result=t}else this.cartList.length==this.result.length&&(this.result=[])},e.prototype.checkchange=function(){this.result.length==this.cartList.length?this.checked=!0:this.checked=!1},e.prototype.deleteCart=function(t,e){var s=this;a.default.prototype.$reqFormPost1("/shop/cart/delete",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,cartIds:this.cartList[t].id},function(t){if(200!==t.returnCode)return s.$Message.warning(t.message),void console.log("网络请求错误！");e||s.$Message.success("已删除"),s.$refs.wintabe.getCartList()})},e.prototype.collect=function(t){var e=this;a.default.prototype.$reqFormPost1("/fav/add",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,goodsId:this.cartList[t].goodsId},function(s){if(200!==s.returnCode)return e.$Message.warning(s.message),void console.log("网络请求错误！");e.deleteCart(t,!0),e.$Message.success("已移至收藏夹")})},e.prototype.pluscart=function(t,e){var s=this;a.default.prototype.$reqFormPost1("/shop/cart/updatenum",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,cartId:t,num:e},function(t){if(200!==t.returnCode)return s.$Message.warning(t.message),void console.log("网络请求错误！");s.$refs.wintabe.getCartList()})},e.prototype.minuscart=function(t,e){var s=this;a.default.prototype.$reqFormPost1("/shop/cart/updatenum",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,cartId:t,num:e},function(t){if(200!==t.returnCode)return s.$Message.warning(t.message),void console.log("网络请求错误！");s.$refs.wintabe.getCartList()})},e.prototype.mounted=function(){""!=this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId&&this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token},e=i.b([n()({components:{Wintabe:l.a,Winbeet:u.a},mixins:[o.a]})],e)}(a.default),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab-contents"},[s("wintabe",{ref:"wintabe",attrs:{table:!0,router:!0},on:{getCartList:t.changeStatus}}),t._v(" "),t._m(0),t._v(" "),s("van-checkbox-group",{on:{change:function(e){t.checkchange()}},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},[s("div",{staticClass:" flex   flex-pack-center "},[s("div",{staticClass:"contentBox1  "},[t._l(t.cartList,function(e,i){return s("div",{staticClass:"cartItem flex  flex-align-center flex-pack-justify"},[s("div",{staticClass:"pointer",staticStyle:{padding:"0 10px"}},[s("van-checkbox",{attrs:{name:e.id}})],1),t._v(" "),s("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{width:"80px",margin:"0 10px 0 0",overflow:"hidden"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsImg.split(",")[0],expression:"item.goodsImg.split(',')[0]"}],staticStyle:{width:"100%",border:"1px solid #EAEAEA"}})]),t._v(" "),s("div",{staticStyle:{overflow:"hidden",width:"200px"}},[s("div",[s("span",{staticClass:"textLabel",staticStyle:{color:"#000000","font-size":"15px"}},[t._v(t._s(e.goodsName))])]),t._v(" "),s("div",{staticClass:"textLabel",staticStyle:{color:"#666"}},[e.skuKeyValue.length>2?s("span",t._l(JSON.parse(e.skuKeyValue),function(i){return s("span",{staticStyle:{"margin-right":"10px"}},[s("span",[t._v(t._s(i.key)+":"+t._s(i.value)+" X "+t._s(e.num))])])})):s("span",[t._v("\n          X "+t._s(e.num)+"\n        ")])])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"20"}},[t._v("￥"+t._s(e.price))])]),t._v(" "),s("div",[s("van-stepper",{staticStyle:{margin:"10px 0px 0px 20px"},on:{plus:function(s){t.pluscart(e.id,e.num)},minus:function(s){t.minuscart(e.id,e.num)}},model:{value:e.num,callback:function(s){t.$set(e,"num",s)},expression:"item.num"}})],1),t._v(" "),s("div",[s("span",{staticClass:"marketPrice",staticStyle:{"font-size":"20"}},[t._v("￥"+t._s((e.price*e.num).toFixed(2)))])]),t._v(" "),s("div",{staticClass:"flex  flex-align-center"},[s("div",{staticStyle:{color:"#F4C542"},on:{click:function(e){t.collect(i)}}},[t._v("移入收藏夹")]),t._v(" "),s("div",{staticClass:"rightborder"}),t._v(" "),s("div",{on:{click:function(e){t.deleteCart(i)}}},[t._v("删除")])])])}),t._v(" "),0==t.cartList.length?s("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{padding:"20px"}},[s("span",{staticStyle:{color:"#F4C542"},on:{click:function(e){t.$router.push("/")}}},[t._v("去逛逛>>")])]):t._e()],2)])]),t._v(" "),t.cartList.length>0?s("div",{staticClass:" flex   flex-pack-center"},[s("div",{staticClass:"btmContent flex  flex-align-center flex-pack-justify"},[s("div",[s("div",{staticClass:"flex flex-align-center flex-pack-center"},[t.cartList.length>0?s("van-checkbox",{staticClass:"pointer",staticStyle:{margin:"15px 15px 15px 25px"},on:{change:t.allSelect},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}):t._e(),t._v(" "),s("div",[t._v("全选")]),t._v(" "),s("div",{staticStyle:{margin:"0 30px"}},[t._v("批量删除")])],1)]),t._v(" "),s("div",{staticClass:"flex  flex-align-center "},[s("div",{staticStyle:{padding:"0 20px"}},[s("span",[t._v("应付总金额：")]),t._v(" "),s("span",{staticStyle:{color:"red","font-size":"18px"}},[t._v("￥"+t._s(t.totalPrice))])]),t._v(" "),s("div",{staticClass:"flex flex-align-center flex-pack-center pointer",staticStyle:{"background-color":"#F4C542","border-color":"#F4C542",color:"#FFFFFF","min-width":"120px",height:"60px","font-size":"16px"},on:{click:t.onSubmit}},[s("span",[t._v("下单")])])])])]):t._e(),t._v(" "),s("winbeet")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:" flex   flex-pack-center "},[s("div",{staticStyle:{width:"60%"}},[s("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{width:"100%","background-color":"#f7f7f7",height:"47px",padding:"0 10px","margin-bottom":"10px"}},[s("div",{staticStyle:{padding:"0 20px"}},[t._v("全选")]),t._v(" "),s("div",{staticStyle:{width:"70px"}},[t._v("商品信息")]),t._v(" "),s("div",{staticStyle:{width:"150px"}}),t._v(" "),s("div",{staticStyle:{margin:"0 20px"}},[t._v("单价")]),t._v(" "),s("div",{staticStyle:{margin:"0 20px"}},[t._v("数量")]),t._v(" "),s("div",{staticStyle:{margin:"0 20px"}},[t._v("小计")]),t._v(" "),s("div",{staticStyle:{margin:"0 20px"}},[t._v("操作")])])])])}]};var f=s("VU/8")(p,d,!1,function(t){s("NInU"),s("7ZuN")},"data-v-b15e22c8",null);e.default=f.exports},NInU:function(t,e){}});
//# sourceMappingURL=7.ea1e092634249edeb7f6.js.map
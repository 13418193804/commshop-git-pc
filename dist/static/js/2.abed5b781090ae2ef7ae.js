webpackJsonp([2,40],{"0lxe":function(t,e){},GHQu:function(t,e){},Q2ye:function(t,e,i){"use strict";var a=i("TToO"),s=i("7+uW"),r=i("c+8m"),o=i.n(r),n=i("DZ+H"),d=i("Fd2+"),l=i("TJML"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ship_model=!1,e.shipInfoList=[],e}return a.c(e,t),e.prototype.getShipInfoList=function(t,e){var i=this;s.default.prototype.$reqFormPost("/transport/info",{com:e,nu:t},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);console.log(e.data.data),console.log(t),i.shipInfoList=e.data.data}else console.log("网络请求错误！")})},e.prototype.mounted=function(){},e=a.b([o()({components:{comhead:l.a},mixins:[n.a]})],e)}(s.default),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ship_model?a("div",{staticStyle:{position:"relative"}},[a("div",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[a("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[a("div",{staticStyle:{"min-height":"300px","background-color":"#fff",width:"780px",padding:"20px","border-radius":"10px",position:"relative"}},[a("div",{staticStyle:{cursor:"pointer",position:"absolute",top:"10px",right:"10px"},on:{click:function(e){t.ship_model=!1}}},[a("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:i("Bvvs")}})]),t._v(" "),a("div",{staticStyle:{"font-size":"16px","text-align":"center","padding-bottom":"10px","border-bottom":"1px solid rgb(221, 221, 221)"}},[t._v("查看物流")]),t._v(" "),a("div",{staticClass:"detailBody"},t._l(t.shipInfoList,function(e){return a("div",[a("div",[t._v(t._s(e.time))]),t._v(" "),a("div",[t._v(t._s(e.context))])])}))])]),t._v(" "),a("div")])]):t._e()},staticRenderFns:[]};var p=i("VU/8")(c,u,!1,function(t){i("dyHO")},"data-v-d0bdbfa6",null);e.a=p.exports},XY0f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("TToO"),s=i("7+uW"),r=i("c+8m"),o=i.n(r),n=i("cKF/"),d=i("OBnJ"),l=i("DZ+H"),c=i("Fd2+"),u=i("Q2ye"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.orderId="",e.detail={},e.orderItem={},e}return a.c(e,t),e.prototype.shipGet=function(){},e.prototype.inputTransNo=function(){console.log("填写单号");var t=this.$refs.logistics;t.wl_model=!0,t.form.refundId=this.detail.detailList[0].refundOrderList[0].refundId},e.prototype.getShip=function(t){var e=this.$refs.ship;e.ship_model=!0,e.getShipInfoList(t.transportNo,t.transportCode),console.log("触发")},e.prototype.formatButtonColor=function(){return"border-color:#ffc630;color:#ffc630"},e.prototype.gocomment=function(){this.$router.push({name:"evaluate",query:{orderId:this.detail.orderId}})},e.prototype.buyAgain=function(){var t=this;s.default.prototype.$reqFormPost("/order/buyagain",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:this.orderId},function(e){if(null!=e)return 200!=e.data.status?(console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(c.b)(e.data.message)):void t.$router.push({name:"cart"});console.log("网络请求错误！")})},e.prototype.recvgoods=function(t,e){var i=this;c.a.confirm({title:"提示",message:"确认收货?"}).then(function(){s.default.prototype.$reqFormPost("/order/recvgoods",{userId:i.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:i.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:t},function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(c.b)(t.data.message);i.$router.push({name:"orderlist"}),s.default.prototype.$confirmLogin({name:"orderlist",query:{orderStatus:"ORDER_WAIT_REVIEW"}}),i.queryDetail()}else console.log("网络请求错误！")})}).catch(function(){})},e.prototype.formatStatus=function(t){switch(t){case"ORDER_WAIT_PAY":return"未付款";case"ORDER_CANCEL_PAY":return"已取消";case"ORDER_WAIT_SENDGOODS":return"未发货";case"ORDER_WAIT_RECVGOODS":return"未收货";case"ORDER_END_GOODS":return"已评论";case"ORDER_WAIT_REVIEW":return"待评价";case"ORDER_FINISH":return"交易完成"}},e.prototype.formatStatusColor=function(t){switch(t){case"ORDER_WAIT_SENDGOODS":case"ORDER_WAIT_RECVGOODS":case"ORDER_CANCEL_PAY":case"ORDER_WAIT_PAY":return"color:red";case"ORDER_END_GOODS":case"ORDER_WAIT_REVIEW":return"color:#ffc630";case"ORDER_FINISH":return"color:#ffc630;"}},e.prototype.doCancel=function(){var t=this;c.a.confirm({title:"提示",message:"是否取消订单?"}).then(function(){s.default.prototype.$reqFormPost("/order/cancel",{userId:t.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:t.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:t.detail.orderId},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(c.b)(e.data.message);t.queryDetail(),console.log("取消订单")}else console.log("网络请求错误！")})}).catch(function(){})},e.prototype.cancelRefund=function(){var t=this;c.a.confirm({title:"提示",message:"是否取消申请退款?"}).then(function(){s.default.prototype.$reqFormPost("/order/refund/delete",{userId:t.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:t.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,refundId:t.detail.detailList[0].refundOrderList[0].refundId},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(c.b)(e.data.message);Object(c.b)("取消成功"),t.queryDetail()}else console.log("网络请求错误！")})}).catch(function(){}),console.log("取消退款")},e.prototype.queryDetail=function(){var t=this;s.default.prototype.$reqFormPost("/order/queryorderdetail",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:this.orderId},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(c.b)(e.data.message);t.detail=e.data.data,console.log(e.data.data)}else console.log("网络请求错误！")})},e.prototype.doRefund=function(){this.orderItem=this.detail,this.$refs.reimburse.model=!0},e.prototype.payOrder=function(){this.$router.push({name:"pay",query:{body:this.detail.orderTitle,payId:this.detail.payNo,payTotal:this.detail.payTotal,createTime:this.detail.createTime},params:{}})},e.prototype.mounted=function(){this.orderId=this.$route.query.orderId,this.queryDetail()},e=a.b([o()({components:{logistics:n.default,reimburse:d.default,ship:u.a},mixins:[l.a]})],e)}(s.default),f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab-contents",staticStyle:{"margin-bottom":"100px"}},[i("div",{staticStyle:{border:"1px #e5e5e5 solid"}},[i("div",{staticClass:"flex flex-align-center",staticStyle:{"background-color":"#f7f7f7",padding:"10px","font-size":"14.8px"}},[i("span",{staticStyle:{"margin-right":"30px"}},[t._v("下单时间："+t._s(t.detail.createTime))]),t._v(" "),i("span",[t._v("订单号："+t._s(t.detail.orderId))])]),t._v(" "),i("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"10px"}},[i("div",{staticStyle:{flex:"1"}},[i("div",{staticClass:"flex flex-pack-justify",staticStyle:{"font-size":"16px"}}),t._v(" "),i("div",{staticStyle:{padding:"5px","font-size":"14px"}},[i("div",{staticClass:"lineTwo flex flex-align-center xuxian"},[i("div",{staticStyle:{width:"95px"}},[t._v(" 收货人：")]),i("div",[t._v(t._s(t.detail.contactName))])]),t._v(" "),i("div",{staticClass:"lineTwo flex flex-align-center xuxian"},[i("div",{staticStyle:{width:"95px"}},[t._v(" 联系方式：")]),i("div",[t._v(t._s(t.detail.contactPhone))])]),t._v(" "),i("div",{staticClass:"lineTwo flex flex-align-center xuxian"},[i("div",{staticStyle:{width:"95px"}},[t._v(" 收货地址：")]),i("div",[t._v(t._s(t.detail.provinceName)+t._s(t.detail.cityName)+t._s(t.detail.countryName)+t._s(t.detail.address))])])])])])]),t._v(" "),i("div",{staticStyle:{border:"1px #e5e5e5 solid","margin-top":"20px"}},[i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{"background-color":"#f7f7f7",padding:"10px","font-size":"16px"}},[i("div",[i("span",{style:t.formatStatusColor(t.detail.orderStatus)},[t._v(t._s(t.formatStatus(t.detail.orderStatus)))])]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-end-justify",staticStyle:{margin:"0 0 0 10px"}},["ORDER_WAIT_PAY"===t.detail.orderStatus?i("div",{staticClass:"settingBody"},[i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},attrs:{size:"small"},on:{click:function(e){t.doCancel()}}},[t._v("取消订单")]),t._v(" "),i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.payOrder()}}},[t._v("支付订单")])],1):t._e(),t._v(" "),"ORDER_WAIT_SENDGOODS"===t.detail.orderStatus?i("div",{staticClass:"settingBody"},["APPLY_REFUND"==t.detail.detailList[0].refundStatus&&"FAIL_REFUND"!==t.detail.detailList[0].refundStatus?i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.cancelRefund()}}},[t._v("取消退款")]):t._e(),t._v(" "),"WITHOUT_REFUND"==t.detail.detailList[0].refundStatus||"FAIL_REFUND"==t.detail.detailList[0].refundStatus?i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.doRefund()}}},[t._v("申请退款")]):t._e()],1):t._e(),t._v(" "),"ORDER_WAIT_RECVGOODS"===t.detail.orderStatus?i("div",{staticClass:"settingBody"},["WITHOUT_REFUND"==t.detail.detailList[0].refundStatus||"FAIL_REFUND"==t.detail.detailList[0].refundStatus?i("div",[i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.getShip(t.item)}}},[t._v("查看物流")]),t._v(" "),i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.doRefund(t.item)}}},[t._v("退货/退款")]),t._v(" "),i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.recvgoods(t.detail.orderId,t.detail)}}},[t._v("确认收货")])],1):t._e(),t._v(" "),"APPLY_REFUND"==t.detail.detailList[0].refundStatus&&"FAIL_REFUND"!==t.detail.detailList[0].refundStatus?i("div",["APPLY_REFUND"==t.detail.detailList[0].refundStatus&&"FAIL_REFUND"!==t.detail.detailList[0].refundStatus?i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.cancelRefund()}}},[t._v("取消退款")]):t._e()],1):t._e()]):t._e(),t._v(" "),"ORDER_CANCEL_PAY"===t.detail.orderStatus?i("div",{staticClass:"settingBody"},[i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.buyAgain()}}},[t._v("再次购买")])],1):t._e(),t._v(" "),"ORDER_WAIT_REVIEW"===t.detail.orderStatus||"ORDER_FINISH"===t.detail.orderStatus?i("div",{staticClass:"settingBody"},["WITHOUT_REFUND"==t.detail.detailList[0].refundStatus||"FAIL_REFUND"==t.detail.detailList[0].refundStatus?i("div",[i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.buyAgain(t.detail.orderId)}}},[t._v("再次购买")]),t._v(" "),"ORDER_WAIT_REVIEW"===t.detail.orderStatus?i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.doRefund(t.item)}}},[t._v("退换/售后")]):t._e(),t._v(" "),"ORDER_WAIT_REVIEW"===t.detail.orderStatus?i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.gocomment()}}},[t._v("评价商品")]):t._e()],1):t._e(),t._v(" "),"APPLY_REFUND"==t.detail.detailList[0].refundStatus&&"FAIL_REFUND"!==t.detail.detailList[0].refundStatus?i("div",["APPLY_REFUND"==t.detail.detailList[0].refundStatus&&"FAIL_REFUND"!==t.detail.detailList[0].refundStatus?i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.cancelRefund()}}},[t._v("取消退款")]):t._e()],1):t._e()]):t._e(),t._v(" "),"ORDER_END_GOODS"===t.detail.orderStatus?i("div",{staticClass:"settingBody"},["WITHOUT_REFUND"==t.detail.detailList[0].refundStatus||"FAIL_REFUND"==t.detail.detailList[0].refundStatus?i("div",[i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.doRefund()}}},[t._v("退换/售后")]),t._v(" "),i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){e.stopPropagation(),t.getShip(t.item)}}},[t._v("查看物流")])],1):t._e(),t._v(" "),"APPLY_REFUND"==t.detail.detailList[0].refundStatus&&"FAIL_REFUND"!==t.detail.detailList[0].refundStatus?i("div",["APPLY_REFUND"==t.detail.detailList[0].refundStatus&&"FAIL_REFUND"!==t.detail.detailList[0].refundStatus?i("van-button",{staticStyle:{"margin-right":"10px",cursor:"pointer"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.cancelRefund()}}},[t._v("取消退款")]):t._e()],1):t._e()]):t._e()])]),t._v(" "),i("div",[t._m(0),t._v(" "),t._l(t.detail.detailList,function(e,a){return i("div",{key:a},[i("div",{staticClass:"flex  flex-align-center flex-pack-justify",staticStyle:{padding:"15px 0",margin:"0 20px","border-bottom":"1px #e5e5e5 solid"}},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{width:"80px",margin:"0 10px 0 20px",overflow:"hidden"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsImg.split(",")[0],expression:"item.goodsImg.split(',')[0]"}],staticStyle:{width:"100%",border:"1px solid #EAEAEA"}})]),t._v(" "),i("div",{staticStyle:{overflow:"hidden",width:"230px"}},[i("div",[i("span",{staticClass:"textLabel",staticStyle:{color:"#000000","font-size":"15px"}},[t._v(t._s(e.goodsName))])]),t._v(" "),i("div",{staticClass:"textLabel",staticStyle:{color:"#666"}},[e.skuKeyValue.length>2?i("span",t._l(JSON.parse(e.skuKeyValue),function(a){return i("span",{staticStyle:{"margin-right":"10px"}},[i("span",[t._v(t._s(a.key)+":"+t._s(a.value)+" X "+t._s(e.goodsNum))])])})):i("span",[t._v("\n          X "+t._s(e.goodsNum)+"\n        ")])])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20"}},[t._v("￥"+t._s(e.goodsPrice))])]),t._v(" "),i("div",{},[t._v("\n  "+t._s(e.goodsNum)+"\n")]),t._v(" "),i("div",[i("span",{staticClass:"marketPrice",staticStyle:{"font-size":"20"}},[t._v("￥"+t._s((e.goodsPrice*e.goodsNum).toFixed(2)))])])])])})],2),t._v(" "),i("div",{staticStyle:{"background-color":"#F8F8F8","font-size":"15px","margin-top":"20px"}},[i("div",{staticClass:"flex flex-pack-justify",staticStyle:{"margin-left":"10px",padding:"5px 10px"}},[i("div",[t._v("商品合计：")]),t._v(" "),i("div",{staticStyle:{"margin-right":"10px"}},[t._v("￥"+t._s(t.detail.goodsPrice.toFixed(2)))])]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify",staticStyle:{"margin-left":"10px",padding:"5px 10px"}},[i("div",[t._v("运费：")]),t._v(" "),i("div",{staticStyle:{"margin-right":"10px"}},[t._v("￥"+t._s(t.detail.transportPrice.toFixed(2)))])]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify",staticStyle:{margin:"0 0 0 10px",padding:"5px 10px"}},[i("div",[t._v("总计：")]),t._v(" "),i("div",{staticClass:"marketPrice",staticStyle:{"margin-right":"10px"}},[t._v("￥"+t._s(t.detail.orderTotalPrice.toFixed(2)))])])])]),t._v(" "),i("div",{staticStyle:{padding:"10px",border:"1px solid #e5e5e5",margin:"20px 0","line-height":"24px",color:"#999","font-size":"14px"}},[t.detail.payTime?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right"}},[t._v(" 支付时间：")]),t._v(t._s(t.detail.payTime)+"\n    ")]):t._e(),t._v(" "),t.detail.shipTime?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right"}},[t._v(" 发货时间：")]),t._v(t._s(t.detail.shipTime)+"\n    ")]):t._e(),t._v(" "),t.detail.detailList[0].refundOrderList[0]?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right"}},[t._v(" 申请退款时间：")]),t._v(t._s(t.detail.detailList[0].refundOrderList[0].createTime)+"\n    ")]):t._e(),t._v(" "),"FAIL_REFUND"===t.detail.detailList[0].refundStatus?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right"}},[t._v(" 拒绝退款时间：")]),t._v(t._s(t.detail.detailList[0].refundOrderList[0].updateTime)+"\n    ")]):t._e(),t._v(" "),"FAIL_REFUND"==t.detail.detailList[0].refundStatus?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right"}},[t._v(" 退回原因：")]),t._v(t._s(t.detail.detailList[0].refundOrderList[0].merchantRemark)+"\n    ")]):t._e(),t._v(" "),t.detail.detailList[0].refundOrderList[0]?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right"}},[t._v(" 售后类型：")]),t._v(t._s("REFUND"==t.detail.detailList[0].refundOrderList[0].refundType?"退款":"退货/退款")+" \n    ")]):t._e(),t._v(" "),t.detail.detailList[0].refundOrderList[0]?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right"}},[t._v(" 售后原因：")]),t._v(" "+t._s(t.detail.detailList[0].refundOrderList[0].refundReason)+"\n    ")]):t._e(),t._v(" "),t.detail.detailList[0].refundOrderList[0]?i("div",[i("div",{staticClass:"flex"},t._l(t.detail.detailList[0].refundOrderList[0].refundImg?t.detail.detailList[0].refundOrderList[0].refundImg.split(","):[],function(t){return i("div",[i("img",{staticStyle:{width:"80px",height:"80px",padding:"10px"},attrs:{src:t}})])})),t._v(" "),"WAIT_GOODS_BACK"==t.detail.detailList[0].refundStatus||"WAIT_RECVGOODS"==t.detail.detailList[0].refundStatus?i("div",[t._m(1),t._v(" "),i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right","padding-right":"10px"}},[t._v(" "+t._s(t.detail.detailList[0].refundOrderList[0].contactName))]),t._v(t._s(t.detail.detailList[0].refundOrderList[0].contactMobile)+"\n    ")]),t._v(" "),i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[t._m(2),t._v(" "),i("div",{staticClass:"lineTwo"},[t._v(t._s(t.detail.detailList[0].refundOrderList[0].provinceName)+t._s(t.detail.detailList[0].refundOrderList[0].cityName)+t._s(t.detail.detailList[0].refundOrderList[0].countryName)+t._s(t.detail.detailList[0].refundOrderList[0].address))])]),t._v(" "),"WAIT_GOODS_BACK"==t.detail.detailList[0].refundStatus||"WAIT_RECVGOODS"==t.detail.detailList[0].refundStatus?i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right","line-height":"45px"}},[t._v(" 物流单号：")]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{width:"100%"}},[i("div",[t.detail.detailList[0].refundOrderList[0].transNo?i("span",{staticStyle:{color:"#999"}},[t._v(t._s(t.detail.detailList[0].refundOrderList[0].transNo))]):i("span",[t._v("未填写")])]),t._v(" "),t.detail.detailList[0].refundOrderList[0].transNo?t._e():i("van-button",{style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(e){t.inputTransNo()}}},[t._v("填写")])],1)]):t._e()]):t._e()]):t._e(),t._v(" "),i("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[i("div",{staticStyle:{width:"115px","text-align":"right","line-height":"45px"}},[t._v(" 服务时间：")]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{width:"100%"}},[i("div",[t._v("9:00 - 22:00 ")]),t._v(" "),i("van-button",{staticStyle:{cursor:"pointer"},attrs:{size:"small",onclick:"showMeiQia()"}},[t._v("联系客服")])],1)])]),t._v(" "),i("logistics",{ref:"logistics",attrs:{orderItem:t.orderItem},on:{queryDetail:function(e){t.queryDetail()}}}),t._v(" "),i("reimburse",{ref:"reimburse",attrs:{orderItem:t.orderItem},on:{getList:function(e){t.queryDetail()}}}),t._v(" "),i("ship",{ref:"ship"})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{width:"-webkit-fill-available",height:"47px","border-bottom":"1px #e5e5e5 solid",margin:"0 20px 0","border-bottomd":"1px solid #e5e5e5"}},[i("div",{staticStyle:{width:"70px","margin-left":"40px"}},[t._v("商品信息")]),t._v(" "),i("div",{staticStyle:{width:"315px"}}),t._v(" "),i("div",{staticStyle:{margin:"0 20px"}},[t._v("单价")]),t._v(" "),i("div",{staticStyle:{margin:"0 20px"}},[t._v("数量")]),t._v(" "),i("div",{staticStyle:{margin:"0 20px"}},[t._v("小计")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex",staticStyle:{"border-bottom":"1px #eee dashed",margin:"10px 0",padding:"10px 0"}},[e("div",{staticStyle:{"margin-left":"10px"}},[this._v(" 请在七天内将商品寄回一下地址并填写物流单号：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"115px","text-align":"right"}},[e("i",{staticClass:"iconfont icon-location",staticStyle:{"margin-right":"10px","font-size":"22px"}})])}]};var v=i("VU/8")(p,f,!1,function(t){i("GHQu")},"data-v-212f3fb5",null);e.default=v.exports},"cKF/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("TToO"),s=i("7+uW"),r=i("c+8m"),o=i.n(r),n=i("DZ+H"),d=i("Fd2+"),l=i("TJML"),c=function(){return function(){}}(),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.form=new c,e.wl_model=!1,e.tranSportList=[],e}return a.c(e,t),e.prototype.mounted=function(){this.getTranSportList(),console.log("支付成功",this.$route.query.refundId)},e.prototype.save=function(){var t=this;console.log(this.form),""!=(this.form.transNo||"")?this.form.item?(this.form.transName=this.form.item.transportName,this.form.transCode=this.form.item.transportId,s.default.prototype.$reqFormPost("/order/refund/salesreturn",Object.assign({userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,refundId:this.form.refundId,transNo:this.form.transNo,transName:this.form.transName,transCode:this.form.transCode},this.form),function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);t.wl_model=!1,t.$emit("queryDetail")}else console.log("网络请求错误！")})):this.$Message.warning("请选择快递公司"):this.$Message.warning("请填写单号")},e.prototype.getTranSportList=function(){var t=this;s.default.prototype.$reqFormPost("/transport/cominfo",{},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);t.tranSportList=e.data.data,console.log("物流信息",e.data.data)}else console.log("网络请求错误！")})},e.prototype.handlePX=function(t,e){return t+":"+this.$store.getters[s.default.prototype.MutationTreeType.SYSTEM].availWidth/750*e+"px;"},e=a.b([o()({components:{comhead:l.a},mixins:[n.a]})],e)}(s.default),p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.wl_model?a("div",{staticStyle:{position:"relative"}},[a("div",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[a("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[a("div",{staticClass:"flex flex-around-justify flex-align-center flex-v",staticStyle:{"background-color":"#fff",width:"550px",padding:"20px","border-radius":"10px",position:"relative"}},[a("div",{staticStyle:{position:"absolute",top:"10px",right:"10px"},on:{click:function(e){t.wl_model=!1}}},[a("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:i("Bvvs")}})]),t._v(" "),a("div",{staticStyle:{padding:"10px","font-size":"14px"}},[t._v("物流单号填写")]),t._v(" "),a("div",{staticClass:"tc_select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.item,expression:"form.item"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"item",e.target.multiple?i:i[0])}}},t._l(t.tranSportList,function(t,e){return a("option",{key:e,attrs:{label:t.transportName},domProps:{value:t}})}))]),t._v(" "),a("div",{staticClass:"tc_select"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.transNo,expression:"form.transNo"}],staticClass:"login-input",attrs:{type:"text",placeholder:"请输入物流单号"},domProps:{value:t.form.transNo},on:{input:function(e){e.target.composing||t.$set(t.form,"transNo",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"flex",staticStyle:{"margin-top":"10px"}},[a("div",{staticStyle:{width:"150px",height:"50px","background-color":"#FCCB52",color:"#fff","text-align":"center","line-height":"50px","margin-right":"10px"},attrs:{rightTitle:"提交"},on:{click:function(e){t.save()}}},[t._v("确定")]),t._v(" "),a("div",{staticStyle:{width:"150px",height:"50px",border:"1px solid #FCCB52",color:"#FCCB52","text-align":"center","line-height":"50px"},on:{click:function(e){t.wl_model=!1}}},[t._v("取消")])])])])])]):t._e()},staticRenderFns:[]};var f=i("VU/8")(u,p,!1,function(t){i("0lxe")},"data-v-2d5a7abe",null);e.default=f.exports},dyHO:function(t,e){}});
//# sourceMappingURL=2.abed5b781090ae2ef7ae.js.map
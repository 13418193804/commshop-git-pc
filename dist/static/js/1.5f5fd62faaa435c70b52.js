webpackJsonp([1],{"6taJ":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("TToO"),i=r("7+uW"),s=r("c+8m"),a=r.n(s),n=r("DZ+H"),d=r("Fd2+"),l=r("h1Nz"),u=r("au/Y"),c=r("OBnJ"),p=r("TJML"),g=r("443i"),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.reim_model=!1,e.detail="",e.refundObj={refundType:"REFUND",refundImgs:[],reason:""},e.orderId="",e.money="",e}return o.c(e,t),e.prototype.changerefundType=function(t){this.refundObj.refundType=t,console.log("退款类型",this.refundObj.refundType)},e.prototype.handleBackGround=function(t){return"background-image:url('"+t+"');\n            background-repeat:no-repeat;\n            backgroundPosition:center centert;\n            backgroundSize:contain;"},e.prototype.doRefund=function(){var t=this;console.log(this.refundObj.refundImgs.join(","));var e="/order/refund/apply",r=Object.assign({refundImgs:this.refundObj.refundImgs.join(","),userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:this.orderItem.orderId,money:this.orderItem.payTotal},this.refundObj);"FAIL_REFUND"==this.orderItem.detailList[0].refundStatus&&(e="/order/refund/reapply",r=Object.assign({refundImgs:this.refundObj.refundImgs.join(","),userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,refundId:this.orderItem.detailList[0].refundOrderList[0].refundId,money:this.orderItem.payTotal},this.refundObj)),i.default.prototype.$reqFormPost(e,r,function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);t.reim_model=!1,t.$Message.success("申请成功"),t.$emit("getList"),t.refundObj={refundType:"REFUND",refundImgs:[],reason:""}}else console.log("网络请求错误！")})},e.prototype.removeByValue=function(t,e){for(var r=0;r<t.length;r++)if(t[r]==e){t.splice(r,1);break}},e.prototype.onRead=function(t){var e=this;console.log();var r=new FormData;r.append("file",t.file),i.default.prototype.$reqFormUpload("/fileupload",r,function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(d.b)(t.data.message);var r=e.refundObj.refundImgs?e.refundObj.refundImgs:[];r.push(t.data.data.filename),e.refundObj.refundImgs=r,console.log("文件上传",t.data.data.filename)}else console.log("网络请求错误！")})},e.prototype.formatStatus=function(t){switch(t){case"ORDER_WAIT_PAY":return"未付款";case"ORDER_CANCEL_PAY":return"已取消";case"ORDER_WAIT_SENDGOODS":return"未发货";case"ORDER_WAIT_RECVGOODS":return"未收货";case"ORDER_END_GOODS":return"交易结束";case"ORDER_WAIT_REVIEW":return"交易完成"}},e.prototype.queryDetail=function(){var t=this;i.default.prototype.$reqFormPost("/order/queryorderdetail",{userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:this.orderId,money:this.money},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);t.detail=e.data.data,console.log(e.data.data)}else console.log("网络请求错误！")})},e.prototype.formatStatusColor=function(t){switch(t){case"ORDER_WAIT_SENDGOODS":case"ORDER_WAIT_RECVGOODS":case"ORDER_CANCEL_PAY":case"ORDER_WAIT_PAY":return"color:red";case"ORDER_WAIT_REVIEW":return"color:#ffc630";case"ORDER_FINISH":return"color:#ffc630;"}},e.prototype.mounted=function(){},o.b([Object(g.a)({required:!1})],e.prototype,"orderItem",void 0),e=o.b([a()({components:{comhead:p.a},mixins:[n.a]})],e)}(i.default),v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.reim_model?o("div",{staticStyle:{position:"relative"}},[o("div",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[o("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[o("div",{staticStyle:{"background-color":"#fff",width:"780px",padding:"20px","border-radius":"10px",position:"relative"}},[o("div",{staticStyle:{position:"absolute",top:"10px",right:"10px"},on:{click:function(e){t.reim_model=!1}}},[o("img",{staticStyle:{width:"20px",height:"20px",cursor:"pointer"},attrs:{src:r("Bvvs")}})]),t._v(" "),o("div",{staticClass:"flex btn_refund"},[o("div",[t._v("售后类型")]),t._v(" "),o("button",{staticClass:"selectBox",class:"REFUND"==t.refundObj.refundType?"selectType":"",on:{click:function(e){t.changerefundType("REFUND")}}},[t._v("未收到货,只退款")]),t._v(" "),o("button",{staticClass:"selectBox",class:"GOODS_RETURN"==t.refundObj.refundType?"selectType":"",on:{click:function(e){t.changerefundType("GOODS_RETURN")}}},[t._v("退货退款")])]),t._v(" "),o("div",{staticStyle:{width:"100%",border:"1px #e5e5e5 solid",margin:"10px","border-radius":"8px"}},[o("div",{staticStyle:{width:"100%","border-bottom":"1px #e5e5e5 solid",height:"43px","line-height":"43px",padding:"0 10px"}},[t._v("\n              提示：快递到达后请拒收快递，否则退款将被拒绝\n            ")]),t._v(" "),o("div",{staticStyle:{padding:"5px"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.refundObj.reason,expression:"refundObj.reason"}],staticStyle:{"vertical-align":"top",width:"100%",border:"none"},attrs:{placeholder:"请填写申请理由",type:"text",name:"content",rows:"9"},domProps:{value:t.refundObj.reason},on:{input:function(e){e.target.composing||t.$set(t.refundObj,"reason",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"flex",staticStyle:{margin:"10px"}},[o("div",{staticClass:"el-upload--picture-card"},[o("van-uploader",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{width:"100%",height:"100%"},attrs:{"after-read":t.onRead,accept:"image/jpg,image/png, image/jpeg"}},[o("van-icon",{attrs:{name:"photograph"}})],1)],1),t._v(" "),t._l(t.refundObj.refundImgs,function(e,i){return o("div",{key:i,staticClass:"el-upload--picture-card",staticStyle:{position:"relative"},style:t.handleBackGround(e)},[o("i",[o("img",{staticStyle:{color:"#000",position:"absolute",right:"-8px",width:"23px",height:"23px",top:"-8px"},attrs:{src:r("zZRa")},on:{click:function(r){t.removeByValue(t.refundObj.refundImgs,e)}}})])])})],2),t._v(" "),o("div",{staticStyle:{margin:"10px"}},[o("van-button",{staticStyle:{cursor:"pointer",width:"150px",height:"45px","background-color":"#FCCB52",color:"#fff","text-align":"center","line-height":"45px","margin-right":"10px"},attrs:{size:"large"},on:{click:function(e){t.doRefund()}}},[t._v("提交")])],1)])])])]):t._e()},staticRenderFns:[]};var y=r("VU/8")(f,v,!1,function(t){r("kDSA")},"data-v-cfed985c",null).exports,h=r("Q2ye"),A=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.deleteshow=!1,e.loading=!1,e.finished=!1,e.orderItem={},e.orderId="",e.orderList={orderList:{orderList:[],pageSize:10,loading:!0},orderList_pay:{orderList:[],pageSize:10,loading:!0},orderList_send:{orderList:[],pageSize:10,loading:!0},orderList_reacv:{orderList:[],pageSize:10,loading:!0},orderList_finish:{orderList:[],pageSize:10,loading:!0},orderList_refund:{orderList:[],pageSize:10,loading:!0}},e.active=0,e.currendDeleteOrderId="",e.orderTitleList=[{name:"全部",status:""},{name:"待付款",status:"ORDER_WAIT_PAY"},{name:"待发货",status:"ORDER_WAIT_SENDGOODS"},{name:"待收货",status:"ORDER_WAIT_RECVGOODS"},{name:"待评价",status:"ORDER_WAIT_REVIEW"},{name:"退换/售后",status:"REFUND"}],e.Pageindex=0,e}return o.c(e,t),e.prototype.goRefund=function(t){this.orderItem=t,this.$refs.reimburse.model=!0},e.prototype.getList=function(){this.getOrderList(this.orderTitleList[this.active].status,!0)},e.prototype.onLoad=function(){setTimeout(function(){},500)},e.prototype.doDleterShow=function(t){this.currendDeleteOrderId=t,this.deleteshow=!this.deleteshow},e.prototype.doDeleteOrder=function(t){var e=this;this.deleteshow=!this.deleteshow,console.log(this.orderId),i.default.prototype.$reqFormPost("/order/delete",{userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:this.currendDeleteOrderId},function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(d.b)(t.data.message);console.log("订单信息",t.data),e.getOrderList(e.orderTitleList[e.active].status,!0)}else console.log("网络请求错误！")})},e.prototype.payOrder=function(t){this.$router.push({name:"pay",query:{body:t.orderTitle,payId:t.payNo,payTotal:t.payTotal,createTime:t.createTime},params:{}})},e.prototype.loadMore=function(){var t=this;this.loading=!0;setTimeout(function(){t.orderList[t.returnKey()].pageSize+=10,t.getOrderList(t.orderTitleList[t.active].status)},1e3)},e.prototype.doCancel=function(t){var e=this;i.default.prototype.$reqFormPost("/order/cancel",{userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:t.orderId},function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(d.b)(t.data.message);e.getOrderList(e.orderTitleList[e.active].status,!0),console.log("取消订单")}else console.log("网络请求错误！")})},e.prototype.formatStatusColor=function(t){switch(t){case"ORDER_WAIT_SENDGOODS":case"ORDER_WAIT_RECVGOODS":case"ORDER_CANCEL_PAY":case"ORDER_WAIT_PAY":return"color:red";case"ORDER_WAIT_REVIEW":return"color:#ffc630";case"ORDER_FINISH":return"color:#ffc630;";case"ORDER_END_GOODS":return"color:#ffc630"}},e.prototype.getShip=function(t){var e=this.$refs.ship;e.ship_model=!0,e.getShipInfoList(t.transportNo,t.transportCode)},e.prototype.doRefund=function(t){this.orderItem=t,this.$refs.reimburseTwo.reim_model=!0},e.prototype.buyAgain=function(t){var e=this;i.default.prototype.$reqFormPost("/order/buyagain",{userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:t},function(t){if(null!=t)return 200!=t.data.status?(console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(d.b)(t.data.message)):void e.$router.push({name:"cart"});console.log("网络请求错误！")})},e.prototype.recvgoods=function(t){var e=this;d.a.confirm({title:"提示",message:"确认收货?"}).then(function(){i.default.prototype.$reqFormPost("/order/recvgoods",{userId:e.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:e.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:t},function(t){if(null!=t)return 200!=t.data.status?(console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),Object(d.b)(t.data.message),void console.log("订单单号",t.data)):void e.changePage(4);console.log("网络请求错误！")})}).catch(function(){})},e.prototype.formatButtonColor=function(){return"border-color:#ffc630;color:#000"},e.prototype.formatStatus=function(t){switch(t){case"ORDER_WAIT_PAY":return"未付款";case"ORDER_CANCEL_PAY":return"已取消";case"ORDER_WAIT_SENDGOODS":return"未发货";case"ORDER_WAIT_RECVGOODS":return"未收货";case"ORDER_END_GOODS":return"已评论";case"ORDER_WAIT_REVIEW":return"待评价";case"ORDER_FINISH":return"交易完成"}},e.prototype.returnKey=function(){switch(this.active){case 0:return"orderList";case 1:return"orderList_pay";case 2:return"orderList_send";case 3:return"orderList_reacv";case 4:return"orderList_finish";case 5:return"orderList_refund"}},e.prototype.getOrderList=function(t,e){var r=this;void 0===e&&(e=!1);var o=this.returnKey();i.default.prototype.$reqFormPost("REFUND"!=t?"/order/queryorder":"/refund/order/query",{userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,orderStatus:t,page:0,pageSize:this.orderList[o].pageSize},function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(d.b)(t.data.message);(r.orderList[o].loading||e)&&(r.orderList[o].orderList=t.data.data.orderList,t.data.data.orderList.length!=r.orderList[o].pageSize&&(r.orderList[o].loading=!1)),r.orderList[o].orderList=r.orderList[o].orderList.filter(function(t,e){return 0!==t.detailList.length}),console.log(r.orderList[o].orderList)}else console.log("网络请求错误！")})},e.prototype.removeByValue=function(t,e){for(var r=0;r<t.length;r++)if(t[r]==e){t.splice(r,1);break}},e.prototype.goDetail=function(t){this.$router.push({name:"orderdetail",query:{orderId:t.orderId}})},e.prototype.gocomment=function(t){this.$router.push({name:"evaluate",query:{orderId:t.orderId}})},e.prototype.changePage=function(t){this.active=t,this.Pageindex=t,this.getOrderList(this.orderTitleList[t].status,!0)},e.prototype.mounted=function(){var t=this;this.$emit("selectMenu",{name:"我的订单",url:"/orderlist"}),this.orderTitleList.forEach(function(e,r){if(t.$route.query.orderStatus==e.status)return t.active=r,void(t.Pageindex=r)}),"ORDER_WAIT_SENDGOODS"==this.$route.query.orderStatus?this.changePage(2):this.getOrderList(this.orderTitleList[this.active].status)},e=o.b([a()({components:{Wintabe:l.a,Winbeet:u.a,reimburse:c.default,reimburseTwo:y,ship:h.a},mixins:[n.a]})],e)}(i.default),m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-contents"},[o("div",{staticClass:"flex",staticStyle:{"background-color":"#FBFBFB",border:"1px solid #e5e5e5"}},t._l(t.orderTitleList,function(e,r){return o("div",{staticClass:"flex-1",staticStyle:{height:"37px","line-height":"37px","text-align":"center",cursor:"pointer"},style:t.active==r?"background-color:#E1E1E1":"",on:{click:function(e){t.changePage(r)}}},[o("span",[t._v(" "+t._s(e.name))])])})),t._v(" "),t.active==t.Pageindex&&t.orderList[t.returnKey()].orderList.length>0?o("div",t._l(t.orderList[t.returnKey()].orderList,function(e,r){return o("div",{key:r,staticStyle:{border:"1px #e5e5e5 solid","margin-top":"20px"},on:{click:function(r){t.goDetail(e)}}},[o("div",{staticClass:"orderTitle textLabel  flex   flex-pack-justify"},[o("div",{staticStyle:{"padding-left":"10px"}},[o("span",{staticStyle:{"margin-right":"30px"}},[t._v("  下单时间:"+t._s(e.createTime))]),t._v(" "),o("span",[t._v("  订单号:"+t._s(e.orderId))])]),t._v(" "),"ORDER_WAIT_PAY"===e.orderStatus?o("div",{staticClass:"buyBtn",on:{click:function(r){r.stopPropagation(),t.payOrder(e)}}},[t._v("去付款")]):t._e(),t._v(" "),o("div",{staticClass:"flex flex-align-center"},["0"!=t.active||"ORDER_FINISH"!==e.orderStatus&&"ORDER_CANCEL_PAY"!=e.orderStatus||"WITHOUT_REFUND"!=e.detailList[0].refundStatus&&"SUCCEED_REFUND"!=e.detailList[0].refundStatus?o("div",{staticStyle:{width:"10px"}}):o("div",{staticStyle:{padding:"0 15px",position:"relative",cursor:"pointer"},on:{click:function(r){r.stopPropagation(),t.doDleterShow(e.orderId)}}},[o("div",{staticClass:"deleteBorder"}),t._v(" "),o("i",{staticClass:"iconfont icon-iconfontshanchu3"})])])]),t._v(" "),o("div",{staticClass:"detailBody"},t._l(e.detailList,function(r){return o("div",[o("div",{staticClass:"product1"},[o("div",{staticClass:"flex flex-align-center"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.goodsImg,expression:"items.goodsImg"}],staticStyle:{height:"80px",width:"80px","border-radius":"5px",border:"1px #e5e5e5 solid"}})]),t._v(" "),o("div",{staticClass:"flex-1",staticStyle:{"font-size":"12px",overflow:"hidden",padding:"0 10px"}},[o("div",{staticClass:"lineTwoType"},[t._v(t._s(r.goodsName))]),t._v(" "),o("div",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis",color:"#999"}},[o("div",{staticClass:"textLabel",staticStyle:{color:"#666"}},[r.skuKeyValue.length>2?o("span",t._l(JSON.parse(r.skuKeyValue),function(e){return o("span",{staticStyle:{"margin-right":"10px"}},[o("span",[t._v(t._s(e.key)+":"+t._s(e.value)+" X "+t._s(r.goodsNum))])])})):o("span",[t._v("\n                          X "+t._s(r.goodsNum)+"\n                        ")])])])]),t._v(" "),o("div",{staticClass:"flex-1",staticStyle:{"font-size":"14.8px",width:"250px","border-right":"1px dashed #ededed"}},[o("div",{staticClass:"  flex   flex-pack-center  flex  flex-align-center"},["0"==t.active&&"SUCCEED_REFUND"==e.detailList[0].refundStatus?o("span",{staticStyle:{color:"red"}},[t._v("退款完成")]):"5"!=t.active?o("span",{staticStyle:{"margin-right":"10px"},style:t.formatStatusColor(e.orderStatus)},[t._v(t._s(t.formatStatus(e.orderStatus)))]):t._e(),t._v(" "),"5"==t.active?o("span",["APPLY_REFUND"==e.detailList[0].refundStatus?o("span",{staticStyle:{color:"red","margin-right":"10px"}},[t._v("退款中")]):t._e(),t._v(" "),"SUCCEED_REFUND"==e.detailList[0].refundStatus?o("span",{staticStyle:{color:"red","margin-right":"10px"}},[t._v("退款完成")]):t._e(),t._v(" "),"WAIT_GOODS_BACK"==e.detailList[0].refundStatus?o("span",{staticStyle:{color:"red","margin-right":"10px"}},[t._v("退款中")]):t._e(),t._v(" "),"WAIT_RECVGOODS"==e.detailList[0].refundStatus?o("span",{staticStyle:{color:"red","margin-right":"10px"}},[t._v("退款中")]):t._e(),t._v(" "),"FAIL_REFUND"==e.detailList[0].refundStatus?o("span",{staticStyle:{color:"red","margin-right":"10px"}},[t._v("已拒绝")]):t._e()]):t._e()]),t._v(" "),"ORDER_WAIT_PAY"===e.orderStatus?o("div",{staticClass:"settingBody"},[o("span",{staticStyle:{"margin-right":"10px"},on:{click:function(r){r.stopPropagation(),t.doCancel(e)}}},[t._v("取消订单")])]):t._e(),t._v(" "),"ORDER_WAIT_SENDGOODS"===e.orderStatus?o("div",{staticClass:"settingBody"},["APPLY_REFUND"==e.detailList[0].refundStatus&&"FAIL_REFUND"!==e.detailList[0].refundStatus?o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.goDetail(e)}}},[t._v("取消退款")]):t._e(),t._v(" "),"WITHOUT_REFUND"==e.detailList[0].refundStatus||"FAIL_REFUND"==e.detailList[0].refundStatus?o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.goRefund(e)}}},[t._v("申请退款")]):t._e()]):t._e(),t._v(" "),"ORDER_WAIT_RECVGOODS"===e.orderStatus?o("div",{staticClass:"settingBody"},["WITHOUT_REFUND"==e.detailList[0].refundStatus||"FAIL_REFUND"==e.detailList[0].refundStatus?o("div",[o("span",{staticStyle:{"margin-right":"10px"},on:{click:function(r){r.stopPropagation(),t.getShip(e)}}},[t._v("查看物流")]),t._v(" "),o("span",{staticStyle:{"margin-right":"10px"},on:{click:function(r){r.stopPropagation(),t.doRefund(e)}}},[t._v("退货/退款")]),t._v(" "),o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.recvgoods(e.orderId)}}},[t._v("确认收货")])]):t._e(),t._v(" "),"APPLY_REFUND"==e.detailList[0].refundStatus&&"FAIL_REFUND"!==e.detailList[0].refundStatus?o("div",["WITHOUT_REFUND"!==e.detailList[0].refundStatus&&"FAIL_REFUND"!==e.detailList[0].refundStatus?o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.goDetail(e)}}},[t._v("取消退款")]):t._e()]):t._e()]):t._e(),t._v(" "),"ORDER_WAIT_REVIEW"===e.orderStatus||"ORDER_FINISH"===e.orderStatus?o("div",{staticClass:"settingBody"},["WITHOUT_REFUND"==e.detailList[0].refundStatus||"FAIL_REFUND"==e.detailList[0].refundStatus?o("div",[o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.buyAgain(e.orderId)}}},[t._v("再次购买")]),t._v(" "),"ORDER_WAIT_REVIEW"===e.orderStatus?o("span",{staticStyle:{"margin-right":"10px"},on:{click:function(r){r.stopPropagation(),t.doRefund(e)}}},[t._v("退换/售后")]):t._e(),t._v(" "),"ORDER_WAIT_REVIEW"===e.orderStatus?o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.gocomment(e)}}},[t._v("评价商品")]):t._e()]):t._e(),t._v(" "),"APPLY_REFUND"==e.detailList[0].refundStatus&&"FAIL_REFUND"!==e.detailList[0].refundStatus?o("div",["APPLY_REFUND"==e.detailList[0].refundStatus&&"FAIL_REFUND"!==e.detailList[0].refundStatus?o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(r){r.stopPropagation(),t.goDetail(e)}}},[t._v("取消退款")]):t._e()]):t._e()]):t._e(),t._v(" "),"ORDER_END_GOODS"===e.orderStatus?o("div",{staticClass:"settingBody"},["WITHOUT_REFUND"==e.detailList[0].refundStatus||"FAIL_REFUND"==e.detailList[0].refundStatus?o("div",[o("span",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{click:function(r){r.stopPropagation(),t.doRefund(e)}}},[t._v("退换/售后")]),t._v(" "),o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),attrs:{size:"small"},on:{click:function(r){r.stopPropagation(),t.getShip(e)}}},[t._v("查看物流")])]):t._e(),t._v(" "),"APPLY_REFUND"==e.detailList[0].refundStatus&&"FAIL_REFUND"!==e.detailList[0].refundStatus?o("div",["APPLY_REFUND"==e.detailList[0].refundStatus&&"FAIL_REFUND"!==e.detailList[0].refundStatus?o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.goDetail(e)}}},[t._v("取消退款")]):t._e()]):t._e()]):t._e(),t._v(" "),"ORDER_CANCEL_PAY"===e.orderStatus?o("div",{staticClass:"settingBody"},[o("span",{staticStyle:{"margin-right":"10px"},style:t.formatButtonColor(),on:{click:function(r){r.stopPropagation(),t.buyAgain(e.orderId)}}},[t._v("再次购买")])]):t._e()]),t._v(" "),o("div",{staticStyle:{"text-align":"center","font-size":"16px",width:"180px"}},[o("div",{},[o("span",[t._v("￥"+t._s((r.goodsPrice*r.goodsNum).toFixed(2)))])])])])])})),t._v(" "),"ORDER_CANCEL_PAY"==e.orderStatus?o("div",{staticClass:"shoplistSum"},[t._v("共"+t._s(e.detailList.length)+"件商品 合计：¥"+t._s(e.orderTotalPrice.toFixed(2))+" ")]):o("div",{staticClass:"shoplistSum"},[t._v("共"+t._s(e.detailList.length)+"件商品 合计：¥"+t._s(e.orderTotalPrice.toFixed(2))+"\n        (含运费"+t._s(e.transportPrice.toFixed(2))+")\n      ")])])})):o("div",{staticStyle:{"font-size":"14px",padding:"15px"}},[t._m(0)]),t._v(" "),t.orderList[t.returnKey()].orderList.loading?o("div",[t._v("加载中...")]):t._e(),t._v(" "),o("div",{staticStyle:{position:"relative"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.deleteshow,expression:"deleteshow"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[o("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[o("div",{staticClass:"flex-around-justify flex-align-center",staticStyle:{"background-color":"#fff",width:"580px",position:"relative",padding:"40px"}},[o("div",{staticStyle:{position:"absolute",top:"10px",right:"10px",cursor:"pointer"},on:{click:function(e){t.doDleterShow()}}},[o("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:r("Bvvs")}})]),t._v(" "),o("div",{staticStyle:{"font-size":"16px","margin-bottom":"10px","text-align":"center"}},[t._v("删除的订单无法申请售后和评论")]),t._v(" "),o("div",{staticStyle:{"font-size":"16px","margin-bottom":"10px","text-align":"center"}},[t._v("是否要继续?")]),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("button",{staticStyle:{cursor:"pointer",border:"none",width:"120px",height:"35px","background-color":"#FCCB52",color:"#fff","text-align":"center","line-height":"35px","margin-right":"10px"},on:{click:function(e){e.stopPropagation(),t.doDeleteOrder()}}},[t._v("确定")]),t._v(" "),o("button",{staticStyle:{cursor:"pointer",border:"1px solid #FCCB52",width:"120px",height:"35px",color:"#FCCB52","text-align":"center","line-height":"35px"},on:{click:function(e){t.doDleterShow()}}},[t._v("取消")])])])])])]),t._v(" "),o("reimburse",{ref:"reimburse",attrs:{orderItem:t.orderItem},on:{getList:t.getList}}),t._v(" "),o("reimburseTwo",{ref:"reimburseTwo",attrs:{orderItem:t.orderItem},on:{getList:t.getList}}),t._v(" "),o("ship",{ref:"ship"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"50px","text-align":"center"}},[e("img",{attrs:{src:r("85Bp")}}),this._v(" "),e("p",[this._v("暂时还没有相关的订单哦!")])])}]};var _=r("VU/8")(A,m,!1,function(t){r("MBCY"),r("EK+N")},"data-v-2d833c8a",null);e.default=_.exports},"85Bp":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVERTRBRjNBNDE1NzExRTg5QzY1OEY3NzhEQzhERUUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVERTRBRjNCNDE1NzExRTg5QzY1OEY3NzhEQzhERUUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RURFNEFGMzg0MTU3MTFFODlDNjU4Rjc3OERDOERFRTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RURFNEFGMzk0MTU3MTFFODlDNjU4Rjc3OERDOERFRTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4xUQkVAAAP8UlEQVR42uzd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"},"EK+N":function(t,e){},MBCY:function(t,e){},Q2ye:function(t,e,r){"use strict";var o=r("TToO"),i=r("7+uW"),s=r("c+8m"),a=r.n(s),n=r("DZ+H"),d=r("Fd2+"),l=r("TJML"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ship_model=!1,e.shipInfoList=[],e}return o.c(e,t),e.prototype.getShipInfoList=function(t,e){var r=this;i.default.prototype.$reqFormPost("/transport/info",{com:e,nu:t},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);console.log(e.data.data),console.log(t),r.shipInfoList=e.data.data}else console.log("网络请求错误！")})},e.prototype.mounted=function(){},e=o.b([a()({components:{comhead:l.a},mixins:[n.a]})],e)}(i.default),c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.ship_model?o("div",{staticStyle:{position:"relative"}},[o("div",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[o("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[o("div",{staticStyle:{"min-height":"300px","background-color":"#fff",width:"780px",padding:"20px","border-radius":"10px",position:"relative"}},[o("div",{staticStyle:{cursor:"pointer",position:"absolute",top:"10px",right:"10px"},on:{click:function(e){t.ship_model=!1}}},[o("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:r("Bvvs")}})]),t._v(" "),o("div",{staticStyle:{"font-size":"16px","text-align":"center","padding-bottom":"10px","border-bottom":"1px solid rgb(221, 221, 221)"}},[t._v("查看物流")]),t._v(" "),o("div",{staticClass:"detailBody"},t._l(t.shipInfoList,function(e){return o("div",[o("div",[t._v(t._s(e.time))]),t._v(" "),o("div",[t._v(t._s(e.context))])])}))])]),t._v(" "),o("div")])]):t._e()},staticRenderFns:[]};var p=r("VU/8")(u,c,!1,function(t){r("dyHO")},"data-v-d0bdbfa6",null);e.a=p.exports},dyHO:function(t,e){},kDSA:function(t,e){}});
//# sourceMappingURL=1.5f5fd62faaa435c70b52.js.map
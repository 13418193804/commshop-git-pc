webpackJsonp([14],{"0yFl":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("TToO"),s=i("7+uW"),n=i("c+8m"),o=i.n(n),r=i("DZ+H"),l=i("ymRw"),d=i("TJML"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.orderId="",e.detail="",e.refundObj={refundType:"REFUND",refundImgs:[],reason:""},e}return a.c(e,t),e.prototype.changerefundType=function(t){this.refundObj.refundType=t},e.prototype.doRefund=function(){var t=this,e="/order/refund/apply",i=Object.assign({refundImgs:this.refundObj.refundImgs.join(","),userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:this.orderId,money:this.detail.payTotal},this.refundObj);"FAIL_REFUND"==this.detail.detailList[0].refundStatus&&(e="/order/refund/reapply",i=Object.assign({refundImgs:this.refundObj.refundImgs.join(","),userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,refundId:this.detail.detailList[0].refundOrderList[0].refundId,money:this.detail.payTotal},this.refundObj)),s.default.prototype.$reqFormPost(e,i,function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(l.Toast)(e.data.message);Object(l.Toast)("申请成功"),console.log("申请退款后",e.data),t.$router.go(-1)}else console.log("网络请求错误！")})},e.prototype.removeByValue=function(t,e){for(var i=0;i<t.length;i++)if(t[i]==e){t.splice(i,1);break}},e.prototype.onRead=function(t){var e=this;console.log();var i=new FormData;i.append("file",t.file),s.default.prototype.$reqFormUpload("/fileupload",i,function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(l.Toast)(t.data.message);var i=e.refundObj.refundImgs?e.refundObj.refundImgs:[];i.push(t.data.data.filename),e.refundObj.refundImgs=i,console.log("文件上传",t.data.data.filename)}else console.log("网络请求错误！")})},e.prototype.formatStatus=function(t){switch(t){case"ORDER_WAIT_PAY":return"未付款";case"ORDER_CANCEL_PAY":return"已取消";case"ORDER_WAIT_SENDGOODS":return"未发货";case"ORDER_WAIT_RECVGOODS":return"未收货";case"ORDER_END_GOODS":return"交易结束";case"ORDER_WAIT_REVIEW":return"交易完成"}},e.prototype.queryDetail=function(){var t=this;s.default.prototype.$reqFormPost("/order/queryorderdetail",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,orderId:this.orderId},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(l.Toast)(e.data.message);t.detail=e.data.data,console.log(e.data.data)}else console.log("网络请求错误！")})},e.prototype.formatStatusColor=function(t){switch(t){case"ORDER_WAIT_SENDGOODS":case"ORDER_WAIT_RECVGOODS":case"ORDER_CANCEL_PAY":case"ORDER_WAIT_PAY":return"color:red";case"ORDER_WAIT_REVIEW":return"color:#ffc630";case"ORDER_FINISH":return"color:#ffc630;"}},e.prototype.mounted=function(){console.log("退款页面"),this.orderId=this.$route.query.orderId,this.queryDetail()},e=a.b([o()({components:{comhead:d.a},mixins:[r.a]})],e)}(s.default),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab-contents",staticStyle:{height:"-webkit-fill-available"}},[i("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"申请售后",isRightIcon:"true"},on:{leftClick:!1}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"10px"}},[i("div",{staticStyle:{flex:"1"}},[i("div",{staticClass:"flex flex-pack-justify",staticStyle:{"font-size":"16px"}},[i("span",[t._v("收货人："+t._s(t.detail.contactName))]),t._v(" "),i("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(t.detail.contactPhone))])]),t._v(" "),i("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"5px","font-size":"14px"}},[t._m(1),t._v(" "),i("div",{staticClass:"lineTwo"},[t._v("\n\n          收货地址： "+t._s(t.detail.provinceName)+t._s(t.detail.cityName)+t._s(t.detail.countryName)+t._s(t.detail.address)+"\n\n        ")])])])]),t._v(" "),i("div",{staticStyle:{height:"10px","background-color":"#f7f7f7"}}),t._v(" "),i("div",{},t._l(t.detail.detailList,function(e,a){return i("div",{key:a},[i("div",{staticClass:"product"},[i("div",{staticClass:"flex flex-align-center"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsImg,expression:"item.goodsImg"}],staticStyle:{height:"70px",width:"70px"}})]),t._v(" "),i("div",{staticClass:"flex-1",staticStyle:{"font-size":"16px",overflow:"hidden",padding:"0 10px"}},[i("div",{staticStyle:{height:"100%"}},[i("div",{staticClass:"lineTwoType"},[t._v(t._s(e.goodsName))]),t._v(" "),i("div",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",color:"#999"}},[i("div",{staticStyle:{"font-size":"14px",color:"#666"}},[t._v(t._s(e.jingle))])])])]),t._v(" "),i("div",{staticStyle:{"text-align":"center","font-size":"14px"}},[i("div",[t._v("￥"+t._s(e.goodsPrice))]),t._v(" "),i("div",{staticClass:"labelPrice"},[t._v("￥"+t._s(e.goodsPrice))]),t._v(" "),i("div",[t._v("X "+t._s(e.goodsNum))])])])])})),t._v(" "),i("div",{},[i("div",{staticClass:"flex flex-pack-justify",staticStyle:{"margin-left":"10px","border-bottom":"1px #e5e5e5 solid",padding:"10px"}},[i("div",[t._v("运费")]),t._v(" "),i("div",{staticStyle:{"margin-right":"10px"}},[t._v("￥"+t._s(t.detail.transportPrice.toFixed(2)))])]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify",staticStyle:{margin:"0 0 0 10px",padding:"10px"}},[i("div",[t._v("订单总价")]),t._v(" "),i("div",{staticClass:"marketPrice",staticStyle:{"margin-right":"10px"}},[t._v("￥"+t._s(t.detail.orderTotalPrice.toFixed(2)))])])]),t._v(" "),i("div",{staticStyle:{height:"10px","background-color":"#f7f7f7"}}),t._v(" "),i("div",{staticStyle:{padding:"10px","line-height":"24px"}},[i("div",[t._v("\n\n      订单号："+t._s(t.detail.orderId)+"\n\n    ")]),t._v(" "),i("div",[t._v("\n\n      创建时间："+t._s(t.detail.createTime)+"\n\n    ")]),t._v(" "),i("div",[t._v("\n\n      支付时间："+t._s(t.detail.payTime)+"\n\n    ")])]),t._v(" "),"FAIL_REFUND"==t.detail.detailList[0].refundStatus?i("div",{staticStyle:{height:"10px","background-color":"#f7f7f7"}}):t._e(),t._v(" "),"FAIL_REFUND"==t.detail.detailList[0].refundStatus?i("div",{staticStyle:{margin:"0 0 0 10px",padding:"10px"}},[i("div",[t._v("\n\n      退回原因\n\n    ")]),t._v(" "),i("p",{staticStyle:{color:"#999"}},[t._v("\n\n      "+t._s(t.detail.detailList[0].refundOrderList[0].merchantRemark)+"\n\n    ")])]):t._e(),t._v(" "),i("div",{staticStyle:{height:"10px","background-color":"#f7f7f7"}}),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{padding:"10px","font-size":"14px"}},[i("div",[t._v("服务时间：9:00 - 22:00")]),t._v(" "),i("van-button",{attrs:{size:"small",onclick:"showMeiQia()"}},[t._v("联系客服")])],1),t._v(" "),i("div",{staticStyle:{height:"10px","background-color":"#f7f7f7"}}),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{padding:"10px"}},[i("div",[t._v("售后类型")]),t._v(" "),i("div",{staticClass:"selectBox",class:"REFUND"==t.refundObj.refundType?"selectType":"",on:{click:function(e){t.changerefundType("REFUND")}}},[t._v("\n\n      未收到货，只退款\n\n    ")]),t._v(" "),i("div",{staticClass:"selectBox",class:"GOODS_RETURN"==t.refundObj.refundType?"selectType":"",on:{click:function(e){t.changerefundType("GOODS_RETURN")}}},[t._v("\n\n      退货/退款\n\n    ")])]),t._v(" "),i("div",{staticStyle:{border:"1px #e5e5e5 solid",margin:"10px","border-radius":"8px"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px #e5e5e5 solid",height:"43px","line-height":"43px",padding:"0 10px"}},[t._v("\n\n      提示：快递到达后请拒收快递，否则退款将被拒绝\n\n    ")]),t._v(" "),i("div",{staticStyle:{padding:"5px"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.refundObj.reason,expression:"refundObj.reason"}],staticStyle:{"vertical-align":"top",width:"100%",border:"none"},attrs:{placeholder:"请填写申请理由",type:"text",name:"content",rows:"9"},domProps:{value:t.refundObj.reason},on:{input:function(e){e.target.composing||t.$set(t.refundObj,"reason",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"flex",staticStyle:{margin:"10px"}},[i("div",{staticClass:"el-upload--picture-card"},[i("van-uploader",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{width:"100%",height:"100%"},attrs:{"after-read":t.onRead,accept:"image/jpg,image/png, image/jpeg"}},[i("van-icon",{attrs:{name:"photograph"}})],1)],1),t._v(" "),t._l(t.refundObj.refundImgs,function(e,a){return i("div",{key:a,staticClass:"el-upload--picture-card",staticStyle:{position:"relative"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:e}}),t._v(" "),i("i",{staticClass:"iconfont icon-shanchu3",staticStyle:{color:"#000",position:"absolute",right:"-8px",top:"-8px",height:"17px","line-height":"17px"},on:{click:function(i){t.removeByValue(t.refundObj.refundImgs,e)}}})])})],2),t._v(" "),i("div",{staticStyle:{margin:"10px"}},[i("van-button",{attrs:{size:"large"},on:{click:function(e){t.doRefund()}}},[t._v("提交")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex",staticStyle:{height:"5px"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:i("AQsh")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"iconfont icon-location",staticStyle:{"margin-right":"10px","font-size":"22px"}})])}]};var p=i("VU/8")(c,u,!1,function(t){i("RG8O")},"data-v-65c3a7a9",null);e.default=p.exports},AQsh:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAKCAIAAABkNUwgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4ODE0RENCMzY0NjExRTg5MDMxRERDM0U2MUUwMjgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4ODE0RENDMzY0NjExRTg5MDMxRERDM0U2MUUwMjgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTg4MTREQzkzNjQ2MTFFODkwMzFEREMzRTYxRTAyODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTg4MTREQ0EzNjQ2MTFFODkwMzFEREMzRTYxRTAyODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YOBuGAAACLElEQVR42uzbz0sCURAH8Fk3TdiKfhzKjnmow/4TgqfwfzWqUx3DY8fQ6BCJJJilIpW7uvtqoaAfWPvcOczAdw7e3uPxcb4w4OgYY2hORZeXwcUF8VXe9/PVapYb7sd0O2J8Ee14VN6wOyKNRYIJZHThQAaB0tswSBNkfldu3pn4+ppXZGl3N1+pZLnh4YXZZbVAe+t2R6SxSDCBjC4cyCBQehsGaYKMxSgTdzqTszPGRzieVzg8JNdd+IbRhG4GnC4Flw62yHFsGkUYiwQTyOjCgQwCpbdhkCbIWIwyptcLTk4oithe4brFWo1WVha+4Dmk5hPN/ynM/ktyaH8z0Ulf0lgkmEBGFw5kECi9DYM0QeaP+jnKmOFwUq+bIGCcp4qVilMqLXx8MqOrPkUx54hXXqe1ZZtGEcYiwQQyunAgg0DpbRikCTJ/17dRxry+BkdH75+Mj8j7fs73Fz4+jROXKavLjkfbnk2jCGORYAIZXTiQQaD0NgzSBJl/68soE4bh8XE8HDI+IuMK3sxQs59MeYxlvVQljEWECWRU4UAGgVLcMEgTZFLU5ygTReHpadTtMj4i4wqeMdR6pHHI6WK9VCWMRYQJZFThQAaBUtwwSBNk0sl8jDLT8/NZu835isyrvjeDZAua80uyX6qSxiLBBDK6cCCDQOltGKQJMikrGWWiRmPaahFrZVz1vRsl/0rnLdulKmksEkwgowsHMgiU3oZBmiCTvt4EGACJesqmvBF1WwAAAABJRU5ErkJggg=="},RG8O:function(t,e){}});
//# sourceMappingURL=14.b7ce46bf5edc4371032b.js.map
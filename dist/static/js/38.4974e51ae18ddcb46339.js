webpackJsonp([38],{"3b3A":function(t,e){},afYQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("TToO"),s=i("7+uW"),n=i("c+8m"),a=i.n(n),c=i("DZ+H"),d=i("Fd2+"),r=i("h1Nz"),l=i("au/Y"),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.invoiceshow=!1,e.updateinvoiceshow=!1,e.haveinvoice=!1,e.coupon_active1=!1,e.coupon_active="0",e.invoicecontent={titleType:"",invoiceTitle:"",invoiceNo:""},e.updateinvoicecontent={titleType:"",invoiceTitle:"",invoiceNo:""},e.withchangeModel=!1,e.addressList=[],e.deladdress="",e.deladdressid="",e.delshow=!1,e.addshow=!1,e.province=[],e.provinceid="",e.city=[],e.cityid="",e.country=[],e.countryid="",e.updateaddressid="",e.address1="",e.contactName="",e.contactMobile="",e.isDefault=0,e.prepareId="",e.shopCartList=[],e.address={},e.totalPrice="",e.goodsSum="",e.freight="",e.pageType="",e.titlevalue="",e.couponId="",e.titleType="",e.invoiceTitle="",e.invoiceNo="",e.remark="",e.yetShow=!1,e.couponList=[],e.couponnum="",e.iscouponshow=!1,e.selectcouponId="",e.selectcouponName="",e.selectcouponDenomination="",e.surecouponId="",e.surecouponName="",e.surecouponDenomination="",e}return o.c(e,t),e.prototype.isinvoiceshow=function(t,e){this.coupon_active="3",this.invoiceshow=!this.invoiceshow,t&&(this.haveinvoice=!1,this.invoicecontent={titleType:"",invoiceTitle:"",invoiceNo:""})},e.prototype.isupdateinvoiceshow=function(){this.updateinvoiceshow=!this.updateinvoiceshow,!0===this.updateinvoiceshow&&(this.updateinvoicecontent.titleType=this.invoicecontent.titleType,this.updateinvoicecontent.invoiceTitle=this.invoicecontent.invoiceTitle,this.updateinvoicecontent.invoiceNo=this.invoicecontent.invoiceNo)},e.prototype.addinvoice=function(){""!=this.invoicecontent.titleType?"COMPANY"!=this.invoicecontent.titleType||""!=this.invoicecontent.invoiceTitle?"COMPANY"!=this.invoicecontent.titleType||""!=this.invoicecontent.invoiceNo?(this.invoiceshow=!this.invoiceshow,this.haveinvoice=!0):this.$Message.warning("请填写纳税人识别号"):this.$Message.warning("请填写发票抬头"):this.$Message.warning("请选择发票类型")},e.prototype.updateinvoice=function(){""!=this.updateinvoicecontent.titleType?"COMPANY"!=this.updateinvoicecontent.titleType||""!=this.updateinvoicecontent.invoiceTitle?"COMPANY"!=this.updateinvoicecontent.titleType||""!=this.updateinvoicecontent.invoiceNo?(this.updateinvoiceshow=!this.updateinvoiceshow,this.invoicecontent.titleType=this.updateinvoicecontent.titleType,this.invoicecontent.invoiceTitle=this.updateinvoicecontent.invoiceTitle,this.invoicecontent.invoiceNo=this.updateinvoicecontent.invoiceNo):this.$Message.warning("请填写纳税人识别号"):this.$Message.warning("请填写发票抬头"):this.$Message.warning("请选择发票类型")},e.prototype.changetitleType=function(t){"PERSON"==t&&(this.invoicecontent.titleType="PERSON"),"COMPANY"==t&&(this.invoicecontent.titleType="COMPANY"),console.log("this.invoicecontent.titleType",this.invoicecontent.titleType),console.log("this.updateinvoicecontent.titleType",this.updateinvoicecontent.titleType)},e.prototype.changeupdatetitleType=function(t){"PERSON"==t&&(this.updateinvoicecontent.titleType="PERSON"),"COMPANY"==t&&(this.updateinvoicecontent.titleType="COMPANY"),console.log("this.invoicecontent.titleType",this.invoicecontent.titleType),console.log("this.updateinvoicecontent.titleType",this.updateinvoicecontent.titleType)},e.prototype.isdef=function(){0==this.isDefault?this.isDefault=1:this.isDefault=0},e.prototype.addcancel=function(){this.withchangeModel=!1,this.addshow=!1},e.prototype.update=function(){this.updateaddressid=this.address.addressId,this.addshow=!0,this.provinceid=this.address.provinceid,this.cityid=this.address.cityid,this.countryid=this.address.countryid,this.address1=this.address.address,this.contactName=this.address.contactname,this.contactMobile=this.address.contactmobile,this.isDefault=this.address.isdefault,this.getprovince(),this.querycity(),this.querycountry()},e.prototype.isaddress=function(){var t=this;""!=this.provinceid?""!=this.cityid?""!=this.countryid?""!=this.address1?this.address1.length<5?this.$Message.warning("请至少输入五个字符"):""!=this.contactName?""!=this.contactMobile?11==this.contactMobile.length?s.default.prototype.$reqFormPost("/address/add",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,provinceId:this.provinceid,cityId:this.cityid,countryId:this.countryid,address:this.address1,contactName:this.contactName,contactMobile:this.contactMobile,isDefault:this.isDefault},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);Object(d.b)("新建地址成功"),t.getAddressList(),t.provinceid="",t.cityid="",t.countryid="",t.address1="",t.contactName="",t.contactMobile="",t.isDefault=0,t.addshow=!1,t.updateaddressid=""}else console.log("网络请求错误！")}):this.$Message.warning("请填写正确的手机号码"):this.$Message.warning("请填写手机号码"):this.$Message.warning("请填写收货人"):this.$Message.warning("请填写详细地址"):this.$Message.warning("请选择市区"):this.$Message.warning("请选择城市"):this.$Message.warning("请选择省份")},e.prototype.addaddress=function(){var t=this;""!=this.provinceid?""!=this.cityid?""!=this.countryid?""!=this.address1?this.address1.length<5?this.$Message.warning("请至少输入五个字符"):""!=this.contactName?""!=this.contactMobile?11==this.contactMobile.length?""!=(this.updateaddressid||"")?s.default.prototype.$reqFormPost("/address/update",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,addressId:this.updateaddressid,provinceId:this.provinceid,cityId:this.cityid,countryId:this.countryid,address:this.address1,contactName:this.contactName,contactMobile:this.contactMobile,isDefault:this.isDefault},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);t.$Message.success("保存成功"),t.provinceid="",t.cityid="",t.countryid="",t.address1="",t.contactName="",t.contactMobile="",t.isDefault=0,t.addshow=!1,t.updateaddressid=""}else console.log("网络请求错误！")}):s.default.prototype.$reqFormPost("/address/add",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,provinceId:this.provinceid,cityId:this.cityid,countryId:this.countryid,address:this.address1,contactName:this.contactName,contactMobile:this.contactMobile,isDefault:this.isDefault},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);Object(d.b)("新建地址成功"),t.getAddressList(),t.provinceid="",t.cityid="",t.countryid="",t.address1="",t.contactName="",t.contactMobile="",t.isDefault=0,t.addshow=!1,t.updateaddressid=""}else console.log("网络请求错误！")}):this.$Message.warning("请填写正确的手机号码"):this.$Message.warning("请填写手机号码"):this.$Message.warning("请填写收货人"):this.$Message.warning("请填写详细地址"):this.$Message.warning("请选择市区"):this.$Message.warning("请选择城市"):this.$Message.warning("请选择省份")},e.prototype.changeprovince=function(){this.cityid="",this.city=[],this.countryid="",this.country=[],this.querycity()},e.prototype.changecity=function(){this.countryid="",this.country=[],this.querycountry()},e.prototype.setDefaultAddress=function(t){var e=this;t!=this.address.addressId&&s.default.prototype.$reqFormPost("/prepare/order/update",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,prepareId:this.$store.getters[s.default.prototype.MutationTreeType.PREPAREID],addressId:t},function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(d.b)(t.data.message);e.getPreInfo(e.$store.getters[s.default.prototype.MutationTreeType.PREPAREID]),e.withchangeModel=!1,e.addshow=!1}else console.log("网络请求错误！")})},e.prototype.querycity=function(){var t=this;s.default.prototype.$reqFormPost("/address/querycity",{provinceId:this.provinceid},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);console.log(e.data.data.region),t.city=e.data.data.region}else console.log("网络请求错误！")})},e.prototype.getAddressList=function(){var t=this;s.default.prototype.$reqFormPost("/address/list",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);console.log("地址列表",e.data.data.addressList),t.addressList=e.data.data.addressList,t.addressList.forEach(function(t,e){t.id=t.addressId,t.name=t.contactname,t.tel=t.contactmobile,t.readdress=t.address,t.address=t.province+t.city+t.country+t.address})}else console.log("网络请求错误！")})},e.prototype.querycountry=function(){var t=this;s.default.prototype.$reqFormPost("/address/querycountry",{cityId:this.cityid},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);console.log(e.data.data.region),t.country=e.data.data.region}else console.log("网络请求错误！")})},e.prototype.changeModel=function(t){"change"==t?(console.log("切换地址"),this.withchangeModel=!0,this.getAddressList()):(this.getprovince(),this.addshow=!1,this.provinceid="",this.cityid="",this.countryid="",this.address1="",this.contactName="",this.contactMobile="",this.isDefault=0,this.updateaddressid="",this.addshow=!0)},e.prototype.getPreInfo=function(t){var e=this;s.default.prototype.$reqFormPost1("/prepare/order/query",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,prepareId:t},function(t){if(200!==t.returnCode)return console.log(t),e.$Message.warning(t.message),void console.log("网络请求错误！");e.shopCartList=t.data.shopCartList,e.address=t.data.address,console.log("address",e.address),e.totalPrice=t.data.totalPrice,e.goodsSum=t.data.goodsSum,e.freight=t.data.freight})},e.prototype.onSubmit=function(){var t=this;this.address?s.default.prototype.$reqFormPost("/prepare/order/submit",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,couponId:this.surecouponId,titleType:this.invoicecontent.titleType,invoiceTitle:this.invoicecontent.invoiceTitle,invoiceNo:this.invoicecontent.invoiceNo,prepareId:this.prepareId,remark:this.remark},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);t.$router.replace({name:"pay",query:{contactname:t.address.contactname,contactmobile:t.address.contactmobile,address:t.address.province+t.address.city+t.address.country+t.address.address,body:e.data.data.body,payId:e.data.data.payId,payTotal:e.data.data.payTotal}}),console.log(e.data.data)}else console.log("网络请求错误！")}):this.$Message.warning("请选择一个收货地址")},e.prototype.getprovince=function(){var t=this;s.default.prototype.$reqFormPost("/address/queryprovince",{},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);console.log(e.data.data.region),t.province=e.data.data.region}else console.log("网络请求错误！")})},e.prototype.getcouponlist=function(){var t=this;s.default.prototype.$reqFormPost("/coupon/user/linklist",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,status:"UNUSED"},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(d.b)(e.data.message);console.log(e.data.data.couponList),t.couponList=e.data.data.couponList,t.couponnum=e.data.data.couponList.length}else console.log("网络请求错误！")})},e.prototype.couponshowNo=function(t){this.coupon_active="1",console.log("dd")},e.prototype.couponshow=function(t,e){this.coupon_active="2",this.iscouponshow=!this.iscouponshow,""!==this.surecouponId&&(this.selectcouponId=this.surecouponId,this.selectcouponName=this.surecouponName,this.selectcouponDenomination=this.surecouponDenomination),t&&(this.selectcouponId="",this.selectcouponName="",this.selectcouponDenomination="")},e.prototype.selectcoupon=function(t){this.selectcouponId=t.coupon.id,this.selectcouponName=t.coupon.couponName,this.selectcouponDenomination=t.coupon.couponDenomination},e.prototype.surecoupon=function(t){this.yetShow=!0,""!=this.selectcouponId?(this.iscouponshow=!1,this.surecouponId=this.selectcouponId,this.surecouponName=this.selectcouponName,this.surecouponDenomination=this.selectcouponDenomination):this.$Message.warning("请选择优惠卷")},e.prototype.mounted=function(){this.prepareId=this.$store.getters[s.default.prototype.MutationTreeType.PREPAREID],console.log(this.prepareId),this.prepareId?(this.getcouponlist(),this.getPreInfo(this.$store.getters[s.default.prototype.MutationTreeType.PREPAREID])):this.$router.replace("/")},e=o.b([a()({components:{Wintabe:r.a,Winbeet:l.a},mixins:[c.a]})],e)}(s.default),p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab-contents"},[i("wintabe",{ref:"wintabe",attrs:{table:!0,router:!0}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:" flex   flex-pack-center "},[i("div",{staticClass:"contentBox2 "},[t.address?i("div",{staticStyle:{"line-height":"32px",margin:"20px","border-bottom":"1px solid #e5e5e5"}},[i("div",{staticClass:"flex "},[i("i",{staticClass:"iconfont icon-location"}),t._v(" "),i("span",[t._v("已选地址")]),t._v(" "),i("div",{staticClass:"flex flex-align-center flex-pack-center pointer",staticStyle:{"margin-left":"15px","background-color":"#F4C542","border-color":"#F4C542",color:"#FFFFFF","min-width":"100px",height:"32px","font-size":"14.8px"},on:{click:function(e){t.update()}}},[i("span",[t._v("修改")])])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"content_title"},[t._v("收货人：")]),t._v(" "),i("div",[t._v(t._s(t.address.contactname))])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"content_title"},[t._v("联系方式：")]),t._v(" "),i("div",[t._v(t._s(t.address.contactmobile))])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"content_title"},[t._v("收货地址：")]),t._v(" "),i("div",[t._v(t._s(t.address.province)+t._s(t.address.city)+t._s(t.address.country)+t._s(t.address.address))]),t._v(" "),i("div",{staticStyle:{padding:"30px 20px"}},[i("van-button",{staticStyle:{cursor:"pointer","border-radius":"4%","background-color":"#fff",color:"red",border:"1px solid red","min-width":"150px","margin-right":"10px",overflow:"hidden"},on:{click:function(e){t.changeModel("change")}}},[t._v("地址切换")]),t._v(" "),i("van-button",{staticStyle:{cursor:"pointer","border-radius":"4%","background-color":"#fff",color:"#F4C542",border:"1px solid #F4C542","min-width":"150px","margin-right":"10px",overflow:"hidden"},on:{click:function(e){t.changeModel("add")}}},[t._v("新建地址")])],1)])]):i("div",[i("div",{staticClass:"flex flex-around-justify flex-v",staticStyle:{"background-color":"#fff",padding:"25px 60px 25px 30px",position:"relative"}},[i("div",{staticClass:"add_colose",on:{click:function(e){t.addcancel()}}},[i("i",{staticClass:"iconfont icon-close",staticStyle:{"font-weight":"bold",color:"#bfbfbf"}})]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{"padding-right":"15px"}},[t._v("所在地区")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.provinceid,expression:"provinceid"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.provinceid=e.target.multiple?i:i[0]},t.changeprovince]}},t._l(t.province,function(e,o){return i("option",{key:o,domProps:{value:e.id}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.cityid,expression:"cityid"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.cityid=e.target.multiple?i:i[0]},t.changecity]}},t._l(t.city,function(e,o){return i("option",{key:o,domProps:{value:e.id}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.countryid,expression:"countryid"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.countryid=e.target.multiple?i:i[0]}}},t._l(t.country,function(e,o){return i("option",{key:o,domProps:{value:e.id}},[t._v("\n              "+t._s(e.name)+"\n            ")])}))]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{"padding-right":"15px"}},[t._v("详细地址")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address1,expression:"address1"}],domProps:{value:t.address1},on:{input:function(e){e.target.composing||(t.address1=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticClass:"flex"},[i("div",{staticStyle:{"padding-right":"27px"}},[t._v("收货人")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{"padding-right":"24px","padding-left":"15px"}},[t._v("手机号码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contactMobile,expression:"contactMobile"}],domProps:{value:t.contactMobile},on:{input:function(e){e.target.composing||(t.contactMobile=e.target.value)}}})])]),t._v(" "),i("div",{staticStyle:{cursor:"pointer","border-top":"1px solid #F4F4F4","padding-top":"20px"},on:{click:function(e){t.isdef()}}},[i("span",{staticStyle:{display:"inline-block","vertical-align":"middle",border:"1px solid #D3D3D3","border-radius":"50px",width:"15px",height:"15px","margin-right":"10px"},style:1==t.isDefault?"background-color:#FF0506;border:1px solid #FF0506;":""}),t._v("设为默认")]),t._v(" "),i("div",{staticClass:"flex region_btn"},[i("div",{on:{click:function(e){t.isaddress()}}},[t._v("保存地址")]),t._v(" "),i("div",{on:{click:function(e){t.addcancel()}}},[t._v("取消")])])])])])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:" flex   flex-pack-center "},[i("div",{staticClass:"contentBox2 "},[t._l(t.shopCartList,function(e,o){return i("div",{key:o,staticClass:"cartItem flex  flex-align-center flex-pack-justify"},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{width:"80px",margin:"0 10px 0 20px",overflow:"hidden"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsImg.split(",")[0],expression:"item.goodsImg.split(',')[0]"}],staticStyle:{width:"100%",border:"1px solid #EAEAEA"}})]),t._v(" "),i("div",{staticStyle:{overflow:"hidden",width:"200px"}},[i("div",[i("span",{staticClass:"textLabel",staticStyle:{color:"#000000","font-size":"15px"}},[t._v(t._s(e.goodsName))])]),t._v(" "),i("div",{staticClass:"textLabel",staticStyle:{color:"#666"}},[e.skuKeyValue.length>2?i("span",t._l(JSON.parse(e.skuKeyValue),function(o){return i("span",{staticStyle:{"margin-right":"10px"}},[i("span",[t._v(t._s(o.key)+":"+t._s(o.value)+" X "+t._s(e.num))])])})):i("span",[t._v("\n          X "+t._s(e.num)+"\n        ")])])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20"}},[t._v("￥"+t._s(e.price.toFixed(2)))])]),t._v(" "),i("div",[t._v("\n  "+t._s(e.num)+"\n")]),t._v(" "),i("div",{staticStyle:{width:"82px"}},[i("span",{staticClass:"marketPrice",staticStyle:{"font-size":"20"}},[t._v("￥"+t._s((e.price*e.num).toFixed(2)))])])])}),t._v(" "),i("div",{staticStyle:{"background-color":"#FCFCFC",padding:"0 30px","font-size":"14.8px"}}),t._v(" "),i("div",{staticStyle:{"background-color":"#f8f8f8",padding:"0 20px"}},[i("div",{staticStyle:{height:"30px","line-height":"30px"}},[t._v("发票信息")]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify",staticStyle:{width:"100%",padding:"10px 0","boder-bottom":"1px solid #eee"}},[i("div",[!1===t.haveinvoice?i("div",{staticClass:"couponUp",class:"3"==t.coupon_active?"couponUpCur":"",staticStyle:{color:"#F4C542"},on:{click:function(e){t.isinvoiceshow(3)}}},[t._v("开发票")]):t._e(),t._v(" "),!0===t.haveinvoice?i("div",{staticStyle:{color:"#F4C542",cursor:"pointer"},on:{click:function(e){t.isupdateinvoiceshow()}}},[t._v("修改")]):t._e()]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.haveinvoice,expression:"haveinvoice"}]},[i("div",[t._v("发票类型:"+t._s("PERSON"==t.invoicecontent.titleType?"个人":"单位"))]),t._v(" "),i("div",[t._v("发票金额:￥"+t._s(t.totalPrice))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.haveinvoice&&"COMPANY"==t.invoicecontent.titleType,expression:"haveinvoice && invoicecontent.titleType=='COMPANY'"}]},[t._v("发票抬头:"+t._s(t.invoicecontent.invoiceTitle))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.haveinvoice&&"COMPANY"==t.invoicecontent.titleType,expression:"haveinvoice && invoicecontent.titleType=='COMPANY'"}]},[t._v("纳税人识别号:"+t._s(t.invoicecontent.invoiceNo))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.haveinvoice,expression:"haveinvoice"}]},[t._v("发票内容:明细")])]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{width:"100%",padding:"10px 0","boder-bottom":"1px solid #eee"}},[i("div",{staticClass:"flex"},[i("div",{staticClass:"couponUp",class:"1"==t.coupon_active?"couponUpCur":"",staticStyle:{color:"#858585"},on:{click:function(e){t.couponshowNo("1")}}},[t._v("不使用优惠券")]),t._v(" "),i("div",{staticClass:"couponUp",class:"2"==t.coupon_active?"couponUpCur":"",on:{click:function(e){t.couponshow("2")}}},[t._v("使用优惠卷")]),t._v(" "),i("div",{staticStyle:{color:"#F4C542",padding:"0 15px","line-height":"30px"}},[t._v("("+t._s(t.couponnum)+"张) >")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.yetShow,expression:"yetShow == true"}],staticClass:"counponNum"},[t._v(t._s(t.surecouponName))])]),t._v(" "),i("div",[i("div",[t._v("商品合计:￥"+t._s(t.totalPrice))]),t._v(" "),t.surecouponDenomination?i("div",[t._v("优惠卷:-￥"+t._s(t.surecouponDenomination))]):t._e()])]),t._v(" "),i("div",{staticStyle:{height:"30px","line-height":"30px"}},[t._v("配送方式")]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{padding:"10px 0"}},[i("div",[t._v("快速")]),t._v(" "),i("div",[t._v("运费:"+t._s(t.freight))])]),t._v(" "),t._m(2),t._v(" "),i("div",{staticStyle:{border:"1px solid #e5e5e5"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],staticStyle:{width:"100%",border:"none",padding:"10px"},attrs:{type:"text",name:"content",rows:"7"},domProps:{value:t.remark},on:{input:function(e){e.target.composing||(t.remark=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{padding:"20px 0"}},[i("div",[t._v("应付金额")]),t._v(" "),i("div",{staticClass:"flex flex-align-center"},[i("div",{staticStyle:{padding:"0 20px"}},[i("span",{staticStyle:{color:"red","font-size":"18px"}},[t._v("￥"+t._s(t.totalPrice.toFixed(2)))])]),t._v(" "),i("div",{staticClass:"flex flex-align-center flex-pack-center pointer",staticStyle:{"background-color":"#F4C542","border-color":"#F4C542",color:"#FFFFFF","min-width":"120px",height:"42px","font-size":"16px"},on:{click:t.onSubmit}},[i("span",[t._v("去付款")])])])])])],2)]),t._v(" "),i("div",{staticStyle:{position:"relative"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.withchangeModel,expression:"withchangeModel"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[i("div",{staticClass:"flex flex-around-justify flex-v",staticStyle:{"background-color":"#fff",padding:"20px",position:"relative",width:"590px"}},[i("div",{staticClass:"add_colose",on:{click:function(e){t.addcancel()}}},[i("i",{staticClass:"iconfont icon-close"})]),t._v(" "),i("div",{staticClass:"add_titile"},[t._v("切换地址")]),t._v(" "),i("div",{staticClass:"flex region",staticStyle:{"min-height":"300px","max-height":"500px",overflow:"auto"}},[i("div",t._l(t.addressList,function(e,o){return i("div",{staticClass:"bc_addres ",class:t.address&&t.address.addressId==e.addressId?"bc_addresCur":"",on:{click:function(i){t.setDefaultAddress(e.addressId)}}},[i("div",{staticClass:"flex"},[i("div",{staticStyle:{width:"100px","text-align":"right"}},[t._v("收货人：")]),t._v("\n                        "+t._s(e.contactname)+"\n                    ")]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticStyle:{width:"100px","text-align":"right"}},[t._v("联系方式：")]),t._v("\n                        "+t._s(e.contactmobile.substring(0,3))+"****"+t._s(e.contactmobile.substring(7,13))+"\n                    ")]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticStyle:{width:"100px","text-align":"right"}},[t._v("收货地址：")]),t._v("\n                        "+t._s(e.address)+"\n                    ")])])}))]),t._v(" "),i("div",{staticStyle:{"text-align":"center","margin-top":"30px"}})])])])]),t._v(" "),i("div",{staticStyle:{position:"relative"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.addshow,expression:"addshow"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[i("div",{staticClass:"flex flex-around-justify flex-v",staticStyle:{"background-color":"#fff",padding:"25px 60px 25px 30px",position:"relative"}},[i("div",{staticClass:"add_colose",on:{click:function(e){t.addcancel()}}},[i("i",{staticClass:"iconfont icon-close",staticStyle:{"font-weight":"bold",color:"#bfbfbf"}})]),t._v(" "),t.updateaddressid?t._e():i("div",{staticClass:"add_titile"},[t._v("新增地址")]),t._v(" "),t.updateaddressid?i("div",{staticStyle:{"font-size":"16px","margin-bottom":"10px"}},[t._v("修改地址")]):t._e(),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{"padding-right":"15px"}},[t._v("所在地区")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.provinceid,expression:"provinceid"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.provinceid=e.target.multiple?i:i[0]},t.changeprovince]}},t._l(t.province,function(e,o){return i("option",{key:o,domProps:{value:e.id}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])})),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.cityid,expression:"cityid"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.cityid=e.target.multiple?i:i[0]},t.changecity]}},t._l(t.city,function(e,o){return i("option",{key:o,domProps:{value:e.id}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])})),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.countryid,expression:"countryid"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.countryid=e.target.multiple?i:i[0]}}},t._l(t.country,function(e,o){return i("option",{key:o,domProps:{value:e.id}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])}))]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{"padding-right":"15px"}},[t._v("详细地址")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address1,expression:"address1"}],domProps:{value:t.address1},on:{input:function(e){e.target.composing||(t.address1=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticClass:"flex"},[i("div",{staticStyle:{"padding-right":"27px"}},[t._v("收货人")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{"padding-right":"24px","padding-left":"15px"}},[t._v("手机号码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contactMobile,expression:"contactMobile"}],domProps:{value:t.contactMobile},on:{input:function(e){e.target.composing||(t.contactMobile=e.target.value)}}})])]),t._v(" "),i("div",{staticStyle:{"border-top":"1px solid #F4F4F4","padding-top":"20px"},on:{click:function(e){t.isdef()}}},[i("span",{staticStyle:{display:"inline-block","vertical-align":"middle",border:"1px solid #D3D3D3","border-radius":"50px",width:"15px",height:"15px","margin-right":"10px",cursor:"pointer"},style:1==t.isDefault?"background-color:#FF0506;border:1px solid #FF0506;":""}),t._v("设为默认")]),t._v(" "),i("div",{staticClass:"flex region_btn"},[i("div",{on:{click:function(e){t.addaddress()}}},[t._v("确定")]),t._v(" "),i("div",{on:{click:function(e){t.addcancel()}}},[t._v("取消")])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.invoiceshow,expression:"invoiceshow"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[i("div",{staticClass:"flex flex-around-justify flex-v",staticStyle:{"background-color":"#fff",padding:"20px",position:"relative"}},[i("div",{staticClass:"add_colose",on:{click:function(e){t.isinvoiceshow(!0)}}},[i("i",{staticClass:"iconfont icon-close"})]),t._v(" "),i("div",{staticClass:"add_titile"},[t._v("发票信息")]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{width:"120px"}},[t._v("发票类型:")]),t._v(" "),i("div",{staticStyle:{width:"100px",height:"30px","line-height":"30px","text-align":"center",border:"1px solid"},style:"PERSON"==t.invoicecontent.titleType?"border-color:#F4C542;":"border-color:#eeeeee;",on:{click:function(e){t.changetitleType("PERSON")}}},[t._v("个人")]),t._v(" "),i("div",{staticStyle:{width:"100px",height:"30px","line-height":"30px","text-align":"center",border:"1px solid"},style:"COMPANY"==t.invoicecontent.titleType?"border-color:#F4C542;":"border-color:#eeeeee;",on:{click:function(e){t.changetitleType("COMPANY")}}},[t._v("单位")])]),t._v(" "),"COMPANY"==t.invoicecontent.titleType?i("div",{staticClass:"flex region"},[i("div",{staticStyle:{width:"120px"}},[t._v("发票抬头:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.invoicecontent.invoiceTitle,expression:"invoicecontent.invoiceTitle"}],domProps:{value:t.invoicecontent.invoiceTitle},on:{input:function(e){e.target.composing||t.$set(t.invoicecontent,"invoiceTitle",e.target.value)}}})]):t._e(),t._v(" "),"COMPANY"==t.invoicecontent.titleType?i("div",{staticClass:"flex region"},[i("div",{staticStyle:{width:"120px"}},[t._v("纳税人识别号:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.invoicecontent.invoiceNo,expression:"invoicecontent.invoiceNo"}],domProps:{value:t.invoicecontent.invoiceNo},on:{input:function(e){e.target.composing||t.$set(t.invoicecontent,"invoiceNo",e.target.value)}}})]):t._e(),t._v(" "),i("div",{staticClass:"flex region_btn"},[i("div",{on:{click:function(e){t.addinvoice()}}},[t._v("确定")]),t._v(" "),i("div",{on:{click:function(e){t.isinvoiceshow(!0)}}},[t._v("取消")])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.updateinvoiceshow,expression:"updateinvoiceshow"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[i("div",{staticClass:"flex flex-around-justify flex-v",staticStyle:{"background-color":"#fff",padding:"20px",position:"relative"}},[i("div",{staticClass:"add_colose",on:{click:function(e){t.isupdateinvoiceshow()}}},[i("i",{staticClass:"iconfont icon-close"})]),t._v(" "),i("div",{staticClass:"add_titile"},[t._v("发票信息")]),t._v(" "),i("div",{staticClass:"flex region"},[i("div",{staticStyle:{width:"120px"}},[t._v("发票类型:")]),t._v(" "),i("div",{staticStyle:{width:"100px",height:"30px","line-height":"30px","text-align":"center",border:"1px solid"},style:"PERSON"==t.updateinvoicecontent.titleType?"border-color:#F4C542;":"border-color:#eeeeee;",on:{click:function(e){t.changeupdatetitleType("PERSON")}}},[t._v("个人")]),t._v(" "),i("div",{staticStyle:{width:"100px",height:"30px","line-height":"30px","text-align":"center",border:"1px solid"},style:"COMPANY"==t.updateinvoicecontent.titleType?"border-color:#F4C542;":"border-color:#eeeeee;",on:{click:function(e){t.changeupdatetitleType("COMPANY")}}},[t._v("单位")])]),t._v(" "),"COMPANY"==t.updateinvoicecontent.titleType?i("div",{staticClass:"flex region"},[i("div",{staticStyle:{width:"120px"}},[t._v("发票抬头:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.updateinvoicecontent.invoiceTitle,expression:"updateinvoicecontent.invoiceTitle"}],domProps:{value:t.updateinvoicecontent.invoiceTitle},on:{input:function(e){e.target.composing||t.$set(t.updateinvoicecontent,"invoiceTitle",e.target.value)}}})]):t._e(),t._v(" "),"COMPANY"==t.updateinvoicecontent.titleType?i("div",{staticClass:"flex region"},[i("div",{staticStyle:{width:"120px"}},[t._v("纳税人识别号:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.updateinvoicecontent.invoiceNo,expression:"updateinvoicecontent.invoiceNo"}],domProps:{value:t.updateinvoicecontent.invoiceNo},on:{input:function(e){e.target.composing||t.$set(t.updateinvoicecontent,"invoiceNo",e.target.value)}}})]):t._e(),t._v(" "),i("div",{staticClass:"flex region_btn"},[i("div",{on:{click:function(e){t.updateinvoice()}}},[t._v("确定")]),t._v(" "),i("div",{on:{click:function(e){t.isupdateinvoiceshow()}}},[t._v("取消")])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.iscouponshow,expression:"iscouponshow"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"99999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[i("div",{staticStyle:{"background-color":"#fff",padding:"20px",position:"relative",width:"750px","max-height":"620px","overflow-y":"auto"}},[i("div",{staticClass:"add_colose",on:{click:function(e){t.couponshow(!0)}}},[i("i",{staticClass:"iconfont icon-close"})]),t._v(" "),i("div",{staticClass:"add_titile",staticStyle:{"text-align":"center","border-bottom":"1px solid #ddd"}},[t._v("选择优惠卷")]),t._v(" "),i("div",{staticClass:"discountBox"},t._l(t.couponList,function(e,o){return i("div",{key:o,staticClass:"dis_list",on:{click:function(i){t.selectcoupon(e)}}},[i("p",{staticStyle:{"font-size":"18px",color:"#fff"}},[i("span",{staticStyle:{"font-size":"28px",color:"#fff"}},[t._v("\n                          "+t._s(e.coupon.fullDenomination))]),t._v("元")]),t._v(" "),e.coupon.id==t.selectcouponId?i("div",{staticClass:"distypeCur"},[t._v("已选择")]):t._e(),t._v(" "),i("div",{staticClass:"flex",staticStyle:{"justify-content":"space-between"}},[i("span",{staticStyle:{"margin-right":"5px",color:"#fff","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"}},[t._v("\n                              "+t._s(e.coupon.couponName))]),t._v(" "),i("div",[e.createTime?i("i",{staticStyle:{color:"#fff"}},[t._v(t._s(e.createTime.split(" ")[0])+" ")]):t._e(),t._v(" "),e.validityTime?i("i",{staticStyle:{color:"#fff"}},[t._v("- "+t._s(e.validityTime.split(" ")[0]))]):t._e()])]),t._v(" "),i("div",{staticClass:"newtext"},[t._v("新人专享：全场通用;特价商品或其他优惠活动商品不可")])])})),t._v(" "),i("div",{staticStyle:{"text-align":"center","margin-top":"30px"}},[i("button",{staticStyle:{border:"none",width:"290px",height:"45px","background-color":"rgb(252, 203, 82)",color:"rgb(255, 255, 255)","text-align":"center","line-height":"45px","margin-right":"5px","font-size":"16px"},on:{click:function(e){t.surecoupon()}}},[t._v("确定")])])])])])]),t._v(" "),i("winbeet")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" flex   flex-pack-center"},[e("div",{staticStyle:{width:"1200px"}},[e("div",{staticClass:"flex  flex-align-center",staticStyle:{width:"100%","background-color":"#f7f7f7",height:"47px",padding:"0 10px","margin-bottom":"10px"}},[this._v("\n  收货信息\n")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:" flex   flex-pack-center "},[i("div",{staticStyle:{width:"1200px"}},[i("div",{staticClass:"flex flex-pack-justify flex-align-center",staticStyle:{width:"100%","background-color":"#f7f7f7",height:"47px",padding:"0 10px","margin-bottom":"10px"}},[i("div",{staticStyle:{width:"70px","margin-left":"40px"}},[t._v("商品信息")]),t._v(" "),i("div",{staticStyle:{width:"230px"}}),t._v(" "),i("div",{staticStyle:{margin:"0 20px"}},[t._v("单价")]),t._v(" "),i("div",{staticStyle:{margin:"0 20px"}},[t._v("数量")]),t._v(" "),i("div",{staticStyle:{margin:"0 20px"}},[t._v("小计")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"40px","line-height":"40px"}},[this._v("给卖家的话（选填） "),e("span",{staticStyle:{margin:"0 20px",color:"#999"}},[this._v("选填内容已和卖家协商确认")])])}]};var u=i("VU/8")(v,p,!1,function(t){i("3b3A")},"data-v-36bb23e4",null);e.default=u.exports}});
//# sourceMappingURL=38.4974e51ae18ddcb46339.js.map
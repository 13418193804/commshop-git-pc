webpackJsonp([3],{Meru:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("TToO"),s=a("7+uW"),i=a("c+8m"),n=a.n(i),r=a("DZ+H"),l=a("Fd2+"),c=a("h1Nz"),d=a("au/Y"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.obj={body:"",payId:"",payTotal:""},e.address={contactname:"",contactmobile:"",address:""},e.payActive="ali",e}return o.c(e,t),e.prototype.dopay=function(){if("ali"==this.payActive)console.log("支付宝支付"),s.default.prototype.$reqFormPost("/ali/pay/wap",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,clientType:"WEB",body:this.obj.body,outTradeNo:this.obj.payId,totalFee:.01},function(t){if(null!=t)return 200!=t.data.status?(console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(l.b)(t.data.message)):void(window.location.href="https://openapi.alipay.com/gateway.do?"+t.data.data.orderString);console.log("网络请求错误！")});else{var t=window;console.log("微信支付"),s.default.prototype.$reqFormPost("/wechat/pay/wap",{userId:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[s.default.prototype.MutationTreeType.TOKEN_INFO].token,spbillCreateIp:t.getAddressIP().cip,body:this.obj.body,outTradeNo:this.obj.payId,totalFee:.01},function(t){if(null!=t)return 200!=t.data.status?(console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(l.b)(t.data.message)):void console.log(t.data.data.mwebUrl);console.log("网络请求错误！")})}},e.prototype.handlePX=function(t,e){return t+":"+this.$store.getters[s.default.prototype.MutationTreeType.SYSTEM].availWidth/750*e+"px;"},e.prototype.mounted=function(){this.obj.body=this.$route.query.body,this.obj.payId=this.$route.query.payId,this.obj.payTotal=this.$route.query.payTotal,this.address.address=this.$route.query.address,this.address.contactname=this.$route.query.contactname,this.address.contactmobile=this.$route.query.contactmobile},e=o.b([n()({components:{Wintabe:c.a,Winbeet:d.a},mixins:[r.a]})],e)}(s.default),u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-contents"},[o("wintabe",{ref:"wintabe",attrs:{table:!0,router:!0}}),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:" flex   flex-pack-center "},[o("div",{staticClass:"contentBox2 flex"},[o("div",{staticClass:"flex",staticStyle:{height:"90px",margin:"10px"},style:"ali"==t.payActive?"border:1px  solid #F4C542":"",on:{click:function(e){t.payActive="ali"}}},[o("img",{attrs:{src:a("sqh0")}})]),t._v(" "),o("div",{staticClass:"flex",staticStyle:{margin:"10px",height:"90px"},style:"wechat"==t.payActive?"border:1px  solid #F4C542":"",on:{click:function(e){t.payActive="wechat"}}},[o("img",{attrs:{src:a("n2h7")}})])])]),t._v(" "),o("div",{staticClass:" flex   flex-pack-center "},[o("div",{staticClass:"btmContent",staticStyle:{padding:"20px","font-size":"14px","text-align":"right"}},[o("span",[t._v("实付总额：")]),o("span",{staticStyle:{"font-size":"16px",color:"red"}},[t._v("￥"+t._s(t.obj.payTotal))])])]),t._v(" "),o("div",{staticClass:" flex   flex-pack-center "},[o("div",{staticStyle:{width:"60%"}},[o("div",{staticClass:"flex flex-align-center flex-pack-center pointer",staticStyle:{margin:"20px 0",float:"right","background-color":"#F4C542","border-color":"#F4C542",color:"#FFFFFF","min-width":"120px",height:"42px","font-size":"16px"},on:{click:t.dopay}},[o("span",[t._v("立即支付")])])])]),t._v(" "),o("winbeet")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" flex   flex-pack-center"},[e("div",{staticStyle:{width:"60%"}},[e("div",{staticClass:"flex  flex-align-center",staticStyle:{width:"100%","background-color":"#f7f7f7",height:"47px",padding:"0 10px","margin-bottom":"10px"}},[this._v("\n  选择支付方式\n")])])])}]};var y=a("VU/8")(p,u,!1,function(t){a("naEO")},"data-v-6690eeba",null);e.default=y.exports},n2h7:function(t,e,a){t.exports=a.p+"static/img/微信支付.dec0b54.png"},naEO:function(t,e){},sqh0:function(t,e,a){t.exports=a.p+"static/img/支付宝1.1d1b589.png"}});
//# sourceMappingURL=3.0b37b3e95ac20328dd2f.js.map
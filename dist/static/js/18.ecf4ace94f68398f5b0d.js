webpackJsonp([18],{EbcR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("TToO"),d=s("7+uW"),o=s("c+8m"),r=s.n(o),n=s("DZ+H"),i=s("ipus"),u=s("ymRw"),l=s("TJML"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.chosenAddressId=[],e.addressList=[],e}return a.c(e,t),e.prototype.selectDefault=function(t){var e=this;d.default.prototype.$reqFormPost("/prepare/order/update",{userId:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].token,prepareId:this.$store.getters[d.default.prototype.MutationTreeType.PREPAREID],addressId:t.addressId},function(t){if(null!=t)return 200!=t.data.status?(console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(u.Toast)(t.data.message)):void e.$router.go(-1);console.log("网络请求错误！")})},e.prototype.getDefault=function(){var t=this;d.default.prototype.$reqFormPost("/address/defaultaddress",{userId:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e)return 200!=e.data.status?(console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(u.Toast)(e.data.message)):void(!e.data.data.addressId&&t.addressList.length>0?t.selectDefault(t.addressList[0]):t.chosenAddressId=e.data.data.addressId);console.log("网络请求错误！")})},e.prototype.onAdd=function(){this.$router.push({name:"address",query:{addressModel:"add"}})},e.prototype.onEdit=function(t,e){this.setAddressItem(this.addressList[e]),this.$router.push({name:"address",query:{addressModel:"edit"}})},e.prototype.getAddressList=function(){var t=this;d.default.prototype.$reqFormPost("/address/list",{userId:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(u.Toast)(e.data.message);console.log("地址列表",e.data.data.addressList),t.addressList=e.data.data.addressList,t.addressList.forEach(function(t,e){t.id=t.addressId,t.name=t.contactname,t.tel=t.contactmobile,t.readdress=t.address,t.address=t.province+t.city+t.country+t.address}),t.getDefault()}else console.log("网络请求错误！")})},e.prototype.mounted=function(){console.log("list mount"),this.getAddressList()},a.b([Object(i.a)("setAddressItem")],e.prototype,"setAddressItem",void 0),e=a.b([r()({components:{comhead:l.a},mixins:[n.a]})],e)}(d.default),p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab-contents",staticStyle:{"background-color":"#f8f8f8",height:"-webkit-fill-available"}},[s("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"地址列表",isRightIcon:"true"},on:{leftClick:!1}}),t._v(" "),s("van-address-list",{attrs:{list:t.addressList},on:{add:t.onAdd,edit:t.onEdit,select:t.selectDefault},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},staticRenderFns:[]};var f=s("VU/8")(c,p,!1,function(t){s("IPaZ")},"data-v-eef457ac",null);e.default=f.exports},IPaZ:function(t,e){}});
//# sourceMappingURL=18.ecf4ace94f68398f5b0d.js.map
webpackJsonp([34],{OaI0:function(t,e){},kmra:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("TToO"),a=i("7+uW"),o=i("c+8m"),d=i.n(o),n=i("DZ+H"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.addressList=[],e.deladdress="",e.deladdressid="",e.delshow=!1,e.addshow=!1,e.province=[],e.provinceid="",e.city=[],e.cityid="",e.country=[],e.countryid="",e.updateaddressid="",e.address="",e.contactName="",e.contactMobile="",e.isDefault=0,e}return s.c(e,t),e.prototype.isdef=function(){0==this.isDefault?this.isDefault=1:this.isDefault=0},e.prototype.gbdelshow=function(){this.delshow=!this.delshow},e.prototype.close=function(){this.addshow=!1},e.prototype.getAddressList=function(){var t=this;a.default.prototype.$reqFormPost("/address/list",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void t.$Message.warning(e.data.message);console.log("地址列表",e.data.data.addressList),t.addressList=e.data.data.addressList,t.addressList.forEach(function(t,e){t.id=t.addressId,t.name=t.contactname,t.tel=t.contactmobile,t.readdress=t.address,t.isDefault=t.isdefault})}else console.log("网络请求错误！")})},e.prototype.selectDefault=function(t){var e=this;a.default.prototype.$reqFormPost("/address/setdefault",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,addressId:t.addressId},function(t){if(null!=t){if(200!=t.data.status)return console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void e.$Message.warning(t.data.message);e.$Message.success("设置默认地址成功"),e.getAddressList()}else console.log("网络请求错误！")})},e.prototype.del=function(t){this.deladdress=t,this.deladdressid=t.id,this.delshow=!0},e.prototype.delcancel=function(){this.deladdress="",this.deladdressid="",this.delshow=!1},e.prototype.update=function(t){this.updateaddressid=t.id,this.addshow=!0,this.provinceid=t.provinceid,this.cityid=t.cityid,this.countryid=t.countryid,this.address=t.address,this.contactName=t.contactname,this.contactMobile=t.contactmobile,this.isDefault=t.isdefault,this.querycity(),this.querycountry()},e.prototype.deleteaddress=function(){var t=this;a.default.prototype.$reqFormPost("/address/delete",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,addressId:this.deladdressid},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void t.$Message.warning(e.data.message);t.$Message.success("删除地址成功"),console.log("删除地址",e.data.data),t.deladdress="",t.deladdressid="",t.delshow=!1,t.getAddressList()}else console.log("网络请求错误！")})},e.prototype.newaddress=function(){this.addshow=!0},e.prototype.addcancel=function(){this.addshow=!1,this.provinceid="",this.cityid="",this.countryid="",this.address="",this.contactName="",this.contactMobile="",this.isDefault=0,this.updateaddressid=""},e.prototype.getprovince=function(){var t=this;a.default.prototype.$reqFormPost("/address/queryprovince",{},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void t.$Message.warning(e.data.message);console.log(e.data.data.region),t.province=e.data.data.region}else console.log("网络请求错误！")})},e.prototype.changeprovince=function(){this.cityid="",this.city=[],this.countryid="",this.country=[],this.querycity()},e.prototype.changecity=function(){this.countryid="",this.country=[],this.querycountry()},e.prototype.querycity=function(){var t=this;a.default.prototype.$reqFormPost("/address/querycity",{provinceId:this.provinceid},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void t.$Message.warning(e.data.message);console.log(e.data.data.region),t.city=e.data.data.region}else console.log("网络请求错误！")})},e.prototype.querycountry=function(){var t=this;a.default.prototype.$reqFormPost("/address/querycountry",{cityId:this.cityid},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void t.$Message.warning(e.data.message);console.log(e.data.data.region),t.country=e.data.data.region}else console.log("网络请求错误！")})},e.prototype.addaddress=function(){var t=this;""!=this.provinceid?""!=this.cityid?""!=this.countryid?""!=this.address?this.address.length<5?this.$Message.warning("详细地址请至少输入五个字符"):""!=this.contactName?""!=this.contactMobile?11==this.contactMobile.length?(console.log("长度",this.address.length),this.updateaddressid?a.default.prototype.$reqFormPost("/address/update",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,addressId:this.updateaddressid,provinceId:this.provinceid,cityId:this.cityid,countryId:this.countryid,address:this.address,contactName:this.contactName,contactMobile:this.contactMobile,isDefault:this.isDefault},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void t.$Message.warning(e.data.message);t.$Message.success("保存成功"),t.getAddressList(),t.provinceid="",t.cityid="",t.countryid="",t.address="",t.contactName="",t.contactMobile="",t.isDefault=0,t.addshow=!1,t.updateaddressid=""}else console.log("网络请求错误！")}):a.default.prototype.$reqFormPost("/address/add",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,provinceId:this.provinceid,cityId:this.cityid,countryId:this.countryid,address:this.address,contactName:this.contactName,contactMobile:this.contactMobile,isDefault:this.isDefault},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void t.$Message.warning(e.data.message);t.$Message.success("保存成功"),t.getAddressList(),t.provinceid="",t.cityid="",t.countryid="",t.address="",t.contactName="",t.contactMobile="",t.isDefault=0,t.addshow=!1,t.updateaddressid=""}else console.log("网络请求错误！")})):this.$Message.warning("请填写正确的手机号码"):this.$Message.warning("请填写手机号码"):this.$Message.warning("请填写收货人"):this.$Message.warning("请填写详细地址"):this.$Message.warning("请选择市区"):this.$Message.warning("请选择城市"):this.$Message.warning("请选择省份")},e.prototype.mounted=function(){this.getAddressList(),this.getprovince(),this.$emit("selectMenu",{name:"地址管理",url:"/addresslist"})},e=s.b([d()({components:{},mixins:[n.a]})],e)}(a.default),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[t._m(0),t._v(" "),t.addressList.length>0?s("div",{staticClass:"addressList",staticStyle:{padding:"15px 0","margin-bottom":"45px","border-bottom":"1px solid #EEEEEE"}},t._l(t.addressList,function(e,i){return s("div",{key:i,staticStyle:{"background-color":"#fff","border-bottom":"1px dashed #E5E5E5",overflow:"hidden"}},[s("div",{staticStyle:{width:"117px","text-align":"center",float:"left"}},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticStyle:{width:"330px","text-align":"center",float:"left","line-height":"22px"}},[t._v(t._s(e.province)+" "+t._s(e.city)+"  "+t._s(e.country)+" "+t._s(e.address))]),t._v(" "),s("div",{staticStyle:{width:"160px","text-align":"center",float:"left"},style:11==e.contactmobile.length?"":" visibility: hidden;"},[t._v("\n         "+t._s(e.contactmobile.substring(0,3))+"****"+t._s(e.contactmobile.substring(7,13))+"\n         ")]),t._v(" "),s("div",{staticStyle:{width:"170px","text-align":"center",float:"left"}},[s("div",{},[s("span",{staticStyle:{"padding-right":"4px",color:"#FFC630","border-right":"1px solid #ABABAB",cursor:"pointer"},on:{click:function(i){t.update(e)}}},[t._v("编辑")]),t._v(" "),s("span",{staticStyle:{"padding-left":"5px","padding-right":"4px",color:"#000","border-right":"1px solid #ABABAB",cursor:"pointer"},on:{click:function(i){t.del(e)}}},[t._v("删除")])])]),t._v(" "),1==e.isdefault?s("div",{staticStyle:{"background-color":"#C6C6C6",width:"100px",float:"left",height:"30px","line-height":"30px",color:"#fff","text-align":"center"}},[t._v("默认地址")]):s("div",{on:{click:function(i){t.selectDefault(e)}}},[s("span",{staticStyle:{display:"inline-block","vertical-align":"middle",border:"1px solid #D3D3D3","border-radius":"50px","margin-right":"5px",width:"15px",height:"15px"}}),t._v("设为默认")])])})):t._e(),t._v(" "),s("div",{staticClass:"flex flex-align-center flex-v"},[0==t.addressList.length?s("div",{staticStyle:{color:"#BFBFBF",padding:"120px 0 30px"}},[t._v("您还未创建收货地址~~~")]):t._e(),t._v(" "),s("div",{staticStyle:{"margin-bottom":"30px",width:"155px",height:"45px",color:"#ffc630","font-size":"16px",border:"1px solid #FFC630","text-align":"center","line-height":"45px",cursor:"pointer"},on:{click:function(e){t.newaddress()}}},[t._v("新建地址")])]),t._v(" "),s("div",{staticStyle:{position:"relative"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.delshow,expression:"delshow"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[s("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[s("div",{staticClass:"flex-around-justify flex-align-center",staticStyle:{"background-color":"#fff",width:"650px",position:"relative",padding:"40px"}},[s("div",{staticStyle:{position:"absolute",top:"10px",right:"10px"},on:{click:function(e){t.delcancel()}}},[s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:i("Bvvs")}})]),t._v(" "),s("div",{staticStyle:{"font-size":"18px","margin-bottom":"30px","text-align":"center"}},[t._v("是否删除此地址？")]),t._v(" "),s("div",{staticStyle:{width:"100%",padding:"15px",border:"1px solid #E5E5E5","margin-bottom":"50px"}},[s("div",{staticClass:"flex",staticStyle:{"margin-bottom":"10px"}},[s("span",{staticStyle:{width:"80px"}},[t._v("收货人:")]),s("span",[t._v(t._s(t.deladdress.name))])]),t._v(" "),s("div",{staticClass:"flex",staticStyle:{"margin-bottom":"10px"}},[s("span",{staticStyle:{width:"80px"}},[t._v("联系方式:")]),t.deladdress.contactmobile&&11==t.deladdress.contactmobile.length?s("span",[t._v(t._s(t.deladdress.contactmobile.substring(0,3))+"****"+t._s(t.deladdress.contactmobile.substring(7,13)))]):t._e()]),t._v(" "),s("div",{staticClass:"flex",staticStyle:{"margin-bottom":"10px"}},[s("span",{staticStyle:{width:"80px"}},[t._v("收货地址:")]),s("span",{staticStyle:{width:"460px"}},[t._v(t._s(t.deladdress.province)+" "+t._s(t.deladdress.city)+"  "+t._s(t.deladdress.country)+" "+t._s(t.deladdress.address))])])]),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("button",{staticStyle:{border:"none",width:"120px",height:"45px","background-color":"#FCCB52",color:"#fff","text-align":"center","line-height":"45px","margin-right":"10px"},on:{click:function(e){t.deleteaddress()}}},[t._v("确定")]),t._v(" "),s("button",{staticStyle:{border:"1px solid #FCCB52",width:"120px",height:"45px",color:"#FCCB52","text-align":"center","line-height":"45px"},on:{click:function(e){t.delcancel()}}},[t._v("取消")])])])])])]),t._v(" "),s("div",{staticStyle:{position:"relative"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.addshow,expression:"addshow"}],staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",width:"100%",height:"100vh",top:"0",left:"0"}},[s("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{height:"100vh"}},[s("div",{staticClass:"flex flex-around-justify flex-v",staticStyle:{"background-color":"#fff",padding:"25px 60px 25px 30px",position:"relative"}},[s("div",{staticClass:"add_colose",on:{click:function(e){t.close()}}},[s("i",{staticClass:"iconfont icon-close",staticStyle:{"font-weight":"bold",color:"#bfbfbf"}})]),t._v(" "),t.updateaddressid?t._e():s("div",{staticClass:"add_titile"},[t._v("新增地址")]),t._v(" "),t.updateaddressid?s("div",{staticStyle:{"font-size":"16px","margin-bottom":"10px"}},[t._v("修改地址")]):t._e(),t._v(" "),s("div",{staticClass:"flex region"},[s("div",{staticStyle:{"padding-right":"15px"}},[t._v("所在地区")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.provinceid,expression:"provinceid"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.provinceid=e.target.multiple?i:i[0]},t.changeprovince]}},t._l(t.province,function(e,i){return s("option",{key:i,domProps:{value:e.id}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])})),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.cityid,expression:"cityid"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.cityid=e.target.multiple?i:i[0]},t.changecity]}},t._l(t.city,function(e,i){return s("option",{key:i,domProps:{value:e.id}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])})),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.countryid,expression:"countryid"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.countryid=e.target.multiple?i:i[0]}}},t._l(t.country,function(e,i){return s("option",{key:i,domProps:{value:e.id}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])}))]),t._v(" "),s("div",{staticClass:"flex region"},[s("div",{staticStyle:{"padding-right":"15px"}},[t._v("详细地址")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{placeholder:"详细街道，门牌号等"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"flex region"},[s("div",{staticClass:"flex"},[s("div",{staticStyle:{"padding-right":"27px"}},[t._v("收货人")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"flex region"},[s("div",{staticStyle:{"padding-right":"24px","padding-left":"15px"}},[t._v("手机号码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactMobile,expression:"contactMobile"}],domProps:{value:t.contactMobile},on:{input:function(e){e.target.composing||(t.contactMobile=e.target.value)}}})])]),t._v(" "),s("div",{staticStyle:{"border-top":"1px solid #F4F4F4","padding-top":"20px"},on:{click:function(e){t.isdef()}}},[s("span",{staticStyle:{display:"inline-block","vertical-align":"middle",border:"1px solid #D3D3D3","border-radius":"50px",width:"15px",height:"15px","margin-right":"10px"},style:1==t.isDefault?"background-color:#FF0506;border:1px solid #FF0506;":""}),t._v("设为默认")]),t._v(" "),s("div",{staticClass:"flex region_btn"},[s("div",{on:{click:function(e){t.addaddress()}}},[t._v("确定")]),t._v(" "),s("div",{on:{click:function(e){t.addcancel()}}},[t._v("取消")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{padding:"10px 0","background-color":"#F8F8F8",overflow:"hidden"}},[e("div",{staticStyle:{width:"117px","text-align":"center",float:"left"}},[this._v("收件人")]),this._v(" "),e("div",{staticStyle:{width:"330px","text-align":"center",float:"left"}},[this._v("地址")]),this._v(" "),e("div",{staticStyle:{width:"160px","text-align":"center",float:"left"}},[this._v("联系方式")]),this._v(" "),e("div",{staticStyle:{width:"170px","text-align":"center",float:"left"}},[this._v("操作")])])}]};var c=i("VU/8")(r,l,!1,function(t){i("OaI0")},"data-v-4ea00147",null);e.default=c.exports}});
//# sourceMappingURL=34.894e1ed4b02b5e071f81.js.map
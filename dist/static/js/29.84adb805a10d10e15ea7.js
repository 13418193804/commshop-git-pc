webpackJsonp([29],{EMUB:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("TToO"),o=t("7+uW"),r=t("c+8m"),l=t.n(r),c=t("DZ+H"),s=t("ymRw"),d=t("TJML"),i=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.realName="",a.bankName="",a.cardId="",a.subBranch="",a}return n.c(a,e),a.prototype.addcard=function(){var e=this;""!=this.realName?""!=this.bankName?""!=this.cardId?""!=this.subBranch?o.default.prototype.$reqFormPost("/bank/card/add",{userId:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].token,cardId:this.cardId,bankName:this.bankName,realName:this.realName,subBranch:this.subBranch},function(a){if(null!=a){if(200!=a.data.status)return console.log("需控制错误码"+a.data.status+",错误信息："+a.data.message),void Object(s.Toast)(a.data.message);e.$router.go(-1),console.log(a.data)}else console.log("网络请求错误！")}):Object(s.Toast)("请填写银行卡所在支行"):Object(s.Toast)("请填写银行卡号"):Object(s.Toast)("请填写开户银行名称"):Object(s.Toast)("请输入持卡人真实姓名")},a.prototype.mounted=function(){console.log("添加银行卡")},a=n.b([l()({components:{comhead:d.a},mixins:[c.a]})],a)}(o.default),u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"tab-contents"},[t("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"我的银行卡",isRightIcon:"true"},on:{leftClick:!1}}),e._v(" "),t("van-cell-group",[t("van-field",{attrs:{label:"持卡人",placeholder:"持卡人真实姓名"},model:{value:e.realName,callback:function(a){e.realName=a},expression:"realName"}}),e._v(" "),t("van-field",{attrs:{label:"开户银行",placeholder:"填写开户银行名称"},model:{value:e.bankName,callback:function(a){e.bankName=a},expression:"bankName"}}),e._v(" "),t("van-field",{attrs:{label:"银行卡号",placeholder:"填写银行卡号"},model:{value:e.cardId,callback:function(a){e.cardId=a},expression:"cardId"}}),e._v(" "),t("van-field",{attrs:{label:"支行",placeholder:"填写银行卡所在支行"},model:{value:e.subBranch,callback:function(a){e.subBranch=a},expression:"subBranch"}})],1),e._v(" "),t("p",{staticStyle:{"margin-top":"200px","text-align":"center"}},[e._v("提示：提交前，请详细核对银行卡号和信息")]),e._v(" "),t("div",{staticStyle:{padding:"20px"}},[t("van-button",{staticStyle:{color:"#ffffff","background-color":"#f4c542","border-radius":"8px"},attrs:{size:"normal",block:!0},on:{click:function(a){e.addcard()}}},[e._v("新增")])],1)],1)},staticRenderFns:[]};var f=t("VU/8")(i,u,!1,function(e){t("LJ9D")},"data-v-628430ea",null);a.default=f.exports},LJ9D:function(e,a){}});
//# sourceMappingURL=29.84adb805a10d10e15ea7.js.map
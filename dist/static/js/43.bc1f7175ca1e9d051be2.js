webpackJsonp([43],{H4Sy:function(t,e){},yk2p:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("TToO"),r=o("7+uW"),s=o("c+8m"),n=o.n(s),i=o("DZ+H"),c=o("ymRw"),l=o("TJML"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.recordList="",e}return a.c(e,t),e.prototype.getrecordList=function(){var t=this;r.default.prototype.$reqFormPost("/withdraw/record/listbyuser",{userId:this.$store.getters[r.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[r.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(c.Toast)(e.data.message);t.recordList=e.data.data.recordList,console.log("getrecordList",e.data.data.recordList)}else console.log("网络请求错误！")})},e.prototype.mounted=function(){this.getrecordList(),console.log("提现记录")},e=a.b([n()({components:{comhead:l.a},mixins:[i.a]})],e)}(r.default),d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-contents"},[o("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"提现记录",isRightIcon:"true"},on:{leftClick:!1}}),t._v(" "),o("van-cell-group",t._l(t.recordList,function(e,a){return o("van-cell",{key:a,attrs:{value:e.updateTime}},[o("template",{slot:"title"},[o("span",{staticClass:"van-cell-text"},[t._v("-"+t._s(e.amount))])])],2)}))],1)},staticRenderFns:[]};var f=o("VU/8")(u,d,!1,function(t){o("H4Sy")},"data-v-28a28954",null);e.default=f.exports}});
//# sourceMappingURL=43.bc1f7175ca1e9d051be2.js.map
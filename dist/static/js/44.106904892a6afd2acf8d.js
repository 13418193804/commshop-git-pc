webpackJsonp([44],{"1shP":function(t,e){},xJzD:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("TToO"),a=o("7+uW"),s=o("c+8m"),c=o.n(s),r=o("DZ+H"),l=o("ymRw"),i=o("TJML"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.content="",e}return n.c(e,t),e.prototype.feedback=function(){var t=this;""!=this.content?a.default.prototype.$reqFormPost("/feedback/add",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,content:this.content},function(e){if(null!=e){if(console.log(e),200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(l.Toast)(e.data.message);Object(l.Toast)("已提交"),console.log("res.data",e.data),t.$router.go(-1)}else console.log("网络请求错误！")}):Object(l.Toast)("请输入反馈内容")},e.prototype.handlePX=function(t,e){return t+":"+this.$store.getters[a.default.prototype.MutationTreeType.SYSTEM].availWidth/750*e+"px;"},e.prototype.mounted=function(){console.log("收藏页面")},e=n.b([c()({components:{comhead:i.a},mixins:[r.a]})],e)}(a.default),d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-contents",staticStyle:{height:"-webkit-fill-available","background-color":"#f3f3f3"}},[o("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"意见反馈",isRightIcon:"true"},on:{leftClick:!1}}),t._v(" "),o("van-cell-group",[o("van-field",{style:t.handlePX("padding",30),attrs:{type:"textarea",placeholder:"请输入反馈意见",rows:"7",autosize:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),o("div",{staticStyle:{"margin-top":"20px"}},[o("van-button",{attrs:{size:"large"},on:{click:function(e){t.feedback()}}},[t._v("提交")])],1)],1)},staticRenderFns:[]};var f=o("VU/8")(u,d,!1,function(t){o("1shP")},"data-v-149ebceb",null);e.default=f.exports}});
//# sourceMappingURL=44.106904892a6afd2acf8d.js.map
webpackJsonp([40],{"0RXj":function(t,e){},"G/+7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("TToO"),o=s("7+uW"),i=s("c+8m"),n=s.n(i),r=s("DZ+H"),l=s("ymRw"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.messagelist=[],e.page=0,e}return a.c(e,t),e.prototype.getList=function(){var t=this;o.default.prototype.$reqFormPost("/message/list",{userId:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[o.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(l.Toast)(e.data.message);console.log(e.data.data),t.messagelist=e.data.data.messageList}else console.log("网络请求错误！")})},e.prototype.mounted=function(){this.getList()},e=a.b([n()({components:{},mixins:[r.a]})],e)}(o.default),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab-contents"},[s("div",{staticStyle:{padding:"30px"}},t._l(t.messagelist,function(e,a){return s("div",{key:a,staticClass:"flex flex-pack-justify",staticStyle:{padding:"15px 0","border-bottom":"1px dashed #E5E5E5"}},[s("div",{style:0==e.status?"color:#000":"color:#E5E5E5"},[0==e.status?s("span",{staticStyle:{display:"inline-block","vertical-align":"middle","background-color":"#FF0506","border-radius":"50px",width:"10px",height:"10px"}}):t._e(),t._v(t._s(e.content)),s("span",{staticStyle:{color:"#FDD273"}},[t._v("查看详情》")])]),t._v(" "),s("div",{staticStyle:{color:"#B4B4B4"}},[t._v(t._s(e.updateTime))])])}))])},staticRenderFns:[]};var u=s("VU/8")(d,c,!1,function(t){s("0RXj")},"data-v-124d4e52",null);e.default=u.exports}});
//# sourceMappingURL=40.89be24cf75671348fcc1.js.map
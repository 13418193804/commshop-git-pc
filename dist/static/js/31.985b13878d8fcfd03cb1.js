webpackJsonp([31],{Rycf:function(t,e){},oSeL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("TToO"),d=a("7+uW"),i=a("c+8m"),o=a.n(i),r=a("DZ+H"),s=a("ymRw"),l=a("TJML"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cardlist=[],e.isDefaultid="",e}return n.c(e,t),e.prototype.getBankCardList=function(){var t=this;d.default.prototype.$reqFormPost("/bank/card/list",{userId:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[d.default.prototype.MutationTreeType.TOKEN_INFO].token},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(s.Toast)(e.data.message);for(var a=0;a<e.data.data.length;a++)e.data.data[a].isDefault&&(t.isDefaultid=e.data.data[a].id);t.cardlist=e.data.data,console.log(e.data.data)}else console.log("网络请求错误！")})},e.prototype.addbangcard=function(){this.$router.push({path:"/add_bank_card",query:{}})},e.prototype.goback=function(){this.$router.push({path:"/reward",query:{cardid:this.isDefaultid}})},e.prototype.handlePX=function(t,e){return t+":"+this.$store.getters[d.default.prototype.MutationTreeType.SYSTEM].availWidth/750*e+"px;"},e.prototype.mounted=function(){this.getBankCardList(),console.log("选择银行")},e=n.b([o()({components:{comhead:l.a},mixins:[r.a]})],e)}(d.default),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-contents"},[n("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"选择银行",isRightIcon:"true"},on:{leftClick:!1}}),t._v(" "),t._l(t.cardlist,function(e,d){return n("div",{key:d,style:t.handlePX("padding",30)+t.handlePX("padding-top",0)+t.handlePX("padding-bottom",0)},[n("div",{staticClass:"flex flex-align-center",staticStyle:{"border-bottom":"1px solid #dedede","box-sizing":"border-box"},style:t.handlePX("height",160)},[n("img",{staticStyle:{"border-radius":"50%"},style:t.handlePX("height",70)+t.handlePX("widht",70)+t.handlePX("margin-left",20),attrs:{src:a("4Tr4")}}),t._v(" "),n("div",{staticClass:"flex-1",style:t.handlePX("margin-left",20)},[n("div",[t._v(t._s(e.bankName)),n("span",{staticStyle:{"font-size":"12px"}},[t._v("(信用卡)")])]),t._v(" "),n("div",[t._v(t._s(e.cardId))])]),t._v(" "),n("van-radio-group",{model:{value:t.isDefaultid,callback:function(e){t.isDefaultid=e},expression:"isDefaultid"}},[n("van-radio",{attrs:{name:e.id}})],1)],1)])}),t._v(" "),n("div",{style:t.handlePX("padding",30)+t.handlePX("padding-top",60)},[n("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{color:"#959595",border:"1px solid #d9d9d9","box-sizing":"border-box"},style:t.handlePX("height",140),on:{click:function(e){t.addbangcard()}}},[t._v("\n    +添加银行卡\n  ")])]),t._v(" "),n("div",{style:t.handlePX("padding",30)},[n("van-button",{staticStyle:{width:"100%",color:"#ffffff","background-color":"#ffc530","border-radius":"10px"},on:{click:function(e){t.goback()}}},[t._v("确认")])],1)],2)},staticRenderFns:[]};var f=a("VU/8")(c,u,!1,function(t){a("Rycf")},"data-v-7111bf96",null);e.default=f.exports}});
//# sourceMappingURL=31.985b13878d8fcfd03cb1.js.map
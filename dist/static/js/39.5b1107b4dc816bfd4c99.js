webpackJsonp([39],{YkY1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("TToO"),s=o("7+uW"),a=o("c+8m"),n=o.n(a),l=o("DZ+H"),r=o("ymRw"),c=o("TJML"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.shipInfoList=[],e}return i.c(e,t),e.prototype.getShipInfoList=function(){var t=this;s.default.prototype.$reqFormPost("/transport/info",{com:this.$route.query.transportCode,nu:this.$route.query.transportNo},function(e){if(null!=e){if(200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(r.Toast)(e.data.message);t.shipInfoList=e.data.data,console.log("查看物流信息",e.data.data)}else console.log("网络请求错误！")})},e.prototype.mounted=function(){console.log(this.$route.query),this.getShipInfoList()},e=i.b([n()({components:{comhead:c.a},mixins:[l.a]})],e)}(s.default),v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-contents",staticStyle:{height:"-webkit-fill-available","background-color":"#f7f7f7",overflow:"auto"}},[o("comhead",{ref:"comhead",attrs:{isLeftIcon:"icon-zuo",leftIconName:"angle-left",title:"物流信息",isRightIcon:"true"},on:{leftClick:!1}}),t._v(" "),o("div",{staticClass:"detailBody"},t._l(t.$route.query.detailList,function(e){return o("div",[o("div",{staticClass:"product1"},[o("div",{staticClass:"flex flex-align-center"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsImg,expression:"items.goodsImg"}],staticStyle:{height:"80px",width:"80px"}})]),t._v(" "),o("div",{staticClass:"flex-1",staticStyle:{"font-size":"12px",overflow:"hidden",padding:"0 10px"}},[o("div",{staticClass:"lineTwoType"},[t._v(t._s(e.goodsName))]),t._v(" "),o("div",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",color:"#999"}},[o("div",[t._v(" "+t._s(e.jingle))])])]),t._v(" "),o("div",{staticStyle:{"text-align":"center","font-size":"14px"}},[o("div",[t._v("￥"+t._s(e.goodsPrice))]),t._v(" "),e.labelPrice?o("div",{staticClass:"labelPrice"},[t._v("原价:"+t._s(e.labelPrice))]):t._e(),t._v(" "),o("div",[t._v("X "+t._s(e.goodsNum))])])])])})),t._v(" "),o("div",{staticClass:"contentBox",staticStyle:{"border-bottom":"1px #e5e5e5 solid"}},[o("div",[t._v("物流公司："+t._s(t.$route.query.transportName)+" ")]),t._v(" "),o("div",[t._v("物流电话："+t._s(t.$route.query.transportMobile)+" ")]),t._v(" "),o("div",[t._v("物流单号："+t._s(t.$route.query.transportNo)+" ")])]),t._v(" "),o("div",t._l(t.shipInfoList,function(e,i){return o("div",{key:i,staticClass:"contentBox",style:0!=i?"color:#999":""},[o("div",[t._v(t._s(e.time))]),t._v(" "),o("div",[t._v(t._s(e.context))])])}))],1)},staticRenderFns:[]};var u=o("VU/8")(d,v,!1,function(t){o("p7oI")},"data-v-3d01de09",null);e.default=u.exports},p7oI:function(t,e){}});
//# sourceMappingURL=39.5b1107b4dc816bfd4c99.js.map
webpackJsonp([32],{"90dd":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("TToO"),i=o("7+uW"),a=o("c+8m"),r=o.n(a),n=o("DZ+H"),l=o("ymRw"),d=o("TJML"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.goodsList=[],e.checkedGoods=[],e.isShow=!1,e.classindex=999,e}return s.c(e,t),e.prototype.toggle=function(){this.isShow=!this.isShow},e.prototype.over=function(t){this.classindex=t},e.prototype.out=function(t){this.classindex=NaN},e.prototype.favdelete=function(t){var e=this;i.default.prototype.$reqFormPost("/fav/delete",{userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,goodsIds:t.goodsId},function(t){if(null!=t)return 200!=t.data.status?(console.log("需控制错误码"+t.data.status+",错误信息："+t.data.message),void Object(l.Toast)(t.data.message)):void e.getProductList();console.log("网络请求错误！")})},e.prototype.allchange=function(){if(this.goodsList.length==this.checkedGoods.length)this.checkedGoods=[];else{var t=[];this.goodsList.forEach(function(e,o){console.log(),t.push(e.goodsId)}),this.checkedGoods=t}},e.prototype.getProductList=function(){var t=this;i.default.prototype.$reqFormPost1("/fav/query",{userId:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[i.default.prototype.MutationTreeType.TOKEN_INFO].token,page:0,pageSize:20},function(e){200==e.returnCode?(console.log("收藏",e.data.goodsList),t.goodsList=e.data.goodsList):t.$Message.warning(e.message)})},e.prototype.goProductDetail=function(t){this.$router.push({path:"/productdetail",query:{goodsId:t}})},e.prototype.handlePX=function(t,e){return t+":"+this.$store.getters[i.default.prototype.MutationTreeType.SYSTEM].availWidth/750*e+"px;"},e.prototype.mounted=function(){this.getProductList(),console.log("收藏页面")},e=s.b([r()({components:{comhead:d.a},mixins:[n.a]})],e)}(i.default),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"-webkit-fill-available","background-color":"#FFFFFF"}},[s("div",[s("el-row",{staticClass:"flex-warp-justify",attrs:{gutter:10,type:"flex",justify:"start"}},t._l(t.goodsList,function(e,i){return s("el-col",{key:i,attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[s("div",{staticClass:"flex flex-align-center",staticStyle:{width:"200px",margin:"10px"},on:{mouseover:function(e){t.over(i)},mouseout:function(e){t.out(i)}}},[s("div",{staticStyle:{position:"relative"}},[i==t.classindex?s("div",{staticStyle:{position:"absolute",top:"-10px",right:"-10px"}},[s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:o("Bvvs")},on:{click:function(o){t.favdelete(e)}}})]):t._e(),t._v(" "),s("div",{staticClass:"flex flex-v flex-pack-center",class:i==t.classindex?"overclass":"outclass"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsImg.split(",")[0],expression:"item.goodsImg.split(',')[0]"}],staticStyle:{width:"100%","vertical-align":"middle"}}),t._v(" "),s("div",{staticStyle:{width:"200px","text-align":"center",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",height:"25px","line-height":"25px","background-color":"#EFF1F1"}},[t._v(t._s(e.jingle))])]),t._v(" "),s("div",[s("span",{staticClass:"textLabel",staticStyle:{color:"#000000","font-size":"15px"}},[t._v(t._s(e.goodsName))])]),t._v(" "),s("div",[s("span",{staticClass:"textLabel marketPrice"},[t._v("￥"+t._s(e.marketPrice))])])])])])}))],1)])},staticRenderFns:[]};var p=o("VU/8")(c,u,!1,function(t){o("cddr")},"data-v-59692162",null);e.default=p.exports},cddr:function(t,e){}});
//# sourceMappingURL=32.2064d0b2d1ee06001db5.js.map
webpackJsonp([39],{Cllt:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("TToO"),o=e("7+uW"),a=e("c+8m"),r=e.n(a),n=e("DZ+H"),c=e("h1Nz"),l=e("au/Y"),d=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return s.keyword="",s.pageSize=12,s.page=0,s.total=0,s.parentId="",s.changeRed="0",s.sortStatus=!1,s.secItem={},s.catId="",s.catList=[],s.sortName="",s.shopList=[],s.goodsId="",s.detatil={commentList:[],detail:{imageList:[]},goodsImg:"",goodsName:"",jingle:"",labelPrice:0,marketPrice:0,onlineStatus:"",sku:[],skuKey:[],storageNum:0},s.num=1,s.skuattr=[],s.chosenList=[],s.chosensku=[],s.skuItem={},s.commentnum=0,s.praise="0",s.tabindex=0,s.tabgoodslist=[],s.likeList=[],s.newList=[],s}return i.c(s,t),s.prototype.onPageChange=function(t){this.page=t-1,this.getproductList()},s.prototype.mounted=function(){var t=this.$refs.wintabe;this.keyword=sessionStorage.keyword,sessionStorage.keyword="",this.keyword&&(t.keyword=this.keyword,this.getproductList()),"filter"!==this.$route.query.type&&(this.catId=sessionStorage.catId,this.parentId=sessionStorage.parentId,this.getSecCatList())},s.prototype.goProductDetail=function(t){this.$router.push({path:"/productdetail",query:{goodsId:t}})},s.prototype.getCarList=function(){},s.prototype.getSecCatList=function(){var t=this,s={};this.$refs.wintabe;Object.assign(s,{parentId:this.parentId}),o.default.prototype.$reqFormPost1("/user/cat/list",s,function(s){if(200!==s.returnCode)return console.log(s),t.$Message.warning(s.message),void console.log(s.message);t.catList=s.data;var e=t.catList.filter(function(s,e){return s.catId==t.catId});t.checkSecCat(e[0])})},s.prototype.checkSecCat=function(t){this.secItem=t,this.catId=t.catId,this.getproductList()},s.prototype.doPriceFitler=function(t){this.sortName!==t?this.sortName=t:this.sortStatus=!this.sortStatus,this.getproductList()},s.prototype.getproductList=function(){var t=this,s=this.$refs.wintabe,e={page:this.page,pageSize:this.pageSize};"filter"!==this.$route.query.type&&Object.assign(e,{catId:this.catId}),""!==(this.sortName||"")&&Object.assign(e,{sortName:this.sortName}),""==this.sortStatus&&void 0==this.sortStatus||Object.assign(e,{sortStatus:this.sortStatus}),""!==(s.keyword||"")&&"filter"==this.$route.query.type&&Object.assign(e,{keyWord:s.keyword}),o.default.prototype.$reqFormPost1("/user/goods/list",e,function(s){if(200!==s.returnCode)return t.$Message.warning(s.message),void console.log(s.message);t.shopList=s.data.goodsList,t.total=s.data.page.total})},s.prototype.handleStatus=function(t){return this.sortName==t&&0==this.sortStatus?"sortPrice":this.sortName==t&&this.sortStatus?"sortTime":""},s.prototype.selecttablist=function(t){this.tabgoodslist=[],0==t&&(this.tabgoodslist=this.likeList,this.tabindex=0),1==t&&(this.tabgoodslist=this.newList,this.tabindex=1)},s=i.b([r()({components:{Wintabe:c.a,Winbeet:l.a},mixins:[n.a]})],s)}(o.default),u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"tab-contents",staticStyle:{overflow:"hidden"}},[i("wintabe",{ref:"wintabe",attrs:{table:!0,router:!0},on:{filterproduct:function(s){t.getproductList()}}}),t._v(" "),i("div",{staticClass:" flex flex-pack-center"},[i("div",{staticStyle:{width:"1200px"}},[i("div",{staticClass:"classify_shop"},[i("div",{staticClass:"classify_top"},["filter"!==t.$route.query.type?i("div",{staticClass:"flex"},[i("div",[t._v(" 分类")]),t._v(" "),i("div",t._l(t.catList,function(s,e){return i("span",{key:e,staticClass:"colorGray",class:{colorYellow:s.catId==t.catId},on:{click:function(e){t.checkSecCat(s)}}},[t._v("\n                          "+t._s(s.catName)+"\n                          ")])}))]):t._e(),t._v(" "),i("div",{staticClass:"flex"},[i("div",[t._v(" 排序")]),t._v(" "),i("div",[i("span",{style:"PRICE"!==t.sortName&&"SALES"!==t.sortName?" color:#f4c542":"",on:{click:function(s){t.doPriceFitler("")}}},[t._v("默认")]),t._v(" "),i("span",{class:t.handleStatus("PRICE"),style:"PRICE"==t.sortName?" color:#f4c542":"",on:{click:function(s){t.doPriceFitler("PRICE")}}},[t._v("价格")]),i("span",{class:t.handleStatus("SALES"),style:"SALES"==t.sortName?" color:#f4c542":"",on:{click:function(s){t.doPriceFitler("SALES")}}},[t._v("销量")])])])]),t._v(" "),t._e(),t._v(" "),i("div",{staticClass:"shop_list"},[i("ul",{staticClass:"flex flex-warp-justify"},t._l(t.shopList,function(s,o){return i("li",{key:o,on:{click:function(e){t.goProductDetail(s.goodsId)}}},[i("div",{staticClass:"shop_img"},[s.hotStatus?i("div",{staticClass:"hot"},[i("img",{attrs:{src:e("J7Va")}})]):t._e(),t._v(" "),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.goodsImg.split(",")[0],expression:"shopItem.goodsImg.split(',')[0]"}],staticStyle:{height:"270px"}}),t._v(" "),i("h4",{staticClass:"ellipsis"},[t._v(t._s(s.jingle))])]),t._v(" "),i("div",{staticClass:"shop_details"},[i("div",{staticClass:"discounts"},[s.couponList.length>0?i("span",[t._v("满减")]):t._e(),t._v(" "),s.isBargain?i("span",{staticStyle:{color:"#f4c542",border:"1px solid #f4c542"}},[t._v("特价")]):t._e()]),t._v(" "),i("h3",{staticClass:"ellipsis"},[t._v(" "+t._s(s.goodsName))]),t._v(" "),i("p",{staticClass:"shop_prce",staticStyle:{color:"red"}},[t._v("￥"+t._s(s.costPrice))])])])}))]),t._v(" "),t.total>0?i("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.onPageChange}}):t._e()],1)])]),t._v(" "),i("winbeet")],1)])},staticRenderFns:[]};var p=e("VU/8")(d,u,!1,function(t){e("XSto")},"data-v-41cab7af",null);s.default=p.exports},XSto:function(t,s){}});
//# sourceMappingURL=39.5de3eb6f1ef7e840d654.js.map
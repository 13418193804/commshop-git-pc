webpackJsonp([23],{EbN5:function(t,e){},k6mo:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("TToO"),a=s("7+uW"),o=s("c+8m"),l=s.n(o),r=s("DZ+H"),n=s("ymRw"),d=s("h1Nz"),c=s("au/Y"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.goodsId="",e.detatil={commentList:[],detail:{imageList:[]},goodsImg:"",goodsName:"",jingle:"",labelPrice:0,marketPrice:0,onlineStatus:"",sku:[],skuKey:[],storageNum:0},e.num=1,e.skuattr=[],e.chosenList=[],e.chosensku=[],e.skuItem={},e.commentnum=0,e.praise="0",e.tabindex=0,e.tabgoodslist=[],e.likeList=[],e.newList=[],e}return i.c(e,t),e.prototype.mounted=function(){this.goodsId=this.$route.query.goodsId,this.getProductDetail()},e.prototype.selecttablist=function(t){this.tabgoodslist=[],0==t&&(this.tabgoodslist=this.likeList,this.tabindex=0),1==t&&(this.tabgoodslist=this.newList,this.tabindex=1)},e.prototype.addCar=function(){var t=this;this.skuItem.skuId?a.default.prototype.$reqFormPost("/prepare/order/direct",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,goodsId:this.goodsId,skuId:this.skuItem.skuId,num:this.num},function(e){if(null!=e){if(console.log(e),200!=e.data.status)return console.log("需控制错误码"+e.data.status+",错误信息："+e.data.message),void Object(n.Toast)(e.data.message);t.$store.commit(a.default.prototype.MutationTreeType.PREPAREID,e.data.data.prepareId),t.$router.push({path:"/settle"}),console.log("预支付订单ID",e.data.data.prepareId)}else console.log("网络请求错误！")}):Object(n.Toast)("请选择规格属性")},e.prototype.updataCollect=function(){var t=this;0==this.detatil.favStatus?(console.log("添加收藏"+this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId),console.log("this.detatil.favStatus = "+this.detatil.favStatus),a.default.prototype.$reqFormPost1("/fav/add",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,goodsId:this.goodsId},function(e){200!==e.returnCode?(t.$Message.warning(e.message),console.log("网络请求错误！")):(t.$Message.success("收藏成功"),t.getProductDetail())})):(console.log("取消收藏"+this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId),a.default.prototype.$reqFormPost1("/fav/delete",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,goodsIds:this.goodsId},function(e){200!==e.returnCode?(t.$Message.warning(e.message),console.log("网络请求错误！")):(t.$Message.success("已取消收藏"),t.getProductDetail())}))},e.prototype.addCart=function(){var t=this;this.skuItem.skuId?a.default.prototype.$reqFormPost1("/shop/cart/add",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,goodsId:this.goodsId,skuId:this.skuItem.skuId},function(e){if(200!==e.returnCode)return t.$Message.warning(e.message),void console.log("网络请求错误！");t.$Message.success("加入成功"),t.$refs.wintabe.getCartList()}):Object(n.Toast)("请选择规格属性")},e.prototype.selectSku=function(t,e){var s=this;if(!e.disable){""!=(this.chosenList[t]||"")&&this.chosenList[t]===e.skuValueId?(this.chosenList[t]="",this.chosensku[t]="",this.chosensku.splice(0,this.chosensku.length)):(this.chosenList[t]=e.skuValueId,this.chosensku[t]=e.skuValueName),this.chosenList=this.chosenList,this.skuItem={};if(this.detatil.skuKey.forEach(function(t,e){t.valueList.forEach(function(t,i){t.disable=!0;for(var a=0;a<s.detatil.sku.length;a++)if(s.detatil.sku[a].attrs[e].valueId==t.skuValueId){for(var o=!0,l=0;l<s.detatil.sku[a].attrs.length;l++)if(e!=l&&""!=(s.chosenList[l]||"")&&s.chosenList[l]!=s.detatil.sku[a].attrs[l].valueId){o=!1;break}if(o){t.disable=!1;break}}})}),this.chosenList.length===this.detatil.skuKey.length){if(function(){var t=!0;return s.chosenList.forEach(function(e,s){if(""===e)return t=!1,!1}),t})for(var i=0;i<this.detatil.sku.length;i++)for(var a=0,o=0;o<this.chosenList.length;o++)if(this.chosenList[o]===this.detatil.sku[i].attrs[o].valueId&&(console.log(this.chosenList[o]===this.detatil.sku[i].attrs[o].valueId,this.detatil.sku[i].attrs[o]),(a+=1)===this.chosenList.length)){this.skuItem=this.detatil.sku[i];break}}this.chosenList.push(),this.chosensku.push()}},e.prototype.getProductDetail=function(){var t=this;a.default.prototype.$reqFormPost1("/goods/front/detail",{userId:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].userId,token:this.$store.getters[a.default.prototype.MutationTreeType.TOKEN_INFO].token,goodsId:this.goodsId},function(e){if(200==e.returnCode){if(t.detatil=e.data,e.data.singleStatus&&(t.skuItem=e.data.sku[0]),console.log("-----------"),t.commentnum=e.data.commentNum,e.data.commentList.length>0){for(var s=0,i=0;i<e.data.commentList.length;i++)s=e.data.commentList[i].star+s;var a=(s=s/(5*e.data.commentList.length)*100).toFixed(0);t.praise=a}t.tabgoodslist=e.data.likeList,t.likeList=e.data.likeList,t.newList=e.data.newList,t.detatil.skuKey.forEach(function(e,s){e.valueList.forEach(function(e,i){var a={disable:!0,chosen:!1};t.detatil.sku.forEach(function(t,i){if(e.skuValueId===t.attrs[s].valueId)return a.disable=!1,!1}),Object.assign(e,a)})})}else t.$Message.warning(e.message)})},e=i.b([l()({components:{Wintabe:d.a,Winbeet:c.a},mixins:[r.a]})],e)}(a.default),p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tab-contents",staticStyle:{overflow:"hidden"}},[i("wintabe",{ref:"wintabe",attrs:{table:!0,router:!0}}),t._v(" "),i("div",{staticClass:" flex   flex-pack-center"},[i("div",{staticStyle:{width:"60%"}},[i("div",{staticClass:"flex  flex-align-center",staticStyle:{width:"100%","background-color":"#f7f7f7",height:"47px",padding:"0 10px","margin-bottom":"10px"}},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",[t._v(t._s(t.detatil.goodsName))])],1)],1)])]),t._v(" "),i("div",{staticClass:" flex   flex-pack-center"},[i("div",{staticClass:"flex",staticStyle:{width:"60%"}},[i("div",{staticStyle:{width:"500px"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.detatil.goodsImg.split(",")[0],expression:"detatil.goodsImg.split(',')[0]"}],staticStyle:{width:"100%"}}),t._v(" "),i("div",{staticClass:"flex",staticStyle:{overflow:"auto"}},t._l(t.detatil.goodsImg.split(","),function(t,e){return i("div",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],staticStyle:{width:"100px","margin-right":"10px"}})])}))]),t._v(" "),i("div",{staticClass:"flex-1",staticStyle:{padding:"0 10px"}},[i("div",{staticClass:"goodsName"},[t._v("\n  "+t._s(t.detatil.goodsName)+"\n")]),t._v(" "),i("div",{},[t._v("\n  "+t._s(t.detatil.jingle)+"\n")]),t._v(" "),i("div",{staticStyle:{border:"1px solid #e5e5e5",margin:"20px 0","background-color":"#FCFCFC","font-size":"14px"}},[i("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"10px 0",margin:"0 20px"}},[i("div",{staticStyle:{width:"50px"}},[t._v("价格")]),t._v(" "),i("div",[i("span",{staticClass:"marketPrice",staticStyle:{"font-size":"20px","margin-right":"10px"}},[t._v("￥"+t._s(t.detatil.marketPrice))]),t._v(" "),i("span",{staticClass:"labelPrice"},[t._v("原价￥"+t._s(t.detatil.labelPrice))])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),i("div",{staticStyle:{"font-size":"14px","max-height":"300px",overflow:"auto"}},t._l(t.detatil.skuKey,function(e,s){return i("div",{key:s,staticClass:"flex  flex-align-center"},[i("div",{staticStyle:{padding:"5px 20px 0",color:"#585858"}},[t._v(t._s(e.skuKeyIdName))]),t._v(" "),i("div",{staticClass:"skuKeyBox"},t._l(e.valueList,function(e,a){return i("div",{key:a},[i("div",{class:t.chosenList[s]===e?"sku_box_select":"sku_box",style:e.disable?"color:#ccc;border-color:#ccc;":""+t.chosenList[s]===e.skuValueId?"border-color:#f4c542;color:#f4c542":"",on:{click:function(i){i.stopPropagation(),t.selectSku(s,e)}}},[t._v(t._s(e.skuValueName))])])}))])})),t._v(" "),i("div",{staticClass:"num_box flex flex-align-center"},[i("div",{staticClass:"flex flex-align-center",staticStyle:{color:"#585858"}},[t._v("数量")]),t._v(" "),i("van-stepper",{staticStyle:{margin:"10px 0px 0px 20px"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),t._v(" "),i("div",{staticClass:"flex"},[i("van-button",{staticStyle:{"border-radius":"4%","background-color":"#fff",color:"#F4C542",border:"1px solid #F4C542","min-width":"150px","margin-right":"10px",overflow:"hidden"},on:{click:function(e){e.stopPropagation(),t.addCar()}}},[t._v("立即购买")]),t._v(" "),i("van-button",{staticStyle:{"border-radius":"4%","background-color":"#F4C542",color:"#FFFFFF",border:"#F4C542","min-width":"150px"},on:{click:function(e){e.stopPropagation(),t.addCart()}}},[t._v("加入购物车")]),t._v(" "),i("div",{staticStyle:{width:"45px",height:"45px",border:"1px solid #e5e5e5",margin:"0 10px","text-align":"center"}},[i("div",{class:t.detatil.favStatus?"collection_cur":"collection",on:{click:function(e){e.stopPropagation(),t.updataCollect()}}},[t._m(3),t._v(" "),i("span",{staticStyle:{color:"#999"}},[t._v(t._s(t.detatil.favStatus?"已收藏":"收藏"))])])])],1)])])]),t._v(" "),i("div",{staticClass:" flex   flex-pack-center"},[i("div",{staticStyle:{width:"60%","margin-top":"20px"}},[t._m(4),t._v(" "),i("div",{staticStyle:{height:"320px"}},[i("div",{staticClass:"flex",staticStyle:{overflow:"auto"}},t._l(t.tabgoodslist,function(e,a){return i("div",{key:a,on:{click:function(s){t.goProductDetail(e.goodsId)}}},[i("div",{staticClass:"flex flex-pack-center flex-align-center",staticStyle:{"margin-right":"20px","margin-top":"10px",border:"1px #e5e5e5 solid","box-sizing":"border-box",overflow:"hidden",position:"relative",padding:"100px"}},[i("img",{staticStyle:{width:"25px",position:"absolute",top:"0",left:"0","z-index":"2"},attrs:{src:s("HORy")}}),t._v(" "),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsImg.split(",")[0],expression:"items.goodsImg.split(',')[0]"}],staticStyle:{width:"-webkit-fill-available",position:"absolute",top:"0"}}),t._v(" "),i("div",{staticClass:"textLabel",staticStyle:{position:"absolute",bottom:"0",width:"100%","background-color":"rgba(207,207,207,0.3)","text-align":"center",color:"#A3A3A3",height:"28px","line-height":"28px"}},[t._v(t._s(e.jingle))])]),t._v(" "),i("div",{staticClass:"flex flex-pack-center flex-v",staticStyle:{width:"-webkit-fill-available"}},[t._m(5,!0),t._v(" "),i("div",{staticClass:"textLabel",staticStyle:{"font-size":"16px"}},[t._v(t._s(e.goodsName))]),t._v(" "),i("div",{staticStyle:{color:"#E05459","font-size":"15px"}},[t._v("￥"+t._s(e.marketPrice))])])])}))]),t._v(" "),t._m(6),t._v(" "),i("div",[i("div",{staticStyle:{"background-color":"#ffffff","margin-top":"10px"}},t._l(t.detatil.detail.imageList,function(t,e){return i("div",{key:e},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],staticStyle:{width:"100%"}})])}))])])]),t._v(" "),i("winbeet")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"10px 0",margin:"0 20px"}},[e("div",{staticStyle:{width:"50px"}},[this._v("限制")]),this._v(" "),e("div",[this._v("此商品不可与优惠券叠加使用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"10px 0",margin:"0 20px","border-bottom":"1px solid #e5e5e5"}},[e("div",{staticStyle:{width:"50px"}},[this._v("领券")]),this._v(" "),e("div",[e("span",{staticStyle:{color:"red"}},[this._v("立即领取>")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-align-center",staticStyle:{padding:"10px 0",margin:"0 20px"}},[s("div",{staticStyle:{width:"50px"}},[t._v("服务")]),t._v(" "),s("div",{staticClass:"flex flex-around-justify flex-align-center"},[s("div",[s("span",{staticStyle:{margin:"10px"}},[s("span",{staticStyle:{color:"#ffc630","font-weight":"800",margin:"0 5px"}},[t._v("·")]),s("span",[t._v("7天无忧退换货")])])]),t._v(" "),s("div",[s("span",{staticStyle:{margin:"10px"}},[s("span",{staticStyle:{color:"#ffc630","font-weight":"800",margin:"0 5px"}},[t._v("·")]),s("span",[t._v("24小时快速退款")])])]),t._v(" "),s("div",[s("span",{staticStyle:{margin:"10px"}},[s("span",{staticStyle:{color:"#ffc630","font-weight":"800",margin:"0 5px"}},[t._v("·")]),s("span",[t._v("中宜自营严选")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"iconfont icon-shoucang1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex",staticStyle:{height:"40px","background-color":"#f7f7f7","font-size":"15px","border-bottom":"1px solid #e5e5e5"}},[e("div",{staticClass:"taber selecttaber"},[this._v("大家还看了")]),this._v(" "),e("div",{staticClass:"taber"},[this._v("新品推荐")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"35px",margin:"10px 0"},attrs:{src:s("ILWi")}}),this._v(" "),e("img",{staticStyle:{width:"35px",margin:"10px 0"},attrs:{src:s("tp/U")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex",staticStyle:{height:"40px","background-color":"#f7f7f7","font-size":"15px","border-bottom":"1px solid #e5e5e5"}},[e("div",{staticClass:"taber selecttaber"},[this._v("商品详情")]),this._v(" "),e("div",{staticClass:"taber"},[this._v("评价")])])}]};var v=s("VU/8")(u,p,!1,function(t){s("EbN5")},"data-v-7145dad2",null);e.default=v.exports}});
//# sourceMappingURL=23.7d6b37080906afa24055.js.map
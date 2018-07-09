<template>
  <div>
    <div class="tab-contents" style="    overflow: hidden;">
      <wintabe ref="wintabe" :table="true" :router="true"></wintabe>
      <div class=" flex flex-pack-center">
          <div  style="width:60%;">
              <!-- 商品列表页-->
                <div class="classify_shop">
                    <div class="classify_top">
                        <div class="flex">
                          <div> 分类</div>
                          <div> <span>床上用品</span><span>被枕</span> </div>
                        </div>
                        <div class="flex">
                          <div> 排序</div>
                          <div> <span style="color:#f4c542">默认</span>
                          <span class="sortPrice">价格</span><span class="sortTime">上架时间</span> </div>
                        </div>
                    </div>
                    <!-- 新品上架 -->
                    <div class="headline flex-pack-center">
                      <h2>新品上架</h2>
                      <h3>XINGPING SHANGJIA </h3>
                    </div>
                    <!-- 商品列表 -->
                    <div class="shop_list">
                       <ul class="flex">
                           <li  v-for="(shopItem,index) in shopList"  :key="index">
                              <div class="shop_img">
                                <img v-lazy="shopItem.couponImg" style="height:270px;">
                                <h4 class="ellipsis">{{shopItem.jingle}}</h4>
                              </div>
                              <div class="shop_details">
                                <div class="discounts">
                                  <span v-if="shopItem.couponList">满减</span>
                                  <span v-if="shopItem.isBargain" style="color:#f4c542;border:1px solid #f4c542;">特价</span>
                                </div>
                                <h3 class="ellipsis"> {{shopItem.goodsName}}</h3>
                                <p class="shop_prce" style="color:red">￥{{shopItem.costPrice}}</p>
                              </div>
                         </li>
                       </ul>
                    </div>
                </div>
          </div>
      </div>
      <winbeet></winbeet>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Toast } from "vant";
import { Action } from "vuex-class";

import { Cell, CellGroup, ImagePreview } from "vant";
import Wintabe from "../../components/Wintabe.vue";
import Winbeet from "../../components/Winbeet.vue";
@Component({
  components: {
    Wintabe,
    Winbeet
  },
  mixins: [mixin]
})
export default class ProductDetail extends Vue {
  mounted() {
    console.log('进入该页面',sessionStorage.catId)
    this.catId = sessionStorage.catId
    this.getproductList();
  }
  catId = ''
  getproductList(){
    console.log('开始取商品列表')
    Vue.prototype.$reqFormPost1(
      "/user/goods/list",
      {
        catId: this.catId
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log(res.message);
          return;
        }
        this["$Message"].success("成功");
        this.shopList = res.data.goodsList;
        console.log(res.data.goodsList);
      }
    );
  }
  shopList = [];
  goodsId = "";
  detatil:any= {
    commentList: [],
    detail: {
      imageList: []
    },
    goodsImg: "",
    goodsName: "",
    jingle: "",
    labelPrice: 0,
    marketPrice: 0,
    onlineStatus: "",
    sku: [],
    skuKey: [],
    storageNum: 0,
  };
  num = 1;
  skuattr = [];
  chosenList = [];
  chosensku = [];
  skuItem = {};
  commentnum = 0;
  praise = "0";
  tabindex = 0;
  selecttablist(index) {
    this.tabgoodslist = [];
    if (index == 0) {
      this.tabgoodslist = this.likeList;
      this.tabindex = 0;
    }
    if (index == 1) {
      this.tabgoodslist = this.newList;
      this.tabindex = 1;
    }
  }
 
  // getProductDetail() {
  //   Vue.prototype.$reqFormPost1(
  //     "/goods/front/detail",
  //     {
  //       userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  //         .userId,
  //       token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  //         .token,
  //       goodsId: this.goodsId
  //     },
  //     res => {
  //       if (res.returnCode != 200) {
  //         this["$Message"].warning(res.message);
  //         return;
  //       }

  //       this.detatil = res.data;

  //       if (res.data.singleStatus) {
  //         this.skuItem = res.data.sku[0];
  //       }
  //       console.log("-----------");
  //       // 评论数量
  //       this.commentnum = res.data.commentNum;
  //       // 好评计算
  //       if (res.data.commentList.length > 0) {
  //         let total = 0;
  //         for (let i = 0; i < res.data.commentList.length; i++) {
  //           total = res.data.commentList[i].star + total;
  //         }
  //         total = total / (res.data.commentList.length * 5) * 100;
  //         const praisenum = total.toFixed(0);
  //         this.praise = praisenum;
  //       }

  //       this.tabgoodslist = res.data.likeList;
  //       this.likeList = res.data.likeList;
  //       this.newList = res.data.newList;

  //       // this.couponList = res.data.couponList;

  //       this.detatil.skuKey.forEach((keyItem, keyIndex) => {
  //         keyItem.valueList.forEach((valueItem, valueIndex) => {
  //           let opt = { disable: true, chosen: false };
  //           this.detatil.sku.forEach((skuItem, skuIndex) => {
  //             if (valueItem.skuValueId === skuItem.attrs[keyIndex].valueId) {
  //               opt.disable = false;
  //               return false;
  //             }
  //           });
  //           (<any>Object).assign(valueItem, opt);
  //         });
  //       });
  //     }
  //   );
  // }
  tabgoodslist = [];
  likeList = [];
  newList = [];
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.classify_shop{
  padding: 20px;
  .classify_top{
    div,div:nth-of-type(1){
      color:#a8a8a8;margin-right:20px;height:60px;line-height:60px;border-bottom:1px solid #ededed;
      span{
        color:#2a2a2a;padding-right:30px;cursor: pointer;
      }
      .sortPrice{
        background: url(../../assets/down.png) no-repeat right 17px center;
      }
      :hover{
        color:#f4c542;
      }
    }
  }
}
.headline{
  height:130px;padding-top:25px;
  h2{
    color:#525252;text-align:center;font-size: 30px;
  }
  h3{
    color:#313131;text-align:center;font-size:18px;
  }
}
.ellipsis{//单行文本溢出
  overflow: hidden;
  text-overflow:ellipsis;//文本溢出显示省略号
  white-space:nowrap;//文本不会换行（单行文本溢出）
}
.shop_list{
  ul{
    overflow:hidden;
    li{
      width:280px;border-radius: 3px;float: left;margin-right:30px;cursor: pointer;
      .shop_img{
        border:1px solid #ededed;margin-bottom:30px;
        img{
          
        }
         h4{
           height:54px;line-height:54px;background: #eff1f1;text-align: center;font-size: 22px;color: #a3a3a3;
           width:100%;
         }    
      } 
      .shop_details{
        div{
          margin-bottom:12px;
          span{
            display: inline-block;width:40px;height:19px;text-align: center;color:red;border:1px solid red;
            margin-right:10px;border-radius: 5px;
          }
        }
        h3{
          font-size: 20px;margin-bottom:8px;
        }
        p{
          font-size:16px;
        }
      }
    }
  }
}
</style>

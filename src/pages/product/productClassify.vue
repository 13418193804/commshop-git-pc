<template>
  <div>
    <div class="tab-contents" style="    overflow: hidden;">
      <wintabe ref="wintabe" :table="true" :router="true"></wintabe>
      <div class=" flex flex-pack-center">
          <div  style="width:1200px;">
              <!-- 商品列表页-->
                <div class="classify_shop">
                    <div class="classify_top">
                        <div class="flex">
                          <div> 分类</div>
                          <div> <span 
                          v-for="(catItem,index) in catList" :key="index" class="colorGray" 
                          :class="{ colorYellow:changeRed == index}" @click="seachList(index)" 
                          >
                            {{catItem.catName}}
                            </span>
                          </div>
                        </div>
                        <div class="flex">
                          <div> 排序</div>
                          <div> <span style="color:#f4c542">默认</span>
                          <span class="sortPrice">价格</span><span class="sortTime">销量</span> </div>
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
    this.catId = sessionStorage.catId,
    this.parentId = sessionStorage.parentId

    this.getproductList();
    this.getSecCatList();
  }

  parentId = ''
  changeRed= "0"
  getSecCatList(){
    //二级菜单
    Vue.prototype.$reqFormPost1(
      "/user/cat/list",
      {
        parentId: this.parentId
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log(res.message);
          return;
        }
        this["$Message"].success("成功");
        this.catList = res.data;
        console.log(res.data);
      }
    );
  }
  // 搜索列表
  seachList(index){
    this.changeRed = index;
    Vue.prototype.$reqFormPost1(
      "/user/goods/list",
      {
        catId: this.catId,
        sortName: '',
        sortStatus: ''
      },
      console.log('点击后的id', this.catId),
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log(res.message);
          return;
        }
        this["$Message"].success("成功");
        this.catList = res.data;
        console.log(res.data);
      }
    );
  }
  catId = '';
  catList = []
  sortName = ''
  sortStatus = ''
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
 

  tabgoodslist = [];
  likeList = [];
  newList = [];
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.classify_shop{
  .classify_top{
    div{
      color:#a8a8a8;margin-right:20px;height:60px;line-height:60px;border-bottom:1px solid #ededed;
      span{
        padding-right:30px;cursor: pointer;
      }
      .colorGray{
        color:#2a2a2a;
      }
      .colorYellow{
        color:#f4c542;
      }
      .sortPrice{
        background: url(../../assets/down.png) no-repeat right 17px center;
      }
      .sortTime{
        background: url(../../assets/down.png) no-repeat right 17px center;
      }
    }
    div:nth-of-type(2){
      width:90%;
      span:hover{
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
    overflow:hidden;margin-bottom:20px;
    li{
      width:277px;border-radius: 3px;float: left;margin-right:30px;cursor: pointer;
      .shop_img{
        border:1px solid #ededed;margin-bottom:30px;
        img{
          width:100%;height:230px;
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
    :nth-of-type(4),:nth-of-type(8),:nth-of-type(12){
      margin-right: 0;
    }
  }
}
</style>

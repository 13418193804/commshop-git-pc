<template>
  <div>
    <div class="tab-contents" style="    overflow: hidden;">
      <wintabe ref="wintabe" :table="true" :router="true" @filterproduct="getproductList()" ></wintabe>
      <div class=" flex flex-pack-center">
          <div  style="width:1200px;">
              <!-- 商品列表页-->
                <div class="classify_shop">
                    <div class="classify_top">
                        <div class="flex" v-if="$route.query.type !=='filter' && catList.length>0">
                          <div> 分类</div>
                          <div> <span 
                          v-for="(catItem,index) in catList" :key="index" class="colorGray" 
                          :class="{ colorYellow:catItem.catId == catId}" @click="checkSecCat(catItem)" 
                          >
                            {{catItem.catName}}
                            </span>
                          </div>
                        </div>
                        <div class="flex">
                          <div> 排序</div>
                          <div> <span :style="sortName !=='PRICE' && sortName !=='SALES'?' color:#f4c542':''"  @click="doPriceFitler('')">默认</span>
                          <span :class="handleStatus('PRICE')" :style="sortName =='PRICE'?' color:#f4c542':''" @click="doPriceFitler('PRICE')">价格</span><span :class="handleStatus('SALES')"  :style="sortName =='SALES'?' color:#f4c542':''" @click="doPriceFitler('SALES')">销量</span> </div>
                        </div>
                    </div>
                    <!-- 新品上架 -->
                    <div class="headline flex-pack-center" v-if="false">
                      <h2>{{secItem.catName}}</h2>
                    </div>
                    <!-- 商品列表 -->
                    <div class="shop_list" v-if="shopList.length>0">
                       <ul class="flex flex-warp-justify">
                           <li v-for="(shopItem,index) in shopList"  :key="index" @click="goProductDetail(shopItem.goodsId)">
                              <div class="shop_img collImg">
                                <div class="hot" v-if="shopItem.hotStatus"><img src="../../assets/hot.png"></div>
                                <img v-lazy="shopItem.goodsImg.split(',')[0]" style="height:270px;">
                                <h4 class="ellipsis">{{shopItem.jingle}}</h4>
                              </div>
                              <div class="shop_details">
                                <div class="discounts">
                                  <span v-if="shopItem.couponList.length>0">满减</span>
                                  <span v-if="shopItem.isBargain" style="color:#f4c542;border:1px solid #f4c542;">特价</span>
                                </div>
                                <h3 class="ellipsis"> {{shopItem.goodsName}}</h3>
                                <p class="shop_prce" style="color:red">￥{{shopItem.marketPrice.toFixed(2)}}</p>
                              </div>
                         </li>
                       </ul>
                    </div>
                    <!-- 暂无商品 -->
                  <div  style="font-size:14px;padding:15px;" v-else>
                      <div style="margin-top:50px;text-align:center;">
                        <img src="../../assets/none.png" />
                        <p>暂时还没有相关的商品哦！</p>
                      </div>
                  </div>

                    <el-pagination v-if="total>0"
                      background
                      layout="prev, pager, next"
                    :page-size="pageSize" :total="total" @current-change="onPageChange">
                    </el-pagination>
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
  keyword = "";
  pageSize = 12;
  page = 0;
  total = 0;
    onPageChange(page) {
    this.page = page - 1;
    this.getproductList();
  }
  mounted() {
    let a: any = this.$refs.wintabe;
    this.keyword = sessionStorage.keyword;
    sessionStorage.keyword = "";

    if (this.keyword) {
      a.keyword = this.keyword;
      this.getproductList();
    }
    if (this.$route.query.type !== "filter") {
      this.catId = sessionStorage.catId;
      this.parentId = sessionStorage.parentId;
      this.getSecCatList();
    }
    //分页
  }
  // H:\项目分类\康扬医德快\back-yidekuai
  parentId = "";
  changeRed = "0";
  goProductDetail(goodsId) {
    this.$router.push({
      path: "/productdetail",
      query: {
        goodsId: goodsId
      }
    });
  }
  getCarList() {}

  getSecCatList() {
    let data = {};
    let a: any = this.$refs.wintabe;

    (<any>Object).assign(data, {
      parentId: this.parentId
    });

    //二级菜单
    Vue.prototype.$reqFormPost1("/user/cat/list", data, res => {
      if (res.returnCode !== 200) {
        console.log(res);
        this["$Message"].warning(res.message);
        console.log(res.message);
        return;
      }
      this.catList = res.data;
      let a = this.catList.filter((item, index) => {
        return item.catId == this.catId;
      });
      this.checkSecCat(a[0]);
    });
  }

  checkSecCat(item) {
    this.secItem = item;
    this.catId = item.catId;
    this.catName = item.catName;
    this.getproductList();
  }

  sortStatus: any = false;
  doPriceFitler(sortName) {
    if (this.sortName !== sortName) {
      this.sortName = sortName;
    } else {
      this.sortStatus = !this.sortStatus;
    }
    this.getproductList();
  }

  getproductList() {
console.log('==========')
    this.shopList = []

    let a: any = this.$refs.wintabe;
    let data = {
      page: this.page,
      pageSize: this.pageSize
    };
    if (this.$route.query.type !== "filter") {
      (<any>Object).assign(data, { catId: this.catId });
    }
    if ((this.sortName || "") !== "") {
      (<any>Object).assign(data, { sortName: this.sortName });
    }
    if (this.sortStatus != "" || this.sortStatus != undefined) {
      (<any>Object).assign(data, { sortStatus: this.sortStatus });
    }
    if ((a.keyword || "") !== "" && this.$route.query.type == "filter") {
      (<any>Object).assign(data, { keyWord: a.keyword });
    }
    if(this.$route.query.type !=='filter'){
      (<any>Object).assign(data, { page: this.page});
      (<any>Object).assign(data, { pageSize: this.pageSize});
    }
    

   

    Vue.prototype.$reqFormPost1("/user/goods/list", data, res => {
      if (res.returnCode !== 200) {
        this["$Message"].warning(res.message);
        console.log(res.message);
        return;
      }
      this.shopList = res.data.goodsList;
      this.total = res.data.page.total
    });
  }

  secItem = {};
  catName = "";
  catId = "";
  catList = [];
  sortName = "";
  countSize="";

  shopList = [];
  goodsId = "";
  detatil: any = {
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
    storageNum: 0
  };
  num = 1;
  skuattr = [];
  chosenList = [];
  chosensku = [];
  skuItem = {};
  commentnum = 0;
  praise = "0";
  tabindex = 0;
  handleStatus(type) {
    if (this.sortName == type && this.sortStatus == false) {
      return "sortPrice";
    } else if (this.sortName == type && this.sortStatus) {
      return "sortTime";
    } else {
      return "";
    }
  }
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
// 分页
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #f4c542;
}
.classify_shop {
  .classify_top {
    div {
      color: #a8a8a8;
      margin-right: 20px;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #ededed;
      span {
        padding-right: 30px;
        cursor: pointer;
      }
      .colorGray {
        color: #2a2a2a;
      }
      .colorYellow {
        color: #f4c542;
      }
      .sortPrice {
        background: url(../../assets/down.png) no-repeat right 17px center;
      }
      .sortTime {
        background: url(../../assets/up.png) no-repeat right 17px center;
      }
    }
    div:nth-of-type(2) {
      width: 90%;
      span:hover {
        color: #f4c542;
      }
    }
  }
}
.headline {
  height: 130px;
  padding-top: 25px;
  h2 {
    color: #525252;
    text-align: center;
    font-size: 30px;
  }
  h3 {
    color: #313131;
    text-align: center;
    font-size: 18px;
  }
}
.ellipsis {
  //单行文本溢出
  overflow: hidden;
  text-overflow: ellipsis; //文本溢出显示省略号
  white-space: nowrap; //文本不会换行（单行文本溢出）
}
.shop_list {
  margin-top: 10px;
  ul {
    overflow: hidden;
    margin-bottom: 20px;
    padding: 20px 0;
    padding-left:9px;
    li {
      width: 255px;
      border-radius: 4px;
      float: left;
      margin-right: 20px;
      cursor: pointer;
      margin-bottom: 20px;
      .shop_img {
        // overflow: hidden;
        
        border-radius: 4px;
        margin-bottom: 20px;
        position: relative;
        // 热卖
        .hot {
          position: absolute;
          left: 0;
          top: 0;
          img {
            width: 33px;
            height: 38px;
          }
        }
        img {
          width: 100%;
          height: 230px;
        }
        h4 {
          height: 54px;
          line-height: 54px;
          background: #eff1f1;
          text-align: center;
          font-size: 18px;
          color: #a3a3a3;
          width: 100%;
          padding: 0 5px;
        }
      }
      .shop_details {
        div {
          margin-bottom: 12px;
          span {
            display: inline-block;
            width: 40px;
            height: 19px;
            text-align: center;
            color: red;
            border: 1px solid red;
            margin-right: 10px;
            border-radius: 5px;
          }
        }
        h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        p {
          font-size: 16px;
        }
      }
    }
    :nth-of-type(4),
    :nth-of-type(8),
    :nth-of-type(12) :nth-of-type(16) {
      margin-right: 0;
    }
  }
}
.classify_shop{
  border:1px solid #ededed;padding: 10px 40px 30px; 
}
.collImg {
  cursor: pointer;
  -webkit-transform: scale(1);
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform .4s;
}
.collImg:hover{
  border:1px solid #FFCF63;
  box-shadow:0px 0px 5px 5px #F3F3F3;
  -webkit-transform: scale(1.04);
  transform: scale(1.04);
  -ms-transform: scale(1.04);
}
</style>

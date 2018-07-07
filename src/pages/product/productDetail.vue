<template>
  <div>
   <div class="tab-contents" style="    overflow: hidden;">


<wintabe ref="wintabe" :table="true" :router="true"></wintabe>



<div class=" flex   flex-pack-center">
       <div  style="width:60%;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{detatil.goodsName}}</el-breadcrumb-item>
</el-breadcrumb>
</div>
</div>
</div>




<div class=" flex   flex-pack-center">
       <div  style="width:60%;" class="flex">

<div style="width:500px;">

<img v-lazy="detatil.goodsImg.split(',')[0]" style="width:100%;"/>
<div class="flex" style="    overflow: auto;">
  <div v-for="(item,index) in detatil.goodsImg.split(',')">
    <img v-lazy="item" style="width:100px;margin-right:10px;"/>
  </div>
</div>
</div>

<div class="flex-1" style="padding:0 10px;">
<div class="goodsName">
  {{detatil.goodsName}}
</div>
  <div class="">
  {{detatil.jingle}}
</div>


<div style="border:1px solid #e5e5e5;margin:20px 0;background-color:#FCFCFC;font-size:14px;">
<div class="flex flex-align-center" style="    padding: 10px 0;     margin: 0 20px;">
  <div style="width:50px">价格</div>
  <div><span class="marketPrice" style="font-size:20px;margin-right:10px">￥{{detatil.marketPrice}}</span>
  <span class="labelPrice">原价￥{{detatil.labelPrice}}</span></div>
</div>
<div class="flex flex-align-center" style="    padding: 10px 0;     margin: 0 20px;">
  <div style="width:50px">限制</div>
  <div>此商品不可与优惠券叠加使用</div>
</div>
<div class="flex flex-align-center" style="    padding: 10px 0;     margin: 0 20px;border-bottom:1px solid #e5e5e5;">
  <div style="width:50px">领券</div>
  <div>
    <span style="color:red">立即领取></span>
  </div>
</div>


<div class="flex flex-align-center" style="    padding: 10px 0;     margin: 0 20px;">
  <div style="width:50px">服务</div>
  <div class="flex flex-around-justify flex-align-center">
    <div>
    <span style="margin:10px;"><span style="color:#ffc630;font-weight: 800;margin:0 5px;">·</span><span>7天无忧退换货</span></span>
    </div>
     <div>
    <span style="margin:10px;"><span style="color:#ffc630;font-weight: 800;margin:0 5px;">·</span><span>24小时快速退款</span></span>
    </div>
     <div>
    <span style="margin:10px;"><span style="color:#ffc630;font-weight: 800;margin:0 5px;">·</span><span>中宜自营严选</span></span>
    </div>
  </div>
</div>


</div>


 <div style='font-size:14px;max-height:300px;overflow:auto;'>
      <div v-for='(item,indextop) in detatil.skuKey' :key="indextop" class="flex  flex-align-center">
      <div style='padding:5px 20px 0;color:#585858;'>{{item.skuKeyIdName}}</div>
      <div class='skuKeyBox'>
      <div v-for="(items,index) in  item.valueList" :key="index">
        <div  :class="chosenList[indextop] === items ?'sku_box_select':'sku_box' " 
        :style="items.disable?'color:#ccc;border-color:#ccc;':''+ chosenList[indextop] === 
        items.skuValueId?'border-color:#f4c542;color:#f4c542':'' " 
        @click.stop='selectSku(indextop,items)'  >{{items.skuValueName}}</div>
      </div>
      </div>
      </div>
  </div>



   <div class='num_box flex flex-align-center'>
      <div class="flex flex-align-center" style="color:#585858;">数量</div>
    <van-stepper v-model="num" style="margin: 10px 0px 0px 20px;"/>
    </div>
<div class="flex">
      <van-button  style="border-radius:4%;background-color:#fff;color:#F4C542;border:1px solid #F4C542;min-width:150px;margin-right:10px;overflow: hidden;"  @click.stop="doChangeModel(goods.goodsId)">立即购买</van-button>
      <van-button  style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;min-width:150px;"  @click.stop="addCart()">加入购物车</van-button>
<div style="width:45px;height:45px;border:1px solid #e5e5e5;margin:0 10px;text-align:center;">

<div :class="detatil.favStatus ? 'collection_cur' :'collection'" @click.stop="updataCollect()">
  <p><i class="iconfont icon-shoucang1"></i></p>
  {{detatil.favStatus ? "已收藏" : "收藏"}}
  <!-- <span v-bind:style="{'display':config.isHaveSearch ? 'block':'none'}" >搜索</span> -->
</div>
</div>
</div>

</div>

</div>
</div>


<div class=" flex   flex-pack-center">
       <div  style="width:60%;margin-top:20px">

<div style="height:40px;background-color:#f7f7f7;font-size:15px;border-bottom:1px solid #e5e5e5;" class="flex">
     <div class="taber selecttaber">大家还看了</div>
     <div  class="taber">新品推荐</div>
   </div>

<div style="height:320px;">
  <div class="flex" style="    overflow: auto;">
    <div v-for="(items,index) in tabgoodslist" :key="index" @click="goProductDetail(items.goodsId)" >
        <div class="flex flex-pack-center flex-align-center" style="margin-right:20px;margin-top:10px;border: 1px #e5e5e5 solid;box-sizing: border-box;overflow:hidden;position:relative;padding:100px">
            <img src="../../assets/image/热.png" style="width:-webkit-fill-available;position: absolute;top: 0;left:0;z-index:2;width:25px;"/>
            <img v-lazy="items.goodsImg.split(',')[0]" style="width:-webkit-fill-available;position: absolute;top: 0;"/>
            <div class="textLabel" style="position: absolute;bottom: 0;width: 100%;background-color:rgba(207,207,207,0.3);text-align:center;color:#A3A3A3;height:28px;line-height:28px;" >{{items.jingle}}</div>
          </div>
          <div class="flex flex-pack-center flex-v" style="width:-webkit-fill-available;" >
            <div>
              <img src="../../assets/image/满减.png" style="width:35px;margin:10px 0"/>
              <img src="../../assets/image/特价.png" style="width:35px;margin:10px 0"/>
            </div>
            <div class="textLabel" style="font-size:16px;">{{items.goodsName}}</div>
            <div style="color:#E05459;font-size:15px;" >￥{{items.marketPrice}}</div>
          </div>
      </div>
  </div>
</div>
<div style="height:40px;background-color:#f7f7f7;font-size:15px;border-bottom:1px solid #e5e5e5;" class="flex">
    <div class="taber selecttaber">商品详情</div>
    <div  class="taber">评价</div>
</div>
<div>
  <div style="background-color:#ffffff;margin-top:10px;">
      <div v-for="(item,index) in detatil.detail.imageList" :key="index">
        <img v-lazy="item" style="width:100%;"/>
      </div>
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
    this.goodsId = this.$route.query.goodsId;
    this.getProductDetail();
  }
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
  updataCollect(){
    if(this.detatil.favStatus == 0){
        console.log("添加收藏" + this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId);
        console.log("this.detatil.favStatus = " + this.detatil.favStatus);
        Vue.prototype.$reqFormPost1(
          "/fav/add",
          {
            userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId,
            token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
            goodsId: this.goodsId,
          },
          res =>{
            if(res.returnCode !==200){
              this["$Message"].warning(res.message);
              console.log("网络请求错误！");
            }else{
              this["$Message"].success("收藏成功");
              this.getProductDetail();
            }
          }
        )
    } else{
      console.log("取消收藏" + this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId);
        Vue.prototype.$reqFormPost1(
        "/fav/delete",
        {
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId,
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
          goodsIds: this.goodsId,
        },
        res =>{
          if(res.returnCode !==200){
            this["$Message"].warning(res.message);
            console.log("网络请求错误！");
          }else{
            
            this["$Message"].success("已取消收藏");
            // getProductDetail
            this.getProductDetail();
          }
        }
      )
    }
     
  }
  
  addCart() {
    if (!this.skuItem["skuId"]) {
      Toast("请选择规格属性");
      return;
    }

    Vue.prototype.$reqFormPost1(
      "/shop/cart/add",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        goodsId: this.goodsId,
        skuId: this.skuItem["skuId"]
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }
        this["$Message"].success("加入成功");
        let a: any = this.$refs.wintabe;
        a.getCartList();
      }
    );
  }
  selectSku(indextop, main) {
    if (main.disable) {
      return;
    }

    if (
      (this.chosenList[indextop] || "") != "" &&
      this.chosenList[indextop] === main.skuValueId
    ) {
      this.chosenList[indextop] = "";
      this.chosensku[indextop] = "";
      this.chosensku.splice(0, this.chosensku.length);
    } else {
      this.chosenList[indextop] = main.skuValueId;
      this.chosensku[indextop] = main.skuValueName;
    }

    this.chosenList = this.chosenList;
    this.skuItem = {};

    let skuItemOpt = false;

    this.detatil.skuKey.forEach((keyItem, keyIndex) => {
      keyItem.valueList.forEach((valueItem, valueIndex) => {
        valueItem.disable = true;
        for (let i = 0; i < this.detatil.sku.length; i++) {
          if (
            this.detatil.sku[i].attrs[keyIndex].valueId != valueItem.skuValueId
          ) {
            continue;
          }
          let tag = true;
          for (let j = 0; j < this.detatil.sku[i].attrs.length; j++) {
            if (keyIndex == j) {
              continue;
            }
            if (
              (this.chosenList[j] || "") != "" &&
              this.chosenList[j] != this.detatil.sku[i].attrs[j].valueId
            ) {
              tag = false;
              break;
            }
          }
          if (tag) {
            valueItem.disable = false;
            break;
          }
        }
      });
    });
    if (this.chosenList.length === this.detatil.skuKey.length) {
      let optionChosen = () => {
        let count = true;
        this.chosenList.forEach((item, index) => {
          if (item === "") {
            count = false;
            return false;
          }
        });
        return count;
      };
      if (optionChosen) {
        for (let i = 0; i < this.detatil.sku.length; i++) {
          let count = 0;
          for (let j = 0; j < this.chosenList.length; j++) {
            if (this.chosenList[j] === this.detatil.sku[i].attrs[j].valueId) {
              console.log(
                this.chosenList[j] === this.detatil.sku[i].attrs[j].valueId,
                this.detatil.sku[i].attrs[j]
              );
              count += 1;
              if (count === this.chosenList.length) {
                this.skuItem = this.detatil.sku[i];
                break;
              }
            }
          }
        }
      }
    }
    this.chosenList.push();
    this.chosensku.push();
  }
  getProductDetail() {
    Vue.prototype.$reqFormPost1(
      "/goods/front/detail",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        goodsId: this.goodsId
      },
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }

        this.detatil = res.data;

        if (res.data.singleStatus) {
          this.skuItem = res.data.sku[0];
        }
        console.log("-----------");
        // 评论数量
        this.commentnum = res.data.commentNum;
        // 好评计算
        if (res.data.commentList.length > 0) {
          let total = 0;
          for (let i = 0; i < res.data.commentList.length; i++) {
            total = res.data.commentList[i].star + total;
          }
          total = total / (res.data.commentList.length * 5) * 100;
          const praisenum = total.toFixed(0);
          this.praise = praisenum;
        }

        this.tabgoodslist = res.data.likeList;
        this.likeList = res.data.likeList;
        this.newList = res.data.newList;

        // this.couponList = res.data.couponList;

        this.detatil.skuKey.forEach((keyItem, keyIndex) => {
          keyItem.valueList.forEach((valueItem, valueIndex) => {
            let opt = { disable: true, chosen: false };
            this.detatil.sku.forEach((skuItem, skuIndex) => {
              if (valueItem.skuValueId === skuItem.attrs[keyIndex].valueId) {
                opt.disable = false;
                return false;
              }
            });
            (<any>Object).assign(valueItem, opt);
          });
        });
      }
    );
  }
  tabgoodslist = [];
  likeList = [];
  newList = [];
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.goodsName {
  font-weight: 600;
  font-size: 18px;
}
.skuKeyBox {
  display: flex;
  flex-wrap: wrap;
}

.sku_box {
  margin: 10px 0px 0px 20px;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid #7f7f7f;
  background-color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
}
.num_box {
  font-size: 16px;
  padding: 20px;
}
.taber {
  line-height: 40px;
  padding: 0 30px;
  cursor: pointer;
}
.selecttaber {
  border-top: 1px #e5e5e5 solid;
  border-left: 1px #e5e5e5 solid;
  border-right: 1px #e5e5e5 solid;
  border-bottom: 3px #ffc630 solid;
  background-color: #fff;
  box-sizing: border-box;
  color: #ffc630;
}

.collection{
  cursor:pointer;
}
.collection_cur{
  color: red;
}
</style>

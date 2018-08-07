<template>
  <div>
   <div class="tab-contents" style="    overflow: hidden;">
<wintabe ref="wintabe" :table="true" :router="true"></wintabe>

<div class=" flex   flex-pack-center">
       <div  style="width:1200px;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/?catId='+detatil.category.catId }" v-if="detatil">{{detatil.category.catName}}</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/?catId='+detatil.category.catId+'&secCatId='+ detatil.category.child.catId }" v-if="detatil">{{detatil.category.child.catName}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{detatil.goodsName}}</el-breadcrumb-item>
</el-breadcrumb>
</div>
</div>
</div>

<div class=" flex   flex-pack-center">
       <div  style="width:1200px;" class="flex">
<div style="width:500px;">
<img v-bind:src="detatil.goodsImg.split(',')[click]" style="width:100%;"/>

<div class="flex" style="    overflow: auto;">
  <div v-for="(item,index) in detatil.goodsImg.split(',') " :key="index" @click="lookPic(index)"
    class="borderImg"
   v-on:click="addClassFun(index)" v-bind:class='{border:index==qwerqwre}'
  >
    <img v-lazy="item" style="width:100px;padding:5px;cursor: pointer;"/>
  </div>
</div>
</div>

<div class="flex-1" style="padding:0 10px;">
<div class="goodsName">
  {{detatil.goodsName}}
</div>
  <div style="color:#a3a3a3">
  {{detatil.jingle}}
</div>
<div style="border:1px solid #e5e5e5;margin:20px 0;background-color:#FCFCFC;font-size:14px;position: relative;">
  <!-- 用户评价统计 -->
  <div class="all_evaluate">
        用户评价{{detatil.commentNum}}
  </div>
<div class="flex flex-align-center" style="    padding: 10px 0;     margin: 0 20px;">
  <div style="width:50px">价格</div>
  <div><span class="marketPrice" style="font-size:20px;margin-right:10px">￥{{detatil.marketPrice.toFixed(2)}}</span>
  <span class="labelPrice">原价￥{{detatil.labelPrice}}</span></div>
</div>
<div class="flex flex-align-center" style="    padding: 10px 0;     margin: 0 20px;">
  <div style="width:50px">限制</div>
  <div>此商品不可与优惠券叠加使用</div>
</div>
<div class="flex flex-align-center" style="    padding: 10px 0;     margin: 0 20px;border-bottom:1px solid #e5e5e5;">
  <div style="width:50px" v-if="detatil.couponList && detatil.couponList.length>0">领券</div>
  <div class="full_bg" v-if="detatil.couponList&& detatil.couponList.length>0">
    {{detatil.couponList[0].couponName}} 
  </div>
  <div style="cursor: pointer;">
    <span style="color:red;"  @click="show()" v-if="detatil.couponList&& detatil.couponList.length>0">立即领取></span>
  </div>
  <div>
    
  </div>
</div>
<div class="flex flex-align-center" style="  padding: 10px 0; margin: 0 20px;">
  <div style="width:50px">服务</div>
  <div class="flex flex-around-justify flex-align-center">
    
    <!-- <div >v-for="(detatil,index) in detatil.slogan"  :key="index" -->
    <div v-for="(item,index) in detatil.slogan.split(';')" :key="index">
      <span style="margin:10px;"><span style="color:#ffc630;font-weight: 800;margin:0 5px;">·</span>
           <span>{{item}}</span>
      </span> 
    </div>
    <!-- <div>
      <span style="margin:10px;"><span style="color:#ffc630;font-weight: 800;margin:0 5px;">·</span><span>24小时快速退款</span></span>
    </div>
    <div>
      <span style="margin:10px;"><span style="color:#ffc630;font-weight: 800;margin:0 5px;">·</span><span>中宜自营严选</span></span>
    </div> -->
  </div>
</div>


</div>


 <div style='font-size:14px;max-height:300px;overflow:auto;'>
      <div v-for='(item,indextop) in detatil.skuKey' :key="indextop" class="flex  flex-align-center">
      <div style='padding:5px 20px 0;color:#585858;width:87px;'>{{item.skuKeyIdName}}</div>
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
      <div class="flex flex-align-center" style="color:#585858;width:87px;">数量</div>
    <van-stepper v-model="num" style="margin: 10px 0px 0px 20px;cursor: pointer;"/>
    </div>
<div class="flex">
      <van-button  style="border-radius:4%;background-color:#fff;color:#F4C542;border:1px solid #F4C542;min-width:150px;height:54px;margin-right:10px;overflow: hidden;cursor: pointer;"  @click.stop="addCar()">立即购买</van-button>
      <van-button  style="cursor: pointer;border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;min-width:150px;height:54px;"  @click.stop="addCart()"><img src="../../assets/image/购物车白色.png" style="margin-right: 7px;
    vertical-align: middle;"/>加入购物车</van-button>
<div>
<!-- <div :class="detatil.favStatus ? 'collection_cur' :'collection'" @click.stop="updataCollect()">
  <p><i class="iconfont icon-shoucang1"></i></p>
  <span style="color:#949494">{{detatil.favStatus ? "已收藏" : "收藏"}}</span>
</div> -->
<div :class="detatil.favStatus ? 'collection_cur' :'collection'" @click.stop="updataCollect()">
  
</div>
</div>
</div>

</div>

</div>
</div>



<div class=" flex   flex-pack-center">
  <div  style="width:1200px;margin-top:20px">
      <div style="height:55px;background-color:#f7f7f7;font-size:15px;border-bottom:1px solid #e5e5e5;" class="flex">
          <div class="taber" :class="new_active == '0'?' selecttaber' :'taber'" @click="new_actdiv('0')">大家还看了</div>
          <div  class="taber" :class="new_active == '1'?' selecttaber' :'taber'" @click="new_actdiv('1')">新品推荐</div>
      </div>
     
      <!-- 大家还看了 -->
      <div style="height:320px;" v-if=" new_active== '0'">
        <div class="flex" style="    overflow: auto;">
          <div v-for="(items,index) in tabgoodslist" :key="index" @click="goProductDetail(items.goodsId)" style="cursor:pointer;">
              <div class="flex flex-pack-center flex-align-center" style="margin-right:20px;margin-top:10px;border: 1px #e5e5e5 solid;box-sizing: border-box;overflow:hidden;position:relative;padding:100px">
                  <img src="../../assets/image/热.png" style="width:-webkit-fill-available;position: absolute;top: 0;left:0;z-index:2;width:33px;"/>
                  <img v-lazy="items.goodsImg.split(',')[0]" style="width:-webkit-fill-available;position: absolute;top: 0;"/>
                  <div class="textLabel" style="position: absolute;bottom: 0;width: 100%;background-color:rgba(207,207,207,0.3);text-align:center;color:#A3A3A3;height:28px;line-height:28px;" >{{items.jingle}}</div>
                </div>
                <div class="flex flex-pack-center flex-v" style="width:-webkit-fill-available;" >
                  <div>
                    <img src="../../assets/image/满减.png" style="width:40px;margin:10px 0"/>
                    <img src="../../assets/image/特价.png" style="width:40px;margin:10px 0"/>
                  </div>
                  <div class="textLabel" style="font-size:16px;">{{items.goodsName}}</div>
                  <div style="color:#E05459;font-size:15px;" >￥{{items.marketPrice.toFixed(2)}}</div>
                </div>
          </div>
        </div>
      </div>
      <!-- 新品 -->
      <div style="height:320px;" v-if=" new_active== '1'">        
        <swipeauto  ref="swipeauto" :lists="new_detatil" @goProductDetail="goProductDetail"></swipeauto>


      </div>

<div style="height:55px;background-color:#f7f7f7;font-size:15px;border-bottom:1px solid #e5e5e5;" class="flex">
    <div class="taber" :class="shop_active == '0'?' selecttaber' :'taber'" @click="shop_active ='0'">商品详情</div>
    <div  class="taber" :class="shop_active == '1'?' selecttaber' :'taber'" @click="shop_active ='1' ">评价</div>
</div>

<div v-if="shop_active == '0' " style="min-height:151px;">
  <div style="background-color:#ffffff;margin-top:10px;">
      <div v-for="(item,index) in detatil.detail.imageList" :key="index">
        <img v-lazy="item" style="width:100%;"/>
      </div>
  </div>
</div>

<!-- 评价 -->
  <div class="evaluate_nav" v-if="shop_active == '1'">
      <div class="nav_top">
          <div class="evaluate_left">
              <div><span>{{scale}}%</span>好评</div>
              <div class="star">
                        <img v-for="(star,index) in stars" :key="index" :src="star.src" style="margin-right:5px;"/>
                <!-- <img src="../../assets/image/星星.png">-->
                </div> 
          </div>
          <div class="evaluate_right">
            <h6>大家都写到</h6>
            <div class="btn_evaluate">
                <span :class="btn_active == '0'?' btn_border' :''" @click="btnList('0')">全部（{{detatil.commentNum}}）</span>
                <span :class="btn_active == '1'?' btn_border' :''" @click="btnList('1')">有图（{{total}}）</span>
            </div>   
          </div>
      </div>

      
      <!-- 评论列表 -->
      <div class="evaluate_list" v-for="(item,index) in appraiseList" :key="index">  
          <div class="flex user">
              <div><img v-lazy="item.user.userIcon"/></div>
              <div>{{item.user.mobile}}</div>
              <div v-for="(items,index) in item.star" :key="index"><img src="../../assets/image/星星.png" style="width:20px;height:20px;"></div>
          </div>
          
          <div class="style" style="color:#a1a1a1;display: inline-block;" v-for="item in JSON.parse(item.skuKeyValue)" >
            <span>{{item.key}}:{{item.value}}</span>
          </div>
          <p>{{item.commentContent}}</p>
          <div class="flex evaluate_pic">
              <!-- <div v-if="item.commentImg"><img v-lazy="item.commentImg.split(',')[0]" style="width:100px;height:100px;vertical-align: middle;"/></div> -->
         
              <div  v-for="(itemImg,index) in item.commentImg  ? item.commentImg .split(','):[]" :key="index">
                <img v-lazy="itemImg" style="width:100px;height:100px;vertical-align: middle;"/>                  
                
              </div>
           
              <!-- <div v-for="(item,index) in detatil.slogan.split(';')" :key="index">
                <span style="margin:10px;"><span style="color:#ffc630;font-weight: 800;margin:0 5px;">·</span>
                    <span>{{item}}</span>
                </span> 
              </div> -->

          </div>
          <div class="time">{{item.createTime}}</div>
      </div>
      <div style="margin:20px 0">
            <el-pagination v-if="evaluatetotal>0"
                      background
                      layout="prev, pager, next"
                    :page-size="pageSize" :total="evaluatetotal" @current-change="onPageChange">
                    </el-pagination>
      </div>
  </div>
   
</div>
</div>
<!-- // 优惠券弹窗 -->
<div style="background-color:rgba(0, 0, 0, 0.5); z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="iscouponshow">
    <div class="flex flex-pack-center flex-align-center" style="height:100vh;">  
          <div style="background-color:#fff;padding:20px;position:relative;width: 750px;
                    min-height;max-height:620px;padding-bottom:40px;
                    overflow-y: auto;">
                <div @click="couponshow(true)" class="add_colose">
                  <i class="iconfont icon-close"></i>
                </div>
                <div class="add_titile" style="text-align:center;border-bottom:1px solid #ddd;">选择优惠券</div>
                  <div class="discountBox">
                      <div class="dis_list dis_bgunUse"  v-for="(item,index) in goodsCoupon"   :key="index" >
                        <p style="font-size:18px;color: #fff;"><span style="font-size:28px;color: #fff;">
                {{item.fullDenomination}}</span>元</p>
                <div class="distype" 
                  :class="item.getStatus? 'distypeed' :'distype'"
                  @click="getDiccount(item)"
                  >
                  {{item.getStatus ? "已领取" : "领取"}}</div>
                <!-- <div style="width: 100%;overflow: hidden;height: 20px;"><span style="margin-right:15px;color: #fff;">{{item.couponName}}</span>
                      <i style="color: #fff;" v-if="item.createTime">{{item.createTime.split(' ')[0]}} - </i>
                      <i style="color: #fff;" v-if="item.endDate">{{item.endDate.split(' ')[0]}}</i>
                </div> -->
                <div style="justify-content: space-between;" class="flex">
                        <span style="margin-right:5px;color: #fff;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                          {{item.couponName}}</span>
                       
                            <div  v-if="!item.getStatus  && item.validityType == 'RELATIVE_DATE'"  class="time">{{item.days}}天有效</div>
                     <div  v-else>
                           <i style="color: #fff;">{{item.createTime.split(' ')[0]}} </i>
                        <i style="color: #fff;">- {{item.endDate.split(' ')[0]}}</i></div>

                    </div>
            

              <div class="newtext">
                      <span v-if="item.conditionType == 'NEW_USER'">新人专享;</span>
              <span v-if="item.rangeType == 'ALL'">全场通用;</span>
              <span v-else>{{item.catName}}类商品适用;</span>
              特价商品或其他优惠活动商品不可用
              </div>
              </div>
          </div>
        <!-- <div style="text-align: center;margin-top: 30px;">
          <button @click="surecoupon()"
            style="cursor:pointer;border: none;width: 290px;height: 45px;background-color: rgb(252, 203, 82);color: rgb(255, 255, 255);text-align: center;line-height: 45px;margin-right: 5px;font-size: 16px;">确定</button>
        </div> -->
      </div>
    </div>
  </div>
  <winbeet ></winbeet>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Toast } from "vant";
import { Action } from "vuex-class";
import swipeauto from '../../components/SwipeAuto.vue';


import { Cell, CellGroup, ImagePreview } from "vant";
import Wintabe from "../../components/Wintabe.vue";
import Winbeet from "../../components/Winbeet.vue";
@Component({
  components: {
    Wintabe,
    Winbeet,
    swipeauto
  },
  mixins: [mixin]
})
export default class ProductDetail extends Vue {

  mounted() {
    this.goodsId = this.$route.query.goodsId;
    this.initPage()
  }
  initPage(){
    this.getProductDetail();
    this.evaluateList();
    this.evaluatePic()
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
  appraiseList = [];
  total = [];
  status = 1;
  commentnum = 0;
  praise = "0";
  tabindex = 0;
  shop_active = '0';
  new_active = '0';
  btn_active = '0';
  new_detatil = [];
  goCoupon = [];
  qwerqwre = 0;
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
  //商品图片点击
  addClassFun(index) {
    this.qwerqwre = index;
  }
  // 新品推荐切换
  new_actdiv(new_active){
    this.new_active = new_active;
    console.log('新品',this.new_active)
  }
// handleSkuValue(skuValue){
//  return JSON.parse(skuValue);
// }


 goProductDetail(goodsId) {
   console.log('点击详情',goodsId)
   sessionStorage.goodsId = goodsId;
    // this.$router.push({
    //   path: "/productDetail",
    //   query: {
    //     goodsId: goodsId
    //   }
    // });
    window.open(window.location.origin + '/#/productDetail?goodsId='+goodsId )

  //  window.location.reload()
  }
  
  pageSize = 20;
  page = 0;
  evaluatetotal = 0;
    onPageChange(page) {
    this.page = page - 1;
    this.evaluateList();
  }

//获取评价列表
  evaluateList(){
        Vue.prototype.$reqFormPost1(
        "/comment/list",
        {
          goodsId: this.goodsId,
          status:this.btn_active,
          page:this.page,
          pageSize:this.pageSize
        },
        res => {
          console.log(res)
        if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          console.log(res.data.page.total)
          this.appraiseList = res.data.commentList;
          this.evaluatetotal = res.data.page.total
          console.log('评论',res.data.commentList)
        }
      );
    
  }

    evaluatePic(){
        Vue.prototype.$reqFormPost1(
        "/comment/list",
        {
          goodsId: this.goodsId,
          status:"1"
        },
        res => {
          console.log(res)
        if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          console.log('有图',res.data.page.total)
          this.total = res.data.page.total;
        }
      );
    
  }




  //评论筛选
  btnList(btn_active){
  this.btn_active = btn_active;
  this.evaluateList();
  this.evaluatePic()
  }
   addCar() {
    if (!this.skuItem["skuId"]) {
      Toast("请选择规格属性");
      return;
    }
    Vue.prototype.$reqFormPost(
      "/prepare/order/direct",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        goodsId: this.goodsId,
        skuId: this.skuItem["skuId"],
        num: this.num
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        console.log(res);

        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
      //  this.$store.commit(Vue.prototype.MutationTreeType.PREPAREID , res.data.data.prepareId);
     
       sessionStorage[Vue.prototype.MutationTreeType.PREPAREID] = res.data.data.prepareId;
        this.$router.push({
          path: "/settle"
        }
        );
        console.log("预支付订单ID", res.data.data.prepareId);
      }
    );
    // console.log(this.skuItem.skuId);
  }
  discList = [];
    // 优惠卷框
  iscouponshow=false;
  couponshow(){
    this.iscouponshow=false;
  }


  // 立即领取优惠券
  getDiccount(item){
    
    if(item.getStatus){
      return;
    }
    console.log('点击领取',item.id)
    Vue.prototype.$reqFormPost1(
        "/coupon/user/linkadd",   
        {
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId,
          couponId:item.id
        },
        res => {
          if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          this.queryGoodsCoupon()
        }
      );
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
        skuId: this.skuItem["skuId"],
        num:this.num
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

  
  stars = [
    {
      src: require("../../assets/image/灰色星星.png"),
      active: false
    },
    {
      src: require("../../assets/image/灰色星星.png"),
      active: false
    },
    {
      src: require("../../assets/image/灰色星星.png"),
      active: false
    },
    {
      src: require("../../assets/image/灰色星星.png"),
      active: false
    },
    {
      src: require("../../assets/image/灰色星星.png"),
      active: false
    }
  ];
  scale= 0;
  click = "0"
  isshowConp(){
    
  }


  show(){

    if (
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId !=
        "" &&
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token != ""
    ) {

this.iscouponshow=true;
    this.queryGoodsCoupon();
    }else{
      (<any>this.$refs.wintabe).changeLoginModel('login')
    }
}
  queryGoodsCoupon(){
Vue.prototype.$reqFormPost1(
      "/coupon/goods/list",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        goodsId: this.goodsId,
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }
        console.log('zheshisha',res.data)
        this.goodsCoupon = res.data
        
      }
    );
  }
  goodsCoupon = []
  
  getProductDetail() {
    
    let data ={
        goodsId: this.goodsId
    };
    if (
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId !=
        "" &&
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token != ""
    ) {

    (<any>Object).assign(data,{ userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId});
    }
    Vue.prototype.$reqFormPost1(
      "/goods/front/detail",
      data,
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }
        this.detatil = res.data;
        this.new_detatil = res.data.newList;
        this.goCoupon = res.data.couponList;
        console.log('满减',this.goCoupon);
        console.log('详情',res.data);

        if (res.data.singleStatus) {
          this.skuItem = res.data.sku[0];
        }
        console.log("-----------");
        // 评论数量
        this.commentnum = res.data.commentNum;
        console.log('总数',res.data)
        
        // 好评计算
        if (res.data.commentList.length > 0) {
          let total = 0;
          for (let i = 0; i < res.data.commentList.length; i++) {
            total = res.data.commentList[i].star + total;
          }
          total = total / (res.data.commentList.length * 5) * 100;
          const praisenum = total.toFixed(0);
          this.praise = praisenum;
          console.log('评论数量',res.data.commentNum)
        }

        this.tabgoodslist = res.data.likeList;
        this.likeList = res.data.likeList;
        this.newList = res.data.newList;
        this.scale = res.data.scale;
        this.getstars(res.data.commentStar);
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
  //切换大图
  lookPic(index){
    this.click=index;
    console.log('下标',this.click);
  }
    getstars(num) {
    for (var i = 0; i < num; i++) {
      this.stars[i].src = require("../../assets/image/星星.png");
      this.stars[i].active = true;
    }
  }
  tabgoodslist = [];
  likeList = [];
  newList = [];
}
</script>

<style lang="scss" scoped>
@import '../../../node_modules/swiper/dist/css/swiper.css';
@import "../../style/utils.scss";

.swiper-slide img {
    height: 100%;
    width: 100%;
}
.goodsName {
  font-weight: 600;
  font-size: 18px;
}
.skuKeyBox {
  display: flex;
  flex-wrap: wrap;
      cursor: pointer;
}

.sku_box {
  cursor: pointer;
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
.van-stepper__plus{
cursor: pointer;
}
.num_box {
  font-size: 16px;
  padding: 20px;
}
.taber {
  line-height: 55px;
  width:160px;text-align: center;
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
  cursor:pointer;color: #949494;margin-left: 20px;
  background: url(../../assets/image/未收藏.png) no-repeat;width: 54px; height: 54px;
}
.collection_cur{
  color: #ffc630; margin-left: 20px;
  background: url(../../assets/image/已收藏.png) no-repeat;width: 54px; height: 54px;
}
//评价
.evaluate_nav{
  .nav_top{
    border-bottom: 1px solid #eeeeee;padding:10px 0;overflow: hidden;
    .evaluate_left{
      width:225px;height: 130px; border-right: 1px solid #eeeeee;float:left;
      div{
        font-size: 16px;margin-bottom: 20px;
        span{
          font-size:22px;color: #e05459;
        }
      }
      .star{
        img{
          width: 20px;height:20px;
        }
      }
    }
    .evaluate_right{
      float:left;
      h6{
        color:#a1a1a1;font-size: 14px;margin-bottom:15px; padding-top: 8px;padding-left: 40px;
      }
      .btn_evaluate{
        padding-left: 40px;
        span{
          display:inline-block;border: 1px solid #797979;border-radius: 3px;color:#000;font-size:16px;width: 120px;height:35px;
          line-height: 35px;text-align: center;margin-right: 15px;cursor: pointer;
        }
        .btn_border{
          color:#f4c542;;border: 1px solid #f4c542;
        }
      }
    }
  }
}

.evaluate_list{
  border-bottom: 1px solid #ddd;padding-bottom: 10px;
  .user{
    div{
      margin-right:10px;height: 58px;line-height:58px;margin-bottom:10px;
      img{
        width: 38px;height: 38px;border-radius: 50px;vertical-align: middle
      }
    }
  }
  p{
    padding:10px 0;color: #585858;font-size: 16px;
  }
  .evaluate_pic{
    div{
      margin:0 10px 10px 0;
    }
  }
}
 .full_bg{
   background: url(../../assets/image/满减背景.png) no-repeat;padding: 0 18px;background-size: 100% 100%;height: 24px;
   line-height: 24px;color: #ffc630;margin-right:15px;font-size: 10px;
 }
 //优惠券弹窗
.add_colose{
  position: absolute;right: 10px;top:10px;padding:10px;cursor: pointer;
}
.add_titile{
  line-height: 40px;font-size: 18px;
}

.discountBox{
  overflow: hidden;padding: 30px 15px;padding-right:10px;height: 400px;overflow: auto;
  .dis_list{
    float: left;width: 330px;height:118px;padding:15px 15px 0 15px;border-radius: 6px;background: #fccb52;
    margin-bottom:10px;position: relative;background :url(../../assets/image/领卷中心背景.png) no-repeat;
      background-size: 100%;
    .newtext{
      position: absolute;bottom: 4px;color: #fff;font-size: 10px;width:90%;
       text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
  }
  .dis_list:nth-of-type(3),.dis_list:nth-of-type(6),.dis_list:nth-of-type(9),.dis_list:nth-of-type(12){
    margin-right: 0;
  }
  .dis_list:nth-child(even){
    
  }
  .distype{
    height:30px;line-height:30px;color:#ffc630;position: absolute;right:15px;top:20px;background: #fff;cursor: pointer;
    text-align: center;border-radius: 3px;padding: 0 10px;border:1px solid #fff;
  }
  .distypeed{
    background: #fccb52 url('../../assets/已领取白色.png') no-repeat top right;color:#fff;padding-right:20px;
  }
}
.time{
  position: absolute;right: 16px;color:#fff;
}
.all_evaluate{
  position:absolute;right:20px;top:50px;color:#f4c542;background: url('../../assets/image/评价.png') no-repeat right top;
  padding-top:30px;font-size: 15px;
}
.borderImg{
  border:2px solid #fff;height:104px;
}
.border{
  border:2px solid #f4c542;
}
</style>

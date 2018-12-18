<template>
<div style="    position: relative;">
  
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(items,index) in lists" :key="index"  @click="goProductDetail(items.goodsId)" 
        style="cursor:pointer;">

        <div class="collImg" style="margin-bottom: 10px;margin-top:50px;box-sizing: border-box;">
            <div class="flex flex-pack-center flex-align-center " style="width:200px;margin-right:20px;overflow:hidden;position:relative;padding:120px">
                              <img src="../assets/image/热.png" v-if="items.hotStatus"  style="width:-webkit-fill-available;position: absolute;top: 0;left:0;z-index:2;width:33px;height:34px"/>
              <img v-lazy="items.goodsImg.split(',')[0]" style="width:-webkit-fill-available;position: absolute;top: 0;    left: -2px;"/>
              </div>
                               <h4 class="ellipsis" style="height: 48px;
          line-height: 48px;
          background: #eff1f1;
          text-align: center;
          font-size: 19px;
          color: #a3a3a3;
          width: 100%;">{{items.jingle}}</h4>
          </div>
              <div class="flex flex-pack-center flex-v" style="width:-webkit-fill-available;width:200px;" >
                <div>
                  <span style="display: inline-block;
    width: 40px;
    height: 19px;
    text-align: center;
    color: red;
    border: 1px solid red;
    margin-right: 10px;
    border-radius: 5px;" :style="items.couponList?'':'visibility: hidden;'">满减</span>
        <span style="display: inline-block;
    width: 40px;
    height: 19px;
    text-align: center;
    color: red;
    border: 1px solid red;
    margin-right: 10px;
    border-radius: 5px;color:#f4c542;border:1px solid #f4c542;" :style=" items.isBargain?'':'visibility: hidden;'">特价</span>
                  <!-- <img src="../assets/image/满减.png" style="width:35px;margin:10px 0"  /> -->
                  <!-- <img src="../assets/image/.png" style="width:35px;margin:10px 0" :style=" items.isBargain?'':'visibility: hidden;'"/> -->
                </div>
                <div class="textLabel" style="font-size:16px;">{{items.goodsName}}</div>
                <div style="color:#E05459;font-size:15px;" >
                   <span v-if="items.goodsType =='RETAIL'">￥</span>{{items.marketPrice.toFixed(2)}}<span v-if="items.goodsType =='SCORE'">积分</span>
             </div>
              </div>
        </div>
    </div>
  </div>
        <div class="swiper-button-prev"></div><!--左箭头-->
    <div class="swiper-button-next"></div><!--右箭头-->
</div>
</template>

<style>
@import "../../node_modules/swiper/dist/css/swiper.css";
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.collImg {
  border: 1px solid rgb(229, 229, 229);
  cursor: pointer;
  -webkit-transform: scale(1);
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
}
.collImg:hover {
  box-shadow: 0px 0px 8px 3px #f3f3f3;
  border: 1px solid #ffcf63;
  -webkit-transform: scale(1.04);
  transform: scale(1.04);
  -ms-transform: scale(1.04);
}
.swiper-slide {
  width: 240px !important;
  margin:0 30px 0 10px !important;
  /* overflow: hidden !important; */
}
.swiper-slide img {
  height: 100%;
  width: 100%;
}
.swiper-button-prev {
  background-image: url("../assets/image/未点击效果（左灰）.png");
  width: 36px;
  height: 36px;
  background-size: 100% 100%;
  left: -60px;
}
.swiper-button-prev:hover {
  background-image: url("../assets/image/鼠标效果（左黄）拷贝.png");
}

.swiper-button-next {
  background-image: url("../assets/image/未点击效果（右灰）.png");
  width: 36px;
  height: 36px;
  background-size: 100% 100%;
  right: -60px;
}

.swiper-button-next:hover {
  background-image: url("../assets/image/鼠标效果（右黄）.png");
}
</style>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Swiper from "swiper";

@Component
export default class Swipe extends Vue {
  @Prop({ required: true })
  lists: any;
  goProductDetail(goodsId) {
    this.$emit("goProductDetail", goodsId);
  }
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
}
</script>
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(items,index) in lists" :key="index"  @click="goProductDetail(items.goodsId)" 
        style="cursor:pointer;">
            <div class="flex flex-pack-center flex-align-center" style="width:200px;margin-right:20px;margin-top:10px;border: 1px #e5e5e5 solid;box-sizing: border-box;overflow:hidden;position:relative;padding:100px">
                <img v-lazy="items.goodsImg.split(',')[0]" style="width:-webkit-fill-available;position: absolute;top: 0;"/>
                <div class="textLabel" style="position: absolute;bottom: 0;width: 100%;background-color:rgba(207,207,207,0.3);text-align:center;color:#A3A3A3;height:28px;line-height:28px;" >{{items.jingle}}</div>
              </div>
              <div class="flex flex-pack-center flex-v" style="width:-webkit-fill-available;width:200px;" >
                <div>
                  <img src="../assets/image/满减.png" style="width:35px;margin:10px 0"/>
                  <img src="../assets/image/特价.png" style="width:35px;margin:10px 0"/>
                </div>
                <div class="textLabel" style="font-size:16px;">{{items.goodsName}}</div>
                <div style="color:#E05459;font-size:15px;" >￥{{items.marketPrice.toFixed(2)}}</div>
              </div>
        </div>
    </div>
  </div>
</template>

<style>
@import '../../node_modules/swiper/dist/css/swiper.css';
.swiper-slide{
  width:200px!important;
}
.swiper-slide img {
    height: 100%;
    width: 100%;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Swiper from 'swiper';

@Component
export default class Swipe extends Vue {
    @Prop({ required: true })
    lists: any;
goProductDetail(goodsId){
  this.$emit('goProductDetail',goodsId)
}
    mounted() {
        new Swiper('.swiper-container', {
            slidesPerView :'auto',
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    
    }
}
</script>
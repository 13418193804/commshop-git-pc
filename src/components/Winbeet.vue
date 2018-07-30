<template>
  <div class="alter-container">

    <div class="btm flex flex-align-center flex-around-justify" style="padding:0 15%">
        <div class="flex flex-align-center ">
          <img src="../assets/image/7天.png" style="width:40px;"/>
          <div style="color:#fff;margin:0 10px">7天无忧退换货</div>
        </div>
        <div class="flex flex-align-center">
          <img src="../assets/image/48小时拷贝.png" style="width:40px;"/>
          <div style="color:#fff;margin:0 10px">48小时快速退款</div>
        </div>
        <div class="flex flex-align-center">
          <img src="../assets/image/中宜.png" style="width:40px;"/>
          <div style="color:#fff;margin:0 10px">中宜严选品质</div>
        </div>
        <div style="text-align:center;">
          <img src="../assets/appcode.jpeg" style="width:55px;"/>
          <div style="color:#fff">扫码下载中宜严选app</div>
        </div>
    </div>
    <div style="height:40px;line-height:40px;text-align: center;">中宜版权所有@ 备案号 粤ICP备15054313号</div>
  </div>
  <!-- end container -->
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Comhead extends Vue {
  type = "H5";
  leftScale = "1.5";
  textindex = 1;
  rightClick() {
    this.$emit("rightClick");
  }

  mounted() {
    
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alter-container{
    width: 100%;
    height: 140px;
    position: absolute;
    bottom: 0px;
    left: 0px;
}
.btm {
//  position: absolute;
 bottom: 0;
  height: 100px;
  width:100%;
  background-color: #000;
  z-index: 999;
}
.vhead {
  border-bottom: solid 1px #e5e5e5;
  justify-content: flex-end;
  height: 52px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;

  top: 0;
  padding: 0px;
  width: 100%;
  max-width: 640px;
  color: #101010;
}
.baseLine {
  width: 100%;
  height: 52px;
  margin-top: 0px;
  color: white;
}
.bodyContent {
  border: 1px #d2d2d2 solid;
  display: flex;
  border-radius: 6px;
  font-size: 15px;
}
.checkbody {
  background-color: #ebebeb;
}
</style>
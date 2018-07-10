<template>
  <div class="alter-container">
    <div style="height:200px;"></div>
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
          <img src="../assets/image/7天.png" style="width:40px;"/>
          <div style="color:#fff;margin:0 10px">中宜严选品质</div>
        </div>
  <div style="text-align:center;">
<img src="../assets/image/二维码.png" style="width:45px;"/>
          <div style="color:#fff">扫码下载中宜严选app</div>
  </div>
    </div>
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
.btm {
 position: absolute;
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
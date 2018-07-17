<template>
<!-- 用户协议 -->
<div style=" position: relative;" v-if="model">
  <div style="background-color:rgba(0, 0, 0, 0.5); z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;">
    <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
      <div class="flex-around-justify flex-align-center" style="background-color:#fff;width:650px;position: relative;padding: 40px;">
        <div @click="model = false" style="position: absolute;top:10px;right:10px;">
          <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
        </div>
        <div style="font-size:18px;text-align: center;padding-bottom: 10px;border-bottom: 1px solid #ddd;">用户协议</div>
        <div style="font-size:16px;line-height:24px;padding: 20px 0;border-bottom: 1px solid #ddd;max-height: 400px;overflow: auto;">
        <p style="margin-bottom:15px;">用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议
          用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则</p>  
          <p>规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则
        规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则</p>    
        </div>
        <div style="text-align:center;margin-top:30px;">
          <button @click="model = false" style="border:none;width:290px;height:45px;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:5px;font-size:16px;">朕知道了</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  
  import {
  
    Action
  
  } from "vuex-class";
  
  import {
  
    Toast
  
  } from "vant";
import { Prop } from "vue-property-decorator";
  
  @Component({
    components: {
    },
  })
  export default class Refund extends Vue {
 @Prop({ required: false })
    model=false 
    mounted() {
    }
  
  }
</script>

<style lang="scss" scoped>
  @import "../../style/utils.scss";
  
  
</style>



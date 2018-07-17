<template>
  <!-- 规则 -->
    <div style=" position: relative;">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:550px;padding:20px; border-radius: 10px; position: relative;">
          <div style="position: absolute;top:10px;right:10px;">
            <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
          </div>
          <div style="padding:10px;font-size:14px">物流单号填写</div>
          <div class="tc_select">
            <select v-model="provinceid">
                <option value="">请选择快递品牌</option>
            </select>
          </div>
          <div class="tc_select">
            <select v-model="provinceid">
                <option value="">请输入物流单号</option>
            </select>
          </div>
          <div class="flex" style="margin-top:10px;">
            <div 
            style="width:150px;height:50px;background-color:#FCCB52;color:#fff;text-align: center;line-height:50px;margin-right:10px;">确认</div>
            <div 
            style="width:150px;height:50px;border:1px solid #FCCB52;color:#FCCB52;text-align: center;line-height:50px;">取消</div>
          </div> 
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Swipe from "../../components/Swipe.vue";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";

@Component({
  components: {
    Swipe
  },
  mixins: [mixin]
})
export default class User extends Vue {
  
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.tc_select{
  margin-bottom: 12px;
  select{
    width:450px;height: 50px;border:1px solid #eeeeee;outline:none;
  }
}
</style>

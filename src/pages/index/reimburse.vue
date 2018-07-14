<template>
  <!-- 规则 -->
    <div style=" position: relative;">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:780px;padding:20px; border-radius: 10px;    position: relative;">
          <div style="position: absolute;top:10px;right:10px;">
            <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
          </div>
          <div class="flex btn_refund">
            <div>售后类型</div>
            <button :class="user_active == '0'? 'border_yellow':''" @click="reiClick('0')">未收到货,只退款</button>
            <button :class="user_active == '1'? 'border_yellow':''" @click="reiClick('1')">退货退款</button>
          </div>
          <div v-if="user_active == '0'">
              <div class="textbox">
                  <p>提示：快递到达以后，请拒收快递，否则退款将被拒绝</p>
                  <textarea placeholder="请填写退款理由"></textarea>
              </div>
              <div class="upPic">
                <input type="file">
              </div>
          </div>
          <div v-if="user_active == '1'">
              退货退款
          </div>

          <div class="flex" style="margin-top:10px;">
            <div 
            style="width:150px;height:45px;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:10px;">提交</div>
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
  user_active ='0';
  reiClick(user_active){
    this.user_active = user_active
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.btn_refund{
  div{
    height:40px;line-height: 40px;width:100px;font-size:14px;margin-bottom: 20px;
  }
  button{
      border:1px solid #e6e6e6;color: #000;height:40px;width:155px;margin-right:28px;font-size:14px;
  }
  .border_yellow{
    border:1px solid #FCCB52;color: #FCCB52
  }
}
.textbox{
  border:1px solid #ddd;width:680px;margin-bottom:20px;
  p{
    line-height: 35px;border-bottom: 1px solid #ddd;padding-left:10px;
  }
  textarea{
    resize: none;height:138px;border:none;width:100%;padding:10px;
  }
}
.upPic{
  padding-bottom: 20px;border-bottom: 1px solid #ddd;
}

</style>

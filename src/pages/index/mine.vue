<template>
  <div class="">
      <ul class="personal">
            <li class="personal_cur">
                <p><img src="../../assets/pic_adim.png" alt="" srcset=""></p>
                <p>用户昵称</p>
            </li>
            <li>
                <span><img src="../../assets/discount.png" alt="" srcset=""></span> <span>我的积分</span><span style="color:#ffdc99;margin-left:10px;">5</span>
            </li>
            <li>
                <span><img src="../../assets/integral.png" alt="" srcset=""></span><span>优惠券</span><span style="color:#ffdc99;margin-left:10px;">2张</span>
            </li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";
import axios from "axios";

@Component({
  components: {},
  mixins: [mixin]
})
export default class collection extends Vue {
  mounted() {
   
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
ul.personal{
  display: flex;border-bottom: 1px solid #e5e5e5;
}
ul.personal li{
  flex: 1; text-align: center;padding-top: 103px;
  height: 230px;overflow: hidden;
}
ul.personal li:hover{
  background: #fffdfa;
}
ul.personal li:nth-child(1){
  padding-top: 60px;
}
.personal_cur{
  border-right:1px dashed #e5e5e5;background: #fffdfa;
}
ul.personal li span{
  float: left;
  margin-right: 10px;line-height: 31px;
}
ul.personal li span:nth-child(1){
  margin-left: 65px;

}
</style>
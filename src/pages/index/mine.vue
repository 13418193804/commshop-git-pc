<template>
  <div class="">
      <ul class="personal">
            <li class="personal_cur">
                <p  v-if="userInfo.userIcon"><img :src="userInfo.userIcon" style="border-radius: 50%;
    width: 80px;
    height: 80px;" alt="" srcset=""></p>
                <p  v-else ><img src="../../assets/pic_adim.png" alt="" srcset=""></p>
                <p>{{userInfo.nickName}}</p>
            </li>
            <li  @click="goReward()">
                <div>
                  <img src="../../assets/integral.png" alt="" srcset="">
                  <span>我的积分</span>
                  <span style="color:#ffdc99;">{{userInfo.score}}</span>
                </div>
            </li>
            <li  @click="goDiscountLobby()">
              <div>
                <span><img src="../../assets/discount.png" alt="" srcset=""></span>
                <span>优惠券</span>
                <span style="color:#ffdc99;">{{userInfo.couponCount}}张</span>
              </div>
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
import { Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
  mixins: [mixin]
})
export default class collection extends Vue {

userInfo = {}
getUserInfo(){
  if(!sessionStorage.userInfo || sessionStorage.userInfo ==''){
    this.userInfo =  {}
 }else{
    this.userInfo =   JSON.parse(sessionStorage.userInfo)
 }

}
goReward(){
  this.$router.push({
    path:"my_reward"
  })
};
goDiscountLobby(){
  this.$router.push({
    path:"discountLobby"
  });
}
  mounted() {
    window['getUserInfo'] = ()=>{
 this.getUserInfo()
    }
 this.getUserInfo()
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
ul.personal li{
  line-height: 31px;cursor: pointer;
  div{
    overflow: hidden;justify-content: center;display: flex;
    span,img{
      float: left;margin-right: 5px;
    }
  }
}
</style>
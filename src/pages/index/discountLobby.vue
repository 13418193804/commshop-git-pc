<template>
  <div class="discount">
     <div class="collar" @click="skip()"><img src="../../assets/discounticon.png"/> 领卷中心</div>
     <div class="collarnav">
       <ul>
         <li :class="nav_active == '0' ?'navcur':''" @click="discountList('0')">未使用</li>
         <li :class="nav_active == '1' ?'navcur':''" @click="discountList('1')">已使用</li>
         <li :class="nav_active == '2' ?'navcur':''" @click="discountList('2')">已失效</li>
       </ul>
       <div class="discountBox">
        <div class="dis_list">
            <p style="font-size:18px;color: #fff;"><span style="font-size:28px;color: #fff;">100</span>元</p>
            <div><span style="margin-right:15px;color: #fff;">满299-100</span><i style="color: #fff;">2018.02.24-2018.03.24</i></div>

            <div class="newtext">新人专享：全场通用</div>
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
  nav_active = '0';
  couponId = ''

  skip(){
    console.log('跳转')
    this.$router.push({
      path: "/discount",
    });
  }
  discountList(nav_active){
     this.nav_active = nav_active

     Vue.prototype.$reqFormPost1(
        "/coupon/list",
        console.log('优惠券',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token),
        console.log('用户id',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId),
        {
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
          merchantUserId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        },
        res => {
          if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          this["$Message"].success('成功');
        }
      );
  }
  mounted() {
    this.discountList(this.nav_active);
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.discount{
  padding: 7px;
  .collar{
    width:88px;line-height: 24px;height:24px;background: #fccb52;padding-left: 5px;border-radius:3px;color:#fff;cursor: pointer;
    img{
      vertical-align: middle;width:13px;height:13px;
    }
  }
  .collarnav{
    ul{
      overflow: hidden;background:#fbfbfb;margin-top:10px;
      li{
        float: left;width:88px;height:26px;line-height:26px;text-align: center;color: #9b9b9b;cursor: pointer;
      }
      .navcur{
        background: #e1e1e1;color: #141414;
      }
    }
  }

  .discountBox{
    overflow: hidden;padding:30px 40px;
    .dis_list{
      float: left;width: 50%;height:118px;background:#fccb52;padding:15px 15px 0 15px;border-radius: 6px;
      position: relative;
      .newtext{
        position: absolute;bottom: 0;color: #fff;
      }
    }  
  }
}
</style>

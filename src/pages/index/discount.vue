<template>
  <div>
    <div style="height:40px;line-height:40px;background:#fbfbfb;border-bottom:1px solid #e6e6e6;padding-left:40px;">领卷中心</div>
    <div class="discountBox">
        <div class="dis_list">
            <p style="font-size:18px;color: #fff;"><span style="font-size:28px;color: #fff;">100</span>元</p>
            <div><span style="margin-right:15px;color: #fff;">满299-100</span><i>2018.02.24-2018.03.24</i></div>

            <div class="newtext">新人专享：全场通用</div>
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
  couponId = ''
  discountList(){
    Vue.prototype.$reqFormPost1(
        "/coupon/query",
        console.log('优惠券',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token),
        console.log('用户id',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId),
        console.log('IDIDID',this.couponId,),
        {
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
          merchantUserId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
          couponId:this.couponId,
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
    this.discountList();
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.discountBox{
  overflow: hidden;padding:30px 40px;
  .dis_list{
    float: left;width: 50%;height:118px;background:#ccc;padding:15px 15px 0 15px;border-radius: 6px;
    position: relative;
    .newtext{
      position: absolute;bottom: 0;color: #fff;
    }
  }
  
}
</style>

<template>
  <div>
    <div style="height:40px;line-height:40px;background:#fbfbfb;border-bottom:1px solid #e6e6e6;padding-left:40px;">领卷中心</div>
    <div class="discountBox">
        <div class="dis_list" v-for="(item,index) in discList"  :key="index">
            <p style="font-size:18px;color: #fff;"><span style="font-size:28px;color: #fff;">
              {{item.fullDenomination}}</span>元</p>
              <div class="distype" 
                :class="item.getStatus? 'distypeed' :'distype'"
                @click="getDiccount(item)"
                >
                {{item.getStatus ? "已领取" : "领取"}}</div>
            <div><span style="margin-right:15px;color: #fff;">{{item.couponName}}</span>
                <i style="margin-right:15px;color: #fff;">{{item.createTime}}</i>
                <!-- <i style="margin-right:15px;color: #fff;">{{item.updateTime}}</i> -->
            </div>
            <div class="newtext">新人专享：全场通用;特价商品或其他优惠活动商品不可</div>
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
  page = '1'
  pageSize = '10'
  discList = [];
  get = '';
  discountList(){
    console.log('进入页面token',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token),
    console.log('领券中心id',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId), 
    Vue.prototype.$reqFormPost1(
        "/coupon/center/list",   
        {
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId,
        },
        res => {
          if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          this["$Message"].success('成功');
          this.discList = res.data.couponList;
        }
      );
  }
  //领取优惠券
  getDiccount(item){
    console.log('点击领取',item.id)
    Vue.prototype.$reqFormPost1(
          "/coupon/user/linkadd",   
          {
            token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
            userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId,
            couponId:item.id
          },
          res => {
            if (res.returnCode != 200) {
              this["$Message"].warning(res.message);
              return;
            }
            this["$Message"].success('领取成功');
            this.discountList()
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
  overflow: hidden;padding:30px 40px;padding-right:10px;
  .dis_list{
    float: left;width: 330px;height:118px;background:#ccc;padding:15px 15px 0 15px;border-radius: 6px;background: #fccb52;
    margin-bottom:10px;position: relative;margin-right: 10px;
    .newtext{
      position: absolute;bottom: 0;color: #fff;
    }
  }
  .dis_list:nth-of-type(3),.dis_list:nth-of-type(6),.dis_list:nth-of-type(9),.dis_list:nth-of-type(12){
    margin-right: 0;
  }
  .dis_list:nth-child(even){
    margin-right: 5px;
  }
  .distype{
    height:19px;line-height:19px;color:#ffc630;position: absolute;right:15px;top:15px;background: #fff;cursor: pointer;
    text-align: center;border-radius: 3px;padding: 0 7px;line-height: 19px;border:1px solid #fff;
  }
  .distypeed{
    background: #fccb52;color:#fff;
  }
}
</style>

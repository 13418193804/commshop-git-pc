<template>
  <div class="discount">
     <div class="collar" @click="skip()"><img src="../../assets/discounticon.png"/> 领卷中心</div>
     <div class="collarnav">
       <ul>
         <li :class="status == 'UNUSED' ?'navcur':''" @click="discountList('UNUSED')">未使用</li>
         <li :class="status == 'USED' ?'navcur':''" @click="discountList('USED')">已使用</li>
         <li :class="status == 'OVERDUE' ?'navcur':''" @click="discountList('OVERDUE')">已失效</li>
       </ul>
       <div class="discountBox" v-if="discList.length>0">
          <div class="dis_list" v-for="(item,index) in discList"  :key="index">
              <p style="font-size:18px;color: #fff;"><span style="font-size:28px;color: #fff;">
                {{item.coupon.couponDenomination}}</span>元</p>
                <div class="distype" 
                  @click="goshop()"
                  >
                  去使用</div>
              <div><span style="margin-right:15px;color: #fff;">{{item.coupon.couponName}}</span>
                  <i style="margin-right:15px;color: #fff;">{{item.coupon.createTime}}</i>
                  <!-- <i style="margin-right:15px;color: #fff;">{{item.coupon.updateTime}}</i> -->
              </div>
              <div class="newtext">新人专享：全场通用;特价商品或其他优惠活动商品不可</div>
          </div>
      </div>
      <div class="nodiscount" v-else>
          <img src="../../assets/WechatIMG683.png" />
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
  status = 'UNUSED'
  page = 0
  pageSize =  10
  discList = [];
  //领券中心
  skip(){
    this.$router.push({
      path: "/discount",
    });
  }
  discountList(status){
    if(this.status == status){
       return;
    }
    if(!status){
        status = this.status 
    }
     this.status = status
     console.log('状态',this.status),
     Vue.prototype.$reqFormPost1(
        "/coupon/user/linklist",
        {
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId,
          status: this.status,
          page: this.page,
          pageSize: this.pageSize,
        },
        res => {
          if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          this.discList = res.data.couponList;
        }
      );
  }
  goshop(){
    this.$router.push({
      path:"/"
    })
  }
  mounted() {
    console.log('---')
    this.discountList(false);
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
        float: left;width:88px;height:30px;line-height:30px;text-align: center;color: #9b9b9b;cursor: pointer;
      }
      .navcur{
        background: #e1e1e1;color: #141414;
      }
    }
  }

  .discountBox{
    overflow: hidden;padding-top:10px;
    .dis_list{
      float: left;width: 330px;height:118px;background :url(../../assets/image/领卷中心背景.png) no-repeat;
      background-size: 100%;
      padding:15px 15px 0 15px;border-radius: 6px;
      position: relative;margin-bottom:10px;margin-right:10px;
      .newtext{
        position: absolute;bottom: 4px;color: #fff;
      }
    }  
    .dis_list:nth-of-type(3),.dis_list:nth-of-type(6),.dis_list:nth-of-type(9),.dis_list:nth-of-type(12){
      margin-right: 0;
    }
    .distype{
      height:30px;line-height:30px;color:#ffc630;position: absolute;right:15px;top:20px;background: #fff;cursor: pointer;
      text-align: center;border-radius: 3px;padding: 0 10px;border:1px solid #fff;
    }
    .distypeed{
      background: #fccb52;color:#fff;
    }
  }
  .nodiscount{
    text-align: center;padding-top: 65px;
  }
}
</style>

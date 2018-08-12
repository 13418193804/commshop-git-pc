<template>
  <div>
    <div style="height:40px;line-height:40px;background:#fbfbfb;border-bottom:1px solid #e6e6e6;padding-left:40px;">领卷中心</div>
    <div class="discountBox">
        <div class="dis_list" v-for="(item,index) in discList"  :key="index"
        >
            <p style="font-size:18px;color: #fff;"><span style="font-size:28px;color: #fff;">
              {{item.couponDenomination}}</span>元</p>
              <div class="distype" 
                :class="item.getStatus? 'distypeed' :'distype'"
                @click="getDiccount(item)"
                >
                {{item.getStatus ? "已领取" : "领取"}}</div>
              <!-- <div style="width: 100%;overflow: hidden;height: 20px;"><span style="margin-right:15px;color: #fff;">{{item.couponName}}</span>
                    <i style="color: #fff;" v-if="item.createTime">{{item.createTime.split(' ')[0]}} - </i>
                    <i style="color: #fff;" v-if="item.endDate">{{item.endDate.split(' ')[0]}}</i>
              </div> -->
              <div style="justify-content: space-between;" class="flex" >
                      <span style="margin-right:5px;color: #fff;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                        满{{item.fullDenomination}}减{{item.couponDenomination}}</span>
                            <div  v-if="!item.getStatus  && item.validityType == 'RELATIVE_DATE'"  class="time">{{item.days}}天有效</div>
                     <div  v-else>
                           <i style="color: #fff;">{{item.createTime.split(' ')[0]}} </i>
                        <i style="color: #fff;">- {{item.endDate.split(' ')[0]}}</i></div>

                  </div>
            <div class="newtext">
              <span v-if="item.conditionType == 'NEW_USER'">新人专享;</span>
              <span v-if="item.rangeType == 'ALL'">全场通用;</span>
              <span v-else>{{item.catName}}类商品适用</span>
              特价商品或其他优惠活动商品不可用
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
  couponId = ''
  page = '1'
  pageSize = '10'
  discList = [];
  get = '';
  discountList(){
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
          this.discList = res.data.couponList;
          console.log(res.data.couponList)
        }
      );
  }
  
  //领取优惠券
  getDiccount(item){

    if(item.getStatus){
      return
    }
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
            this.discountList()
          }
        );
      }
      mounted() {
        this.discountList();
         //定位当前页面左侧样式
        this.$emit('selectMenu',{
          name: '优惠券',
          url:'/discount',
        })
      }
    }
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.discountBox{
  overflow: hidden;padding:30px 25px;padding-right:10px;
  .dis_list{
    float: left;width: 330px;height:118px;padding:15px 15px 0 15px;border-radius: 6px;background: #fccb52;
    margin-bottom:10px;position: relative;background :url(../../assets/image/领卷中心背景.png) no-repeat;
      background-size: 100%;
    .newtext{
      position: absolute;bottom: 4px;color: #fff;font-size: 10px;width:90%;
       text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
  }
  .dis_list:nth-of-type(3),.dis_list:nth-of-type(6),.dis_list:nth-of-type(9),.dis_list:nth-of-type(12){
    margin-right: 0;
  }
  .dis_list:nth-child(even){
    
  }
  .distype{
    height:30px;line-height:30px;color:#ffc630;position: absolute;right:15px;top:20px;background: #fff;cursor: pointer;
    text-align: center;border-radius: 3px;padding: 0 10px;border:1px solid #fff;
  }
  .distypeed{
    background: #fccb52;color:#fff;
  }
}

.time{
  position: absolute;right: 16px;color:#fff;
}
</style>

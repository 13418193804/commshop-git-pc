<template>
  <div class="tab-contents">
   <div style="height:40px;background-color:#f7f7f7;font-size:15px;border-bottom:1px solid #e5e5e5;" class="flex">
     <div class="taber selecttaber">基本信息</div>
     <div  class="taber">修改密码</div>
   </div>

     <div>
 <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
        <div style="font-size:15px;padding:0 20px;width:140px">用户头像：</div>
        <img v-lazy="userInfo.userIcon" style="width:50px;height:50px;"/>
      </div>
 <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
        <div style="font-size:15px;padding:0 20px;width:140px">用户名：</div>
  <div style="border:1px #e5e5e5 solid;    padding: 8px 10px;">
    <input v-model="userInfo.nickName" style="border:0;"/>
  </div>
      </div>

<div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
        <div style="font-size:15px;padding:0 20px;width:140px">手机号码：</div>
  <div>
   {{userInfo.mobile}}
  </div>
      </div>


<div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;border-bottom:1px solid #e5e5e5;">
        <div style="font-size:15px;padding:0 20px;width:140px">性别：</div>
  <div>
   
 <el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio>
  </div>
      </div>


     </div>

  <div style="padding:30px;"> 


      <van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;padding:0 60px;"  @click.stop="doChangeModel(goods.goodsId)">保存</van-button>



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
  userInfo = {};
  radio = "1";
  queryuserinfo() {
    Vue.prototype.$reqFormPost1(
      "/user/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token
      },
      res => {
        if (res.returnCode != 200) {
      
                          this["$Message"].warning(res.message);
  return;
        }
        console.log("=-------------", res.data);
        this.userInfo = res.data;
      }
    );
  }
  mounted() {
    this.queryuserinfo();
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.taber{
  line-height: 40px;
  padding:0 30px;
cursor: pointer;
  
}
.selecttaber{
border-bottom:3px #ffc630 solid;
background-color:#fff;
box-sizing: border-box;
color:#ffc630;
}
</style>

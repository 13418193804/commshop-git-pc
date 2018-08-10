<template>
  <div class="">
      <div style="height:40px;background-color:#f7f7f7;font-size:15px;border-bottom:1px solid #e5e5e5;" class="flex">
        <div class="taber" :class="user_active == '0' ?'selecttaber':''" @click="userSwitchover('0')">基本信息</div>
        <div  class="taber" :class="user_active == '1' ?'selecttaber':''"  @click="userSwitchover('1')">修改密码</div>
      </div>
  <div>    
  <div class="user_tab" v-if="user_active == '0'">
      <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
          <div style="font-size:15px;padding:0 20px;width:140px">用户头像：</div>
          <img v-lazy="userInfo.userIcon" style="width:50px;height:50px;    border-radius: 60px;" @click="clickLogo()"/>
          <input type="file" ref="logo" @change="changeLogo" style="display:none"/>
      </div>
      <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
          <div style="font-size:15px;padding:0 20px;width:140px">用户名：</div>
          <div style="border:1px #e5e5e5 solid;">
            <input v-model="userInfo.nickName" style="border:0;"/>
          </div>
      </div>

      <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
          <div style="font-size:15px;padding:0 20px;width:140px">手机号码：</div>
          <div>
            {{userInfo.mobile.substring(0,3)}}****{{ userInfo.mobile.substring(7,13)}}
          </div>
      </div>
      <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;border-bottom:1px solid #e5e5e5;">
          <div style="font-size:15px;padding:0 20px;width:140px">性别：</div>
          <div>
            <el-radio v-model="radio" label="男">男</el-radio>
            <el-radio v-model="radio" label="女">女</el-radio>
          </div>
      </div>
      <div style="padding:30px;"> 
          <van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;padding:0 60px;" 
          @click.stop="doUpdate()">保存</van-button>
      </div>
  </div>
  <div class="user_tab" v-if="user_active == '1'">
      <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
          <div style="font-size:15px;padding:0 20px;width:140px">原密码：</div>
          <div>
            <input type="password" style="height:35px;" v-model="oldPassword"> 
          </div>
      </div>
      <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;">
          <div style="font-size:15px;padding:0 20px;width:140px">新密码：</div>
          <div>
            <input type="password" style="height:35px;" v-model="newPassword">
          </div>
      </div>
      <div class="flex flex-align-center" style="padding:18px 0;margin:0 20px;border-bottom:1px solid #e5e5e5;">
          <div style="font-size:15px;padding:0 20px;width:140px">确认密码：</div>
          <div>
            <input type="password" style="height:35px;" v-model="renewPassword">
          </div>
      </div>
      <div style="padding:30px;"> 
          <van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;padding:0 60px;" 
          @click.stop="recPassword()">保存</van-button>
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
  userInfo = {};
  user_active = "0";
  radio = "男";
  clickLogo(){
    let a:any = this.$refs['logo']
     a.click();
  }
  userSwitchover(user_active){
    this.user_active = user_active
  }
  oldPassword = ''
  newPassword = ''
  renewPassword = ''
  recPassword(){
       if (this.oldPassword == "") {
         this["$Message"].warning('请输入原密码');
      return;
    }

    if (this.newPassword == "") {
         this["$Message"].warning('新密码不能为空');
      return;
    }
      if (this.newPassword.length<6) {
         this["$Message"].warning('新密码长度不能小于6位');
      return;
    }
    if (this.renewPassword !== this.renewPassword ) {
         this["$Message"].warning('两次输入密码不一致');      
      return;
    }
    Vue.prototype.$reqFormPost1(
        "/user/password/update",
        {
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
            // oldPassword:this.oldPassword,
            oldPassword:require('crypto').createHash('md5').update(this.oldPassword).digest('hex'),
            newPassword:require('crypto').createHash('md5').update(this.newPassword).digest('hex'),
        },
        res => {
          if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          this["$Message"].success('保存成功');
          this.userInfo = res.data;
          this.queryuserinfo();
          console.log(res.data);
        }
    );
  }

  changeLogo(){
   let a:any = this.$refs.logo;
    let form = new FormData();
    form.append('file',a.files[0])
    Vue.prototype.$reqFormUpload(
      "/fileupload",
      form,
      res => {
      this.userInfo['userIcon'] = res.data.data.filename
      }
    );
  }
  
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
 
        this.userInfo = res.data;
        this.radio = this.userInfo['sex']
        let a:any = window
        a.queryuserinfo()
      }
    );
  }

  doUpdate(){
    Vue.prototype.$reqFormPost1(
        "/user/update",
        {
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
            userIcon:this.userInfo['userIcon'],
            sex:this.radio,
            nickName:this.userInfo['nickName']
        },
        res => {
          if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
            return;
          }
          this["$Message"].success('保存成功');
          this.userInfo = res.data;
          this.queryuserinfo();
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
.user_tab input{
  height:35px;
}
</style>

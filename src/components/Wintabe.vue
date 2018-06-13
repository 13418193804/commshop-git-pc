<template>
  <div class="alter-container">
  
   <div class="toplabel flex   flex-pack-center">
        <div class="flex flex-end-justify flex-align-center" style="height:100%;width:60%;color:#fff;font-size:14px;">
         
          <div v-if="$store.getters[MutationTreeType.TOKEN_INFO].token">
          {{$store.getters[MutationTreeType.TOKEN_INFO].loginName}}
          <span>退出</span>
          </div>
          <div class="contentBox borderleft " @click="changeLoginModel()" v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
          <span>登录</span>
          </div>
              <div class="contentBox borderleft " v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
          <span>注册</span>
          </div>
          

    <div class="contentBox borderleft ">
          <span>我的订单</span>
          </div>

              <div class="contentBox borderleft ">
          <span>消息</span>
          </div>


              <div class="contentBox borderleft ">
          <span>在线客服</span>
          </div>

              <div class="contentBox borderleft borderright">
          <span>APP</span>
          </div>
          

        </div>

   </div>
   <div style="height:52px;"></div>
   <div class="dialog" v-if="loginModel">
      <div style="height:400px;width:400px;">

          <div>
              登录
          </div>
          
          <div>
            <input v-model="loginName"/>
          </div>
      
          <div>
            <input v-model="password"/>
          </div>

  <button  @click="doLogin">登录</button>
      </div>

   </div>
  </div>
  <!-- end container -->
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Comhead extends Vue {
  type = "H5";
  leftScale = "1.5";
  textindex = 1;
  rightClick() {
    this.$emit("rightClick");
  }

  loginModel = false;
  changeLoginModel() {
    this.loginModel = !this.loginModel;
  }
  loginName = "13418193804";
  password = "5164659";
  doLogin() {
    if (this.loginName == "" || this.password == "") {
      return;
    }
    Vue.prototype.$reqFormPost1(
      "/auth/user/login",
      {
        loginName: this.loginName,
        password: require("crypto")
          .createHash("md5")
          .update(this.loginName + this.password)
          .digest("hex")
      },
      res => {
        if (res.returnCode != 200) {
          return;
        }
        console.log(res.data);
        this.$store.commit(Vue.prototype.MutationTreeType.TOKEN_INFO, res.data);
        localStorage.setItem(
          Vue.prototype.MutationTreeType.TOKEN_INFO,
          JSON.stringify(res.data)
        );
      }
    );
  }
  mounted() {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vhead {
  border-bottom: solid 1px #e5e5e5;
  justify-content: flex-end;
  height: 52px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;

  top: 0;
  padding: 0px;
  width: 100%;
  max-width: 640px;
  color: #101010;
}
.baseLine {
  width: 100%;
  height: 52px;
  margin-top: 0px;
  color: white;
}
.bodyContent {
  border: 1px #d2d2d2 solid;
  display: flex;
  border-radius: 6px;
  font-size: 15px;
}
.toplabel {
  background-color: #212426;
  height: 52px;
  width: 100%;
  position: fixed;
  top: 0;
}
.contentBox {
  min-width: 65px;
  padding: 0 20px;
  text-align: center;
}
.borderleft {
  border-left: 1px #fff solid;
}
.borderright {
  border-right: 1px #fff solid;
}
.dialog {
  background-color: #0000007f;
  height: 100vh;
}
</style>
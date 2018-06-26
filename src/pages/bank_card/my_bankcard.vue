<template>
  <div class="">
      <div class="flex flex-around-justify" style="padding:10px 0;background-color:#F8F8F8;">
        <div>银行卡</div>
        <div>卡号</div>
        <div>操作</div>
      </div>

      <div v-if="cardlist.length>0" style="padding:15px;margin-bottom:45px;border-bottom:1px solid #EEEEEE;">
      <div  v-for="(item,index) in cardlist" :key="index" class="flex flex-around-justify" style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;">
        <div class="flex">
          <img src="../../assets/image/招商银行.png"  style="vertical-align: middle;width:30px;height:25px;"/>
          <div>{{item.bankName}}</div>
        </div>
        <div>{{item.cardId}}</div>
        <div v-if="item.isDefault==true" style="background-color:#C6C6C6;width:60px;height:20px;color:#fff;text-align: center;line-height:20px;">默认地址</div>
        <div v-else @click="isDefaultchange(item.id)" style="height:20px;line-height:20px;"><span style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;"></span>设为地址</div>
        <div @click="del(item)">
          <img src="../../assets/image/删除.png" style="width:20px;height:15;"/>
        </div>
      </div>
      </div>

      <div class="flex flex-align-center flex-v">
          <div v-if="cardlist.length==0" style="color:#BFBFBF;padding:120px 0 30px;">您还未新增银行卡~~~</div>
          <div @click="addbangcard()" style="width:90px;height:30px;color:#FFC630;border:1px solid #FFC630;text-align: center;line-height:30px;">新建地址</div>
      </div>
      <!-- 删除 -->
      <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="delshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
            <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:350px;height:200px;">
              <div>是否删除此银行卡？</div>
              <div class="flex flex-around-justify flex-v" style="width:300px;height:80px;padding-left:15px;border:1px solid #E5E5E5;">
                <div>银行卡:{{delcard.bankName}}</div>
                <div>卡号:{{delcard.cardId}}</div>
                <div>持卡人:{{delcard.realName}}</div>
                <div>支行:{{delcard.subBranch}}</div>
              </div>
              <div class="flex">
                <div @click="deletebankcard()" style="width:90px;height:24px;background-color:#FCCB52;color:#fff;text-align: center;line-height:24px;margin-right:5px;">确定</div>
                <div @click="delcancel()" style="width:90px;height:24px;color:#FCCB52;text-align: center;line-height:24px;border:1px solid #FCCB52;">取消</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 新增 -->
      <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="addshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
            <div class="flex flex-around-justify flex-v flex-align-center" style="background-color:#fff;width:340px;height:270px;padding:20px;position: relative;">
              
              <div style="position: absolute;top:10px;right:10px;">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" @click="addcancel()"/>
              
              </div>
              <div style="text-align: center;">选择银行卡</div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">持卡人：</div>
                <input style="height:20px;width:190px;" v-model="realName"/>
              </div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">开户银行：</div>
                <input style="height:20px;width:190px;" v-model="bankName"/>
              </div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">银行卡号：</div>
                <input style="height:20px;width:190px;" v-model="cardId"/>
              </div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">支行：</div>
                <input style="height:20px;width:190px;" v-model="subBranch"/>
              </div>
              <div class="flex">
                <div @click="addcard()" style="width:90px;height:24px;background-color:#FCCB52;color:#fff;text-align: center;line-height:24px;margin-right:5px;">确定</div>
              </div>
            </div>
          </div>
        </div>
      </div>


  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";
import comhead from "../../components/Comhead.vue";

@Component({
  components: {
    comhead
  },
  mixins: [mixin]
})
export default class mybankcard extends Vue {
  cardlist = [];
  isDefaultid = "";
  delshow=false;
  delcard="";
  delcardid="";
  addshow=false;
  cardId="";
  bankName="";
  realName="";
  subBranch="";

  del(card){
    this.delcard=card;
    this.delcardid=card.id;
    this.delshow=true;
  }
  delcancel(){
    this.delcard="";
    this.delcardid="";
    this.delshow=false;
  }
  getBankCardList() {
    Vue.prototype.$reqFormPost(
      "/bank/card/list",
      {
        userId: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].isDefault) {
            this.isDefaultid = res.data.data[i].id;
          }
        }
        this.cardlist = res.data.data;
        console.log(res.data.data);
      }
    );
  }
  addcard() {
    if (this.realName == "") {
      Toast('请输入持卡人真实姓名');
      return;
    }
    if (this.bankName == "") {
      Toast('请填写开户银行名称');
      return;
    }
    if (this.cardId == "") {
      Toast('请填写银行卡号');
      return;
    }
    if (this.subBranch == "") {
      Toast('请填写银行卡所在支行');
      return;
    }
    Vue.prototype.$reqFormPost(
      "/bank/card/add",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        cardId: this.cardId,
        bankName: this.bankName,
        realName: this.realName,
        subBranch: this.subBranch
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        this.getBankCardList();
        console.log(res.data);
      }
    );
  }
  deletebankcard() {
    Vue.prototype.$reqFormPost(
      "/bank/card/delete",
      {
        userId: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
        id: this.delcardid,
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        this.delcard="";
        this.delcardid="";
        this.delshow=false;
        this.getBankCardList();
        console.log("/bank/card/delete", res.data.message);
      }
    );
  }
  isDefaultchange(id) {
    Vue.prototype.$reqFormPost(
      "/bank/card/setdefault",
      {
        userId: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
        id: id
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        console.log("/bank/card/setdefault", res.data.message);
        this.getBankCardList();
      }
    );
  }
  addbangcard() {
    this.addshow=true;
  }
  handlePX(CssName, PxNumber) {
    return (
      CssName +
      ":" +
      this.$store.getters[Vue.prototype.MutationTreeType.SYSTEM].availWidth /
        750 *
        PxNumber +
      "px;"
    );
  }
  addcancel(){
    this.addshow=false;
    this.cardId="";    
    this.bankName="";    
    this.realName="";    
    this.subBranch="";    
  }
  mounted() {
    this.getBankCardList();
    console.log("我的银行卡");
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/utils.scss";
</style>
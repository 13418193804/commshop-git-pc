<template>
  <div class="tab-contents">
   

<wintabe ref="wintabe" :table="true" :router="true"></wintabe>

<div class=" flex   flex-pack-center">
       <div  style="width:60%;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
  选择支付方式
</div>
</div>
</div>

<div class=" flex   flex-pack-center ">

<div class="contentBox2 flex">

    <div style="height:90px;margin:10px;" class="flex" :style="payActive == 'ali'?'border:1px  solid #F4C542':''" @click="payActive = 'ali'">
        <img src="../../assets/image/支付宝1.png" />

    </div>
    <div style="margin:10px;height:90px;" class="flex" :style="payActive == 'wechat'?'border:1px  solid #F4C542':''" @click="payActive = 'wechat'">
        <img src="../../assets/image/微信支付.png" />
    </div>

</div>
</div>


<div class=" flex   flex-pack-center ">

<div class="btmContent" style="padding:20px;font-size:14px;text-align:right">
    <span>实付总额：</span><span style="font-size:16px;color:red">￥{{obj.payTotal}}</span>
</div>
</div>
<div class=" flex   flex-pack-center ">

  <div style="width:60%;">

     <div  style="margin:20px 0;float:right;background-color:#F4C542;border-color:#F4C542;color:#FFFFFF;min-width:120px;height:42px;font-size:16px;" class="flex flex-align-center flex-pack-center pointer" 
  @click="dopay">
<span>立即支付</span>
  </div>

<img :src="mwebUrl"/>
  </div>
</div>


  <winbeet></winbeet>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";
// import { recommendList } from '../../service/getData';
import Wintabe from "../../components/Wintabe.vue";
import Winbeet from "../../components/Winbeet.vue";
@Component({
  components: { 
     Wintabe,
    Winbeet
   },
  mixins: [mixin]
})
export default class shopIndex extends Vue {
  obj = {body:"",payId:"",payTotal:""};
  address={contactname:"",contactmobile:"",address:""};
  payActive = "ali";
  mwebUrl =""
  dopay() {
    //    this.obj["payTotal"]
    if (this.payActive == "ali") {
      console.log('支付宝支付')
      Vue.prototype.$reqFormPost(
        "/ali/pay/wap",
        {
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
            clientType:'WEB',
          body: this.obj["body"],
          outTradeNo: this.obj["payId"],
          totalFee: 0.01
        },
        res => {
          if (res == null) {
            console.log("网络请求错误！");
            return;
          }
          if (res.data.status != 200) {
            console.log(
              "需控制错误码" +
                res.data.status +
                ",错误信息：" +
                res.data.message
            );
            Toast(res.data.message);
            return;
          }
          window.location.href =
            "https://openapi.alipay.com/gateway.do?" +
            res.data.data.orderString;
        }
      );
    }else{
      //   window.location.href ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2e2d97a4e10ef2b6&redirect_uri=http://sr.cncloud.com/qichang/wechat/enter/call?action=viewtest&response_type=code&scope=snsapi_userinfo&state="+
      //  this.obj["payId"] +"#wechat_redirect"


     let a:any = window




      console.log('微信支付')


      Vue.prototype.$reqFormPost(
        "/wechat/pay/wap",
        {
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
            spbillCreateIp:a.getAddressIP().cip,
          body: this.obj["body"],
          outTradeNo: this.obj["payId"],
          totalFee: 0.01
        },
        res => {
          
          if (res == null) {
            console.log("网络请求错误！");
            return;
          }
          if (res.data.status != 200) {
            console.log(
              "需控制错误码" +
                res.data.status +
                ",错误信息：" +
                res.data.message
            );
            Toast(res.data.message);
            return;
          }
            console.log(res.data.data.mwebUrl)
this.mwebUrl = res.data.data.mwebUrl
        }
      );


    }
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
  mounted() {
    this.obj.body = this.$route.query.body;
    this.obj.payId = this.$route.query.payId;
    this.obj.payTotal = this.$route.query.payTotal;
    this.address.address = this.$route.query.address; 
    this.address.contactname = this.$route.query.contactname; 
    this.address.contactmobile = this.$route.query.contactmobile; 
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.contentBox2{
    border: 1px #e5e5e5 solid;
  width: 60%;
  font-size:14.2px;
  margin-bottom:20px;
}
.btmContent {
  background-color: #f9f9f9;
  width: 60%;
  border: 1px #e5e5e5 solid;
  margin-top: 10px;
}
</style>



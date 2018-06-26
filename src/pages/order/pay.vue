<template>
  <div class="tab-contents">
   

<wintabe ref="wintabe" :table="true" :router="true"></wintabe>



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
//  console.log("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2e2d97a4e10ef2b6&redirect_uri=http://sr.cncloud.com/qichang/wechat/enter/call?action=viewtest&response_type=code&scope=snsapi_userinfo&state="+
//        this.obj["payId"] +"#wechat_redirect")
        window.location.href ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2e2d97a4e10ef2b6&redirect_uri=http://sr.cncloud.com/qichang/wechat/enter/call?action=viewtest&response_type=code&scope=snsapi_userinfo&state="+
       this.obj["payId"] +"#wechat_redirect"
     
      console.log('微信支付')
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
</style>



<template>
<div style=" position: relative;" v-if="model">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:780px;padding:20px; border-radius: 10px;    position: relative;">
          <div style="position: absolute;top:10px;right:10px;" @click="model = false">
            <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;"/>
          </div>
          <div class="flex btn_refund">
            <div>售后类型</div>
            <button class="selectBox" :class="refundObj.refundType == 'REFUND' ?'selectType':''" @click="changerefundType('REFUND')">未收到货,只退款</button>
            <button class="selectBox" :class="refundObj.refundType == 'GOODS_RETURN' ?'selectType':''" @click="changerefundType('GOODS_RETURN')">退货退款</button>
          </div>
          <div style="width:100%; border:1px #e5e5e5 solid;    margin: 10px;border-radius: 8px;">
            <div style="width:100%;border-bottom:1px #e5e5e5 solid;height:43px ;line-height:43px;padding: 0 10px;">
              提示：快递到达后请拒收快递，否则退款将被拒绝
            </div>
            <div style="padding:5px;">
              <textarea placeholder="请填写申请理由" v-model="refundObj.reason" type="text" name="content" rows="9" style="vertical-align:top;width: 100%;border:none;"></textarea>

            </div>
          </div>
  
          <div class="flex" style="margin:10px;">
        
            <div class="el-upload--picture-card">
        
              <van-uploader :after-read="onRead" class="flex flex-pack-center flex-align-center" style="width: 100%;height: 100%;" accept="image/jpg,image/png, image/jpeg">
        
                <van-icon name="photograph" />
        
              </van-uploader>
        
            </div>
            <div class="el-upload--picture-card" style="position: relative;" v-for="(item,index) in refundObj.refundImgs" :key="index">
        
              <img :src="item" style="width:100%;" />
        
              <i class="iconfont icon-shanchu3" style="color: #000;
        
            position: absolute;
            right: -8px;
            top: -8px;
            height: 17px;
            line-height: 17px;" @click="removeByValue(refundObj.refundImgs,item)"></i>
            </div>
          </div>
          <div style="margin: 10px;">
            <van-button size="large" @click="doRefund()" style="width:150px;height:45px;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:10px;"
            >提交</van-button>
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
  
  import {
  
    Action
  
  } from "vuex-class";
  
  import {
  
    Toast
  
  } from "vant";
  
  // import { recommendList } from '../../service/getData';
  
  import comhead from "../../components/Comhead.vue";
  
import { Prop } from "vue-property-decorator";
  
  
  @Component({
  
    components: {
  
      comhead
  
    },
  
    mixins: [mixin]
  
  })
  
  export default class Refund extends Vue {

 @Prop({ required: false })
  orderItem: any;
  model=false 
  detail = "";
  refundObj = {
    refundType: "REFUND",
    refundImgs: [],
    reason: ""
  };
  changerefundType(data) {
    this.refundObj.refundType = data;
  }
  
    doRefund() {
      console.log('数据',this.refundObj.refundType);
      console.log('oder',this.orderItem.orderId);
      console.log('金额',this.orderItem.orderTotalPrice);
      Vue.prototype.$reqFormPost(
         "/order/refund/apply",
          {
            token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
            userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
            refundType: this.refundObj.refundType,
            orderId: this.orderItem.orderId,
            money: this.orderItem.orderTotalPrice,
            refundImgs: this.orderItem.refundImgs.join(","),
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
  
        Toast("申请成功");
  
        console.log("申请退款后", res.data);
  
        this.$router.go(-1);
  
      });

      // let url = "/order/refund/apply";
  
      // let data = ( < any > Object).assign({
  
      //     refundImgs: this.refundObj.refundImgs.join(","),
  
      //     userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
      //       .userId,
  
      //     token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
      //       .token,
  
      //     orderId: this.orderId,
  
      //     money: this.detail["payTotal"]
  
      //   },
  
      //   this.refundObj
  
      // );
  
      // if (this.detail["detailList"][0].refundStatus == "FAIL_REFUND") {
  
      //   url = "/order/refund/reapply";
  
      //   data = ( < any > Object).assign({
  
      //       refundImgs: this.refundObj.refundImgs.join(","),
  
      //       userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
      //         .userId,
  
      //       token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
      //         .token,
  
      //       refundId: this.detail["detailList"][0].refundOrderList[0].refundId,
  
      //       money: this.detail["payTotal"]
  
      //     },
  
      //     this.refundObj
  
      //   );
  
      // }
  
  
  
      // Vue.prototype.$reqFormPost(url, data, res => {
  
      //   if (res == null) {
  
      //     console.log("网络请求错误！");
  
      //     return;
  
      //   }
  
      //   if (res.data.status != 200) {
  
      //     console.log(
  
      //       "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
  
      //     );
  
      //     Toast(res.data.message);
  
      //     return;
  
      //   }
  
      //   Toast("申请成功");
  
      //   console.log("申请退款后", res.data);
  
      //   this.$router.go(-1);
  
      // });
  
    }
  
    removeByValue(arr, val) {
  
      for (var i = 0; i < arr.length; i++) {
  
        if (arr[i] == val) {
  
          arr.splice(i, 1);
  
          break;
  
        }
  
      }
  
    }
  
    onRead(file) {
  
      console.log();
  
      let form = new FormData();
  
      form.append("file", file.file);
  
  
  
      Vue.prototype.$reqFormUpload("/fileupload", form, res => {
  
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
  
        let refundImgs = this.refundObj.refundImgs ?
  
          this.refundObj.refundImgs :
  
          [];
  
        refundImgs.push(res.data.data.filename);
  
        this.refundObj.refundImgs = refundImgs;
  
        console.log("文件上传", res.data.data.filename);
  
      });
  
    }
  
    formatStatus(status) {
  
      // ORDER_WAIT_PAY
  
      // ORDER_CANCEL_PAY
  
      // ORDER_WAIT_SENDGOODS
  
      // ORDER_WAIT_RECVGOODS
  
      // ORDER_WAIT_REVIEW
  
      // ORDER_END_GOODS
  
      // ORDER_FINISH
  
      switch (status) {
  
        case "ORDER_WAIT_PAY":
  
          return "未付款";
  
        case "ORDER_CANCEL_PAY":
  
          return "已取消";
  
        case "ORDER_WAIT_SENDGOODS":
  
          return "未发货";
  
        case "ORDER_WAIT_RECVGOODS":
  
          return "未收货";
  
        case "ORDER_END_GOODS":
  
          return "交易结束";
  
        case "ORDER_WAIT_REVIEW" || "ORDER_FINISH":
  
          return "交易完成";
  
      }
  
    }
  
  orderId =''
  money =''

    queryDetail() {
  
      Vue.prototype.$reqFormPost(
  
        "/order/queryorderdetail", {
  
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
  
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
          orderId: this.orderId,
          money: this.money
  
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
  
          this.detail = res.data.data;
  
          console.log(res.data.data);
  
        }
  
      );
  
    }
  
    formatStatusColor(status) {
  
      switch (status) {
  
        case "ORDER_WAIT_SENDGOODS":
  
          return "color:red";
  
        case "ORDER_WAIT_RECVGOODS":
  
          return "color:red";
  
        case "ORDER_CANCEL_PAY":
  
          return "color:red";
  
        case "ORDER_WAIT_PAY":
  
          return "color:red";
  
        case "ORDER_WAIT_REVIEW":
  
          return "color:#ffc630";
  
        case "ORDER_FINISH":
  
          return "color:#ffc630;";
  
      }
  
    }
  
    mounted() {
  
      console.log("退款页面");
  
      this.orderId = this.$route.query.orderId;
      this.money = this.$route.query.money;
  
      this.queryDetail();
  
    }
  
  }
</script>

<style lang="scss" scoped>
  @import "../../style/utils.scss";
  
  .selectType {
  
    border-color: #ffc630 !important;
    color: #ffc630;
  
  }
  
  
  
  .product {
  
    display: flex;
  
    font-size: 16px;
  
    border-bottom: solid 1px #eee;
  
    align-items: center;
  
    padding: 10px;
  
    background-color: #fff;
  
  }
  
  
  
  .selectBox {
  
    border: 1px #e5e5e5 solid;
    padding: 5px 18px;
    border-radius: 6px;

  
  }
  
  
  
  .el-upload--picture-card {
  
    background-color: #fbfdff;
  
    border: 1px dashed #c0ccda;
  
    border-radius: 6px;
  
    box-sizing: border-box;
  
    width: 80px;
  
    height: 80px;
  
    cursor: pointer;
  
    line-height: 146px;
  
    vertical-align: top;
  
    margin: 10px;
  
  }
  
  
  
  .el-upload {
  
    display: inline-block;
  
    text-align: center;
  
    cursor: pointer;
  
    outline: none;
  
  }
  .btn_refund{
    div{
      height:40px;line-height: 40px;width:100px;font-size:14px;margin-bottom: 20px;
    }
    button{
        border:1px solid #e6e6e6;height:40px;width:155px;margin-right:28px;font-size:14px;
    }
    .border_yellow{
      border:1px solid #FCCB52;color: #FCCB52
    }
  }
</style>



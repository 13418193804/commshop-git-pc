<template>
<div style=" position: relative;" v-if="reim_model">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div style="background-color:#fff;width:780px;padding:20px; border-radius: 10px;    position: relative;">
          <div style="position: absolute;top:10px;right:10px;" @click="reim_model = false">
            <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;cursor: pointer;"/>
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
            <div class="el-upload--picture-card" style="position: relative;" 
            v-bind:style="handleBackGround(item)"
            v-for="(item,index) in refundObj.refundImgs" :key="index">
        
              <!-- <img :src="item" style="width:100%;" /> -->
        
              <i >
                  <img src="../../assets/image/删除按钮.png" style="color: #000;
                  position: absolute;
                  right: -8px;width:23px;height:23px;
                  top: -8px;" @click="removeByValue(refundObj.refundImgs,item)"/>
                  </i>
            </div>
          </div>
          <div style="margin: 10px;">
            <van-button size="large" @click="doRefund()" style="cursor: pointer;width:150px;height:45px;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:10px;"
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
  reim_model=false 
  detail = "";
  refundObj = {
    refundType: "REFUND",
    refundImgs: [],
    reason: ""
  };
  changerefundType(data) {
    this.refundObj.refundType = data;
    console.log('退款类型',this.refundObj.refundType)
  }
  handleBackGround(img){
    return `background-image:url('${img}');
            background-repeat:no-repeat;
            backgroundPosition:center centert;
            backgroundSize:contain;`
    // backgroundImage:'url(item)', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'
  }
    doRefund() {
      console.log( this.refundObj.refundImgs.join(","))
      let url = "/order/refund/apply";
  
      let data = ( < any > Object).assign({
  
          refundImgs: this.refundObj.refundImgs.join(","),
  
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
            .userId,
  
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
            .token,
  
          orderId:this.orderItem["orderId"],
  
          money: this.orderItem["payTotal"]
  
        },
  
        this.refundObj
  
      );
  
      if (this.orderItem["detailList"][0].refundStatus == "FAIL_REFUND") {
  
        url = "/order/refund/reapply";
  
        data = ( < any > Object).assign({
  
            refundImgs: this.refundObj.refundImgs.join(","),
  
            userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
              .userId,
  
            token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
  
              .token,
  
            refundId: this.orderItem["detailList"][0].refundOrderList[0].refundId,
  
            money: this.orderItem["payTotal"]
  
          },
  
          this.refundObj
  
        );
  
      }
  
      Vue.prototype.$reqFormPost(url, data, res => {
  
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
  
     this.reim_model = false
        this["$Message"].success('申请成功');
        this.$emit('getList');
        this.refundObj = {
          refundType: "REFUND",
          refundImgs: [],
          reason: ""
        }
      });
  
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
   .el-upload--picture-card i{
        opacity: 0;
  }
  .el-upload--picture-card>i{
    opacity: 1;
  }
  
  .selectBox {
  
    border: 1px #e5e5e5 solid;
    padding: 5px 18px;
    border-radius: 6px;
    cursor: pointer;
  
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
    background: url(../../assets/image/添加图片.png) no-repeat;
    background-size: 100%;
  
  }
  
  
  
  .el-upload {
  
    display: inline-block;
  
    text-align: center;
  
    cursor: pointer;
  
    outline: none;
  
  }
  .btn_refund{
    div{
      height:40px;line-height: 40px;width:100px;font-size:14px;margin-bottom: 20px;padding-left: 10px;    cursor: pointer;
    }
    button{
        border:1px solid #e6e6e6;height:40px;width:155px;margin-right:28px;font-size:14px;
    }
    .border_yellow{
      border:1px solid #FCCB52;color: #FCCB52
    }
  }
</style>



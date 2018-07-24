<template>
  <div class="tab-contents" style="margin-bottom:100px;">
          
   <div style="border:1px #e5e5e5 solid;">
     
       <div class="flex flex-align-center" style="background-color:#f7f7f7;padding: 10px;font-size: 14.8px;">
            <span style="margin-right:30px;">下单时间：{{detail.createTime}}</span>
<span>订单号：{{detail.orderId}}</span>
            </div>


        <div class="flex flex-align-center" style="padding:10px;">
         <div  style="flex:1;">
    <div class="flex flex-pack-justify" style="font-size: 16px;">
    </div>
      <div style="padding: 5px;font-size: 14px; " >

            <div class="lineTwo flex flex-align-center xuxian">
                    <div style="width:95px;"> 收货人：</div><div>{{detail.contactName}}</div>
                    </div>
                   <div class="lineTwo flex flex-align-center xuxian">
                    <div style="width:95px;"> 联系方式：</div><div>{{detail.contactPhone}}</div>
                    </div>

                    <div class="lineTwo flex flex-align-center xuxian">
                    <div style="width:95px;"> 收货地址：</div><div>{{detail.provinceName}}{{detail.cityName}}{{detail.countryName}}{{detail.address}}</div>
                    </div>

              </div>
              </div>
           </div>
   </div>



<div style="border:1px #e5e5e5 solid ;margin-top:20px;">

  <div class="flex flex-pack-justify flex-align-center" style="background-color:#f7f7f7;padding: 10px;font-size: 16px;">
             <div>   <span  :style="formatStatusColor(detail.orderStatus)">{{formatStatus(detail.orderStatus)}}</span></div>
        
        
        



<div class="flex flex-pack-justify flex-end-justify" style="margin:0 0 0 10px;">

            <div class="settingBody" v-if="detail.orderStatus === 'ORDER_WAIT_PAY'">
      <van-button size="small" style="margin-right:10px;" @click="doCancel()">取消订单</van-button>
      <van-button size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="payOrder()">支付订单</van-button>
    </div>


      <div class="settingBody" v-if="detail.orderStatus === 'ORDER_WAIT_SENDGOODS'">
      <van-button v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND'&& detail.detailList[0].refundStatus !== 'FAIL_REFUND'" size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="cancelRefund()">取消退款</van-button>
      <van-button v-if="detail.detailList[0].refundStatus == 'WITHOUT_REFUND'|| detail.detailList[0].refundStatus == 'FAIL_REFUND' " size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="doRefund()">申请退款</van-button>
    </div>

      <!-- <van-button v-if="detail.detailList[0].refundStatus == 'WITHOUT_REFUND' && detail.orderStatus !== 'ORDER_CANCEL_PAY' " size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="doRefund()">申请退款</van-button> -->
     <!-- <van-button v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND'" size="small" style="margin-right:10px;"  :style="formatButtonColor()" @click="cancelRefund()">取消退款</van-button> -->

     <div class="settingBody" v-if="detail.orderStatus === 'ORDER_WAIT_RECVGOODS'">
        <div  v-if="detail.detailList[0].refundStatus == 'WITHOUT_REFUND'  || detail.detailList[0].refundStatus == 'FAIL_REFUND' ">
      <van-button size="small" style="margin-right:10px;" @click.stop="getShip()">查看物流</van-button>
      <van-button size="small" style="margin-right:10px;" @click.stop="doRefund()">退货/退款</van-button>
      <van-button size="small" style="margin-right:10px;"  :style="formatButtonColor()" @click.stop="recvgoods()">确认收货</van-button>
        </div>
        <div v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND'&& detail.detailList[0].refundStatus !== 'FAIL_REFUND'">
      <van-button v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND' && detail.detailList[0].refundStatus !== 'FAIL_REFUND'" size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="cancelRefund()">取消退款</van-button>
          </div>   
  <!-- <van-button v-if="detail.detailList[0].refundStatus == 'FAIL_REFUND'"  size="small" style="margin-right:10px;"  @click.stop="doRefund(item)">重新申请</van-button> -->
      <!-- <van-button v-if="detail.detailList[0].refundStatus == 'FAIL_REFUND'" size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="cancelRefund()">取消退款</van-button> -->
    </div>



 <div class="settingBody" v-if="detail.orderStatus === 'ORDER_CANCEL_PAY'">
      <van-button size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="buyAgain()">再次购买</van-button>
    </div>

    

     <div class="settingBody" v-if="detail.orderStatus === 'ORDER_WAIT_REVIEW' ||detail.orderStatus === 'ORDER_FINISH'">
        <div  v-if="detail.detailList[0].refundStatus == 'WITHOUT_REFUND'  || detail.detailList[0].refundStatus == 'FAIL_REFUND' ">
      <van-button size="small" style="margin-right:10px;" :style="formatButtonColor()" @click.stop="buyAgain(detail.orderId)">再次购买</van-button>
      <van-button size="small" style="margin-right:10px;" v-if="detail.orderStatus === 'ORDER_WAIT_REVIEW' " @click.stop="doRefund()">退换/售后</van-button>
      <van-button size="small" style="margin-right:10px;" v-if="detail.orderStatus === 'ORDER_WAIT_REVIEW'" :style="formatButtonColor()" @click.stop="gocomment()">评价商品</van-button>
    </div>

        <div v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND'&& detail.detailList[0].refundStatus !== 'FAIL_REFUND'">
      <van-button v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND'&& detail.detailList[0].refundStatus !== 'FAIL_REFUND'" size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="cancelRefund()">取消退款</van-button>
          </div>
          
    </div>

     <div class="settingBody" v-if="detail.orderStatus === 'ORDER_END_GOODS' ">
        <div  v-if="detail.detailList[0].refundStatus == 'WITHOUT_REFUND' || detail.detailList[0].refundStatus == 'FAIL_REFUND' ">
      <van-button size="small" style="margin-right:10px;" @click.stop="doRefund()">退换/售后</van-button>
        <van-button size="small" style="margin-right:10px;" @click.stop="getShip()" :style="formatButtonColor()">查看物流</van-button>
    </div>

        <div v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND' && detail.detailList[0].refundStatus !== 'FAIL_REFUND'">
      <van-button v-if="detail.detailList[0].refundStatus == 'APPLY_REFUND'&& detail.detailList[0].refundStatus !== 'FAIL_REFUND'" size="small" style="margin-right:10px;" :style="formatButtonColor()" @click="cancelRefund()">取消退款</van-button>
          </div>
          
    </div>


        </div>


            </div>





    <div>

<div style="width:-webkit-fill-available;height:47px;    border-bottom: 1px #e5e5e5 solid;margin:0 20px 0;border-bottomd:1px solid #e5e5e5;" class="flex flex-pack-justify flex-align-center">
    <div style="width:70px;margin-left:40px;">商品信息</div>
    <div style="width:315px;"></div>
    <div style="margin: 0 20px;">单价</div>
    <div style="margin: 0 20px;">数量</div>
    <div style="margin: 0 20px;">小计</div>
</div>



        <div v-for="(item,index) in detail.detailList" :key="index">
                <div  class="flex  flex-align-center flex-pack-justify" style="padding:15px 0;margin:0 20px;border-bottom: 1px #e5e5e5 solid;">
            <div class="flex flex-pack-center flex-align-center" style="width:80px;margin:0 10px 0 20px;overflow:hidden;">
       <img v-lazy="item.goodsImg.split(',')[0]" style="width:100%;border:1px solid #EAEAEA"/>
       </div>


 
       <div  style="overflow: hidden;width:230px;" >
         <div>
           <span class="textLabel" style="color:#000000;font-size:15px">{{item.goodsName}}</span>
          </div>
         <div style="color:#666;" class="textLabel">
        <span v-if="item.skuKeyValue.length>2 ">
<span v-for="items in JSON.parse(item.skuKeyValue)" style="margin-right:10px;">
  <span>{{items.key}}:{{items.value}} X {{item.goodsNum}}</span>
</span>
        </span>
        <span v-else>
          X {{item.goodsNum}}
        </span>
         </div>
       </div>
<div>
<span class="" style="font-size:20">￥{{item.goodsPrice}}</span>
</div>
<div style="">
  {{item.goodsNum}}
</div>


<div>
  <span class="marketPrice" style="font-size:20">￥{{(item.goodsPrice * item.goodsNum).toFixed(2)}}</span>
</div>
    </div>
    
        </div>


 </div>



 <div style="background-color:#F8F8F8;font-size:15px;margin-top:20px;">

<div class="flex flex-pack-justify" style="margin-left:10px;padding:5px 10px;">
                <div>商品合计：</div>
                <div style="margin-right:10px;">￥{{detail.goodsPrice.toFixed(2)}}</div>
        </div>
        <div class="flex flex-pack-justify" style="margin-left:10px;padding:5px 10px;">
                <div>运费：</div>
                <div style="margin-right:10px;">￥{{detail.transportPrice.toFixed(2)}}</div>
        </div>

      <div class="flex flex-pack-justify" style="margin:0 0 0 10px;padding:5px 10px;">
                <div>总计：</div>
                <div style="margin-right:10px;" class="marketPrice">￥{{detail.orderTotalPrice.toFixed(2)}}</div>
        </div>
    </div>


</div>




<div style="padding:10px; border:1px solid #e5e5e5;margin:20px 0; line-height: 24px;color:#999;font-size:14px;">


 <div v-if="detail.payTime" style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"> 支付时间：</div>{{detail.payTime}}
    </div>
    
    
 <div v-if="detail.shipTime" style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"> 发货时间：</div>{{detail.shipTime}}
    </div>
    
 <div v-if="detail.detailList[0].refundOrderList[0]" style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"> 申请退款时间：</div>{{detail.detailList[0].refundOrderList[0].createTime}}
    </div>

     <div v-if="detail.detailList[0].refundStatus === 'FAIL_REFUND'" style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"> 拒绝退款时间：</div>{{detail.detailList[0].refundOrderList[0].updateTime}}
    </div>

    
 <div v-if="detail.detailList[0].refundStatus == 'FAIL_REFUND'" style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"> 退回原因：</div>{{detail.detailList[0].refundOrderList[0].merchantRemark}}
    </div>
        
 <div v-if="detail.detailList[0].refundOrderList[0]" style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"> 售后类型：</div>{{detail.detailList[0].refundOrderList[0].refundType=='REFUND'?'退款':'退货/退款'}} 
    </div>
    
 <div v-if="detail.detailList[0].refundOrderList[0]" style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"> 售后原因：</div> {{detail.detailList[0].refundOrderList[0].refundReason}}
    </div>
<div v-if="detail.detailList[0].refundOrderList[0]">
<div class="flex">
  <div v-for="n in  detail.detailList[0].refundOrderList[0].refundImg?detail.detailList[0].refundOrderList[0].refundImg.split(','):[]">
          <img :src="n" style="width: 80px;height: 80px;padding:10px;"/>
    </div>
</div>
<div v-if="detail.detailList[0].refundStatus == 'WAIT_GOODS_BACK' ||detail.detailList[0].refundStatus ==  'WAIT_RECVGOODS'">
 <div style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="margin-left:10px;"> 请在七天内将商品寄回一下地址并填写物流单号：</div> 
    </div>
 <div  style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;padding-right:10px;"> {{detail.detailList[0].refundOrderList[0].contactName}}</div>{{detail.detailList[0].refundOrderList[0].contactMobile}}
    </div>
 <div  style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;"><i class="iconfont icon-location" style="margin-right:10px;font-size:22px;"></i></div>  <div class="lineTwo">{{detail.detailList[0].refundOrderList[0].provinceName}}{{detail.detailList[0].refundOrderList[0].cityName}}{{detail.detailList[0].refundOrderList[0].countryName}}{{detail.detailList[0].refundOrderList[0].address}}</div>
    </div>
    <div v-if="detail.detailList[0].refundStatus == 'WAIT_GOODS_BACK'||detail.detailList[0].refundStatus ==  'WAIT_RECVGOODS'"  style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;line-height:45px;"> 物流单号：</div>
<div class="flex flex-pack-justify flex-align-center" style="    width: 100%;">
        <div><span style="color:#999" v-if="detail.detailList[0].refundOrderList[0].transNo">{{detail.detailList[0].refundOrderList[0].transNo}}</span><span v-else>未填写</span> </div>
     <van-button size="small" :style="formatButtonColor()" @click="inputTransNo()" v-if="!detail.detailList[0].refundOrderList[0].transNo">填写</van-button>
</div>
    </div>
           </div>
    </div>
    <div style="border-bottom: 1px #eee dashed;margin:10px 0;padding:10px 0;" class="flex">
       <div style="width:115px;text-align:right;line-height:45px;"> 服务时间：</div>
<div class="flex flex-pack-justify flex-align-center" style="    width: 100%;">
        <div>9:00 - 22:00 </div>
        <van-button size="small" onclick="showMeiQia()" style="   ">联系客服</van-button>
</div>
    </div>
</div>
      <logistics ref="logistics" :orderItem="orderItem" @queryDetail="queryDetail()"></logistics>
      <reimburse ref="reimburse" :orderItem="orderItem"  @getList="getList"></reimburse>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import logistics from "../index/logistics.vue";
import reimburse from "../index/reimburse.vue";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast, Dialog } from "vant";

@Component({
  components: { 
    logistics,
    reimburse
   },
  mixins: [mixin]
})
export default class orderdetail extends Vue {
  orderId = "";
  detail = {};
 orderItem = {};

 //填写物流
 shipGet(){





       //  refundId: this.detail["detailList"][0].refundOrderList[0].refundId


  }

  inputTransNo() {
    
    console.log("填写单号");
    // this.$router.push({
    //   name: "refundbackgoods",
    //   query: {
    //     refundId: this.detail["detailList"][0].refundOrderList[0].refundId
    //   }
    // });

  
    let a : any = this.$refs.logistics
        a.wl_model = true
        a.form.refundId = this.detail["detailList"][0].refundOrderList[0].refundId

  }
  formatButtonColor() {
    return "border-color:#ffc630;color:#ffc630";
  }
  gocomment() {
    this.$router.push({
      name: "addcomment",
      query: {
        orderId: this.detail["orderId"]
      }
    });
  }
  buyAgain() {
    Vue.prototype.$reqFormPost(
      "/order/buyagain",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        orderId: this.orderId
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
        this.$router.push({ name: "cart" });
      }
    );
  }
  recvgoods(orderId) {
    Dialog.confirm({
      title: "提示",
      message: "确认收货?"
    })
      .then(() => {
        Vue.prototype.$reqFormPost(
          "/order/recvgoods",
          {
            userId: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].userId,
            token: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].token,
            orderId: orderId
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

            this.queryDetail();
          }
        );
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  }
  getShip() {
    this.$router.push({ name: "ship", query: this.detail });
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
        return "已评论";
      case "ORDER_WAIT_REVIEW":
        return "待评价";
      case "ORDER_FINISH":
        return "交易完成";
    }
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
      case "ORDER_END_GOODS":
        return "color:#ffc630";

      case "ORDER_WAIT_REVIEW":
        return "color:#ffc630";
      case "ORDER_FINISH":
        return "color:#ffc630;";
    }
  }
  doCancel() {
    Dialog.confirm({
      title: "提示",
      message: "是否取消订单?"
    })
      .then(() => {
        Vue.prototype.$reqFormPost(
          "/order/cancel",
          {
            userId: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].userId,
            token: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].token,
            orderId: this.detail["orderId"]
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
            this.queryDetail();

            console.log("取消订单");
          }
        );
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  }
  cancelRefund() {
    Dialog.confirm({
      title: "提示",
      message: "是否取消申请退款?"
    })
      .then(() => {
        Vue.prototype.$reqFormPost(
          "/order/refund/delete",
          {
            userId: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].userId,
            token: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].token,
            refundId: this.detail["detailList"][0].refundOrderList[0].refundId
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
            Toast("取消成功");
            this.queryDetail();
          }
        );
        // on confirm
      })
      .catch(() => {
        // on cancel
      });

    console.log("取消退款");
  }
  queryDetail() {
    Vue.prototype.$reqFormPost(
      "/order/queryorderdetail",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        orderId: this.orderId
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

  doRefund(item){
    console.log("申请退款");
    this.orderItem =  item
    let a : any = this.$refs.reimburse
    a.model = true
  }
  //doRefund() {
    
    // this.$router.push({
    //   name: "refund",
    //   query: {
    //     orderId: this.detail["orderId"]
    //   }
    // });
  //}

  payOrder() {
    this.$router.push({
      name: "pay",
      query: {
        body: this.detail["orderTitle"],
        payId: this.detail["payNo"],
        payTotal: this.detail["payTotal"]
      }
    });
  }
  mounted() {
    this.orderId = this.$route.query.orderId;
    this.queryDetail();
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.product {
  display: flex;
  font-size: 16px;
  border-bottom: solid 1px #eee;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}
.xuxian{
     border-bottom: 1px #eee dashed;
     padding:10px 0;
}
</style>



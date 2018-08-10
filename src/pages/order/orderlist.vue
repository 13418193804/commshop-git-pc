<template>
  <div class="tab-contents">

     <div class="flex" style="background-color:#FBFBFB;border:1px solid #e5e5e5;">
       <div v-for="(item,index) in orderTitleList" @click="changePage(index)" class="flex-1" :style="active == index ?'background-color:#E1E1E1':''" style="height:37px;line-height:37px;text-align:center;cursor: pointer;">
           <span> {{item.name}}</span>
       </div>

     </div>
     <!-- v-infinite-scroll="loadMore"
  :infinite-scroll-disabled="loading"
  infinite-scroll-distance="20" -->
 <div  v-if="active == Pageindex && orderList[returnKey()].orderList.length>0">
  <div v-for="(item,index) in orderList[returnKey()].orderList" @click="goDetail(item)" :key="index" style="border:1px #e5e5e5 solid;margin-top: 20px;">
      <div class="orderTitle textLabel  flex   flex-pack-justify">  
          <div style="padding-left:10px;">
            <span style="margin-right:30px;">  下单时间:{{item.createTime}}</span>
            <span>  订单号:{{item.orderId}}</span>
          </div>
        <!-- 如果未付款显示去付款按钮 -->
          <div v-if="item.orderStatus === 'ORDER_WAIT_PAY'" class="buyBtn" @click.stop="payOrder(item)">去付款</div>
           <!-- 如果取消订单显示可删除按钮 -->
          <div  class="flex flex-align-center" >
            <div style="padding:0 15px;position: relative;cursor: pointer;"
              @click.stop="doDleterShow(item.orderId)"  v-if=" active == '0' &&( item.orderStatus === 'ORDER_FINISH' || item.orderStatus =='ORDER_CANCEL_PAY')&&(item.detailList[0].refundStatus == 'WITHOUT_REFUND' ||item.detailList[0].refundStatus == 'SUCCEED_REFUND') ">
                <div class="deleteBorder" > </div>
                <i class="iconfont icon-iconfontshanchu3" ></i>
            </div>
            <!-- <div style="padding:0 15px;position: relative;" 
              @click.stop="doDeleteOrder(item.orderId)"  v-if=" active == '0' && item.orderStatus === 'ORDER_FINISH'&&(item.detailList[0].refundStatus == 'WITHOUT_REFUND' ||item.detailList[0].refundStatus == 'SUCCEED_REFUND' ||item.orderStatus == 'ORDER_CANCEL_PAY') ">
                <div class="deleteBorder"> </div>
                <i class="iconfont icon-iconfontshanchu3" style="" ></i>
            </div> -->
            <div v-else style="width:10px"></div>
          </div>
      </div>
      <div class="detailBody">
          <div v-for="items in  item.detailList">
            <div class="product1">
                <div class="flex flex-align-center">
                  <img v-lazy='items.goodsImg' style='height:80px;width:80px;border-radius: 5px;border: 1px #e5e5e5 solid;'/>
                </div>
                <div class="flex-1" style='font-size:12px;overflow:hidden;padding:0 10px;'>
                    <div class='lineTwoType'>{{items.goodsName}}</div>
                    <div style='  overflow: hidden;text-overflow: ellipsis;color:#999'>
                    <div style="color:#666;" class="textLabel">
                        <span v-if="items.skuKeyValue.length>2 ">
                        <span v-for="items1 in JSON.parse(items.skuKeyValue)" style="margin-right:10px;">
                          <span>{{items1.key}}:{{items1.value}} X {{items.goodsNum}}</span>
                        </span>
                        </span>
                        <span v-else>
                          X {{items.goodsNum}}
                        </span>
                    </div>
                    </div>
                </div>
                <div class="flex-1" style="font-size:14.8px;width:250px;border-right: 1px dashed #ededed;">
                    <div class="  flex   flex-pack-center  flex  flex-align-center">
                          <span v-if="active == '0' && item.detailList[0].refundStatus == 'SUCCEED_REFUND' " style="color:red">退款完成</span>
                          <span style="margin-right:10px;" :style="formatStatusColor(item.orderStatus)" v-else-if="active != '5' ">{{formatStatus(item.orderStatus)}}</span>
                          <!-- v-if="item.detailList[0].refundStatus == 'WITHOUT_REFUND'"  -->

                          <span v-if="active == '5'">
                            <span v-if="item.detailList[0].refundStatus == 'APPLY_REFUND' " style="color:red;margin-right: 10px;">退款中</span>
                            <span v-if="item.detailList[0].refundStatus == 'SUCCEED_REFUND' " style="color:red;margin-right: 10px;">退款完成</span>
                            <span v-if="item.detailList[0].refundStatus == 'WAIT_GOODS_BACK' " style="color:red;margin-right: 10px;">退款中</span>
                            <span v-if="item.detailList[0].refundStatus == 'WAIT_RECVGOODS' " style="color:red;margin-right: 10px;">退款中</span>
                          <!-- <span v-if="item.detailList[0].refundStatus == 'SUCCEED_REFUND'" style="color:#ffc630;">已退款</span>
                          <span v-if="item.detailList[0].refundStatus == 'WAIT_GOODS_BACK'" style="color:#ffc630;">待寄回</span>
                          <span v-if="item.detailList[0].refundStatus == 'WAIT_RECVGOODS'" style="color:#ffc630;">退货中</span> -->
                          <span v-if="item.detailList[0].refundStatus == 'FAIL_REFUND'" style="color:red;margin-right: 10px;">已拒绝</span>
                          </span>
                    </div>
                  <div class="settingBody" v-if="item.orderStatus === 'ORDER_WAIT_PAY'">
                    <span style="margin-right:10px;" @click.stop="doCancel(item)">取消订单</span>
                    <!-- <span style="margin-right:10px;" :style="formatButtonColor()"  @click.stop="payOrder(item)">支付订单</span> -->
                  </div>

                  <div class="settingBody" v-if="item.orderStatus === 'ORDER_WAIT_SENDGOODS'">
                      <span v-if="item.detailList[0].refundStatus == 'APPLY_REFUND' && item.detailList[0].refundStatus !== 'FAIL_REFUND'"  style="margin-right:10px;" :style="formatButtonColor()" 
                      @click.stop="goDetail(item)">取消退款</span>

                      <span v-if="item.detailList[0].refundStatus == 'WITHOUT_REFUND' || item.detailList[0].refundStatus == 'FAIL_REFUND' "  style="margin-right:10px;" :style="formatButtonColor()" 
                      @click.stop="goRefund(item) ">申请退款</span>
                      <!-- <span v-if="item.detailList[0].refundStatus == 'WITHOUT_REFUND' || item.detailList[0].refundStatus == 'FAIL_REFUND' "  style="margin-right:10px;" :style="formatButtonColor()" 
                      @click.stop="doRefund(item) ">申请退款1</span> -->
                  </div>
                  <div class="settingBody" v-if="item.orderStatus === 'ORDER_WAIT_RECVGOODS'">
                      <div  v-if="item.detailList[0].refundStatus == 'WITHOUT_REFUND' || item.detailList[0].refundStatus == 'FAIL_REFUND' ">
                        <span style="margin-right:10px;" @click.stop="getShip(item)">查看物流</span>
                        <span style="margin-right:10px;" @click.stop="doRefund(item)">退货/退款</span>
                        <span style="margin-right:10px;"  :style="formatButtonColor()" @click.stop="recvgoods(item.orderId)">确认收货</span>
                      </div>

                      <div v-if="item.detailList[0].refundStatus == 'APPLY_REFUND' && item.detailList[0].refundStatus !== 'FAIL_REFUND'">
                        <span v-if="item.detailList[0].refundStatus !== 'WITHOUT_REFUND' && item.detailList[0].refundStatus !== 'FAIL_REFUND'"  style="margin-right:10px;" :style="formatButtonColor()" 
                        @click.stop="goDetail(item)">取消退款</span>
                      </div>   
                  <!-- <van-button v-if="item.detailList[0].refundStatus == 'FAIL_REFUND'"  size="small" style="margin-right:10px;"  @click.stop="doRefund(item)">重新申请</van-button> -->
                    <!-- <van-button v-if="item.detailList[0].refundStatus == 'APPLY_REFUND'" size="small" style="margin-right:10px;" :style="formatButtonColor()" @click.stop="goDetail(item)">取消退款</van-button> -->

                  </div>
                    <div class="settingBody" v-if="item.orderStatus === 'ORDER_WAIT_REVIEW' ||item.orderStatus === 'ORDER_FINISH'">
                        <div  v-if="item.detailList[0].refundStatus == 'WITHOUT_REFUND' || item.detailList[0].refundStatus == 'FAIL_REFUND' ">
                          <span style="margin-right:10px;" :style="formatButtonColor()" @click.stop="buyAgain(item.orderId)">再次购买</span>
                          <span style="margin-right:10px;" v-if="item.orderStatus === 'ORDER_WAIT_REVIEW' " @click.stop="doRefund(item)">退换/售后</span>
                          <span style="margin-right:10px;" v-if="item.orderStatus === 'ORDER_WAIT_REVIEW'" :style="formatButtonColor()" @click.stop="gocomment(item)">评价商品</span>
                        </div>

                        <div v-if="item.detailList[0].refundStatus == 'APPLY_REFUND' && item.detailList[0].refundStatus !== 'FAIL_REFUND'">
                            <span v-if="item.detailList[0].refundStatus == 'APPLY_REFUND' && item.detailList[0].refundStatus !== 'FAIL_REFUND'" size="small" style="margin-right:10px;" :style="formatButtonColor()" @click.stop="goDetail(item)">取消退款</span>
                        </div> 
                    </div>
                    <div class="settingBody" v-if="item.orderStatus === 'ORDER_END_GOODS'">
                        <div  v-if="item.detailList[0].refundStatus == 'WITHOUT_REFUND' || item.detailList[0].refundStatus == 'FAIL_REFUND' ">
                      <span size="small" style="margin-right:10px;" @click.stop="doRefund(item)">退换/售后</span>
                      <span size="small" style="margin-right:10px;" @click.stop="getShip(item)" :style="formatButtonColor()">查看物流</span>
                    </div>
                    <div v-if="item.detailList[0].refundStatus == 'APPLY_REFUND' && item.detailList[0].refundStatus !== 'FAIL_REFUND'">
                      <span  v-if="item.detailList[0].refundStatus == 'APPLY_REFUND' && item.detailList[0].refundStatus !== 'FAIL_REFUND'"  style="margin-right:10px;" :style="formatButtonColor()" @click.stop="goDetail(item)">取消退款</span>
                    </div>         
                    </div>
                    <div class="settingBody" v-if="item.orderStatus === 'ORDER_CANCEL_PAY'">
                      <span style="margin-right:10px;" :style="formatButtonColor()" @click.stop="buyAgain(item.orderId)">再次购买</span>
                    </div>
                </div>

                <div style='text-align:center;font-size:16px;width:180px;'>
                  <div style="">
                      <span>￥{{(items.goodsPrice * items.goodsNum).toFixed(2)}}</span>
                  </div>
                  <!-- <div style=""><span>￥{{item.orderTotalPrice.toFixed(2)}} {{index}}</span></div> -->
                </div>
            </div>
          </div>
      </div>
      <!-- 已取消订单信息 -->
      <div class="shoplistSum" v-if="item.orderStatus =='ORDER_CANCEL_PAY'" >共{{item.detailList.length}}件商品 合计：¥{{item.orderTotalPrice.toFixed(2)}} </div>
      <!-- 订单信息 -->
      <div class="shoplistSum" v-else>共{{item.detailList.length}}件商品 合计：¥{{item.orderTotalPrice.toFixed(2)}}
        (含运费{{item.transportPrice.toFixed(2)}})
      </div>

  </div>
</div>

<!-- 暂无订单 -->
      <div class=""  style="font-size:14px;padding:15px;" v-else>
          <div style="margin-top:50px;text-align:center;">
            <img src="../../assets/none.png" />
            <p>暂时还没有相关的订单哦!</p>
          </div>
      </div>
          <div v-if="orderList[returnKey()].orderList.loading">加载中...</div>
      
<!-- 删除订单信息 -->
  <div style=" position: relative;">
    <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="deleteshow" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex-around-justify flex-align-center" style="background-color:#fff;width:580px;position: relative;padding: 40px;">
          <div @click="doDleterShow()" style="position: absolute;top:10px;right:10px;cursor:pointer;">
            <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
          </div>
          <div style="font-size: 16px;margin-bottom: 10px;text-align:center;">删除的订单无法申请售后和评论</div>
           <div style="font-size: 16px;margin-bottom: 10px;text-align:center;">是否要继续?</div>
          <div style="text-align:center;">
            <button @click.stop="doDeleteOrder()" style="cursor:pointer;border:none;width:120px;height:35px;background-color:#FCCB52;color:#fff;text-align: center;line-height:35px;margin-right:10px;">确定</button>
            <button @click="doDleterShow()"  style="cursor:pointer;border:none;width:120px;height:35px;color:#FCCB52;text-align: center;line-height:35px;border:1px solid #FCCB52;">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>

<reimburse ref="reimburse" :orderItem="orderItem"  @getList="getList"></reimburse>
<reimburseTwo ref="reimburseTwo" :orderItem="orderItem" @getList="getList" ></reimburseTwo>
<ship ref="ship" ></ship>

</div>
  
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast, Dialog } from "vant";
// import { recommendList } from '../../service/getData';
import axios from "axios";

import Wintabe from "../../components/Wintabe.vue";
import Winbeet from "../../components/Winbeet.vue";
import reimburse from "../index/reimburse.vue";
import reimburseTwo from "../index/reimburseTwo.vue";
import ship from "../index/ship.vue";



// import reimburse from "../index/reimburse.vue";

@Component({
  components: {
    Wintabe,
    Winbeet,
    reimburse,
    reimburseTwo,
    ship
},
  mixins: [mixin]
})
export default class orderList extends Vue {
  deleteshow = false;
  loading = false;
  finished = false;
  orderItem = {};
  //删除订单信息
  orderId ='';
  orderList = {
    orderList: { orderList: [], pageSize: 10, loading: true },
    orderList_pay: { orderList: [], pageSize: 10, loading: true },
    orderList_send: { orderList: [], pageSize: 10, loading: true },
    orderList_reacv: { orderList: [], pageSize: 10, loading: true },
    orderList_finish: { orderList: [], pageSize: 10, loading: true },
    orderList_refund: { orderList: [], pageSize: 10, loading: true }
  };
  
  goRefund(item){
    this.orderItem =  item
    let a : any = this.$refs.reimburse
    a.model = true
  }

  getList(){
        this.getOrderList(this.orderTitleList[this.active].status,true);
  }

  onLoad() {
    setTimeout(() => {}, 500);
  }
  active = 0;
  currendDeleteOrderId = "";
  orderTitleList = [
    {
      name: "全部",
      status: ""
    },
    {
      name: "待付款",
      status: "ORDER_WAIT_PAY"
    },
    {
      name: "待发货",
      status: "ORDER_WAIT_SENDGOODS"
    },
    {
      name: "待收货",
      status: "ORDER_WAIT_RECVGOODS"
    },
    {
      name: "待评价",
      status: "ORDER_WAIT_REVIEW"
    },
    {
      name: "退换/售后",
      status: "REFUND"
    }
  ];
  //是否删除
  doDleterShow(orderId){
    this.currendDeleteOrderId = orderId;
    this.deleteshow=!this.deleteshow;
  }
  //删除订单
  doDeleteOrder(orderId){
      this.deleteshow=!this.deleteshow
      console.log(this.orderId)
        Vue.prototype.$reqFormPost(
          "/order/delete",
          {
            userId: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].userId,
            token: this.$store.getters[
              Vue.prototype.MutationTreeType.TOKEN_INFO
            ].token,
            orderId: this.currendDeleteOrderId
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

            console.log('订单信息',res.data);
            this.getOrderList(this.orderTitleList[this.active].status,true);
          }
        );
        // on confirm

}
  payOrder(item) {
   
    this.$router.push({
      name: "pay",
      query: {
        body: item.orderTitle,
        payId: item.payNo,
        payTotal: item.payTotal,
        createTime:item.createTime
      },
      params:{
      }
    });
  }
  loadMore() {
    this.loading = true;
    let self = this;
    setTimeout(() => {
      this.orderList[this.returnKey()].pageSize += 10;
      this.getOrderList(this.orderTitleList[this.active].status);
    }, 1000);
  }
  // ORDER_WAIT_PAY
  // ORDER_CANCEL_PAY
  // ORDER_WAIT_SENDGOODS
  // ORDER_WAIT_RECVGOODS
  // ORDER_WAIT_REVIEW
  // ORDER_END_GOODS
  // ORDER_FINISH
  doCancel(item) {
    Dialog.confirm({
      title: "提示",
      message: "是否取消订单?"
    })
    .then(() => {
      Vue.prototype.$reqFormPost(
      "/order/cancel",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        orderId: item.orderId
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
        this.getOrderList(this.orderTitleList[this.active].status,true);

        console.log("取消订单");
        }
      )
      })
      .catch(() => {
        // on cancel
      }); 
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
          case "ORDER_END_GOODS":
        return "color:#ffc630";

    }
  }
 
 //查看物流信息
  getShip(item) {
    // this.$router.push({ name: "ship", query: item });
    let d : any = this.$refs.ship
    d.ship_model = true
    d.getShipInfoList(
      item.transportNo,item.transportCode
    );
  }

  //退货退款
  doRefund(item) {
    this.orderItem =  item
    let c : any = this.$refs.reimburseTwo
    c.reim_model = true

  }
  buyAgain(orderId) {
    Vue.prototype.$reqFormPost(
      "/order/buyagain",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        orderId: orderId
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
              console.log('订单单号',res.data)
              return;
            }
            this.changePage(4);
            // this.getOrderList(this.orderTitleList[this.active].status,true);
          }
        );
        // on confirm
      })
      
      .catch(() => {
        // on cancel
      });
      
  }
  formatButtonColor() {
    return "border-color:#ffc630;color:#000";
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

  returnKey() {
    switch (this.active) {
      case 0:
        return "orderList";
      case 1:
        return "orderList_pay";
      case 2:
        return "orderList_send";
      case 3:
        return "orderList_reacv";
      case 4:
        return "orderList_finish";
      case 5:
        return "orderList_refund";
    }
  }
  getOrderList(orderStatus,keep:boolean=false) {
    let valKey = this.returnKey();

    Vue.prototype.$reqFormPost(
      orderStatus != "REFUND" ? "/order/queryorder" : "/refund/order/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        orderStatus: orderStatus,
        page: 0,
        pageSize: this.orderList[valKey].pageSize
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


        if (this.orderList[valKey].loading||keep) {
          this.orderList[valKey].orderList = res.data.data.orderList;
          if (
            res.data.data.orderList.length != this.orderList[valKey].pageSize
          ) {
            this.orderList[valKey].loading = false;
          }
        }

  this.orderList[valKey].orderList = this.orderList[valKey].orderList.filter((item,index)=>{
return item.detailList.length!==0;
 })


console.log(this.orderList[valKey].orderList)
      }
    );
  }
    removeByValue(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
          arr.splice(i, 1);
          break;
        }
      }
    }
  goDetail(item) {
    this.$router.push({
      name: "orderdetail",
      query: {
        orderId: item.orderId
      }
    });
  }
  gocomment(item) {
    this.$router.push({
      name: "evaluate",
      query: {
        orderId: item.orderId
      }
    });
  }
  Pageindex = 0;
  changePage(index) {
    if(this.active == index){
      return
    }
    this.active = index;
    this.Pageindex = index
    this.getOrderList(this.orderTitleList[index].status,true);
  }
  mounted() {

    this.$emit('selectMenu',{
      name: '我的订单',
      url:'/orderlist',
    })
  
    this.orderTitleList.forEach((item, index) => {
      if (this.$route.query.orderStatus == item.status) {
        this.active = index;
        this.Pageindex = index;
        return;
      }
    });

if(this.$route.query.orderStatus == 'ORDER_WAIT_SENDGOODS'){
    this.changePage(2);
}else{
    this.getOrderList(this.orderTitleList[this.active].status);
}


  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.bodyLabel {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orderTitle {
  
  background-color:#F1F1F1;
  font-size: 14px;

  height: 44px;
  line-height: 44px;

}
.buyBtn{
  color:#fff;
  background-color: rgb(239, 202, 92);
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: 7px;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    right: 45px;
}
.detailBody {
  cursor: pointer;
}
.deleteBorder {
  border-left: 1px #e5e5e5 solid;
  padding: 0 10px;
  position: absolute;
  height: 20px;
  left: 4px;
  top: 15px;
}
.settingBody {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  
  span:hover{
    color: #ffc630!important;
  }
}
</style>

<style>
.product1 {
  display: flex;
  font-size: 16px;
  border-top: solid 1px #eee;
  border-bottom: solid 1px #eee;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}
/* 删除弹框提示 */
.van-dialog{
  width: 25%;
}
.shoplistSum{
  color:red;text-align: right;height:40px;line-height: 40px;padding-right:20px;
}
</style>



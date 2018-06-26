<template>
  <div class="tab-contents" >
    
<wintabe ref="wintabe" :table="true" :router="true"></wintabe>
<div class=" flex   flex-pack-center">
       <div  style="width:60%;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
  收货信息
</div>
</div>
</div>



<div class=" flex   flex-pack-center ">

<div class="contentBox2 ">

<div style="line-height: 32px;margin:20px;border-bottom:1px solid #e5e5e5;" v-if="address">
  
    <i class="iconfont icon-location"></i>


<div class="flex">
<div class="content_title">收货人：</div>
<div>{{address.contactname}}</div>
</div>

<div class="flex">
<div class="content_title">联系方式：</div>
<div>{{address.contactmobile}}</div>
</div>

<div class="flex">
<div class="content_title">收货地址：</div>
<div>{{address.province}}{{address.city}}{{address.country}}{{address.address}}</div>
</div>


</div>

<div style="padding:30px 20px;">

      <van-button  style="border-radius:4%;background-color:#fff;color:red;border:1px solid red;min-width:150px;margin-right:10px;overflow: hidden;"  >地址切换</van-button>
      <van-button  style="border-radius:4%;background-color:#fff;color:#F4C542;border:1px solid #F4C542;min-width:150px;margin-right:10px;overflow: hidden;"  >新建地址</van-button>
</div>
</div>
</div>


<div class=" flex   flex-pack-center ">
       <div  style="width:60%;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex flex-pack-justify flex-align-center">
    <div style="width:70px;margin-left:40px;">商品信息</div>
    <div style="width:230px;"></div>
    <div style="margin: 0 20px;">单价</div>
    <div style="margin: 0 20px;">数量</div>
    <div style="margin: 0 20px;">小计</div>
</div>
</div>
</div>


<div class=" flex   flex-pack-center ">

<div class="contentBox2 ">

  
  <div class="cartItem flex  flex-align-center flex-pack-justify" v-for="(item,index) in shopCartList">
  <div class="flex flex-pack-center flex-align-center" style="width:80px;margin:0 10px 0 20px;overflow:hidden;">
       <img v-lazy="item.goodsImg.split(',')[0]" style="width:100%;border:1px solid #EAEAEA"/>
       </div>
             <div  style="overflow: hidden;width:200px;" >
         <div>
           <span class="textLabel" style="color:#000000;font-size:15px">{{item.goodsName}}</span>
          </div>
         <div style="color:#666;" class="textLabel">
        <span v-if="item.skuKeyValue.length>2 ">
<span v-for="items in JSON.parse(item.skuKeyValue)" style="margin-right:10px;">
  <span>{{items.key}}:{{items.value}} X {{item.num}}</span>
</span>
        </span>
        <span v-else>
          X {{item.num}}
        </span>
         </div>
       </div>
<div>
<span class="" style="font-size:20">￥{{item.price}}</span>
</div>
<div style="">
  {{item.num}}
</div>
<div>
  <span class="marketPrice" style="font-size:20">￥{{(item.price * item.num).toFixed(2)}}</span>
</div>
</div>

  <div style="background-color:#FCFCFC; padding: 0 30px;font-size:14.8px">
<div class="flex flex-pack-justify" style="line-height:30px;border-bottom:1px #e5e5e5 solid;">
    <div>
      <div style="color:#666">配送方式</div>
      <div>快递</div>
    </div>


   <div>
      <div class="flex">
        <div>商品合计：</div><div>￥{{totalPrice}}</div>
      </div>
       <div class="flex">
        <div>运费：</div><div>{{freight}}</div>
      </div>
    </div>
</div>




<div>

<div style="height:40px;line-height:40px;">给卖家的话（选填） <span style="margin:0 20px;color:#999">选填内容已和卖家协商确认</span></div>

<div style="border:1px solid #e5e5e5;">

  <textarea type="text" name="content"  rows="7" style="width: 100%;border:none"   
                   readonly="readonly" ></textarea>  

</div>


<div style="padding:20px 0;" class="flex flex-pack-justify flex-align-center">

<div>应付金额</div>

<div class="flex flex-align-center">
 <div style="padding:0 20px;">
    <span style="color:red;font-size:18px;">￥{{totalPrice}}</span>
  </div>
  <div  style="background-color:#F4C542;border-color:#F4C542;color:#FFFFFF;min-width:120px;height:42px;font-size:16px;" class="flex flex-align-center flex-pack-center pointer" 
  @click="onSubmit">
<span>去付款</span>
  </div>
  </div>


</div>


</div>
  
  
  </div>

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
prepareId = ''
shopCartList = []
address = {}
totalPrice = ''
goodsSum = ''
freight =''
getPreInfo(prepareId) {
    Vue.prototype.$reqFormPost1(
      "/prepare/order/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        prepareId: prepareId
      },
      res => {
       if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }
      
        this.shopCartList = res.data.shopCartList;
        this.address = res.data.address;
        console.log('address',this.address)
        this.totalPrice = res.data.totalPrice ;
        this.goodsSum = res.data.goodsSum;
        this.freight = res.data.freight;

      }
    );
  }


  mounted() {
    this.prepareId = this.$store.getters[
      Vue.prototype.MutationTreeType.PREPAREID
    ];
    this.getPreInfo(
      this.$store.getters[Vue.prototype.MutationTreeType.PREPAREID]
    );
  }
}
</script>

<style lang="scss" scoped>

.contentBox2{
    border: 1px #e5e5e5 solid;
  width: 60%;
  font-size:14.2px;
  margin-bottom:20px;
}
.content_title{
  min-width: 90px;
}
</style>



<template>
  <div class="tab-contents" >
    
<wintabe ref="wintabe" :table="true" :router="true"></wintabe>
<div class=" flex   flex-pack-center">
       <div  style="width:1200px;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
  收货信息
</div>
</div>
</div>



<div class=" flex   flex-pack-center ">
<div class="contentBox2 ">

  
<div style="line-height: 32px;margin:20px;border-bottom:1px solid #e5e5e5;"  v-if="address">
<div class="flex ">
    <i class="iconfont icon-location"></i>
    <span>已选地址</span>
  <div  style="margin-left:15px;background-color:#F4C542;border-color:#F4C542;color:#FFFFFF;min-width:100px;height:32px;font-size:14.8px;" class="flex flex-align-center flex-pack-center pointer" 
  @click="update()">
<span>修改</span>
  </div>
</div>

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

      <van-button  style="border-radius:4%;background-color:#fff;color:red;border:1px solid red;min-width:150px;margin-right:10px;overflow: hidden;" @click="changeModel('change')" >地址切换</van-button>
      <van-button  style="border-radius:4%;background-color:#fff;color:#F4C542;border:1px solid #F4C542;min-width:150px;margin-right:10px;overflow: hidden;" @click="changeModel('add')" >新建地址</van-button>
</div>
</div>
</div>


<div class=" flex   flex-pack-center ">
       <div  style="width:1200px;">
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
                    ></textarea>  

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

<div style=" position: relative;">
  <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="withchangeModel" >
    <div class="flex flex-pack-center flex-align-center" style="height:100vh;">          
        <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding:20px;position:relative; width: 590px;">
          <div @click="addcancel()" class="add_colose"><i class="iconfont icon-close"></i></div>
          <div  class="add_titile">切换地址</div>
          <div class="flex region" style="min-height:300px;    overflow: auto;">
            <div>
                <div v-for="(item,index) in addressList" @click="setDefaultAddress(item.addressId)" class="bc_addres bc_addresCur" :style=" address.addressId == item.addressId?'bc_addresCur':''">
                    <div class="flex">
                        <div style="width:100px;text-align:right;">收货人：</div>
                        {{item.contactname}}
                    </div>
                    <div class="flex">
                        <div style="width:100px;text-align:right;">联系方式：</div>
                        {{item.contactmobile.substring(0,3)}}****{{ item.contactmobile.substring(7,13)}}
                    </div>
                    <div class="flex">
                        <div style="width:100px;text-align:right;">收货地址：</div>
                        {{item.address}}
                    </div>
                </div>
            </div>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <button 
            style="border: none; width: 150px; height: 45px; background-color: rgb(252, 203, 82); color: rgb(255, 255, 255); text-align: center; line-height: 45px; margin-right: 5px; font-size: 16px;">确定</button>
            <button 
            style="border: none; width: 150px; height: 45px;border:1px solid #ffc630; color:  rgb(252, 203, 82); text-align: center; line-height: 45px; margin-right: 5px; font-size: 16px;">取消</button>
          </div>
        </div>
    </div>
  </div>
  </div>

      <!-- 新增 -->
      <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="addshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">          
            <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding:20px;position:relative;">
              <div @click="addcancel()" class="add_colose"><i class="iconfont icon-close"></i></div>
              <div v-if="!updateaddressid" class="add_titile">新增地址</div>
              <div v-if="updateaddressid">修改地址</div>
    
              <div class="flex region">
                <div style="padding-right:15px;">所在地区</div>
           
                <select v-model="provinceid" @change='changeprovince'>
                  <option v-for="(item,index) in province" v-bind:value="item.id" :key="index">
                    {{item.name}}
                  </option>
                </select>
                <select v-model="cityid" @change='changecity'>
                  <option v-for="(item,index) in city" v-bind:value="item.id" :key="index">
                    {{item.name}}
                  </option>
                </select>
                <select v-model="countryid">
                  <option v-for="(item,index) in country" v-bind:value="item.id" :key="index">
                    {{item.name}}
                  </option>
                </select>
              </div>
              <div class="flex region">
                <div style="padding-right:15px;">详细地址</div>
                <textarea v-model="address1"/>
              </div>
              <div class="flex region">
                <div class="flex">
                  <div style="padding-right:27px;">收货人</div>
                  <input  v-model="contactName"/>
                </div>
                <div class="flex region">
                  <div style="padding-right:24px;padding-left:15px;">手机号码</div>
                  <input v-model="contactMobile"/>
                </div>
              </div>
              <div @click="isdef()" style="border-top:1px solid #F4F4F4;padding-top:20px;"><span :style="isDefault==1?'background-color:#FF0506;':''" style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;margin-right:10px;"></span>设为默认</div>
              <div class="flex region_btn">
                <div @click="addaddress()">确定</div>
                <div @click="addcancel()">取消</div>
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
   isdef(){
    if(this.isDefault==0){
      this.isDefault=1
    }else{
      this.isDefault=0
    }
  }

  addcancel(){

      this.withchangeModel = false
  this.addshow= false
  }



  update(){

    this.updateaddressid= this.address['addressId'];
    this.addshow=true;
    this.provinceid=this.address['provinceid'];
    this.cityid=this.address['cityid'];
    this.countryid=this.address['countryid'];
    this.address1=this.address['address'];
    this.contactName=this.address['contactname'];
    this.contactMobile=this.address['contactmobile'];
    this.isDefault=this.address['isdefault'];

    this.getprovince();
    this.querycity();
    this.querycountry();
  }
    addaddress() {

    if(this.provinceid==""){
      this["$Message"].warning("请选择省份");
      return;
    }
    if(this.cityid==""){
      this["$Message"].warning("请选择城市");
      return;      
    }
    if(this.countryid==""){
      this["$Message"].warning("请选择市区");
      return;
    }
    if(this.address1==""){
      this["$Message"].warning("请填写详细地址");
      return;
    }
    if(this.contactName==""){
      this["$Message"].warning("请填写收货人");
      return;
    }
    if(this.contactMobile==""){
      this["$Message"].warning("请手机号码");
      return;
    }
    if((this.updateaddressid||'')!=''){
      Vue.prototype.$reqFormPost(
      "/address/update",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        addressId:this.updateaddressid,
        provinceId:this.provinceid,
        cityId:this.cityid,
        countryId:this.countryid,
        address:this.address1,
        contactName:this.contactName,
        contactMobile:this.contactMobile,
        isDefault:this.isDefault
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
        this["$Message"].success("保存成功");
        this.provinceid="";
        this.cityid="";
        this.countryid="";
        this.address1="";
        this.contactName="";
        this.contactMobile="";
        this.isDefault=0;
        this.addshow=false;
        this.updateaddressid="";
      }
    );
    }else{
      Vue.prototype.$reqFormPost(
      "/address/add",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        provinceId:this.provinceid,
        cityId:this.cityid,
        countryId:this.countryid,
        address:this.address1,
        contactName:this.contactName,
        contactMobile:this.contactMobile,
        isDefault:this.isDefault
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
        Toast("新建地址成功");
        this.getAddressList();
        this.provinceid="";
        this.cityid="";
        this.countryid="";
        this.address1="";
        this.contactName="";
        this.contactMobile="";
        this.isDefault=0;
        this.addshow=false;
        this.updateaddressid="";
      }
    );
    }
    
  }



changeprovince(){
    this.cityid="";
    this.city=[];
    this.countryid="";
    this.country=[];
    this.querycity();
  }
  changecity(){
    this.countryid="";
    this.country=[];
    this.querycountry();
  }

  setDefaultAddress(addressId){
    if(addressId==this.address[
      'addressId'
    ]){
      return
    }

    



   Vue.prototype.$reqFormPost(
      "/prepare/order/update",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
          prepareId:this.$store.getters[Vue.prototype.MutationTreeType.PREPAREID],
        addressId: addressId
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
        
 this.getPreInfo(
      this.$store.getters[Vue.prototype.MutationTreeType.PREPAREID]
    );
 this.withchangeModel = false
  this.addshow= false
      }
    );



  }

  querycity(){
    Vue.prototype.$reqFormPost(
      "/address/querycity",
      {
        provinceId:this.provinceid
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
        console.log(res.data.data.region)
        this.city=res.data.data.region
      }
    );
  }

   getAddressList() {
    Vue.prototype.$reqFormPost(
      "/address/list",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token
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
        console.log("地址列表", res.data.data.addressList);
        this.addressList = res.data.data.addressList;
        this.addressList.forEach((item, index) => {
     
          item["id"] = item.addressId;
          item["name"] = item.contactname;
          item["tel"] = item.contactmobile;
          item["readdress"] = item.address;
          item["address"] =
            item.province + item.city + item.country + item.address;
        });


      }
    );
  }
  querycountry(){
    Vue.prototype.$reqFormPost(
      "/address/querycountry",
      {
        cityId:this.cityid
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
        console.log(res.data.data.region)
        this.country=res.data.data.region
      }
    );
  }



  withchangeModel=false;

addressList = [];
  // 删除地址信息
  deladdress="";
  deladdressid=""
  delshow=false;
  // 新增地址
  addshow=false;
  province=[];
  provinceid="";
  city=[];
  cityid="";
  country=[];
  countryid="";

  updateaddressid='';
  address1:any='';
  contactName="";
  contactMobile="";
  isDefault=0;





changeModel(type){
if(type=='change'){
  console.log('切换地址')
  this.withchangeModel = true;
this.getAddressList()
}else{

    this.getprovince();
      this.addshow=false;
    this.provinceid="";
    this.cityid="";
    this.countryid="";
    this.address1="";
    this.contactName="";
    this.contactMobile="";
    this.isDefault=0;    
    this.updateaddressid="";
  this.addshow= true;

}
 
 
}





  prepareId = "";
  shopCartList = [];
  address = {};
  totalPrice = "";
  goodsSum = "";
  freight = "";
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
        console.log("address", this.address);
        this.totalPrice = res.data.totalPrice;
        this.goodsSum = res.data.goodsSum;
        this.freight = res.data.freight;
      }
    );
  }
  pageType = "";
  titlevalue = "";
  couponId = "";
  titleType = "";
  invoiceTitle = "";
  invoiceNo = "";
  remark = "";
  onSubmit() {
    if (!this.address) {
      this["$Message"].warning("请选择一个收货地址");
      return;
    }
    Vue.prototype.$reqFormPost(
      "/prepare/order/submit",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        couponId: this.couponId,
        titleType: this.titleType,
        invoiceTitle: this.invoiceTitle,
        invoiceNo: this.invoiceNo,
        prepareId: this.prepareId,
        remark: this.remark
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

        this.$router.replace({
          name: "pay",
          query: {
            contactname: this.address["contactname"],
            contactmobile: this.address["contactmobile"],
            address:
              this.address["province"] +
              this.address["city"] +
              this.address["country"] +
              this.address["address"],
            body: res.data.data.body,
            payId: res.data.data.payId,
            payTotal: res.data.data.payTotal
          }
        });
        console.log(res.data.data);
      }
    );
  }
   getprovince(){
    Vue.prototype.$reqFormPost(
      "/address/queryprovince",
      {},
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
        console.log(res.data.data.region)
        this.province=res.data.data.region
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
.contentBox2 {
  border: 1px #e5e5e5 solid;
  width: 1200px;
  font-size: 14.2px;
  margin-bottom: 20px;
}
.content_title {
  min-width: 90px;
}
.add_colose{
  position: absolute;right: 10px;top:10px;padding:10px;cursor: pointer;
}
.add_titile{
  line-height: 40px;font-size: 18px;
}
.region{
  line-height: 30px;margin-bottom: 20px;
}
.region select{
  height:30px;border:1px solid #e5e5e5;width:180px;margin-right:16px;width:150px;outline: none;
  background: #fff;
}
.region select:last-child{
  margin-right:0 ;
}
.region input{
  border:1px solid #e5e5e5;width:198px;padding-left:10px;height:30px;
}
.region textarea{
  border:1px solid #e5e5e5;height:76px;width:482px;resize:none;padding-left: 10px;
}
.region_btn{
  margin-top:40px;
}
.region_btn>div{
    width: 155px;height: 40px;color:#fff;text-align: center;line-height: 40px;
    border: 1px solid rgb(252, 203, 82);background: rgb(252, 203, 82);cursor: pointer;
}
.region_btn>div:last-child{
  background: #fff;color: rgb(252, 203, 82);margin-left:15px;
}
.bc_addres{
  border:#e5e5e5 1px solid;
  width:500px;
  margin: 20px;
  div{
    font-size:14px;
    div{
      font-size:14px;
    }
  }
}
.bc_addresCur{
  border:#ffc630 1px solid;background: url(../../assets/image/打钩.png) no-repeat right top;
}
</style>



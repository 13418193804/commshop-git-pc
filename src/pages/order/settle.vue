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

<div style="padding:30px 20px;">
      <van-button  style="cursor: pointer;border-radius:4%;background-color:#fff;color:red;border:1px solid red;min-width:150px;margin-right:10px;overflow: hidden;" @click="changeModel('change')" >地址切换</van-button>
      <van-button  style="cursor: pointer;border-radius:4%;background-color:#fff;color:#F4C542;border:1px solid #F4C542;min-width:150px;margin-right:10px;overflow: hidden;" @click="changeModel('add')" >新建地址</van-button>
</div>
</div>
<!-- //没有收货地址的时候 -->
<div v-else>
      <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding: 25px 60px 25px 30px;position:relative;">
        <!-- <div @click="addcancel()" class="add_colose"><i class="iconfont icon-close" style="font-weight: bold;color: #bfbfbf;"></i></div> -->
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
        <div @click="isdef()" style="cursor:pointer;border-top:1px solid #F4F4F4;padding-top:20px;"><span :style="isDefault==1?'background-color:#FF0506;border:1px solid #FF0506;':''" style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;margin-right:10px;"></span>设为默认</div>
        <div class="flex region_btn">
          <div @click="isaddress()">保存地址</div>
          <!-- <div @click="addcancel()">取消</div> -->
        </div>
      </div>
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

  
  <div class="cartItem flex  flex-align-center flex-pack-justify" style="    padding: 20px;" v-for="(item,index) in shopCartList" :key="index">
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
<span class="" style="font-size:20">￥{{item.price.toFixed(2)}}</span>
</div>
<div>
  {{item.num}}
</div>
<div style="width:82px;"> 
  <span class="marketPrice" style="font-size:20">￥{{(item.price * item.num).toFixed(2)}}</span>
</div>
</div>

  <div style="background-color:#FCFCFC; padding: 0 30px;font-size:14.8px">
      <!-- <div class="flex flex-pack-justify" style="line-height:30px;border-bottom:1px #e5e5e5 solid;">
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
      </div> -->

      <!-- <div>

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
      </div> -->

  </div>

      <div style="background-color:#f8f8f8;padding:0 20px;">
        <div style="height:30px;line-height:30px;">发票信息</div>

        <div style="width:100%;padding:10px 0;boder-bottom:1px solid #eee;" class="flex flex-pack-justify">
            <div>
              <div class="couponUp"  :class="haveinvoice?'couponUpCur':''"   @click="isinvoiceshow(3,haveinvoice)">我要开发票</div>
              <div v-if="haveinvoice===true" style="color:#F4C542;cursor:pointer;margin-left:26px;" @click="isupdateinvoiceshow()">修改</div>
            </div>
            <div v-show="haveinvoice">
              <div>发票类型:{{invoicecontent.titleType=='PERSON'?'个人':'单位'}}</div>
              <div>发票金额:￥{{totalPrice}}</div>
            </div>
            <div v-show="haveinvoice && invoicecontent.titleType=='COMPANY'">发票抬头:{{invoicecontent.invoiceTitle}}</div>
            <div v-show="haveinvoice && invoicecontent.titleType=='COMPANY'">纳税人识别号:{{invoicecontent.invoiceNo}}</div>
            <div v-show="haveinvoice">发票内容:明细</div>
        </div>
        
        <div class="flex flex-pack-justify flex-align-center" style="width:100%;padding:10px 0;boder-bottom:1px solid #eee;">
          <div class="flex">
            <div @click="couponshowNo('1')" class="couponUp" :class="coupon_active == '1'?'couponUpCur':''" style="color:#858585">不使用优惠券</div>
            <div  class="couponUp" @click="coupon_active = '2'" :class="coupon_active == '2'?'couponUpCur':''" >使用优惠卷</div>
            <div style="color:#F4C542;margin:0 15px;line-height: 30px;cursor: pointer;" @click="couponshow()" v-if="coupon_active == '2'">({{couponnum}}张) ></div>
            <div v-show="yetShow == true && surecouponName" class="counponNum">{{surecouponName}}</div>
          </div>
          <div>
            <div>商品合计:￥{{totalPrice.toFixed(2)}}</div>
            <div v-if="surecouponDenomination">优惠卷:-￥{{surecouponDenomination}}</div>
          </div>
        </div>

        <div style="height:30px;line-height:30px;">配送方式</div>
        <div class="flex flex-pack-justify flex-align-center" style="padding:10px 0;">
          <div>快递</div>
          <div>运费:{{freight}}</div>
        </div>

        <div style="height:40px;line-height:40px;">给卖家的话（选填） <span style="margin:0 20px;color:#999">选填内容已和卖家协商确认</span></div>

        <div style="border:1px solid #e5e5e5;">

          <textarea type="text" name="content"  rows="7" style="width: 100%;border:none;padding:10px;" v-model="remark"></textarea>  

        </div>


        <div style="padding:20px 0;" class="flex flex-pack-justify flex-align-center">
      <div>应付金额</div>
          <div class="flex flex-align-center">
        <div style="padding:0 20px;">
            <span style="color:red;font-size:18px;">￥{{totalPrice.toFixed(2)}}</span>
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

<div style=" position: relative;">
  <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="withchangeModel" >
    <div class="flex flex-pack-center flex-align-center" style="height:100vh;">          
        <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding:20px;position:relative; width: 590px;">
          <div @click="addcancel()" class="add_colose"><i class="iconfont icon-close"></i></div>
          <div  class="add_titile">切换地址</div>
          <div class="flex region" style="min-height:300px; max-height: 500px;overflow: auto;">
            <div>
 
                <div v-for="(item,index) in addressList" @click="setDefaultAddress(item.addressId)" class="bc_addres " :class="address&& address.addressId == item.addressId ?'bc_addresCur':''">
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
            <!-- <button 
            style="border: none; width: 150px; height: 45px; background-color: rgb(252, 203, 82); color: rgb(255, 255, 255); text-align: center; line-height: 45px; margin-right: 5px; font-size: 16px;">确定</button>
            <button 
            style="border: none; width: 150px; height: 45px;border:1px solid #ffc630; color:  rgb(252, 203, 82); text-align: center; line-height: 45px; margin-right: 5px; font-size: 16px;" @click="addcancel()" >取消</button> -->
          </div>
        </div>
    </div>
  </div>
  </div>

      
      <div style=" position: relative;">
        <!-- 新增地址 -->
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="addshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">          
            <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding: 25px 60px 25px 30px;position:relative;">
              <div @click="addcancel()" class="add_colose"><i class="iconfont icon-close" style="font-weight: bold;color: #bfbfbf;"></i></div>
              <div v-if="!updateaddressid" class="add_titile">新增地址</div>
              <div v-if="updateaddressid" style="font-size: 16px; margin-bottom: 10px;">修改地址</div>
    
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
              <div @click="isdef()" style="border-top:1px solid #F4F4F4;padding-top:20px;"><span :style="isDefault==1?'background-color:#FF0506;border:1px solid #FF0506;':''" style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;margin-right:10px;cursor:pointer;"></span>设为默认</div>
              <div class="flex region_btn">
                <div @click="addaddress()">确定</div>
                <div @click="addcancel()">取消</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 发票 -->
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="invoiceshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">          
            <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding:20px;position:relative;">
              <div @click="isinvoiceshow(true)" class="add_colose"><i class="iconfont icon-close"></i></div>
              <div class="add_titile">发票信息</div>
              <div class="flex region">
                <div style="width:120px;">发票类型:</div>
                <div @click="changetitleType('PERSON')" :style="invoicecontent.titleType=='PERSON'?'border-color:#F4C542;':'border-color:#eeeeee;'" style="width:100px;height:30px;line-height:30px;text-align:center;border:1px solid;">个人</div>
                <div @click="changetitleType('COMPANY')" :style="invoicecontent.titleType=='COMPANY'?'border-color:#F4C542;':'border-color:#eeeeee;'" style="width:100px;height:30px;line-height:30px;text-align:center;border:1px solid;">单位</div>
              </div>
              <div v-if="invoicecontent.titleType=='COMPANY'" class="flex region">
                  <div style="width:120px;">发票抬头:</div>
                  <input  v-model="invoicecontent.invoiceTitle"/>
              </div>
              <div v-if="invoicecontent.titleType=='COMPANY'" class="flex region">
                  <div style="width:120px;">纳税人识别号:</div>
                  <input v-model="invoicecontent.invoiceNo"/>
              </div>
              <div class="flex region_btn">
                <div @click="addinvoice()">确定</div>
                <div @click="isinvoiceshow(true)">取消</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 修改发票 -->
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="updateinvoiceshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">          
            <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding:20px;position:relative;">
              <div @click="isupdateinvoiceshow()" class="add_colose"><i class="iconfont icon-close"></i></div>
              <div class="add_titile">发票信息</div>
              <div class="flex region">
                <div style="width:120px;">发票类型:</div>
                <div @click="changeupdatetitleType('PERSON')" :style="updateinvoicecontent.titleType=='PERSON'?'border-color:#F4C542;':'border-color:#eeeeee;'" style="width:100px;height:30px;line-height:30px;text-align:center;border:1px solid;">个人</div>
                <div @click="changeupdatetitleType('COMPANY')" :style="updateinvoicecontent.titleType=='COMPANY'?'border-color:#F4C542;':'border-color:#eeeeee;'" style="width:100px;height:30px;line-height:30px;text-align:center;border:1px solid;">单位</div>
              </div>
              <div v-if="updateinvoicecontent.titleType=='COMPANY'" class="flex region">
                  <div style="width:120px;">发票抬头:</div>
                  <input  v-model="updateinvoicecontent.invoiceTitle"/>
              </div>
              <div v-if="updateinvoicecontent.titleType=='COMPANY'" class="flex region">
                  <div style="width:120px;">纳税人识别号:</div>
                  <input v-model="updateinvoicecontent.invoiceNo"/>
              </div>
              <div class="flex region_btn">
                <div @click="updateinvoice()">确定</div>
                <div @click="isupdateinvoiceshow()">取消</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 优惠卷框 -->
        <div style="background-color:rgba(0, 0, 0, 0.5); z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="iscouponshow">
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">  
               <div style="background-color:#fff;padding:20px;position:relative;width: 750px;
                          min-height;max-height:620px;
                          overflow-y: auto;">
              <div @click="couponshow(true)" class="add_colose"><i class="iconfont icon-close"></i></div>
              <div class="add_titile" style="text-align:center;border-bottom:1px solid #ddd;">选择优惠券</div>
                <div class="discountBox">
                    <div class="dis_list dis_bgunUse"  v-for="(item,index) in couponList"   :key="index" @click="selectcoupon(item)">
                        <p style="font-size:18px;color: #fff;"><span style="font-size:28px;color: #fff;">
                          {{item.couponDenomination}}</span>元</p>
                          <div class="distypeCur" v-if="item.couponId==selectcouponId">已选择</div>
                        <div style="justify-content: space-between;" class="flex">
                            <span style="margin-right:5px;color: #fff;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
                             满{{item.fullDenomination}}减{{item.couponDenomination}}</span>
                            <div> <i style="color: #fff;" v-if="item.linkCreateTime">{{item.linkCreateTime.split(' ')[0]}} </i>
                            <i style="color: #fff;" v-if="item.validityTime">- {{item.validityTime.split(' ')[0]}}</i></div>
                        </div>
                        <div class="newtext">        <span v-if="item.conditionType == 'NEW_USER'">新人专享;</span>
              <span v-if="item.rangeType == 'ALL'">全场通用;</span>
              <span v-else>{{item.catName}}类商品适用;</span>特价商品或其他优惠活动商品不可</div>

                    </div>
                </div>
              <div style="text-align: center;margin-top: 30px;">
                <button @click="surecoupon()"
                 style="cursor: pointer;border: none;width: 290px;height: 45px;background-color: rgb(252, 203, 82);color: rgb(255, 255, 255);text-align: center;line-height: 45px;margin-right: 5px;font-size: 16px;">确定</button>
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
  // 显示发票框
  invoiceshow=false;
  // 显示修改发票框
  updateinvoiceshow=false;
  // 判断有没有选发票
  haveinvoice=false;
  //使用优惠券切换
  coupon_active1=false;
  coupon_active='0';
  // 发票内容
  invoicecontent={
    titleType:'',
    invoiceTitle:'',
    invoiceNo:'',
  };
  // 修改的发票内容
  updateinvoicecontent={
    titleType:'',
    invoiceTitle:'',
    invoiceNo:'',
  };
  isinvoiceshow(clean,coupon_active){
   
 console.log(coupon_active)

    // 如果有传值 清除invoicecontent里全部东西
    if(clean){
      this.haveinvoice=false;
      this.invoicecontent={
        titleType:'',
        invoiceTitle:'',
        invoiceNo:'',
      };
    }
if(!coupon_active){
      this.invoiceshow=!this.invoiceshow
}
  }
  isupdateinvoiceshow(){
    this.updateinvoiceshow=!this.updateinvoiceshow
    // 如果updateinvoiceshow是true
    if(this.updateinvoiceshow===true){
      this.updateinvoicecontent.titleType=this.invoicecontent.titleType
      this.updateinvoicecontent.invoiceTitle=this.invoicecontent.invoiceTitle
      this.updateinvoicecontent.invoiceNo=this.invoicecontent.invoiceNo
    }
  }
  addinvoice(){
    if(this.invoicecontent.titleType==""){
      this["$Message"].warning("请选择发票类型");
      return
    }
    if(this.invoicecontent.titleType=='COMPANY'&&this.invoicecontent.invoiceTitle==""){
      this["$Message"].warning("请填写发票抬头");
      return
    }
    if(this.invoicecontent.titleType=='COMPANY'&&this.invoicecontent.invoiceNo==""){
      this["$Message"].warning("请填写纳税人识别号");
      return
    }
    this.invoiceshow=!this.invoiceshow
    this.haveinvoice=true;
  }
  updateinvoice(){
    if(this.updateinvoicecontent.titleType==""){
      this["$Message"].warning("请选择发票类型");
      return
    }
    if(this.updateinvoicecontent.titleType=='COMPANY'&&this.updateinvoicecontent.invoiceTitle==""){
      this["$Message"].warning("请填写发票抬头");
      return
    }
    if(this.updateinvoicecontent.titleType=='COMPANY'&&this.updateinvoicecontent.invoiceNo==""){
      this["$Message"].warning("请填写纳税人识别号");
      return
    }
    this.updateinvoiceshow=!this.updateinvoiceshow
    this.invoicecontent.titleType=this.updateinvoicecontent.titleType
    this.invoicecontent.invoiceTitle=this.updateinvoicecontent.invoiceTitle
    this.invoicecontent.invoiceNo=this.updateinvoicecontent.invoiceNo
  }
  changetitleType(Type){
    if(Type=='PERSON'){
      this.invoicecontent.titleType='PERSON';
    }
    if(Type=='COMPANY'){
      this.invoicecontent.titleType='COMPANY';
    }
    console.log('this.invoicecontent.titleType',this.invoicecontent.titleType)
    console.log('this.updateinvoicecontent.titleType',this.updateinvoicecontent.titleType)
  }
  changeupdatetitleType(Type){
    if(Type=='PERSON'){
      this.updateinvoicecontent.titleType='PERSON';
    }
    if(Type=='COMPANY'){
      this.updateinvoicecontent.titleType='COMPANY';
    }
    console.log('this.invoicecontent.titleType',this.invoicecontent.titleType)
    console.log('this.updateinvoicecontent.titleType',this.updateinvoicecontent.titleType)
  }
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
  //增加地址
    isaddress() {
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
    if(this.address1.length<5){
       this["$Message"].warning("请至少输入五个字符");
      return;
    }
    if(this.contactName==""){
       this["$Message"].warning("请填写收货人");
      return;
    }
    if(this.contactMobile==""){
       this["$Message"].warning("请填写手机号码");
      return;
    }
       if(this.contactMobile.length!= 11 ){
       this["$Message"].warning("请填写正确的手机号码");
      return;
    }
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

        console.log('res.data.addressId',res.data.data.addressId)
        
        this.doChangePreDis('address',res.data.data.addressId,res=>{
          this["$Message"].success("新建地址成功");
        })

        
      }
    );
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
    if(this.address1.length<5){
       this["$Message"].warning("请至少输入五个字符");
      return;
    }
    if(this.contactName==""){
       this["$Message"].warning("请填写收货人");
      return;
    }
    if(this.contactMobile==""){
       this["$Message"].warning("请填写手机号码");
      return;
    }
    if(this.contactMobile.length!= 11 ){
       this["$Message"].warning("请填写正确的手机号码");
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
        this.getPreInfo(
        this.$store.getters[Vue.prototype.MutationTreeType.PREPAREID]
      );
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
      this.doChangePreDis('address',res.data.data.addressId,res=>{
          this["$Message"].success("新建地址成功");
        })
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


this.doChangePreDis('address',addressId,res=>{
 this.withchangeModel = false
  this.addshow= false
})



  }

  // this.surecouponId

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




goodsPrice = ""
  prepareId = "";
  shopCartList = [];
  address = {};
  totalPrice = "";
  goodsSum = "";
  freight = "";


   couponList=[];
  couponnum='';
 

  getPreInfo(prepareId) {
    Vue.prototype.$reqFormPost1(
      "/prepare/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        prepareId: prepareId
      },
      res => {

        if (res.returnCode !== 200) {
          console.log(res)
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }
this.goodsPrice = res.data.goodsPrice
        this.shopCartList = res.data.shopCartList;

        this.address = res.data.address;
    if(!this.address){
          this.getprovince();
    }
        this.totalPrice = res.data.totalPrice;
        this.goodsSum = res.data.goodsSum;
        this.freight = res.data.freight;
        this.currentCoupon = res.data.currentCoupon


if(res.data.currentCoupon){
  console.log('---res.data.currentCoupon',res.data.currentCoupon)

    this.selectcouponId=res.data.currentCoupon.couponId;
    this.selectcouponName="满"+res.data.currentCoupon.fullDenomination + "减"+res.data.currentCoupon.couponDenomination;
    this.selectcouponDenomination=res.data.currentCoupon.couponDenomination;
this.surecoupon(true);
    this.coupon_active = '2';
}else{
    this.coupon_active = '1';
}
console.log(' this.selectcouponId', this.selectcouponId)

        this.couponList=res.data.couponList;
        this.couponnum=res.data.couponList.length;

      }
    );
  }
  currentCoupon = null
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
      "/prepare/submit",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        couponId: this.surecouponId,
        titleType: this.invoicecontent.titleType,
        invoiceTitle: this.invoicecontent.invoiceTitle,
        invoiceNo: this.invoicecontent.invoiceNo,
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
            payTotal: res.data.data.payTotal,
            createTime:res.data.data.createTime
          },
          params:{
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
  yetShow =false;
  // 优惠卷框
  iscouponshow=false;
  //不使用
  couponshowNo(coupon_active){
    this.coupon_active = '1';
    console.log('dd')
        this.surecouponId="";
    this.surecouponName="";
    this.surecouponDenomination="";
this.doChangePreDis('dis',"",res=>{
})

  }


  couponshow(clean){
    if(parseInt(this.couponnum)>0){
      
      this.iscouponshow=!this.iscouponshow
        // this.coupon_active = '2';
        // 如果之前有确定优惠卷 把它传会给选择时的selectcouponId
        if(this.surecouponId!==""){
          this.selectcouponId=this.surecouponId;
          this.selectcouponName=this.surecouponName;
          this.selectcouponDenomination=this.surecouponDenomination;
        }
        console.log('------',this.selectcouponId)
        console.log(this.currentCoupon,clean && !this.currentCoupon)
        // 有传值就清空选择时的优惠卷
        if(clean || !this.currentCoupon){
          this.selectcouponId="";
          this.selectcouponName="";
          this.selectcouponDenomination="";
        }
    }
  }


doChangePreDis(type,value,callback){

  console.log('选择的优惠券id',this.surecouponId)



let data = {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
          prepareId:this.$store.getters[Vue.prototype.MutationTreeType.PREPAREID],
}

if(type=='address'){
 (<any>Object).assign(data,  {addressId: value});
 if(this.surecouponId){
 (<any>Object).assign(data,  {couponId: this.surecouponId});
 }
}else if(type=='dis'){
 (<any>Object).assign(data,  {couponId: value});
if(this.address){
 (<any>Object).assign(data,  {addressId: this.address['addressId']});
}
}
   Vue.prototype.$reqFormPost(
      "/prepare/update",
      data,
      res => {
       callback();
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
      }
    );
}

  // 选择时的优惠卷
  selectcouponId="";
  selectcouponName="";
  selectcouponDenomination="";
  selectcoupon(coupon){
    this.selectcouponId=coupon.couponId;
    this.selectcouponName= "满"+coupon.fullDenomination + "减"+coupon.couponDenomination;
    this.selectcouponDenomination=coupon.couponDenomination;
  }
  // 确定的优惠卷
  surecouponId="";
  surecouponName="";
  surecouponDenomination="";
  surecoupon(filter){
     this.yetShow = true;
    if(this.selectcouponId==""){
      this["$Message"].warning("请选择优惠卷");
      return;
    }
    this.surecouponId=this.selectcouponId;
if(!filter){
    this.iscouponshow=false;
    this.doChangePreDis('dis', this.surecouponId,res=>{
    })
}
console.log("this.selectcouponName",this.selectcouponName)
    this.surecouponName=this.selectcouponName;
    this.surecouponDenomination=this.selectcouponDenomination;
  this.coupon_active = '2';
  }

  mounted() {
    this.prepareId = sessionStorage[Vue.prototype.MutationTreeType.PREPAREID]
    this.$store.commit(Vue.prototype.MutationTreeType.PREPAREID , sessionStorage[Vue.prototype.MutationTreeType.PREPAREID]);
    if(!this.prepareId){
      this.$router.go(-2);
      return 
    }
    this.getPreInfo(
      this.$store.getters[Vue.prototype.MutationTreeType.PREPAREID]
    );
console.log('this.selectcouponId',this.selectcouponId)


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
  border:#e5e5e5 1px solid;cursor:pointer;
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
  border:#ffc630 1px solid;background: url('../../assets/image/打钩.png') no-repeat right top;
}
//优惠券弹窗
.discountBox{
  overflow: hidden;padding:30px 25px;padding-right:10px;
  .dis_list{
    float: left;width: 330px;height:118px;padding:15px 15px 0 15px;border-radius: 6px;background: #fccb52;
    margin-bottom:10px;position: relative;
      background-size: 100%;
    .newtext{
      position: absolute;bottom: 4px;color: #fff;width:91%;font-size: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .dis_bgunUse{
    cursor: pointer;
    background :url('../../assets/image/未使用优惠卷.png') no-repeat;background-size:100% 100%; 
  }
    .dis_bgUse{
    background :url('../../assets/image/已使用优惠卷.png') no-repeat;background-size:100% 100%; 
  }
  .dis_list:nth-of-type(3),.dis_list:nth-of-type(6),.dis_list:nth-of-type(9),.dis_list:nth-of-type(12){
    margin-right: 0;
  }
  .distypeCur{
    height:30px;line-height:30px;color:#fff;position: absolute;right:15px;top:20px;cursor: pointer;
    text-align: center;padding: 0 10px;border:1px solid #fff;width:80px;
  }
  .distypeed{
    background: #fccb52;color:#fff;
  }
  
}
.couponUp{
  line-height: 30px;cursor: pointer;background: url(../../assets/image/未选择发票.png) no-repeat left center;
  padding-left:26px;margin-right: 20px;
}
.couponUpCur{
  background: url(../../assets/image/选择发票.png) no-repeat left center;
}
.counponNum{
   border:1px solid #ff5359;color:#ff5359;padding: 0 8px;line-height: 30px;
   background: url(../../assets/image/优惠卷选中拷贝.png) no-repeat right top;padding-right:30px;
}
</style>



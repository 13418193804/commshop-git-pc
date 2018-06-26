<template>
  <div class="">
      <div class="flex flex-around-justify" style="padding:10px 0;background-color:#F8F8F8;">
        <div>收件人</div>
        <div>地址</div>
        <div>联系方式</div>
        <div>操作</div>
        <div></div>
      </div>

      <div v-if="addressList.length>0" style="padding:15px;margin-bottom:45px;border-bottom:1px solid #EEEEEE;">
      <div  v-for="(item,index) in addressList" :key="index" class="flex flex-around-justify" style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;">
        <div>{{item.name}}</div>
        <div>{{item.address}}</div>
        <div>{{item.tel}}</div>
        <div class="flex">
          <div style="padding-right:4px;color:#FFC630;border-right:1px solid #ABABAB;" @click="update(item)">编辑</div>
          <div style="padding-left:5px;color:#000;" @click="del(item)">删除</div>
        </div>
        <div v-if="item.isdefault==1" style="background-color:#C6C6C6;width:60px;height:20px;color:#fff;text-align: center;line-height:20px;">默认地址</div>
        <div v-else @click="selectDefault(item)" style="height:20px;line-height:20px;"><span style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;"></span>设为地址</div>
      </div>
      </div>

      <div class="flex flex-align-center flex-v">
          <div v-if="addressList.length==0" style="color:#BFBFBF;padding:120px 0 30px;">您还未创建收货地址~~~</div>
          <div @click="newaddress()" style="width:90px;height:30px;color:#FFC630;border:1px solid #FFC630;text-align: center;line-height:30px;">新建地址</div>
      </div>
      <!-- 删除 -->
      <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="delshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
            <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:350px;height:200px;">
              <div>是否删除此地址？</div>
              <div class="flex flex-around-justify flex-v" style="width:300px;height:65px;padding-left:15px;border:1px solid #E5E5E5;">
                <div>收货人:{{deladdress.name}}</div>
                <div>联系方式:{{deladdress.tel}}</div>
                <div>收货地址:{{deladdress.address}}</div>
              </div>
              <div class="flex">
                <div @click="deleteaddress()" style="width:90px;height:24px;background-color:#FCCB52;color:#fff;text-align: center;line-height:24px;margin-right:5px;">确定</div>
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
            <div class="flex flex-around-justify flex-v" style="background-color:#fff;width:450px;height:270px;padding:20px;">
              <div v-if="!updateaddressid">新增地址</div>
              <div v-if="updateaddressid">修改地址</div>
              <div class="flex">
                <div style="padding-right:15px;">所在地区</div>
                <select v-model="provinceid" @change='changeprovince' style="width:110px;margin-right:5px;">
                  <option v-for="(item,index) in province" v-bind:value="item.id" :key="index">
                    {{item.name}}
                  </option>
                </select>
                <select v-model="cityid" @change='changecity' style="width:110px;margin-right:5px;">
                  <option v-for="(item,index) in city" v-bind:value="item.id" :key="index">
                    {{item.name}}
                  </option>
                </select>
                <select v-model="countryid" style="width:110px;">
                  <option v-for="(item,index) in country" v-bind:value="item.id" :key="index">
                    {{item.name}}
                  </option>
                </select>
              </div>
              <div class="flex">
                <div style="padding-right:15px;">详细地址</div>
                <textarea style="height:45px;width:340px;resize:none" v-model="address"/>
              </div>
              <div class="flex">
                <div class="flex">
                  <div style="padding-right:27px;">收货人</div>
                  <input style="width:130px;" v-model="contactName"/>
                </div>
                <div class="flex">
                  <div style="padding-right:24px;padding-left:8px;">手机号码</div>
                  <input style="width:130px;" v-model="contactMobile"/>
                </div>
              </div>
              <div @click="isdef()" style="border-top:1px solid #F4F4F4;padding-top:10px;"><span :style="isDefault==1?'background-color:#FF0506;':''" style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;margin-right:10px;"></span>设为默认</div>
              <div class="flex">
                <div @click="addaddress()" style="width:90px;height:24px;background-color:#FCCB52;color:#fff;text-align: center;line-height:24px;margin-right:5px;">确定</div>
                <div @click="addcancel()" style="width:90px;height:24px;color:#FCCB52;text-align: center;line-height:24px;border:1px solid #FCCB52;">取消</div>
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

@Component({
  components: {  },
  mixins: [mixin]
})
export default class addresslist extends Vue {
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

  updateaddressid="";
  address="";
  contactName="";
  contactMobile="";
  isDefault=0;
  isdef(){
    if(this.isDefault==0){
      this.isDefault=1
    }else{
      this.isDefault=0
    }
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
  selectDefault(params) {
    Vue.prototype.$reqFormPost(
      "/address/setdefault",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        addressId: params.addressId
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
        Toast("设置默认地址成功");
        this.getAddressList();
      }
    );
  }
  del(address){
    this.deladdress=address;
    this.deladdressid=address.id;
    this.delshow=true;
  }
  delcancel(){
    this.deladdress="";
    this.deladdressid="";
    this.delshow=false;
  }
  update(address){
    this.updateaddressid=address.id;
    this.addshow=true;
    this.provinceid=address.provinceid;
    this.cityid=address.cityid;
    this.countryid=address.countryid;
    this.address=address.address;
    this.contactName=address.contactname;
    this.contactMobile=address.contactmobile;
    this.isDefault=address.isdefault;
    this.querycity();
    this.querycountry();
  }
  deleteaddress(){
     Vue.prototype.$reqFormPost(
      "/address/delete",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        addressId: this.deladdressid
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
        Toast("删除地址成功");
        console.log("删除地址", res.data.data);
        this.deladdress="";
        this.deladdressid="";
        this.delshow=false;
        this.getAddressList();
      }
    );
  }
  newaddress(){
    this.addshow=true;
  }
  addcancel(){
    this.addshow=false;
    this.provinceid="";
    this.cityid="";
    this.countryid="";
    this.address="";
    this.contactName="";
    this.contactMobile="";
    this.isDefault=0;    
    this.updateaddressid="";
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
  
  addaddress() {
    if(this.provinceid==""){
      Toast("请选择省份");
      return;
    }
    if(this.cityid==""){
      Toast("请选择城市");
      return;      
    }
    if(this.countryid==""){
      Toast("请选择市区");
      return;
    }
    if(this.address==""){
      Toast("请填写详细地址");
      return;
    }
    if(this.contactName==""){
      Toast("请填写收货人");
      return;
    }
    if(this.contactMobile==""){
      Toast("请手机号码");
      return;
    }
    if(this.updateaddressid){
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
        address:this.address,
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
        this.address="";
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
        address:this.address,
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
        this.address="";
        this.contactName="";
        this.contactMobile="";
        this.isDefault=0;
        this.addshow=false;
        this.updateaddressid="";
      }
    );
    }
    
  }
  mounted() {
    this.getAddressList();
    this.getprovince();
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

</style>
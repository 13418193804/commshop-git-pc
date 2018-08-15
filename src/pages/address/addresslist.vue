<template>
  <div class="">
      <div class="" style="padding:10px 0;background-color:#F8F8F8;overflow: hidden;">
        <div style="width:117px;text-align: center;float: left;">收件人</div>
        <div style="width:330px;text-align: center;float: left;">地址</div>
        <div style="width:160px;text-align: center;float: left;">联系方式</div>
        <div style="width:170px;text-align: center;float: left;">操作</div>
       
      </div>

      <div v-if="addressList.length>0" class="addressList" style="padding:15px 0;margin-bottom:45px;border-bottom:1px solid #EEEEEE;">
      <div  v-for="(item,index) in addressList" :key="index" class="" style="background-color:#fff;border-bottom:1px dashed #E5E5E5;overflow: hidden;">
        <div style="width:117px;text-align: center;float: left;">{{item.name}}</div>
        <div style="width:330px;text-align: center;float: left;line-height: 32px;">{{item.province}} {{item.city}}  {{item.country}} {{item.address}}</div>
         <div style="width:160px;text-align: center;float: left;" :style="item.contactmobile.length==11?'':' visibility: hidden;'">
           {{item.contactmobile.substring(0,3)}}****{{ item.contactmobile.substring(7,13)}}
           </div>
        <div style="width:170px;text-align: center;float: left;">
          <div style="">
             <span style="padding-right:4px;color:#FFC630;border-right:1px solid #ABABAB;cursor: pointer;"  @click="update(item)">编辑</span> 
             <span style="padding-left:5px;padding-right:4px;color:#000;border-right:1px solid #ABABAB;cursor: pointer;"   @click="del(item)">删除</span> 
          </div>
          <!-- <div style="padding-left:5px;color:#000;" @click="del(item)">删除</div> -->
        </div>
        <div v-if="item.isdefault==1" style="background-color:#C6C6C6;width:150px; float: left;width:100px;height:30px;line-height: 30px;color:#fff;text-align: center;">默认地址</div>
        <div v-else @click="selectDefault(item)"><span style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px; margin-right: 5px;width:15px;height:15px;"></span>设为默认</div>
      </div>
      </div>

      <div class="flex flex-align-center flex-v">
          <div v-if="addressList.length==0" style="color:#BFBFBF;padding:120px 0 30px;">您还未创建收货地址~~~</div>
          <div @click="newaddress()" style="margin-bottom:30px;width:155px;height:45px;color:#ffc630;font-size:16px;border:1px solid #FFC630;text-align: center;line-height:45px;cursor: pointer;">新建地址</div>
      </div>
      <!-- 删除 -->
       <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="delshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
            <div class="flex-around-justify flex-align-center" style="background-color:#fff;width:650px;position: relative;padding: 40px;">
              <div @click="delcancel()" style="position: absolute;top:10px;right:10px;">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
              </div>
              <div style="font-size: 18px;margin-bottom: 30px;     text-align: center;">是否删除此地址？</div>
              <div  style="width:100%;padding:15px;border:1px solid #E5E5E5;margin-bottom: 50px;">
                <!-- <div>收货人:{{deladdress.name}}</div>
                <div>联系方式:{{deladdress.tel}}</div>
                <div>收货地址:{{deladdress.address}}</div> -->
                <div class="flex" style="margin-bottom: 10px;">
                  <span style="width:80px;">收货人:</span><span>{{deladdress.name}}</span>
                </div>
                <div class="flex" style="margin-bottom: 10px;">
                  
                  <span style="width:80px;">联系方式:</span><span v-if="deladdress.contactmobile && deladdress.contactmobile.length==11">{{deladdress.contactmobile.substring(0,3)}}****{{ deladdress.contactmobile.substring(7,13)}}</span>
                </div>
                <div class="flex" style="margin-bottom: 10px;">
                   <span style="width:80px;">收货地址:</span><span  style="width: 460px;">{{deladdress.province}} {{deladdress.city}}  {{deladdress.country}} {{deladdress.address}}</span>
                </div>
              </div>
              <div style="text-align:center;">
                <button @click="deleteaddress()" style="border:none;width:120px;height:45px;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:10px;">确定</button>
                <button @click="delcancel()" style="border:none;width:120px;height:45px;color:#FCCB52;text-align: center;line-height:45px;border:1px solid #FCCB52;">取消</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 新增 -->
      <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="addshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">          
            <div class="flex flex-around-justify flex-v" style="background-color:#fff;padding:25px 60px 25px 30px;position:relative;">
              <div @click="addcancel()" class="add_colose"><i class="iconfont icon-close" style="font-weight: bold;color: #bfbfbf;"></i></div>
              <div v-if="!updateaddressid" class="add_titile">新增地址</div>
              <div v-if="updateaddressid" style="font-size:16px; margin-bottom: 10px;">修改地址</div>
              <div class="flex region">
                  <div style="padding-right:15px;">所在地区</div>
                  <select v-model="provinceid" @change='changeprovince'>
                    <option v-for="(item,index) in province" v-bind:value="item.id" :key="index" >
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
                <textarea v-model="address" placeholder="详细街道，门牌号等"/>
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
              <div @click="isdef()"
               style="border-top:1px solid #F4F4F4;padding-top:20px;"><span :style="isDefault==1?'background-color:#FF0506;border:1px solid #FF0506;':''" style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;margin-right:10px;"></span>设为默认</div>
              <div class="flex region_btn">
                <div @click="addaddress()">确定</div>
                <div @click="addcancel()">取消</div>
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

gbdelshow(){
  this.delshow=!this.delshow
}
  close(){
    this.addshow=false;
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
           this["$Message"].warning(res.data.message);
          return;
        }
        console.log("地址列表", res.data.data.addressList);
        this.addressList = res.data.data.addressList;
        this.addressList.forEach((item, index) => {
          item["id"] = item.addressId;
          item["name"] = item.contactname;
          item["tel"] = item.contactmobile;
          item["readdress"] = item.address;
          item["isDefault"] = item.isdefault;
          // item["address"] =
          //   item.province + item.city + item.country + item.address;
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
           this["$Message"].warning(res.data.message);
          return;
        }
         this["$Message"].success("设置默认地址成功");
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
           this["$Message"].warning(res.data.message);
          return;
        }
         this["$Message"].success("删除地址成功");
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
           this["$Message"].warning(res.data.message);
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
           this["$Message"].warning(res.data.message);
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
           this["$Message"].warning(res.data.message);
          return;
        }
        console.log(res.data.data.region)
        this.country=res.data.data.region
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
    if(this.address==""){
       this["$Message"].warning("请填写详细地址");
      return;
    }
    if(this.address.length<5){
       this["$Message"].warning("详细地址请至少输入五个字符");
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
    console.log('长度',this.address.length);
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
 
             this["$Message"].warning(res.data.message);
          return;
        }
         this["$Message"].success("保存成功");
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
             this["$Message"].warning(res.data.message);
          return;
        }
        this["$Message"].success("保存成功");
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
       this.$emit('selectMenu',{
          name: '地址管理',
          url:'/addresslist',
        })
    this.getAddressList();
    this.getprovince();
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.add_colose{
  position: absolute;right: 10px;top:0px;padding:10px;cursor: pointer;
}
.add_titile{
  line-height: 40px;font-size: 16px;
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
.addressList>div{
  line-height: 34px;padding:25px 0;
}
</style>
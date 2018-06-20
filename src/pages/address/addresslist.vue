<template>
  <div class="tab-contents">
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
          <div style="padding-right:4px;color:#FFC630;border-right:1px solid #ABABAB;">编辑</div>
          <div style="padding-left:5px;color:#000;">删除</div>
        </div>
        <div v-if="item.isdefault==1" style="background-color:#C6C6C6;width:60px;height:20px;color:#fff;text-align: center;line-height:20px;">默认地址</div>
        <div v-else @click="selectDefault(item)" style="height:20px;line-height:20px;"><span style="display: inline-block;vertical-align: middle;border:1px solid #D3D3D3;border-radius: 50px;width:15px;height:15px;"></span>设为地址</div>
      </div>
      </div>

      <div class="flex flex-align-center flex-v">
          <div v-if="addressList.length==0" style="color:#BFBFBF;padding:120px 0 30px;">您还未创建收货地址~~~</div>
          <div style="width:90px;height:30px;color:#FFC630;border:1px solid #FFC630;text-align: center;line-height:30px;">新建地址</div>
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
        console.log("设置默认地址", res.data.data);
        this.getAddressList();
      }
    );
  }
  mounted() {
    this.getAddressList();
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

</style>
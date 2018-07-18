<template>
  <div style=" position: relative;" v-if="ship_model">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:780px;padding:20px; border-radius: 10px;    position: relative;">
          <div style="position: absolute;top:10px;right:10px;" @click="ship_model = false">
            <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;"/>
          </div>

            <div style="font-size:16px;">查看物流</div>
            <div class="detailBody">
              <div v-for="items in  $route.query.detailList">
                <div class="product1">
                  <div class="flex flex-align-center">
                    <img v-lazy='items.goodsImg' style='height:80px;width:80px'/>
                  </div>
                  <div class="flex-1" style='font-size:12px;overflow:hidden;padding:0 10px;'>
                    <div class='lineTwoType'>{{items.goodsName}}</div>
                    <div style='  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color:#999'>
                      <div> {{items.jingle}}</div>
                      <!-- <span v-for=" item.skuKeyValue" wx:for-item="i" style='margin-right:5px'>{{i.key}}:{{i.value}}</span> -->
                    </div>
                  </div>
                  <div style='text-align:center;font-size:14px'>
                    <div >￥{{items.goodsPrice}}</div>
                    <div class="labelPrice" v-if="items.labelPrice">原价:{{items.labelPrice}}</div>
                    <div>X {{items.goodsNum}}</div>
                  </div>
                </div>
              </div>
          </div>
          <div class="contentBox" style="border-bottom:1px #e5e5e5 solid;">
              <div>物流公司：{{ $route.query.transportName}} </div>
              <div>物流电话：{{ $route.query.transportMobile}} </div>
              <div>物流单号：{{ $route.query.transportNo}} </div>
          </div>

        </div>
      </div>
      <div>
        <div v-for="(item,index) in shipInfoList" class="contentBox" :style="index != 0 ?'color:#999':''" :key="index">
          <div>{{item.time}}</div>
          <div>{{item.context}}</div>
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
// import { recommendList } from '../../service/getData';
import comhead from "../../components/Comhead.vue";

@Component({
  components: { comhead },
  mixins: [mixin]
})
export default class shopIndex extends Vue {
  ship_model = false;
  shipInfoList: any = [];
  getShipInfoList(transportNo,transportCode) {
    Vue.prototype.$reqFormPost(
      "/transport/info",
      {
        com: transportCode,
        nu: transportNo
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
        console.log(res.data.data);
        console.log('res',transportCode);
        this.shipInfoList = res.data.data;
      }
      
    );
  }

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.contentBox{
  font-size:15px;
  padding-left:  20px;
  margin:5px;
}
</style>



<template>
  <div style=" position: relative;" v-if="ship_model">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div style=" min-height: 300px;background-color:#fff;width:780px;padding:20px; border-radius: 10px;    position: relative;">
          <div style="position: absolute;top:10px;right:10px;" @click="ship_model = false">
            <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;"/>
          </div>
            <div style="font-size:16px;text-align:center;    padding-bottom: 10px;
    border-bottom: 1px solid rgb(221, 221, 221);">查看物流</div>
            <div class="detailBody">
              <div v-for="items in  shipInfoList">
             
                  <div>{{items.time}}</div>
          <div>{{items.context}}</div>
             
           

        </div>
        </div>
        </div>
      </div>
      <div>

    
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
        console.log(transportNo);
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



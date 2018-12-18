<template>
  <!-- 规则 -->
    <div style=" position: relative;" v-if="wl_model">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" @click="selectModel = false">
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:550px;padding:20px; border-radius: 10px; position: relative;" @click.stop="returnFun()">
        
              <!-- <comhead ref="comhead" isLeftIcon="icon-zuo" 
              @rightClick="save()" rightTitle="提交" leftIconName="angle-left" @leftClick="false"  title="物流单号填写"  ></comhead> -->
              <div style="position: absolute;top:10px;right:10px;cursor: pointer;" @click="wl_model = false">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
              </div>
              <div style="padding:10px;font-size:14px">物流单号填写</div>
              <div class="tc_select">
                  <!-- <select v-model="form.item" >
                      <option  v-for="(item,index) in tranSportList" :value="item" :key="index" >
                        {{item.transportName}}
                      </option>
                  </select> -->
                   <div class="do_select flex flex-align-center" @click.stop="selectModel = !selectModel" style="  cursor: pointer;  position: relative;">
                      <div style="padding:0 10px;" class="flex-1">
                        <span v-if="!form.item" style="color:#999">请选择快递品牌</span>
                        <span v-else>{{form.item.transportName}}</span>
                      </div>
                     <div>
                        <i  class="iconfont icon-icon-arrow-bottom2" style=" color:#FCCB52;font-size: 12px;margin:10px;"></i>
                      </div>
  <div v-if="selectModel" style="position: absolute;height: 400px;top: 50px;left: 0; background-color: #FBFBFB;width: 100%;overflow: auto;">
      <div  v-for="(item,index) in tranSportList" :value="item" :key="index" @click.stop="selectTranSport(item)" class="option" :style="form.item && form.item.transportName ==item.transportName?' cursor: pointer;color:#FCCB52;':'' ">
            {{item.transportName}}
      </div>
  </div>

                   </div>
              </div>
              <div class="tc_select">
                   <input type="text" class="login-input" v-model="form.transNo"  placeholder="请输入物流单号" />
              </div>
             <div class="flex" style="margin-top:10px;">
                <div  @click="save()" rightTitle="提交"
                style="width:150px;height:50px;background-color:#FCCB52;color:#fff;text-align: center;line-height:50px;margin-right:10px;cursor: pointer;">确定</div>
                <div 
                style="width:150px;height:50px;border:1px solid #FCCB52;color:#FCCB52;text-align: center;line-height:50px;cursor: pointer;" @click="wl_model = false">取消</div>
              </div>

          </div>
        </div>
      </div>
    </div>

</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Swipe from "../../components/Swipe.vue";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast, Dialog } from "vant";
import comhead from "../../components/Comhead.vue";
class form {
  transNo;
  refundId;
  item;
  transName;
  transCode;
}
@Component({
  components: { comhead },
  mixins: [mixin]
})
export default class shopIndex extends Vue {
  form = new form();
  wl_model = false;
  selectModel: boolean = false;
  tranSportList = [];
  mounted() {
    this.getTranSportList();
  }
  selectTranSport(item) {
    this.form.item = item;
    this.selectModel = false;
  }
  returnFun() {
    if (this.selectModel) {
      this.selectModel = false;
    }
    return;
  }
  save() {
    console.log(this.form);

    if ((this.form.transNo || "") == "") {
      this["$Message"].warning("请填写单号");

      return;
    }

    if (!this.form.item) {
      this["$Message"].warning("请选择快递公司");

      return;
    }
    this.form.transName = this.form.item.transportName;
    this.form.transCode = this.form.item.transportId;
    //this.form.refundId = this.$route.query.refundId

    Vue.prototype.$reqFormPost(
      "/order/refund/salesreturn",
      (<any>Object).assign(
        {
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
          refundId: this.form.refundId,
          transNo: this.form.transNo,
          transName: this.form.transName,
          transCode: this.form.transCode
        },
        this.form
      ),
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
        this.wl_model = false;
        this.$emit("queryDetail");
      }
    );
  }
  getTranSportList() {
    Vue.prototype.$reqFormPost("/transport/cominfo", {}, res => {
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
      this.tranSportList = res.data.data;
      console.log("物流信息", res.data.data);
    });
  }
  handlePX(CssName, PxNumber) {
    return (
      CssName +
      ":" +
      this.$store.getters[Vue.prototype.MutationTreeType.SYSTEM].availWidth /
        750 *
        PxNumber +
      "px;"
    );
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.tc_select {
  margin-bottom: 12px;
  .do_select,
  input {
    width: 450px;
    height: 50px;
    border: 1px solid #eeeeee;
    outline: none;
    padding-left: 10px;
  }
}
.option {
  font-size: 14.8px;
  border-bottom: 1px #f2f2f2 solid;
  height: 40px;
  line-height: 40px;
  margin: 0 10px;
}
.option:hover {
  cursor: pointer;
  color: #fccb52;
}
</style>

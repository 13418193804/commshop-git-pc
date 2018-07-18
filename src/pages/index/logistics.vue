<template>
  <!-- 规则 -->
    <div style=" position: relative;" v-if="wl_model">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:550px;padding:20px; border-radius: 10px; position: relative;">
        
              <!-- <comhead ref="comhead" isLeftIcon="icon-zuo" 
              @rightClick="save()" rightTitle="提交" leftIconName="angle-left" @leftClick="false"  title="物流单号填写"  ></comhead> -->
              <div style="position: absolute;top:10px;right:10px;" @click="wl_model = false">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
              </div>
              <div style="padding:10px;font-size:14px">物流单号填写</div>
              <div class="tc_select">
                  <select v-model="form.item">
                      <option v-for="(item,index) in tranSportList" :value="item" :label="item.transportName" :key="index"></option>
                  </select>
              </div>
              <div class="tc_select">
                   <input type="text" class="login-input" v-model="form.transNo"  placeholder="请输入物流单号" />
              </div>
             <div class="flex" style="margin-top:10px;">
                <div  @click="save()" rightTitle="提交"
                style="width:150px;height:50px;background-color:#FCCB52;color:#fff;text-align: center;line-height:50px;margin-right:10px;">确定</div>
                <div 
                style="width:150px;height:50px;border:1px solid #FCCB52;color:#FCCB52;text-align: center;line-height:50px;" @click="wl_model = false">取消</div>
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
import { Toast,Dialog } from "vant";
import comhead from "../../components/Comhead.vue";
class form {
    transNo
    refundId
    item
    transName
    transCode
}
@Component({
  components: { comhead },
  mixins: [mixin]
})

export default class shopIndex extends Vue {
 form=new form;
 wl_model=false;
tranSportList = []
  mounted() {
      this.getTranSportList()
      console.log("支付成功",this.$route.query.refundId	);
     
  }
  save(){

console.log(this.form)

      if((this.form.transNo||'') ==''){
  this["$Message"].warning('请填写单号');

        return
      }

      if(!this.form.item){
  this["$Message"].warning('请选择快递公司');

      return
    }
      this.form.transName = this.form.item.transportName ;
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
            refundId:this.form.refundId,
            transNo:this.form.transNo,
            transName:this.form.transName,
            transCode:this.form.transCode
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
                "需控制错误码" +
                  res.data.status +
                  ",错误信息：" +
                  res.data.message
              );
              Toast(res.data.message);
              return;
            }
   this.wl_model = false
   this.$emit('queryDetail');

          }
        );
    
    }
    getTranSportList(){
         Vue.prototype.$reqFormPost(
          "/transport/cominfo",
          {},
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
this.tranSportList =res.data.data
            console.log("物流信息",res.data.data);
          }
        );
    }
  handlePX(CssName, PxNumber) {
    return CssName +":" +this.$store.getters[Vue.prototype.MutationTreeType.SYSTEM].availWidth /750 * PxNumber +"px;";
  }

}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.tc_select{
  margin-bottom: 12px;
  select,input{
    width:450px;height: 50px;border:1px solid #eeeeee;outline:none;padding-left: 10px;
  }
}
</style>

<template>
  <div class="">

        
        <div style="padding:30px;">
          <div class="flex flex-pack-justify" v-for="(item,index) in messagelist" :key="index" style="padding:15px 0;border-bottom:1px dashed #E5E5E5;">
            <div :style="item.status==false?'color:#000':'color:#E5E5E5'"><span v-if="item.status==false" style="display: inline-block;vertical-align: middle;background-color:#FF0506;border-radius: 50px;width:10px;height:10px;"></span>{{item.content}}<span style="color:#FDD273;">查看详情》</span></div>
            <div style="color:#B4B4B4;">{{item.updateTime}}</div>
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
export default class messagelist extends Vue {
  messagelist=[];
  page=0;
   getList() {
 Vue.prototype.$reqFormPost("/message/list", {
   
      userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
        .userId,
      token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
        .token,
      // page: this.page,
      // pageSize: 20
 }, res => {
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
      console.log(res.data.data)
    this.messagelist = res.data.data.messageList;
    });


  }

  mounted() {
    this.getList();
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

</style>
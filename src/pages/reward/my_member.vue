<template>
  <div class="">
        <div style="padding:30px;">
          <div class="flex flex-pack-justify" v-for="(item,index) in memberList" :key="index" style="padding:15px 0;border-bottom:1px dashed #E5E5E5;">
            <div >
              <img v-if="item.userIcon" v-lazy="item.userIcon"  style="vertical-align: middle;border-radius: 100%;width:25px;height:25px;"/>
              <img v-else src="../../assets/image/userIcon.png"  style="vertical-align: middle;border-radius: 100%;width:25px;height:25px;"/>
              <span>{{item.nickName}}</span>
            </div>
            <div>
              <span>{{item.mobile}}</span>
              </div>
            </div>
        </div>

      <div class="flex flex-align-center flex-v">
          <div v-if="memberList.length==0" style="color:#BFBFBF;padding:120px 0 30px;">暂无成员~~~</div>
      </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";
import comhead from "../../components/Comhead.vue";

@Component({
  components: {
    comhead
  },
  mixins: [mixin]
})
export default class my_member extends Vue {
  pageindex = 0;
  memberList = [];
  isLoading = false;
  list = [];
  loading = false;
  finished = false;
  getMemberList() {
    Vue.prototype.$reqFormPost(
      "/member/list",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        // page: this.pageindex,
        // pageSize: 20
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
          Toast(res.data.message)
          return;
        }
        this.memberList = res.data.data.messageList;
        
        // console.log("请求完成", res.data.data.memberList);
        // let memberList = this.memberList ? this.memberList : [];
        // for (let i = 0; i < res.data.data.memberList.length; i++) {
        //   memberList.push(res.data.data.memberList[i]);
        // }
        // if (res.data.data.memberList.length == 20) {
        //   this.loading = false;
        // }
        // this.memberList = memberList;
        // console.log(this.finished);
        // if (res.data.data.memberList) {
        // this.finished = true;
        // this.finished = true;
      }
    );
  }

  onRefresh() {
    let self = this;

    setTimeout(() => {
      // self.loading = true;
      // self.finished = false;
      // if (!self.finished) {
      //    self.pageindex = self.pageindex + 1;
      //   self.getMemberList();
      // }
    }, 500);
  }

  onLoad() {
    let self = this;
    setTimeout(() => {
      console.log("加载");
      console.log("this.finished", this.finished);
      console.log("this.loading", this.loading);

      if (!this.finished) {
        self.pageindex = self.pageindex + 1;
        self.getMemberList();
      }
    }, 500);
  }
  loadMore() {
    console.log("刷新");
    this.loading = true;
    let self = this;
    setTimeout(() => {
      if(!self.loading){

      self.pageindex = self.pageindex + 1;
      self.getMemberList();
      self.loading = false;
      }
    }, 1000);

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
  mounted() {
    console.log("mount");
    this.getMemberList();
    console.log("我的成员");
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/utils.scss";
</style>
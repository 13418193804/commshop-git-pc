<template>
  <div class="">
      <div style="padding:30px;">
        <div class="flex flex-pack-justify" v-for="(item,index) in messagelist" :key="index" 
            style="padding:15px 0;cursor: pointer;border-bottom:1px dashed #E5E5E5;" @click="handleContent(item)"
        >
          <div :style="item.status==false?'font-size: 14px;color:#000':'font-size: 14px;color:#a9a9a9'"><span v-if="item.status==false" 
           style="margin-top:-2px;margin-right:8px;display: inline-block;vertical-align: middle;background-color:#FF0506;border-radius: 50px;width:10px;height:10px;"></span>{{item.content}}<span style="color:#FDD273;">查看详情》</span>
           </div>
          <div style="color:#B4B4B4;font-size:13px;">{{item.updateTime}}</div>
        </div>
        </div>


<el-pagination v-if="total>0"
                      background
                      layout="prev, pager, next"
                    :page-size="pageSize" :total="total" @current-change="onPageChange">
                    </el-pagination>

    
    <div v-if="messagelist.length==0">
          <div style="text-align:center;margin-top:20px;">
            暂无通知
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

  handleContent(item){


    if(item.type == 'ORDER_MSG'){
    this.goOrderDetail(item)
    }
    if(item.type == 'AWARD_MSG'){
      this.goReward()
    }
    if(item.type == 'MEMBER_MSG'){
      this.goMember()
    }


  }
  messagelist=[];
  orderId="";
  lookMesge="";
    pageSize = 20;
  page = 0;
  total = 0;
    onPageChange(page) {
    this.page = page - 1;
    this.getList();
  }

  getList() {
    Vue.prototype.$reqFormPost("/message/list", {
          userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId,
          token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token,
          page: this.page,
          pageSize: 20
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
        this.total = res.data.data.page.total
        });
  }
  //未阅读消息
  unGetList() {
    console.log('消息',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .userId)
    console.log('消息',this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
            .token)
    Vue.prototype.$reqFormPost("/message/unread/count", {
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
          
          this.messagelist = res.data.data.messageList;
        });
}
 goOrderDetail(item) {
   console.log('查看详情')
    this.$router.push({
      name: "orderdetail",
      query: {
        orderId: item.actionValue
      }
    });
  }
  goReward(){
    console.log('积分详情')
    this.$router.push({
      name:"my_reward"
    })
  }
  goMember(){
    this.$router.push({
      name:"my_member"
    })
  }
  mounted() {
    this.getList();
    this.unGetList();
    this.$emit('selectMenu',{
      name: '消息通知',
      url:'/messagelist',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

</style>
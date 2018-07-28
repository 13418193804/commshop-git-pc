<template>
  <div class="tab-contents">
    <div class="flex flex-align-center" style="background-color:#F8F8F8;">
        <div class="flex flex-pack-center flex-align-center flex-around-justify flex-1" style="padding:25px 20px;">
            <div>
              <div style="padding:0 25px;overflow: hidden;">
                  <img src="../../assets/image/金币.png" style="float: left;vertical-align: middle;width:35px;height:35px;"/>
                  <span style="font-size:18px;line-height: 39px;float: left;margin-left: 10px;">积分余额</span>
              </div>
              <div style="color:#ffc600;text-align: center;font-size:24px;">{{award.awardBalance}}</div>
            </div>
            <!-- <button @click="extractshow()" class="btn_black">提现</button> -->
        </div>
        <div class="flex flex-pack-center flex-align-center flex-1">
            <div>
              <div style="padding:0 25px;overflow: hidden;">
                  <img src="../../assets/image/金币.png" style="float: left;vertical-align: middle;width:35px;height:35px;"/>
                  <span style="font-size:18px;line-height: 39px;float: left;margin-left: 10px;">累积获取积分</span>
              </div>
              <div style="color:#ffc600;text-align: center;font-size:24px;">{{award.awardAmount}}</div>
            </div>            
            <button @click="ruleshow()" class="btn_black" style="cursor: pointer;">积分规则</button>
        </div>
    </div>

    <div>
        <div style="color:#959595;margin:27px 0 15px 20px;">明细</div>
        <div class="flex flex-around-justify" style="padding:10px 0;background-color:#F8F8F8;">
          <div>时间</div>
          <div>详情</div>
          <div>积分</div>
        </div>
        <div v-if="awardList.length>0" style="padding:15px;margin-bottom:45px;border-bottom:1px solid #EEEEEE;">
          <div v-for="(item,index) in awardList" :key="index">
            <div class="flex flex-around-justify" v-if="item.awardType == 'DISTRIBUTE'" style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;" >
                <div>{{item.createTime}}</div>
                <div>{{item.userName?item.userName:item.member.loginName}}消费了{{item.payTotal}}，您获得{{item.awardAmount}}积分</div>
                <div style="color:#ffc630">{{item.awardAmount}}</div>
            </div>
            <div class="flex flex-around-justify" v-else style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;">
                <div>{{item.createTime}}</div>
                <div>{{item.userName?item.userName:item.member.loginName}}消费了{{item.payTotal}}，您获得{{item.awardAmount}}积分</div>
                <div>-{{item.awardAmount}}</div>
            </div>
          </div>
        </div>
        <div v-if="awardList.length==0" class="flex flex-align-center flex-v">
          <div style="color:#BFBFBF;padding:120px 0 30px;">您还没有明细~~~</div>
        </div>
    </div>

    <!-- 规则 -->
    <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="isruleshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
            <div class="flex-around-justify flex-align-center" style="background-color:#fff;width:650px;position: relative;padding: 40px;">
              <div @click="ruleshow()" style="position: absolute;top:10px;right:10px;cursor: pointer;">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
              </div>
              <div style="font-size:18px;text-align: center;padding-bottom: 10px;border-bottom: 1px solid #ddd;">积分奖励规则</div>
              <div style="font-size:16px;line-height:24px;padding: 20px 0;border-bottom: 1px solid #ddd;max-height: 400px;overflow: auto;">
              <p style="margin-bottom:15px;">
                <p style="margin-bottom:10px;">积分奖励前提：用户通过点击中宜严选 App 个人 中心右上角分享用户专用的推荐二维码给未注册 的游客，游客通过扫描二维码打开并完成账号注册， 即成为用户的成员。</p> 
                <p style="margin-bottom:10px;">用户的成员在商城内的所有购物消费，消费的金额 将×10%转化为用户的积分奖励。积分奖励在商城 内有以下用途：</p>
                <p style="margin-bottom:10px;">1、用于提现；用户可绑定个人的银行卡号，并申请 积分提现，积分将以 1：1 的比例兑换人民币提现。 商城平台后台审核通过
用户的提现审核后会将提 现奖励直接打到用户绑定的个人银行卡账户上。</p>
                <p style="margin-bottom:10px;">2、积分消费；用户的积分可以 1：1 的比例用于商 城的所有自营商品购买。但需注意积分余额必须大 于所购商品金额，且积分不可与钱混合使用支付。</p> 
              </p>  
              </div>
              <div style="text-align:center;margin-top:30px;">
                <button @click="ruleshow()" style="border:none;width:290px;height:45px;cursor: pointer;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:5px;font-size:16px;">朕知道了</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 提现 -->
      <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5); z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="isextractshow" >
          <div class="flex flex-around-justify  flex-align-center flex-v " style="height:100vh;">
            <div class="text-align:center;" style="background-color:#fff;padding-top: 20px;width:590px;height:540px;position: relative;">
              <div style="position: absolute;top:10px;right:10px;">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" @click="extractshow()"/>
              </div>
              
              <div class="flex flex-v flex-align-center" style=" border-bottom: 10px solid #f5f5f5;">
                <img src="../../assets/image/金币.png" style="vertical-align: middle;width:70px;height:70px;"/>
                <div style="font-size:18px;">可提取积分</div>
                <div style="color:#a8a8a8;">（1积分与￥1.00等值）</div>
                <div style="color:#FCCB52;font-size:30px">{{award.awardBalance}}</div>
              </div>
              <div class="flex" style="padding:12px 34px 16px;">
                <div style="line-height: 45px;">提取金额：</div>
                <input v-model="amount" style="height:40px;width:86%;border:1px solid #ddd"/>
              </div>
              <div v-if="isselectshow==false" style="padding:12px 34px 16px;">
                <div  @click="selectshow()" class="flex flex-align-center" style="width:100%;height:80px;border:1px solid #FFC630;padding-left:15px;">
                      <img src="../../assets/image/招商银行.png"  style="border-radius:50%;width:45px;height:45px;"/>
                      <div style="margin-left:10px;" class="flex-1">
                          <div>{{bankcard.bankName}}<span style="font-size:14px;">(信用卡)</span></div>
                          <div>{{bankcard.cardId}}</div>
                      </div>
                      <div>↓</div>
                </div>
              </div>
              <div v-if="isselectshow==true">
                <div v-for="(item,index) in cardlist" :key="index" @click="selectcard(item)" class="flex flex-align-center" style="width:100%;height:80px;padding-left:15px;">
                      <img src="../../assets/image/招商银行.png"  style="border-radius:50%;width:45px;height:45px;"/>
                      <div style="margin-left:10px;" class="flex-1">
                          <div>{{item.bankName}}<span style="font-size:14px;">(信用卡)</span></div>
                          <div>{{item.cardId}}</div>
                      </div>
                </div>
                <div @click="addbangcard()" style="width:88%;margin: 0 auto;height:60px;color:#FFC630;border:1px solid #FFC630;text-align: center;line-height:60px;">新建银行卡</div>
              </div>
              <div class="flex flex-v flex-align-center">
                <div @click="addrecord()" style="margin-top:60px;font-size:18px;width:290px;height:45px;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:5px;">提现</div>
                <div style="color:#BBBBBB;margin-top:10px;">注：预计3~5个工作日到账，节假日顺延</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- 新增 -->
      <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="addshow" >
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
            <div class="flex flex-around-justify flex-v flex-align-center" style="background-color:#fff;width:340px;height:270px;padding:20px;position: relative;">
              
              <div style="position: absolute;top:10px;right:10px;">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" @click="addcancel()"/>
            
              </div>
              <div style="text-align: center;">选择银行卡</div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">持卡人：</div>
                <input style="height:20px;width:190px;" v-model="realName"/>
              </div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">开户银行：</div>
                <input style="height:20px;width:190px;" v-model="bankName"/>
              </div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">银行卡号：</div>
                <input style="height:20px;width:190px;" v-model="cardId"/>
              </div>
              <div class="flex flex-pack-justify" style="width:250px;">
                <div style="width:60px;">支行：</div>
                <input style="height:20px;width:190px;" v-model="subBranch"/>
              </div>
              <div class="flex">
                <div @click="addcard()" style="width:90px;height:24px;background-color:#FCCB52;color:#fff;text-align: center;line-height:24px;margin-right:5px;">确定</div>
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
import comhead from "../../components/Comhead.vue";

@Component({
  components: {
    comhead
  },
  mixins: [mixin]
})
export default class my_reward extends Vue {
    pageindex = 0;
    loading = false;
    award="";
    awardList=[];
    cardlist=[];
    isruleshow=false;
    isextractshow=false;
    bankcard="";
    amount="";
    card_Id="";
    awardBalance="";
    isselectshow=false;
    addshow=false;
  cardId="";
  bankName="";
  realName="";
  subBranch="";

    ruleshow(){
      this.isruleshow=!this.isruleshow
    }
    extractshow(){
      this.isextractshow=!this.isextractshow;
    }
    selectshow(){
      this.isselectshow=true;
      this.getBankCardList()
    }
    addbangcard(){
      this.extractshow();
      this.addshow=true;
    }
  addcancel(){
    this.addshow=false;
    this.cardId="";    
    this.bankName="";    
    this.realName="";    
    this.subBranch="";    
  }
    getdefaultbankcard(){
    Vue.prototype.$reqFormPost("/bank/card/getdefault", {
      userId: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
     }, res => {
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
      console.log("getdefault",res.data.data);
      if(res.data.data){
        this.bankcard = res.data.data
        this.card_Id=res.data.data.id
      }      
      return
    });
  }
  getBankCardList() {
    Vue.prototype.$reqFormPost(
      "/bank/card/list",
      {
        userId: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
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
        this.cardlist = res.data.data;
        console.log(res.data.data);
      }
    );
  }
  selectcard(item){
    this.bankcard=item;
    this.card_Id=item.id;
    this.isselectshow=false;
  }
  addcard() {
    if (this.realName == "") {
      Toast('请输入持卡人真实姓名');
      return;
    }
    if (this.bankName == "") {
      Toast('请填写开户银行名称');
      return;
    }
    if (this.cardId == "") {
      Toast('请填写银行卡号');
      return;
    }
    if (this.subBranch == "") {
      Toast('请填写银行卡所在支行');
      return;
    }
    Vue.prototype.$reqFormPost(
      "/bank/card/add",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        cardId: this.cardId,
        bankName: this.bankName,
        realName: this.realName,
        subBranch: this.subBranch
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
        this.getBankCardList();
        console.log(res.data);
        this.addshow=false;
      }
    );
  }
    getreward(){
    Vue.prototype.$reqFormPost("/user/account/query", {
      userId: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
     }, res => {
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
      this.award = res.data.data;
      this.awardBalance=res.data.data.awardBalance;
      console.log("award",res.data.data);
    });
  }
  addrecord(){
    if(this.amount==""){
      Toast('请输入提现金额');
      return
    }
    if(this.card_Id==""){
      Toast('请选择银行卡');
      return
    }
    if(this.amount>this.awardBalance){
      Toast('提现金额不能大于余额');
      return
    }
    Vue.prototype.$reqFormPost("/withdraw/record/add", {
      userId: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
        cardId:this.card_Id,
        amount:this.amount
     }, res => {
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
      console.log("addrecord",res.data);
      Toast('提现成功');
      this.getreward();      
      this.isextractshow=false;
    });
  }
  get_user_rewardlist(){
    Vue.prototype.$reqFormPost("/award/record/userquery", {
      userId: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
      ].userId,
      token: this.$store.getters[
          Vue.prototype.MutationTreeType.TOKEN_INFO
      ].token,
      // page:this.pageindex,
      // pageSize:20
     }, res => {
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
      // let awardList = this.awardList ? this.awardList : [];
      //   for (let i = 0; i < res.data.data.awardList.length; i++) {
      //     awardList.push(res.data.data.awardList[i]);
      //   }
      //   if (res.data.data.awardList.length == 20) {
      //     this.loading = false;
      //   }
      this.awardList = res.data.data.awardList;
      console.log("awardList",res.data.data.awardList);
    });
  }
    gogetreward(){
        this.$router.push("/reward");
    }
    gorewarddetail(){
    this.$router.push("/present_record");
  }
  gomember(){
    this.$router.push("/my_member");
  }
    handlePX(CssName, PxNumber) {
    return CssName +":" +this.$store.getters[Vue.prototype.MutationTreeType.SYSTEM].availWidth /750 * PxNumber +"px;";
  }
  loadMore() {
    console.log("刷新");
    this.loading = true;
    let self = this;
    setTimeout(() => {
      self.pageindex = self.pageindex + 1;
      self.get_user_rewardlist();
      self.loading = false;
    }, 1000);
  }
  mounted() {
    this.getreward();
    this.get_user_rewardlist();
    this.getdefaultbankcard();
    console.log("我的奖励");
    
    this.$emit('selectMenu',{
      name: '我的积分',
      url:'/my_reward',
    })
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/utils.scss";
</style>
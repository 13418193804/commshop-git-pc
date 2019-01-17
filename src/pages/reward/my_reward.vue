<template>
  <div class="tab-contents">
    <div class="flex flex-align-center" style="background-color:#F8F8F8;">
        <div class="flex flex-pack-center flex-align-center flex-around-justify flex-1" style="padding:25px 20px;">
            <div>
              <div style="padding:0 25px;overflow: hidden;">
                  <img src="../../assets/image/金币.png" style="float: left;vertical-align: middle;width:35px;height:35px;"/>
                  <span style="font-size:18px;line-height: 39px;float: left;margin-left: 10px;">积分余额</span>
              </div>
              <div style="color:#ffc600;text-align: center;font-size:24px;padding-left: 70px;">{{award.awardBalance}}</div>
            </div>
            <!-- <button @click="extractshow()" class="btn_black">提现</button> -->
        </div>
        <div class="flex flex-pack-center flex-align-center flex-1">
            <div>
              <div style="padding:0 25px;overflow: hidden;">
                  <img src="../../assets/image/金币.png" style="float: left;vertical-align: middle;width:35px;height:35px;"/>
                  <span style="font-size:18px;line-height: 39px;float: left;margin-left: 10px;">累积获取积分</span>
              </div>
              <div style="color:#ffc600;text-align: left;font-size:24px;    padding-left: 74px;">{{award.awardAmount}}</div>
            </div>            
            <button @click="ruleshow()" class="btn_black" style="cursor: pointer;">积分规则</button>
        </div>
    </div>

    <div>
        <div style="color:#959595;margin:27px 0 15px 20px;">明细</div>
        <div class="rewardBox" style="padding:10px 0;background-color:#F8F8F8;">
          <div>时间</div>
          <div>详情</div>
          <div>积分</div>
        </div>
        <div v-if="awardList.length>0" style="padding:15px;margin-bottom:45px;border-bottom:1px solid #EEEEEE;">
          <div v-for="(item,index) in awardList" :key="index">
            
            <div class="rewardBox" v-if="item.awardType == 'DISTRIBUTE'" style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;" >
                <div>{{item.createTime}}</div>
                <div>{{item.userName?item.userName:item.member.loginName}}消费了{{item.payTotal}}，您获得{{item.awardAmount}}积分</div>
                <div style="color:#ffc630">+{{item.awardAmount.toFixed(2)}}</div>
            </div>

            <div class="rewardBox"  v-if="item.awardType == 'BUY'" style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;">
                <div>{{item.createTime}}</div>
                <div>您消费了{{item.payTotal.toFixed(2)}}，获得{{item.awardAmount}}积分奖励</div>
                <div style="color:#ffc630">+{{item.awardAmount.toFixed(2)}}</div>
            </div>

                <div class="rewardBox" v-if="item.awardType == 'PROMOTION'" style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;">
                <div>{{item.createTime}}</div>
                <div>手机号码为{{item.memberLoginName.substring(0,3)}}****{{item.memberLoginName.substring(6,10)}}已经在中宜严选注册会员，成为您的成员！</div>
                <div style="color:#ffc630">+{{item.awardAmount.toFixed(2)}}</div>
            </div>


                <div class="rewardBox" v-if="item.awardType == 'BUY_SCORE_GOODS'" style="padding:15px 0;background-color:#fff;border-bottom:1px dashed #E5E5E5;">
                <div>{{item.createTime}}</div>
                <div>您购买积分商品，消费{{item.awardAmount.toFixed(2)}}积分！</div>
                <div style="color:#ffc630">-{{item.awardAmount.toFixed(2)}}</div>
            </div>






          </div>
        </div>
        <div v-if="awardList.length==0" class="flex flex-align-center flex-v">
          <div style="color:#BFBFBF;padding:120px 0 30px;">您还没有明细~~~</div>
        </div>
    </div>

    <!-- 规则 -->
    <div style=" position: relative;">
        <div style="background-color:rgba(0, 0, 0, 0.5);    z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="isruleshow" @click="ruleshow()">
          <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
            <div class="flex-around-justify flex-align-center" style="background-color:#fff;width:650px;position: relative;padding: 40px;" @click.stop="()=>{return;}">
              <div @click="ruleshow()" style="position: absolute;top:10px;right:10px;cursor: pointer;">
                <img src="../../assets/image/关闭按钮1.png" style="width:20px;height:20px;" />
              </div>
              <div style="font-size:18px;text-align: center;padding-bottom: 10px;border-bottom: 1px solid #ddd;">积分奖励规则</div>

           
             <div style="height:600px;overflow: auto;">
                 <h3 style="    font-size: 20px;
    text-align: center;
    margin: 10px 0;">
               会员体系
             </h3>
             <div v-for="(item,index) in messageList" style="margin:5px;line-height:26px; ">{{item}}</div>
            </div>

              <!-- <div style="font-size:16px;line-height:24px;padding: 20px 0;border-bottom: 1px solid #ddd;max-height: 400px;overflow: auto;">
              <p style="margin-bottom:15px;">
                <p style="margin-bottom:10px;">积分奖励前提：用户通过点击中宜严选 App 个人 中心右上角分享用户专用的推荐二维码给未注册 的游客，游客通过扫描二维码打开并完成账号注册， 即成为用户的成员。</p> 
                <p style="margin-bottom:10px;">用户的成员在商城内的所有购物消费，消费的金额 将×10%转化为用户的积分奖励。积分奖励在商城 内有以下用途：</p>
                <p style="margin-bottom:10px;">1、用于提现；用户可绑定个人的银行卡号，并申请 积分提现，积分将以 1：1 的比例兑换人民币提现。 商城平台后台审核通过
用户的提现审核后会将提 现奖励直接打到用户绑定的个人银行卡账户上。</p>
                <p style="margin-bottom:10px;">2、积分消费；用户的积分可以 1：1 的比例用于商 城的所有自营商品购买。但需注意积分余额必须大 于所购商品金额，且积分不可与钱混合使用支付。</p> 
              </p>  
              </div> -->
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
 messageList=[
`（一）积分规则`,
`（1）根据中国人民银行的政策规定，国内的任何商城，其商城积分都不属于货币，都不能兑换现金。所以，我们"中宜严选"会遵守央行的规定，不会把商城积分货币化，并且在积分规则中对客户做出明确说明和解释。遵守央行的管理规定，依法依规进行商业运营。`,
`（2）“中宜严选”的商城积分只能在"中宜严选"商城内部使用，只能兑换“中宜严选的积分商城”中指定的产品。由于我们商城的所有产品已经尽力做到“在我们成本可承受范围内的最低价”供应给每个客户。`,
`坦诚地说，我们不会去使用“拉高产品价格后再送高额积分”这种低劣的营销手法，我们的做法是，不去用那些虚招，我们会很务实地去做事情，我们会尽力让商城的每一样商品的“价格和质量的比值关系（性价比）”是走向“最优化”。`,
`所以，我们的重心仍然放在提高商城所有商品的“性价比”上，商城积分是我们锦上添花的一项增值服务，这个服务我们也一定会做好，但不会本末倒置。我们吸引客户的最大优势仍然是我们的物美价廉的、高性价比的产品。`,
`（3）由于商城积分属于“赠送”范畴，所以使用赠送的积分去兑换的商品（在积分商城中兑换)，从简化运营流程的角度（节省运营成本，从而尽力提供性价比更高的产品），我们是不设退换货的，希望各位客户理解。`,
`同时，我们也换位思考，正常来说，商城积分兑换的产品是需要交纳邮寄费用的（包邮服务其实是用商品的一部分利润去包邮），我们也是为了简化运营流程的角度（节省运营成本，从而尽力提供性价比更高的产品），我们对积分兑换的商品，也实现“包邮服务”。`,
`所以，综合来说，我们是公平地设定了规则，一方面“使用赠送积分所兑换的免费商品是不能退换货”，另一方面“即使是免费获得的商品我们也同样为客户包邮”，两个方面利弊是对冲，这说明了我们并不是一味地为了省钱，而是真的希望把运营效率提升。我们最终的目的是在客户没有金钱损失的情况下，最大程度地节省运营成本（尤其是退换货时的高额人力管理成本），从而让我们有更大地空间去提升商品的“性价比”。`,
`任何的商业规则，其实都是一种权衡。当我们把“避免不必要的管理成本，从而腾出空间去提升产品性价比”作为主要的运营目标时，我们就只能这样去权衡，希望大家理解我们的出发点。`,
`（4）每一种商品所赠送的积分，都是不一样的。一般来说，单价比较低的商品，赠送积分的比例（占消费款的比例）会比较低。单价比较高的商品，赠送积分的比例（占消费款的比例）会比较高。这是从市场营销学角度去设定的积分规则，也是目前整个销售市场所采用的常见化规则，这将更好地平衡商城中各类商品的销售。`,
`（5）我们也为所有积极推广我们"中宜严选"商城的客户，赠送"推广积分"。我们的规则比较简单，只要在微信朋友圈、微博、论坛、QQ群等社交平台上使用我们为大家准备的“个性化专属二维码推广图片”去推广我们的商城，新的客户通过您的专属二维码扫描关注并注册我们的商城会员，我们就会为您赠送相应的"推广积分"，谢谢您对我们的认可和支持，也请您放心向身边亲友推荐我们，我们是非常重视口碑的经营者，我们会努力为每一个客户提供“物美价廉”的商品，您身边的亲人都会认同和感谢您的推荐。这也是我们商城在市场中能存活并发展下去的前提条件，我们一定会努力做好每一个细节。`,
`（二）退换货规则`,
`（1）我们的退换货时间与行业一致，是收货后7天内可以退换货。`,
`（2）退换货的过程中，需要客户自行负担货品的“来回运费”。`,
`【关于运费的说明】从目前全国各类商城的运营角度看，很多商城的运费设定通常是“满多少消费额就包邮”，这个设定对客户的限定性是比较大，有时候客户可能并不想买那么多东西，这样就相当于用邮费去变相强迫客户做不必要的消费，这是非常不人性的设计，与我们做商城强调“以人为本”的理念是不吻合的，所以，我们不打算这样操作。`,
`所以，我们思虑再三，我们决定为了更方便客户的购买，我们决定全部商品都包邮，我们并不是把价格拉高（把邮费摊分到价格中）的方式，我们是价格不变，然后从原有的、并不高的利润中拿出资金给客户“包邮”。`,
`从表面上看，我们可能会略吃亏，但我们可能因此获得更高的客户流量，因为用户体验好了，我们就可以获得更多地客户，客户有口碑传递，我们变相可以节省一些宣传推广的成本，所以，如果算总账，其实并不一定吃亏，所以，我们会愿意这样做。`,
`至于退换货需要客户承担货品的“来回运费”，我们会根据货品实际的“物流费用”（我们有单据），和客户结算实际的邮费。这部分邮费，就由退换货的客户负担，我们不会在这个领域去谋取任何利益。`,
`最后，我们认为最重要的还是要做好产品和服务，尽量降低退换货的概率。这是我们需要真正用心去做好的领域，请大家相信我们，我们一定尽力做好。`,
`在控制好运营成本的前提下，尽最大努力做好用户体验，并构建一个对销售者和消费者都公平的规则，是我们做事情的基础和前提，希望我们做的高性价比产品，可以为中国的消费升级（产品价格要控制好，产品质量要大幅提升），做一点微薄的贡献，谢谢大家的理解和支持！`
 ]
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

    setTimeout(
        ()=>{
          let a:any = window
a.getMessageCount()
this.$emit('getMessageCount');

        },
    1000)
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/utils.scss";
.rewardBox{
  width:100%;overflow:hidden;display: flex;display: -webkit-flex; /* Safari */
}
.rewardBox>div{
  float:left;text-align:center;flex: 1;
}
</style>
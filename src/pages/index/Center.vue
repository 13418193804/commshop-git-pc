<template>
  <div class="tab-contents" style="    overflow: hidden;">


<wintabe ref="wintabe" :table="true" :router="true"></wintabe>

<div class=" flex   flex-pack-center">
       <div  style="width:1200px;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{menuName}}</el-breadcrumb-item>
</el-breadcrumb>
</div>
</div>
</div>

<div class=" flex   flex-pack-center">
       <div  style="width:1200px;margin-bottom:10px;">
<div class="flex">
    <div class="borderSet" style="margin-right:20px;padding:20px;min-width: 152px;">
      <div style="padding:10px 20px;" v-for="(item,index) in menu" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="content" :class="menuName == items.name ?'selectContent':''" 
              v-for="(items,indexs) in item.menu" @click="selectMenu(items)" :key="indexs">{{items.name}}

               <div class="messageFexid" style="right:-5px;top:17px;" 
                    v-if="items.name == '消息通知' && messageCount!= 0 ">
                    {{messageCount}}
               </div>
               <div class="service" v-if="items.name == '在线客服'" onclick="showMeiQia()"></div>
          </div>
      </div>
    </div>
    <div class=" flex-1" :class="menuName !='我的订单' &&  $route.path !=='/orderdetail' ?'borderSet':''">
        <router-view @selectMenu="selectMenu"></router-view>
    </div>
</div>
</div>
</div>
  <winbeet></winbeet>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast, ImagePreview } from "vant";
import { Watch } from "vue-property-decorator";
import Wintabe from "../../components/Wintabe.vue";
import Winbeet from "../../components/Winbeet.vue";

@Component({
  components: {
    Wintabe,
    Winbeet
  },
  mixins: [mixin]
})

export default class shopIndex extends Vue {
  menu = [
    {
      title : "账号管理",
      menu:[
        {
          name: '个人中心',
          url:'/center',
        },  {
          name: '消息通知',
          url:'/Messagelist',
        },  {
          name: '账号信息',
          url:'/user',
        },  {
          name: '地址管理',
          url:'/addresslist',
        },  {
          name: '我的收藏',
          url:'/collection',
        },  {
          name: '我的成员',
          url:'/my_member',
        },{
          name: '我的积分',
          url:'/my_reward',
        },
        // {
        //   name: '我的银行卡',
        //   url:'/my_bankcard',
        // },
      ]
    },  {
      title : "账号管理",
      menu:[
        {
          name: '我的订单',
          url:'/orderlist',
        },  {
          name: '优惠券',
          url:'/discountLobby',
        },
      ]
    },
    
    {
      title : "账号管理",
      menu:[
        {
          name: '在线客服',
          url:'/',
        },
      ]
    },

  ]
  menuName = '个人中心'
selectMenu(items){
  console.log('--------')
    if(items.url == '/'){
      return 
    }
    this.menuName = items.name

    if(this.$route.path !== items.url){
    this.$router.push(items.url);
    }
      

}
messageCount:any = 0
  getMessageCount(){
        Vue.prototype.$reqFormPost1(
      "/message/unread/count",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token
      },
      res => {
        if (res.returnCode != 200) {
        
     this["$Message"].warning(res.message);
        return;
        }
        this.messageCount = res.data.count
        console.log('消息条数',res.data)
      }
    );
  }


  mounted() {
    this.getMessageCount();
    this.doNone();
  }
  //隐藏首页tab
  doNone() {
    console.log(this.$refs.wintabe);
  }
  goDetail(goodsId) {
    console.log(goodsId);
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

.tab-contents {
  position: relative;
}
.loading {
  text-align: center;
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f4f4f4;
  img {
    height: 100px;
    width: 100px;
    margin-top: 127px;
  }
}
.tab_box {
  display: flex;
  text-align: center;
  font-size: 14px;
  flex-wrap: wrap;
}
.goodsTitleTab {
  height: 70px;
  display: flex;
  color: #666;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
}

.ClassificationTitle {
  padding: 5px 10px;
}
.AllClassification {
  position: absolute;
  top: 47px;
  z-index: 11111;
  width: 100%;
  background-color: #ffffff;
}

.ClassificationActive {
  border: 1px #ffc630 solid;
  color: #ffc630;
}
.ClassificationName {
  padding-bottom: 10px;
}
.Classification {
  padding: 5px 0;
  margin: 5px;
  border-radius: 30px;
}
.ClassificationItem {
  border: 1px #e5e5e5 solid;
}
</style>

<style>
.searchbox .van-search__input-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 200;
}

.searchbox .van-search__input-wrap input {
  width: 100%;
  border-radius: 30px;
  border: 0;
  background-color: #f0f0f0;
  padding-left: 30px;
}

.bottomBigshit {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  height: 50px;
}
.topBigshit {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9999;
  height: 100%;
}
.bg_shop1 {
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.498039);
  height: 100%;
  width: 100%;
}
.bg_shop_none1 {
  position: fixed;
  bottom: -100%;
  animation: myfirst0002 0.5s;
}

@keyframes myfirst0002 {
  from {
    display: flex;
  }

  to {
    display: none;
  }
}

.modiaBoxUp2 {
  position: absolute;
  bottom: 0;
  animation: myfirst000 0.5s;
  -moz-animation: myfimyfirst000rst 0.5s;
  /* Firefox */
  -webkit-animation: myfirst000 0.5s;
  /* Safari and Chrome */
  -o-animation: myfirst000 0.5s;
  /* Opera */
}

@keyframes myfirst000 {
  from {
    bottom: -100%;
  }

  to {
    bottom: 0;
  }
}
.service{
  position: absolute;width: 70px;height: 33px;left: 0;top: 0;
}
.modiaBoxDown2 {
  position: absolute;
  bottom: -100%;
  animation: myfirst0001 0.5s;
}
.collection_color {
  color: red;
}

.skuKeyBox {
  display: flex;
  flex-wrap: wrap;
}
.sku_box {
  margin: 10px 0px 0px 20px;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid #7f7f7f;
  background-color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
}
.vangoods {
  position: inherit;
}
.num_box {
  font-size: 16px;
  padding: 20px;
}

@keyframes myfirst0001 {
  from {
    bottom: 0;
  }

  to {
    bottom: -100%;
    display: none;
  }
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 14px;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 14px;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 14px;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 14px;
}
.borderSet {
  border: 1px solid #e5e5e5;
}
.title {
  font-weight: 600;
  font-size: 16px;
}
.content {
  font-size: 14px;position: relative;
    padding:5px 0 !important;
text-align:center;
  border-bottom:2px #fff solid;
    
}
.selectContent{

  color:#ffc630;
  border-bottom:2px #ffc630 solid;
box-sizing: border-box;
}
</style>

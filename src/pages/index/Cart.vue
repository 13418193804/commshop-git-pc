<template>
  <div class="tab-contents" >
   
<wintabe ref="wintabe" :table="true" @getCartList="changeStatus" :router="true"></wintabe>

<div class=" flex   flex-pack-center ">
       <div  style="width:1200px;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex flex-pack-justify flex-align-center">
    <div style="padding: 0 20px;">全选</div>
    <div style="width:70px">商品信息</div>
    <div style="width:150px;"></div>
    <div style="margin: 0 20px;">单价</div>
    <div style="margin: 0 20px;">数量</div>
    <div style="margin: 0 20px;">小计</div>
    <div style="margin: 0 20px;">操作</div>
</div>
</div>
</div>
<van-checkbox-group v-model="result" @change="checkchange()">

<div class=" flex   flex-pack-center ">

<div class="contentBox1  ">

  <div class="cartItem flex  flex-align-center flex-pack-justify" v-for="(item,index) in cartList">
  <div style="padding: 0 10px" class="pointer">
    <van-checkbox  :name="item.id" ></van-checkbox>
  </div>
  <div class="flex flex-pack-center flex-align-center" style="width:80px;margin:0 10px 0 0;overflow:hidden;">
       <img v-lazy="item.goodsImg.split(',')[0]" style="width:100%;border:1px solid #EAEAEA"/>
       </div>
             <div  style="overflow: hidden;width:200px;" >
         <div>
           <span class="textLabel" style="color:#000000;font-size:15px">{{item.goodsName}}</span>
          </div>
         <div style="color:#666;" class="textLabel">
        <span v-if="item.skuKeyValue.length>2 ">
<span v-for="items in JSON.parse(item.skuKeyValue)" style="margin-right:10px;">
  <span>{{items.key}}:{{items.value}} X {{item.num}}</span>
</span>
        </span>
        <span v-else>
          X {{item.num}}
        </span>
         </div>
       </div>
<div>
<span class="" style="font-size:20">￥{{item.price}}</span>
</div>
<div>
    <van-stepper v-model="item.num" @plus="pluscart(item.id,item.num)" @minus="minuscart(item.id,item.num)" style="margin: 10px 0px 0px 20px;cursor:pointer;"/>
</div>
<div>
  <span class="marketPrice" style="font-size:20">￥{{(item.price * item.num).toFixed(2)}}</span>
</div>


<div class="flex  flex-align-center">
  <div style="color:#F4C542;cursor:pointer;" @click="collect(index)">移入收藏夹</div>
  <div class="rightborder"></div>
  <div @click="deleteCart(index)" style="cursor:pointer;">删除</div>
</div>


</div>

<div v-if="cartList.length== 0" class="flex flex-pack-center flex-align-center" style="padding:20px;">
  <span style="color:#F4C542;cursor:pointer;" @click="$router.push('/')">去逛逛>></span>
</div>

</div>

</div>
</van-checkbox-group>

<div class=" flex   flex-pack-center" v-if="cartList.length>0" >

<div class="btmContent flex  flex-align-center flex-pack-justify">

  <div>
  <div class="flex flex-align-center flex-pack-center">
       <van-checkbox v-if="cartList.length>0" v-model="checked"  @change="allSelect" style="margin:15px 15px 15px 25px;" class="pointer"></van-checkbox>
      <div>全选</div>
      <div style="margin:0 30px;cursor:pointer;" @click="allDelete">批量删除</div>
  </div>
</div>
<div class="flex  flex-align-center ">
  <div style="padding:0 20px;">
    <span>应付总金额：</span>
    <span style="color:red;font-size:18px;">￥{{totalPrice}}</span>

  </div>
  <div  style="background-color:#F4C542;border-color:#F4C542;color:#FFFFFF;min-width:120px;height:60px;font-size:16px;" class="flex flex-align-center flex-pack-center pointer" @click="onSubmit">
  <span>下单</span>
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
import Swipe from "../../components/Swipe.vue";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";
import { Prop, Watch } from "vue-property-decorator";

import Wintabe from "../../components/Wintabe.vue";
import Winbeet from "../../components/Winbeet.vue";
@Component({
  components: {
    Wintabe,
    Winbeet
  },
  mixins: [mixin]
})
export default class Cart extends Vue {
  get totalPrice() {
    var totalMoney = 0;
    for (var i = 0; i < this.cartList.length; i++) {
      if (this.result.indexOf(this.cartList[i].id) !== -1) {
        totalMoney = totalMoney + this.cartList[i].price * this.cartList[i].num;
      }
    }
    totalMoney = totalMoney;
    totalMoney.toString();
    return totalMoney.toFixed(2);
  }
  get cartList() {
    let a: any = this.$refs.wintabe;
    if (this.tavkend) {
      return a.cartList;
    } else {
      return "";
    }
  }


   onSubmit() {
    if (this.result.length <= 0) {
      Toast("请选择商品");
      return;
    }
    Vue.prototype.$reqFormPost1(
      "/prepare/add",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        cartIdList: this.result.join(",")
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }
        // this.$store.commit(Vue.prototype.MutationTreeType.PREPAREID,res.data.prepareId)
               sessionStorage[Vue.prototype.MutationTreeType.PREPAREID] = res.data.prepareId;
        this.$router.push({
          path: "/settle"
        });
      }
    );
  }


  num = 1;
  tavkend = false;
  changeStatus() {
    this.tavkend = true;
  }
  allSelect() {
    if (this.checked) {
      let result = [];
      this.cartList.forEach((item, index) => {
        console.log();
        result.push(item.id);
      });
      this.result = result;
    } else if (this.cartList.length == this.result.length) {
      this.result = [];
    }
  }
  result = [];
  checked = false;
  checkchange() {
    if (this.result.length == this.cartList.length) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
  deleteCart(index, collect) {
    Vue.prototype.$reqFormPost1(
      "/shop/cart/delete",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        cartIds: this.cartList[index].id
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }

        if (!collect) {
          this["$Message"].success("已删除");
        }

        let a: any = this.$refs.wintabe;
        a.getCartList();
      }
    );
  }

  allDelete() {
    console.log('订单号',this.result.join(","))
    if (this.result.length <= 0) {
      Toast("您还没选择商品");
      return;
    }
    Vue.prototype.$reqFormPost1(
      "/shop/cart/delete",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        cartIds: this.result.join(",")
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }
          this["$Message"].success("已删除");
        let a: any = this.$refs.wintabe;
        a.getCartList();
      }
    );
  }

  collect(index) {
    Vue.prototype.$reqFormPost1(
      "/fav/add",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        goodsId: this.cartList[index].goodsId
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }
        this.deleteCart(index, true);
        this["$Message"].success("已移至收藏夹");
      }
    );
  }

  pluscart(id, num) {
    Vue.prototype.$reqFormPost1(
      "/shop/cart/updatenum",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        cartId: id,
        num: num
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }

        let a: any = this.$refs.wintabe;
        a.getCartList();
      }
    );
  }
  minuscart(id, num) {
    Vue.prototype.$reqFormPost1(
      "/shop/cart/updatenum",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        cartId: id,
        num: num
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log("网络请求错误！");
          return;
        }

        let a: any = this.$refs.wintabe;
        a.getCartList();
      }
    );
  }
  mounted() {
    if (
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId !=
        "" &&
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token != ""
    ) {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

.radios,
.playlists {
  margin: 14px 10px 10px;
  .title {
    color: #000;
    font-size: 16px;
    margin-bottom: 11px;
    font-weight: normal;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .list-item {
      flex: 1;
      width: 45%;
      flex-basis: 40%;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 10px;
      &:nth-child(2n + 1) {
        margin-right: 8px;
      }
      .list-media {
        position: relative;
        margin-bottom: 5px;
      }
      .list-info {
        height: 36px;
        padding: 0 7px 5px;
        color: #000;
        .list_tit {
          @include ellipsis;
        }
      }
      .listen_count {
        position: absolute;
        left: 5px;
        bottom: 7px;
        line-height: 12px;
        color: #fff;
      }
      .icon {
        background-image: url("../../assets/list_sprite.png");
        background-repeat: no-repeat;
        background-size: 24px 60px;
      }
      .icon_listen {
        float: left;
        width: 10px;
        height: 10px;
        background-position: 0 -50px;
        margin-right: 5px;
      }
      .icon_play {
        height: 24px;
        bottom: 5px;
        right: 5px;
        width: 24px;
        position: absolute;
        background-position: 0 0;
      }
      img {
        width: 100%;
        display: block;
        min-height: 145px;
      }
    }
  }
}

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
</style>
<style>
.van-cell-swipe__right {
  color: #fff;
  font-size: 15px;
  width: 65px;
  display: inline-block;
  text-align: center;
  background-color: #f44;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cartItem {
  padding: 10px;
}
.van-checkbox {
  padding: 0 10px;
}
.van-submit-bar__bar {
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.van-submit-bar__price-text {
  visibility: hidden;
}

.van-button--danger {
  background-color: #ffc630;
  border: 1px solid #ffc630;
}
.van-checkbox__icon {
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    font-size: 8px;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    text-align: center;
    border: 1px solid #ccc;
    color: #fff;
}
.van-checkbox--checked {
  border-color: #f44;
  background-color: #f44;
  color: #fff;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  text-align: CENTER;
  font-size: 8px;
}
.contentBox1 {
  border: 1px #e5e5e5 solid;
  width: 1200px;
}
.btmContent {
  background-color: #f9f9f9;
  width: 1200px;
  border: 1px #e5e5e5 solid;
  margin-top: 10px;
}
.rightborder {
  height: 15px;
  margin: 0 5px;
  border-right: 1px #e5e5e5 solid;
}
</style>

<template>
  <div class="tab-contents" >
   
<wintabe ref="wintabe" :table="true" :router="true"></wintabe>

<div class=" flex   flex-pack-center">
       <div  style="width:60%;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
    <div>全选</div>
    <div>全选</div>
</div>
</div>
</div>

<div class=" flex   flex-pack-center">

<div class="contentBox1">
  {{cartList.length}}
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
import { Action  } from "vuex-class";
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

 get cartList (){
    let a:any = this.$refs.wintabe;
  if(this.tavkend){
  return a.cartList

  }else{
    return ''
  }
      }
    tavkend = false
    //子组件 改变 tavkend状态    
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
  display: flex;
  align-items: center;
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
.van-checkbox--checked {
  border-color: #f44;
  background-color: #f44;
}
.contentBox1{
  border:1px #e5e5e5 solid ;
  background-color:#FCFCFC;
  width:60%;
}
</style>

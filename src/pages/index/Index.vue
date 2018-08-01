<template>
  <div class="tab-contents" style="    overflow: hidden;">

<wintabe ref="wintabe" ></wintabe>

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
  mounted() {

    // console.log(this.$route.query)
    console.log('index')
   
   
 


    // Vue.prototype.$reqFormPost1("/address/queryprovince", {}, res => {
    //   console.log(1, res);
    // });
    this.doNone()
  }

   
  //隐藏首页tab
  doNone(){
    console.log(this.$refs.wintabe)
  }
  goDetail(goodsId) {
    console.log(goodsId);
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
</style>

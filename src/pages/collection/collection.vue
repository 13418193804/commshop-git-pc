<template>
  <div class="tab-contents" style="height:-webkit-fill-available;background-color:#FFFFFF;">
<div>
  <el-row :gutter="10" type="flex" justify="start" class="flex-warp-justify">
  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"  v-for="(item,index) in goodsList">
    <div class="flex flex-align-center" style="width:200px;overflow:hidden;margin:10px">
                        <div>
<img v-lazy="item.goodsImg.split(',')[0]" style="width:100%;border:1px solid #EAEAEA"/>
                  <div>
                     <span class="textLabel" style="color:#000000;font-size:15px;">{{item.goodsName}}</span></div>
                  <div> <span class="textLabel marketPrice" >￥{{item.marketPrice}}</span></div>


                        </div>
                      </div>
    </el-col>
</el-row>


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
  components: { comhead },
  mixins: [mixin]
})
export default class collection extends Vue {
  goodsList = [];
  checkedGoods = [];
  isShow = false;

  toggle() {
    this.isShow = !this.isShow;
  }
  favdelete() {
    if (this.checkedGoods.length == 0) {
      Toast("没有选商品");
      return;
    }
    Vue.prototype.$reqFormPost(
      "/fav/delete",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        goodsIds: this.checkedGoods
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
        this.getProductList();
      }
    );
  }
  allchange() {
    if (this.goodsList.length == this.checkedGoods.length) {
      this.checkedGoods = [];
    } else {
      let result = [];
      this.goodsList.forEach((item, index) => {
        console.log();
        result.push(item.goodsId);
      });
      this.checkedGoods = result;
    }
  }
  getProductList() {
    Vue.prototype.$reqFormPost1(
      "/fav/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        page: 0,
        pageSize: 20
      },
      res => {
        if (res.returnCode != 200) {
                  this["$Message"].warning(res.message);
          return;
        }
        console.log("收藏", res.data.goodsList);
        this.goodsList = res.data.goodsList;
      }
    );
  }

  goProductDetail(goodsId) {
    this.$router.push({
      path: "/productdetail",
      query: {
        goodsId: goodsId
      }
    });
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
    this.getProductList();
    console.log("收藏页面");
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
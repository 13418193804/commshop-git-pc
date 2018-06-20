<template>
  <div>
   <div class="tab-contents" style="    overflow: hidden;">


<wintabe ref="wintabe" :table="true" :router="true"></wintabe>



<div class=" flex   flex-pack-center">
       <div  style="width:60%;">
<div style="width:100%;background-color:#f7f7f7;height:47px;padding:0 10px;margin-bottom:10px;" class="flex  flex-align-center">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>个人中心</el-breadcrumb-item>
</el-breadcrumb>
</div>
</div>
</div>





  <winbeet></winbeet>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Toast } from "vant";
import { Action } from "vuex-class";

import { Cell, CellGroup, ImagePreview } from "vant";
import Wintabe from "../../components/Wintabe.vue";
import Winbeet from "../../components/Winbeet.vue";
@Component({
  components: {
     Wintabe,
    Winbeet
  },
  mixins: [mixin]
})

export default class ProductDetail extends Vue {

  mounted() {
 
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

</style>

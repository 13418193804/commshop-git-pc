<template>
  <div>
   <div class="tab-contents" style="    overflow: hidden;">


<wintabe ref="wintabe" :table="true" :router="true"></wintabe>
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

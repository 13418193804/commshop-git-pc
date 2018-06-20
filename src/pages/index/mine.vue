<template>
  <div class="tab-contents">

        个人中心
        <div>
            
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
export default class collection extends Vue {
  

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";

</style>
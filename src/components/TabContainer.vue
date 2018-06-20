<template>
  <div class="tab-contents">
          <div class="content">
            <transition name="move" mode="out-in">
              <router-view></router-view></transition>
        </div>
     
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";
import { Toast } from "vant";

export default class TabContainer extends Vue {
 


  
   

  mounted() {
  }
}
</script>
<style>
.van-tabbar{
      /* border-width: 1px 0; */
  border-top: 1px solid #e5e5e5;
}
</style>

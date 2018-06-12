<template>
  <div class="alter-container">
  
      11
  </div>
  <!-- end container -->
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Comhead extends Vue {

  type = "H5";
  leftScale = "1.5";
  textindex = 1;
  rightClick() {
    this.$emit("rightClick");
  }


  mounted() {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vhead {
  border-bottom: solid 1px #e5e5e5;
  justify-content: flex-end;
  height: 52px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;

  top: 0;
  padding: 0px;
  width: 100%;
  max-width: 640px;
  color: #101010;
}
.baseLine {
  width: 100%;
  height: 52px;
  margin-top: 0px;
  color: white;
}
.bodyContent {
  border: 1px #d2d2d2 solid;
  display: flex;
  border-radius: 6px;
  font-size: 15px;
}
.checkbody {
  background-color: #ebebeb;
}
</style>
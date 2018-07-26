<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>

    </div>

  </div>
</template>

<style>
@import '../../node_modules/swiper/dist/css/swiper.css';
.swiper-slide img {
    height: 100%;
    width: 100%;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Swiper from 'swiper';

@Component
export default class Swipe extends Vue {
    @Prop({ required: true })
    lists: any;

    mounted() {
        new Swiper('.swiper-container', {
             slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    
    }
}
</script>
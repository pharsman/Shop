<template>
  <div>
    <swiper :modules="modules" :slides-per-view="5" :space-between="-180" navigation :pagination="{ clickable: false }"
      :scrollbar="{ draggable: false }" @swiper="onSwiper" @slideChange="onSlideChange" :loop="true" :autoplay="{
  delay: 1500,
  disableOnInteraction: false
}">
      <swiper-slide><img src="../../assets/img/slider/slider1.png"></swiper-slide>
      <swiper-slide><img src="../../assets/img/slider/slider2.png"></swiper-slide>
      <swiper-slide><img src="../../assets/img/slider/slider3.png"></swiper-slide>
      <swiper-slide><img src="../../assets/img/slider/slider4.png"></swiper-slide>
      <swiper-slide><img src="../../assets/img/slider/slider5.png"></swiper-slide>
      <swiper-slide><img src="../../assets/img/slider/slider6.png"></swiper-slide>
    </swiper>
  </div>

</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style scoped lang="scss">

</style>
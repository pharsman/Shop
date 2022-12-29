<template>
  <div class="cont">
    <h2>#GOOD4ME</h2>
    <div class="slider">
      <Swiper />
    </div>
  </div>
</template>
  
<script setup>
import Swiper from './slider/Swiper.vue';
</script>

<style lang="scss" scoped>
.cont {
  margin-top: 120px;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2.25rem;
  }
  .slider{
    margin-top: 40px;
  }
}
</style>
  

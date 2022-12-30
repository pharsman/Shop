<template>
  <Header />
  <RouterView data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in-out" />
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount } from 'vue';
import Header from '@/components/Header.vue';

// window.onscroll = function() {
//   console.log(window.scrollY);
// };


onBeforeMount(() => {
  window.onscroll = null;

})
</script>

<style lang="scss">

</style>
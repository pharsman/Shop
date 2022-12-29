<template>
  <Header />
  <RouterView />
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
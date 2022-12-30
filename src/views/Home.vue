<template>
    <Slider />
    <Deal />
    <Collections />
    <!-- <Services /> -->
    <!-- <Control /> -->
    <!-- <Products /> -->
    <!-- <Results /> -->
    <!-- <ShopAll /> -->
    <!-- <Latest /> -->
    <!-- <Goodme /> -->
    <!-- <Footer /> -->
    <h2 @click="scrollUp">^</h2>
</template>

<script setup>
import Slider from '@/components//Slider.vue';
import Deal from '@/components/Deal.vue';
import Collections from '@/components/Collections.vue';
import Services from '@/components/Services.vue';
import Control from '@/components/Control.vue'
import Products from '@/components/Products.vue';
import Results from '@/components/Results.vue';
import ShopAll from '@/components/ShopAll.vue';
import Latest from '@/components/Latest.vue';
import Goodme from '@/components/Goodme.vue';
import Footer from '@/components/Footer.vue';

const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

</script>

<style lang="scss" scoped>
h2 {
    font-size: 40px;
    position: fixed;
    top: 90%;
    left: 40px;
    cursor: pointer;
}
</style>
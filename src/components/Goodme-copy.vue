<template>
    <div class="cont">
        <!-- <header>
            <h2>#GOOD4ME</h2>
        </header> -->
        <div class="slider">
            <Carousel class="carousel" v-slot="{ currentSlide }">
                <Slide v-for="slide in carouselSlides" :key="slide.id" :id="slide.id">
                    <div v-show="currentSlide === slide.id" class="slide-info">
                        <img :src="slide.img">
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '@/components/slider/Carousel.vue';
import Slide from '@/components/slider/Slide.vue';

const carouselSlides = ref([
    {
        id: 1,
        img: 'src/assets/img/slider/slider1.png'
    },
    {
        id: 2,
        img: 'src/assets/img/slider/slider2.png'
    },
    {
        id: 3,
        img: 'src/assets/img/slider/slider3.png'
    },
    {
        id: 4,
        img: 'src/assets/img/slider/slider4.png'
    },
    {
        id: 5,
        img: 'src/assets/img/slider/slider5.png'
    },
    {
        id: 6,
        img: 'src/assets/img/slider/slider6.png'
    },
])

</script>

<style lang="scss" scoped>
.cont {
    width: 100%;
    margin-top: 120px;
    text-align: center;

    .no-select {
        -webkit-touch-callout: none;
        /* iOS Safari */
        -webkit-user-select: none;
        /* Safari */
        -khtml-user-select: none;
        /* Konqueror HTML */
        -moz-user-select: none;
        /* Firefox */
        -ms-user-select: none;
        /* Internet Explorer/Edge */
        user-select: none;
        /* Non-prefixed version, currently supported by Chrome and Opera */
    }

}
</style>
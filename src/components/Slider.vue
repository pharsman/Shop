<template>
    <div class="cont" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
        <div class="info">
            <h3>Good4Me</h3>
            <h2>Apple Cider Vinegar</h2>
            <p>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.
            </p>
            <button class="button">SHOP NOW</button>
        </div>
        <div class="white-img"></div>
    </div>

</template>

<script setup>


</script>

<style lang="scss" scoped>
.cont {
    width: 100%;
    height: 650px;
    background-image: url(../assets/img/Slider1.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .info {
        position: absolute;
        width: 529px;
        left: calc(100% - 970px);
        top: 150px;
        h3 {
            font-size: 1.625rem;
            color: #f6623e;
            font-weight: 600
        }

        h2 {
            font-weight: 600;
            font-size: 3.5rem;
            color: #000000;
        }

        p {
            font-size: 1rem;
            color: #454545;
            margin-top: 10px;
        }
    }

    .white-img {
        width: 100%;
        height: 100px;
        background-image: url(../assets/img/whiteimg.png);
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: calc(100% - 100px);
    }
}
</style>
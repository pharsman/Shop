<template>
    <div class="collection-container">
        <div class="ad" style="padding: 44px 50px;" data-aos="flip-left" data-aos-duration="1500" data-aos-once="true">
            <img src="@/assets/img/coll1.png" data-aos="flip-left" data-aos-duration="1500" data-aos-once="true">
            <p style="margin-top: 58px">MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
        <div class="ad" data-aos="flip-up" data-aos-duration="1500" data-aos-once="true">
            <img src="../assets/img/coll2.png">
            <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
        <div class="ad" style="padding: 44px 50px;" data-aos="flip-right" data-aos-duration="1500" data-aos-once="true">
            <img src="@/assets/img/coll3.png">
            <p style="margin-top: 58px">MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
        <div class="ad" data-aos="flip-down" data-aos-duration="1500" data-aos-once="true">
            <img src="@/assets/img/coll4.png">
            <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.collection-container {
    width: 90%;
    margin: auto;
    margin-top: 36px;
    text-align: center;
    display: flex;
    justify-content: space-between;

    .ad {
        width: 400px;
        height: 412px;
        background-color: #e8e8e8;

        img {
            width: 100%;
        }

        p {
            font-size: 1.125rem;
            font-weight: bolder;
        }
    }
}

@media (max-width: 1780px) {

    .ad {
        background-color: #ff0000;
    }
}
</style>

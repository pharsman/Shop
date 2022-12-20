<template>
    <div class="cont">
        <div class="white-img-up"></div>
        <div class="review-side">
            <div class="review">
                <h3>REAL REVIEWS</h3>
                <h2>REAL RESULTS</h2>
                <h2> &#11088; &#11088; &#11088; &#11088; &#11088; </h2>
                <p>“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on
                    our
                    website.We can't wait until you are a part of our Good4Me Family.”</p>
                <span>_Chloe H.</span>
            </div>
            <div class="img-side">
                <div class="img">
                    <img src="../assets/img/Hand.png">
                </div>
            </div>
        </div>

        <div class="white-img-down"></div>
    </div>
</template>

<style scoped lang="scss">
.cont {
    width: 100%;
    height: 884px;
    background-color: #fef0e7;
    position: relative;

    .white-img-up {
        width: 100%;
        height: 100px;
        background-image: url(../assets/img/whiteimg2.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .review-side {
        width: 100%;
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        padding-top: 150px;
        .review {
            width: 620px;
            height: 455px;
        }
    }


    .white-img-down {
        width: 100%;
        height: 100px;
        background-image: url(../assets/img/whiteimg3.png);
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: calc(100% - 100px);
    }
}
</style>
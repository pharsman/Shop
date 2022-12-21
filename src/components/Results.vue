<template>
    <div class="cont">
        <div class="white-img-up"></div>
        <div class="review-side">
            <div class="review">
                <h3>REAL REVIEWS</h3>
                <h2>REAL RESULTS</h2>
                <h2 class="star"> &#11088; &#11088; &#11088; &#11088; &#11088; </h2>
                <p>“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on
                    our
                    website.We can't wait until you are a part of our Good4Me Family.”</p>
                <span>_Chloe H.</span>
                <div class="arr">
                    <div class="arrow">
                        <div class="left"></div>
                    </div>
                    <div class="arrow">
                        <div class="right"></div>
                    </div>
                </div>
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

<script setup>

</script>

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
        justify-content: space-evenly;
        align-items: center;
        padding-top: 150px;

        .review {
            width: 620px;
            height: 455px;

            h3 {
                font-size: 1.25rem;
            }

            h2 {
                margin-top: 46px;
                color: #f6623e;
                ;
                font-size: 1.875rem;
            }

            .star {
                font-size: 1rem;
                margin-top: 24px;
            }

            p {
                letter-spacing: 1px;
                font-size: 1.625rem;
                color: #454545;
                margin-top: 24px;
                margin-bottom: 22px;
            }

            span {
                font-size: 1rem;
                color: #f6623e;
                letter-spacing: 1px;
            }

            .arr {
                display: flex;
                justify-content: space-evenly;
                width: 108px;

                .arrow {
                    width: 44px;
                    height: 44px;
                    border: 1px solid #828181;
                    margin-top: 24px;
                    cursor: pointer;
                    transition: 0s 0.2s;

                    &:active{
                        border-color: #f6623e;
                        transition: 0s;
                    }
                    &:active .left{
                        border-color: #f6623e;
                        transition: 0s;
                    }
                    &:active .right{
                        border-color: #f6623e;
                        transition: 0s;
                    }

                    .left {
                        border: solid #828181;
                        border-width: 0 2px 2px 0;
                        display: inline-block;
                        padding: 10.6px;
                        transform: rotate(135deg);
                        margin: 10px 14px;
                        transition: 0s 0.2s;
                    }

                    .right {
                        border: solid #828181;
                        border-width: 0 2px 2px 0;
                        display: inline-block;
                        padding: 10.6px;
                        transform: rotate(-45deg);
                        margin: 10px 6px;
                        transition: 0s 0.2s;

                        &:active {
                            border-color: #f6623e;
                            transition: 0s;
                        }
                    }
                }
            }
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
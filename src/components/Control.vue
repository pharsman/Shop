<template>
    <div class="cont">
        <div class="sub-cont">
            <div class="text">
                <h2>TAKE CONTROL OF YOUR HEALTH</h2>
                <p>The Good4Me range has been formulated based on scientific & traditional evidence.</p>
                <p>Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
                <p>Made in New Zealand from local and imported ingredients.</p>
                <button class="button">BROWSE OUR RANGE</button>
            </div>
        </div>
        <div class="sub-cont imgs">
            <div class="img1">
                <img src="@/assets/img/Girl1.png">
            </div>
            <div class="img2">
                <img src="@/assets/img/Girl2.png">
            </div>
            <div class="img3">
                <img src="@/assets/img/Girl3.png">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    margin: 138px auto;
    width: 93%;
    height: 678px;
    background-color: #fff8f6;
    display: flex;

    .sub-cont {
        width: 50%;

        .text {
            width: 502px;
            margin-top: 140px;
            margin-left: 198px;
            h2{
                font-weight: 600;
                letter-spacing: 3px;
                font-size: 3.125rem;
            }
            p:first-of-type{
                margin-top: 34px;
            }
            p{
                margin-top: 12px;
                font-size: 1rem;
                color: #454545;
            }
            .button{
                background-color: transparent;
                border: 2px solid #f6623e;
                color: #000000;
                font-size: 1rem;
                text-align: center;
            }
        }
    }
    .imgs{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        .img1{
            margin-right: 4px;
        }
    }
    
}
</style>
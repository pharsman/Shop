<template>
    <div class="cont">
        <div class="img">
            <img src="../assets/img/latest1.png">
            <p>August 26, 2020</p>
            <h2>WE DONATE ONE WEEKS SUPPLY</h2>
            <p>We care about New Zealand children, and we want to support our community by providing our children in
                need with necessary vitamins to improve....</p>
            <button class="button">READ MORE</button>
        </div>
        <div class="img">
            <img src="../assets/img/latest2.png">
            <p>August 26, 2020</p>
            <h2>WE DONATE ONE WEEKS SUPPLY</h2>
            <p>We care about New Zealand children, and we want to support our community by providing our children in
                need with necessary vitamins to improve....</p>
            <button class="button">READ MORE</button>
        </div>
        <div class="img">
            <img src="../assets/img/latest3.png">
            <p>August 26, 2020</p>
            <h2>WE DONATE ONE WEEKS SUPPLY</h2>
            <p>We care about New Zealand children, and we want to support our community by providing our children in
                need with necessary vitamins to improve....</p>
            <button class="button">READ MORE</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    width: 1292px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 118px;

    .img {
        text-align: center;
        h2 {
            font-size: 1.375rem;
        }

        p:first-of-type {
            font-size: 0.75rem;
            color: #f6623e
        }

        p {
            font-size: 1rem;
            color: #828181;
            line-height: 30px;
        }

        .button {
            margin-top: 20px;
        }
    }
}
</style>
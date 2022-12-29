<template>
    <div class="cont">
        <h2>SHOP ALL</h2>
        <div class="images">
            <div class="pr" style="padding-top: 64px" data-aos="flip-left" data-aos-duration="1500" data-aos-once="true">
                <img src="../assets/img/ShopALl1.png">
                <p style="margin-top: 64px">**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)</p>
                <span>$39.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
            <div class="pr" style="padding-top: 44px" data-aos="flip-up" data-aos-duration="1500" data-aos-once="true">
                <img src="@/assets/img/ShopALl2.png">
                <p style="margin-top: 64px">DETOX + BLOAT SUPPORT VALUE PACK</p>
                <span>$39.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
            <div>
                <img src="@/assets/img/ShopALl3.png" data-aos="flip-right" data-aos-duration="1500" data-aos-once="true">
                <p>PROBIOTICS: GUT HEALTH + BLOAT SUPPORT</p>
                <span>$39.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
            <div>
                <img src="../assets/img/ShopALl4.png" data-aos="flip-down" data-aos-duration="1500" data-aos-once="true">
                <p>APPLE CIDER VINEGAR</p>
                <span>$94.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
        </div>
        <router-link to="/shop">
            <button class="button" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">VIEW ALL PRODUCTS</button>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    width: 87.2%;
    margin: auto;
    text-align: center;
    margin-top: 82px;
    h2 {
        font-size: 2.25rem;
        text-align: center;
    }

    .button {
        background-color: transparent;
        border: 2px solid #f6623e;
        color: #000000;
        font-size: 1rem;
        text-align: center;
    }


    .images {
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-top: 58px;

        p {
            font-size: 0.875rem;
            line-height: 20px;
            font-weight: bold;
            margin-top: 22px;
        }

        span {
            color: #f6623e;
            font-size: 0.875rem;

            .pre {
                text-decoration: line-through;
                color: #828181;
                margin-left: 12px;
            }
        }

        .pr {
            width: 396px;
            background-color: #e8e8e8;
            height: 410px;
            text-align: center;
        }

    }

}
</style>
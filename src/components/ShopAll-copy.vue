<template>
    <div class="cont">
        <div class="images">
            <div class="shop-all" style="padding-top: 40px">
                <img src="../assets/img/ShopALl1.png">
                <p style="margin-top: 84px">**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)</p>
                <span>$39.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
            <div class="shop-all" style="padding-top: 40px">
                <img src="../assets/img/ShopALl2.png">
                <p style="margin-top: 64px">**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)</p>
                <span>$39.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
            <div class="shop-all">
                <img src="../assets/img/ShopALl3.png">
                <p>PROBIOTICS: GUT HEALTH + BLOAT SUPPORT</p>
                <span>$39.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
            <div class="shop-all">
                <img src="../assets/img/ShopALl4.png">
                <p>APPLE CIDER VINEGAR</p>
                <span>$39.95 NZD <span class="pre">$199.75 NZD</span></span>
            </div>
        </div>
        <button class="button">VIEW ALL PRODUCTS</button>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    width: 87.2%;
    margin: 82px auto;
    text-align: center;


    .images {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 58px;

        .shop-all {
            width: 400px;
            height: 400px;
            text-align: center;
            background-color: #e8e8e8;

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
        }
    }

    .button {
        background-color: transparent;
        border: 2px solid #f6623e;
        color: #000000;
        font-size: 1rem;
        text-align: center;
    }
}
</style>
<template>
    <div class="products-container">
        <h2>OUR PRODUCTS ARE</h2>
        <div class="products-images">
            <div data-aos="flip-left" data-aos-duration="1500" data-aos-once="true">
                <img src="@/assets/img/Products1.png">
                <p>MULTI-VITAMIN (3 MONTH SUPPLY)</p>
                <span>$39.95 NZD <span class="products-pre">$199.75 NZD</span></span>
            </div>
            <div class="products-pr" style="padding-top: 44px" data-aos="flip-up" data-aos-duration="1500" data-aos-once="true">
                <img src="@/assets/img/Products2.png">
                <p style="margin-top: 64px">VITAMIN C: IMMUNITY SUPPORT</p>
                <span>$39.95 NZD <span class="products-pre">$199.75 NZD</span></span>
            </div>
            <div class="products-pr" style="padding-top: 44px" data-aos="flip-right" data-aos-duration="1500" data-aos-once="true">
                <img src="@/assets/img/coll1.png">
                <p style="margin-top: 64px">MULTI-VITAMIN (3 MONTH SUPPLY)</p>
                <span>$39.95 NZD <span class="products-pre">$199.75 NZD</span></span>
            </div>
            <div data-aos="flip-down" data-aos-duration="1500" data-aos-once="true">
                <img src="../assets/img/Products3.png">
                <p>APPLE CIDER VINEGAR (3 MONTH SUPPLY)</p>
                <span>$94.95 NZD <span class="products-pre">$199.75 NZD</span></span>
            </div>
        </div>
        <router-link to="/shop">
            <button data-aos="zoom-out" data-aos-duration="1500" data-aos-once="true" class="button" >VIEW ALL PRODUCTS</button>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.products-container {
    width: 87.2%;
    height: 686px;
    margin: 136px auto;
    text-align: center;
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


    .products-images {
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

            .products-pre {
                text-decoration: line-through;
                color: #828181;
                margin-left: 12px;
            }
        }

        .products-pr {
            width: 396px;
            background-color: #e8e8e8;
            height: 410px;
            text-align: center;
        }

    }

}
</style>
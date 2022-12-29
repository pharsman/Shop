<template>
    <div class="cont">
        <img src="../assets/img/footer.png">
        <div class="flex">
            <div class="div">
                <div class="img">
                    <img src="../assets/img/Logo.png">
                </div>
                <p>Good health is important, so all of our products have been carefully designed to bring out the best
                    in you.</p>
            </div>
            <div class="div email">
                <h2>Keep In Touch</h2>
                <p>Subscribe to receive new product updates, be the first to know about sales, and more.</p>
                <div class="inp">
                    <input type="email" name="email" id="email" placeholder="Enter your email address">
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div class="div">
                <h2>MORE INFO</h2>
                <ul>
                    <li>Shipping & Delivery</li>
                    <li>Refund Policy</li>
                    <li>Partner Program</li>
                    <li>Wholesale Portal</li>
                    <li>You Buy, We Donate</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
        <footer>
            <div class="social">
                <ul>
                    <li><img src="../assets/icons/Facebook.svg"></li>
                    <li><img src="../assets/icons/Instagram.svg"></li>
                    <li><img src="../assets/icons/Twitter.svg"></li>
                    <li><img src="../assets/icons/Youtube.svg"></li>
                </ul>
            </div>
            <div class="footer">
                <p>© 2021, <span>GOOD4ME</span> . Powered by Shopify</p>
            </div>
            <div class="footer">
                <div class="img">
                    <img src="../assets/img/Payment.png">
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    margin-top: 136px;
    width: 100%;
    background-color: #fff8f6;

    img {
        width: 100%;
    }

    .flex {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-content: center;

        .div {
            width: 326px;
            text-align: center;
            margin-top: 56px;

            .img {
                width: 138px;
                margin: auto;
                height: 32px;

                img {
                    width: 100%;
                }
            }

            p {
                font-size: 1rem;
                line-height: 26px;
                margin-top: 10px;
                color: #454545
            }

            h2 {
                font-weight: 500;
                font-size: 1.625rem;
            }

            ul {
                margin: auto;
                width: 144px;
                text-align: left;

                li {
                    font-size: 1rem;
                    line-height: 33px;
                    color: #454545;
                }
            }
        }

        .email {
            width: 570px;

            p {
                width: 350px;
                margin: auto;
            }

            .inp {
                width: 570px;
                display: flex;
                margin-top: 32px;

                #email {
                    width: 100%;
                    background-color: #fff8f6;
                    outline: 0;
                    border: none;
                    border-bottom: 2px solid #000000;
                    color: #000000;
                    font-size: 1rem;
                    line-height: 26px;
                    padding-bottom: 6px;

                    &::placeholder {
                        color: #00000067;
                        font-size: 1rem;
                        padding-top: 10px;
                    }
                }

                button {
                    background-color: inherit;
                    border: none;
                    border-bottom: 2px solid #000000;
                    font-size: 1rem;
                    color: #f6623e;
                    text-align: center;
                    width: 86px;
                    cursor: pointer;
                }
            }

        }
    }

    footer {
        width: 1678px;
        height: 50px;
        border-top: 1px solid #828181;
        margin: auto;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: #000000;
            font-size: 16px;

            span {
                color: #f6623e;
                font-size: 1rem;
            }
        }

        .social {
            width: 150px;

            ul {
                display: flex;
                justify-content: space-between;
                align-content: center;
                margin-top: 20px;

                li:first-of-type {
                    width: 10px;
                }

                li {
                    width: 20px;
                    cursor: pointer;
                }

                li:last-of-type {
                    width: 28px;
                }
            }
        }
    }

}
</style>
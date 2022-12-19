<template>
    <header>
        <div class="header-top">
            <span class="msg">Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span>
            <div class="flex">
                <div class="header-top-right">
                    <span class="sign-in">Sign In </span>
                    <span class="slash">/</span>
                    <span class="register"> Register</span>
                </div>
                <span class="lang-box">
                    <div class="usa-icon">
                        <img src="@/assets/icons/usa.svg" alt="usg-icon">
                    </div>
                    <span class="lang">USD </span>
                    <span class="arrow"></span>
                </span>
            </div>
        </div>
        <div class="header-bottom">
            <div class="logo">
                <img src="../assets/img/Logo.png" alt="Logo">
            </div>
            <div class="menu">
                <ul>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>FAQ'S</li>
                    <li>STOCKISTS</li>
                    <li>WHOLESALE</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div class="icons">
                <span class="search"><img src="@/assets/icons/Search.svg"></span>
                <span class="shop">
                    <img src="@/assets/icons/Shop.svg">
                    <span class="numb">0</span>
                </span>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    height: 9.625rem;

    .header-top {
        background-color: #f6623e;
        width: 100%;
        height: 3.125rem;
        padding: 14px 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .msg {
            color: #ffffff;
            font-size: 1rem;
        }

        .flex {
            display: flex;
            width: 220px;
            justify-content: space-between;
            align-items: center;

            .header-top-right {
                padding-right: 14px;
                border-right: 1px solid #ffffff3d;

                .sign-in,
                .register,
                .slash {
                    color: #ffffff;
                    font-size: 1rem;
                    cursor: pointer;

                }
            }

            .lang-box {
                width: 72px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;

                .usa-icon {
                    width: 24px;
                    height: 16px;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }

                .lang {
                    color: #ffffff;
                    font-size: 1rem;
                }

                .arrow {
                    border-left: 0.25rem solid transparent;
                    border-right: 0.25rem solid transparent;
                    border-top: 0.25rem solid rgb(255, 255, 255);
                }
            }
        }

    }

    .header-bottom {
        background-color: #ffffff;
        width: 100%;
        height: calc(9.625rem - 3.125rem);
        padding: 28px 110px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            width: 200px;
            height: 48px;

            img {
                width: 100%;
            }
        }

        ul {
            width: 766px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li {
                font-size: 1.125rem;
                color: #454545;
                cursor: pointer;
            }
        }

        .icons {
            width: 62px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .search{
                cursor: pointer;
            }
            .shop {
                position: relative;
                cursor: pointer;
                .numb {
                    position: absolute;
                    top: 0;
                    left: 100%;
                    font-size: 0.625rem;
                    background-color: #f6623e;
                    border-radius: 50%;
                    color: #ffffff;
                    width: 12px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
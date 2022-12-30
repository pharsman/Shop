<template>
    <header>
        <div class="header-top" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
            <span class="msg">Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span>
            <div class="header-flex">
                <div class="header-top-right">
                    <span class="sign-in">Sign In </span>
                    <span class="slash">/</span>
                    <span class="register"> Register</span>
                </div>
                <div class="lang-box" @click="changeLang">
                    <div class="usa-icon">
                        <img src="@/assets/icons/usa.svg" alt="usg-icon">
                    </div>
                    <span class="current-lang">USD </span>
                    <span class="lang-arrow"></span>
                </div>
            </div>
        </div>
        <div class="header-bottom" data-aos="fade-down" data-aos-duration="1000" 
            data-aos-once="true">
            <div class="logo">
                <router-link to="/home">
                    <img src="../assets/img/Logo.png" alt="Logo">

                </router-link>
            </div>
            <div class="menu">
                <ul>
                    <li><router-link to="/home">HOME</router-link></li>
                    <li><router-link to="/shop">SHOP</router-link></li>
                    <li><router-link to="/FAQ">FAQ'S</router-link></li>
                    <li><router-link to="/stockists">STOCKISTS</router-link></li>
                    <li><router-link to="/wholesale">WHOLESALE</router-link></li>
                    <li><router-link to="/contact">CONTACT</router-link></li>
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

<script setup>
import { ref } from 'vue';

const showLang = ref(false)

const changeLang = () => {
    showLang.value = !showLang.value
}
</script>

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

        .header-flex {
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
                position: relative;

                .usa-icon {
                    width: 24px;
                    height: 16px;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }

                .current-lang {
                    color: #ffffff;
                    font-size: 1rem;
                }

                .lang-arrow {
                    border-left: 0.25rem solid transparent;
                    border-right: 0.25rem solid transparent;
                    border-top: 0.25rem solid rgb(255, 255, 255);
                }

                ul {
                    position: absolute;
                    background-color: #b94242;
                    border: 1px solid #000000;
                    border-radius: 10px;
                    border-top-left-radius: 0px;
                    padding: 4px 10px;

                    li {
                        color: #ffffff;
                        margin-top: 8px;

                        &:hover {
                            color: #eecdc5;
                        }
                    }
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

            a {
                color: #454545
            }

            a.router-link-active {
                color: #f6623e;
            }

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

            .search {
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
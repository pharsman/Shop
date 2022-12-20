<template>
    <div class="cont">
        <div class="serv">
            <img src="../assets/img/Plane.png">
            <p>Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean</p>
        </div>
        <div class="serv">
            <img src="../assets/img/Money.png">
            <p>Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean</p>
        </div>
        <div class="serv">
            <img style="width: 50px" src="../assets/img/Lock.png">
            <p>Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    margin-top: 182px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1194px;
    margin-left: calc(50% - 1194px / 2);

    .serv {
        width: 284px;
        height: 70px;
        text-align: center;

        img {
            width: 70px;
        }
        p{
            color:#828181;
            margin-top: 10px;
            font-size: 1rem;
        }
    }
}
</style>
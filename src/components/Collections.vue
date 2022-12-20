<template>
    <div class="cont">
        <div class="ad" style="padding: 44px 50px;">
            <img src="@/assets/img/coll1.png">
            <p style="margin-top: 44px">MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
        <div class="ad">
            <img src="../assets/img/coll2.png">
            <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
        <div class="ad" style="padding: 44px 50px;">
            <img src="@/assets/img/coll3.png">
            <p style="margin-top: 44px">MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
        <div class="ad">
            <img src="@/assets/img/coll4.png">
            <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    width: 1680px;
    margin-top: 36px;
    margin-left: calc(50% - 840px);
    text-align: center;
    display: flex;
    justify-content: space-between;

    .ad {
        width: 400px;
        height: 410px;
        background-color: #e8e8e8;

        p {
            font-size: 1.125rem;
            font-weight: bolder;
            font-family: 'Jost' sans-serif;
        }
    }
}
</style>

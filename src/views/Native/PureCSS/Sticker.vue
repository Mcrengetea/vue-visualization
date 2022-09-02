<template>
    <div class="box animation">
        <div class="reveal circle_wrapper">
            <div class="circle">Hello!</div>
        </div>
        <div class="sticky animation">
            <div class="front circle_wrapper animation">
                <div class="circle animation"></div>
            </div>
        </div>
        <h4>撕掉我！</h4>
        <div class="sticky animation">
            <div class="back circle_wrapper animation">
                <div class="circle animation"></div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
</script>
    
<style lang="scss" scoped>
.box {
    position: relative;
    width: 180px;
    height: 180px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    backface-visibility: hidden;
    cursor: pointer;

    .sticky {
        transform: rotate(45deg);
    }

    &:hover .sticky {
        transform: rotate(10deg);
    }

    .sticky {
        position: absolute;
        top: 0;
        left: 0;
        width: 180px;
        height: 180px;
    }

    .reveal>.circle {
        box-shadow: 0 1px 0px rgba(0, 0, 0, .15);
        font-weight: 200;
        line-height: 140px;
        text-align: center;
        background: #fafafa;
    }

    .circle_wrapper {
        position: absolute;
        width: 180px;
        height: 180px;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }

    .circle {
        position: absolute;
        width: 140px;
        height: 140px;
        margin: 20px;
        border-radius: 999px;
    }

    .back {
        height: 10px;
        top: 30px;

        .circle {
            margin-top: -130px;
            background-color: #fbec3f;
            background-image: -webkit-linear-gradient(bottom, rgba(251, 236, 63, .0), rgba(255, 255, 255, .8));
        }
    }

    &:hover .back {
        height: 90px;
        top: 110px;
    }

    &:hover .back .circle {
        margin-top: -50px;
    }

    .front {
        height: 150px;
        bottom: 0;
        top: auto;
        -webkit-box-shadow: 0 -140px 20px -140px rgba(0, 0, 0, .3);

        .circle {
            margin-top: -10px;
            background: #fbec3f;
            background-image: -webkit-linear-gradient(bottom, rgba(251, 236, 63, .0) 75%, #f7bb37 95%);
            background-image: -moz-linear-gradient(bottom, rgba(251, 236, 63, .0) 75%, #f7bb37 95%);
            background-image: linear-gradient(bottom, rgba(251, 236, 63, .0) 75%, #f7bb37 95%);
        }
    }

    &:hover .front {
        height: 70px;
        -webkit-box-shadow: 0 -60px 10px -60px rgba(0, 0, 0, .1);
    }

    h4 {
        font-weight: 200;
        text-align: center;
        position: absolute;
        width: 180px;
        height: 140px;
        line-height: 140px;
        transition: opacity 50ms linear 400ms;
    }

    &:hover h4 {
        opacity: 0;
        transition: opacity 50ms linear 300ms;
    }

    &:hover .front .circle {
        margin-top: -90px;
        background-color: #e2d439;
        background-position: 0 100px;
    }
}

.animation {
    transition: all 750ms ease-in-out;
}
</style>
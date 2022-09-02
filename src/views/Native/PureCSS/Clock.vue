<template>
    <div class="clock">
        <div class="top"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="left"></div>
        <div class="center"></div>
        <div class="shadow"></div>
        <div class="hour"></div>
        <div class="minute"></div>
        <div class="second"></div>
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.clock {
    position: relative;
    height: 200px;
    width: 200px;
    background: white;
    box-sizing: border-box;
    border-radius: 100%;
    border: 10px solid #67D2C8;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    .top {
        position: absolute;
        width: 3px;
        height: 8px;
        background: #262626;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .right {
        position: absolute;
        width: 8px;
        height: 3px;
        background: #262626;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto 0;
    }

    .bottom {
        position: absolute;
        width: 3px;
        height: 8px;
        background: #262626;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
    }

    .left {
        position: absolute;
        width: 8px;
        height: 3px;
        background: #262626;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto 0;
    }

    .center {
        height: 6px;
        width: 6px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #262626;
        border-radius: 100%;
    }

    .shadow {
        height: 200px;
        width: 200px;
        position: absolute;
        left: 60px;
        top: 60px;
        transform: rotate(135deg);
        background: linear-gradient(transparent, rgba(#000, 0.1));
    }

    .hour {
        width: 3px;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        //animation: time 86400s infinite linear;
        animation: time 60s infinite linear;

        &:before {
            position: absolute;
            content: "";
            background: #000000;
            height: 40px;
            width: 3px;
            top: 50px;
        }
    }

    .minute {
        width: 2px;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        //animation: time 3600s infinite linear;
        animation: time 30s infinite linear;

        &:before {
            position: absolute;
            content: "";
            background: #5a5a5a;
            height: 45px;
            width: 2px;
            top: 45px;
        }
    }

    .second {
        width: 1px;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        //animation: time 60s infinite linear;
        animation: time 15s infinite linear;

        &:before {
            position: absolute;
            content: "";
            background: #fd1111;
            height: 60px;
            width: 1px;
            top: 30px;
        }
    }
}

@keyframes time {
    to {
        transform: rotate(360deg);
    }
}
</style>
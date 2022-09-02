<template>
    <div class="box">
        <h1>
            <span>c</span>
            <span>u</span>
            <span>b</span>
            <span>i</span>
            <span>c</span>
            <br>
            <span>w</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
        </h1>
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;

    h1 {
        cursor: default;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        margin: auto;
        display: block;
        text-align: center;

        span {
            position: relative;
            top: -80px;
            display: inline-block;
            font-size: 120px;
            color: #fff;
            text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
                0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
                0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
        }
    }
}

::selection {
    background: transparent;
}
</style>
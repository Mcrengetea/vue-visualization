<template>
    <div class="box"></div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    // 密铺图案尺寸
    --s: 200px;
    --c: #fff;
    --_g: #0000 8%, var(--c) 0 17%, #0000 0 58%;
    background:
        linear-gradient(135deg, #0000 20.5%, var(--c) 0 29.5%, #0000 0) 0 calc(var(--s)/4),
        linear-gradient(45deg, var(--_g)) calc(var(--s)/2) 0,
        linear-gradient(135deg, var(--_g), var(--c) 0 67%, #0000 0),
        linear-gradient(45deg, var(--_g), var(--c) 0 67%, #0000 0 83%, var(--c) 0 92%, #0000 0),
        #CCFF99;
    background-size: var(--s) var(--s);
}
</style>
<template>
    <div class="not-found">
        <el-empty description="页面找不到了。。。" />
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.not-found {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 4px;
    border: 1px solid var(--el-border-color);
}
</style>
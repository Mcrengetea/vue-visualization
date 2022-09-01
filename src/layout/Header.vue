<template>
    <header class="app-header-in">
        <h1 @click="toHome">前端可视化</h1>
    </header>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';

const router = useRouter();

// 回到首页
function toHome() {
    router.push('/')
}
</script>

<style lang="scss" scoped>
.app-header-in {
    height: 60px;
    display: flex;
    display: -webkit-flex;
    align-items: center;

    h1 {
        margin: 0;
        color: #fff;
        cursor: pointer;
    }
}
</style>
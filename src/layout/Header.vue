<template>
    <header class="app-header-in">
        <h1 @click="toHome">前端可视化</h1>
        <el-link href="https://github.com/Mcrengetea/vue-visualization" :underline="false">
            <img src="/image/github.png" alt="">
        </el-link>
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
    justify-content: space-between;

    h1 {
        margin: 0;
        color: #fff;
        cursor: pointer;
    }
    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
}
</style>
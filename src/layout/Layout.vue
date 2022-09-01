<template>
    <el-container>
        <el-aside width="auto">
            <Aside />
        </el-aside>
        <el-container>
            <el-header class="app-layout-header">
                <Header />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import Aside from './Aside.vue';
import Header from './Header.vue';

</script>

<style lang="scss" scoped>
.el-aside {
    height: 100vh;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border-right: 1px solid var(--el-menu-border-color);
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}

.app-layout-header {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
}
</style>
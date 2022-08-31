<template>
    <el-container class="main">
        <Aside />
        <el-container>
            <el-header class="header">
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
.main {
    width: 100%;
    height: 100%;
}

.header {
    background-color: aqua;
}
</style>
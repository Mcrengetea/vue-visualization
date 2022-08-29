<template>
    <el-container class="main">
        <el-aside width="200px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import Aside from './Aside.vue'
import Header from './Header.vue'

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
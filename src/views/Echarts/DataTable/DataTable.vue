<template>
    <el-scrollbar>
        <el-card class="data-table-box">
            <TopView />
            <MiddleView />
            <BottomView />
        </el-card>
    </el-scrollbar>
</template>

<script setup lang='ts'>
import TopView from './components/TopView/TopView.vue';
import MiddleView from './components/MiddleView/MiddleView.vue';
import BottomView from './components/BottomView/BottomView.vue';
</script>

<style lang="scss" scoped>
.data-table-box {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
</style>
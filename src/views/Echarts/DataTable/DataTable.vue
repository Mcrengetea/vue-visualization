<template>
    <el-scrollbar>
        <el-card id="dataReportDev">
            <TopView />
            <SalseView />
            <BottomView />
        </el-card>
    </el-scrollbar>
</template>

<script setup lang='ts'>
import TopView from './components/TopView/TopView.vue';
import SalseView from './components/SalseView/SalseView.vue';
import BottomView from './components/BottomView/BottomView.vue';
</script>

<style lang="scss" scoped>
#dataReportDev {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
}
</style>
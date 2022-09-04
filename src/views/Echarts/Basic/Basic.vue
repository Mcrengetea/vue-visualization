<template>
    <Chart :option="option" width="600px" height="300px" />
</template>

<script setup lang='ts'>
import { reactive } from 'vue';

//#region  echarts配置项
const option = reactive({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
});
//#endregion
</script>

<style lang="scss" scoped>
</style>
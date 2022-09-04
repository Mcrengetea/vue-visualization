<template>
    <Chart :option="option" width="600px" height="500px" :dynamic="run" :dynamicData="dynamicData" />
</template>

<script setup lang='ts'>
import { reactive } from 'vue';

//#region  DynamicChart
// 构造数据
const data: number[] = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
}

const dynamicData: any = reactive({
    series: [{
        type: 'bar',
        data
    }]
});

// echarts配置项
const option: any = {
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
    },
    series: [
        {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    legend: {
        show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
};

// 动态生成数据并渲染
function run() {
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 2000);
        } else {
            data[i] += Math.round(Math.random() * 200);
        }
    }
}
//#endregion
</script>

<style lang="scss" scoped>
</style>
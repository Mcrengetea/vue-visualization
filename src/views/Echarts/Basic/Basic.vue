<template>
    <div class="echarts-box" ref="echartsBox"></div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import echarts from '@/utils/echarts/echarts';

//#region  echarts
// 获取echarts渲染节点
const echartsBox = ref<HTMLElement>();
let chart: any = null;
// echarts配置项
const option = {
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
}

// 渲染函数
function chartInit() {
    // 指定echarts容器元素
    chart = echarts.init(echartsBox.value!) // 深色主题
    // 设置图表
    chart.setOption<echarts.EChartsOption>(option);
}

onMounted(() => {
    // 初始化echarts
    chartInit();
});

onBeforeUnmount(() => {
    // 销毁echarts实例
    chart.dispose();
});
//#endregion
</script>

<style lang="scss" scoped>
.echarts-box {
    width: 600px;
    height: 300px;
    background-color: #fff;
}
</style>
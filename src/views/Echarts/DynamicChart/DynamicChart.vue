<template>
    <div class="echarts-box" ref="echartsBox"></div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import echarts from '@/utils/echarts/echarts';

//#region  DynamicChart
// 获取echarts渲染节点
const echartsBox = ref<HTMLElement>();
let chart: any = null;

// 构造数据
const data: number[] = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
}

let timer: any = null;

// echarts配置项
const option = {
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

// 渲染函数
function chartInit() {
    // 指定echarts容器元素
    chart = echarts.init(echartsBox.value!);
    // 设置图表
    chart.setOption<echarts.EChartsOption>(option);
}

// 动态生成数据并渲染
function run() {
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 2000);
        } else {
            data[i] += Math.round(Math.random() * 200);
        }
    }
    chart.setOption<echarts.EChartsOption>({
        series: [
            {
                type: 'bar',
                data
            }
        ]
    });
}

onMounted(() => {
    // 初始化echarts
    chartInit();
    // 创建定时器
    timer = setInterval(function () {
        run();
    }, 3000);
});

onBeforeUnmount(() => {
    // 销毁echarts实例
    chart.dispose();
    // 销毁定时器
    clearInterval(timer);
});
//#endregion
</script>

<style lang="scss" scoped>
.echarts-box {
    width: 600px;
    height: 500px;
    background-color: #fff;
}
</style>
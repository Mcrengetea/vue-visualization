<template>
    <div :style="{ width: width, height: height }" class="chart" ref="chartDom"></div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount, PropType } from 'vue';
import echarts from '@/utils/echarts/echarts';

const props = defineProps({
    option: {
        type: Object,
        required: true
    },
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '100%'
    },
    dynamic: {
        type: Function,
        default: null
    },
    dynamicData: {
        type: Object,
        default: null
    }
})

//#region  echarts
// 获取echarts渲染节点
const chartDom = ref<HTMLElement>();
let chart: any = null;

// 渲染函数
function chartInit() {
    // 指定echarts容器元素
    chart = echarts.init(chartDom.value!);
    // 设置图表
    chart.setOption(props.option);
}

// 初始化定时器
let timer: any = null;

onMounted(() => {
    // 初始化echarts
    chartInit();
    // 开启定时器
    if (props.dynamic !== null) {
        timer = setInterval(function () {
            props.dynamic();
            chart.setOption(props.dynamicData);
        }, 3000);
    }
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
.chart {
    background-color: #fff;
}
</style>
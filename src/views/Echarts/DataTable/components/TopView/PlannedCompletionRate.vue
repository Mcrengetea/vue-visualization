<!-- 计划完成率 -->
<template>
	<CommonCard title="计划完成率" value="98.45%">
		<template #default>
			<Chart :option="option" />
		</template>
		<template #footer>
			<span>昨日完成率</span>
			<span class="emphasis">96.67%</span>
		</template>
	</CommonCard>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import echarts from '@/utils/echarts/echarts';
import CommonCard from '../CommonCard/CommonCard.vue';

//#region echarts配置项
const option = reactive({
	xAxis: {
		type: 'category',
		show: false,
		boundaryGap: false // 默认在x轴两侧有间距，设置成false就取消间距
	},
	yAxis: {
		show: false
	},
	series: [
		{
			type: 'line',
			data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
			// 用面积的方式进行展示
			areaStyle: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{ offset: 0, color: "rgba(255, 191, 0, 1)" },
						{ offset: 1, color: "rgba(255, 191, 0, 0.1)" }
					]
				)
			},
			// 设置线的样式
			lineStyle: {
				width: 0
			},
			// 设置点的样式
			itemStyle: {
				opacity: 0
			},
			// 平滑展示
			smooth: true,
		}
	],
	// 布局位置
	grid: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	}
});
//#endregion
</script>

<style lang="scss" scoped>
.emphasis {
	margin-left: 5px;
	color: #333;
	font-weight: 700;
}
</style>
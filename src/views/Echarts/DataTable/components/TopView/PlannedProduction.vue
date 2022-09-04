<!-- 计划产量 -->
<template>
	<CommonCard title="计划产量" value="220件">
		<template #default>
			<Chart :option="option" />
		</template>
		<template #footer>
			<span>昨日计划产量</span>
			<span class="emphasis">210件</span>
		</template>
	</CommonCard>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import echarts from '@/utils/echarts/echarts';
import CommonCard from '../CommonCard/CommonCard.vue';

//#region echarts配置项
const option = reactive({
	color: ['#3398DB'],
	xAxis: {
		type: 'category',
		data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
		show: false
	},
	yAxis: {
		show: false
	},
	series: [
		{
			type: 'bar',
			data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
			barWidth: '60%', // 控制柱状图的宽度
			itemStyle: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{ offset: 0, color: '#aaffff' },
						{ offset: 1, color: '#188df0' }
					]
				)
			}
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
<!-- 本日实时产量 -->
<template>
	<CommonCard title="本日实时产量" value="36件">
		<template #default>
			<Chart :option="option" />
		</template>
		<template #footer>
			<span>实时完成率</span>
			<span class="emphasis">16.36%</span>
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
		type: 'value',
		show: false
	},
	yAxis: {
		type: 'category',
		show: false
	},
	series: [
		// 两份数据的stack的值一样的时候，就会合并在一起
		{
			type: 'bar',
			data: [100],
			stack: '总量',
			barWidth: 10,
			itemStyle: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 1, 1,
					[
						{ offset: 0, color: '#45cca6' },
						{ offset: 1, color: '#45ffa6' }
					]
				)
			}
		},
		{
			type: 'bar',
			data: [250],
			stack: '总量',
			barWidth: 10,
			itemStyle: {
				color: '#ccc'
			}
		},
		{
			// 自定义三角形
			type: 'custom',
			data: [100],
			stack: '总量',
			renderItem: (params: any, api: { value: (arg0: number) => any; coord: (arg0: any[]) => any; }) => {
				const value = api.value(0) // 获取第一个元素的值
				const endPoint = api.coord([value, 0]) // 获取第一个元素的坐标系(第一个参数是x轴，第二个参数是y轴，这个案例的y轴是0)
				return {
					type: 'group', // 组
					position: endPoint,
					children: [
						{
							type: 'path',
							shape: {
								d: 'M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z',
								x: -5, // x轴偏移量
								y: -18, // y轴偏移量
								width: 10, // 宽
								height: 10, // 高
								layout: 'cover'
							},
							style: { // 样式
								fill: '#45ee46', // 填充色
							}
						},
						{
							type: 'path',
							shape: {
								d: 'M131.974144 648.752128c-30.418944 30.430208-6.474752 84.301824 34.917376 84.301824L858.258432 733.053952c42.899456 0 65.325056-53.85216 34.916352-84.301824L547.487744 302.569472c-19.930112-19.974144-49.374208-19.95264-69.327872 0L131.974144 648.752128z',
								x: -5, // x轴偏移量
								y: 8, // y轴偏移量
								width: 10, // 宽
								height: 10, // 高
								layout: 'cover'
							},
							style: { // 样式
								fill: '#45ee46', // 填充色
							}
						}
					]
				}
			}
		},
	],
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
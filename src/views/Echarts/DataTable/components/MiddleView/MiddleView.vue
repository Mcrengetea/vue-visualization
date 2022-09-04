<template>
	<el-card shadow="hover" :body-style="cardBody">
		<template #header>
			<div class="menu-bar">
				<el-menu mode="horizontal" :default-active="activeIndex" @select="onMenuSelect" class="menu-left">
					<el-menu-item index="1">产量</el-menu-item>
					<el-menu-item index="2">库存量</el-menu-item>
				</el-menu>
				<div class="menu-right">
					<el-radio-group v-model="radioSelect" size="small" @change="onRadioSelect">
						<el-radio-button label="本周"></el-radio-button>
						<el-radio-button label="月度"></el-radio-button>
						<el-radio-button label="季度"></el-radio-button>
						<el-radio-button label="年度"></el-radio-button>
					</el-radio-group>
					<el-date-picker class="production-date-picker" size="small" v-model="datePicker.date"
						type="daterange" unlink-panels start-placeholder="开始日期" end-placeholder="结束日期"
						:shortcuts="datePicker.shortcuts">
					</el-date-picker>
				</div>
			</div>
		</template>
		<template #default>
			<div class="main">
				<Chart :option="option" />
				<div class="rank">
					<div class="rank-title">产线产量排行榜</div>
					<ul class="rank-list">
						<li class="rank-list-item" v-for="(item, index) in rankData" :key="item.no">
							<div :class="['rank-list-item-no', +item.no <= 3 ? 'no' + (index + 1) : '']">
								{{ item.no }}
							</div>
							<div class="rank-list-item-name">{{ item.name }}</div>
							<div class="rank-list-item-yield">{{ item.yield }}</div>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</el-card>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue";
import echarts from '@/utils/echarts/echarts';

const cardBody = reactive({ padding: '0 0 20px 0' });

//#region 菜单栏切换
const activeIndex = ref("1");

function onMenuSelect(index: string) {
	activeIndex.value = index;
}
//#endregion

//#region 日期切换
const radioSelect = ref("本周");

function onRadioSelect() {
	console.log(radioSelect.value);
}

const datePicker = reactive({
	date: "",
	shortcuts: [
		{
			text: "最近一周",
			value: () => {
				const end = new Date();
				const start = new Date();
				start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
				return [start, end];
			},
		},
		{
			text: "最近一个月",
			value: () => {
				const end = new Date();
				const start = new Date();
				start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
				return [start, end];
			},
		},
		{
			text: "最近三个月",
			value: () => {
				const end = new Date();
				const start = new Date();
				start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
				return [start, end];
			},
		},
	],
});
//#endregion

//#region  echarts数据
const option = reactive({
	title: {
		text: "年度产量",
		textStyle: {
			fontSize: 12,
			color: "#666",
		},
		top: 20,
		left: 25,
	},
	xAxis: {
		type: "category",
		data: ["2012年", "2013年", "2014年", "2015年", "2016年", "2017年", "2018年", "2019年", "2020年", "2021年"],
		axisTick: {
			alignWithLabel: true,
			lineStyle: {
				color: "#999",
			},
		},
		axisLine: {
			lineStyle: {
				color: "#999",
			},
		},
		axisLabel: {
			color: "#333",
		},
	},
	yAxis: {
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		splitLine: {
			lineStyle: {
				type: "dotted",
				color: "#eee",
			},
		},
	},
	series: [
		{
			type: "bar",
			barWidth: "35%",
			data: [32352, 35385, 42841, 49754, 44722, 52125, 58722, 63232, 61373, 72452],
		},
	],
	color: new echarts.graphic.LinearGradient(
		0, 0, 0, 1,
		[
			{ offset: 0, color: "#fa709a" },
			{ offset: 1, color: "#fee140" }
		]
	),
	emphasis: {
		itemStyle: {
			color: new echarts.graphic.LinearGradient(
				0, 0, 0, 1,
				[
					{ offset: 0, color: "#f83600" },
					{ offset: 1, color: "#f9d423" }
				]
			),
		},
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	grid: {
		top: 70,
		bottom: 50,
		left: 60,
		right: 60,
	},
});
//#endregion

//#region 排行榜数据
const rankData = ref([
	{
		no: 1,
		name: "L3",
		yield: "10,312",
	},
	{
		no: 2,
		name: "L5",
		yield: "10,023",
	},
	{
		no: 3,
		name: "L2",
		yield: "9,975",
	},
	{
		no: 4,
		name: "L1",
		yield: "9,910",
	},
	{
		no: 5,
		name: "L7",
		yield: "9,864",
	},
	{
		no: 6,
		name: "L4",
		yield: "9,844",
	},
	{
		no: 7,
		name: "L6",
		yield: "9,789",
	},
]);
//#endregion
</script>

<style lang="scss" scoped>
.menu-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: solid 1px var(--el-menu-border-color);

	.menu-left {
		padding-left: 20px;
		border-bottom: none;

		.el-menu-item {
			height: 50px;
			line-height: 50px;
			margin: 0 20px;
		}
	}

	.menu-right {
		margin-right: 20px;
		height: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		:deep(.production-date-picker) {
			margin-left: 20px;
		}
	}
}

.main {
	display: flex;
	height: 270px;

	.chart-dom {
		flex: 0 0 70%;
		width: 70%;
		height: 100%;
	}

	.rank {
		flex: 1;
		width: 100%;
		height: 100%;
		overflow: hidden;

		.rank-title {
			margin-top: 20px;
			font-size: 12px;
			color: #666;
			font-weight: 500;
		}

		.rank-list {
			margin-top: 15px;
			padding-left: 0;

			&-item {
				display: flex;
				align-items: center;
				font-size: 12px;
				height: 20px;
				padding: 6px 20px 6px 0;

				&-no {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 20px;
					height: 20px;
					color: #333;

					&.no1 {
						background: #ea5455;
						border-radius: 50%;
						color: #fff;
						font-weight: 500;
					}

					&.no2 {
						background: #f07b3f;
						border-radius: 50%;
						color: #fff;
						font-weight: 500;
					}

					&.no3 {
						background: #ffd460;
						border-radius: 50%;
						color: #fff;
						font-weight: 500;
					}
				}

				&-name {
					margin-left: 10px;
					color: #333;
				}

				&-yield {
					flex: 1;
					text-align: right;
				}
			}
		}
	}
}

:deep(.el-card__header) {
	border-bottom: none;
	padding: 0;
}
</style>
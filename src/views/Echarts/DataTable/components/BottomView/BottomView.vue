<template>
	<el-row :gutter="20" class="bottom-view">
		<el-col :lg="12" :md="24" :sm="24" :xs="24" class="bottom-view-item">
			<el-card shadow="hover">
				<template #header>
					<div class="card-title">客户关系</div>
				</template>
				<template #default>
					<div class="chart">
						<el-row :gutter="20">
							<el-col :span="12">
								<Chart :option="customerTotalOption" height="100px" />
							</el-col>
							<el-col :span="12">
								<Chart :option="customerOrderOption" height="100px" />
							</el-col>
						</el-row>
						<div class="table">
							<el-table :data="tableData">
								<el-table-column prop="rank" label="排名"></el-table-column>
								<el-table-column prop="keyWrod" label="地区"></el-table-column>
								<el-table-column prop="count" label="客户数量"></el-table-column>
								<el-table-column prop="users" label="客户订单量"></el-table-column>
							</el-table>
							<el-pagination layout="prev, pager, next" :total="50" :page-size="4" background
								class="pagination" @current-change="onPageChange" />
						</div>
					</div>
				</template>
			</el-card>
		</el-col>
		<el-col :lg="12" :md="24" :sm="24" :xs="24" class="bottom-view-item">
			<el-card shadow="hover">
				<template #header>
					<div class="card-title">
						<div class="title">分类生产占比</div>
						<div class="radio">
							<el-radio-group v-model="productInfo.radioSelect" size="small">
								<el-radio-button v-for="btnName in productInfo.radioTypes" :key="btnName"
									:label="btnName"></el-radio-button>
							</el-radio-group>
						</div>
					</div>
				</template>
				<template #default>
					<div class="chart">
						<Chart :option="categoryOptions.options" />
					</div>
				</template>
			</el-card>
		</el-col>
	</el-row>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import echarts from '@/utils/echarts/echarts';

//#region 客户关系
// 客户总数图表配置项
const customerTotalOption = reactive({
	title: {
		text: '客户总数',
		textStyle: {
			color: '#888',
			fontSize: 14
		},
		subtext: '238',
		subtextStyle: {
			color: '#333',
			fontSize: 20,
			fontWeight: 'bold'
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false
	},
	yAxis: {
		show: false
	},
	series: [{
		type: 'line',
		data: [128, 328, 168, 625, 154, 325, 168, 457, 669, 467],
		areaStyle: {
			color: new echarts.graphic.LinearGradient(
				0, 0, 0, 1,
				[
					{ offset: 0, color: '#ffecd2' },
					{ offset: 1, color: '#fcb69f' }
				]
			)
		},
		lineStyle: {
			color: '#fcb69f'
		},
		itemStyle: {
			opacity: 0
		},
		smooth: true
	}],
	grid: {
		top: 50,
		right: 0,
		bottom: 0,
		left: 0
	}

});

// 客户订单量图表配置项
const customerOrderOption = reactive({
	title: {
		text: '客户订单量',
		textStyle: {
			color: '#888',
			fontSize: 14
		},
		subtext: '68,782',
		subtextStyle: {
			color: '#333',
			fontSize: 20,
			fontWeight: 'bold'
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false
	},
	yAxis: {
		show: false
	},
	series: [{
		type: 'line',
		data: [128, 328, 168, 625, 154, 325, 168, 457, 669, 467],
		areaStyle: {
			color: new echarts.graphic.LinearGradient(
				0, 0, 0, 1,
				[
					{ offset: 0, color: '#d4fc79' },
					{ offset: 1, color: '#96e6a1' }
				]
			)
		},
		lineStyle: {
			color: '#96e6a1'
		},
		itemStyle: {
			opacity: 0
		},
		smooth: true
	}],
	grid: {
		top: 50,
		right: 0,
		bottom: 0,
		left: 0
	}
});

// 地区客户表格
const tableData = reactive([
	{ id: 1, rank: 1, keyWrod: '上海', count: 11, users: 7000 },
	{ id: 2, rank: 2, keyWrod: '深圳', count: 9, users: 5560 },
	{ id: 3, rank: 3, keyWrod: '广州', count: 9, users: 3450 },
	{ id: 4, rank: 4, keyWrod: '北京', count: 8, users: 2220 }
]);

// 翻页
function onPageChange(page: any) {
	console.log(page)
}
//#endregion

//#region 分类生产占比
// 产品分类生产占比
const productInfo = reactive({
	radioSelect: '品类',
	radioTypes: ['品类', '商品']
});

// 品类分布图表数据
const mockData = [
	{ legendname: '车削类', value: 32512, percent: '47.10', itemStyle: { color: '#f79256' }, name: '车削类 | 47.10%' },
	{ legendname: '钣金类', value: 25323, percent: '36.69', itemStyle: { color: '#7dcfb6' }, name: '钣金类 | 36.69%' },
	{ legendname: '铸造类', value: 11192, percent: '16.21', itemStyle: { color: '#1d4e89' }, name: '铸造类 | 16.21%' }
];

// 品类分布图表配置项
const categoryOptions = reactive({
	options: {
		title: [
			{
				text: '品类分布',
				textStyle: {
					fontSize: 14,
					color: '#666'
				},
				top: 20,
				left: 20
			},
			{
				text: '累计订单量',
				textStyle: {
					fontSize: 14,
					color: '#999'
				},
				subtextStyle: {
					fontSize: 28,
					color: '#333'
				},
				subtext: '320',
				x: '34.5%',
				y: '42.5%',
				textAlign: 'center'
			}
		],
		series: [{
			name: '品类分布',
			type: 'pie',
			data: mockData,
			label: {
				show: true,
				position: 'outside',
				formatter: (params: { data: { legendname: any; }; }) => {
					return params.data.legendname;
				}
			},
			center: ['35%', '50%'],
			radius: ['45%', '60%'],
			labelLine: {
				length: 5,
				length2: 3,
				smooth: true
			},
			clockwise: false,
			itemStyle: {
				borderWidth: 4,
				borderColor: '#fff'
			}
		}],
		legend: {
			type: 'scroll',
			orient: 'vertical',
			height: 250,
			top: 'middle',
			left: '70%',
			textStyle: {
				color: '#8c8c8c'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: (params: { seriesName: any; marker: any; data: { legendname: any; value: any; percent: any; }; }) => {
				const str = `${params.seriesName}<br />${params.marker} ${params.data.legendname}<br />数量：${params.data.value}<br />占比：${params.data.percent}%`;
				return str;
			}
		}
	}
});
//#endregion
</script>

<style lang="scss" scoped>
.bottom-view {
	display: flex;
	margin-top: 20px;

	&-item {
		flex: 1;

		:deep(.el-card__header) {
			padding: 0 20px;
		}

		.card-title {
			display: flex;
			align-items: center;
			height: 60px;
			box-sizing: border-box;

			font: {
				size: 14px;
				weight: 500;
			}

			.radio {
				flex: 1;
				display: flex;
				justify-content: flex-end;
			}
		}

		.chart {
			display: flex;
			flex-direction: column;
			height: 452px;
		}

		.table {
			flex: 1;
			margin-top: 20px;

			.pagination {
				margin-top: 16px;
				text-align: center;
			}
		}
	}
}
</style>
<template>
	<div class="top-view">
		<el-row :gutter="20">
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top-view-item">
				<el-card shadow="hover">
					<CumulativeProduction />
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top-view-item">
				<el-card shadow="hover">
					<PlannedProduction />
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top-view-item">
				<el-card shadow="hover">
					<PlannedCompletionRate />
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top-view-item">
				<el-card shadow="hover">
					<TodayProduction />
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang='ts'>
import CumulativeProduction from './CumulativeProduction.vue'
import PlannedProduction from './PlannedProduction.vue'
import PlannedCompletionRate from './PlannedCompletionRate.vue'
import TodayProduction from './TodayProduction.vue'
</script>

<style lang="scss" scoped>
.top-view-item {
	margin-bottom: 20px;
}
</style>
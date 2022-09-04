<!-- 累计产量 -->
<template>
	<CommonCard title="累计产量" value="591,512件">
		<template #default>
			<div class="compare-box">
				<div class="compare">
					<span>日同比</span>
					<span class="emphasis">3.51%</span>
					<div class="increase"></div>
				</div>
				<div class="compare">
					<span>月同比</span>
					<span class="emphasis">11.26%</span>
					<div class="decrease"></div>
				</div>
			</div>
		</template>
		<template #footer>
			<span>昨日产量</span>
			<span class="emphasis">203件</span>
		</template>
	</CommonCard>
</template>

<script setup lang='ts'>
import CommonCard from '../CommonCard/CommonCard.vue';
</script>

<style lang="scss" scoped>
.compare-box {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.compare {
		display: flex;
		align-items: center;
		font-size: 12px;
		margin-top: 3px;
		color: #666;
	}

	.increase {
		width: 0;
		height: 0;

		border: {
			width: 4px;
			color: transparent transparent red transparent;
			style: solid;
		}

		margin: 0 0 4px 5px;
	}

	.decrease {
		width: 0;
		height: 0;

		border: {
			width: 4px;
			color: green transparent transparent transparent;
			style: solid;
		}

		margin: 4px 0 0 5px;
	}
}

.emphasis {
	margin-left: 5px;
	color: #333;
	font-weight: 700;
}
</style>
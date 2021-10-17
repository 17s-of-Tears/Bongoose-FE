<template>
	<div class="aside-hash">
		<span>실시간 #</span>
		<div class="card hash-card">
			<div v-for="index in 3" :key="index" class="hash-box">
				<div class="hash-rank">{{ index }}위</div>
				<div class="hash-item">
					<span># 해시태그{{ index }}</span>
					<span>{{ 100 - index }}회</span>
				</div>
				<hr v-if="!(index === 3)" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.aside-hash {
	display: flex;
	flex-direction: column;
	gap: 20px;
	> span {
		color: $white;
		@include rem(25);
	}
	.hash-card {
		width: 100%;
		border-radius: 15px;
		padding: 20px;
		.hash-box {
			display: flex;
			flex-direction: column;
			.hash-rank {
				@include rem(20);
			}
			.hash-item {
				display: flex;
				justify-content: space-between;
				@include rem(18);
				:nth-child(1) {
					color: $primary;
				}
				:nth-child(2) {
					color: $gray-600;
				}
			}
		}
	}
	hr {
		color: $primary;
		height: 2px;
	}
}
</style>

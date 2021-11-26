<template>
	<div v-for="index in 5" :key="index">
		<div class="user-card card">
			<div class="skeleton-user">
				<div class="skeleton-user-img"></div>
				<p class="placeholder-glow skeleton-user-info">
					<span
						class="placeholder"
						:style="`width: ${randomWidth(0)}px`"
					></span>
					<span
						class="placeholder"
						:style="`width: ${randomWidth(0)}px`"
					></span>
				</p>
			</div>
			<div class="skeleton-content">
				<p class="placeholder-glow">
					<span
						v-for="index in 3"
						:key="index"
						class="placeholder"
						:style="`width: ${randomWidth(300)}px`"
					></span>
				</p>
				<div class="skeleton-content-img"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		// 랜덤 너비 계산하는 메소드
		randomWidth(num) {
			const width = Math.floor(Math.random() * 300 + num)
			return width
		}
	}
}
</script>

<style lang="scss" scoped>
.user-card {
	margin-top: 40px;
	width: 100%;
	padding: 30px;
	display: flex;
	gap: 30px;
	border-radius: 20px;
	@include media-breakpoint-down(sm) {
		margin-top: 20px;
		padding: 20px;
		gap: 15px;
	}
	.skeleton-user {
		display: flex;
		align-items: center;
		gap: 15px;
		.skeleton-user-img {
			width: 60px;
			height: 60px;
			background: $gray-500;
			border-radius: 15px;
		}
		.skeleton-user-info {
			width: 60px;
			margin: 0;
		}
	}
	.skeleton-content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		.skeleton-content-img {
			width: 100%;
			height: 400px;
			background: $gray-500;
			border-radius: 15px;
		}
	}
}
</style>

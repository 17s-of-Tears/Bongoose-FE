<template>
	<div class="user-img-card card">
		<h2>제봉님의 최근 사진</h2>
		<div class="user-img-box">
			<div v-for="index in 8" :key="index" class="user-img"></div>
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
.user-img-card {
	width: 600px;
	display: flex;
	justify-content: space-between;
	padding: 30px;
	border-radius: 20px !important;
	h2 {
		font-size: 20px;
		color: $primary;
	}
	.user-img-box {
		display: flex;
		justify-content: center;
		gap: 16px;
		flex-wrap: wrap;
		.user-img {
			width: 120px;
			height: 120px;
			border-radius: 20px;
			background: $gray-600;
		}
	}
}
</style>

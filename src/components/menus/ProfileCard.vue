<template>
	<div class="card">
		<div class="profile-img"></div>
		<div class="profile-content">
			<div class="profile-text">
				<div>제봉 님</div>
				<div>@jebong55</div>
			</div>
			<div class="btn btn-primary">로그아웃</div>
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
.card {
	width: 390px;
	display: flex;
	gap: 30px;
	padding: 30px;
	flex-direction: row !important;
	border-radius: 20px !important;
	.profile-img {
		width: 130px;
		height: 130px;
		background-color: $gray-500;
		border-radius: 15px;
		flex-shrink: 0;
	}
	.profile-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.profile-text {
			color: $gray-700;
			:nth-child(1) {
				font-size: 25px;
			}
			:nth-child(2) {
				font-size: 18px;
			}
		}
	}
}
</style>

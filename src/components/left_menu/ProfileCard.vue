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
	width: 100%;
	margin-top: 40px;
	display: flex;
	gap: 20px;
	padding: 20px;
	flex-direction: row !important;
	border-radius: 20px !important;
	.profile-img {
		width: 100px;
		height: 100px;
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
				@include rem(20);
			}
			:nth-child(2) {
				@include rem(15);
			}
		}
	}
}
</style>

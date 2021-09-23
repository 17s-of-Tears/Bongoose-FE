<template>
	<div class="profile-card card">
		<div class="profile-img"></div>
		<p>제봉 님</p>
		<p>jebong55@gmail.com</p>
		<p>1줄 자기소개 영역 입니다!</p>
		<div class="btn btn-primary">프로필 수정</div>
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
.profile-card {
	width: 310px;
	padding: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	color: $gray-600;
	border-radius: 20px !important;
	.profile-img {
		width: 100px;
		height: 100px;
		background: $gray-500;
		border-radius: 50%;
		margin-bottom: 10px;
	}
	:nth-child(2) {
		margin-bottom: 5px;
	}
	:nth-child(3) {
		margin-bottom: 20px;
	}
	:nth-child(4) {
		margin-bottom: 30px;
	}
	:last-child {
		width: 80%;
	}
}
</style>

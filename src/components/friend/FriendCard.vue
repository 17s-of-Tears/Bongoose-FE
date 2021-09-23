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
	width: 220px;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: $gray-600;
	border-radius: 20px !important;
	> * {
		margin-bottom: 5px;
	}
	.profile-img {
		width: 80px;
		height: 80px;
		background: $gray-500;
		border-radius: 50%;
	}
	:nth-child(4) {
		margin-bottom: 10px;
	}
	:last-child {
		width: 80%;
		margin: 0;
	}
}
</style>

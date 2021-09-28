<template>
	<div class="card">
		<img
			class="profile-img"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGs_KszpHeCbaFnahklqFXq-wuZonZ6AeMFA&usqp=CAU"
			alt="user"
		/>
		<span>제봉 님</span>
		<span>jebong55@gmail.com</span>
		<span>1줄 자기소개 영역 입니다!</span>
		<div class="btn btn-primary">프로필 수정</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
	@include rem(20);
	color: $gray-700;
	padding: 15px 30px;
	border-radius: 20px !important;
	display: flex;
	align-items: center;
	gap: 15px;
	.profile-img {
		width: 100px;
		height: 100px;
		display: block;
		border-radius: 50%;
		background: $gray-500;
		flex-grow: 0 !important;
	}
	:last-child {
		min-width: 60%;
		flex-grow: 0 !important;
	}
}
</style>

<template>
	<div class="profile-card card">
		<img
			src="http://placeimg.com/400/400/any"
			alt="프로필 이미지"
			class="profile-img"
		/>
		<p>제봉 님</p>
		<p>jebong55@gmail.com</p>
		<p>1줄 자기소개 영역 입니다!</p>
		<button class="btn btn-primary">{{ btnType }}</button>
		<button v-if="subBtnType" class="btn btn-secondary">
			{{ subBtnType }}
		</button>
	</div>
</template>

<script>
export default {
	props: {
		btnType: {
			type: String,
			default: ''
		},
		subBtnType: {
			type: String,
			default: ''
		}
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
		border-radius: 50%;
	}
	:nth-child(4) {
		margin-bottom: 10px;
	}
	:is(:nth-child(5), :last-child) {
		width: 80%;
	}
}
</style>

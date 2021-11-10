<template>
	<div class="card profile-card">
		<img class="profile-img" src="http://placeimg.com/400/400/any" alt="user" />
		<span>제봉 님</span>
		<span>jebong55@gmail.com</span>
		<span>1줄 자기소개 영역 입니다!</span>
		<button
			@click="showModal = true"
			type="button"
			class="btn btn-primary"
			data-bs-toggle="modal"
			data-bs-target="#exampleModal"
			data-bs-whatever="@mdo"
		>
			프로필 수정
		</button>
		<ProfileModal @updateProfile="updateProfile" />
	</div>
</template>

<script>
import ProfileModal from '@/components/home/ProfileModal.vue'
import { mapState } from 'vuex'

export default {
	components: {
		ProfileModal
	},
	computed: {
		...mapState('auth', ['user'])
	}

	// 왜있는거지..?
	// methods: {
	// 	async boardInfo() {
	// 		try {
	// 			await this.$store.dispatch('board/GET_BOARD')
	// 		} catch (error) {
	// 			console.error(error)
	// 		}
	// 	},
	// 	updateProfile() {
	// 		this.boardInfo()
	// 		console.log(123)
	// 	}
	// },

	// created() {
	// 	this.boardInfo()
	// }
}
</script>

<style lang="scss" scoped>
.profile-card {
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
}
</style>

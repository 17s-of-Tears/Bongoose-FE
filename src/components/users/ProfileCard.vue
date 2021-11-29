<template>
	<div class="card profile-card">
		<img class="profile-img" :src="profileImage" alt="user" />
		<span>{{ user.name }} 님</span>
		<span>{{ user.title }}</span>
		<span>{{ user.description || '소개글이 비어 있습니다!' }}</span>
		<button
			type="button"
			class="btn btn-primary"
			data-bs-toggle="modal"
			data-bs-target="#profileCardModal"
			data-bs-whatever="@mdo"
		>
			프로필 수정
		</button>
		<ProfileModal :user="user" />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import ProfileModal from '@/components/users/ProfileModal'

export default {
	components: {
		ProfileModal
	},

	computed: {
		...mapState('auth', ['user']),
		imageURI() {
			return process.env.VUE_APP_URI
		},
		profileImage() {
			if (this.user.imageUrl) {
				return `${this.imageURI}/${this.user.imageUrl}`
			} else {
				return require('@/assets/images/default.png')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.profile-card {
	@include rem(20);
	width: 300px;
	color: $gray-700;
	padding: 15px 30px;
	border-radius: 20px !important;
	display: flex;
	align-items: center;
	gap: 15px;
	.profile-img {
		width: 100px !important;
		height: 100px !important;
		display: block;
		border-radius: 50%;
		background: $gray-500;
		flex-grow: 0 !important;
	}
}
</style>

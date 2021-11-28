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
		{{ profileImage }}
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
			return (
				`${this.imageURI}/${this.user.imageUrl}` ||
				require('@/assets/images/default.png')
			)
		}
	},

	created() {
		console.log(this.profileImage)
	}
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

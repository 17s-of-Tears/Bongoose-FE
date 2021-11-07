<template>
	<div class="card">
		<img :src="profileImage" alt="프로필 이미지" class="profile-img" />
		<div class="profile-content">
			<div class="profile-text">
				<div>{{ user.name }} 님</div>
				<div>@{{ userEmail }}</div>
			</div>
			<div @click="logout" class="btn btn-primary">로그아웃</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('auth', ['user']),
		profileImage() {
			return this.user.imageUrl || require('@/assets/images/default.png')
		},
		userEmail() {
			return /.+(?=@)/.exec(this.user.email)[0]
		}
	},

	methods: {
		async logout() {
			try {
				await this.$store.commit('auth/LOGOUT')
				this.$store.commit('SET_MESSAGE', '로그아웃에 성공하였습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
				this.$router.push('/login')
			} catch (error) {
				this.$store.commit('SET_MESSAGE', '로그아웃에 실패했습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
			}
		}
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

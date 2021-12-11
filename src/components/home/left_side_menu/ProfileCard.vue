<template>
	<div class="card" v-if="isLogged">
		<img :src="profileImage" alt="프로필 이미지" class="profile-img" />
		<div class="profile-content">
			<div class="profile-text">
				<div>{{ userInfo.name }} 님</div>
				<div>@{{ userEmail }}</div>
			</div>
			<div @click="logout" class="btn btn-primary">로그아웃</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import customAlert from '@/utils/customAlert'
import { CommonMutationTypes } from '@/store/common/mutations'
import { AuthMutationTypes } from '@/store/auth/mutations'

export default defineComponent({
	computed: {
		...mapGetters('auth', ['isLogged']),
		userInfo() {
			// proxy 객체 변환
			const { user } = this.$store.state.auth
			const str = JSON.stringify(user)
			return JSON.parse(str)
		},
		imageURI(): string {
			return process.env.VUE_APP_URI
		},
		profileImage(): string {
			if (this.userInfo.imageUrl) {
				return `${this.imageURI}/${this.userInfo.imageUrl}`
			} else {
				return require('@/assets/images/default.png')
			}
		},
		userEmail(): string | number {
			// 초기 랜더 에러 방지
			if (this.userInfo.email === undefined) return 0
			return /.+(?=@)/.exec(this.userInfo.email)![0]
		}
	},

	methods: {
		async logout() {
			this.$store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			this.$store.commit(`auth/${AuthMutationTypes.LOGOUT}`)
			customAlert('로그아웃에 성공하였습니다!')
			this.$router.push('/login')
			this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		}
	}
})
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

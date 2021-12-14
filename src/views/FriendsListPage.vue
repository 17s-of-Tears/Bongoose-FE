<template>
	<div class="container">
		<div class="mt-5 friends-title">
			<h2>{{ user.name }} 님의 친구</h2>
			<p>총 {{ users.length }}명</p>
		</div>
		<div class="friends-list-box">
			<FriendCard
				v-for="user in users"
				:key="user.id"
				:user="user"
				btn-type="프로필 보기"
				subBtnType="삭제 하기"
				@updateFollow="updateFollow"
			/>
			<BorderSpinner v-if="!lastUser" />
			<div v-if="noUser">등록된 친구가 없네요... 친구를 찾아볼까요?</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { UserMutationsType } from '@/store/user/mutations'
import { UserActionType } from '@/store/user/actions'
import { CommonMutationTypes } from '@/store/common/mutations'
import FriendCard from '@/components/friend/FriendCard.vue'
import BorderSpinner from '@/components/common/BorderSpinner.vue'
import customAlert from '@/utils/customAlert'

export default defineComponent({
	components: {
		FriendCard,
		BorderSpinner
	},

	computed: {
		...mapState('auth', ['user']),
		...mapState('user', ['users', 'hasMoreUser', 'lastUser']),
		noUser(): boolean {
			return this.users.length === 0
		}
	},

	methods: {
		async getUsersInfo() {
			this.$store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			try {
				await this.$store.dispatch(`user/${UserActionType.GET_All_USERS}`, 1)
			} catch {
				customAlert('정보를 불러오는데 실패했습니다')
			} finally {
				this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
			}
		},
		async onScroll() {
			const showTrue =
				window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100
			if (showTrue) {
				if (this.hasMoreUser) {
					this.getUsersInfo()
				}
			}
		},
		updateFollow() {
			this.$store.commit(`user/${UserMutationsType.CLEAR_USERS}`)
			this.getUsersInfo()
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		this.$store.commit(`user/${UserMutationsType.CLEAR_USERS}`)
		this.getUsersInfo()
	},

	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},

	beforeUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	}
})
</script>

<style lang="scss" scoped>
.container {
	@media (max-width: 1025px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.friends-title {
			justify-self: center;
		}
	}
	.friends-title {
		display: flex;
		gap: 10px;
		align-items: center;
		color: $primary;
		h2 {
			font-size: 25px;
			margin: 0;
		}
		p {
			font-size: 16px;
			margin: 0;
		}
	}
	.friends-list-box {
		margin-top: 16px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
}
</style>

<template>
	<div class="container">
		<div class="mt-5 friends-title">
			<h2>이런 사람들은 어때요?</h2>
		</div>
		<div class="friends-list-box">
			<FriendCard v-for="user in users" :key="user.id" :user="user" :btn-type="'친구 요청'" />
			<BorderSpinner v-if="!(lastUser || noUser)" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { CommonMutationTypes } from '@/store/common/mutations'
import { UserMutationsType } from '@/store/user/mutations'
import { UserActionType } from '@/store/user/actions'
import FriendCard from '@/components/friend/FriendCard.vue'
import BorderSpinner from '@/components/common/BorderSpinner.vue'

export default defineComponent({
	components: {
		FriendCard,
		BorderSpinner
	},

	computed: {
		...mapState('user', ['users', 'hasMoreUser', 'lastUser']),
		noUser(): boolean {
			return this.users.length === 0
		}
	},

	methods: {
		async getUsersInfo() {
			this.$store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			try {
				await this.$store.dispatch(`user/${UserActionType.GET_All_USERS}`)
			} catch (error) {
				console.error(error)
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
	margin: 40px 0;
	.friends-title {
		display: flex;
		gap: 10px;
		align-items: flex-end;
		color: $primary;
		h2 {
			font-size: 25px;
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

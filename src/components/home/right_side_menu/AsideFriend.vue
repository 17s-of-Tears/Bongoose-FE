<template>
	<div class="aside-friend">
		<div class="friend-header">
			<span>친구 추천</span>
			<span>
				<i class="bi bi-chevron-right" @click="toFriendPage" />
			</span>
		</div>
		<div v-for="user in usersInfo" :key="user.id" class="friend-items">
			<div class="friend-item">
				<img :src="profileImage(user.imageUrl)" alt="프로필 이미지" class="friend-img" />
				<div class="friend-info">
					<span>{{ user.name }}</span>
					<span>{{ user.email }}</span>
				</div>
			</div>
			<i class="bi bi-plus-lg friend-plus-icon" @click="onClickAddFollow(user.id, user.name)"></i>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { addFollowAPI, getRandomFriends } from '@/api/user'
import { mapState } from 'vuex'
import { ResRandomUserInfo } from '@/api/user/types'
import customAlert from '@/utils/customAlert'
import { CommonMutationTypes } from '@/store/common/mutations'
import { UserActionType } from '@/store/user/actions'

export default defineComponent({
	data() {
		return {
			usersInfo: [] as ResRandomUserInfo[]
		}
	},

	computed: {
		...mapState('user', ['users']),
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},

	methods: {
		async getUsers() {
			try {
				const { data } = await getRandomFriends()
				this.usersInfo = data
			} catch (error) {
				customAlert(`정보를 불러오는데 실패했습니다.`)
			}
		},
		// 친구 추가
		async onClickAddFollow(id: number, name: string) {
			try {
				await addFollowAPI(id)
				customAlert(`${name}님을 친구로 추가했습니다!`)
				this.getUsers() // 다시 무작위 3명 추천
				if (this.$route.path === '/friends_list') {
					this.$router.go(0) // 만약 친구 목록 페이지 였다면 페이지 갱신
				}
			} catch {
				customAlert('친구추가를 실패했습니다.')
			}
		},
		toFriendPage() {
			this.$router.push('/friends_find')
		},
		profileImage(image: string) {
			return image === null ? require('@/assets/images/default.png') : `${this.imageURI}/${image}`
		}
	},

	created() {
		this.getUsers()
	}
})
</script>

<style lang="scss" scoped>
.aside-friend {
	display: flex;
	flex-direction: column;
	gap: 20px;
	.friend-header {
		display: flex;
		justify-content: space-between;
		color: $white;
		@include rem(25);
		:last-child {
			cursor: pointer;
		}
	}
	.friend-items {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.friend-item {
			display: flex;
			align-items: center;
			gap: 20px;
			.friend-img {
				width: 80px;
				height: 80px;
				border-radius: 15px;
			}
			.friend-info {
				display: flex;
				flex-direction: column;
				color: $white;
				:nth-child(1) {
					@include rem(20);
				}
				:nth-child(2) {
					@include rem(15);
				}
			}
		}
		:last-child {
			font-size: 20px;
			color: $white;
			cursor: pointer;
		}
		.friend-plus-icon {
			transition: 0.5s;
			&:hover {
				color: #888;
			}
		}
	}
}
</style>

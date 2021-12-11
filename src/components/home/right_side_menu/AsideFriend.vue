<template>
	<div class="aside-friend">
		<div class="friend-header">
			<span>친구 추천</span>
			<span>
				<i class="bi bi-chevron-right" @click="toFriendPage" />
			</span>
		</div>
		<div v-for="user in users" :key="user.id" class="friend-items">
			<div class="friend-item">
				<img :src="profileImage(user.imageUrl)" alt="프로필 이미지" class="friend-img" />
				<div class="friend-info">
					<span>{{ user.name }}</span>
					<span>{{ user.email }}</span>
				</div>
			</div>
			<i class="bi bi-plus-lg"></i>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getRandomFriends } from '@/api/user'
import { mapState } from 'vuex'
import { ResRandomUserInfo } from '@/api/user/types'

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
		toFriendPage() {
			this.$router.push('/friends_find')
		},
		async getUsers() {
			try {
				const { data } = await getRandomFriends()
				this.usersInfo = data
			} catch (error) {
				console.error(error)
			}
		},
		profileImage(image: string) {
			return image === null ? require('@/assets/images/default.png') : `${this.imageURI}/${image}`
		},
		created() {
			this.getUsers()
			console.log() //푸쉬되나 재확인
		}
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
	}
}
</style>

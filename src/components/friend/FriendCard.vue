<template>
	<div class="profile-card card">
		<img :src="profileImage(user.imageUrl)" alt="프로필 이미지" class="profile-img" />
		<p>{{ user.name }} 님</p>
		<p>{{ user.email }}</p>
		<p>{{ user.description || 'ㅤ' }}</p>
		<button class="btn btn-primary" @click="onClickButton(user.id, user.name)">{{ btnType }}</button>
		<button v-if="subBtnType" class="btn btn-secondary" @click="onClickFollowDelete(user.id, user.name)">
			{{ subBtnType }}
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CommonMutationTypes } from '@/store/common/mutations'
import { ResUserData } from '@/api/user/types'
import { addFollowAPI, removeFollowAPI } from '@/api/user'
import customAlert from '@/utils/customAlert'

export default defineComponent({
	props: {
		user: {
			type: Object as PropType<ResUserData>
		},
		btnType: {
			type: String,
			default: ''
		},
		subBtnType: {
			type: String,
			default: ''
		}
	},

	emits: ['updateFollow'],

	computed: {
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},

	methods: {
		profileImage(image: string) {
			return image === null ? require('@/assets/images/default.png') : `${this.imageURI}/${image}`
		},
		async onClickButton(id: number, name: string) {
			switch (this.btnType) {
				case '친구 추가':
					try {
						await addFollowAPI(id)
						customAlert(`${name}님을 친구로 추가했습니다!`)
					} catch (error) {
						console.error(error)
					}
					break
				case '프로필 보기':
					this.$router.push(`/user_profile/${id}`)
					break
				default:
					break
			}
		},
		async onClickFollowDelete(id: number, name: string) {
			try {
				await removeFollowAPI(id)
				customAlert(`${name}님을 친구에서 삭제했습니다!`)
				this.$emit('updateFollow')
			} catch (error) {
				console.error(error)
			}
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
	}
})
</script>

<style lang="scss" scoped>
.profile-card {
	width: 220px;
	padding: 20px;
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
}
</style>

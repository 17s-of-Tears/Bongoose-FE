<template>
	<div class="profile-card card" v-for="user in users" :key="user.id">
		<img :src="profileImage(user.imageUrl)" alt="프로필 이미지" class="profile-img" />
		<p>{{ user.name }} 님</p>
		<p>{{ user.email }}</p>
		<p>{{ user.description }}</p>
		<button class="btn btn-primary">{{ btnType }}</button>
		<button v-if="subBtnType" class="btn btn-secondary">
			{{ subBtnType }}
		</button>
	</div>
</template>

<script lang="ts">
import { CommonMutationTypes } from '@/store/common/mutations'
import { UserActionType } from '@/store/user/actions'
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
	computed: {
		...mapState('user', ['users']),
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},
	props: {
		btnType: {
			type: String,
			default: ''
		},
		subBtnType: {
			type: String,
			default: ''
		}
	},
	methods: {
		async findFriend() {
			try {
				await this.$store.dispatch(`user/${UserActionType.GET_USERS}`)
			} catch (error) {
				console.error(error)
			}
		},
		profileImage(image: string) {
			return image === null ? require('@/assets/images/default.png') : `${this.imageURI}/${image}`
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		this.findFriend()
	}
})
</script>

<style lang="scss" scoped>
.profile-card {
	width: 220px;
	padding: 20px;
	display: flex;
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
	:nth-child(4) {
		margin-bottom: 10px;
	}
	:is(:nth-child(5), :last-child) {
		width: 80%;
	}
}
</style>

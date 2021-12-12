<template>
	<div class="profile-card card" v-for="user in usersInfo.users" :key="user.id">
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
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { CommonMutationTypes } from '@/store/common/mutations'

export default defineComponent({
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

	computed: {
		...mapState('user', ['usersInfo']),
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},

	methods: {
		profileImage(image: string) {
			return image === null ? require('@/assets/images/default.png') : `${this.imageURI}/${image}`
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

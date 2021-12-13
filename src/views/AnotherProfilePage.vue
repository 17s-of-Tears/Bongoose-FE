<template>
	<div class="container profile-container">
		<div class="profile-box">
			<ProfileCard :another="true" :name="userInfo.name" :email="userInfo.email" :description="userInfo.description" />
			<ProfileImgCard :another="true" :name="userInfo.name" :images="userInfo.images" />
		</div>
		<Skeleton v-if="boardLoading" />
		<PostCard v-else v-for="board in boards" :key="board.id" :board="board" :mode="'profile'" />
		<Default v-if="lastPost || noPost" />
		<BorderSpinner v-else />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { CommonMutationTypes } from '@/store/common/mutations'
import { ResUserMeInfo } from '@/api/user/types'
import { getUserProfileAPI } from '@/api/user'
import ProfileCard from '@/components/users/ProfileCard.vue'
import ProfileImgCard from '@/components/users/ProfileImgCard.vue'
import PostCard from '@/components/posts/PostCard/index.vue'
import Skeleton from '@/components/posts/Skeleton.vue'
import Default from '@/components/common/Default.vue'
import BorderSpinner from '@/components/common/BorderSpinner.vue'

export default defineComponent({
	components: {
		ProfileCard,
		ProfileImgCard,
		PostCard,
		Skeleton,
		Default,
		BorderSpinner
	},

	data() {
		return {
			boardLoading: false,
			userInfo: {} as ResUserMeInfo
		}
	},

	computed: {
		...mapState(['loading']),
		...mapState('board', ['boards', 'lastPost']),
		noPost(): boolean {
			return this.boards.length === 0
		}
	},

	methods: {
		async fetchUserProfileInfo() {
			try {
				const id = parseInt(this.$route.params.id as string, 10)
				const { data } = await getUserProfileAPI(id)
				this.userInfo = data
			} catch (error) {
				console.error(error)
			}
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		this.fetchUserProfileInfo()
	}
})
</script>

<style lang="scss" scoped>
.profile-container {
	margin-top: 40px;
	.profile-box {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		@include media-breakpoint-down(sm) {
			display: block;
			:first-child {
				margin-bottom: 30px;
			}
		}
	}
}
</style>

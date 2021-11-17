<template>
	<div class="container profile-container">
		<div class="profile-box">
			<ProfileCard />
			<ProfileImgCard />
		</div>
		<Skeleton v-if="boardLoading" />
		<PostCard v-else :mode="'profile'" />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import ProfileCard from '@/components/users/ProfileCard'
import ProfileImgCard from '@/components/users/ProfileImgCard'
import PostCard from '@/components/posts/PostCard'
import Skeleton from '@/components/posts/PostCard/Skeleton'

export default {
	components: {
		ProfileCard,
		ProfileImgCard,
		PostCard,
		Skeleton
	},

	data() {
		return {
			boardLoading: false
		}
	},

	computed: {
		...mapState(['loading']),
		...mapState('auth', ['user']),
		...mapState('board', ['lastPost'])
	},

	methods: {
		async myBoardInfo() {
			this.boardLoading = true
			this.$store.commit('START_LOADING')
			this.$store.commit('board/CLEAR_BOARDS')
			try {
				await this.$store.dispatch('board/GET_LOAD_BOARDS', {
					userId: this.user.id
				})
			} catch (error) {
				console.error(error)
			} finally {
				this.boardLoading = false
				this.$store.commit('END_LOADING')
			}
		}
	},

	created() {
		this.$store.commit('END_LOADING')
		this.myBoardInfo()
	}
}
</script>

<style lang="scss" scoped>
.profile-container {
	margin-top: 40px;
	.profile-box {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		:first-child {
			flex: 1 1 0;
		}
		:last-child {
			flex: 2 1 0;
		}
		@include media-breakpoint-down(sm) {
			display: block;
			:first-child {
				margin-bottom: 30px;
			}
		}
	}
}
</style>

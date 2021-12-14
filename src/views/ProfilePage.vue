<template>
	<div class="container profile-container">
		<div class="profile-box">
			<ProfileCard />
			<ProfileImgCard />
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
import ProfileCard from '@/components/users/ProfileCard.vue'
import ProfileImgCard from '@/components/users/ProfileImgCard.vue'
import PostCard from '@/components/posts/PostCard/index.vue'
import Skeleton from '@/components/posts/Skeleton.vue'
import Default from '@/components/common/Default.vue'
import BorderSpinner from '@/components/common/BorderSpinner.vue'
import { CommonMutationTypes } from '@/store/common/mutations'
import { BoardMutationTypes } from '@/store/board/mutations'
import { BoardActionTypes } from '@/store/board/actions'

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
			boardLoading: false
		}
	},

	computed: {
		...mapState(['loading']),
		...mapState('auth', ['user']),
		...mapState('board', ['boards', 'lastPost']),
		noPost(): boolean {
			return this.boards.length === 0
		}
	},

	methods: {
		async myBoardInfo() {
			this.boardLoading = true
			this.$store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			this.$store.commit(`board/${BoardMutationTypes.CLEAR_BOARDS}`)
			try {
				await this.$store.dispatch(`board/${BoardActionTypes.GET_LOAD_BOARDS}`, {
					userId: this.user.id
				})
			} catch (error) {
				console.error(error)
			} finally {
				this.boardLoading = false
				this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
			}
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		this.myBoardInfo()
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
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}
	}
}
</style>

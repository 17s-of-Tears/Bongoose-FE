<template>
	<div class="container">
		<div class="card user_search_card">
			<h2>
				<span>{{ $route.params.id }}</span> 검색결과
			</h2>
		</div>
		<Skeleton v-if="boardLoading" />
		<PostCard
			v-else
			v-for="board in boards"
			:key="board.id"
			:board="board"
			:mode="'search'"
			:keyword="$route.params.id"
		/>
		<Default v-if="lastPost || noPost" />
		<BorderSpinner v-else />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import PostCard from '@/components/posts/PostCard/index.vue'
import Skeleton from '@/components/posts/Skeleton.vue'
import Default from '@/components/common/Default.vue'
import BorderSpinner from '@/components/common/BorderSpinner.vue'
import { CommonMutationTypes } from '@/store/common/mutations'
import { BoardMutationTypes } from '@/store/board/mutations'
import { BoardActionTypes } from '@/store/board/actions'
import customAlert from '@/utils/customAlert'

export default defineComponent({
	components: {
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
		async hashtagBoardInfo() {
			this.boardLoading = true
			this.$store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			this.$store.commit(`board/${BoardMutationTypes.CLEAR_BOARDS}`)
			try {
				await this.$store.dispatch(`board/${BoardActionTypes.GET_LOAD_BOARDS}`, {
					keyword: this.$route.params.id
				})
			} catch {
				customAlert('정보를 불러오는데 실패했습니다')
			} finally {
				this.boardLoading = false
				this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
			}
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		this.hashtagBoardInfo()
	}
})
</script>

<style lang="scss" scoped>
.user_search_card {
	border-radius: 20px;
	margin-top: 40px;
	padding: 25px 30px;
	h2 {
		font-weight: 400;
		@include rem(25);
		margin: 0;
		span {
			color: $primary;
		}
	}
}
</style>

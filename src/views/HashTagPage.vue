<template>
	<div class="container">
		<div class="card hashtag_card">
			<h2>
				<span># {{ $route.params.id }}</span> 검색결과
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

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/posts/PostCard'
import Skeleton from '@/components/posts/Skeleton'
import Default from '@/components/common/Default'
import BorderSpinner from '@/components/common/BorderSpinner'

export default {
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
		noPost() {
			return this.boards.length === 0
		}
	},

	methods: {
		async hashtagBoardInfo() {
			this.boardLoading = true
			this.$store.commit('START_LOADING')
			this.$store.commit('board/CLEAR_BOARDS')
			try {
				await this.$store.dispatch('board/GET_LOAD_BOARDS', {
					keyword: this.$route.params.id
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
		this.hashtagBoardInfo()
	}
}
</script>

<style lang="scss" scoped>
.hashtag_card {
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

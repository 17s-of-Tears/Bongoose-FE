<template>
	<div class="container">
		<h2>유저 검색 페이지</h2>
		<div>{{ $route.params.id }} 검색함</div>
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

<style lang="scss" scoped></style>

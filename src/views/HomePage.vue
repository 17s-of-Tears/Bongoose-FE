<template>
	<section>
		<div
			@click="showModal = true"
			class="sub-card card"
			data-bs-toggle="modal"
			data-bs-target="#exampleModal"
		>
			<p>{{ user.name }} 님! 오늘은 무슨일이 있었나요? 모두에게 알려주세요!</p>
		</div>
		<WriterModal @updatePost="updatePost" />
		<Skeleton v-if="boardLoading" />
		<template v-else>
			<PostCard v-for="board in boards" :key="board.id" :board="board" />
			<Default v-if="lastPost || noPost" />
			<BorderSpinner v-else />
		</template>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/posts/PostCard'
import WriterModal from '@/components/home/WriterModal'
import Skeleton from '@/components/posts/Skeleton'
import Default from '@/components/common/Default'
import BorderSpinner from '@/components/common/BorderSpinner'

export default {
	components: {
		PostCard,
		WriterModal,
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
		async boardInfo() {
			this.boardLoading = true
			this.$store.commit('START_LOADING')
			this.$store.commit('board/CLEAR_BOARDS')
			try {
				await this.$store.dispatch('board/GET_LOAD_BOARDS')
			} catch (error) {
				console.error(error)
			} finally {
				this.boardLoading = false
				this.$store.commit('END_LOADING')
			}
		},
		updatePost() {
			this.boardInfo()
		}
	},

	created() {
		this.$store.commit('END_LOADING')
		this.boardInfo()
	}
}
</script>

<style lang="scss" scoped>
section {
	margin: 40px;
	position: relative;
	.sub-card {
		padding: 10px 20px;
		border-radius: 20px;
		cursor: pointer;
		transition: 0.5s;
		&:hover {
			background: rgba($color: $gray-300, $alpha: 0.1);
		}
		p {
			color: $gray-500;
			margin: 0;
		}
	}
	@include media-breakpoint-down(sm) {
		margin: 20px;
	}
}
</style>

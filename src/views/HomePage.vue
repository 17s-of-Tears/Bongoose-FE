<template>
	<section>
		<div @click="showModal = true" class="sub-card card" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import PostCard from '@/components/posts/PostCard/index.vue'
import WriterModal from '@/components/home/WriterModal.vue'
import Skeleton from '@/components/posts/Skeleton.vue'
import Default from '@/components/common/Default.vue'
import BorderSpinner from '@/components/common/BorderSpinner.vue'
import { CommonMutationTypes } from '@/store/common/mutations'
import { BoardMutationTypes } from '@/store/board/mutations'
import { BoardActionTypes } from '@/store/board/actions'

export default defineComponent({
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
		noPost(): boolean {
			return this.boards.length === 0
		}
	},

	methods: {
		async boardInfo() {
			this.boardLoading = true
			this.$store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			this.$store.commit(`board/${BoardMutationTypes.CLEAR_BOARDS}`)
			try {
				await this.$store.dispatch(`board/${BoardActionTypes.GET_LOAD_BOARDS}`)
			} catch (error) {
				console.error(error)
			} finally {
				this.boardLoading = false
				this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
			}
		},
		updatePost() {
			this.boardInfo()
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		this.boardInfo()
	}
})
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

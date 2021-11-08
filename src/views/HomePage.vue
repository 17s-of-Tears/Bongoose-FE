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
		<Modal @updatePost="updatePost" />
		<PostCard />
		<!-- 임시 다시만들어야  해여 -->
		<div v-if="lastPost">끝!</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/posts/PostCard'
import Modal from '@/components/home/Modal'

export default {
	components: {
		PostCard,
		Modal
	},

	computed: {
		...mapState('auth', ['user']),
		...mapState('board', ['lastPost'])
	},

	methods: {
		async boardInfo() {
			this.$store.commit('START_LOADING')
			try {
				await this.$store.dispatch('board/GET_LOAD_BOARDS')
			} catch (error) {
				console.error(error)
			} finally {
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

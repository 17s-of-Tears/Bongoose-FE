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
		...mapState('auth', ['user'])
	},

	methods: {
		async boardInfo() {
			try {
				await this.$store.dispatch('board/GET_BOARD')
			} catch (error) {
				console.error(error)
			}
		},
		updatePost() {
			this.boardInfo()
			console.log(123)
		}
	},

	created() {
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

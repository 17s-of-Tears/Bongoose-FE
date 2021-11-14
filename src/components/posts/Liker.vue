<template>
	<div class="content-like">
		<i class="bi bi-emoji-smile-fill"></i>
		<p>{{ board.likes }} &nbsp;</p>
		<i class="bi bi-emoji-frown-fill"></i>
		<p>{{ board.dislikes }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'
//import { getLikeCount, updateLikeCount, deleteLikeCount } from '@/api/board'
import { getLikeCount } from '@/api/board'

export default {
	props: {
		board: {
			type: Object,
			required: true
		}
	},

	computed: {
		...mapState('board', ['like', 'dislike'])
	},

	methods: {
		async boardLikeCount() {
			try {
				const { data } = await getLikeCount(this.board.id)
				this.$store.commit('board/SET_LIKE', data)
			} catch (error) {
				console.error(error)
			}
		}
	},

	created() {
		this.boardLikeCount()
	}
}
</script>

<style lang="scss" scoped>
.content-like {
	display: flex;
	gap: 5px;
	cursor: pointer;
	p {
		color: $gray-600;
	}
}
</style>

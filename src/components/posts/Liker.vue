<template>
	<div class="content-like">
		<!-- 좋아여 -->
		<i v-if="!like" @click="onClickLike" class="bi bi-emoji-smile-fill"></i>
		<i v-else @click="onClickLike" class="active bi bi-emoji-smile-fill"></i>
		<p>{{ board.likes }} &nbsp;</p>
		<!-- 싫어여 -->
		<i
			v-if="!dislike"
			@click="onClickDislike"
			class="bi bi-emoji-frown-fill"
		></i>
		<i v-else @click="onClickDislike" class="active bi bi-emoji-frown-fill"></i>
		<p>{{ board.dislikes }}</p>
	</div>
</template>

<script>
import { deleteLikeInfo, getLikeInfo, updateLikeInfo } from '@/api/board'

export default {
	props: {
		board: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			like: null,
			dislike: null
		}
	},

	methods: {
		// 좋아요 정보 불러오기
		async boardLike() {
			try {
				const { data } = await getLikeInfo(this.board.id)
				if (data.like !== null) {
					data.like ? (this.like = data.like) : (this.dislike = data.like)
				}
			} catch (error) {
				console.error(error)
			}
		},
		// 좋아요 누르면?
		async onClickLike() {
			// 좋아요
			if (!this.like) {
				try {
					await updateLikeInfo({ boardId: this.board.id, like: true })
					this.like = true
					this.$emit('updatePost')
				} catch (error) {
					console.error(error)
				}
			} else {
				// 좋아요 취소
				try {
					await deleteLikeInfo(this.board.id)
					this.like = null
					this.$emit('updatePost')
				} catch (error) {
					console.error(error)
				}
			}
		},
		// 싫어요 누르면?
		async onClickDislike() {
			// 싫어요
			if (!this.dislike) {
				try {
					await updateLikeInfo({ boardId: this.board.id, like: false })
					this.dislike = true
					this.$emit('updatePost')
				} catch (error) {
					console.error(error)
				}
			} else {
				// 싫어요 취소
				try {
					await deleteLikeInfo(this.board.id)
					this.dislike = null
					this.$emit('updatePost')
				} catch (error) {
					console.error(error)
				}
			}
		}
	},

	created() {
		this.boardLike()
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
	.active {
		color: $primary;
	}
}
</style>

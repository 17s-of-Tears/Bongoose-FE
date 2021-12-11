<template>
	<div class="content-like">
		<!-- 좋아여 -->
		<i v-if="!mylike" @click="onClickLike('like')" class="bi bi-emoji-smile-fill"></i>
		<i v-else @click="onClickUnLike('like')" class="active bi bi-emoji-smile-fill"></i>
		<p>{{ likes }} &nbsp;</p>
		<!-- 싫어여 -->
		<i v-if="!mydislike" @click="onClickLike('dislike')" class="bi bi-emoji-frown-fill"></i>
		<i v-else @click="onClickUnLike('dislike')" class="active bi bi-emoji-frown-fill"></i>
		<p>{{ dislikes }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import customAlert from '@/utils/customAlert'
import { deleteLikeInfoAPI, getBoardAPI, getLikeInfoAPI, updateLikeInfoAPI } from '@/api/board'

export default defineComponent({
	props: {
		id: {
			type: Number,
			required: true
		}
	},

	data() {
		return {
			likes: 0,
			dislikes: 0,
			mylike: null as boolean | null,
			mydislike: null as boolean | null
		}
	},

	methods: {
		// 게시글 정보 (좋아요, 싫어요) 불러오기
		async setBoardInfo() {
			try {
				const { data } = await getBoardAPI(this.id)
				this.likes = data.likes
				this.dislikes = data.dislikes
				this.boardLike()
			} catch (error) {
				console.error(error)
			}
		},
		// 좋아요 여부 상태 정보 불러오기
		async boardLike() {
			try {
				const { data } = await getLikeInfoAPI(this.id)
				if (data.like !== null) {
					data.like ? (this.mylike = true) : (this.mydislike = true)
				}
			} catch (error) {
				console.error(error)
			}
		},
		// 버튼별로 분기처리
		async onClickLike(mode: string) {
			if (mode === 'like') {
				// 이미 싫어요를 했는지 검사
				if (this.mydislike) {
					customAlert('이미 싫어요를 누르셨습니다!')
				} else {
					// 좋아요
					try {
						await updateLikeInfoAPI({ boardId: this.id, like: true })
						this.mylike = true
					} catch (error) {
						console.error(error)
					}
				}
			} else if (mode === 'dislike') {
				// 이미 좋아요를 했는지 검사
				if (this.mylike) {
					customAlert('이미 좋아요를 누르셨습니다!')
				} else {
					// 싫어요
					try {
						await updateLikeInfoAPI({ boardId: this.id, like: false })
						this.mydislike = true
					} catch (error) {
						console.error(error)
					}
				}
			}
			this.setBoardInfo()
		},
		async onClickUnLike(mode: string) {
			if (mode === 'like') {
				// 좋아요 취소
				try {
					await deleteLikeInfoAPI(this.id)
					this.mylike = null
				} catch (error) {
					console.error(error)
				}
			} else if (mode === 'dislike') {
				// 싫어요 취소
				try {
					await deleteLikeInfoAPI(this.id)
					this.mydislike = null
				} catch (error) {
					console.error(error)
				}
			}
			this.setBoardInfo()
		}
	},

	created() {
		this.setBoardInfo()
	}
})
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

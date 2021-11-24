<template>
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title">{{ modeInfo }} 삭제 확인</h5>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="modal"
				aria-label="Close"
			></button>
		</div>
		<div class="modal-body">{{ modeInfo }}을 삭제하시겠습니까?</div>
		<div class="modal-footer">
			<button class="btn btn-secondary" data-bs-dismiss="modal">
				취소하기
			</button>
			<button
				@click="onRemoveBoard"
				type="button"
				class="btn btn-primary subbtn"
				data-bs-dismiss="modal"
			>
				삭제하기
			</button>
		</div>
	</div>
</template>

<script>
import { removeBoard, removeComment } from '@/api/board'
import customAlert from '@/utils/customAlert'

export default {
	props: {
		id: {
			type: Number,
			requried: true
		},
		mode: {
			type: String,
			requried: true
		},
		commentId: {
			type: Number,
			default: 0
		}
	},

	emits: ['updatePost', 'updateComment'],

	computed: {
		modeInfo() {
			return this.mode === 'post' ? '게시글' : '댓글'
		}
	},

	methods: {
		async onRemoveBoard() {
			if (this.mode === 'post') {
				// 게시물 삭제
				this.onRemoveFunc(this.id, 'updatePost')
			} else if (this.mode === 'comment') {
				// 댓글 삭제
				this.onRemoveFunc(
					{ boardID: this.id, commentID: this.commentId },
					'updateComment'
				)
			}
		},
		// 중복 코드 정리
		async onRemoveFunc(payload, event) {
			try {
				if (this.mode === 'post') {
					await removeBoard(payload)
				} else if (this.mode === 'comment') {
					await removeComment(payload)
				}
				customAlert(`${this.modeInfo}을 삭제했습니다!`)
				this.$emit(event)
			} catch (error) {
				customAlert(`${this.modeInfo} 삭제를 실패했습니다!`)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.modal-footer {
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-body {
	font-size: 17px;
	text-align: center;
}

.btn {
	padding: 10px 30px;
}
</style>

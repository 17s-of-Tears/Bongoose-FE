<template>
	<form @submit.prevent="onSubmitComment" class="form-floating">
		<textarea
			v-model="comment"
			class="form-control"
			placeholder="Leave a comment here"
			id="commentForm"
			style="height: 100px; resize: none"
			required
		/>
		<label for="commentForm">댓글을 작성해 주세요!</label>
		<div class="comment-btn-flex">
			<button class="btn btn-primary comment-btn" type="submit">
				댓글 달기
			</button>
		</div>
	</form>
</template>

<script>
import { createCommentAPI } from '@/api/board'
import customAlert from '@/utils/customAlert'

export default {
	props: {
		id: {
			type: Number,
			required: true
		}
	},

	emits: ['updateComment'],

	data() {
		return {
			comment: ''
		}
	},

	methods: {
		async onSubmitComment() {
			try {
				await createCommentAPI({ boardId: this.id }, { content: this.comment })
				this.comment = ''
				this.$emit('updateComment')
				customAlert('댓글이 등록되었습니다!')
			} catch (error) {
				console.error(error)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.comment-btn-flex {
	display: flex;
	justify-content: flex-end;
	.comment-btn {
		margin-top: 20px;
		text-align: right;
	}
}
</style>

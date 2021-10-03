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
export default {
	data() {
		return {
			comment: ''
		}
	},

	methods: {
		onSubmitComment() {
			console.log(this.comment)
			this.comment = ''
		}
	}
}
</script>

<style lang="scss" scoped>
textarea {
}

.comment-btn-flex {
	display: flex;
	justify-content: flex-end;
	.comment-btn {
		margin-top: 20px;
		text-align: right;
	}
}
</style>

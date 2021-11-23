<template>
	<CommentForm :id="id" @updateComment="updateComment" />
	<div v-if="comments.length === 0" class="no-comment">
		댓글이 없네요.. 첫 댓글을 달아주세요!
	</div>
	<template v-else>
		<ul class="list-group list-group-flush">
			<li
				v-for="comment in comments"
				:key="comment.commentID"
				class="list-group-item"
			>
				<CommentContent :comment="comment" />
			</li>
		</ul>
	</template>
</template>

<script>
import { getComments } from '@/api/board'
import CommentForm from '@/components/posts/CommentForm'
import CommentContent from '@/components/posts/CommentContent'

export default {
	components: {
		CommentForm,
		CommentContent
	},

	props: {
		id: {
			type: Number,
			required: true
		}
	},

	data() {
		return {
			comments: []
		}
	},

	emits: ['commentCount'],

	methods: {
		async getCommentsInfo() {
			try {
				const { data } = await getComments(this.id)
				this.comments = data.comments
				this.$emit('updateComment')
			} catch (error) {
				console.error(error)
			}
		},
		updateComment() {
			this.getCommentsInfo()
		}
	},

	created() {
		this.getCommentsInfo()
	}
}
</script>

<style lang="scss" scoped>
.no-comment {
	text-align: center;
	font-size: 20px;
	color: $gray-500;
	padding: 20px 0;
}
</style>

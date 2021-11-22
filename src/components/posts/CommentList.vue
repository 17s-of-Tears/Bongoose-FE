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
				<div class="comment-box">
					<img :src="profileImage()" alt="프로필사진" />
					<div class="comment-user">
						<div class="comment-user-inner">
							<span>{{ comment.name }}</span>
							<span>@{{ userEmail(comment.email) }}</span>
						</div>
						<span>{{ comment.content }}</span>
					</div>
					<div class="comment-date">
						{{ commentDate(comment.createdAt) }}
					</div>
				</div>
			</li>
		</ul>
	</template>
</template>

<script>
import moment from 'moment'
import { getComments } from '@/api/board'
import CommentForm from '@/components/posts/CommentForm'

export default {
	components: {
		CommentForm
	},

	props: {
		id: {
			type: Number,
			required: true
		}
	},

	emits: ['commentCount'],

	data() {
		return {
			comments: []
		}
	},

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
		},
		// 데이터 가공
		userEmail(email) {
			if (email) {
				return /.+(?=@)/.exec(email)[0]
			}
		},
		commentDate(date) {
			return moment(date).format('YYYY년 MM월 DD일 hh:mm')
		},
		profileImage(image) {
			return image || require('@/assets/images/default.png')
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

.comment-box {
	display: flex;
	align-items: center;
	padding: 20px 0;
	gap: 10px;
	img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.comment-user {
		display: flex;
		flex-direction: column;
		gap: 5px;
		.comment-user-inner {
			display: flex;
			align-items: flex-end;
			gap: 5px;
			:first-child {
				@include rem(20);
			}
		}
		:last-child {
			@include rem(15);
			color: $gray-600;
		}
	}
	.comment-date {
		@include rem(15);
		color: $gray-600;
		margin-left: auto;
		align-self: start;
	}
}
</style>

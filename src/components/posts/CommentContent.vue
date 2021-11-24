<template>
	<div class="comment-box">
		<img :src="profileImage()" alt="프로필사진" />
		<div class="comment-user">
			<div class="comment-user-inner">
				<span>{{ comment.name }}</span>
				<span>@{{ userEmail(comment.email) }}</span>
			</div>
			<span v-if="!updateShow">{{ comment.content }}</span>
			<input v-else type="text" v-model="content" />
		</div>
		<div class="comment-date">
			<span>{{ commentDate(comment.createdAt) }}</span>
			<div class="comment-edit" v-if="isMeComment(comment.email)">
				<span @click="commentUpdate(comment.commentID)">수정하기</span>
				<span data-bs-toggle="modal" data-bs-target="#commentRemoveModal">
					삭제하기
				</span>
				<CommentRemoveModal
					@updateComment="updateComment"
					:id="id"
					:commentId="comment.commentID"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import CommentRemoveModal from '@/components/posts/CommentRemoveModal'

export default {
	components: {
		CommentRemoveModal
	},

	props: {
		comment: {
			type: Object,
			required: true
		},
		id: {
			type: Number,
			required: true
		}
	},

	emits: ['updateComment'],

	data() {
		return {
			updateShow: false,
			content: ''
		}
	},

	computed: {
		...mapState('auth', ['user'])
	},

	methods: {
		// 댓글 수정
		commentUpdate(comment) {
			this.content = comment.content
			this.updateShow = true
		},
		isMeComment(commentEmail) {
			return this.user.email === commentEmail
		},
		// 댓글 정보 다시불러오기
		updateComment() {
			this.$emit('updateComment')
		},
		// 데이터 가공
		userEmail(email) {
			if (email) return /.+(?=@)/.exec(email)[0]
		},
		commentDate(date) {
			return moment(date).format('YYYY년 MM월 DD일 hh:mm')
		},
		profileImage(image) {
			return image || require('@/assets/images/default.png')
		}
	}
}
</script>

<style lang="scss" scoped>
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
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		gap: 15px;
		.comment-edit {
			display: flex;
			gap: 10px;
			span {
				cursor: pointer;
				transition: 0.5s;
				&:hover {
					color: $primary;
				}
			}
		}
	}
}
</style>

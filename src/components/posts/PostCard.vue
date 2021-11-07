<template>
	<main v-for="board in boards" :key="board.id">
		<div class="user-card card">
			<div class="user">
				<img
					src="http://placeimg.com/400/400/any"
					alt="프로필 사진"
					class="user-img"
				/>
				<div class="user-content">
					<div class="user-info">
						<div class="user-nickname">{{ board.userName }}</div>
						<div class="user-id">@jebong2323</div>
					</div>
					<div class="user-date">9월 5일 오후 3:55</div>
				</div>
			</div>
			<div class="content">
				<span>{{ board.content }}</span>
				<div class="content-hash">
					<span class="content-hashtag"># 임시데이터</span>
					<span class="content-hashtag"># 임시데이터</span>
				</div>
				<img
					:src="`http://placeimg.com/400/200/any/${board.id}`"
					alt="게시물 사진"
					class="content-img"
				/>
				<div class="content-footer">
					<div class="content-like">
						<i class="bi bi-emoji-smile-fill"></i>
						<p>320 &nbsp;</p>
						<i class="bi bi-emoji-frown-fill"></i>
						<p>1</p>
					</div>
					<div @click="toggleOnComment" class="content-comment">
						<i class="bi bi-chat-text-fill"></i>
						<p>5</p>
					</div>
				</div>
				<transition name="fade">
					<div v-if="onComment">
						<CommentForm />
						<CommentList />
					</div>
				</transition>
			</div>
		</div>
	</main>
</template>

<script>
import { mapState } from 'vuex'
import CommentForm from '@/components/posts/CommentForm'
import CommentList from '@/components/posts/CommentList'

export default {
	components: {
		CommentForm,
		CommentList
	},

	data() {
		return {
			onComment: false
		}
	},

	computed: {
		...mapState('board', ['boards'])
	},

	methods: {
		toggleOnComment() {
			this.onComment = !this.onComment
		}
	}
}
</script>

<style lang="scss" scoped>
.user-card {
	margin-top: 40px;
	width: 100%;
	padding: 30px;
	display: flex;
	gap: 30px;
	@include media-breakpoint-down(sm) {
		margin-top: 20px;
		padding: 20px;
		gap: 15px;
	}
	&.card {
		border-radius: 20px;
	}
	.user {
		display: flex;
		align-items: center;
		gap: 10px;
		.user-img {
			width: 60px;
			height: 60px;
			background-color: $gray-800;
			border-radius: 15px;
			@include media-breakpoint-down(sm) {
				width: 40px;
				height: 40px;
				border-radius: 10px;
			}
		}
		.user-content {
			display: flex;
			flex-direction: column;
			color: $gray-700;
		}
		.user-info {
			display: flex;
			align-items: center;
			gap: 10px;
			.user-nickname {
				@include rem(20);
			}
			.user-id {
				@include rem(15);
			}
		}
		.user-date {
			@include rem(15);
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		@include media-breakpoint-down(sm) {
			gap: 10px;
		}
		.content-hash {
			display: flex;
			gap: 10px;
			color: $primary;
			.content-hashtag {
				cursor: pointer;
			}
		}
		.content-img {
			width: 100%;
			height: 400px;
			border-radius: 20px;
			background-color: $gray-500;
			&::before {
				content: '';
				display: block;
				padding-top: 50%;
			}
		}
		.content-footer {
			display: flex;
			justify-content: space-between;
			.content-like {
				display: flex;
				gap: 5px;
				cursor: pointer;
				p {
					color: $gray-600;
				}
			}
			.content-comment {
				display: flex;
				gap: 10px;
				color: $primary;
				cursor: pointer;
				p {
					color: $gray-600;
				}
			}
		}
	}
}

.fade-enter-active {
	transition: all 0.4s ease-out;
}

.fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.5, 1);
}

.fade-enter-from,
.fade-leave-to {
	transform: translateY(10px);
	opacity: 0;
}
</style>

<template>
	<main v-for="board in boards" :key="board.id">
		<div class="user-card card">
			<div class="user">
				<img :src="profileImage()" alt="프로필 사진" class="user-img" />
				<div class="user-content">
					<div class="user-info">
						<div class="user-nickname">{{ board.userName }}</div>
						<div class="user-id">@{{ userEmail(board.userEmail) }}</div>
					</div>
					<div class="user-date">{{ boardDate(board.createdAt) }}</div>
				</div>
				<PopOver
					v-if="mode === 'profile'"
					@updatePost="updatePost"
					:id="board.id"
				/>
			</div>
			<div class="content">
				<PostContent :board="board" />
				<img
					:src="`http://placeimg.com/400/200/any/${board.id}`"
					alt="게시물 사진"
					class="content-img"
				/>
				<div class="content-footer">
					<Liker :id="board.id" />
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
	<Default v-if="lastPost || noPost" />
	<BorderSpinner v-else />
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import CommentForm from '@/components/posts/CommentForm'
import CommentList from '@/components/posts/CommentList'
import PostContent from '@/components/posts/PostContent'
import PopOver from '@/components/posts/PopOver'
import Liker from '@/components/posts/Liker'
import Default from '@/components/common/Default'
import BorderSpinner from '@/components/common/BorderSpinner'

export default {
	components: {
		CommentForm,
		CommentList,
		PostContent,
		PopOver,
		Liker,
		Default,
		BorderSpinner
	},

	props: {
		mode: {
			type: String,
			default: 'home'
		}
	},

	data() {
		return {
			onComment: false
		}
	},

	computed: {
		...mapState('auth', ['user']),
		...mapState('board', ['boards', 'hasMorePost', 'lastPost']),
		noPost() {
			return this.boards.length === 0
		}
	},

	methods: {
		toggleOnComment() {
			this.onComment = !this.onComment
		},
		async getBoards() {
			this.$store.commit('START_LOADING')
			try {
				// 로그인 한 유저의 게시물 불러오기
				if (this.mode === 'profile') {
					await this.$store.dispatch('board/GET_LOAD_BOARDS', {
						userId: this.user.id
					})
					// 전체 게시물 불러오기
				} else if (this.mode === 'home') {
					await this.$store.dispatch('board/GET_LOAD_BOARDS')
				}
			} catch (error) {
				console.error(error)
			} finally {
				this.$store.commit('END_LOADING')
			}
		},
		async onScroll() {
			// 현재 스크롤 높이 계산해서 무한 스크롤 진행
			const showTrue =
				window.scrollY + document.documentElement.clientHeight >
				document.documentElement.scrollHeight - 400
			if (showTrue) {
				if (this.hasMorePost) {
					this.getBoards()
				}
			}
		},
		updatePost() {
			// 수정 및 삭제 후 게시판 정보 초기화 후에 정보 갱신하기
			this.$store.commit('board/CLEAR_BOARDS')
			this.getBoards()
		},
		// 데이터 필터링
		userEmail(email) {
			if (email) {
				return /.+(?=@)/.exec(email)[0]
			}
		},
		boardDate(date) {
			return moment(date).format('YYYY년 MM월 DD일 hh:mm')
		},
		profileImage(image) {
			return image || require('@/assets/images/default.png')
		}
	},

	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},

	beforeUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	}
}
</script>

<style lang="scss" src="./style.scss" scoped>
// scss 파일 분리
</style>

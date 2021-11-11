<template>
	<main v-for="board in boards" :key="board.id">
		<div class="user-card card">
			<div class="user">
				<img :src="profileImage()" alt="프로필 사진" class="user-img" />
				<div class="user-content">
					<div class="user-info">
						<div class="user-nickname">{{ board.userName }}</div>
						<div class="user-id">@{{ userEamilFatch }}</div>
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
	<Default v-if="lastPost" />
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
import CommentForm from '@/components/posts/CommentForm'
import CommentList from '@/components/posts/CommentList'
import PopOver from '@/components/posts/PopOver'
import Default from '@/components/common/Default'

export default {
	components: {
		CommentForm,
		CommentList,
		PopOver,
		Default
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
		// board 이메일로 다시 변경하기
		// board 이메일로 다시 변경하기
		// board 이메일로 다시 변경하기
		// board 이메일로 다시 변경하기
		// board 이메일로 다시 변경하기
		...mapGetters('auth', ['userEamilFatch'])
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
		// userEmail(email) {
		// 	return /.+(?=@)/.exec(email)[0]
		// },
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

import { mapState } from 'vuex'
import moment from 'moment'
import CommentList from '@/components/posts/CommentList'
import PostContent from '@/components/posts/PostContent'
import Images from '@/components/posts/Images'
import PopOver from '@/components/posts/PopOver'
import Liker from '@/components/posts/Liker'
import { getComments } from '@/api/board'

export default {
	components: {
		CommentList,
		PostContent,
		Images,
		PopOver,
		Liker
	},

	props: {
		mode: {
			type: String,
			default: 'home'
		},
		board: {
			type: Object,
			require: true
		}
	},

	data() {
		return {
			onComment: false,
			count: 0
		}
	},

	computed: {
		...mapState('auth', ['user']),
		...mapState('board', ['boards', 'hasMorePost', 'lastPost'])
	},

	methods: {
		async commentCount() {
			try {
				const { data } = await getComments(this.board.id)
				this.count = data.comments.length
			} catch (error) {
				console.error(error)
			}
		},
		updateComment() {
			this.commentCount()
		},
		toggleOnComment() {
			this.onComment = !this.onComment
		},
		toUserFindPage(id) {
			this.router.push(`/user/${id}`)
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
		// 매개변수 데이터 가공
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
		},
		myPost(boardEmail) {
			return this.user.email === boardEmail
		}
	},

	created() {
		this.commentCount()
	},

	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},

	beforeUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	}
}

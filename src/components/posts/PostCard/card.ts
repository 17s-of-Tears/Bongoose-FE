import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import moment from 'moment'
import customAlert from '@/utils/customAlert'
import { getCommentsAPI } from '@/api/board'
import { CommonMutationTypes } from '@/store/common/mutations'
import { BoardActionTypes } from '@/store/board/actions'
import { BoardMutationTypes } from '@/store/board/mutations'
import { AuthActionTypes } from '@/store/auth/actions'
import CommentList from '@/components/posts/CommentList.vue'
import PostContent from '@/components/posts/PostContent.vue'
import Images from '@/components/posts/Images.vue'
import PopOver from '@/components/posts/PopOver.vue'
import Liker from '@/components/posts/Liker.vue'

export default defineComponent({
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
			required: true
		},
		keyword: {
			type: String,
			default: null
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
		...mapState('board', ['boards', 'hasMorePost', 'lastPost']),
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},

	methods: {
		async commentCount() {
			try {
				const { data } = await getCommentsAPI(this.board.id)
				this.count = data.comments.length
			} catch {
				customAlert('잠시 후에 시도해주세요.')
			}
		},
		async getBoardsAPI() {
			this.$store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			try {
				switch (this.mode) {
					case 'profile': // 로그인 한 유저의 게시물 불러오기
						await this.$store.dispatch(`board/${BoardActionTypes.GET_LOAD_BOARDS}`, {
							userId: this.user.id
						})
						break
					case 'search': // 해쉬태그 검색 결과 게시물 불러오기
						await this.$store.dispatch(`board/${BoardActionTypes.GET_LOAD_BOARDS}`, {
							keyword: this.keyword
						})
						break
					case 'home': // 전체 게시물 불러오기
						await this.$store.dispatch(`board/${BoardActionTypes.GET_LOAD_BOARDS}`)
						break
					default:
						this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
						customAlert('게시물 불러오기를 실패했습니다')
						break
				}
			} catch (error) {
				customAlert('게시물 불러오기를 실패했습니다')
			} finally {
				this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
			}
		},
		async onScroll() {
			// 현재 스크롤 높이 계산해서 무한 스크롤 진행
			const showTrue =
				window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 400
			if (showTrue) {
				if (this.hasMorePost) {
					this.getBoardsAPI()
				}
			}
		},
		async updatePost() {
			// 수정 및 삭제 후 게시판 정보 초기화 후에 정보 갱신하기
			this.$store.commit(`board/${BoardMutationTypes.CLEAR_BOARDS}`)
			this.getBoardsAPI()
			this.$store.dispatch(`auth/${AuthActionTypes.USER_INFO}`)
		},
		updateComment() {
			this.commentCount()
		},
		toggleOnComment() {
			this.onComment = !this.onComment
		},
		toUserFindPage(id: string) {
			this.$router.push(`/user_profile/${id}`)
		},
		// 매개변수 데이터 가공
		userEmail(email: string) {
			if (email) {
				return /.+(?=@)/.exec(email)![0]
			}
		},
		boardDate(date: Date) {
			return moment(date).format('YYYY년 MM월 DD일 hh:mm')
		},
		profileImage(image: string | null) {
			return image !== null ? `${this.imageURI}/${image}` : require('@/assets/images/default.png')
		},
		myPost(boardEmail: string) {
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
})

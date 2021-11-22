import { mapState } from 'vuex'
import UploadImages from '@/components/common/modal/UploadImages'
import { getBoard, createBoard, updateBoard } from '@/api/board'

export default {
	components: {
		UploadImages
	},

	props: {
		mode: {
			type: String,
			reqired: true
		},
		id: {
			type: Number,
			default: 0
		}
	},

	data() {
		return {
			boardContent: '',
			images: [],
			urls: [],
			imageValid: false
		}
	},

	computed: {
		...mapState('auth', ['user']),
		contentValid() {
			return !this.boardContent ? true : false
		},
		title() {
			return this.mode === 'writer' ? '작성' : '수정'
		}
	},

	methods: {
		boardWriting() {
			let hashtags = null
			const content = this.boardContent.replace(/#[^\s#]+/g, '')
			const formData = new FormData()
			if (this.boardContent.includes('#')) {
				hashtags = this.boardContent.match(/#[^\s#]+/g).map(v => v.substring(1))
			}
			if (this.images.length > 0) {
				Array.from(this.images).forEach(v => formData.append('images', v))
				Array.from(hashtags).forEach(v => formData.append('hashtags', v))
				formData.append('content', content)
				if (this.mode === 'writer') {
					this.createBoardFunc(formData)
				} else if (this.mode === 'update') {
					this.updateBoardFunc(this.id, formData)
				}
			} else {
				if (this.mode === 'writer') {
					this.createBoardFunc({ content, hashtags })
				} else if (this.mode === 'update') {
					this.updateBoardFunc(this.id, { content, hashtags })
				}
			}
		},
		// 중복 코드 정리
		async createBoardFunc(payload) {
			try {
				await createBoard(payload)
				this.$store.commit('SET_MESSAGE', '글 작성이 완료되었습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
				this.$emit('updatePost')
				this.clearFormData()
			} catch {
				this.$store.commit('SET_MESSAGE', '글 작성이 실패하였습니다.')
				this.$store.dispatch('AUTO_SET_ALERT')
			} finally {
				this.boardContent = ''
			}
		},
		async updateBoardFunc(id, data) {
			try {
				await updateBoard(id, data)
				this.$store.commit('SET_MESSAGE', '글 수정이 완료되었습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
				this.$emit('updatePost')
				this.clearFormData()
			} catch {
				this.$store.commit('SET_MESSAGE', '글 수정이 실패하였습니다.')
				this.$store.dispatch('AUTO_SET_ALERT')
			}
		},
		onClickImageUpload() {
			this.$refs.imageInput.click()
		},
		// 이미지 업로드
		onChangeImages(e) {
			if (this.images.length < 4) {
				// 이미지 썸네일
				const file = e.target.files[0]
				this.images.push(file)
				this.urls.push(URL.createObjectURL(file))
			} else {
				this.imageValid = true
				setTimeout(() => {
					this.imageValid = false
				}, 1500)
			}
		},
		// 해당 이미지 삭제
		remove(index) {
			this.images.splice(index, 1)
			this.urls.splice(index, 1)
		},
		// 내용 값 초기화
		clearFormData() {
			if (this.mode === 'writer') {
				this.boardContent = ''
				this.images = []
				this.urls = []
			}
		},
		async getOneBoardInfo() {
			if (this.mode !== 'update') return null
			try {
				const { data } = await getBoard(this.id)
				const hashtags = data.hashtags.map(v => `#${v.hashtag}`)
				this.boardContent = data.content + hashtags.join(' ')
				this.images = data.images
				this.urls = data.images.map(
					v => `${process.env.VUE_APP_URI}/${v.imageUrl}`
				)
			} catch (error) {
				console.error(error)
			}
		}
	},

	created() {
		this.getOneBoardInfo()
	}
}

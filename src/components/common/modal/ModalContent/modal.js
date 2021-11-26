import { mapState } from 'vuex'
import UploadImages from '@/components/common/modal/UploadImages'
import { getBoardAPI, createBoardAPI, updateBoardAPI } from '@/api/board'
import customAlert from '@/utils/customAlert'

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

	emits: ['updatePost'],

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
		/**
		 * 1. 해시태그 없을 때 오류남 [o]
		 * 2. 해시태그 한개만 입력했을 때 문자열로 전송됨
		 * 3. 이미지수정 문제있음 (기존이미지가 [object Object] 로 됨)
		 */
		boardWriting() {
			let hashtags = null
			const content = this.boardContent.replace(/#[^\s#]+/g, '')
			const formData = new FormData()
			if (this.boardContent.includes('#')) {
				hashtags = this.boardContent.match(/#[^\s#]+/g).map(v => v.substring(1))
			}
			if (this.images.length > 0) {
				// 수정 모드일때 proxy 객체 엑세스
				if (this.mode === 'update') {
					console.log('update', this.images)
					// const updateImages = JSON.parse(JSON.stringify(this.images))[0]
					// console.log('update', updateImages)
					// console.log(typeof updateImages)
					// updateImages.forEach(v => formData.append('images', v))
					Array.from(this.images).forEach(v => formData.append('images', v))
				} else {
					console.log('writer', this.images)
					Array.from(this.images).forEach(v => formData.append('images', v))
				}
				// 해시태그 있을 때만 formData에 저장
				hashtags &&
					Array.from(hashtags).forEach(v => formData.append('hashtags', v))
				formData.append('content', content)
				if (this.mode === 'writer') {
					// 글 쓰기
					this.createBoardAPIFunc(formData)
				} else if (this.mode === 'update') {
					// 글 수정
					this.updateBoardAPIFunc(this.id, formData)
				}
			} else {
				if (this.mode === 'writer') {
					// 글 쓰기
					this.createBoardAPIFunc({ content, hashtags })
				} else if (this.mode === 'update') {
					// 글 수정
					this.updateBoardAPIFunc(this.id, { content, hashtags })
				}
			}
		},
		// 중복 코드 정리 (글 쓰기)
		async createBoardAPIFunc(payload) {
			try {
				await createBoardAPI(payload)
				customAlert('글 작성이 완료되었습니다!')
				this.$emit('updatePost')
				this.clearFormData()
			} catch {
				customAlert('글 작성이 실패하였습니다.')
			} finally {
				this.boardContent = ''
			}
		},
		// 중복 코드 정리 (글 수정)
		async updateBoardAPIFunc(id, data) {
			try {
				await updateBoardAPI(id, data)
				customAlert('글 수정이 완료되었습니다!')
				this.$emit('updatePost')
				this.clearFormData()
			} catch {
				customAlert('글 수정이 실패하였습니다.')
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
				console.log(e.target.files[0])
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
				const { data } = await getBoardAPI(this.id)
				const hashtags = data.hashtags.map(v => `#${v.hashtag}`)
				this.boardContent = data.content + hashtags.join(' ')
				console.log(data.images)
				this.images.push(data.images)
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

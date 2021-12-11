import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import UploadImages from '@/components/common/modal/UploadImages.vue'
import { getBoardAPI, createBoardAPI, updateBoardAPI } from '@/api/board'
import customAlert from '@/utils/customAlert'
import { ReqBoardUpdateData, ReqBoardWritingData } from '@/api/board/types'
import { AuthActionTypes } from '@/store/auth/actions'

export default defineComponent({
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
			images: [] as File[],
			getImageInfo: [] as any,
			imageId: [] as number[],
			urls: [] as string[],
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
			const formData = new FormData()
			// 해시태그 제외한 내용을 content에 저장
			const content = this.boardContent.replace(/#[^\s#]+/g, '')
			let hashtags = null
			// 해시태그 있을 때 해시태그 추출
			if (this.boardContent.includes('#')) {
				hashtags = this.boardContent.match(/#[^\s#]+/g)!.map(v => v.substring(1))
			}
			console.log(hashtags)
			// 이미지정보가 있을 경우 (multipart/form-data)
			if (this.images.length > 0 || this.getImageInfo.length > 0) {
				Array.from(this.images).forEach(v => formData.append('images', v))
				hashtags && // 해시태그 있을 때만 formData에 저장
					Array.from(hashtags).forEach(v => formData.append('hashtags', v))
				formData.append('content', content)
				// 이미지 수정
				this.imageId.forEach((v: any) => formData.append('overwrite', v))
				console.log(formData.getAll('overwrite'))
				if (this.mode === 'writer') {
					this.createBoardAPIFunc(formData, 'form') // 글 쓰기
				} else if (this.mode === 'update') {
					this.updateBoardAPIFunc(this.id, formData, 'form') // 글 수정
				}
				// 이미지가 없는 경우 (application/json)
			} else {
				if (this.mode === 'writer') {
					this.createBoardAPIFunc({ content, hashtags }, 'body') // 글 쓰기
				} else if (this.mode === 'update') {
					this.updateBoardAPIFunc(this.id, { content, hashtags }, 'body') // 글 수정
				}
			}
		},
		// 중복 코드 정리 (글 쓰기)
		async createBoardAPIFunc(payload: ReqBoardWritingData | FormData, type: 'form' | 'body') {
			try {
				await createBoardAPI(payload, type)
				customAlert('글 작성이 완료되었습니다!')
				this.$emit('updatePost')
				this.clearFormData()
				this.$store.dispatch(`auth/${AuthActionTypes.USER_INFO}`)
			} catch {
				customAlert('글 작성이 실패하였습니다.')
			} finally {
				this.boardContent = ''
			}
		},
		// 중복 코드 정리 (글 수정)
		async updateBoardAPIFunc(id: number, data: ReqBoardUpdateData | FormData, type: 'form' | 'body') {
			try {
				await updateBoardAPI(id, data, type)
				customAlert('글 수정이 완료되었습니다!')
				this.$emit('updatePost')
				this.clearFormData()
				this.$store.dispatch(`auth/${AuthActionTypes.USER_INFO}`)
			} catch {
				customAlert('글 수정이 실패하였습니다.')
			}
		},
		onClickImageUpload() {
			const refImage = this.$refs.imageInput as HTMLInputElement
			refImage.click()
		},
		// 이미지 업로드
		onChangeImages(event: Event) {
			if (this.images.length < 4) {
				// 이미지 썸네일
				const target = event.target as HTMLInputElement
				const file: File = (target.files as FileList)[0]
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
		remove(index: number) {
			this.images.splice(index, 1)
			this.imageId.splice(index, 1)
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
		// 현재 게시물 정보 가져오기
		async getOneBoardInfo() {
			if (this.mode !== 'update') return null
			try {
				const { data } = await getBoardAPI(this.id)
				const hashtags = data.hashtags.map(v => `#${v.hashtag}`)
				this.boardContent = data.content + hashtags.join(' ')
				this.getImageInfo.push(data.images)
				data.images.forEach(v => this.imageId.push(v.id))
				console.log(this.imageId)
				this.urls = data.images.map(v => `${process.env.VUE_APP_URI}/${v.imageUrl}`)
			} catch (error) {
				console.error(error)
			}
		}
	},

	created() {
		this.getOneBoardInfo()
	}
})

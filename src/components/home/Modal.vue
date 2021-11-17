<template>
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">게시물 작성하기</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
						@click="clearFormData"
					></button>
				</div>
				<div class="modal-body">
					<div>
						<label class="form-label"></label>
						<textarea
							v-model="boardContent"
							class="form-control"
							:placeholder="`${user.name} 님!오늘 무슨일이 있었나요?`"
							rows="5"
						></textarea>
						<transition name="fade">
							<span v-if="contentValid" class="valid">
								내용이 비어있습니다! 입력해 주세요!
							</span>
						</transition>
					</div>
					<!-- 이미지 업로드 버튼 -->
					<input ref="imageInput" type="file" hidden @change="onChangeImages" />
					<i class="bi bi-image" type="button" @click="onClickImageUpload" />
					<small class="text-black-50">
						&nbsp;* 이미지는 최대 4개 까지 게시가 가능합니다!
					</small>
					<UploadImages v-if="urls" :urls="urls" @remove="remove" />
					<transition name="fade">
						<span v-if="imageValid" class="valid">
							이미지는 4장까지 업로드 가능합니다!
						</span>
					</transition>
				</div>
				<div class="modal-footer">
					<button
						@click="boardWriting"
						:disabled="contentValid"
						type="button"
						class="btn btn-primary subbtn"
						data-bs-dismiss="modal"
					>
						게시글 게시
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { createBoard } from '@/api/board'
import { mapState } from 'vuex'
import UploadImages from '@/components/home/UploadImages'

export default {
	components: {
		UploadImages
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
		}
	},

	methods: {
		async boardWriting() {
			this.$store.commit('START_LOADING')
			const content = this.boardContent.replace(/#[^\s#]+/g, '')
			let hashtags = null
			if (this.boardContent.includes('#')) {
				hashtags = this.boardContent.match(/#[^\s#]+/g).map(v => v.substring(1))
			}
			try {
				await createBoard({ content, hashtags })
				this.$store.commit('SET_MESSAGE', '글 작성이 완료되었습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
				this.$emit('updatePost')
				this.clearFormData()
			} catch {
				this.$store.commit('SET_MESSAGE', '글 작성이 실패하였습니다.')
				this.$store.dispatch('AUTO_SET_ALERT')
			} finally {
				this.$store.commit('END_LOADING')
				this.boardContent = ''
			}
		},
		onClickImageUpload() {
			this.$refs.imageInput.click()
		},
		// 이미지 업로드
		onChangeImages(e) {
			if (this.images.length < 4) {
				const file = e.target.files[0]
				this.images.push(file)
				this.urls.push(URL.createObjectURL(file))
			} else {
				this.imageValid = true
			}
		},
		// 해당 이미지 삭제
		remove(index) {
			this.images.splice(index, 1)
			this.urls.splice(index, 1)
			this.imageValid = false
		},
		// 내용 값 초기화
		clearFormData() {
			this.boardContent = ''
			this.images = []
			this.urls = []
		}
	}
}
</script>

<style lang="scss" scoped>
.subbtn {
	width: 100%;
	border-radius: 10px;
	height: 50px;
}

.modal-body {
	position: relative;
}

.bi-image {
	font-size: 25px;
}

textarea.form-control {
	height: 200px;
}

textarea::placeholder {
	font-size: 20px;
}

.bi-image {
	color: $primary;
	position: absolute;
	top: 200px;
	bottom: 0;
	right: 30px;
}

.valid {
	color: $danger;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.4s, transform 0.6s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

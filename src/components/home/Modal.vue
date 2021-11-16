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
					</div>
					<!-- 이미지 업로드 버튼 -->
					<input
						ref="imageInput"
						type="file"
						multiple
						hidden
						@change="onChangeImages"
					/>
					<i class="bi bi-image" type="button" @click="onClickImageUpload" />
					<small class="text-black-50">
						&nbsp;* 이미지는 최대 4개 까지 게시가 가능합니다!
					</small>
					<UploadImages v-if="urls" :urls="urls" />
				</div>
				<div class="modal-footer">
					<button
						@click="boardWriting"
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
			urls: []
		}
	},
	computed: {
		...mapState('auth', ['user'])
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
			console.log(e.target.files[0])
			const file = e.target.files[0]
			this.urls.push(URL.createObjectURL(file))
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
	margin-bottom: 20px;
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
</style>

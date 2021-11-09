<template>
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
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
							v-model="content"
							class="form-control"
							:placeholder="`${user.name} 님!오늘 무슨일이 있었나요?`"
							rows="5"
						></textarea>
					</div>
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

export default {
	data() {
		return {
			content: ''
		}
	},

	computed: {
		...mapState('auth', ['user'])
	},

	methods: {
		async boardWriting() {
			this.$store.commit('START_LOADING')
			try {
				const data = {
					content: this.content
				}
				await createBoard(data)
				this.$store.commit('SET_MESSAGE', '글 작성이 완료되었습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
				this.$emit('updatePost')
			} catch {
				this.$store.commit('SET_MESSAGE', '글 작성이 실패하였습니다.')
				this.$store.dispatch('AUTO_SET_ALERT')
			} finally {
				this.$store.commit('END_LOADING')
			}
		},
		onClickImageUpload() {
			this.$refs.imageInput.click()
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
	color: $primary;
	position: absolute;
	top: 140px;
	bottom: 0;
	right: 30px;
}
</style>

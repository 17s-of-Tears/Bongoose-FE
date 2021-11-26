<template>
	<div class="modal fade" id="updateModal" aria-hidden="true" tabindex="-1">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">게시물 수정하기</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div>
						<textarea v-model="content" class="form-control" rows="5">
						</textarea>
					</div>
					<input ref="imageInput" type="file" multiple hidden />
					<i class="bi bi-image" type="button" />
					<small class="text-black-50">
						&nbsp;* 이미지는 최대 4개 까지 게시가 가능합니다!
					</small>
				</div>
				<div class="modal-footer">
					<button
						@click="onUpdateBoard"
						type="button"
						class="btn btn-primary subbtn"
						data-bs-dismiss="modal"
					>
						게시글 수정
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getBoard, updateBoard } from '@/api/board'

export default {
	props: {
		id: {
			type: Number,
			requried: true
		}
	},

	data() {
		return {
			content: '',
			addHashtags: '',
			deleteHashtags: ''
		}
	},

	methods: {
		async patchBoardInfo() {
			this.$store.commit('START_LOADING')
			try {
				const { data } = await getBoard(this.id)
				this.content = data.content
			} catch (error) {
				console.error(error)
			} finally {
				this.$store.commit('END_LOADING')
			}
		},
		async onUpdateBoard() {
			this.$store.commit('START_LOADING')
			try {
				await updateBoard(this.id, {
					content: this.content,
					addHashtags: this.addHashtags,
					deleteHashtags: this.deleteHashtags
				})
				this.$store.commit('SET_MESSAGE', '게시글이 수정되었습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
				this.$emit('updatePost')
			} catch (error) {
				console.error(error)
			} finally {
				this.$store.commit('END_LOADING')
			}
		}
	},

	created() {
		this.patchBoardInfo()
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

.modal-content {
	height: 450px;
}

.bi-image {
	font-size: 25px;
}

textarea.form-control {
	height: 200px;
	margin-bottom: 20px;
}

.text-black-50 {
	font-size: 20px;
}

textarea::placeholder {
	font-size: 20px;
}

.bi-image {
	color: $primary;
	position: absolute;
	top: 180px;
	bottom: 0;
	right: 30px;
}
</style>

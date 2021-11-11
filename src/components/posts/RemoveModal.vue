<template>
	<div class="modal fade" id="removeModal" aria-hidden="true" tabindex="-1">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">게시글 삭제 확인</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">게시글을 삭제하시겠습니까?</div>
				<div class="modal-footer">
					<button class="btn btn-secondary" data-bs-dismiss="modal">
						취소하기
					</button>
					<button
						@click="onRemoveBoard"
						type="button"
						class="btn btn-primary subbtn"
						data-bs-dismiss="modal"
					>
						삭제하기
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { removeBoard } from '@/api/board'

export default {
	props: {
		id: {
			type: Number,
			requried: true
		}
	},

	methods: {
		async onRemoveBoard() {
			this.$store.commit('START_LOADING')
			try {
				await removeBoard(this.id)
				this.$store.commit('SET_MESSAGE', '게시글을 삭제했습니다!')
				this.$store.dispatch('AUTO_SET_ALERT')
				this.$emit('updatePost')
			} catch (error) {
				console.error(error.response.data)
				this.$store.commit('SET_MESSAGE', error.response.data)
				this.$store.dispatch('AUTO_SET_ALERT')
			} finally {
				this.$store.commit('END_LOADING')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.modal-footer {
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-body {
	font-size: 17px;
	text-align: center;
}

.btn {
	padding: 10px 30px;
}
</style>

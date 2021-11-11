<template>
	<div
		class="modal fade"
		id="profileCardModal"
		tabindex="-1"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">프로필 수정</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<label class="col-form-label">닉네임</label>
							<input v-model="nickname" class="form-control" type="text" />
						</div>
						<div class="mb-3">
							<label class="col-form-label"> 1줄 자기소개 </label>
							<textarea
								class="form-control"
								placeholder="1줄 자기소개를 입력해주세요!"
								v-model="description"
							></textarea>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button
						class="btn btn-primary"
						@click="onClickUpdateProfile"
						data-bs-dismiss="modal"
					>
						수정하기
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { updateUser } from '@/api/user'
import { deleteUserLocalStorage } from '@/utils/localStorage'

export default {
	props: {
		user: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			nickname: this.user.name,
			description: this.user.description
		}
	},

	methods: {
		async onClickUpdateProfile() {
			this.$store.commit('START_LOADING')
			try {
				await updateUser({
					nickname: this.nickname,
					description: this.description
				})
				// 유저 정보 갱신
				deleteUserLocalStorage()
				this.$store.dispatch('auth/USER_INFO')
			} catch (error) {
				console.error(error)
			} finally {
				this.$store.commit('END_LOADING')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>

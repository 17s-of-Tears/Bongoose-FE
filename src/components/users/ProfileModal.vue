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
				</div>
				<div class="modal-body">
					<form>
						<img
							:src="url || profileImage(user.imageUrl)"
							:alt="user.name"
							class="profile-img"
							@click="onClickImageUpload"
						/>
						<input
							ref="imageInput"
							type="file"
							hidden
							@change="onChangeImages"
						/>
						<div class="mb-3">
							<label class="col-form-label">닉네임</label>
							<input v-model="nickname" class="form-control" type="text" />
						</div>
						<div class="mb-3">
							<label class="col-form-label">1줄 자기소개</label>
							<textarea
								class="form-control"
								placeholder="1줄 자기소개를 입력해주세요!"
								v-model="description"
							/>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
					>
						취소하기
					</button>
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
			description: this.user.description,
			imageToggle: false,
			image: null,
			url: null
		}
	},

	computed: {
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},

	methods: {
		async onClickUpdateProfile() {
			this.$store.commit('START_LOADING')
			// 이미지수정 경우 분기처리
			// 코드 정리 해야댕~~~~
			if (this.image) {
				try {
					const formData = new FormData()
					formData.append('nickname', this.nickname)
					formData.append('description', this.description)
					formData.append('image', this.image)
					await updateUser(formData)
					// 유저 정보 갱신
					deleteUserLocalStorage()
					this.$store.dispatch('auth/USER_INFO')
				} catch (error) {
					console.error(error)
				} finally {
					this.$store.commit('END_LOADING')
				}
			} else {
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
		},
		// 이미지 추출
		profileImage(image) {
			return image === null
				? require('@/assets/images/default.png')
				: `${this.imageURI}/${image}`
		},
		onClickImageUpload() {
			if (this.imageToggle) {
				this.$refs.imageInput.click()
				this.imageToggle = !this.imageToggle
			} else {
				this.url = null
				this.imageToggle = !this.imageToggle
			}
		},
		// 이미지 업로드
		onChangeImages(e) {
			// 이미지 썸네일
			const file = e.target.files[0]
			this.image = file
			console.log(this.image)
			this.url = URL.createObjectURL(file)
		}
	}
}
</script>

<style lang="scss" scoped>
.profile-img {
	border-radius: 50%;
	width: 200px;
	height: 200px;
	display: block;
	margin: 15px auto;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		-webkit-filter: brightness(0.3);
		filter: brightness(0.3);
	}
}
</style>

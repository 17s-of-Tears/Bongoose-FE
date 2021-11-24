<template>
	<form @submit.prevent="onSubmitForm" class="login-input">
		<div v-for="(formData, i) in formDatas" :key="i" class="form-floating">
			<input
				v-model="formData.model"
				:type="formData.type"
				class="form-control"
				:id="formData.info"
				:placeholder="`${formData.label}`"
			/>
			<label :for="formData.info">{{ formData.label }}</label>
		</div>
		<div class="form-check">
			<input
				v-model="checkbox"
				class="form-check-input"
				type="checkbox"
				id="checkInput"
			/>
			<label class="form-check-label" for="checkInput">
				이용약관에 동의합니다
			</label>
		</div>
		<div class="login-btn">
			<button type="submit" class="btn btn-primary" :disabled="!valid">
				가입하기
			</button>
		</div>
	</form>
</template>

<script>
import { signupUser } from '@/api/sign'
import customAlert from '@/utils/customAlert'

export default {
	data() {
		return {
			checkbox: false,
			formDatas: [
				{
					type: 'email',
					info: 'emailInput',
					model: '',
					label: '이메일을 입력해주세요.'
				},
				{
					type: 'text',
					info: 'nicknameInput',
					model: '',
					label: '닉네임을 입력해주세요'
				},
				{
					type: 'password',
					info: 'passwordInput',
					model: '',
					label: '비밀번호를 입력해주세요.'
				},
				{
					type: 'password',
					info: 'passwordCheckInput',
					model: '',
					label: '비밀번호를 확인해주세요.'
				}
			]
		}
	},

	computed: {
		valid() {
			// 빈 칸이 있는지 검사 + 체크박스 여부
			return this.formDatas.every(v => v.model !== '') && this.checkbox
		}
	},

	methods: {
		async onSubmitForm() {
			this.$store.commit('START_LOADING')
			try {
				const userInfo = {
					email: this.formDatas[0].model,
					nickname: this.formDatas[1].model,
					password: this.formDatas[2].model
				}
				await signupUser(userInfo)
				customAlert('회원가입에 성공하였습니다!')
				this.$router.push('/login')
			} catch (error) {
				customAlert('회원가입에 실패했습니다!')
			} finally {
				this.$store.commit('END_LOADING')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.login-input {
	width: 635px;
	display: flex;
	flex-direction: column;
	gap: 30px;
}
.login-btn {
	width: 100%;
	> * {
		margin-top: 30px;
		width: 100%;
		border-radius: 20px;
	}
}
</style>

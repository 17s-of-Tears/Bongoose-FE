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
		<div class="login-btn">
			<button type="submit" class="btn btn-primary" :disabled="!valid">
				로그인
			</button>
			<button type="button" class="btn btn-primary" @click="toSignUpPage">
				회원가입
			</button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			formDatas: [
				{
					type: 'email',
					info: 'emailInput',
					model: '',
					label: '이메일을 입력해주세요.'
				},
				{
					type: 'password',
					info: 'passwordInput',
					model: '',
					label: '비밀번호를 입력해주세요.'
				}
			]
		}
	},

	computed: {
		valid() {
			// 빈 칸이 있는지 검사
			return this.formDatas.every(v => v.model !== '')
		}
	},

	methods: {
		toSignUpPage() {
			this.$router.push('/signup')
		},
		async onSubmitForm() {
			try {
				const userData = {
					email: this.formDatas[0].model,
					password: this.formDatas[1].model
				}
				const { data } = await this.$store.dispatch('auth/LOGIN', userData)
				console.log(data)
			} catch (error) {
				console.error(error)
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
	display: flex;
	justify-content: space-between;
	gap: 20px;
	> * {
		margin-top: 30px;
		width: 300px;
		border-radius: 20px;
	}
}
</style>

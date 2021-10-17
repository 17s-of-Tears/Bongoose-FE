<template>
	<div class="login-box">
		<div class="login-inner">
			<Logo class="login-logo" />
			<p>회원 정보를 입력해주세요!</p>
			<SignUpForm />
		</div>
	</div>
</template>

<script>
import Logo from '@/components/home/left_side_menu/Logo'
import SignUpForm from '@/components/login/SignUpForm'

export default {
	components: {
		Logo,
		SignUpForm
	}
}
</script>

<style lang="scss" scoped>
.login-box {
	margin: 50px auto;
	width: 1000px;
	border-radius: 20px;
	background: #fff;
	box-shadow: 5px 5px 10px $gray-400;
	.login-inner {
		padding: 50px 180px 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		.login-logo {
			pointer-events: none;
		}
		p {
			color: $primary;
		}
	}
}
</style>

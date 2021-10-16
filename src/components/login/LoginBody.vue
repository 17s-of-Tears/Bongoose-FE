<template>
	<div class="login-box">
		<div class="login-inner">
			<Logo />
			<p>로그인이 필요한 서비스 입니다.</p>
			<div class="login-input form-floating">
				<div class="form-floating mb-3">
					<input
						type="email"
						class="form-control"
						id="floatingInput"
						placeholder="이메일을 입력해주세요."
					/>
					<label for="floatingInput">이메일을 입력해주세요.</label>
				</div>
				<div class="form-floating">
					<input
						type="password"
						class="form-control"
						id="floatingPassword"
						placeholder="비밀번호를 입력해주세요."
					/>
					<label for="floatingPassword">비밀번호를 입력해주세요.</label>
				</div>
			</div>
			<div class="login-btn">
				<div class="btn btn-primary">로그인</div>
				<div class="btn btn-primary">회원가입</div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '@/components/home/left_side_menu/Logo'

export default {
	components: {
		Logo
	}
}
</script>

<style lang="scss" scoped>
.login-box {
	margin: 100px auto 0;
	width: 1000px;
	border-radius: 20px;
	background: #fff;
	.login-inner {
		padding: 50px 180px 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		p {
			color: $primary;
		}
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
			> * {
				margin-top: 30px;
				width: 300px;
				border-radius: 20px;
			}
		}
	}
}
</style>

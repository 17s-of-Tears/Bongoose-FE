<template>
	<div class="login-box">
		<div class="login-inner">
			<Logo />
			<p>회원 정보를 입력해주세요!</p>
			<div class="login-input form-floating">
				<div class="form-floating">
					<input
						type="email"
						class="form-control"
						id="floatingInput"
						placeholder="이메일을 입력해주세요."
					/>
					<label for="floatingInput">이메일을 입력해주세요.</label>
				</div>
				<div class="login-input form-floating">
					<input
						type="nickname"
						class="form-control"
						id="floatingNick"
						placeholder="닉네임을 입력해주세요!"
					/>
					<label for="floatingNickname">닉네임을 입력해주세요.</label>
				</div>
			</div>
			<div class="login-input form-floating">
				<div class="form-floating">
					<input
						type="password"
						class="form-control"
						id="floatingPassword"
						placeholder="비밀번호를 입력해주세요."
					/>
					<label for="floatingPassword">비밀번호를 입력해주세요.</label>
				</div>
				<div class="login-input form-floating">
					<input
						type="passwordCheck"
						class="form-control"
						id="floatingPasswordCheck"
						placeholder="비밀번호를 확인해주세요."
					/>
					<label for="floatingPasswordCheck">비밀번호를 확인해주세요.</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<label class="form-check-label" for="flexCheckDefault">
						이용약관에 동의합니다
					</label>
				</div>
			</div>

			<div class="login-btn">
				<div class="btn btn-primary">가입하기</div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '@/components/left_menu/Logo'

export default {
	components: {
		Logo
	}
}
</script>

<style lang="scss" scoped>
.mb-3 {
	margin-bottom: 0;
}
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
			> * {
				width: 635px;
				border-radius: 20px;
			}
		}
	}
}
</style>

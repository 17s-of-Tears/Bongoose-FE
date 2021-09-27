<template>
	<nav>
		<Logo />
		<ul>
			<li v-for="nav in navs" :key="nav.name">
				<RouterLink :to="nav.link">
					{{ nav.name }}
				</RouterLink>
			</li>
		</ul>
	</nav>
	<div class="idbox">
		<Logo />
		<p>로그인이 필요한 서비스 입니다.</p>
		<label for="formGroupExampleInput" class="form-label"></label>
		<input
			type="text"
			class="form-control"
			id="formGroupExampleInput"
			placeholder="이메일을 입력해주세요!"
		/>
	</div>
	<div class="passwordbox">
		<label for="formGroupExampleInput2" class="form-label"></label>
		<input
			type="text"
			class="form-control"
			id="formGroupExampleInput2"
			placeholder="비밀번호를 입력해주세요!"
		/>
	</div>
	<button type="button" class="btn btn-primary btn-lg">로그인</button>
	<button type="button" class="btn btn-primary btn-lg">회원가입</button>
</template>

<script>
import Logo from '@/components/menus/Logo'

export default {
	components: {
		Logo
	},

	data() {
		return {
			navs: [
				{
					name: '로그인',
					link: '/login'
				},
				{
					name: '회원가입',
					link: '/join'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;

	ul {
		margin: 0;
		display: flex;
		gap: 15px;
		a {
			@include rem(20);
			text-decoration: none;
		}
	}
}
.idbox {
	width: 30%;
	margin: 0 auto;
	p {
		text-align: center;
		font-size: 25px;
		color: $primary;
	}
}
</style>

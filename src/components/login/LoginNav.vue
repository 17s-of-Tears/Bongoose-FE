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
</style>

<template>
	<nav>
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
export default {
	data() {
		return {
			navs: [
				{
					name: '로그인',
					link: '/login'
				},
				{
					name: '회원가입',
					link: '/memberjoin'
				}
			]
		}
	}
}
</script>

<style></style>

<template>
	<footer>
		<div>개인정보처리방침 및 이용약관</div>
		<div>(C){{ toYear }} 봉구수밥진수 팀</div>
	</footer>
</template>

<script>
export default {
	computed: {
		toYear() {
			return new Date().getFullYear()
		}
	}
}
</script>

<style lang="scss" scoped>
footer {
	position: fixed;
	bottom: 20px;
}
</style>

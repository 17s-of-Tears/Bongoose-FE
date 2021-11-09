<template>
	<div class="not-found">
		<div class="status">404</div>
		<div class="message">Page Not Found!</div>
		<router-link to="/home" class="btn btn-primary btn-lg">Go Home</router-link>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.commit('END_LOADING')
	}
}
</script>

<style lang="scss" scoped>
.not-found {
	line-height: 1.2;
	text-align: center;
	font-family: 'Noto Sans KR', sans-serif;
	padding: 80px 20px;
	.status {
		font-size: 160px;
		color: $primary;
	}
	.message {
		font-size: 50px;
		margin-bottom: 50px;
	}
}
</style>

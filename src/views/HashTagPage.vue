<template>
	<div class="container">
		<h2># 검색 페이지</h2>
		<div>{{ $route.params.id }} 검색함</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.commit('END_LOADING')
	}
}
</script>

<style lang="scss" scoped></style>

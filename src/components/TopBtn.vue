<template>
	<a class="top-btn" href="#header">
		<i class="bi bi-arrow-up-circle-fill top-icon"></i>
	</a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-btn {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 10;
	.top-icon {
		color: $white;
		font-size: 30px;
	}
}
</style>

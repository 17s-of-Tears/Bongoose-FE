<template>
	<div class="spinner-box">
		<div class="spinner-border text-primary spinner" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.spinner-box {
	width: 100%;
	margin: 30px 0;
	text-align: center;
	.spinner {
		width: 2rem;
		height: 2rem;
	}
}
</style>

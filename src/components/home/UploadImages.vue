<template>
	<div class="preview">
		<div
			v-for="(url, index) in urls"
			:key="index"
			:style="{ 'background-image': `url(${url})` }"
			class="image"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		urls: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.preview {
	margin: 20px 0;
	display: flex;
	gap: 10px;
	justify-content: left;
	align-items: center;
	.image {
		$width: 190px;
		width: $width;
		height: $width * 3 / 4;
		background-size: cover;
		background-position: center;
		border-radius: 10px;
	}
}
</style>

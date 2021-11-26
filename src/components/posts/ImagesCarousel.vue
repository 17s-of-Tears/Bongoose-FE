<template>
	<div id="contentCarousel" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button
				v-for="(image, index) in images"
				:key="index"
				type="button"
				data-bs-target="#contentCarousel"
				:data-bs-slide-to="index"
				:aria-label="`Slide ${index + 1}`"
				:class="activeClass(index)"
				:aria-current="index === 0 ? true : null"
				data-bs-interval="false"
			></button>
		</div>
		<div class="carousel-inner">
			<div
				v-for="(image, index) in images"
				:key="index"
				class="carousel-item"
				:class="activeClass(index)"
			>
				<div
					:style="{ 'background-image': `url(${imageURI}/${image})` }"
					class="content-img"
				/>
			</div>
		</div>
		<button
			v-for="carousel in carouselButtons"
			:key="carousel.type"
			:class="`carousel-control-${carousel.type}`"
			type="button"
			data-bs-target="#contentCarousel"
			:data-bs-slide="carousel.type"
		>
			<span
				:class="`carousel-control-${carousel.type}-icon`"
				aria-hidden="true"
			></span>
			<span class="visually-hidden">{{ carousel.content }}</span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			carouselButtons: [
				{ type: 'prev', content: 'Previous' },
				{ type: 'next', content: 'Next' }
			]
		}
	},

	computed: {
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},

	methods: {
		activeClass(index) {
			return { active: index === 0 }
		}
	}
}
</script>

<style lang="scss" scoped>
.content-img {
	$width: 830px;
	width: $width;
	height: $width * 3 / 5;
	background-size: cover;
	background-position: center;
	border-radius: 10px;
	position: relative;
}
</style>

<template>
	<div :id="`contentCarousel${imageId}`" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button
				v-for="(image, index) in images"
				:key="index"
				type="button"
				:data-bs-target="`#contentCarousel${imageId}`"
				:data-bs-slide-to="index"
				:aria-label="`Slide ${index + 1}`"
				:class="activeClass(index)"
				:aria-current="index === 0 ? true : null"
				data-bs-interval="false"
			></button>
		</div>
		<div class="carousel-inner">
			<div v-for="(image, index) in images" :key="index" class="carousel-item" :class="activeClass(index)">
				<div :style="{ 'background-image': `url(${imageURI}/${image})` }" class="content-img" />
			</div>
		</div>
		<button
			v-for="carousel in carouselButtons"
			:key="carousel.type"
			:class="`carousel-control-${carousel.type}`"
			type="button"
			:data-bs-target="`#contentCarousel${imageId}`"
			:data-bs-slide="carousel.type"
		>
			<span :class="`carousel-control-${carousel.type}-icon`" aria-hidden="true"></span>
			<span class="visually-hidden">{{ carousel.content }}</span>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
		imageURI(): string {
			return process.env.VUE_APP_URI
		},
		imageId() {
			// 고유 값을 만들기 위해 랜덤 문자열 뽑기
			return (((1 + Math.random()) * 0x10000) | 0).toString(8).substring(1)
		}
	},

	methods: {
		activeClass(index: number) {
			return { active: index === 0 }
		}
	}
})
</script>

<style lang="scss" scoped>
.content-img {
	// $width: 100%;
	// width: $width;
	// height: $width * 3 / 5;
	height: 500px;
	background-size: cover;
	background-position: center;
	border-radius: 10px;
	position: relative;
	@include media-breakpoint-down(md) {
		height: 350px;
	}
	@include media-breakpoint-down(lg) {
		height: 400px;
	}
}
</style>

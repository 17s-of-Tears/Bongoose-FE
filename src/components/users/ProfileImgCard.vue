<template>
	<div class="card">
		<span>{{ user.name }}님의 최근 사진</span>
		<div class="row">
			<div v-for="(imageUrl, index) in imageUrls" :key="index" class="col-lg-3 col-sm-4 image-box">
				<img :src="profileImage(imageUrl)" :alt="`${user.name}님의 최근 사진`" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
	data() {
		return {
			imageUrls: [] as string[]
		}
	},

	computed: {
		...mapState('auth', ['user']),
		imageURI() {
			return process.env.VUE_APP_URI
		}
	},

	watch: {
		user(val) {
			console.log('test', val)
			this.setImagesInfo()
		}
	},

	methods: {
		// 최근 사진 8장 뽑는 함수, 8장 이하일 때 부족한 만큼 default 이미지 채우기
		setImagesInfo() {
			const imageUrlsInfo = new Array(8).fill('default') as string[]
			for (let i = 0; i < imageUrlsInfo.length; i += 1) {
				if (this.user.images[i]) {
					imageUrlsInfo.unshift(this.user.images[i].imageUrl)
					imageUrlsInfo.pop()
				}
			}
			this.imageUrls = imageUrlsInfo
		},
		// 이미지 데이터 가공
		profileImage(imageUrl: string) {
			if (imageUrl === 'default') {
				return require('@/assets/images/default_image.png')
			} else {
				return `${this.imageURI}/${imageUrl}`
			}
		}
	},

	created() {
		this.setImagesInfo()
	}
})
</script>

<style lang="scss" scoped>
.card {
	width: 600px;
	padding: 25px;
	border-radius: 20px !important;
	> span {
		@include rem(20);
		color: $primary;
		margin-bottom: 10px;
		flex-grow: 0 !important;
	}
	.row {
		.image-box {
			height: auto;
			display: flex;
			justify-content: center;
			padding: 10px;
			@media (max-width: 1500px) {
				height: 100px;
			}
			img {
				$width: 100px;
				width: $width;
				height: $width;
				border-radius: 20px;
				object-fit: cover;
				box-shadow: 5px 5px 12px 0 #bbb;
				@media (max-width: 1500px) {
					width: 80px;
				}
				@media (max-width: 1250px) {
					width: 65px;
				}
				@media (max-width: 584px) {
					padding-bottom: 10px;
				}
			}
		}
	}
}
</style>

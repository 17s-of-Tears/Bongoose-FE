<template>
	<div class="card">
		<span>{{ userName }}님의 최근 사진</span>
		<div class="row">
			<div v-for="(imageUrl, index) in imageUrls" :key="index" class="col-lg-3 col-sm-4 image-box">
				<img :src="profileImage(imageUrl)" :alt="`${userName}님의 최근 사진`" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
	data() {
		return {
			imageUrls: [] as string[],
			width: window.innerWidth
		}
	},

	props: {
		another: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: null
		},
		images: {
			type: Array as PropType<string[]>,
			default: () => []
		}
	},

	computed: {
		...mapState('auth', ['user']),
		viewport() {
			if (this.width >= 1100) {
				return 8
			} else if (this.width >= 584) {
				return 6
			} else {
				return 4
			}
		},
		imageURI() {
			return process.env.VUE_APP_URI
		},
		userName() {
			return this.another ? this.name : this.user.name
		},
		userImages() {
			return this.another ? this.images : this.user.images
		}
	},

	watch: {
		user() {
			this.setImagesInfo()
		},
		images() {
			this.setImagesInfo()
		},
		viewport() {
			this.setImagesInfo()
		}
	},

	methods: {
		// 최근 사진 8장 뽑는 함수, 8장 이하일 때 부족한 만큼 default 이미지 채우기
		setImagesInfo() {
			const imageUrlsInfo = new Array(this.viewport).fill('default') as string[]
			for (let i = 0; i < imageUrlsInfo.length; i += 1) {
				if (this.userImages[i]) {
					imageUrlsInfo.unshift(this.userImages[i].imageUrl)
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
		},
		handleResize() {
			this.width = window.innerWidth
		}
	},

	created() {
		this.setImagesInfo()
	},

	mounted() {
		window.addEventListener('resize', this.handleResize)
	},

	beforeUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}
})
</script>

<style lang="scss" scoped>
.card {
	width: 600px;
	padding: 25px;
	border-radius: 20px !important;
	@include media-breakpoint-down(md) {
		width: 100%;
	}
	> span {
		@include rem(20);
		color: $primary;
		margin-bottom: 10px;
		flex-grow: 0 !important;
	}
	.row {
		.image-box {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			padding: 10px;
			@media (max-width: 1500px) {
				height: 100px;
			}
			img {
				width: 100px;
				height: 100px;
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

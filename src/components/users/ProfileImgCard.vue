<template>
	<div class="card">
		<span>제봉님의 최근 사진</span>
		<div class="row">
			<div
				v-for="index in viewport"
				:key="index"
				class="col-lg-3 col-sm-4 image-box"
			>
				<img src="http://placeimg.com/100/100/any" alt="dd" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			width: window.innerWidth
		}
	},

	computed: {
		viewport() {
			if (this.width >= 1100) {
				return 8
			} else if (this.width >= 584) {
				return 6
			} else {
				return 4
			}
		}
	},

	methods: {
		handleResize() {
			this.width = window.innerWidth
		}
	},

	mounted() {
		window.addEventListener('resize', this.handleResize)
	},

	beforeUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}
}
</script>

<style lang="scss" scoped>
.card {
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

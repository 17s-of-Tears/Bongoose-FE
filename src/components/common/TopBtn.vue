<template>
	<a class="top-btn" @click="toTop">
		<div class="top-btn-box">
			<i class="bi bi-arrow-up-short top-icon"></i>
		</div>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		page: {
			type: String,
			required: true
		}
	},

	methods: {
		toTop() {
			this.$router.push(`/${this.page}`)
		}
	}
})
</script>

<style lang="scss" scoped>
.top-btn {
	cursor: pointer;
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 10;
	.top-btn-box {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		.top-icon {
			color: $primary;
			font-size: 30px;
			font-weight: 600;
			transition: 0.5s;
			&:hover {
				color: $gray-500;
				font-size: 38px;
			}
		}
	}
}

@include media-breakpoint-down(lg) {
	.top-btn {
		.top-btn-box {
			background: $primary;
			.top-icon {
				color: #fff;
				&:hover {
					color: $primary;
				}
			}
		}
	}
}
</style>

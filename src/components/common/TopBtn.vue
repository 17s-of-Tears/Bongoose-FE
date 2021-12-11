<template>
	<a class="top-btn" @click="toTop">
		<i class="bi bi-arrow-up-circle-fill top-icon"></i>
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
	.top-icon {
		color: $white;
		font-size: 35px;
		transition: 0.5s;
		&:hover {
			color: $gray-500;
			font-size: 38px;
		}
	}
}

@include media-breakpoint-down(lg) {
	.top-btn {
		.top-icon {
			color: $primary;
			&:hover {
				color: $primary;
			}
		}
	}
}
</style>

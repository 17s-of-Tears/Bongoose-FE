<template>
	<div class="modal fade" id="updateModal" aria-hidden="true" tabindex="-1">
		<div class="modal-dialog modal-lg">
			<ModalContent @updatePost="updatePost" mode="update" :id="id" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalContent from '@/components/common/modal/ModalContent/index.vue'

export default defineComponent({
	components: {
		ModalContent
	},

	props: {
		id: {
			type: Number,
			requried: true
		}
	},

	emits: ['updatePost'],

	methods: {
		updatePost() {
			this.$emit('updatePost')
		}
	}
})
</script>

<style lang="scss" scoped>
.subbtn {
	width: 100%;
	border-radius: 10px;
	height: 50px;
}
.modal-body {
	position: relative;
}

.modal-content {
	height: 450px;
}

.bi-image {
	font-size: 25px;
}

textarea.form-control {
	height: 200px;
	margin-bottom: 20px;
}

.text-black-50 {
	font-size: 20px;
}

textarea::placeholder {
	font-size: 20px;
}

.bi-image {
	color: $primary;
	position: absolute;
	top: 180px;
	bottom: 0;
	right: 30px;
}
</style>

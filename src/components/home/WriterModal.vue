<template>
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<ModalContent @updatePost="updatePost" mode="writer" />
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

	emits: ['updatePost'],

	methods: {
		updatePost() {
			this.$emit('updatePost')
		}
	}
})
</script>

<style lang="scss" scoped></style>

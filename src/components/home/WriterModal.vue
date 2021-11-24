<template>
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<ModalContent @updatePost="updatePost" mode="writer" />
		</div>
	</div>
</template>

<script>
import ModalContent from '@/components/common/modal/ModalContent'

export default {
	components: {
		ModalContent
	},

	emits: ['updatePost'],

	methods: {
		updatePost() {
			this.$emit('updatePost')
		}
	}
}
</script>

<style lang="scss" scoped></style>

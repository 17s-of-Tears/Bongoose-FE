<template>
	<div class="modal fade" id="updateModal" aria-hidden="true" tabindex="-1">
		<div class="modal-dialog modal-lg">
			<ModalContent @updatePost="updatePost" mode="update" :id="id" />
		</div>
	</div>
</template>

<script>
import ModalContent from '@/components/common/modal/ModalContent'

export default {
	components: {
		ModalContent
	},

	props: {
		id: {
			type: Number,
			requried: true
		}
	},

	methods: {
		updatePost() {
			this.$emit('updatePost')
		}
	}
}
</script>

<style lang="scss" scoped></style>

<template>
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<ModalConetnet @updatePost="updatePost" mode="writer" />
		</div>
	</div>
</template>

<script>
import ModalConetnet from '@/components/common/modal/ModalConetnet'

export default {
	components: {
		ModalConetnet
	},

	methods: {
		updatePost() {
			this.$emit('updatePost')
		}
	}
}
</script>

<style lang="scss" scoped></style>

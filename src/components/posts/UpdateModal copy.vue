<template>
	<div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<ModalConetnet @updatePost="updatePost" mode="update" />
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

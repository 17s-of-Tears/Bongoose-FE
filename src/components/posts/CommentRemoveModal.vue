<template>
	<div
		class="modal fade"
		id="commentRemoveModal"
		aria-hidden="true"
		tabindex="-1"
	>
		<div class="modal-dialog modal-sm">
			<RemoveModalContent
				:id="id"
				:commentId="commentId"
				mode="comment"
				@updatePost="updatePost"
				@updateComment="updateComment"
			/>
		</div>
	</div>
</template>

<script>
import RemoveModalContent from '@/components/common/modal/RemoveModalContent'

export default {
	components: {
		RemoveModalContent
	},

	props: {
		id: {
			type: Number,
			requried: true
		},
		commentId: {
			type: Number,
			requried: true
		}
	},

	emits: ['updatePost', 'updateComment'],

	methods: {
		updatePost() {
			this.$emit('updatePost')
		},
		updateComment() {
			this.$emit('updateComment')
		}
	}
}
</script>

<style lang="scss" scoped></style>

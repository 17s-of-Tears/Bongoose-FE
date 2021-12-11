<template>
	<div class="modal fade" id="removeModal" aria-hidden="true" tabindex="-1">
		<div class="modal-dialog modal-sm">
			<RemoveModalContent :id="id" mode="post" @updatePost="updatePost" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RemoveModalContent from '@/components/common/modal/RemoveModalContent.vue'

export default defineComponent({
	components: {
		RemoveModalContent
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

<style lang="scss" scoped></style>

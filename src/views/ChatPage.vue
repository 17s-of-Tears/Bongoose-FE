<template>
	<div class="container chat">
		<div class="card">
			<div class="test">
				공사중 입니다! <br />
				메인기능구현 후 진행예정
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { CommonMutationTypes } from '@/store/common/mutations'
import { defineComponent } from 'vue'

export default defineComponent({
	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
	}
})
</script>

<style lang="scss" scoped>
.chat {
	margin-top: 40px;
	> div {
		border-radius: 20px;
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		.test {
			font-size: 25px;
			color: $gray-600;
		}
	}
}
</style>

<template>
	<div class="container">
		<div class="mt-5 friends-title">
			<h2>이런 사람들은 어때요?</h2>
		</div>
		<div class="friends-list-box">
			<FriendCard :btn-type="'친구 요청'" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FriendCard from '@/components/friend/FriendCard.vue'

export default defineComponent({
	components: {
		FriendCard
	}
})
</script>

<style lang="scss" scoped>
.container {
	margin-top: 40px;
	.friends-title {
		display: flex;
		gap: 10px;
		align-items: flex-end;
		color: $primary;
		h2 {
			font-size: 25px;
			margin: 0;
		}
	}
}
</style>

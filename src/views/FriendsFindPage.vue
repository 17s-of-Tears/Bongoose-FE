<template>
	<div class="container">
		<div class="friends-title">
			<h2>제봉 님의 친구 요청</h2>
		</div>
		<div class="friends-list-box">
			<FriendCard
				v-for="index in 4"
				:key="index"
				:btn-type="'친구 하기'"
				:sub-btn-type="'삭제 하기'"
			/>
		</div>
		<div class="mt-5 friends-title">
			<h2>이런 사람들은 어때요?</h2>
		</div>
		<div class="friends-list-box">
			<FriendCard v-for="index in 16" :key="index" :btn-type="'친구 요청'" />
		</div>
	</div>
</template>

<script>
import FriendCard from '@/components/friend/FriendCard'

export default {
	components: {
		FriendCard
	},

	created() {
		this.$store.commit('END_LOADING')
	}
}
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
	.friends-list-box {
		margin: 30px 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 14px;
	}
}
</style>

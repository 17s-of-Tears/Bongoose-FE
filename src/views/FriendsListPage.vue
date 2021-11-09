<template>
	<div class="container">
		<div class="friends-title">
			<h2>제봉 님의 친구</h2>
			<p>총 16명</p>
		</div>
		<div class="friends-list-box">
			<FriendCard v-for="index in 16" :key="index" :btn-type="'프로필보기'" />
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
		p {
			font-size: 18px;
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

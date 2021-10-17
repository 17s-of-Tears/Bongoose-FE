<template>
	<div class="aside-friend">
		<div class="friend-header">
			<span>친구 추천</span>
			<span>
				<i class="bi bi-chevron-right" @click="toFriendPage" />
			</span>
		</div>
		<div v-for="index in 3" :key="index" class="friend-items">
			<div class="friend-item">
				<img
					src="http://placeimg.com/400/400/any"
					alt="프로필 이미지"
					class="friend-img"
				/>
				<div class="friend-info">
					<span>제봉팍</span>
					<span>@jebong2323</span>
				</div>
			</div>
			<i class="bi bi-plus-lg"></i>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		toFriendPage() {
			this.$router.push('/friends_find')
		}
	}
}
</script>

<style lang="scss" scoped>
.aside-friend {
	display: flex;
	flex-direction: column;
	gap: 20px;
	.friend-header {
		display: flex;
		justify-content: space-between;
		color: $white;
		@include rem(25);
		:last-child {
			cursor: pointer;
		}
	}
	.friend-items {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.friend-item {
			display: flex;
			align-items: center;
			gap: 20px;
			.friend-img {
				width: 80px;
				height: 80px;
				border-radius: 15px;
			}
			.friend-info {
				display: flex;
				flex-direction: column;
				color: $white;
				:nth-child(1) {
					@include rem(20);
				}
				:nth-child(2) {
					@include rem(15);
				}
			}
		}
		:last-child {
			font-size: 20px;
			color: $white;
			cursor: pointer;
		}
	}
}
</style>

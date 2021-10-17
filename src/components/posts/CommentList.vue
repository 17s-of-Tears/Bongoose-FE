<template>
	<ul class="list-group list-group-flush">
		<li v-for="index in 5" :key="index" class="list-group-item">
			<div class="comment-box">
				<img src="http://placeimg.com/100/100/any" alt="프로필사진" />
				<div class="comment-user">
					<div class="comment-user-inner">
						<span>제봉</span>
						<span>@jebong55</span>
					</div>
					<span>이이잉 댓글 {{ index }}</span>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	setup() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.comment-box {
	display: flex;
	align-items: center;
	gap: 10px;
	img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.comment-user {
		display: flex;
		flex-direction: column;
		gap: 5px;
		.comment-user-inner {
			display: flex;
			align-items: flex-end;
			gap: 5px;
			:first-child {
				@include rem(20);
			}
		}
		:last-child {
			@include rem(15);
			color: $gray-600;
		}
	}
}
</style>

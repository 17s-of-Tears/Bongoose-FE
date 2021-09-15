<template>
	<main>
		<div v-for="index in 10" :key="index" class="user-card card">
			<div class="user">
				<div class="user-img"></div>
				<div class="user-content">
					<div class="user-info">
						<div class="user-nickname">제봉팍</div>
						<div class="user-id">@jebong2323</div>
					</div>
					<div class="user-date">9월 5일 오후 3:55</div>
				</div>
			</div>
			<div class="content">
				<span> 오늘은 벤치프레스를 했어요! 너무 좋아요 😆 </span>
				<div class="content-hash">
					<span class="content-hashtag"># 제봉잉</span>
					<span class="content-hashtag"># 벤치프레스</span>
				</div>
				<div class="content-img"></div>
				<div class="content-footer">
					<div class="content-like">
						<i class="bi bi-emoji-smile-fill"></i>
						<p>320 &nbsp;</p>
						<i class="bi bi-emoji-frown-fill"></i>
						<p>1</p>
					</div>
					<div @click="openComment" class="content-comment">
						<i class="bi bi-chat-text-fill"></i>
						<p>5</p>
					</div>
				</div>
				<div>댓글 부분 입니다! 만들어야해요!</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	setup() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.user-card {
	margin-top: 40px;
	width: 100%;
	padding: 30px;
	display: flex;
	gap: 30px;
	&.card {
		border-radius: 20px;
	}
	.user {
		display: flex;
		align-items: center;
		gap: 10px;
		.user-img {
			width: 60px;
			height: 60px;
			background-color: $gray-800;
			border-radius: 15px;
		}
		.user-content {
			display: flex;
			flex-direction: column;
			color: $gray-700;
		}
		.user-info {
			display: flex;
			align-items: center;
			gap: 10px;
			.user-nickname {
				font-size: 20px;
			}
			.user-id {
				font-size: 15px;
			}
		}
		.user-date {
			font-size: 15px;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		.content-hash {
			display: flex;
			gap: 10px;
			color: $primary;
			.content-hashtag {
				cursor: pointer;
			}
		}
		.content-img {
			width: 100%;
			height: 350px;
			border-radius: 20px;
			background-color: $gray-500;
		}
		.content-footer {
			display: flex;
			justify-content: space-between;
			.content-like {
				display: flex;
				gap: 5px;
				p {
					color: $gray-600;
				}
			}
			.content-comment {
				display: flex;
				gap: 10px;
				color: $primary;
				p {
					color: $gray-600;
				}
			}
		}
	}
}
</style>

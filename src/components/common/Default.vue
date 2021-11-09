<template>
	<div class="card default-card">
		<div class="card-body default-card-box">
			<i class="bi bi-inbox-fill"></i>
			<span>더 이상 불러올 게시글이 없습니다!</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.default-card {
	margin: 40px 0;
	border-radius: 20px !important;
	.default-card-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		> i {
			font-size: 50px;
			color: $primary;
		}
	}
}
</style>

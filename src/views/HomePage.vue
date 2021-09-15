<template>
	<section>
		<div class="sub-card card">
			<p>제봉님! 오늘은 무슨일이 있었나요? 모두에게 알려주세요!</p>
		</div>
		<ContentCard />
	</section>
</template>

<script>
import ContentCard from '@/components/ContentCard'

export default {
	components: {
		ContentCard
	}
}
</script>

<style lang="scss" scoped>
section {
	margin: 40px;
	.sub-card {
		padding: 10px 20px;
		border-radius: 20px;
		cursor: pointer;
		transition: 0.5s;
		&:hover {
			background: rgba($color: $gray-300, $alpha: 0.1);
		}
		p {
			color: $gray-500;
			margin: 0;
		}
	}
}
</style>

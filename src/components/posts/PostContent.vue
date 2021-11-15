<template>
	<span>{{ board.content }}</span>
	<div v-if="board.hashtags" class="content-hash">
		<span
			class="content-hashtag"
			v-for="(hashtag, index) in board.hashtags"
			:key="index"
			@click="toHashtagFindPage(hashtag)"
		>
			# {{ hashtag }}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		board: {
			type: Object,
			required: true
		}
	},
	methods: {
		toHashtagFindPage(hashtag) {
			this.$router.push(`/hashtag/${hashtag}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.content-hash {
	display: flex;
	gap: 10px;
	color: $primary;
	.content-hashtag {
		cursor: pointer;
	}
}
</style>

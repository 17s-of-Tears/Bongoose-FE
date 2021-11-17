<template>
	<div class="aside-hash">
		<span># 인기순위</span>
		<div class="card hash-card">
			<div v-for="(hash, index) in hashs" :key="index" class="hash-box">
				<div class="hash-rank">{{ index + 1 }}위</div>
				<div class="hash-item">
					<span @click="toHashSearch(hash.hashtag)"># {{ hash.hashtag }}</span>
					<span>{{ hash.total }}회</span>
				</div>
				<hr v-if="!(index === 2)" />
			</div>
		</div>
	</div>
</template>

<script>
import { getHashtagRanking } from '@/api/board'

export default {
	data() {
		return {
			hashs: []
		}
	},

	methods: {
		async HashtagRankInfo() {
			try {
				const { data } = await getHashtagRanking()
				this.hashs = data
			} catch (error) {
				console.error(error)
			}
		},
		toHashSearch(hash) {
			this.$router.push(`/hashtag/${hash}`)
		}
	},

	created() {
		this.HashtagRankInfo()
	}
}
</script>

<style lang="scss" scoped>
.aside-hash {
	display: flex;
	flex-direction: column;
	gap: 20px;
	> span {
		color: $white;
		@include rem(25);
	}
	.hash-card {
		width: 100%;
		border-radius: 15px;
		padding: 20px;
		.hash-box {
			display: flex;
			flex-direction: column;
			.hash-rank {
				@include rem(20);
			}
			.hash-item {
				display: flex;
				justify-content: space-between;
				@include rem(18);
				:nth-child(1) {
					color: $gray-700;
					cursor: pointer;
					&:hover {
						color: $primary;
						transition: 0.3s;
					}
				}
				:nth-child(2) {
					color: $gray-600;
				}
			}
		}
	}
	hr {
		color: $primary;
		height: 2px;
	}
}
</style>

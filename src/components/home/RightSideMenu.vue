<template>
	<aside>
		<div class="aside-search">
			<select v-model="selected" class="form-select">
				<option disabled value="">선택</option>
				<option value="hashtag">#</option>
				<option value="user">사용자</option>
			</select>
			<input
				v-model="search"
				@keyup.enter="toSearchPage"
				type="text"
				class="form-control"
				placeholder="검색하기"
			/>
			<button class="btn btn-dark" :disabled="!selected">
				<i @click="toSearchPage" class="bi bi-search" />
			</button>
		</div>
		<div class="aside-hash">
			<span>실시간 #</span>
			<div class="card hash-card">
				<div v-for="index in 3" :key="index" class="hash-box">
					<div class="hash-rank">{{ index }}위</div>
					<div class="hash-item">
						<span># 제봉잉{{ index }}</span>
						<span>{{ 100 - index }}회</span>
					</div>
					<hr v-if="!(index === 3)" />
				</div>
			</div>
		</div>
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
	</aside>
</template>

<script>
export default {
	data() {
		return {
			selected: '',
			search: ''
		}
	},

	methods: {
		toFriendPage() {
			this.$router.push('/friends_find')
		},
		toSearchPage() {
			if (this.selected !== '') {
				this.$router.push(`/${this.selected}/${this.search}`)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
aside {
	top: 0;
	right: 0;
	position: sticky;
	width: 100%;
	height: 100vh;
	padding: 40px;
	background: linear-gradient(to right, $primary-light, $primary);
	display: flex;
	flex-direction: column;
	gap: 50px;
	.aside-search {
		display: flex;
		gap: 5px;
		:nth-child(1) {
			flex-basis: 150px;
		}
	}
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
						color: $primary;
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
}
</style>

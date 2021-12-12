<template>
	<div class="container">
		<div class="friends-title">
			<h2>{{ user.name }} 님의 친구</h2>
			<p>총 16명</p>
		</div>
		<div class="friends-list-box">
			<FriendCard v-for="index in 16" :key="index" :btn-type="'프로필보기'" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import FriendCard from '@/components/friend/FriendCard.vue'
import { UserActionType } from '@/store/user/actions'
import { CommonMutationTypes } from '@/store/common/mutations'

export default defineComponent({
	components: {
		FriendCard
	},

	computed: {
		...mapState('auth', ['user'])
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
	}
})
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

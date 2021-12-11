<template>
	<div v-for="nav in navs" :key="nav.name" class="navitem" type="button btn-close" aria-label="Close">
		<RouterLink :to="nav.to" :data-bs-dismiss="offcanvas">
			<div class="card">
				<i :class="`bi ${nav.icon}`"></i>
				<span>{{ nav.name }}</span>
			</div>
		</RouterLink>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		offcanvas: {
			type: String,
			default: ''
		}
	},

	data() {
		return {
			navs: [
				{
					name: '프로필 정보',
					icon: 'bi-person-badge-fill',
					to: '/profile'
				},
				{
					name: '채팅 하기',
					icon: 'bi-chat-fill',
					to: '/chat'
				},
				{
					name: '친구 목록',
					icon: 'bi-people-fill',
					to: '/friends_list'
				},
				{
					name: '친구 찾기',
					icon: 'bi-person-lines-fill',
					to: '/friends_find'
				}
			]
		}
	}
})
</script>

<style lang="scss" scoped>
.navitem {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	a {
		text-decoration: none;
	}
	.card {
		width: 100%;
		height: 50px;
		border-radius: 15px;
		display: flex;
		flex-direction: row;
		align-items: center;
		@include rem(20);
		color: $primary-light;
		cursor: pointer;
		transition: 0.5s;
		.bi {
			padding: 0 10px 0 20px;
		}
		&:hover {
			background-color: $gray-200;
		}
	}
}
</style>

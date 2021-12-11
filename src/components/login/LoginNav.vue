<template>
	<header>
		<Logo />
		<div class="nav nav-pills">
			<div v-for="nav in navs" :key="nav.name" class="nav-item">
				<RouterLink :to="nav.link" active-class="active" class="nav-link">
					{{ nav.name }}
				</RouterLink>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/home/left_side_menu/Logo.vue'

export default defineComponent({
	components: {
		Logo
	},

	data() {
		return {
			navs: [
				{
					name: '로그인',
					link: '/login'
				},
				{
					name: '회원가입',
					link: '/signup'
				}
			]
		}
	}
})
</script>

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px 40px 0 28px;
}
</style>

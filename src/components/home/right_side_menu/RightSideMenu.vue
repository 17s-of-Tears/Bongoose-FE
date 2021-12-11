<template>
	<aside>
		<AsideSearchForm />
		<AsideHash />
		<AsideFriend />
	</aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideSearchForm from '@/components/home/right_side_menu/AsideSearchForm.vue'
import AsideHash from '@/components/home/right_side_menu/AsideHash.vue'
import AsideFriend from '@/components/home/right_side_menu/AsideFriend.vue'

export default defineComponent({
	components: {
		AsideSearchForm,
		AsideHash,
		AsideFriend
	}
})
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
}
</style>

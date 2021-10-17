<template>
	<aside>
		<AsideSearchForm />
		<AsideHash />
		<AsideFriend />
	</aside>
</template>

<script>
import AsideSearchForm from '@/components/home/right_side_menu/AsideSearchForm'
import AsideHash from '@/components/home/right_side_menu/AsideHash'
import AsideFriend from '@/components/home/right_side_menu/AsideFriend'

export default {
	components: {
		AsideSearchForm,
		AsideHash,
		AsideFriend
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
}
</style>

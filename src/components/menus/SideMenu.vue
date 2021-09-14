<template>
	<nav class="side-box">
		<Logo class="logo" />
		<ProfileCard />
		<NavItem />
		<Footer />
	</nav>
</template>

<script>
import Logo from '@/components/menus/Logo'
import ProfileCard from '@/components/menus/ProfileCard'
import NavItem from '@/components/menus/NavItem'
import Footer from '@/components/menus/Footer'

export default {
	components: {
		Logo,
		ProfileCard,
		NavItem,
		Footer
	}
}
</script>

<style lang="scss" scoped>
.side-box {
	margin: 60px;
	box-sizing: border-box;
	.logo {
		margin-bottom: 60px;
	}
}
</style>

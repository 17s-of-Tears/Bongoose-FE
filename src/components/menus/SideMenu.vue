<template>
	<nav class="side-box">
		<Logo />
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
	padding: 40px 0 0 40px;
	box-sizing: border-box;
	top: 0;
	left: 0;
	position: sticky;
}
</style>

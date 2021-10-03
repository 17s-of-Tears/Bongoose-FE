<template>
	<nav class="side-box">
		<Logo />
		<ProfileCard />
		<NavItem />
		<Footer />
	</nav>
</template>

<script>
import Logo from '@/components/home/left_side_menu/Logo'
import ProfileCard from '@/components/home/left_side_menu/ProfileCard'
import NavItem from '@/components/home/left_side_menu/NavItem'
import Footer from '@/components/home/left_side_menu/Footer'

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

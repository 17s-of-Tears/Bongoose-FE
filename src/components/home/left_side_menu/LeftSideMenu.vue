<template>
	<nav class="side-box">
		<Logo />
		<ProfileCard />
		<NavItem />
		<Footer />
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/home/left_side_menu/Logo.vue'
import ProfileCard from '@/components/home/left_side_menu/ProfileCard.vue'
import NavItem from '@/components/home/left_side_menu/NavItem.vue'
import Footer from '@/components/home/left_side_menu/Footer.vue'

export default defineComponent({
	components: {
		Logo,
		ProfileCard,
		NavItem,
		Footer
	}
})
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

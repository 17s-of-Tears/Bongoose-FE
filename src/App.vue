<template>
	<Header class="responsive-header" />
	<div class="row">
		<div class="col-12 col-lg-3 responsive-side">
			<SideMenu />
		</div>
		<div id="header" class="col-12 col-lg-6">
			<RouterView v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="$route.path" />
				</transition>
			</RouterView>
		</div>
		<div class="col-12 col-lg-3 responsive-side">
			<Aside />
		</div>
	</div>
	<TopBtn />
</template>

<script>
import Header from '@/components/responsive/Header'
import SideMenu from '@/components/menus/SideMenu'
import Aside from '@/components/Aside'
import TopBtn from '@/components/TopBtn'

export default {
	components: {
		Header,
		SideMenu,
		Aside,
		TopBtn
	}
}
</script>

<style lang="scss">
.responsive-header {
	display: none;
}

.col-12 {
	padding: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

@include media-breakpoint-down(lg) {
	.responsive-header {
		display: block;
	}
	.responsive-side {
		display: none;
	}
}
</style>

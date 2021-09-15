<template>
	<div class="row">
		<div class="col-12 col-md-3">
			<SideMenu />
		</div>
		<div id="header" class="col-12 col-md-6">
			<RouterView v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="$route.path" />
				</transition>
			</RouterView>
		</div>
		<div class="col-12 col-md-3">
			<Aside />
		</div>
	</div>
	<TopBtn />
</template>

<script>
import SideMenu from '@/components/menus/SideMenu'
import Aside from '@/components/Aside'
import TopBtn from '@/components/TopBtn'

export default {
	components: {
		SideMenu,
		Aside,
		TopBtn
	}
}
</script>

<style lang="scss">
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
</style>

<template>
	<div class="row">
		<div class="col-12 col-sm-3">
			<SideMenu />
		</div>
		<div class="col-12 col-sm-6">
			<RouterView v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="$route.path" />
				</transition>
			</RouterView>
		</div>
		<div class="col-12 col-sm-3">
			<Aside />
		</div>
	</div>
</template>

<script>
import SideMenu from '@/components/menus/SideMenu'
import Aside from '@/components/Aside'

export default {
	components: {
		SideMenu,
		Aside
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

<template>
	<Header class="responsive-header" />
	<template v-if="!isLoginPage">
		<div class="row">
			<div class="col-12 col-lg-3 responsive-side">
				<LeftSideMenu />
			</div>
			<div id="header" class="col-12 col-lg-6">
				<RouterView v-slot="{ Component }">
					<transition name="fade" mode="out-in">
						<component :is="Component" :key="$route.path" />
					</transition>
				</RouterView>
			</div>
			<div class="col-12 col-lg-3 responsive-side">
				<RightSideMenu />
			</div>
		</div>
	</template>
	<!-- 로그인 페이지 -->
	<template v-else>
		<RouterView v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :key="$route.path" />
			</transition>
		</RouterView>
	</template>
	<TopBtn v-if="isTopBtn" />
</template>

<script>
import Header from '@/components/responsive/Header'
import LeftSideMenu from '@/components/left_menu/LeftSideMenu'
import RightSideMenu from '@/components/common/RightSideMenu'
import TopBtn from '@/components/common/TopBtn'

export default {
	components: {
		Header,
		LeftSideMenu,
		RightSideMenu,
		TopBtn
	},

	computed: {
		isLoginPage() {
			return this.$route.name === 'login' || this.$route.name === 'join'
		},
		isTopBtn() {
			return this.$route.name === 'home'
		}
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

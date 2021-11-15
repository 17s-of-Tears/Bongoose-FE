<template>
	<GrowSpinner v-if="loading" />
	<Header class="responsive-header" />
	<template v-if="isLoginPage && !NotFoundPage">
		<LoginNav />
		<RouterView />
	</template>

	<template v-else-if="isHomePage && !NotFoundPage">
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
	<!-- 사이드바 -->
	<template v-else>
		<RouterView />
	</template>
	<!-- 로그인 페이지 -->

	<!-- 공통 컴포넌트 -->
	<TopBtn v-if="isTopBtn" :page="routerName" />
	<transition name="fade">
		<Alerts v-if="alert" />
	</transition>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/responsive/Header'
import LeftSideMenu from '@/components/home/left_side_menu/LeftSideMenu'
import RightSideMenu from '@/components/home/right_side_menu/RightSideMenu'
import TopBtn from '@/components/common/TopBtn'
import LoginNav from '@/components/login/LoginNav'
import Alerts from '@/components/common/Alerts'
import GrowSpinner from '@/components/common/GrowSpinner'

export default {
	components: {
		Header,
		LeftSideMenu,
		RightSideMenu,
		TopBtn,
		LoginNav,
		Alerts,
		GrowSpinner
	},

	computed: {
		...mapState(['alert', 'loading']),
		isLoginPage() {
			return this.$route.name === 'login' || this.$route.name === 'signup'
		},
		isTopBtn() {
			return this.$route.name === 'home' || this.$route.name === 'profile'
		},
		NotFoundPage() {
			return this.$route.name === 'NotFound'
		},
		isHomePage() {
			return !this.isLoginPage
		},
		routerName() {
			switch (this.$route.name) {
				case 'home':
					return this.$route.name
				case 'profile':
					return this.$route.name
				default:
					return null
			}
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

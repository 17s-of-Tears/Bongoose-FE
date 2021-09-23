<template>
	<header>
		<div class="nav-inner">
			<Logo />
			<button
				class="btn btn-primary"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasRight"
				aria-controls="offcanvasRight"
			>
				<i class="bi bi-list nav-icon"></i>
			</button>
			<div
				class="offcanvas offcanvas-end nav-box"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel"
			>
				<div class="offcanvas-header nav-close">
					<button
						type="button"
						class="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div class="offcanvas-body">
					<ProfileCard />
					<NavItem offcanvas="offcanvas" />
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import Logo from '@/components/left_menu/Logo'
import NavItem from '@/components/left_menu/NavItem'
import ProfileCard from '@/components/left_menu/ProfileCard'

export default {
	components: {
		Logo,
		NavItem,
		ProfileCard
	}
}
</script>

<style lang="scss" scoped>
header {
	background-color: $primary;
	z-index: 11;
	.nav-inner {
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			@include rem(36);
			color: $white;
			font-weight: 500;
		}
		.nav-icon {
			@include rem(36);
		}
		.nav-box {
			padding: 20px;
			.nav-close {
				justify-content: flex-end;
			}
		}
	}
}
</style>

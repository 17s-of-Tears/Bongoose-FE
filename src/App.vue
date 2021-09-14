<template>
	<div class="row">
		<div class="col-12 col-sm-3">
			<SideMenu />
		</div>
		<div class="col-12 col-sm-6">.col-6 .col-md-4</div>
		<div class="col-12 col-sm-3">.col-6 .col-md-4</div>
	</div>
</template>

<script>
import SideMenu from '@/components/menus/SideMenu'

export default {
	components: {
		SideMenu
	}
}
</script>

<style lang="scss">
body {
	background-color: #eee;
	font-family: 'Noto Sans KR', sans-serif;
	line-height: 1.4;
	box-sizing: border-box;
	.col-12 {
		padding: 0;
	}
}
</style>

<template>
	<header>
		<LoginNav />
		<LoginBody />
	</header>
</template>

<script>
import LoginNav from '@/components/login/LoginNav'
import LoginBody from '@/components/login/LoginBody'

export default {
	components: {
		LoginNav,
		LoginBody
	}
}
</script>

<style lang="scss" scoped></style>

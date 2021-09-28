<template>
	<header>
		<LoginNav />
		<SignUp />
	</header>
</template>

<script>
import LoginNav from '@/components/login/LoginNav'
import SignUp from '@/components/login/SignUp'
export default {
	components: {
		LoginNav,
		SignUp
	}
}
</script>

<style lang="scss" scoped></style>

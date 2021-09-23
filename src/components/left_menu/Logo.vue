<template>
	<span class="logo" @click="toHome">Bongoose</span>
</template>

<script>
export default {
	methods: {
		toHome() {
			this.$router.push('/home')
		}
	}
}
</script>

<style lang="scss" scoped>
span {
	color: $primary;
	font-family: 'PT Sans', sans-serif;
	font-size: 40px;
	font-weight: 600;
	cursor: pointer;
}
</style>

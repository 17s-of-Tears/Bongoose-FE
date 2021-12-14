<template>
	<img :src="require('@/assets/images/logo.png')" alt="Bongoose" @click="toHome" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	methods: {
		toHome() {
			this.$router.push('/home')
		}
	}
})
</script>

<style lang="scss" scoped>
img {
	width: 230px;
}
</style>

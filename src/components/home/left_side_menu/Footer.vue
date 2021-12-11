<template>
	<footer>
		<div>개인정보처리방침 및 이용약관</div>
		<div>&copy;{{ toYear }} 봉구수밥진수 팀</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	computed: {
		toYear() {
			return new Date().getFullYear()
		}
	}
})
</script>

<style lang="scss" scoped>
footer {
	position: fixed;
	bottom: 20px;
}
</style>

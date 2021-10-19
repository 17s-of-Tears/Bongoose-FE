<template>
	<div class="alert_box">
		<div class="alert alert-primary alert-dismissible fade show" role="alert">
			{{ message }}
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['message'])
	}
}
</script>

<style lang="scss" scoped>
.alert_box {
	position: fixed;
	top: 10%;
	left: 50%;
	transform: translateX(-50%);
}
</style>

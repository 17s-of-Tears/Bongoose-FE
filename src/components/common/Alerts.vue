<template>
	<div class="alert_box">
		<div class="alert alert-primary alert-dismissible fade show" role="alert">
			{{ message }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
	computed: {
		...mapState(['message'])
	}
})
</script>

<style lang="scss" scoped>
.alert_box {
	position: fixed;
	top: 10%;
	left: 50%;
	transform: translateX(-50%);
}
</style>

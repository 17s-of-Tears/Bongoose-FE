<template>
	<aside>
		<div class="aside-inner">
			<div class="aside-search">
				<div class="form-floating">
					<input
						class="form-control"
						placeholder="Leave a comment here"
						id="floatingTextarea"
					/>
					<label for="floatingTextarea">Search</label>
				</div>
				<div class="btn btn-light">
					<i class="bi bi-search"></i>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	setup() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.aside-inner {
	width: 100%;
	height: 100vh;
	padding: 40px;
	background: linear-gradient(to right, $primary-light, $primary);
}
</style>

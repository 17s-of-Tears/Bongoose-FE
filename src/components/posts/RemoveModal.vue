<template>
	<div
		class="modal fade"
		id="exampleModalToggle"
		aria-hidden="true"
		aria-labelledby="exampleModalToggleLabel"
		tabindex="-1"
	>
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalToggleLabel">게시글 삭제</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">게시글을 삭제하시겠습니까?</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-target="#exampleModalToggle2"
						data-bs-dismiss="modal"
					>
						취소
					</button>
					<button
						class="btn btn-primary"
						data-bs-target="#exampleModalToggle2"
						data-bs-toggle="modal"
					>
						삭제
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal-footer {
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal-body {
	font-size: 17px;
	text-align: center;
}
.btn {
	padding: 10px 30px;
}
</style>

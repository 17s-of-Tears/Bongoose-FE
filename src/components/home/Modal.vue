<template>
	<div
		class="modal fade"
		id="exampleModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">게시물 작성하기</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>

				<div class="modal-body">
					<div>
						<label for="exampleFormControlTextarea1" class="form-label"></label>
						<textarea
							class="form-control"
							id="exampleFormControlTextarea1"
							placeholder="제봉님!오늘 무슨일이 있었나요?"
							rows="5"
						></textarea>
					</div>
					<i class="bi bi-image"></i>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-primary subbtn"
						data-bs-dismiss="modal"
					>
						게시글 게시
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
.subbtn {
	width: 100%;
	border-radius: 10px;
	height: 50px;
}
.modal-body {
	position: relative;
}

.bi-image {
	color: $primary;
	position: absolute;
	top: 140px;
	bottom: 0;
	right: 30px;
}
</style>

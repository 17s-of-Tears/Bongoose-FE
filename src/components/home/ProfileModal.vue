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
					<h5 class="modal-title" id="exampleModalLabel">프로필 수정</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>

				<div class="modal-body">
					<form>
						<div class="mb-3">
							<label for="recipient-name" class="col-form-label">닉네임</label>
							<input type="text" class="form-control" />
						</div>
						<div class="mb-3">
							<label for="message-text" class="col-form-label"
								>1줄 자기소개</label
							>
							<textarea class="form-control"></textarea>
						</div>
						<div class="mb-3">
							<label for="message-text" class="col-form-label"
								>1줄 자기소개</label
							>
							<textarea class="form-control"></textarea>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary">수정하기</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

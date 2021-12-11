<template>
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title">게시글 {{ title }}하기</h5>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="modal"
				aria-label="Close"
				@click="clearFormData"
			></button>
		</div>
		<div class="modal-body">
			<div>
				<label class="form-label"></label>
				<textarea
					v-model="boardContent"
					class="form-control"
					:placeholder="`${user.name} 님!오늘 무슨일이 있었나요?`"
					rows="5"
				></textarea>
				<transition name="fade">
					<span v-if="contentValid" class="valid"> 내용이 비어있습니다! 입력해 주세요! </span>
				</transition>
			</div>
			<!-- 이미지 업로드 버튼 -->
			<input ref="imageInput" type="file" hidden @change="onChangeImages" />
			<i class="bi bi-image" type="button" @click="onClickImageUpload" />
			<small class="text-black-50"> &nbsp;* 이미지는 최대 4개 까지 게시가 가능합니다! </small>
			<UploadImages v-if="urls" :urls="urls" @remove="remove" />
			<transition name="fade">
				<span v-if="imageValid" class="valid"> 이미지는 4장까지 업로드 가능합니다! </span>
			</transition>
		</div>
		<div class="modal-footer">
			<button
				@click="boardWriting"
				:disabled="contentValid"
				type="button"
				class="btn btn-primary subbtn"
				data-bs-dismiss="modal"
			>
				게시글 {{ title }}
			</button>
		</div>
	</div>
</template>

<script lang="ts" src="./modal.ts"></script>

<style lang="scss" src="./style.scss" scoped></style>

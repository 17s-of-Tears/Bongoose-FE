<template>
	<main>
		<div class="user-card card">
			<div class="user">
				<img :src="profileImage()" alt="프로필 사진" class="user-img" />
				<div class="user-content">
					<div class="user-info">
						<div
							class="user-nickname"
							@click="toUserFindPage(board.userName || board.name)"
						>
							{{ board.userName || board.name }}
						</div>
						<div class="user-id">
							@{{ userEmail(board.userEmail || board.userEmail) }}
						</div>
					</div>
					<div class="user-date">{{ boardDate(board.createdAt) }}</div>
				</div>
				<PopOver
					v-if="
						mode === 'profile' || myPost(board.userEmail || board.userEmail)
					"
					@updatePost="updatePost"
					:id="board.id"
				/>
			</div>
			<div class="content">
				<PostContent :board="board" />
				<Images v-if="board.images" :images="board.images" />
				<div class="content-footer">
					<Liker :id="board.id" />
					<div @click="toggleOnComment" class="content-comment">
						<i class="bi bi-chat-text-fill"></i>
						<p>{{ count }}</p>
					</div>
				</div>
				<transition name="fade">
					<div v-if="onComment">
						<CommentList :id="board.id" @updateComment="updateComment" />
					</div>
				</transition>
			</div>
		</div>
	</main>
</template>

<script src="./card.js"></script>

<style lang="scss" src="./style.scss" scoped></style>

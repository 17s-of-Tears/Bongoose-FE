<template>
	<div class="popover-box">
		<i class="bi bi-three-dots popover-icon" @click="onList"></i>
		<transition name="fade">
			<ul class="list-group popover-list popover-show" v-if="isListShow">
				<!-- 수정 버튼 -->
				<li class="list-group-item popover-list-item">
					<span data-bs-toggle="modal" data-bs-target="#staticBackdrop"
						><i class="bi bi-pencil-square"></i> 수정하기</span
					>
					<UpdateModal @click="showUpdateModal" />
				</li>
				<!-- 삭제 버튼 -->
				<li class="list-group-item popover-list-item">
					<span data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
						<i class="bi bi-trash2-fill"></i> 삭제하기
					</span>
					<RemoveModal @click="onRemoveModal" />
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
// import { removeBoard } from '@/api/board'
import UpdateModal from '@/components/posts/UpdateModal'
import RemoveModal from '@/components/posts/RemoveModal'
export default {
	props: {
		id: {
			type: Number,
			required: true
		}
	},

	data() {
		return {
			isListShow: false
		}
	},
	components: {
		UpdateModal,
		RemoveModal
	},

	methods: {
		onList() {
			this.isListShow = !this.isListShow
		},
		onRemoveModal() {
			this.isRemoveModalShow = true
		},
		offList() {
			this.isListShow = false
		}
		// async onRemoveBoard() {
		// 	try {
		// 		const { data } = await removeBoard(this.id)
		// 		console.log(data)
		// 	} catch (error) {
		// 		console.error(error)
		// 	}
		// }
	}
}
</script>

<style lang="scss" scoped>
.popover-box {
	margin-left: auto;
	.popover-show {
	}
	.popover-icon {
		color: $primary;
		font-size: 28px;
		cursor: pointer;
		position: relative;
	}
	.popover-list {
		position: absolute;
		right: 30px;
		width: 120px;

		.popover-list-item {
			cursor: pointer;
			transition: 0.5s;
		}
		:hover {
			color: $primary;
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

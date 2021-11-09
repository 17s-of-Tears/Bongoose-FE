<template>
	<div class="popover-box">
		<i class="bi bi-three-dots popover-icon" @click="onList"></i>
		<transition name="fade">
			<ul class="list-group popover-list" v-if="isListShow">
				<!-- 수정 버튼 -->
				<li class="list-group-item popover-list-item">
					<span><i class="bi bi-pencil-square"></i> 수정하기</span>
				</li>
				<!-- 삭제 버튼 -->
				<li class="list-group-item popover-list-item">
					<span> <i class="bi bi-trash2-fill"></i> 삭제하기 </span>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
// import { removeBoard } from '@/api/board'

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

	methods: {
		onList() {
			this.isListShow = !this.isListShow
		},
		onRemoveModal() {
			this.isRemoveModalShow = true
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
		z-index: 10;
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

<template>
	<div class="popover-box">
		<i class="bi bi-three-dots popover-icon" @click="toggleShowList"></i>
		<transition name="fade">
			<ul class="list-group popover-list popover-show" v-if="isListShow">
				<!-- 수정 버튼 -->
				<li class="list-group-item popover-list-item">
					<span data-bs-toggle="modal" data-bs-target="#updateModal">
						<i class="bi bi-pencil-square"></i> 수정하기
					</span>
					<UpdateModal @updatePost="updatePost" :id="id" />
				</li>
				<!-- 삭제 버튼 -->
				<li class="list-group-item popover-list-item">
					<span data-bs-toggle="modal" data-bs-target="#removeModal">
						<i class="bi bi-trash2-fill"></i> 삭제하기
					</span>
					<RemoveModal @updatePost="updatePost" :id="id" />
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
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
		toggleShowList() {
			this.isListShow = !this.isListShow
		},
		updatePost() {
			console.log('popover')
			this.isListShow = false
			this.$emit('updatePost', true)
		}
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

		.popover-list-item {
			cursor: pointer;
			transition: 0.5s;
		}
		> :hover {
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

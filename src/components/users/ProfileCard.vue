<template>
	<div class="card profile-card">
		<img class="profile-img" :src="userImage" alt="user" />
		<span>{{ userName }} 님</span>
		<span v-if="another">@{{ userEmail }}</span>
		<span>{{ userDescription }}</span>
		<button
			v-if="!another"
			type="button"
			class="btn btn-primary"
			data-bs-toggle="modal"
			data-bs-target="#profileCardModal"
			data-bs-whatever="@mdo"
		>
			프로필 수정
		</button>
		<ProfileModal :user="user" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import ProfileModal from '@/components/users/ProfileModal.vue'

export default defineComponent({
	components: {
		ProfileModal
	},

	props: {
		another: {
			type: Boolean,
			default: false
		},
		image: {
			type: String,
			default: null
		},
		name: {
			type: String,
			default: null
		},
		email: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: null
		}
	},

	computed: {
		...mapState('auth', ['user']),
		userName() {
			return this.another ? this.name : this.user.name
		},
		userDescription() {
			return this.another
				? this.description || '소개글이 비어 있습니다!'
				: this.user.description || '소개글이 비어 있습니다!'
		},
		userEmail() {
			if (this.email !== null) {
				return /.+(?=@)/.exec(this.email)![0]
			} else {
				return null
			}
		},
		imageURI(): string {
			return process.env.VUE_APP_URI
		},
		userImage(): string {
			return this.another
				? this.image
					? `${this.imageURI}/${this.image}`
					: require('@/assets/images/default.png')
				: this.user.imageUrl
				? `${this.imageURI}/${this.user.imageUrl}`
				: require('@/assets/images/default.png')
		}
	}
})
</script>

<style lang="scss" scoped>
.profile-card {
	@include rem(20);
	width: 300px;
	color: $gray-700;
	padding: 15px 30px;
	border-radius: 20px !important;
	display: flex;
	align-items: center;
	gap: 15px;
	@include media-breakpoint-down(md) {
		width: 100%;
		margin-bottom: 0 !important;
	}
	span {
		@include rem(18);
	}
	.profile-img {
		width: 100px !important;
		height: 100px !important;
		display: block;
		border-radius: 50%;
		background: $gray-500;
		flex-grow: 0 !important;
	}
}
</style>

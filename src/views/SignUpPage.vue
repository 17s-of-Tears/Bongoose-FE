<template>
	<transition name="slide-fade">
		<div v-if="show" class="login-box">
			<div class="login-inner">
				<Logo class="login-logo" />
				<p>회원 정보를 입력해주세요!</p>
				<SignUpForm />
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/home/left_side_menu/Logo.vue'
import SignUpForm from '@/components/login/SignUpForm.vue'
import { CommonMutationTypes } from '@/store/common/mutations'

export default defineComponent({
	components: {
		Logo,
		SignUpForm
	},

	data() {
		return {
			show: false
		}
	},

	methods: {
		isShow() {
			setTimeout(() => {
				this.show = true
			}, 200)
		}
	},

	created() {
		this.$store.commit(`common/${CommonMutationTypes.END_LOADING}`)
		this.isShow()
	}
})
</script>

<style lang="scss" scoped>
.login-box {
	margin: 50px auto;
	width: 1000px;
	border-radius: 20px;
	background: #fff;
	box-shadow: 5px 5px 10px $gray-400;
	.login-inner {
		padding: 50px 180px 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		.login-logo {
			pointer-events: none;
		}
		p {
			color: $primary;
		}
	}
}

.slide-fade-enter-active {
	transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(40px);
	opacity: 0;
}
</style>

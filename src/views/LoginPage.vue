<template>
	<transition name="slide-fade">
		<div v-if="show" class="login-box">
			<div class="login-inner">
				<Logo class="login-logo" />
				<p>로그인이 필요한 서비스 입니다.</p>
				<LoginForm />
			</div>
		</div>
	</transition>
</template>

<script>
import Logo from '@/components/home/left_side_menu/Logo'
import LoginForm from '@/components/login/LoginForm'

export default {
	components: {
		Logo,
		LoginForm
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
		this.$store.commit('END_LOADING')
		this.isShow()
	}
}
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
	transform: translateY(20px);
	opacity: 0;
}
</style>

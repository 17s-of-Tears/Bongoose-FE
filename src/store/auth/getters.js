import { getUserLocalStorage } from '@/utils/localStorage'

export default {
	isLogged(state) {
		return !!state.token
	},
	userEamilFatch() {
		const { email } = getUserLocalStorage()
		return /.+(?=@)/.exec(email)[0]
	}
}

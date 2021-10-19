import { deleteCookie } from '@/utils/cookies'

export default {
	SET_TOKEN(state, token) {
		state.token = token
	},
	LOGOUT(state) {
		state.user = null
		state.token = null
		deleteCookie('auth')
	}
}

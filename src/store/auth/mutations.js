import { deleteAuthCookie } from '@/utils/cookies'
import { deleteUserLocalStorage } from '@/utils/localStorage'

export default {
	SET_USER(state, user) {
		state.user = user
	},
	SET_TOKEN(state, token) {
		state.token = token.accessToken
	},
	LOGOUT(state) {
		state.user = []
		state.token = ''
		deleteAuthCookie()
		deleteUserLocalStorage()
	}
}

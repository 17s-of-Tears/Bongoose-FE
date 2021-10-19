import { getAuthCookie } from '@/utils/cookies'

export default {
	isLogged(state) {
		return !!state.token || getAuthCookie()
	}
}

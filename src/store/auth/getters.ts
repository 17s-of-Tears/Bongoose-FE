import { AuthState } from '@/store/auth'

export default {
	isLogged(state: AuthState) {
		return !!state.token
	}
}

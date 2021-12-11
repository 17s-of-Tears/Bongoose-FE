import { ResToken } from '@/api/sign/types'
import { ResUserMeInfo } from '@/api/user/types'
import { AuthState } from '@/store/auth'
import { deleteAuthCookie } from '@/utils/cookies'
import { deleteUserLocalStorage } from '@/utils/localStorage'

export enum AuthMutationTypes {
	SET_USER = 'SET_USER',
	SET_TOKEN = 'SET_TOKEN',
	LOGOUT = 'LOGOUT'
}

export default {
	[AuthMutationTypes.SET_USER](state: AuthState, user: ResUserMeInfo) {
		state.user = user
	},
	[AuthMutationTypes.SET_TOKEN](state: AuthState, token: ResToken) {
		state.token = token.accessToken
	},
	[AuthMutationTypes.LOGOUT](state: AuthState) {
		state.user = []
		state.token = ''
		deleteAuthCookie()
		deleteUserLocalStorage()
	}
}

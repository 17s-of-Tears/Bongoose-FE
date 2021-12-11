import { ActionContext } from 'vuex'
import { loginUser } from '@/api/sign'
import { userInfo } from '@/api/user'
import { ReqLoginData } from '@/api/sign/types'
import { RootState } from '@/store'
import { AuthState } from '@/store/auth'
import { saveAuthCookie } from '@/utils/cookies'
import { saveUserLocalStorage } from '@/utils/localStorage'

export enum AuthActionTypes {
	LOGIN = 'LOGIN',
	USER_INFO = 'USER_INFO'
}

export default {
	async [AuthActionTypes.LOGIN]({ commit, dispatch }: ActionContext<AuthState, RootState>, payload: ReqLoginData) {
		const { data } = await loginUser(payload)
		commit('SET_TOKEN', data)
		saveAuthCookie(data.accessToken)
		dispatch('USER_INFO')
		return data
	},

	async [AuthActionTypes.USER_INFO]({ commit }: ActionContext<AuthState, RootState>) {
		const { data } = await userInfo()
		commit('SET_USER', data)
		saveUserLocalStorage(data)
		return data
	}
}

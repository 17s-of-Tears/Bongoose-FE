import { loginUser } from '@/api/sign'
import { UserInfo } from '@/api/user'
import { saveAuthCookie } from '@/utils/cookies'
import { saveUserLocalStorage } from '@/utils/localStorage'

export default {
	async LOGIN({ commit, dispatch }, payload) {
		const { data } = await loginUser(payload)
		commit('SET_TOKEN', data)
		saveAuthCookie(data.accessToken)
		dispatch('USER_INFO')
		return data
	},

	async USER_INFO({ commit }) {
		const { data } = await UserInfo()
		commit('SET_USER', data)
		saveUserLocalStorage(data)
		return data
	}
}

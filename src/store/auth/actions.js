import { loginUser } from '@/api/auth'
import { saveAuthCookie } from '@/utils/cookies'

export default {
	async LOGIN({ commit }, payload) {
		const { data } = await loginUser(payload)
		console.log(data)
		commit('SET_TOKEN', data)
		saveAuthCookie(data.accessToken)
		return data
	}
}

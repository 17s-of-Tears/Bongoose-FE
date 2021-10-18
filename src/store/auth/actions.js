import { loginUser } from '@/api'

export default {
	async LOGIN({ commit }, payload) {
		const { data } = await loginUser(payload)
		console.log(data)
		commit('SET_TOKEN', data)
		return data
	}
}

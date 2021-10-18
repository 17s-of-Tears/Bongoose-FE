import { loginUser } from '@/api'

export default {
	namespaced: true,
	state: () => ({
		user: {},
		token: ''
	}),
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token
		}
	},
	actions: {
		async LOGIN({ commit }, payload) {
			const { data } = await loginUser(payload)
			console.log(data)
			commit('SET_TOKEN', data)
			return data
		}
	}
}

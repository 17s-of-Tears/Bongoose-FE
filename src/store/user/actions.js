import { getUsers } from '@/api/user'

export default {
	async GET_USERS({ commit }, payload) {
		const { data } = await getUsers(payload)
		commit('SET_USERS', data.users)
		return data
	}
}

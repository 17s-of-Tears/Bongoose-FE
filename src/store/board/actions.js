import { getBoards } from '@/api/board'

export default {
	async GET_BOARD({ commit }) {
		const { data } = await getBoards()
		commit('SET_BOARD', data)
		return data
	}
}

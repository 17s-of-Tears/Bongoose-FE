import throttle from 'lodash.throttle'
import { getBoards } from '@/api/board'

export default {
	GET_LOAD_BOARDS: throttle(async ({ state, commit }) => {
		const { start, end, hasMorePost } = state
		if (hasMorePost) {
			const { data } = await getBoards({ start, end })
			commit('SET_LOAD_BOARDS', data)
			return data
		}
	}, 2000)
}

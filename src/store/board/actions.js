import throttle from 'lodash.throttle'
import { getBoards } from '@/api/board'

export default {
	GET_LOAD_BOARDS: throttle(async ({ state, commit }, payload) => {
		const { start, end, hasMorePost } = state
		if (hasMorePost) {
			if (payload !== undefined) {
				// 로그인 한 유저의 게시물 불러오기
				const { userId } = payload
				const { data } = await getBoards({ start, end, userId })
				commit('SET_LOAD_BOARDS', data)
				return data
			} else {
				// 전체 게시물 불러오기
				const { data } = await getBoards({ start, end })
				commit('SET_LOAD_BOARDS', data)
				return data
			}
		}
	}, 2000)
}

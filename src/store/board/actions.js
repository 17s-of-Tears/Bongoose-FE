import throttle from 'lodash.throttle'
import { getBoardsAPI } from '@/api/board'

export default {
	GET_LOAD_BOARDS: throttle(async ({ state, commit }, payload) => {
		const { start, end, hasMorePost } = state
		if (hasMorePost) {
			if (payload !== undefined) {
				// 유저 또는 해시태그 게시물 검색결과
				const { userId, keyword } = payload
				const { data } = await getBoardsAPI({ start, end, userId, keyword })
				commit('SET_LOAD_BOARDS', data)
				return data
			} else {
				// 전체 게시물 불러오기
				const { data } = await getBoardsAPI({ start, end })
				commit('SET_LOAD_BOARDS', data)
				return data
			}
		}
	}, 2000)
}

import { ActionContext } from 'vuex'
import throttle from 'lodash.throttle'
import { getBoardsAPI } from '@/api/board'
import { RootState } from '@/store'
import { BoardState } from '@/store/board'
import { ReqBoardSearchData } from '@/api/board/types'

export enum BoardActionTypes {
	GET_LOAD_BOARDS = 'GET_LOAD_BOARDS'
}

export default {
	[BoardActionTypes.GET_LOAD_BOARDS]: throttle(
		async ({ state, commit }: ActionContext<BoardState, RootState>, payload: ReqBoardSearchData) => {
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
		},
		2000
	)
}

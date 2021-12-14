import { ResBoardInfo } from '@/api/board/types'
import { BoardState } from '@/store/board'

export enum BoardMutationTypes {
	SET_LOAD_BOARDS = 'SET_LOAD_BOARDS',
	CLEAR_BOARDS = 'CLEAR_BOARDS'
}

export default {
	[BoardMutationTypes.SET_LOAD_BOARDS](state: BoardState, payload: ResBoardInfo): void {
		state.boards = state.boards.concat(payload.boards as any)
		state.start = state.start + state.end
		// 불러올 데이터의 갯수가 state.end 이하면
		// 또는 lastEnd 와 현재 불러온 데이터의 갯수가 같다면 마지막 요청
		if (payload.boards.length % state.end !== 0 || state.boards.length === payload.lastEnd) {
			state.hasMorePost = false
			state.lastPost = true
		}
		state.watchBoard = !state.watchBoard
	},
	[BoardMutationTypes.CLEAR_BOARDS](state: BoardState): void {
		state.boards = []
		state.watchBoard = false
		state.start = 0
		state.end = 5
		state.hasMorePost = true
		state.lastPost = false
	}
}

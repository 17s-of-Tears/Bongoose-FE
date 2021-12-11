import { Module } from 'vuex'
import { RootState } from '@/store'
import { ResBoardData } from '@/api/board/types'
import state from '@/store/board/state'
import mutations from '@/store/board/mutations'
import actions from '@/store/board/actions'

export interface BoardState {
	boards: ResBoardData[] | []
	watchBoard: Boolean
	start: number
	end: number
	hasMorePost: boolean
	lastPost: boolean
	like: boolean
	dislike: boolean
}

export const board: Module<BoardState, RootState> = {
	namespaced: true,
	state,
	mutations,
	actions
}

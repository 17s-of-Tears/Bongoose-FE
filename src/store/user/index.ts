import { Module } from 'vuex'
import { RootState } from '@/store'
import state from '@/store/user/state'
import mutations from '@/store/user/mutations'
import actions from '@/store/user/actions'
import { ResUserData } from '@/api/user/types'

export interface UserState {
	users: ResUserData[] | []
	requestEnd: number | null
	lastEnd: number | null
	hasMoreUser: boolean
	lastUser: boolean
	start: number
	end: number
}

export const user: Module<UserState, RootState> = {
	namespaced: true,
	state,
	mutations,
	actions
}

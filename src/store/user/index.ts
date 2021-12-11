import { Module } from 'vuex'
import { RootState } from '@/store'
import state from '@/store/user/state'
import mutations from '@/store/user/mutations'
import actions from '@/store/user/actions'
import { ResUserSearchInfo } from '@/api/user/types'

export interface UserState {
	users: ResUserSearchInfo | null
}

export const user: Module<UserState, RootState> = {
	namespaced: true,
	state,
	mutations,
	actions
}

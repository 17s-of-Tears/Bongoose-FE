import { Module } from 'vuex'
import { RootState } from '@/store'
import state from '@/store/auth/state'
import getters from '@/store/auth/getters'
import mutations from '@/store/auth/mutations'
import actions from '@/store/auth/actions'

export interface AuthState {
	user: any
	token: string | undefined
}

export const auth: Module<AuthState, RootState> = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

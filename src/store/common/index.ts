import { Module } from 'vuex'
import { RootState } from '@/store'
import mutations from '@/store/common/mutations'
import actions from '@/store/common/actions'

export interface CommonState {
	alert: boolean
	message: string
	loading: boolean
}

export const common: Module<CommonState, RootState> = {
	namespaced: true,
	state: () => ({
		alert: false,
		message: '',
		loading: false
	}),
	mutations,
	actions
}

import { CommonState } from '@/store/common'

export enum CommonMutationTypes {
	OPEN_ALERT = 'OPEN_ALERT',
	CLOSE_ALERT = 'CLOSE_ALERT',
	SET_MESSAGE = 'SET_MESSAGE',
	START_LOADING = 'START_LOADING',
	END_LOADING = 'END_LOADING'
}

export default {
	[CommonMutationTypes.OPEN_ALERT](state: CommonState): void {
		state.alert = true
	},
	[CommonMutationTypes.CLOSE_ALERT](state: CommonState): void {
		state.alert = false
	},
	[CommonMutationTypes.SET_MESSAGE](state: CommonState, message: string): void {
		state.message = message
	},
	[CommonMutationTypes.START_LOADING](state: CommonState): void {
		state.loading = true
	},
	[CommonMutationTypes.END_LOADING](state: CommonState): void {
		state.loading = false
	}
}

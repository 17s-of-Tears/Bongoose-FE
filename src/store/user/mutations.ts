import { UserState } from '@/store/user'
import { ResUserSearchInfo } from '@/api/user/types'

export enum UserMutationsType {
	SET_USERS = 'SET_USERS',
	CLEAR_USERS = 'CLEAR_USERS'
}

export default {
	[UserMutationsType.SET_USERS](state: UserState, payload: ResUserSearchInfo): void {
		state.users = state.users.concat(payload.users as any)
		state.start = state.start + state.end
		if (payload.users.length % state.end !== 0 || state.users.length === payload.lastEnd) {
			state.hasMoreUser = false
			state.lastUser = true
		}
		state.requestEnd = payload.requestEnd
		state.lastEnd = payload.lastEnd
	},
	[UserMutationsType.CLEAR_USERS](state: UserState): void {
		state.users = []
		state.requestEnd = null
		state.lastEnd = null
		state.hasMoreUser = true
		state.start = 0
		state.end = 16
	}
}

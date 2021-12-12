import { UserState } from '@/store/user'
import { ResUserSearchInfo } from '@/api/user/types'

export enum UserMutationsType {
	SET_USERS = 'SET_USERS',
	CLEAR_USERS = 'CLEAR_USERS'
}

export default {
	[UserMutationsType.SET_USERS](state: UserState, payload: ResUserSearchInfo): void {
		state.usersInfo = payload
	},
	[UserMutationsType.CLEAR_USERS](state: UserState): void {
		state.usersInfo = null
	}
}

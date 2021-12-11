import { UserState } from '@/store/user'
import { ResUserSearchInfo } from '@/api/user/types'

export enum UserMutationsType {
	SET_USERS = 'SET_USERS'
}

export default {
	[UserMutationsType.SET_USERS](state: UserState, users: ResUserSearchInfo) {
		state.users = users
	}
}

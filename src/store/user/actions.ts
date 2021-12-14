import { ActionContext } from 'vuex'
import throttle from 'lodash.throttle'
import { getUsersAPI } from '@/api/user'
import { RootState } from '@/store'
import { UserState } from '@/store/user'
import { UserMutationsType } from '@/store/user/mutations'

export enum UserActionType {
	GET_All_USERS = 'GET_All_USERS'
}

export default {
	[UserActionType.GET_All_USERS]: throttle(
		async ({ state, commit }: ActionContext<UserState, RootState>, myFollow: 0 | 1) => {
			const { start, end, hasMoreUser } = state
			if (hasMoreUser) {
				// 전체 유저 정보 불러오기
				const { data } = await getUsersAPI({ start, end }, myFollow)
				commit(UserMutationsType.SET_USERS, data)
				return data
			}
		},
		2000
	)
}

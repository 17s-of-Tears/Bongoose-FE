import { ActionContext } from 'vuex'
import { AxiosRequestConfig } from 'axios'
import throttle from 'lodash.throttle'
import { RootState } from '@/store'
import { UserState } from '@/store/user'
import { getUsersAPI } from '@/api/user'
import { ReqUserSearchInfo } from '@/api/user/types'
import { UserMutationsType } from './mutations'

export enum UserActionType {
	GET_All_USERS = 'GET_All_USERS'
}

export default {
	[UserActionType.GET_All_USERS]: throttle(
		async ({ commit }: ActionContext<UserState, RootState>, payload: AxiosRequestConfig<ReqUserSearchInfo>) => {
			const { data } = await getUsersAPI(payload)
			commit(UserMutationsType.SET_USERS, data)
			return data
		},
		2000
	)
}

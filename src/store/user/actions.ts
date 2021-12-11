import { ActionContext } from 'vuex'
import { AxiosRequestConfig } from 'axios'
import { RootState } from '@/store'
import { UserState } from '@/store/user'
import { getUsers } from '@/api/user'
import { ReqUserSearchInfo } from '@/api/user/types'

export enum UserActionType {
	GET_USERS = 'GET_USERS'
}

export default {
	async [UserActionType.GET_USERS](
		{ commit }: ActionContext<UserState, RootState>,
		payload: AxiosRequestConfig<ReqUserSearchInfo>
	) {
		const { data } = await getUsers(payload)
		commit('SET_USERS', data)
		return data
	}
}

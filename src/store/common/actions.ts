import { ActionContext } from 'vuex'
import { RootState } from '@/store'
import { CommonState } from '@/store/common'

export enum CommonActionTypes {
	AUTO_SET_ALERT = 'AUTO_SET_ALERT'
}

export default {
	[CommonActionTypes.AUTO_SET_ALERT]({ commit }: ActionContext<CommonState, RootState>) {
		commit('OPEN_ALERT')
		setTimeout(() => {
			commit('CLOSE_ALERT')
		}, 1000)
	}
}

import { ActionContext } from 'vuex'
import { RootState } from '@/store'
import { CommonState } from '@/store/common'
import { CommonMutationTypes } from './mutations'

export enum CommonActionTypes {
	AUTO_SET_ALERT = 'AUTO_SET_ALERT'
}

export default {
	[CommonActionTypes.AUTO_SET_ALERT]({ commit }: ActionContext<CommonState, RootState>): void {
		commit(CommonMutationTypes.OPEN_ALERT)
		setTimeout(() => {
			commit(CommonMutationTypes.CLOSE_ALERT)
		}, 1000)
	}
}

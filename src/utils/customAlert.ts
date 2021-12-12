import store from '@/store'
import { CommonActionTypes } from '@/store/common/actions'
import { CommonMutationTypes } from '@/store/common/mutations'

const customAlert = (content: string): void => {
	store.commit(`common/${CommonMutationTypes.SET_MESSAGE}`, content)
	store.dispatch(`common/${CommonActionTypes.AUTO_SET_ALERT}`)
}

export default customAlert

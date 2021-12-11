import { createStore } from 'vuex'
import { auth, AuthState } from '@/store/auth'
import { board, BoardState } from '@/store/board'
import { common, CommonState } from '@/store/common'
import { user, UserState } from '@/store/user'

export interface RootState {
	auth: AuthState
	board: BoardState
	common: CommonState
	user: UserState
}

export default createStore({
	modules: {
		auth,
		board,
		common,
		user
	}
})

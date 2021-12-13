import { UserState } from '@/store/user'

export default (): UserState => ({
	users: [],
	lastEnd: null,
	requestEnd: null,
	hasMoreUser: true,
	lastUser: false,
	start: 0,
	end: 16
})

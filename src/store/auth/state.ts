import { AuthState } from '@/store/auth'
import { getAuthCookie } from '@/utils/cookies'
import { getUserLocalStorage } from '@/utils/localStorage'

export default (): AuthState => ({
	user: getUserLocalStorage() !== null ? getUserLocalStorage() : [],
	token: '' || getAuthCookie()
})

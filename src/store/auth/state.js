import { getAuthCookie } from '@/utils/cookies'
import { getUserLocalStorage } from '@/utils/localStorage'

export default () => ({
	user: getUserLocalStorage() !== null ? getUserLocalStorage() : [],
	token: '' || getAuthCookie()
})

import store from '@/store'
import { getAuthCookie } from '@/utils/cookies'

function setInterceptors(instance) {
	instance.interceptors.request.use(
		config => {
			config.headers.Authorization = store.state.auth.token || getAuthCookie()
			return config
		},
		error => Promise.reject(error)
	)

	instance.interceptors.response.use(
		response => response,
		error => Promise.reject(error)
	)
}

export { setInterceptors }

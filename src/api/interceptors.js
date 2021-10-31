import { getAuthCookie } from '@/utils/cookies'
import store from '@/store'

const setInterceptors = instance => {
	instance.interceptors.request.use(
		config => {
			config.headers.Authorization = `Bearer ${
				store.state.auth.token || getAuthCookie()
			}`
			return config
		},
		error => Promise.reject(error.response)
	)
	instance.interceptors.response.use(
		config => config,
		error => Promise.reject(error.response)
	)
	return instance
}

export { setInterceptors }

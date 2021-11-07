import {
	deleteAuthCookie,
	getAuthCookie,
	saveAuthCookie
} from '@/utils/cookies'
import store from '@/store'
import { refreshUser } from './sign'

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
		response => response,
		async error => {
			const { status } = error.response
			const { message } = error.response.data
			const { config } = error.response
			if (status == 401 && message == 'jwt expired') {
				// 토큰을 갱신한다.
				try {
					const { data } = await refreshUser()
					deleteAuthCookie()
					saveAuthCookie(data)
					store.commit('auth/SET_TOKEN', data)
					config.headers.Authorization = `Bearer ${data}`
					return instance(config)
				} catch (error) {
					console.error(error)
					return Promise.reject(error)
				}
			}
		}
	)
	return instance
}

export { setInterceptors }

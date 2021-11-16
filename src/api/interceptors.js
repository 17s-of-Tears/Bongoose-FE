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
			const { message } = error.response.data
			const { config } = error.response
			// 토큰이 만료가 되었을 때
			if (message == 'jwt expired') {
				console.log('gㅎㅇㅎㅇ')
				// 토큰을 갱신한다.
				try {
					deleteAuthCookie()
					const { data } = await refreshUser()
					saveAuthCookie(data)
					store.commit('auth/SET_TOKEN', data)
					config.headers.Authorization = `Bearer ${data}`
					return instance(config)
				} catch (error) {
					console.error(error.response)
					return Promise.reject(error)
				}
			}
		}
	)
	return instance
}

export { setInterceptors }

import { AxiosInstance } from 'axios'
import { deleteAuthCookie, getAuthCookie, saveAuthCookie } from '@/utils/cookies'
import { refreshUser } from '@/api/sign'
import store from '@/store'

const setInterceptors = (instance: AxiosInstance) => {
	instance.interceptors.request.use(
		config => {
			config.headers!.Authorization = `Bearer ${store.state.auth.token || getAuthCookie()}`
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
			if (message === 'jwt expired' || message === 'jwt malformed') {
				// 토큰을 갱신한다.
				try {
					deleteAuthCookie()
					const { data } = await refreshUser()
					saveAuthCookie(data.accessToken)
					store.commit('auth/SET_TOKEN', data.accessToken)
					config.headers.Authorization = `Bearer ${data.accessToken}`
					return instance(config)
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
				} catch (error: any) {
					console.error(error.response.data.message)
					return Promise.reject(error)
				}
			}
		}
	)
	return instance
}

export { setInterceptors }

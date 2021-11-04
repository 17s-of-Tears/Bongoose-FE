import axios from 'axios'
import { setInterceptors } from './interceptors'

// 로그인전 요청
const create = (url, options) => {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	return instance
}

// 로그인후 요청
function createAuth(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	setInterceptors(instance)
	return instance
}

const sign = create(`${process.env.VUE_APP_URI}/api/v1`)
const user = createAuth(`${process.env.VUE_APP_URI}/api/v1/user`)

export { sign, user }

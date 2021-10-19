import axios from 'axios'
import { setInterceptors } from './interceptors'

// 로그인전 요청
function create(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	return instance
}

// 로그인후 요청
// eslint-disable-next-line no-unused-vars
function createAuth(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	setInterceptors(instance)
	return instance
}

const auth = create(`${process.env.VUE_APP_URI}/api/v1`)

export { auth }

import axios from 'axios'
import { setInterceptors } from './interceptors'

const SERVER_URI = process.env.VUE_APP_URI

// 로그인전 요청
const create = (url, options) => {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	return instance
}

// 로그인후 요청
const createAuth = (url, options) => {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	setInterceptors(instance)
	return instance
}

const sign = create(`${SERVER_URI}/api/v1/sign`)
const user = createAuth(`${SERVER_URI}/api/v1/user`)
const board = createAuth(`${SERVER_URI}/api/v1/board`)

export { sign, user, board }

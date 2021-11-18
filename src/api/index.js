import axios from 'axios'
import { setInterceptors } from './interceptors'

const SERVER_URI = process.env.VUE_APP_URI

// 로그인전 요청
const create = url => {
	const instance = axios.create({ baseURL: url, withCredentials: true })
	return instance
}

// 로그인후 요청
const createAuth = url => {
	const instance = axios.create({ baseURL: url })
	setInterceptors(instance)
	return instance
}

const sign = create(`${SERVER_URI}/api/v1/sign`)
const root = createAuth(`${SERVER_URI}/api/v1/`)
const user = createAuth(`${SERVER_URI}/api/v1/user`)
const board = createAuth(`${SERVER_URI}/api/v1/board`)

export { sign, root, user, board }

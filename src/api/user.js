import { user } from './index'

const formDataConfig = {
	headers: { 'content-type': 'multipart/form-data' }
}

// 프로필 가져오기
const userInfo = () => user.get(`me`)

// 프로필 수정
const updateUser = payload => {
	const { formData } = payload
	return formData
		? user.put(`me`, payload, formDataConfig)
		: user.put(`me`, payload)
}

// 유저 정보 가져오기
const getUsers = payload => user.get('/', payload)

export { userInfo, updateUser, getUsers }

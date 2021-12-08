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

const getRandomFriends = payload => user.get('random', payload)

//다른 유저 프로필 자세히보기
const userDetail = userId => user.get(`/${userId}`)

export { userInfo, updateUser, getUsers, getRandomFriends, userDetail }

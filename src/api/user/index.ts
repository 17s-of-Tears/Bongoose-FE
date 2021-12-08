import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { user } from '@/api'
import {
	ReqUserInfo,
	ReqUserSearchInfo,
	ResRandomUserInfo,
	ResUserMeInfo,
	ResUserSearchInfo
} from '@/api/user/types'

const formDataConfig = {
	headers: { 'content-type': 'multipart/form-data' }
}

// 프로필 가져오기
const userInfo = (): AxiosPromise<ResUserMeInfo> => user.get(`me`)

// 프로필 수정
const updateUser = (payload: ReqUserInfo) => {
	const { formData } = payload
	return formData
		? user.put(`me`, payload, formDataConfig)
		: user.put(`me`, payload)
}

// 유저 정보 가져오기
const getUsers = (
	payload: AxiosRequestConfig<ReqUserSearchInfo>
): AxiosPromise<ResUserSearchInfo> => user.get('/', payload)

const getRandomFriends = (): AxiosPromise<ResRandomUserInfo> =>
	user.get('random')

//다른 유저 프로필 자세히보기
const userDetail = (userId: number): AxiosPromise<ResUserMeInfo> =>
	user.get(`/${userId}`)

export { userInfo, updateUser, getUsers, getRandomFriends, userDetail }

import { AxiosPromise } from 'axios'
import { user } from '@/api'
import { ReqUserInfo, ReqUserSearchInfo, ResRandomUserInfo, ResUserMeInfo, ResUserSearchInfo } from '@/api/user/types'

const formDataConfig = {
	headers: { 'content-type': 'multipart/form-data' }
}

// 프로필 가져오기
const userInfo = (): AxiosPromise<ResUserMeInfo> => user.get(`me`)

// 프로필 수정
const updateUser = (payload: ReqUserInfo | FormData, type: 'form' | 'body'): AxiosPromise => {
	return type === 'form' ? user.put(`me`, payload, formDataConfig) : user.put(`me`, payload)
}

// 유저 정보 가져오기
const getUsersAPI = (payload: ReqUserSearchInfo, myFollow: 0 | 1): AxiosPromise<ResUserSearchInfo> => {
	const { start, end, keyword } = payload
	return user.get(`/?start=${start}&end=${end}${keyword ? `&keyword=${keyword}` : ''}&mysubscribe=${myFollow}`)
}

/* user-detail */
//다른 유저 프로필 자세히보기
const getUserProfileAPI = (userId: number): AxiosPromise<ResUserMeInfo> => user.get(`/${userId}`)

/* user-relation */
// 친구 추가
const addFollowAPI = (userId: number): AxiosPromise => user.put(`/${userId}/relation`)

// 친구 삭제
const removeFollowAPI = (userId: number): AxiosPromise => user.delete(`/${userId}/relation`)

/* user-random */
// 친구 추천 (무작위 3명)
const getRandomFriends = (): AxiosPromise<ResRandomUserInfo[]> => user.get('random')

export { userInfo, updateUser, getUsersAPI, getRandomFriends, getUserProfileAPI, addFollowAPI, removeFollowAPI }

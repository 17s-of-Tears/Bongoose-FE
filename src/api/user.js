import { user } from './index'

const userInfo = () => user.get(`me`)

const updateUser = payload => user.put(`me`, payload)

//유저 정보 가져오기
const getUsers = payload => user.get('/', payload)

const getRandomFriends = payload => user.get('random', payload)

//다른 유저 프로필 자세히보기
const userDetail = userId => user.get(`/${userId}`)

export { userInfo, updateUser, getUsers, getRandomFriends, userDetail }

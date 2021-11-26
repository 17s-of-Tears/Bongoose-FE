import { user } from './index'

const userInfo = () => user.get(`me`)

const updateUser = payload => user.put(`me`, payload)

//유저 정보 가져오기
const getUsers = payload => user.get('/', payload)

export { userInfo, updateUser, getUsers }

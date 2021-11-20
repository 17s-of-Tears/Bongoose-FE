import { user } from './index'

const userInfo = () => user.get(`me`)

const updateUser = payload => user.put(`me`, payload)

export { userInfo, updateUser }

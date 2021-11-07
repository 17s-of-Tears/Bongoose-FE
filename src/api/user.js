import { user } from './index'

const UserInfo = () => user.get(`me`)

export { UserInfo }

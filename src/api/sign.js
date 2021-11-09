import { sign } from './index'

const signupUser = payload => sign.post(`up`, payload)

const loginUser = payload => sign.post(`/`, payload)

const refreshUser = () => sign.get(`/`, { withCredentials: true })

export { signupUser, loginUser, refreshUser }

import { sign } from './index'

const signupUser = payload => sign.post(`up`, payload)

const loginUser = payload => sign.post(`/`, payload)

const refreshUser = payload => sign.get(`/`, payload)

export { signupUser, loginUser, refreshUser }

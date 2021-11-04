import { sign } from './index'

const signupUser = payload => sign.post(`sign/up`, payload)

const loginUser = payload => sign.post(`sign`, payload)

export { signupUser, loginUser }

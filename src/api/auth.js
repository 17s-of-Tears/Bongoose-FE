import { auth } from './index'

const signupUser = payload => auth.post(`sign/up`, payload)

const loginUser = payload => auth.post(`sign`, payload)

export { signupUser, loginUser }

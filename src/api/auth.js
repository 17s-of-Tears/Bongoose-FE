import { auth } from './index'

function signupUser(payload) {
	return auth.post(`sign/up`, payload)
}

function loginUser(payload) {
	return auth.post(`sign`, payload)
}

export { signupUser, loginUser }

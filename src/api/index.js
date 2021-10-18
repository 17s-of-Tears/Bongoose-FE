import axios from 'axios'

function loginUser(payload) {
	return axios.post(`${process.env.VUE_APP_URI}/api/v1/sign`, payload)
}

export { loginUser }

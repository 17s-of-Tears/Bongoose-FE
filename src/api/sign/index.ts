import { AxiosPromise } from 'axios'
import { sign } from '@/api'
import { ReqLoginData, ReqSignData, ResToken } from '@/api/sign/types'

const signupUser = (payload: ReqSignData): AxiosPromise<ResToken> =>
	sign.post(`up`, payload)

const loginUser = (payload: ReqLoginData): AxiosPromise<ResToken> =>
	sign.post(`/`, payload)

const refreshUser = (): AxiosPromise<ResToken> => sign.get(`/`)

export { signupUser, loginUser, refreshUser }

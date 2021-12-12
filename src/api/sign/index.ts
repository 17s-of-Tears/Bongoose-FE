import { AxiosPromise } from 'axios'
import { sign } from '@/api'
import { ReqLoginData, ReqSignData, ResToken } from '@/api/sign/types'

// 회원 가입 API
const signupUser = (payload: ReqSignData): AxiosPromise<ResToken> => sign.post(`up`, payload)

// 로그인 API
const loginUser = (payload: ReqLoginData): AxiosPromise<ResToken> => sign.post(`/`, payload)

// 리플래쉬 토큰
const refreshUser = (): AxiosPromise<ResToken> => sign.get(`/`)

export { signupUser, loginUser, refreshUser }

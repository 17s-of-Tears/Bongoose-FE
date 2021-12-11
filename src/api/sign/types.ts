export interface ReqLoginData {
	email: string
	password: string
}

export interface ReqSignData extends ReqLoginData {
	nickname?: string
}

export interface ResToken {
	accessToken: string
}

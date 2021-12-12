export interface UserImagesType {
	imageId: number
	imageUrl: string
	boardId: number
}

export interface ReqUserSearchInfo {
	start?: number
	end?: number
	keyword?: string
}

export interface ResUserData {
	id: number
	email: string
	name: string
	imageUrl: string | null
	description: string
}

export interface ResUserSearchInfo {
	user: ResUserData[]
	requestEnd: number
	lastEnd: number
}

export interface ResUserMeInfo extends ResUserData {
	createdAt: Date
	modifiedAt: Date
	images: UserImagesType[] | []
	subscribed?: boolean
}

export interface ReqUserInfo {
	nickname?: string
	description?: string
}

export interface ResRandomUserInfo {
	id: number
	email: string
	name: number
	imageUrl: string | null
	description: string
}

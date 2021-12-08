export interface UserImagesType {
	imageId: number
	imageUrl: string
	boardId: number
}

export interface ReqUserSearchInfo {
	start: number
	end: number
	keyword: string
}

export interface ResUserSearchInfo {
	id: number
	email: string
	name: string
	imageUrl: string | null
	description: string
}

export interface ResUserMeInfo extends ResUserSearchInfo {
	createdAt: Date
	modifiedAt: Date
	images: UserImagesType[] | []
	subscribed?: boolean
}

export interface ReqUserInfo {
	nickname?: string
	description?: string
	formData?: File
}

export interface ResRandomUserInfo {
	id: number
	email: string
	name: number
	imageUrl: string | null
	description: string
}

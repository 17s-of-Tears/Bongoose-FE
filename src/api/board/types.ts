// Board Types
export interface ReqBoardSearchData {
	start: number
	end: number
	keyword?: string
	userId?: number
}

export interface ResBoardInfo {
	id: number
	userName: string
	userEmail: string
	images: string | null
	hashtags: string[]
	likes: number
	dislikes: number
	content: string
	createdAt: string
}

export interface ResOneBoardInfo {
	name: string
	createdAt: string
	content: string
	hashtags: { hashtag: string }[]
	images: {
		id: number
		imageUrl: string
	}[]
	likes: number
	dislikes: number
	comments: number
}

export interface ReqBoardWritingData {
	content: string
	hashtags: string[]
	formData: File
}

export interface ReqBoardUpdateData extends ReqBoardWritingData {
	overwrite?: []
}

// Comment Types
export interface ReqCommentSearchData {
	page?: number
	pageSize?: number
}

export interface ResCommentInfo {
	_meta: {
		page: {
			current: number
			last: number
		}
	}
	comments: {
		commentID: number
		name: string
		email: string
		imageUrl: string | null
		content: string
		createdAt: string
	}[]
}

export interface ReqUpadteCommentData {
	boardID: number
	commentID: number
}

// Like Types

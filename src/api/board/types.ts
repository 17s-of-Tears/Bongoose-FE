// Board Types
export interface ReqBoardSearchData {
	start?: number
	end?: number
	keyword?: string
	userId?: number
}

export interface ResBoardData {
	id: number
	userId: number
	userName: string
	userEmail: string
	userImageUrl: string | null
	images: string | null
	hashtags: string[]
	likes: number
	dislikes: number
	content: string
	createdAt: string
}

export interface ResBoardInfo {
	boards: ResBoardData[]
	requestEnd: number
	lastEnd: number
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
	hashtags: string[] | null
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

export interface ReqDeleteCommentData {
	boardID: number
	commentID: number
}

export interface ReqUpadteCommentData extends ReqDeleteCommentData {
	content: string
}

// Like Types

// Hash Types
export interface ReqBoardRating {
	hashtag: string
	total: number
}

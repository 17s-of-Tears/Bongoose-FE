import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { root, board } from '@/api'
import {
	ReqBoardRating,
	ReqBoardSearchData,
	ReqBoardUpdateData,
	ReqBoardWritingData,
	ReqCommentSearchData,
	ReqDeleteCommentData,
	ReqUpadteCommentData,
	ResBoardInfo,
	ResCommentInfo,
	ResOneBoardInfo
} from '@/api/board/types'

const formDataConfig = {
	headers: { 'content-type': 'multipart/form-data' }
}

// boards
const getBoardsAPI = (payload: ReqBoardSearchData): AxiosPromise<ResBoardInfo[]> => {
	const { start, end, userId, keyword } = payload
	const params = { start, end, userId, keyword }
	return root.get(`/board`, { params })
}

// board CRUD
const getBoardAPI = (boardId: number): AxiosPromise<ResOneBoardInfo> => board.get(`/${boardId}`)

const createBoardAPI = (payload: ReqBoardWritingData | FormData, type: 'form' | 'body') => {
	// 이미지 업로드 분기처리
	return type === 'form' ? board.post(`/`, payload, formDataConfig) : board.post(`/`, payload)
}

const updateBoardAPI = (boardId: number, payload: ReqBoardUpdateData | FormData, type: 'form' | 'body') => {
	// 이미지 업로드 분기처리
	return type === 'form' ? board.put(`/${boardId}`, payload, formDataConfig) : board.put(`/${boardId}`, payload)
}

const removeBoardAPI = (boardId: number) => board.delete(`/${boardId}`)

// comment CRUD
const getCommentsAPI = (
	boardId: number,
	payload?: AxiosRequestConfig<ReqCommentSearchData>
): AxiosPromise<ResCommentInfo> => board.get(`/${boardId}/comment`, payload)

const createCommentAPI = (payload: { boardId: number; content: string }) => {
	const { boardId, content } = payload
	return board.post(`/${boardId}/comment`, { content })
}

const updateCommentAPI = (payload: ReqUpadteCommentData) => {
	const { boardID, commentID, content } = payload
	return board.put(`/${boardID}/comment/${commentID}`, content)
}

const removeCommentAPI = (payload: ReqDeleteCommentData) => {
	const { boardID, commentID } = payload
	return board.delete(`/${boardID}/comment/${commentID}`)
}

// like
const getLikeInfoAPI = (boardId: number): AxiosPromise<{ like: boolean }> => board.get(`/${boardId}/like`)

const updateLikeInfoAPI = (payload: { boardId: number; like: boolean }) => {
	const { boardId, like } = payload
	return board.put(`/${boardId}/like`, { like })
}

const deleteLikeInfoAPI = (boardId: number) => board.delete(`/${boardId}/like`)

// hashtag ranking
const getHashtagRankingAPI = (): AxiosPromise<ReqBoardRating[]> => board.get('/rating')

export {
	getBoardsAPI,
	getBoardAPI,
	createBoardAPI,
	updateBoardAPI,
	removeBoardAPI,
	getCommentsAPI,
	createCommentAPI,
	updateCommentAPI,
	removeCommentAPI,
	getLikeInfoAPI,
	updateLikeInfoAPI,
	deleteLikeInfoAPI,
	getHashtagRankingAPI
}

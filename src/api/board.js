import { root, board } from './index'

const config = {
	headers: { 'content-type': 'multipart/form-data' }
}

// boards
const getBoards = payload => {
	const { start, end, userId } = payload
	const params = { start, end, userId }
	return root.get(`/board`, { params })
}

// board
const getBoard = boardId => board.get(`/${boardId}`)

const createBoard = payload => {
	const { formData } = payload
	// 이미지 업로드 분기처리
	const res = formData
		? board.post(`/`, payload, config)
		: board.post(`/`, payload)
	return res
}

const updateBoard = (boardId, payload) => {
	const { formData } = payload
	// 이미지 업로드 분기처리
	const res = formData
		? board.put(`/${boardId}`, payload, config)
		: board.put(`/${boardId}`, payload)
	return res
}

const removeBoard = boardId => board.delete(`/${boardId}`)

// like
const getLikeInfo = boardId => board.get(`/${boardId}/like`)

const updateLikeInfo = payload => {
	const { boardId, like } = payload
	return board.put(`/${boardId}/like`, { like })
}

const deleteLikeInfo = boardId => board.delete(`/${boardId}/like`)

// hashtag ranking
const getHashtagRanking = () => board.get('/rating')

// comment
const getComments = boardId => board.get(`/${boardId}/comment`)

const createComment = payload => {
	const { boardId, content } = payload
	return board.post(`/${boardId}/comment`, { content })
}

const updateCommentAPI = (payload, content) => {
	const { boardID, commentID } = payload
	return board.put(`/${boardID}/comment/${commentID}`, content)
}

const removeComment = payload => {
	const { boardID, commentID } = payload
	return board.delete(`/${boardID}/comment/${commentID}`)
}

export {
	getBoards,
	createBoard,
	getBoard,
	updateBoard,
	removeBoard,
	getLikeInfo,
	updateLikeInfo,
	deleteLikeInfo,
	getHashtagRanking,
	getComments,
	createComment,
	removeComment,
	updateCommentAPI
}

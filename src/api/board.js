import { root, board } from './index'

const config = {
	headers: { 'content-type': 'multipart/form-data' }
}

// boards
const getBoardsAPI = payload => {
	const { start, end, userId } = payload
	const params = { start, end, userId }
	return root.get(`/board`, { params })
}

// board CRUD
const getBoardAPI = boardId => board.get(`/${boardId}`)

const createBoardAPI = payload => {
	const { formData } = payload
	// 이미지 업로드 분기처리
	const res = formData
		? board.post(`/`, payload, config)
		: board.post(`/`, payload)
	return res
}

const updateBoardAPI = (boardId, payload) => {
	const { formData } = payload
	console.log(boardId)
	console.log(payload)
	console.log(formData)
	// 이미지 업로드 분기처리
	const res = formData
		? board.put(`/${boardId}`, payload, config)
		: board.put(`/${boardId}`, payload)
	return res
}

const removeBoardAPI = boardId => board.delete(`/${boardId}`)

// comment CRUD
const getCommentsAPI = boardId => board.get(`/${boardId}/comment`)

const createCommentAPI = payload => {
	const { boardId, content } = payload
	return board.post(`/${boardId}/comment`, { content })
}

const updateCommentAPI = (payload, content) => {
	const { boardID, commentID } = payload
	return board.put(`/${boardID}/comment/${commentID}`, content)
}

const removeCommentAPI = payload => {
	const { boardID, commentID } = payload
	return board.delete(`/${boardID}/comment/${commentID}`)
}

// like
const getLikeInfoAPI = boardId => board.get(`/${boardId}/like`)

const updateLikeInfoAPI = payload => {
	const { boardId, like } = payload
	return board.put(`/${boardId}/like`, { like })
}

const deleteLikeInfoAPI = boardId => board.delete(`/${boardId}/like`)

// hashtag ranking
const getHashtagRankingAPI = () => board.get('/rating')

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

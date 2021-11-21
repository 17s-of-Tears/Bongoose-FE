import { root, board } from './index'

const config = {
	headers: { 'content-type': 'multipart/form-data' }
}

const getBoards = payload => {
	const { start, end, userId } = payload
	const params = { start, end, userId }
	return root.get(`/board`, { params })
}

const createBoard = payload => {
	const { formData } = payload
	// 이미지 업로드 분기처리
	const res = formData
		? board.post(`/`, payload, config)
		: board.post(`/`, payload)
	return res
}

const getBoard = boardId => board.get(`/${boardId}`)

const updateBoard = (boardId, data) => board.put(`/${boardId}`, data)

const updateBoardImage = (boardId, data) =>
	board.put(`/${boardId}/image`, data, config)

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

export {
	getBoards,
	createBoard,
	getBoard,
	updateBoard,
	updateBoardImage,
	removeBoard,
	getLikeInfo,
	updateLikeInfo,
	deleteLikeInfo,
	getHashtagRanking
}

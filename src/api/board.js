import { root, board } from './index'

const getBoards = payload => {
	const { start, end, userId } = payload
	const params = { start, end, userId }
	return root.get(`/board`, { params })
}

const createBoard = payload => board.post(`/`, payload)

const getBoard = payload => board.get(`/${payload}`)

const updateBoard = (payload, data) => board.put(`/${payload}`, data)

const removeBoard = payload => board.delete(`/${payload}`)

// like
const getLikeCount = payload => board.get(`/${payload}/like`)

const updateLikeCount = payload => {
	const { boardId, like } = payload
	return board.put(`/${boardId}/like`, like)
}

const deleteLikeCount = payload => board.delete(`/${payload}`)

export {
	getBoards,
	createBoard,
	getBoard,
	updateBoard,
	removeBoard,
	getLikeCount,
	updateLikeCount,
	deleteLikeCount
}

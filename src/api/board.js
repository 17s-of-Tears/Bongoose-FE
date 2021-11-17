import { root, board } from './index'

const getBoards = payload => {
	const { start, end, userId } = payload
	const params = { start, end, userId }
	return root.get(`/board`, { params })
}

const createBoard = payload => {
	console.log(payload)
	return board.post(`/`, payload)
}

const getBoard = payload => board.get(`/${payload}`)

const updateBoard = (payload, data) => board.put(`/${payload}`, data)

const removeBoard = payload => board.delete(`/${payload}`)

// like
const getLikeInfo = payload => board.get(`/${payload}/like`)

const updateLikeInfo = payload => {
	const { boardId, like } = payload
	return board.put(`/${boardId}/like`, { like })
}

const deleteLikeInfo = payload => board.delete(`/${payload}/like`)

// hashtag ranking
const getHashtagRanking = () => board.get('/rating')

export {
	getBoards,
	createBoard,
	getBoard,
	updateBoard,
	removeBoard,
	getLikeInfo,
	updateLikeInfo,
	deleteLikeInfo,
	getHashtagRanking
}

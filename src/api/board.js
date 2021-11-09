import { root, board } from './index'

const getBoards = payload => {
	const { start, end, keyword } = payload
	const params = { start, end, keyword }
	return root.get(`/board`, { params })
}

const createBoard = payload => board.post(`/`, payload)

const removeBoard = payload => board.delete(`/${payload}`)

export { getBoards, createBoard, removeBoard }

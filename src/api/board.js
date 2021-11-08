import { root, board } from './index'

const getBoards = payload => {
	const { start, end } = payload
	const params = { start, end }
	return root.get(`/board`, { params })
}

const createBoard = payload => board.post(`/`, payload)

export { getBoards, createBoard }

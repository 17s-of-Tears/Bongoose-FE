import { board } from './index'

// 무한 스크롤 수정
const getBoards = () => board.get(`/`)

const createBoard = payload => board.post(`/`, payload)

export { getBoards, createBoard }

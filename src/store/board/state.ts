import { BoardState } from '@/store/board'

export default (): BoardState => ({
	boards: [],
	watchBoard: false,
	// 무한 스크롤
	start: 0,
	end: 5,
	hasMorePost: true,
	lastPost: false,
	// 좋아요
	like: false,
	dislike: false
})

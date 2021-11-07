export default {
	SET_BOARD(state, boards) {
		state.boards = boards.boards
		state.watchBoard = !state.watchBoard
	}
}

export default {
	SET_LOAD_BOARDS(state, payload) {
		state.boards = state.boards.concat(payload.boards)
		state.start = state.start + state.end
		// 불러올 데이터의 갯수가 state.end 이하면 마지막 요청
		if (payload.boards.length % state.end !== 0) {
			state.hasMorePost = false
			state.lastPost = true
		}
		state.watchBoard = !state.watchBoard
	}
}

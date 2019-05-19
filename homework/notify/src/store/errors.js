export default {
	state: {
		error: null
	},
	mutations: {
		error(state, payload) {
			state.error = payload
		}
	},
	actions: {
		error({commit}, payload) {
			commit('error', payload)
		}
	},
	getters: {
		getError(state) {
			return state.error
		},
	}
}
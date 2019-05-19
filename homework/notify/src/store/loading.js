export default {
	state: {
		loading: false
	},
	mutations: {
		loading(state, payload) {
			state.loading = payload
		}
	},
	actions: {
		loading({commit}, payload) {
			commit('loading', payload)
		}
	},
	getters: {
		getLoading(state) {
			return state.loading
		},
	}
}
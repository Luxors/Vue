import axios from 'axios'

export default {
	state: {
		notes: []
	},
	mutations: {
		setNotes(state, notes) {
			state.notes = notes
		},
		addNote(state, payload) {
			state.notes.push(payload)
		},
		removeNote(state, payload) {  
      state.notes.splice(payload, 1)
    }
	},
	actions: {
		fetchNotes({ commit }) {
			return axios
				.get('http://luxors.net/vue-pro/api/notes.php')
				.then(res => res.data)
				.then(notes => {commit('setNotes', notes)} )
		},
		addNote( {commit}, payload ) {
			commit('addNote', payload )
		},
		removeNote({commit}, payload) {
			commit('removeNote', payload)
		}
	},
	getters: {
		getNotes (state) {
			return state.notes
		}
	}
}
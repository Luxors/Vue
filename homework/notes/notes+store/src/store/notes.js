export default {
	state: {
		notes: [
			// {
			// 	title: 'First Note',
			// 	priority: 'normal',
			// 	descr: 'Description for first note',
			// 	date: new Date(Date.now()).toLocaleString()
			// },
			// {
			// 	title: 'Second Note',
			// 	priority: 'medium',
			// 	descr: 'Description for second note',
			// 	date: new Date(Date.now()).toLocaleString()
			// },
			// {
			// 	title: 'Third Note',
			// 	priority: 'hight',
			// 	descr: 'Description for third note',
			// 	date: new Date(Date.now()).toLocaleString()
			// }
		]
	},
	mutations: {
		addNote(state, payload) {
			state.notes.push(payload)
		},
		removeNote(state, payload) {  
      state.notes.splice(payload, 1)
    }
	},
	actions: {
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
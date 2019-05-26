import axios from 'axios'
import loadMore from '../assets/js/loadMore.js'
// import loadNotify from '../assets/js/loadNotify.js'

export default {
	state: {
		messages: [],
		messagesMain: []
	},
	mutations: {
		setMessage(state, payload) {
			state.messages = payload
		},
		setMessageMain(state, payload) {
			state.messagesMain = payload
		},
		loadMessages(state, payload) {
			state.messagesMain = [...state.messagesMain, ...payload]
		},
		loadNotify(state, payload) {
			state.setMessage = payload
			state.setMessageMain = payload
		}
	},
	actions: {
		setMessage({commit}, payload) {
			commit('setMessage', payload)
		},
		setMessageMain({commit}, payload) {
			commit('setMessageMain', payload)
		},
		loadMessages({commit, getters}) {
			let res = getters.getMessageFilter
			commit('loadMessages', loadMore(res))
		},
		loadNotifyLazy({commit}) {
			commit('loading', true)
			setTimeout( () => {
				commit('getNotify')
			}, 1800)
		},
		loadNotify({commit}) {
			// commit( loadNotify() )
			// this.loading = true
			commit('loading', true)
			axios
				.get('http://luxors.net/vue-pro/api/notify/notifyApi.php')
					.then(response => {
						let res = response.data.notify,
								messages = [],
								messagesMain = [];
						console.log(res)		

						//--------- Filter (Вывод только сообщений с параметром main из API )------------//
						for (let i = 0; i < res.length; i++) {
							if (res[i].main) messagesMain.push(res[i])
							else messages.push(res[i])
						}
						console.log(messages, messagesMain)
						//---------------------- end filter ----------------------//

						commit('setMessage', messages)
						commit('setMessageMain', messagesMain)
					})
					.catch(error => {
						commit('error', 'Error: Network Error')
					})
					.finally( () => commit('loading', false))
		}
	},
	getters: {
		getMessage(state) {
			return state.messages
		},
		getMessageFilter(state) {
			return state.messages.filter(mes => {
				return mes.main === false
			})
		},
		getMessageMain(state) {
			return state.messagesMain
		},
		getNotify(state) {
			return state.loadNotify
		}
	}
}
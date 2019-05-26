import axios from 'axios'

export default function loadNotify () {
	// this.loading = true
	// this.$store.dispatch('loading', true)
	axios
		.get('http://luxors.net/vue-pro/api/notify/notifyApi.php')
			.then(response => {
				let res = response.data.notify,
						messages = [],
						messagesMain = [];

				for (let i = 0; i < res.length; i++) {
					if (res[i].main) messagesMain.push(res[i])
					else messages.push(res[i])
				}

				// this.$store.dispatch('setMessage', messages)
				// this.$store.dispatch('setMessageMain', messagesMain)
				// this.error = 'Error: Network Error'
			})
			.catch(error => {
				// this.$store.dispatch('error', 'Error: Network Error')
			})
			// .finally( () => this.$store.dispatch('loading', false))
			// .finally( () => this.loading = false )
}
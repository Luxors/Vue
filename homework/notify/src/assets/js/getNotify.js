export default function loadMore () {
	this.$store.dispatch('loading', true)
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

				this.$store.dispatch('setMessage', messages)
				this.$store.dispatch('setMessageMain', messagesMain)
			})
			.catch(error => {
				this.$store.dispatch('error', 'Error: Network Error')
			})
			.finally( () => this.$store.dispatch('loading', false))
}
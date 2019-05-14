<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<!-- wrapper -->
				<div class="notify__wrapper">

					<!-- title -->
					<div class="notify-title">
						<h1>Notify App</h1>
						<!-- svg -->

					</div>

					<!-- content -->
					<div class="notify__content">

						<!-- preloader -->
						<Preloader v-if="loading" :width="90" :height="90" />

						<!-- notify -->
						<Notify v-if="!loading" :messages="messages"></Notify>

					</div>

				</div>
				
			</div>
		</section>
	</div>

</template>

<script>
import axios from 'axios'

// UI
import Preloader from '@/components/UI/Preloader.vue'

import Notify from '@/components/Notify.vue'
import { log } from 'util';
import { setTimeout } from 'timers';

export default {
	components: {
		Preloader,
		Notify
	},
	data() {
		return {
			loading: false,
			messages: []
		}
	},
	mounted() {
		// this.getNotifyLazy()
		this.getNotify()
	},
	methods: {
		getNotify() {
			this.loading = true
			axios
				.get('http://luxors.net/vue-pro/api/notify/notifyApi.php')
					.then(response => {
						let res = response.data.notify
						this.messages = res
						// console.log(res)
					})
					.catch(error => {
						console.log(error)
					})
					.finally( () => this.loading = false)
		}
		// getNotifyLazy() {
		// 	this.loading = true
		// 	setTimeout( () => {
		// 		this.getNotify()
		// 	}, 1800)
		// }
	}
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	// height: 90vh;
}
.notify__wrapper {
	width: 400px;
	background-color: #fff;
	padding: 30px;
	border-radius: 16px;
	box-shadow: 0 12px 22px 0 rgba(0, 0, 0, .1);
}
.notify-title {
	h1 {
		font-size: 24px;
	}
}
.notify__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 300px;
}
</style>


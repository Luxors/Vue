<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<Notify :messages="messages"></Notify>
			</div>
		</section>
	</div>

</template>

<script>
import Notify from '@/components/Notify.vue'

export default {
	components: {
		Notify
	},
	data() {
		return {
			messages: [
				{title: 'message 1'},
				{title: 'message 2'},
				{title: 'message 3'},
				{title: 'message 4'},
				{title: 'message 5'},
				{title: 'message 6'}
			]
		}
	}
	
}
</script>

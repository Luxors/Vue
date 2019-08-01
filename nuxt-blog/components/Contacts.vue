<template>
	<section class="contacts">
		<div class="container">
			<h2 class="title">Contact me!</h2>
			<form class="contacts-form" @submit.prevent="onSubmit">
				<label>Name:</label>
				<input v-model="user.name" type="text" />
				<label>Email:</label>
				<input v-model="user.email" type="text" />
				<label>Text:</label>
				<textarea v-model="user.text"></textarea>
				<div class="controls">
					<button class="btn btnWhite">Submit</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: '',
				email: '',
				text: ''
			}
		}
	},
	methods: {
		onSubmit() {
			console.log(this.user)
		}
	}
}
</script>

<style lang="scss">
.contacts {
	text-align: center;
	color: #fff;
	background-color: #4f68f4;

	.title {
		color: #fff;
	}

	.contacts-form {
		max-width: 580px;
		margin: 0 auto;
	}

	.controls {
		margin: 30px 0;
	}
}
</style>

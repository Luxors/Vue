<template>
	<section class="contacts">
		<div class="container">
			<h2 class="title">Contact me!</h2>

			<Message v-if="message" :message="message" />

			<form class="contacts-form" @submit.prevent="onSubmit">
				<AppInput v-model="user.name"> Name: </AppInput>

				<AppInput v-model="user.email" type="email"> Email: </AppInput>

				<AppTextArea v-model="user.text"> Text: </AppTextArea>

				<div class="controls">
					<AppButton class="btnWhite">Submit</AppButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			message: null,
			user: {
				name: '',
				email: '',
				text: ''
			}
		}
	},
	methods: {
		onSubmit() {
			this.message = 'Submited!'

			this.user.name = ''
			this.user.email = ''
			this.user.text = ''
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

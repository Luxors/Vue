<template>
	<section class="new-comment">
		<div class="container">
			<h3 class="title">Add comment</h3>

			<Message v-if="message" :message="message" />

			<form class="comment-form" @submit.prevent="onSubmit">
				<AppInput v-model="comment.name"> Name: </AppInput>

				<AppTextArea v-model="comment.text"> Text: </AppTextArea>

				<div class="controls">
					<AppButton>Submit</AppButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
import Message from '~/components/UI/Message'
import AppButton from '~/components/UI/Controls/Button'
import AppInput from '~/components/UI/Controls/Input'
import AppTextArea from '~/components/UI/Controls/TextArea'

export default {
	components: { Message, AppButton, AppInput, AppTextArea },
	data() {
		return {
			message: null,
			comment: {
				name: '',
				text: ''
			}
		}
	},
	methods: {
		onSubmit() {
			this.message = 'Submited!'

			this.comment.name = ''
			this.comment.text = ''
		}
	}
}
</script>

<style lang="scss">
.new-comment {
	text-align: center;

	.comment-form {
		max-width: 580px;
		margin: 0 auto;
	}

	.controls {
		margin: 30px 0;
	}
}
</style>

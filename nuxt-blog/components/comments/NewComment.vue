<template>
	<section class="new-comment">
		<div class="container">
			<h3 class="title">Add comment</h3>
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
import AppButton from '~/components/UI/Controls/Button'
import AppInput from '~/components/UI/Controls/Input'
import AppTextArea from '~/components/UI/Controls/TextArea'

export default {
	components: { AppButton, AppInput, AppTextArea },
	data() {
		return {
			comment: {
				name: '',
				text: ''
			}
		}
	},
	methods: {
		onSubmit() {
			console.log(this.comment)
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

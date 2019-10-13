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
export default {
	props: {
		postId: {
			type: String,
			required: true
		}
	},
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
			this.$store
				.dispatch('addComment', {
					postId: this.postId,
					publish: false,
					...this.comment
				})
				.then(() => {
					this.message = 'Submited!'

					this.comment.name = ''
					this.comment.text = ''
				})
				.catch((e) => {
					console.log(e)
				})
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

<template>
	<section class="new-post">
		<div class="container">
			<form @submit.prevent="onSubmit">
				<AppInput v-model="post.title">Title:</AppInput>
				<AppInput v-model="post.descr">Descr:</AppInput>
				<AppInput v-model="post.img">Img:</AppInput>
				<AppTextArea v-model="post.content">Content:</AppTextArea>

				<div class="controls">
					<AppButton class="btnDanger" @click="cansel">Cansel</AppButton>
					<AppButton>Save</AppButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		postEdit: {
			type: Object,
			default: () => ({}),
			required: false
		}
	},
	data() {
		return {
			post: this.postEdit
				? {
						...this.postEdit
				  }
				: {
						title: '',
						descr: '',
						img: '',
						content: ''
				  }
		}
	},
	methods: {
		cansel() {
			this.$router.push('/admin')
		},
		onSubmit() {
			this.$emit('submit', this.post)
		}
	}
}
</script>

<style lang="scss" scoped>
.controls {
	margin-top: 40px;
	text-align: center;

	button {
		width: 150px;
	}
}
</style>

<template>
	<section class="auth">
		<div class="container">
			<form class="auth-form" @submit.prevent="onSubmit">
				<AppInput v-model="user.email" type="email"> Login: </AppInput>

				<AppInput v-model="user.password" type="password"> Password: </AppInput>

				<div class="controls">
					<AppButton>Login</AppButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			// message: null,
			user: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		onSubmit() {
			// this.message = 'Submited!'
			this.$store
				.dispatch('authUser', this.user)
				.then((res) => {
					// console.log(res)
					this.$router.push('/admin')
				})
				.catch((e) => {
					console.log(e)

					this.user.email = ''
					this.user.password = ''
				})
		}
	}
}
</script>

<style lang="scss">
.auth {
	padding: 0;
	text-align: center;

	.container {
		display: flex;
		align-items: center;
		min-height: 100vh;
	}

	.title {
		color: #fff;
	}

	.auth-form {
		max-width: 580px;
		margin: 0 auto;
	}

	.controls {
		margin: 30px 0;
	}
}
</style>

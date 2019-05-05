<template>
	<Modal title="Login" @closeModal="closeModal">
		<div slot="body">
			<form @submit.prevent="onSubmit">

				<div class="form-group" :class="{ errorInput: $v.login.$error }">
					<label>Login:</label>
					<p class="errorText" v-if="!$v.login.required" >Field is required!</p>
					<input type="text" v-model="login" :class="{ error: $v.login.$error }" @change="$v.login.$touch()">
				</div>

				<div class="form-group" :class="{ errorInput: $v.password.$error }">
					<label>Password:</label>
					<p class="errorText" v-if="!$v.password.required" >Field is required!</p>
					<input type="password" v-model="password" :class="{ error: $v.password.$error }" @change="$v.password.$touch()">
				</div>
				
				<input class="btn btnPrimary" type="submit" value="Войти">
			</form>

			<button @click="$emit('registerLink')" type="button">Регистрация</button>
			
		</div>
	</Modal>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

import Modal from '@/components/UI/Modal.vue'

export default {
	components: {
		Modal
	},
	data() {
		return {
			login: '',
			password: ''
		}
	},
	validations: {
    login: {
      required
		},
		password: {
			required
		}
  },
	methods: {
		onSubmit() {
			this.$v.$touch()
			if(!this.$v.$invalid ) {
				const user = {
					login: this.login,
					password: this.password
				}
				console.log(user)
				this.login = ''
				this.password = ''
				this.$v.$reset()
				this.$emit('closeModal')
			}
		},
		closeModal() {
			this.login = ''
			this.password = ''
			this.$v.$reset()
			this.$emit('closeModal')
		}
	}
}
</script>

<style lang="scss" scoped>
.form-group .errorText {
	display: none;
	margin-bottom: 8px;
	font-size: 13.4px;
	color: red;
}
.form-group {
	&.errorInput .errorText {
		display: block;
	}
}
input.error {
	border-color: red;
}
.btn {
	width: auto;
	margin-bottom: 20px;
}
button {
	text-decoration: underline;
	color: #494ce8;
	background-color: transparent;
	border: none;
	cursor: pointer;
}
</style>



<template>
	<Modal title="Modal with form + validate" @close="close">
		<div slot="body">
			<form @submit.prevent="onSubmit">

				<div class="form-group" :class="{ errorInput: $v.name.$error }">
					<label>Name:</label>
					<p class="errorText" v-if="!$v.name.required" >Field is required!</p>
					<p class="errorText" v-if="!$v.name.minLength" >Name must have at least {{ $v.name.$params.minLength.min }}!</p>
					<input type="text" v-model="name" :class="{ error: $v.name.$error }" @change="$v.name.$touch()">
				</div>

				<div class="form-group" :class="{ errorInput: $v.email.$error }">
					<label>Email:</label>
					<p class="errorText" v-if="!$v.email.required" >Field is required!</p>
					<p class="errorText" v-if="!$v.email.email" >Email is not correct!</p>
					<input type="email" v-model="email" :class="{ error: $v.email.$error }" @change="$v.email.$touch()">
				</div>

				<div class="form-group" :class="{ errorInput: $v.password.$error }">
					<label>Password:</label>
					<p class="errorText" v-if="!$v.password.required" >Field is required!</p>
					<p class="errorText" v-if="!$v.password.minLength" >Password must have at least {{ $v.password.$params.minLength.min }}</p>
					<input type="password" v-model="password" :class="{ error: $v.password.$error }" @change="$v.password.$touch()">
				</div>

				<div class="form-group" :class="{ errorInput: $v.repeatPassword.$error }">
					<label class="form__label">Repeat password</label>
					<p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
					<input type="password" v-model.trim="$v.repeatPassword.$model"/>
				</div>
				
				
				<button class="btn btnPrimary" type="submit">SUBMIT</button>
			</form>
			
		</div>
	</Modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import Modal from '@/components/UI/Modal.vue'

export default {
	components: {
		Modal
	},
	data() {
		return {
			name: '',
			email: '',
			password: '',
      repeatPassword: ''
		}
	},
	validations: {
    name: {
      required,
      minLength: minLength(4)
		},
		email: {
      required,
      email
		},
		password: {
			required,
			minLength: minLength(6)
		},
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
	methods: {
		onSubmit() {
			this.$v.$touch()
			if(!this.$v.$invalid ) {
				const user = {
					name: this.name,
					email: this.email,
					password: this.password
				}
				console.log(user)
				this.name = ''
				this.email = ''
				this.password = ''
				this.repeatPassword = ''
				this.$v.$reset()
				this.$emit('close')
			}
		},
		close() {
			this.$emit('close', {
				name: this.name = "",
				email: this.email = "",
				password: this.password = "",
				repeatPassword: this.repeatPassword = "",
				reset: this.$v.$reset()
			})
		}
	}
}
</script>

<style lang="scss">
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
</style>



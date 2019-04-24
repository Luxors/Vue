<template>
	<Modal title="Modal with form + validate" @close="$emit('close')">
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
				
				<button class="btn btnPrimary" type="submit">SUBMIT</button>
			</form>
			
		</div>
	</Modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import Modal from '@/components/UI/Modal.vue'

export default {
	components: {
		Modal
	},
	data() {
		return {
			name: '',
			email: ''
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
    }
  },
	methods: {
		onSubmit() {
			this.$v.$touch()
			if(!this.$v.$invalid) {
				const user = {
					name: this.name,
					email: this.email
				}
				console.log(user)
				this.name = ''
				this.email = ''
				this.$v.$reset()
				this.$emit('close')
			}
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



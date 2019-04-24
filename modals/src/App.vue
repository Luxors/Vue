<template>
<div class="wrapper">
	<div class="wrapper-content">
		<section>
			<div class="container">
				<!-- first mobal -->
				<button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
				<Modal title="First modal" v-show="modalFirst" @close="modalFirst = false">
					<div slot="body">
						<p> Text Text Text Text Text Text Text </p>
            <button class="btn btnPrimary" @click="modalFirst = false" type="button">Well Done!</button>
					</div>
				</Modal>

				<!-- second modal -->
				<button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show second modal</button>
				<Modal title="Modal with form" v-show="modalSecond.show" @close="modalSecond.show = false">
					<div slot="body">
						<form @submit.prevent="submitSecondForm">
							<label>Name:</label>
							<input type="text" v-model="modalSecond.name">
							<label>Email:</label>
							<input type="email" v-model="modalSecond.email">
							<button class="btn btnPrimary" type="submit">SUBMIT</button>
						</form>
            
					</div>
				</Modal>

				<!-- third modal -->
				<button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal + validate</button>
				<ModalValidate v-show="modalValidate" @close="modalValidate = false"/>

			</div>
		</section>
	</div>
</div>
  
</template>

<script>
import Modal from '@/components/UI/Modal.vue'
import ModalValidate from '@/components/ModalValidate.vue'

export default {
	components: {
		Modal,
		ModalValidate
	},
	data () {
    return {
			modalFirst: false,
			modalSecond: {
				show: false,
				name: '',
				email: ''
			},
			modalValidate: false
    }
	},
	methods: {
		submitSecondForm() {
			console.log({
				name: this.modalSecond.name,
				email: this.modalSecond.email
			})
			this.modalSecond.name = ''
			this.modalSecond.email = ''
			this.modalSecond.show = false
		}
	}
}
</script>

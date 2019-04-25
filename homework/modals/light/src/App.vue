<template>
<div class="wrapper">
	<div class="wrapper-content">
		<section>
			<div class="container">
				<button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal + validate</button>
				<ModalValidate v-show="modalValidate" @close="close"/>

			</div>
		</section>
	</div>
</div>
  
</template>

<script>
import ModalValidate from '@/components/ModalValidate.vue'

export default {
	components: {
		ModalValidate
	},
	data () {
    return {
			modalValidate: false
    }
	},
	methods: {
		close(data) {
			this.modalValidate = false
		}
	}
}
</script>

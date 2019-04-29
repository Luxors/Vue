<template>
<div class="wrapper">
	<div class="wrapper-content">
		<section>
			<div class="container">
				<header class="page-header">
					<button class="btn btnPrimary" @click="authorization = 'login'">Login</button>
					<button class="btn btnPrimary" @click="showRegister">Registration</button>
				</header>
				
				<Login v-if="authorization === 'login'" @closeModal="closeModal" @registerLink="showRegister"/>

				<Register v-if="authorization === 'register'" @closeModal="closeModal"/>

			</div>
		</section>
	</div>
</div>
  
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
	components: {
		Login,
		Register
	},
	data () {
    return {
			authorization: null
    }
	},
	methods: {
		showRegister() {
			this.authorization = 'register'
		},
		closeModal(data) {
			this.authorization = null
		}
	}
}
</script>

<style lang="scss" scoped>
.page-header {
	display: flex;
	justify-content: center;
}
.btn:last-child {
	margin-left: 20px;
}
</style>


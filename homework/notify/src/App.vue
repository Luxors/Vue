<template>
	<div class="wrapper">

		<header>
			<nav class="navbar">
				<div class="container">
					<div class="navbar-content">
						<div class="logo">Notify</div>
						<!-- <ul class="navbar-list">
							<li class="navbar-item" v-for="link in links" :key="link.title">
								<router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
							</li>
						</ul> -->
					</div>
				</div>
			</nav>
		</header>

		<router-view></router-view>

		<!-- <footer>Footer</footer> -->

	</div>
</template>

<script>
export default {
	data() {
		return {
			// links: [
			// 	// {
			// 	// 	title: 'Home',
			// 	// 	url: '/'
			// 	// },
			// 	{
			// 		title: 'Notify',
			// 		url: '/notify'
			// 	}
			// ]
		}
	}
}
</script>

<style lang="scss">
.navbar-link {
	&.router-link-exact-active {
		color: #494ce8;
		}
	}

</style>


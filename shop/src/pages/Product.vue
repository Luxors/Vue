<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="product__wraper">

					<div class="product-slider">
						<img :src="product.img" :alt="product.title">
					</div>
					
					<div class="product-content">
						<h1 class="title">{{product.title}}</h1>
						<p>{{product.description}}</p>
					</div>
					

				</div>

			</div>
		</section>
	</div>

</template>

<script>
export default {
	data() {
		return {
			product: null
		}
	},
	created() {
		// console.log(this.$route)
		let id = this.$route.params.id
		this.product = this.$store.getters.getProduct(id)
		console.log(product)
	}
}
</script>

<style lang="scss">
.product__wraper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.product-slider,
.product-content {
	max-width: 48%;
	text-align: center;
}
</style>



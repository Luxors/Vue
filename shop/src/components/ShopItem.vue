<template>
	<div class="item">
		<img :src="product.img" :alt="product.title">
		<router-link :to="/shop/ + product.id" class="link">{{product.title}}</router-link>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss">
.item__wrepper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
.item {
	max-width: 48%;
	text-align: center;

	p {
		font-size: 22px;
	}
}
</style>



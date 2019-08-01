<template>
	<nuxt-link :to="/blog/ + post.id" class="post-preview">
		<img :src="post.img" :alt="post.title" />
		<div class="post-content">
			<h3 class="title">{{ post.title }}</h3>
			<p>{{ post.descr }}</p>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss">
.post-preview {
	width: 100%;
	margin-bottom: 20px;
	padding: 16px;
	text-align: center;

	@media screen and (min-width: 992px) {
		width: 33%;
	}

	img {
		margin-bottom: 16px;
	}

	p {
		color: #999;
	}
}
</style>

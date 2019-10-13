<template>
	<nuxt-link :to="getLink" class="post-preview">
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
		},
		admin: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		getLink() {
			return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
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

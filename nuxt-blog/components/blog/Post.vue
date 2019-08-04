<template>
	<article class="post">
		<header class="post-header">
			<img :src="post.img" :alt="post.title" />
			<h1 class="title">{{ post.title }}</h1>
			<p>{{ post.descr }}</p>
		</header>
		<p class="post-body">{{ post.content }}</p>
	</article>
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

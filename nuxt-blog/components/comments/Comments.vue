<template>
	<section v-if="comments" class="comments">
		<h2 class="title">Comments</h2>
		<p v-if="comments.length <= 0" style="text-align:center;">No comments</p>
		<article v-for="comment in comments" :key="comment.name" class="comment">
			<h4>
				<b> {{ comment.name }} </b>
			</h4>
			<p>
				<i> {{ comment.text }} </i>
			</p>
		</article>
	</section>
</template>

<script>
export default {
	props: {
		comments: {
			type: Array,
			default: null
		}
	}
}
</script>

<style lang="scss">
.comments {
	margin-bottom: 80px;
	h2 {
		text-align: center;
	}

	.comment {
		margin-bottom: 1rem;
		padding: 20px;
		text-align: center;
		background-color: #fff;
		h4 {
			margin-bottom: 0.25rem;
			color: #4f68f4;
		}
	}
}
</style>

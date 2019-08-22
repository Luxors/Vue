<template>
	<div class="wrapper-content wrapper-content--fixed">
		<div class="container">
			<Post :post="post" />
			<Comments :comments="comments" />
			<NewComment :post-id="$route.params.id" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'

import Post from '~/components/blog/Post'
import NewComment from '~/components/comments/NewComment'
import Comments from '~/components/comments/Comments'

export default {
	components: { Post, NewComment, Comments },
	async asyncData(context) {
		const [post, comments] = await Promise.all([
			axios.get(
				`https://luxors-blog-nuxt.firebaseio.com/posts/${context.params.id}.json`
			),
			axios.get(`https://luxors-blog-nuxt.firebaseio.com/comments.json`)
		])

		// COMMENTS
		// let commentsArray = [],
		//     commentsArrayRes = []

		// Object.keys(comments.data).forEach(key => {
		//   commentsArray.push(comments.data[key])
		// })
		// for (let i=0; i < commentsArray.length; i++) {
		//   if (commentsArray[i].postId === context.params.id && commentsArray[i].publish === true) {
		//     commentsArrayRes.push(commentsArray[i])
		//   }
		// }

		// Comments короткая запись
		const commentsArrayRes = Object.values(comments.data).filter(
			(comment) => comment.postId === context.params.id && comment.publish
		)
		return {
			post: post.data,
			comments: commentsArrayRes
		}
	}
}
</script>

<style lang="scss">
.post {
	max-width: 768px;
	margin: 0 auto;
	padding-bottom: 40px;
}

.post-header {
	margin-bottom: 30px;
	text-align: center;

	img {
		width: 100%;
		max-width: 300px;
		margin-bottom: 1rem;
	}

	p {
		color: #999;
		font-weight: 700;
	}
}
</style>

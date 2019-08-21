<template>
	<div class="wrapper-content wrapper-content--fixed">
		<div class="container">
			<Post :post="post" />
			<Comments :comments="comments" />
			<NewComment />
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
		return {
			post: post.data,
			comments: comments.data
		}
	}
	// data() {
	// 	return {
	// 		post: {
	// 			id: 1,
	// 			title: '1 post',
	// 			descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. 1',
	// 			img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
	// 			content:
	// 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nobis ipsa placeat ea consequuntur modi quos quas earum amet itaque, delectus nemo tempora necessitatibus similique eos illo in eius doloremque dolorem velit? Itaque eum sapiente repellat, minus voluptas perferendis hic repudiandae ex. Sed expedita possimus excepturi, iste autem veniam dolor obcaecati laboriosam alias voluptas deserunt fugiat molestiae aperiam est perferendis quia quae, repellendus aut totam labore recusandae quidem harum. Inventore non possimus hic! Doloribus accusamus, fugiat perspiciatis illum porro omnis dolore repellat architecto eius cupiditate cum animi labore suscipit! Sit repellat corporis reprehenderit voluptates. Nam unde necessitatibus consequuntur recusandae suscipit!'
	// 		},
	// 		comments: [
	// 			{
	// 				name: 'Alex',
	// 				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	// 			},
	// 			{
	// 				name: 'Pol',
	// 				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	// 			},
	// 			{
	// 				name: 'Don',
	// 				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	// 			},
	// 			{
	// 				name: 'Bill',
	// 				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	// 			}
	// 		]
	// 	}
	// }
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

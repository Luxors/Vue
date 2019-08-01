<template>
	<div class="wrapper-content wrapper-content--fixed">
		<div class="container">
			<article class="post">
				<header class="post-header">
					<img :src="post.img" :alt="post.title" />
					<h1 class="title">{{ post.title }}</h1>
					<p>{{ post.descr }}</p>
				</header>
				<p class="post-body">{{ post.content }}</p>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			post: {
				id: 1,
				title: '1 post',
				descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. 1',
				img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nobis ipsa placeat ea consequuntur modi quos quas earum amet itaque, delectus nemo tempora necessitatibus similique eos illo in eius doloremque dolorem velit? Itaque eum sapiente repellat, minus voluptas perferendis hic repudiandae ex. Sed expedita possimus excepturi, iste autem veniam dolor obcaecati laboriosam alias voluptas deserunt fugiat molestiae aperiam est perferendis quia quae, repellendus aut totam labore recusandae quidem harum. Inventore non possimus hic! Doloribus accusamus, fugiat perspiciatis illum porro omnis dolore repellat architecto eius cupiditate cum animi labore suscipit! Sit repellat corporis reprehenderit voluptates. Nam unde necessitatibus consequuntur recusandae suscipit!'
			}
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
	.title {
		text-align: center;
	}

	img {
		max-width: 100%;
		margin-bottom: 1rem;
	}

	p {
		color: #999;
		font-weight: 700;
	}
}
</style>

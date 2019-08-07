<template>
	<NewPostForm :post-edit="post" @submit="onSubmit" />
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm'

export default {
	components: { NewPostForm },
	layout: 'admin',
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
	},
	methods: {
		onSubmit(post) {
			console.log('Post Huy!')
			console.log(post)
		}
	}
}
</script>

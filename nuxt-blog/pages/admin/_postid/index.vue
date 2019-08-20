<template>
	<NewPostForm :post-edit="post" @submit="onSubmit" />
</template>

<script>
import axios from 'axios'

import NewPostForm from '@/components/admin/NewPostForm'

export default {
	components: { NewPostForm },
	layout: 'admin',
	asyncData(context) {
		return axios
			.get(
				`https://luxors-blog-nuxt.firebaseio.com/posts/${context.params.postId}.json`
			)
			.then((res) => {
				console.log(res.data)
				return {
					post: { ...res.data, id: context.params.postId }
				}
			})
			.catch((e) => context.error(e))
	},
	methods: {
		onSubmit(post) {
			// console.log('Post Huy!')
			// console.log(post)
			this.$store.dispatch('editPost', post).then(() => {
				this.$router.push('/admin')
			})
		}
	}
}
</script>

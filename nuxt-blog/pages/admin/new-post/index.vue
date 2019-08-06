<template>
	<NewPostForm @submit="onSubmit" />
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm'

export default {
	components: { NewPostForm },
	layout: 'admin',
	methods: {
		onSubmit(post) {
			console.log('Huy!')
			console.log(post)
		}
	}
}
</script>

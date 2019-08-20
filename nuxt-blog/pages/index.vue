<template>
	<div class="wrapper-content wrapper-content--fixed">
		<Promo />
		<Intro title="My lasts posts:" />
		<PostList :posts="postsLoaded" />
		<Contacts />
	</div>
</template>

<script>
import Promo from '~/components/Promo.vue'
import Contacts from '~/components/Contacts.vue'

export default {
	components: {
		Promo,
		Contacts
	},
	// data() {
	// 	return {
	// 		posts: [
	// 			{
	// 				id: 1,
	// 				title: '1 post',
	// 				descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. 1',
	// 				img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
	// 			},
	// 			{
	// 				id: 2,
	// 				title: '2 post',
	// 				descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. 2',
	// 				img:
	// 					'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
	// 			},
	// 			{
	// 				id: 3,
	// 				title: '3 post',
	// 				descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. 3',
	// 				img:
	// 					'https://dsvf96nw4ftce.cloudfront.net/images/detailed/2/thundercap-calming-cap-action4.jpg'
	// 			}
	// 		]
	// 	}
	// },
	computed: {
		postsLoaded() {
			return this.$store.getters.getPostsLoaded
		}
	}
}
</script>

import axios from 'axios'

export const state = () => ({
	postsLoaded: []
})

export const mutations = {
	setPosts(state, posts) {
		state.postsLoaded = posts
	},
	addPost(state, post) {
		// console.log(post)
		state.postsLoaded.push(post)
	}
}

export const actions = {
	nuxtServerInit({ commit }, context) {
		return axios
			.get('https://luxors-blog-nuxt.firebaseio.com/posts.json')
			.then((res) => {
				// console.log(res)
				const postArray = []
				for (const key in res.data) {
					postArray.push({ ...res.data[key], id: key })
				}
				commit('setPosts', postArray)
			})
			.catch((e) => console.log(e))
	},
	addPost({ commit }, post) {
		return axios
			.post('https://luxors-blog-nuxt.firebaseio.com/posts.json', post)
			.then((res) => {
				// console.log(res)
				commit('addPost', { ...post, id: res.data.name })
			})
			.catch((e) => console.log(e))
	}
}

export const getters = {
	getPostsLoaded(state) {
		return state.postsLoaded
	}
}

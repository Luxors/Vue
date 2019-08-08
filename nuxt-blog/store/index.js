import axios from 'axios'

export const state = () => ({
	postsLoaded: []
})

export const mutations = {
	addPost(state, post) {
		// console.log(post)
		state.postsLoaded.push(post)
	}
}

export const actions = {
	addPost({ commit }, post) {
		return axios
			.post('https://luxors-blog-nuxt.firebaseio.com/post.json', post)
			.then((res) => {
				// console.log(res)
				commit('addPost', { ...post, id: res.data.name })
			})
			.catch((e) => console.log(e))
	}
}

export const getters = {}

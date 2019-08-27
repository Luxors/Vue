import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: []
})

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts
  },
  addPost(state, post) {
    // console.log(post)
    state.postsLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(
      (post) => post.id === postEdit.id
    )
    state.postsLoaded[postIndex] = postEdit
  },
  addComment(state, comment) {
    // console.log(comment)
    state.commentsLoaded.push(comment)
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
  aythUser({ commit }, authData) {
    const key = 'AIzaSyBZ_eMkE7xSkOEOUsbzCYtlaqplpplbbSg'
    return axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
    )
  },
  addPost({ commit }, post) {
    return axios
      .post('https://luxors-blog-nuxt.firebaseio.com/posts.json', post)
      .then((res) => {
        // console.log(res)
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch((e) => console.log(e))
  },
  editPost({ commit }, post) {
    return axios
      .put(
        `https://luxors-blog-nuxt.firebaseio.com/posts/${post.id}.json`,
        post
      )
      .then((res) => {
        commit('editPost', post)
      })
      .catch((e) => console.log(e))
  },
  addComment({ commit }, comment) {
    return axios
      .post('https://luxors-blog-nuxt.firebaseio.com/comments.json', comment)
      .then((res) => {
        // console.log(res)
        commit('addComment', { ...comment, id: res.data.name })
      })
      .catch((e) => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  }
}

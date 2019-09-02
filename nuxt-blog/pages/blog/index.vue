<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts:" />
    <PostList :posts="postsLoaded" />
  </div>
</template>

<script>
export default {
  head() {
    const title = 'My blog page'
    const descr = 'My SSR Blog! With Nuxt.js'
    const type = 'site'
    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

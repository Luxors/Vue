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
  head() {
    const title = 'My SSR Blog'
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

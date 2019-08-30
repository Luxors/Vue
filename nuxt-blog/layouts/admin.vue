<template>
  <div class="wrapper">
    <AppHeader />
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin page">
        <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">
          New Post
        </nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite">
          Comments
        </nuxt-link>
        <button class="link linkWhite" type="button" @click="logoutUser">
          Logout
        </button>
      </Intro>
      <nuxt />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader'
export default {
  components: {
    AppHeader
  },
  middleware: ['auth'],
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser').then(() => {
        this.$router.push('/admin/auth')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-content--fixed {
  margin-top: 65px;
}
.intro {
  margin: 0;
}
button.linkWhite {
  font-family: inherit;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>

<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <nuxt-link to="/" class="logo">Home</nuxt-link>
          <ul class="navbar-list">
            <li v-for="link in links" :key="link.title" class="navbar-item">
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url">
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Blog', url: '/blog' },
        { title: 'About', url: '/about' }
      ]
    }
  }
}
</script>

<style lang="scss">
.logo {
  color: #333;
}

.navbar-link {
  &.nuxt-link-exact-active {
    color: #4b40e3;
  }
}
</style>

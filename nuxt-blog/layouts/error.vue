<template>
  <section class="not-found">
    <div class="container not-found__inner">
      <h1 class="title">Page Not Found</h1>
      <nuxt-link to="/">Back to main page</nuxt-link>
    </div>
  </section>
</template>

<style lang="scss">
.not-found__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
}
</style>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div
    class="app-layout"
    :class="{ 'app-layout--home': route.name === 'home' }"
  >
    <header class="app-header">
      <div class="app-container">
        <div class="app-header__content">
          <RouterLink
            v-if="route.name !== 'home'"
            :to="{ name: 'home' }"
            title="go home"
            class="app-header__link"
          >
            &#10094;
          </RouterLink>
          <div class="app-logo">User CRM</div>
        </div>
      </div>
    </header>

    <main class="app-main">
      <div class="app-container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-header__content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-header__link {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 1;
  text-decoration: none;
}

.app-logo {
  font-size: 40px;
  line-height: 1;
}
</style>
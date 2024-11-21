<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSharedAxios } from '@/composables/useAxios';

export interface User {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: string;
  gender: string;
  birthDate?: string;
  address?: Record<string, any>;
}

const route = useRoute()

const axios = useSharedAxios();

const user = ref<User | null>(null);

async function fetchUser() {
  try {
    const response = await axios.get(`/users/${route.params.id}`);
    user.value = response.data;
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}

onBeforeMount(async () => {
  await fetchUser()
})
</script>

<template>
  <section v-if="user">
    <h2 class="app-section-title">{{ user.firstName }} {{ user.lastName }}</h2>
    <div class="user">
      <dl>
        <dt class="user-list-title">Full name:</dt>
        <dd>{{ user.firstName }} {{ user.maidenName }} {{ user.lastName }}</dd>
        <dt class="user-list-title">Age:</dt>
        <dd>{{ user.age }} years old</dd>
        <dt class="user-list-title">Gender</dt>
        <dd>{{ user.gender }}</dd>
        <dt class="user-list-title">BirthDate:</dt>
        <dd>{{ user.birthDate }}</dd>
        <dt class="user-list-title">Address:</dt>
        <dd>{{ user.address?.address }}, {{ user.address?.city }}, {{ user.address?.state }}, {{
          user.address?.postalCode
        }}
        </dd>
      </dl>
      <div>

        <img
          :src="user.image"
          :alt="`${user.firstName} ${user.lastName}`"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.app-section-title {
  text-align: center;
}

.user {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.user-list-title {
  font-weight: 600;
  color: #494ce8;
}
</style>
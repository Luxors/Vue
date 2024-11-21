<script setup lang="ts">
import { useSharedAxios } from '@/composables/useAxios';
import type { User } from './User.vue';

const axios = useSharedAxios();
const users = ref<User[]>([]);
const currentSort = ref<string>('firstName');
const currentSortDir = ref<string>('asc');

const page = reactive({
  current: 1,
  length: 10
})

const usersSort = computed(() => users.value.sort((a, b) => {
  let mod = 1;
  if (currentSortDir.value === 'desc') mod = -1;
  const sortKey = currentSort.value as keyof typeof a;

  if (a[sortKey] === undefined || b[sortKey] === undefined) return 0;

  if (a[sortKey] < b[sortKey]) return -1 * mod
  if (a[sortKey] > b[sortKey]) return 1 * mod
  return 0;
}).filter((row, index) => {
  let start = (page.current - 1) * page.length;
  let end = page.current * page.length;
  return index >= start && index < end;
}));

async function fetchUsers() {
  try {
    const response = await axios.get('/users')
    users.value = response.data.users
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}

function sort(evt: string) {
  if (evt === currentSort.value) {
    currentSortDir.value = currentSortDir.value === 'asc' ? 'desc' : 'asc'
  }
  currentSort.value = evt
}

function prevPage() {
  if (page.current > 1) page.current -= 1
}

function nextPage() {
  if ((page.current * page.length) < users.value.length) page.current += 1
}

onBeforeMount(async () => {
  await fetchUsers()
})
</script>

<template>
  <section class="users">
    <h2 class="app-section-title">Users</h2>
    <div class="users-tabel-container">
      <table class="users-tabel">
        <thead>
          <tr>
            <th @click="sort('firstName')">Name&#8595;</th>

            <th @click="sort('lastName')">Last name&#8595;</th>

            <th @click="sort('age')">Age&#8595;</th>

            <th @click="sort('gender')">Gender&#8595;</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="user in usersSort"
            :key="user.id"
          >
            <td>
              <RouterLink
                :to="{ name: 'user', params: { id: `${user.id}` } }"
                class="users-tabel__link"
              >

                <img
                  :src="user.image"
                  :alt="user.firstName"
                  width="60"
                  height="60"
                >
                <span>{{ user.firstName }}</span>
              </RouterLink>
            </td>
            <td>{{ user.lastName }}</td>
            <td> {{ user.age }} </td>
            <td> {{ user.gender }} </td>
          </tr>

        </tbody>

      </table>
    </div>
    <div class="users-nav">
      <p>Debug: sort: {{ currentSort }}, dir: {{ currentSortDir }} </p>
      <p>page: {{ page.current }}, length: {{ page.length }} </p>
    </div>

    <footer class="users-footer">
      <button
        class="btn btn--primary"
        @click="prevPage"
      >&#8592;</button>
      <button
        class="btn btn--primary"
        @click="nextPage"
      >&#8594;</button>
    </footer>
  </section>

</template>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.users-tabel-container {
  flex: 1;
  height: 100%;
  overflow: auto;
}

.users-nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 22px;
}

.users-footer {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
}
</style>
<script setup lang="ts">
// import { ref } from 'vue';

const users = ref([])
</script>

<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="container users">
      <h1>Users page</h1>
      <div class="tabel-container">
        <table>
          <!-- Head -->
          <thead>
            <tr>
              <th @click="sort('firstName')">Name&#8595;</th>

              <th @click="sort('lastName')">Last name&#8595;</th>

              <th @click="sort('age')">Age&#8595;</th>

              <th @click="sort('gender')">Gender&#8595;</th>
            </tr>
          </thead>

          <!-- Body -->
          <tbody>
            <tr
              v-for="user in usersSort"
              :key="user.id"
            >
              <td>
                <img
                  :src="user.image"
                  :alt="user.image"
                >
                <span>{{ user.firstName }}</span>
              </td>
              <td>{{ user.lastName }}</td>
              <td> {{ user.age }} </td>
              <td> {{ user.gender }} </td>
            </tr>

          </tbody>

        </table>
      </div>
      <footer>
        <p>Debug: sort: {{ currentSort }}, dir: {{ currentSortDir }} </p>
        <p>page: {{ this.page.current }}, length: {{ this.page.length }} </p>
      </footer>
    </section>

    <!-- Buttons -->
    <footer class="container footer">
      <div class="button-list">
        <button
          class="btn btnPrimary"
          @click="prevPage"
        >&#8592;</button>
        <button
          class="btn btnPrimary"
          @click="nextPage"
        >&#8594;</button>
      </div>
    </footer>
  </div>

</template>

<style scoped></style>
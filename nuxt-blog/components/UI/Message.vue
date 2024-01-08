<template>
  <p class="message" :class="mesClass">{{ message }}</p>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.message {
  margin-bottom: 1rem;

  &.success {
    color: #26de81;
  }

  &.error {
    color: #fc5c65;
  }
}
</style>

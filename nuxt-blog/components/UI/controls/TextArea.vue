<template>
  <p class="control">
    <label>
      <slot />
    </label>
    <textarea :value="value" @input="$emit('input', $event.target.value)" />
  </p>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

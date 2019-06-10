<template>
	<span>
		<input v-model="setValue" type="radio" :id="select" name="priority" :value="select" @change="$emit('input', checked)">
		<label :for="select">{{ caption }}</label>
	</span>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true
		},
		select: {
			type: String,
			required: true
		},
		caption: {
			type: String,
			required: true
		}
	},
	computed: {
	  setValue: {
      get() {
        return this.value;
      },
      set(select) {
        this.checked = select;
      },
    },
  }
}
</script>

<style lang="scss" scoped>
	span:not(:last-child) {
		margin-right: 15px;
	}
	input {
		display: inline-block;
		vertical-align: middle;
		width: auto;
		margin-right: 5px;
		margin-bottom: 0;
		cursor: pointer;
	}
	label {
		display: inline-block;
		vertical-align: middle;
		margin-bottom: 0;
		line-height: 1;
		cursor: pointer;
	}
</style>



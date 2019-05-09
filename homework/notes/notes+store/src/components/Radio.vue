<template>
	<span>
		<input v-model="setValue" type="radio" :id="val" name="priority" :value="val" @change="$emit('input', checked)">
		<label :for="val">{{ caption }}</label>
	</span>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true
		},
		val: {
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
      set(val) {
        this.checked = val;
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



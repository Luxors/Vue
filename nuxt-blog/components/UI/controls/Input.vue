<template>
	<p class="control">
		<label>
			<slot />
		</label>
		<input
			v-bind="$attrs"
			:value="value"
			:type="type"
			@input="$emit('input', $event.target.value)"
		/>
	</p>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		}
	}
}
</script>

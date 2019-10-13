<template>
	<div class="wrapper">
		<AppHeader />
		<nuxt />
	</div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader'
export default {
	components: {
		AppHeader
	}
}
</script>

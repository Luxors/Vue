<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<Search :value="search" placeholder="Type username..." @search="search = $event" />
				<!-- <p>{{search}}</p> -->
				<button class="btn btnPrimary" @click="getRepos">Search</button>
			</div>
		</section>
	</div>
	
</template>

<script>
import Search from '@/components/Search'
export default {
	components: {
		Search
	},
	data() {
		return {
			search: ''
		}
	},
	methods: {
		getRepos() {
			console.log(`get user ${this.search} repos`)
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
button {
	margin-top: 40px;
}
</style>


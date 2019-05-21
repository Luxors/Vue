<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">

				<div class="error">
					<p v-if="error"> {{error}} </p>
				</div>

				<Search :value="search" placeholder="Type username..." @search="search = $event" />
				<!-- <p>{{search}}</p> -->
				<button class="btn btnPrimary" @click="getRepos">
					<span v-if="!repos">Search</span>
					<span v-else>Search Again</span>
				</button>

				<div class="repos__wrapper" v-if="repos">
					<div class="repo-item" v-for="repo in repos" :key="repo.id">
						<div class="repo-info">
							<a :href="repo.html_url" class="link" target="_blank">{{repo.name}}</a>
							<span> {{repo.stargazers_count}} ⭐ </span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	
</template>

<script>
import axios from 'axios'

import Search from '@/components/Search'

export default {
	components: {
		Search
	},
	data() {
		return {
			search: '',
			error: null,
			repos: null
		}
	},
	methods: {
		getRepos() {
			// console.log(`get user ${this.search} repos`)
			axios
				.get(`https://api.github.com/users/${this.search}/repos`)
					.then(res => {
						console.log(res)
						this.error = null
						this.repos = res.data
					})
					.catch(err => {
						console.log(err)
						this.repos = null
						this.error = 'Can`t Take My Hands Off You'
					})
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
.repos__wrapper {
	max-width: 450px;
	margin: 30px 0;
}
.repo-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	padding: 10px 0;
	border-bottom: 1px solid #dbdbdb;
}
.error {
	margin-bottom: 10px;
}
</style>


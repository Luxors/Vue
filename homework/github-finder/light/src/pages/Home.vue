<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">

				<div class="error">
					<p v-if="error"> {{error}} </p>
				</div>

				<Search :value="search" placeholder="Type username..." @search="search = $event" />
				<!-- <p>{{search}}</p> -->
				<button class="btn btnPrimary" @click="getUserData">
					<span v-if="!repos">Search</span>
					<span v-else>Search Again</span>
				</button>

				<!-- <div>
					<img v-if="avatar" :src="avatar" alt="It's me">
					<div>
						<p v-if="name"> {{ name }} </p>
						<p v-if="reposQuantity" > Repositories: {{ reposQuantity }} </p>
					</div>
				</div> -->
				<div v-if="info" class="info">
					<img class="info-ava" :src="info.avatar_url" alt="It's me">
					<div>
						<p class="info-name"> {{ info.name }} </p>
						<p> Repositories: {{ info.public_repos }} </p>
					</div>
				</div>
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
			// avatar: null,
			// name: null,
			// reposQuantity: null,
			info: null,
			repos: null
		}
	},
	methods: {
		getUserInfo() {
			return axios.get(`https://api.github.com/users/${this.search}`)
		},
		getUserRepos() {
			return axios.get(`https://api.github.com/users/${this.search}/repos`)
		},
		getUserData() {
			axios.all([this.getUserInfo(), this.getUserRepos()])
				.then(axios.spread((info, repos) => {
					// console.log(info)
					this.error = null
					// this.avatar = info.data.avatar_url
					// this.name = info.data.name
					// this.reposQuantity = info.data.public_repos
					this.info = info.data
					this.repos = repos.data
				}))
				.catch(err => {
					// console.log(err)
					this.info = null
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
	margin: 40px 0;
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
.info {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.info-ava {
	width: 100px;
	height: 100px;
	margin-right: 20px;
	border-radius: 100%;
}
.info-name {
	margin-bottom: 10px;
}
</style>


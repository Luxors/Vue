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

				<div v-if="info" class="info">
					<img class="info-ava" :src="info.avatar_url" alt="It's me">
					<div>
						<p class="info-name"> {{ info.name }} </p>
						<p> Repositories: {{ info.public_repos }} </p>
					</div>
				</div>

				<!-- <div class="repos__wrapper" v-if="repos">
					<div class="repo-item" v-for="repo in repos" :key="repo.id">
						<div class="repo-info">
							<a :href="repo.html_url" class="link" target="_blank">{{repo.name}}</a>
							<span> {{repo.stargazers_count}} ⭐ </span>
						</div>
					</div>
				</div> -->
				<div v-if="repos" class="repos__wrapper">
				
					<table>

						<thead>
							<tr>
								<th @click="sort('name')">Repositories&#8595;</th>

								<th @click="sort('stargazers_count')">Stars&#8595;</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="repo in reposSort" :key="repo.id">

								<td>
									<a :href="repo.html_url" class="link" target="_blank">{{repo.name}}</a>
								</td>

								<td> {{repo.stargazers_count}} ⭐ </td>

							</tr>
							
						</tbody>

					</table>
					
					<div class="button-list">
						<button class="btn btnPrimary" @click="prevPage">&#8592;</button>
						<button class="btn btnPrimary" @click="nextPage">&#8594;</button>
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
			info: null,
			repos: null,
			currentSort: 'repos',
			currentSortDir: 'asc',
			page: {
				current: 1,
				length: 8
			}
		}
	},
	computed: {
		reposSort() {
			return this.repos.sort((a, b) => {
				let mod = 1
				if(this.currentSortDir === 'desc') mod = -1
				if( a[this.currentSort] < b[this.currentSort] ) return -1 * mod
				if( a[this.currentSort] > b[this.currentSort] ) return 1 * mod
				return 0
			}).filter((row, index) => {
				let start = (this.page.current-1) * this.page.length
				let end = this.page.current * this.page.length
				if(index >= start && index < end) return true
			})
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
					this.info = info.data
					this.repos = repos.data
				}))
				.catch(err => {
					// console.log(err)
					this.info = null
					this.repos = null
					this.error = 'Can`t Take My Hands Off You'
				})
		},
		sort(evt) {
			if (evt === this.currentSort ) {
				this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
			}
			this.currentSort = evt
		},
		prevPage() {
			if( this.page.current > 1 ) this.page.current-=1
		},
		nextPage() {
			if( (this.page.current * this.page.length) < this.repos.length ) this.page.current+=1
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
	width: 450px;
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
.button-list {
	display: flex;
	justify-content: center;

	.btn:first-child {
		margin-right: 10px;
	}
}
</style>


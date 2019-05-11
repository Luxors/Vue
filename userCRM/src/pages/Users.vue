<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1>Users page</h1>

				<table>

					<!-- Head -->
					<thead>
						<tr>
							<th @click="sort('name')">Name&#8595;</th>

							<th @click="sort('age')">Age&#8595;</th>

							<th @click="sort('gender')">Gender&#8595;</th>
						</tr>
					</thead>

					<!-- Body -->
					<tbody>
						<tr v-for="user in usersSort" :key="user.id">
							<td>
								<img :src="user.img" :alt="user.img">
								<span>{{user.name}}</span>
							</td>
							<td> {{user.age}} </td>
							<td> {{user.gender}} </td>
						</tr>
						
					</tbody>

				</table>
				<div>
					<p>Debug: sort: {{currentSort}}, dir: {{currentSortDir}} </p>
					<p>page: {{this.page.current}}, length: {{this.page.length}} </p>
				</div>
				
			</div>
		</section>

		<!-- Buttons -->
		<section>
			<div class="container">
				<div class="button-list">
					<button class="btn btnPrimary" @click="prevPage">&#8592;</button>
					<button class="btn btnPrimary" @click="nextPage">&#8594;</button>
				</div>
			</div>
		</section>
		

	</div>

</template>

<script>
import axios from 'axios'
import { error } from 'util';

export default {
	data() {
		return {
			users: [],
			currentSort: 'name',
			currentSortDir: 'asc',
			page: {
				current: 1,
				length: 3
			}
		}
	},
	created() {
		// this.users = [
		// 	{id: 1, name: 'Jack', age: '22', gender: 'male' },
		// 	{id: 2, name: 'Alex', age: '24', gender: 'male' }
		// ]
		axios
			.get('https://api.myjson.com/bins/rzgya')
			.then(response => {
				console.log(response.data)
				this.users = response.data
			})
			.catch(error => {
				console.log(error)
			})
	},
	computed: {
		usersSort() {
			return this.users.sort((a, b) => {
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
		sort(evt) {
			if (evt === this.currentSort ) {
				this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
			}
			this.currentSort = evt
		},

		// Pagination
		prevPage() {
			if( this.page.current > 1 ) this.page.current-=1
		},
		nextPage() {
			if( (this.page.current * this.page.length) < this.users.length ) this.page.current+=1
		}
	} 
}
</script>

<style lang="scss" scoped>
img {
	width: 60px;
	height: auto;
	margin-right: 16px;
	border-radius: 50%;
}
.button-list {
	width: 100%;
	text-align: center;

	.btn {
		margin: 0 20px;
		border-radius: 60px;
	}
}
</style>


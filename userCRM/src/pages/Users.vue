<template>

	<div class="wrapper-content wrapper-content--fixed">
		<section class="container users">
			<h1>Users page</h1>
			<div class="tabel-container">
				<table>
					<!-- Head -->
					<thead>
						<tr>
							<th @click="sort('firstName')">Name&#8595;</th>

							<th @click="sort('lastName')">Last name&#8595;</th>

							<th @click="sort('age')">Age&#8595;</th>

							<th @click="sort('gender')">Gender&#8595;</th>
						</tr>
					</thead>

					<!-- Body -->
					<tbody>
						<tr v-for="user in usersSort" :key="user.id">
							<td>
								<img :src="user.image" :alt="user.image">
								<span>{{user.firstName}}</span>
							</td>
							<td>{{ user.lastName }}</td>
							<td> {{user.age}} </td>
							<td> {{user.gender}} </td>
						</tr>
						
					</tbody>

				</table>
			</div>
			<footer>
				<p>Debug: sort: {{currentSort}}, dir: {{currentSortDir}} </p>
				<p>page: {{this.page.current}}, length: {{this.page.length}} </p>
			</footer>
		</section>

		<!-- Buttons -->
		<footer class="container footer">
			<div class="button-list">
				<button class="btn btnPrimary" @click="prevPage">&#8592;</button>
				<button class="btn btnPrimary" @click="nextPage">&#8594;</button>
			</div>
		</footer>
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
				length: 10
			}
		}
	},
	created() {
		// this.users = [
		// 	{id: 1, name: 'Jack', age: '22', gender: 'male' },
		// 	{id: 2, name: 'Alex', age: '24', gender: 'male' }
		// ]
		axios
			.get('https://dummyjson.com/users')
			.then(response => {
				console.log(response.data.users)
				this.users = response.data.users
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
.users {
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 0;
	overflow: hidden;

	.tabel-container {
		flex: 1;
		overflow: auto;

		table {
			width: 100%;
			height: 100%;
			table-layout: fixed;
		}

		thead {
			position: sticky;
			top: 0;
			z-index: 1;

			th {
				background-color: white;
			}
		}
	}

	footer {
		display: flex;
		justify-content: space-between;
		padding: 10px 0;
	}
}
.footer {
	flex-shrink: 0;
	padding: 10px 0;
}
img {
	width: 40px;
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


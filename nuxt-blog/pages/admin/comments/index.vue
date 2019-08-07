<template>
	<CommentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
		<tbody slot="tbody">
			<tr v-for="comment in comments" :key="comment.id">
				<td>
					<span>{{ comment.name }}</span>
				</td>
				<td>
					<span>{{ comment.text }}</span>
				</td>
				<td>
					<span v-if="comment.status" class="status true"> Publish </span>
					<span v-else class="status false"> Hidden </span>
				</td>
				<td>
					<span class="link" @click="changeComment(comment.id)"
						>Change Status</span
					>
				</td>
				<td>
					<span class="link" @click="deleteComment(comment.id)">Delete</span>
				</td>
			</tr>
		</tbody>
	</CommentTable>
</template>

<script>
import CommentTable from '@/components/admin/CommentTable'

export default {
	components: { CommentTable },
	layout: 'admin',
	data() {
		return {
			comments: [
				{
					id: 1,
					name: 'Alex',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
					status: true
				},
				{
					id: 2,
					name: 'Pol',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
					status: true
				},
				{
					id: 3,
					name: 'Don',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
					status: true
				},
				{
					id: 4,
					name: 'Bill',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
					status: false
				}
			]
		}
	},
	methods: {
		changeComment(id) {
			console.log(`Change comment id: ${id}`)
		},
		deleteComment(id) {
			console.log(`Delete comment id: ${id}`)
		}
	}
}
</script>

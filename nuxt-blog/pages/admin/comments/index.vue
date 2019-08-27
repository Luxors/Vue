<template>
  <no-ssr>
    <CommentTable
      :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']"
    >
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.id">
          <td>
            <span>{{ comment.name }}</span>
          </td>
          <td>
            <span>{{ comment.text }}</span>
          </td>
          <td>
            <span v-if="comment.publish" class="status true"> Publish </span>
            <span v-else class="status false"> Hidden </span>
          </td>
          <td>
            <span class="link" @click="changeComment(comment)">
              Change Status
            </span>
          </td>
          <td>
            <span class="link" @click="deleteComment(comment.id)">Delete</span>
          </td>
        </tr>
      </tbody>
    </CommentTable>
  </no-ssr>
</template>

<script>
import axios from 'axios'

import CommentTable from '@/components/admin/CommentTable'

export default {
  components: { CommentTable },
  layout: 'admin',
  data() {
    return {
      comments: []
    }
  },
  mounted() {
    this.loadComments()
  },
  methods: {
    loadComments() {
      axios
        .get('https://luxors-blog-nuxt.firebaseio.com/comments.json')
        .then((res) => {
          // console.log(res)
          const commentsArray = []
          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key]
            commentsArray.push({ ...comment, id: key })
          })
          this.comments = commentsArray
        })
    },
    changeComment(comment) {
      comment.publish = !comment.publish
      // console.log(comment)
      // console.log(`Change comment id: ${id}`)
      axios.put(
        `https://luxors-blog-nuxt.firebaseio.com/comments/${comment.id}.json`,
        comment
      )
    },
    deleteComment(id) {
      // console.log(`Delete comment id: ${id}`)
      axios
        .delete(`https://luxors-blog-nuxt.firebaseio.com/comments/${id}.json`)
        .then((res) => this.loadComments())
    }
  }
}
</script>

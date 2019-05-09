<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <div class="note-header" style="margin: 36px 0; justify-content: center;">
            <p> {{ title }} </p>
          </div>
          <!-- message -->
          <Message v-if="message" :message="message"/>

          <!-- new note -->
          <NewNote :note="note" @addNote="addNote"/>

          <div class="note-header" style="margin: 36px 0;">
            <!-- title -->
            <h1> {{ title }} </h1>

            <!-- search -->
            <Search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"/>

            <!-- icons controls -->
            <div class="icons">
              <button type="button" @click="grid = true">
								<svg :class="{ 'active' : grid }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
									<rect x="3" y="3" width="7" height="7"></rect>
									<rect x="14" y="3" width="7" height="7"></rect>
									<rect x="14" y="14" width="7" height="7"></rect>
									<rect x="3" y="14" width="7" height="7"></rect>
								</svg>
							</button>
							<button type="button" @click="grid = false">
								<svg :class="{ 'active' : !grid }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<line x1="8" y1="6" x2="21" y2="6"></line>
									<line x1="8" y1="12" x2="21" y2="12"></line>
									<line x1="8" y1="18" x2="21" y2="18"></line>
									<line x1="3" y1="6" x2="3" y2="6"></line>
									<line x1="3" y1="12" x2="3" y2="12"></line>
									<line x1="3" y1="18" x2="3" y2="18"></line>
								</svg>
							</button>
            </div>
          </div>

          <!-- note list -->
          <Notes :notes="notesFilter" :grid="grid" @remove="removeNote" />

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Message from '@/components/Message'
import NewNote from '@/components/NewNote'
import Notes from '@/components/Notes'

export default {
	components: {
		Search,
		Message,
		NewNote,
		Notes
	},
  data () {
    return {
      title: 'Notes App',
      search: '',
      message: null,
      grid: true,
      note: {
				title: '',
				priority: 'normal',
        descr: ''
			}
    }
	},
	created() {
		this.notes = this.$store.getters.getNotes
	},
  computed: {
    notesFilter () {
      let array = this.notes,
          search = this.search
      if (!search) return array
      // Small
      search = search.trim().toLowerCase()
      // Filter
      array = array.filter(function (item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })
      // Error
      return array
		}
		// notes() {
		// 	return this.$store.getters.getNotes
		// }
  },
  methods: {
    addNote () {
      // console.log(this.note)
      let {title, priority, descr} = this.note

      if (title === '') {
        this.message = 'title can`t be blank!'
        return false
      }

			this.$store.dispatch('addNote', {
				title,
				priority,
				descr,
				date: new Date(Date.now()).toLocaleString()
			})

      this.message = null
			this.note.title = ''
			this.note.priority = 'normal'
      this.note.descr = ''
		},
		removeNote(index){
			this.$store.dispatch('removeNote', index)
		}
  }
}
</script>

<style lang="scss" scoped>
.icons {
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}
}
</style>

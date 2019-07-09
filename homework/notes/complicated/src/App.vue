<template>
  <div class="wrapper">
    <div class="wrapper-content">

			<div class="container">
				<header class="note-header" style="margin: 36px 0; justify-content: center;">
					<h1> {{ title }} </h1>
				</header>
				<!-- message -->
				<Message v-if="message" :message="message"/>

				<!-- new note -->
				<NewNote :note="note" @addNote="addNote"/>

				<section>
					<header>	
						<!-- title -->
						<h2> Notes List </h2>

						<div class="note-controls">
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
					</header>

					<!-- note list -->
					<Notes :notes="notesFilter" :grid="grid" @edit="editNote" @remove="removeNote" />
				</section>

			</div>

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
				descr: '',
				editing: null
			}
    }
	},
	mounted() {
		this.$store.dispatch('fetchNotes')
	},
  computed: {
		notes() {
			return this.$store.getters.getNotes
		},
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
  },
  methods: {
    addNote () {
      let {title, priority, descr, editing} = this.note

      if (title === '') {
        this.message = 'Title can`t be blank!'
        return false
      }

			this.$store.dispatch('addNote', {
				...this.note,
				date: new Date(Date.now()).toLocaleString()
			})

      this.message = null
			this.note.title = ''
			this.note.priority = 'normal'
      this.note.descr = ''
		},
		editNote(index, value) {
			// value = event.target
			this.notes[index].editing = value
			console.log(this.notes[index].value)
		},
		removeNote(index) {
			this.$store.dispatch('removeNote', index)
		}
  }
}
</script>

<style lang="scss" scoped>
h1 {
	font-size: 32px;
	color: #402caf;
}
h2 {
	width: 100%;
	margin: 36px 0;
	text-align: center;
	color: #402caf;
	font-size: 22px;
}
.note-controls {
	display: flex;
	align-items: center;
	svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.icons {
	display: none;

	@media screen and (min-width: 992px) {
		display: block;
		width: 10%;
		margin-left: auto;
		text-align: right;
	}
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}
}
</style>

<template>
  <!-- note list -->
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
      <header class="note-header" :class="{ full: !grid }" >
        <h3 class="note-caption">
					<span v-if="!note.editing" @click="editNote(index, $event.target)">{{ note.title }}</span>
					<input v-if="note.editing" v-model="note.title" @blur="note.editing = null" @keyup.enter="note.editing = null" type="text">

					<span class="note-priority" v-if="!note.editing" @click="editNote(index, note.priority)" :class="`is-${note.priority}`" title="Priority"/>
					<select v-model="note.priority" v-if="note.editing">
						<option value="normal">Normal</option>
						<option value="medium">Medium</option>
						<option value="hight">Hight</option>
					</select>
				</h3>
        <button type="button" @click="removeNote(index)">x</button>
      </header>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
		}
		// editing: {
		// 	type: Boolean,
		// 	default: false
		// }
  },
	// data() {
	// 	return {
	// 		editing: false
	// 	}
	// },
	watch: {
    'note.editing'(event) {
      this.note.editing = event.target
    },
	},
  methods: {
		editNote(index, value) {
			// console.log(`Note id - ${index} removed`)
			// this.note.editing = event.target
			// this.editing = true
			this.$emit('edit', index, value)
			// console.log(this.editing)
      // console.log(this.note[index])
		},
		// updateTitle() {
		// 	this.editing = false
		// },
    removeNote(index) {
      console.log(`Note id - ${index} removed`)
			this.$emit('remove', index)
			// this.$store.dispatch('removeNote', index)
		}
  }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
	@media screen and (min-width: 992px) {
		width: 48%;
	}
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0,-6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    // text-align: center;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
	flex-wrap: wrap;

	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}
  &.full {
    // justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.note-caption {
	display: flex;
	align-items: center;

	input {
		margin-bottom: 0;
	}
}

.note-priority {
	display: inline-block;
	width: 20px;
	height: 20px;
	margin-left: 16px;
	font-size: 14px;
	border: 1px solid grey;
	border-radius: 100%;

	&.is-normal {
		background-color: green;
	}

	&.is-medium {
		background-color:yellow;
	}

	&.is-hight {
		background-color: red;
	}
}

.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
</style>


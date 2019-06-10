<template>
  <!-- note list -->
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }" >
        <p class="note-caption">
					{{ note.title }}
					<!-- <span 
						class="note-priority"
						:class="{
							'is-normal': notes[index].priority == 'normal',
							'is-medium': notes[index].priority == 'medium',
							'is-hight': notes[index].priority == 'hight'
						}"
					/> -->
					<span class="note-priority" :class="`is-${note.priority}`" />
				</p>
        <button type="button" @click="removeNote(index)">x</button>
      </div>
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
  },
  methods: {
    removeNote (index) {
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
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0,-6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
	flex-wrap: wrap;
  h2 {
		width: 100%;
		margin-bottom: 20px;
		text-align: center;
    color: #402caf;
		font-size: 22px;

		@media screen and (min-width: 992px) {
			width: auto;
			margin-bottom: 0;
		}
  }
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}
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
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.note-body{
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
.note-priority {
	display: inline-block;
	width: 20px;
	height: 20px;
	font-size: 14px;
	border: 1px solid grey;
	border-radius: 100%;
}
.is-normal {
	background-color: green;
}
.is-medium {
	background-color:yellow;
}
.is-hight {
	background-color: red;
}
</style>


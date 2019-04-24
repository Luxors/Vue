<template>
  <!-- new note -->
  <div class="new-note">

		<p class="input-wrap">
			<label for="title">Title</label>
			<input v-model="note.title" type="text" id="title">
		</p>

		<p class="input-wrap">
			<label for="description">Description</label>
			<textarea v-model="note.descr" id="description"></textarea>
		</p>

		<fieldset class="new-note__priority">
			<legend >Priority</legend>

			<Radio v-model="note.priority" val="normal" caption="Normal" />

			<Radio v-model="note.priority" val="medium" caption="Medium" />

			<Radio v-model="note.priority" val="hight" caption="Hight" />
			
		</fieldset>

    <button class="btn btnPrimary" @click="addNote">New note</button>

		<!-- <div>Priority: {{ note.priority }}</div> -->
  </div>
</template>

<script>
import Radio from '@/components/Radio'

export default {
	components: {
		Radio
	},
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNote () {
      this.$emit('addNote', this.note)
    }
  }
}
</script>

<style lang="scss">
.new-note {
  text-align: center;
}
.input-wrap {
	margin-bottom: 30px;
}
.new-note__priority {
	margin-bottom: 50px;
	border: 0;

	legend {
		margin-bottom: 10px;
	}
}
</style>


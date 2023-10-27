<template>
  <div class="new-note">
    <label>Title</label>
    <input type="text" v-model="note.title">

    <label>Importance</label>

    <select v-model="note.importance" id="importance-select" name="importance">
      <option value="default" selected>default</option>
      <option value="important">important</option>
      <option value="critical">critical</option>
    </select>

    <label>Description</label>
    <textarea v-model="note.body"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
    props: {
      note: {
        type: Object,
        required: true
      }
    },
    methods: {
      addNote(){
          this.$emit('addNote', this.note)
      }
    }
}
</script>

<style lang="scss" scoped>
    .new-note{
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
</style>
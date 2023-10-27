<template>
      <div class="note" >
        <div class="note-header">
          <p :class="{hide: edit}" @click="editTitle">{{ note.title }}</p>
          <input
              type="text"
              class="title_input"
              :class="{hide: !edit}"
              v-model="note.title"
              v-on:keyup.esc="editOff"
              v-on:blur="editOff"
          >
          <span class="remove" @click="(removeNote(index))">X</span>
        </div>
        <div class="note-body">
          <p>{{note.body}}</p>
          <span>{{ note.date }}</span>
        </div>
      </div>
</template>

<script>
export default {
    props: {
      note: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
    },
    data(){
        return{
          edit: false
        }
    },
    methods: {
      removeNote(index){
        this.$emit('removeNote', index)
      },
      editTitle(){
        this.edit = true;
      },
      editOff(){
        this.edit = false;
      }
    }
}
</script>

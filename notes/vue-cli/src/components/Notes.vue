


<template >
  <div class="notes">
    <note
        v-bind:note="note"
        :class="[{full: !grid}, note.importance]"
        @removeNote="removeNote"
        v-for="(note, index) in notes"
        :key="index"
        :index="index"
    />
  </div>
</template>

<script lang="ts">


import Note from "@/components/Note.vue";

export default {
  components: {Note},

  props:{
      notes: {
        type: Array,
        required: true
      },
      grid: {
        type: Boolean,
        required: true
      }
  },
  data(){
    return{
      edit: false
    }
  },
  methods: {
    removeNote(index){
      this.$emit('remove', index)
    },
    editTitle(index){
      console.log(this.notes[index])
      this.notes[index].edit = true
    }
  }
}
</script>

<style lang="scss">
    .notes{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 40px 0;
    }

    .note{
      width: 48%;
      padding: 18px 20px;
      margin-bottom: 20px;
      background-color: #ffffff;
      &.full{
        width: 100%;
      }
      transition: all 0.2s ease-in-out;
      &:hover{
        background-color: #ffffff;
        transform: translateY(-5px);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      &.important{
        background-color: #ffbe48;
      }

      &.critical{
        background-color: #ea2b2b;
      }
    }


    .note-header{
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1{
        font-size: 22px;
      }
      p{
        font-size: 22px;
        font-weight: 600;
        color: #402caf;
      }
      .remove{
        color: red;
        font-weight: 800;
        cursor: pointer;

        align-self: flex-end;
      }
    }


    .hide{
      display: none;
    }


    .note-body{
      margin: 20px 0;
    }

    span{
      font-size: 14px;
      color: #999
    }

</style>
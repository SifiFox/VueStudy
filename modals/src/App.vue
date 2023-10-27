<template>
  <div class="wrapper">
    <div class="wrapper-content">


      <div class="buttons-wrapper">
        <button @click="modalFirst = !modalFirst" class="btn btnPrimary">
          Show first modal
        </button>

        <button @click="modalSecond.show = !modalSecond.show" class="btn btnPrimary">
          Show second modal
        </button>

        <button @click="modalValidate = !modalValidate" class="btn btnPrimary">
          Show modal with validate
        </button>
      </div>


      <section>
        <div class="container">
            <h1>hello</h1>
          <modals
              v-show="modalFirst"
              title="first modal"
              @close="modalFirst = false"
          >
            <div slot="body">
              <p>test test test</p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst" >Well done</button>
            </div>
          </modals>

          <modals
              title="second Modal"
              @close="modalSecond.show = false"
              v-show="modalSecond.show"
          >
            <div slot="body">
              <form @submit.prevent="submitSecondForm" >
                <label>Name:</label>
                <input type="text" v-model="modalSecond.name" placeholder="Enter your name">

                <label for="">Email:</label>
                <input type="email" placeholder="Enter your email" v-model="modalSecond.email">

                <button class="btn btnPrimary">Submit</button>
              </form>

            </div>
          </modals>
          <modal-validate v-show="modalValidate" @close="modalValidate = !modalValidate" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import ModalValidate from "@/components/ModalValidate.vue";

export default {
  components: { ModalValidate, modals },
  data () {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    }
  },
  methods: {
    submitSecondForm(){
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond = {
        name: '',
        email: '',
        show: false
      }
    }
  }
}
</script>

<style scoped>
  .buttons-wrapper{
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 20px;
  }
</style>

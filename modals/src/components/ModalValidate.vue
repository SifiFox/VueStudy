<template>
  <modal
      title="Validate modal"
      @close="closeForm"
  >
    <div slot="body">
      <form  @submit.prevent="onSubmit">

        <div class="form-item" :class="{errorInput: $v.name.$error}">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required">Field is required</p>
          <p class="errorText" v-if="!$v.name.minLength">Field should have at least {{$v.name.$params.minLength.min}} symbols</p>
          <input
              v-model.trim="name"
              placeholder="Enter your name"
              :class="{error: $v.name.$error}"
              @change="$v.name.$touch()"
          >
        </div>

        <div class="form-item" :class="{errorInput: $v.email.$error}">
          <label for="">Email:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required</p>
          <p class="errorText" v-if="!$v.email.email">Field should be email</p>
          <input
              v-model.trim="email"
              placeholder="Enter your email"
              :class="{error: $v.email.$error}"
              @change="$v.email.$touch()"
          >
        </div>


        <div class="form-item" :class="{errorInput: $v.password.$error}">
          <label for="">Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required</p>
          <p class="errorText" v-if="!$v.password.minLength">Field should be 6 symbols or more</p>

          <div class="input-wrapper">
            <input
                v-model.trim="password"
                placeholder="Enter your password"
                :class="{error: $v.password.$error}"
                @change="$v.password.$touch()"
                v-bind:type="passwordShow ? 'text' : 'password'"
            >

            <label class="pass-show" @click="passwordShow = !passwordShow">
                {{ passwordShow ? 'hide' : 'show' }}
            </label>
          </div>

        </div>


        <div class="form-item" :class="{errorInput: $v.passwordConfirm.$error}">
          <label for="">Password confirm:</label>
          <p class="errorText" v-if="!$v.passwordConfirm.required">Field is required</p>
          <p class="errorText" v-if="!$v.passwordConfirm.sameAsPassword">Field is not equal password</p>
          <div class="input-wrapper">
            <input
                v-model.trim="passwordConfirm"
                placeholder="Repeat password"
                :class="{error: $v.passwordConfirm.$error}"
                @change="$v.passwordConfirm.$touch()"
                v-bind:type="passwordConfirmShow ? 'text' : 'password'"
            >

            <label class="pass-show" @click="passwordConfirmShow = !passwordConfirmShow">
              {{ passwordConfirmShow ? 'hide' : 'show' }}
            </label>

          </div>
        </div>


        <button class="btn btnPrimary">Submit</button>
      </form>

    </div>
  </modal>
</template>

<script>

import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import modal from '@/components/UI/Modal.vue'
export default {
    components: {
      modal
    },
    data(){
        return{
          name: '',
          email: '',
          password: '',
          passwordConfirm: '',
          passwordShow: false,
          passwordConfirmShow: false,
        }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirm: {required, sameAsPassword: sameAs('password')}
    },
    methods: {
      onSubmit(){
        this.$v.$touch()
        if(!this.$v.$invalid){
          const user = {
            name: this.name,
            email: this.email,
            password: this.passwordConfirm
          }

          console.log(user)
          this.closeForm()
        }
      },
      closeForm(){
        for (let key in this.$data){
          this.$data[key] = ''
          this.$v.$reset()
        }
        this.$emit('close')
      }
    }
}
</script>

<style lang="scss">
    .form-item .errorText{
      display: none;
      margin-bottom: 10px;
      font-size: 13.4px;
      color: #de4040;
    }

    .form-item {
      &.errorInput .errorText {
        display: block;
      }
    }

    input .error{
      border-color: #de4040;
    }

    .input-wrapper{
      position: relative;
    }
    .pass-show{
      position: absolute;
      top: 20%;
      right: 10%;
    }
</style>
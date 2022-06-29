<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="person_add_alt" color="primary" size="28px" />
        </template>
       {{tab |  titleCase}} todo anywhere
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
       ref="email"
        class="col"
        outlined
        v-model="formData.email"
        label="Email"
        stack-label
        :rules="[
          (val) => isValidEmail(val) || 'please enter a valid email address',
        ]"
        lazy-rules
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="password"
        class="col"
        outlined
        v-model="formData.pass"
        label="PassWord"
        type="password"
        stack-label
        :rules="[
          (val) => val.length >= 6 || 'please Enter At Least 6 characters',
        ]"
        lazy-rules
      />
    </div>

    <div class="row">
      <q-space></q-space>
      <q-btn type="submit" color="primary" :label="tab" />
    </div>
  </form>
</template>

<script>
import{mapActions} from "vuex"
export default {
  props:["tab"],
  data() {
    return {
      formData: {
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    ...mapActions("auth",['registerUser','loginUser']),
    isValidEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    submitForm() {
        this.$refs.email.validate()
        this.$refs.password.validate()
      if(!this.$refs.email.hasError && !this.$refs.password.hasError )
       {
       if(this.tab=="login"){
         //console.log("log has fired")
         this.loginUser(this.formData)
       }
       else{
         //console.log("register has fired")
         this.registerUser(this.formData)
        }
       }
    },
  },
  filters:{
    titleCase(value){
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style></style>

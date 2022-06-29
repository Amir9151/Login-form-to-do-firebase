<template>
<q-page padding>
  <q-card class="auth-tab">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login"  label="Login"  />
          <q-tab name="register" label="Register"  />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
             <register-login :tab="tab"></register-login>
          </q-tab-panel>

          <q-tab-panel name="register">
            <register-login :tab="tab"></register-login>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
</q-page>

</template>

<script>
export default {
  components:{
    registerLogin:require("src/components/Auth/register-login.vue").default
  },


  data () {
    return {
      tab: 'login'
    }
  }
}
</script>

<style scoped>
.auth-tab{
  max-width: 600px;
  margin: 0 auto;
}
</style>

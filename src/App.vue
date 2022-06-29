<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'App',
  methods:{
    ...mapActions("settings",["getSetting"]),
    ...mapActions("auth",["handleAuthStatechange"]),
  },
  mounted(){
    this.getSetting()
    this.handleAuthStatechange()
  }

  }
</script>
<style >
.text-strike{
  text-decoration:line-through;
}

</style>

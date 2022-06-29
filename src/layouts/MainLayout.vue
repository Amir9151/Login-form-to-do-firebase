<template>
  <q-layout  view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen =!leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Awsome-to-do
        </q-toolbar-title>

         <q-btn
          to='/auth'
          v-if="!logedIn"
          class="absolute-right text-white"
          flat   icon-right="person_add_alt"
          label="LOGIN" />


         <q-btn
          v-else
          @click="logoutUser"
          class="absolute-right text-white"
          flat   icon-right="person_add_alt"
          label="LOGIN OUT" />

      </q-toolbar>
    </q-header>

      <q-footer elevated>
        <q-tabs dense
        class="text-white"
        v-model="tab"
      >
        <q-route-tab name="todo" icon="list" label="ToDo"  to="/"/>
        <q-route-tab  name="set" icon="settings" label="settings" to="/setting" />
        <q-route-tab  name="about" icon="info" label="about" to="/about" />
      </q-tabs>
      </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-cyan-7"
      :breakpoint="800"
      :width="250"
      dark
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
          @click="set"
        >
         Amirhossein
        </q-item-label>
        <hr>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          :link="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import {mapState,mapActions} from 'vuex'

const linksData = [
  {
    title: 'to do',
    caption: 'quasar.dev',
    icon: 'list',
    adress:"/"

  },
  {
    title: 'setting',
    caption: 'quasar.dev',
    icon: 'settings',
    adress:"/setting"

  },
  {
    title: 'about',
    caption: 'quasar.dev',
    icon: 'info',
    adress:"/about"

  },

];

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen:true,
      essentialLinks: linksData,
      tab:"todo",
    }
  },
  computed:{
    ...mapState("auth",['logedIn'])

  },
  methods:{
    ...mapActions("auth",["logoutUser"]),
    set(){
      console.log(this.$q.platform)
    }
  }
}
</script>
<style lang="scss" scoped>
/*@media screen and (min-width:800px){
.q-footer{
  display: none;
}
}*/
.q-drawer {

    .q-router-link--exact-active{
     color:rgb(189, 123, 8);
     background: white;}
}


</style>

<template>
  <q-input
  v-model="searchfield"
  @keyup.esc="searchfield = ''"
   label="Search"
    outlined class="col"
    v-select-all>
    <template v-slot:append>
      <q-icon
        v-if="searchfield !== ''"
        name="close"
        @click="searchfield = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {selectAll} from "src/directive/directive-select-all"

export default {

  computed:{
    ...mapState('tasks',['search']),
    searchfield:{
      get(){
         return this.search
      },
      set(value){
        this.setSearch(value)
      }
    }
  },
  methods:{
    ...mapActions("tasks",['setSearch'])
  },
  directives:{
    selectAll
  }
};

</script>

<style></style>

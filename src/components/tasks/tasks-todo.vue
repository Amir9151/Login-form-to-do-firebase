<template>
<transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut absolute-top"
>
  <div>
     <list-header v-if="!settingTaskList"  bg-color="bg-indigo-8" >To Do project</list-header>
    <q-list bordered separator >

      <!--<button @click="show(tasks)">object</button>-->

      <task v-for="(task, ID) in taskstodo" :task="task" :key="ID" :ID="ID">
      </task>
    </q-list>
  </div>
</transition>
</template>

<script>
 import {mapGetters} from 'vuex'
export default {
  name: "tasksTodo",
  props: ["taskstodo"],
  computed:{
   ...mapGetters("settings",["settingTaskList"])
  },
  components: {
    task: require("components/tasks/tasks.vue").default,
    listHeader: require("components/tasks/listheader.vue").default
  },
};
</script>

<style></style>

<template>

<transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut"
>
<div :class="{'q-mt-lg':!settingTaskList }">
   <list-header v-if="!settingTaskList" bgColor="bg-teal-9">Completed  Todo  Project</list-header>
  <q-list bordered separator >

      <task v-for="(task, ID) in taskscompleted" :task="task" :key="ID" :ID="ID">
      </task>
    </q-list>
</div>
</transition>
</template>

<script>
import {mapGetters} from "vuex"
export default {
name:"tasksCompleted",
props:["taskscompleted"],
computed:{
  ...mapGetters("settings",["settingTaskList"])
},
components:{
 task: require("components/tasks/tasks.vue").default,
 listHeader: require("components/tasks/listheader.vue").default,
}

}
</script>

<style>

</style>

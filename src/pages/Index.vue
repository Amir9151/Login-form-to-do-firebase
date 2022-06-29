<template>
  <q-page>

    <div class="q-pa-md absolute column full-width full-height ">
      <template v-if="taskDownload">

           <div class="row q-mb-lg">
          <search-bar></search-bar>
          <sort></sort>
    </div>


    <p
      v-if="
        !Object.keys(taskscompleted).length &&
         search &&
        !Object.keys(taskstodo).length"
    >
      No search Results
    </p>



     <q-scroll-area class="q-scroll-area">
      <!--No Tasks-->

    <no-task v-if="!Object.keys(taskstodo).length && !search && !settingTaskList"></no-task>

    <!--No Tasks-->

    <tasks-todo :taskstodo="taskstodo"
     v-if="Object.keys(taskstodo).length">
    </tasks-todo>

    <tasks-completed
      :taskscompleted="taskscompleted"
      v-if="Object.keys(taskscompleted).length"
      class="q-mb-l"
    ></tasks-completed>

     </q-scroll-area>


    <!--addtsak-->
    <div class="absolute-bottom text-center q-mb-md no-pointer-events">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
        class="all-pointer-events"
      />
    </div>
      </template>
      <template v-else>
        <div class="absolute-center">
       <q-spinner-cube
         size="4.5em"
        color="primary"
      />
        </div>
      </template>

    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "PageIndex",
  components: {
    addTask: require("components/tasks/modal/add-task.vue").default,
    tasksTodo: require("components/tasks/tasks-todo.vue").default,
    tasksCompleted: require("components/tasks/tasks-completed.vue").default,
    noTask: require("components/tasks/noTask.vue").default,
    searchBar: require("components/tasks/tools/search.vue").default,
    sort: require("components/tasks/tools/sort.vue").default,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    /*tasks() {
      return this.$store.getters['tasks/tasks'];
    },*/
    ...mapGetters("tasks", ["taskstodo", "taskscompleted"]),
    ...mapGetters("settings",["settingTaskList"]),
    ...mapState("tasks", ["search","taskDownload"]),
  },
  methods: {
    // show(tasks){
    //   console.log(Object.keys(tasks))
    // }
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    })
  },
};
</script>

<style scoped>
.q-scroll-area{
  display:flex;
  flex-grow: 1;
}
</style>

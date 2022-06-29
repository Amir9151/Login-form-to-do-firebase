<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <form @submit.prevent="submitform">
      <q-card-section>
        <modal-taskname :taskToSubmit="taskToSubmit" ref="modalTaskname" ></modal-taskname>
        <modal-duedate :duedate.sync="taskToSubmit.duedate"></modal-duedate>
        <modal-duetime :taskToSubmit="taskToSubmit"></modal-duetime>

      </q-card-section>

      <modal-button></modal-button>

      <!--<pre>{{taskToSubmit}}</pre>-->
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex"
import mixinAddEditTask from "src/mixins/mixins-add-edit"

export default {
mixins:[mixinAddEditTask],
 data() {
    return {
      taskToSubmit: {
        // name: this.task.name,
        // completed: false,
        // duedate: this.task.duedate,
        // duetime: this.task.duetime,
      },
    };
  },

  props:["task","ID"],
  methods: {
    ...mapActions("tasks", ["updatetask"]),

    submittask() {
      this.updatetask({id:this.ID,update:this.taskToSubmit});


      console.log("false:hasError property");
    },
  },
  mounted(){
   this.taskToSubmit= Object.assign({},this.task)

  }
};
</script>

<style></style>

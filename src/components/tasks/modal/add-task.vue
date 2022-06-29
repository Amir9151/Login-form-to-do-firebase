<template>
  <q-card>
    <modal-header>Add Task</modal-header>

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
import { mapActions } from "vuex";
import mixinAddEditTask from "src/mixins/mixins-add-edit"

export default {
 mixins:[mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {
        name: "",
        completed: false,
        duedate: "",
        duetime: "",
      },
    };
  },
  methods: {
    ...mapActions("tasks", ["addtask"]),


    submittask() {
      this.addtask(this.taskToSubmit);
      this.$emit("close")

      console.log("false:hasError property");
    },
  },
};
</script>

<style></style>

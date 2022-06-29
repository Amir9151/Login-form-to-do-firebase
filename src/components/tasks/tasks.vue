<template>
  <!--update=> completed-->
  <q-item
    v-ripple
    clickable
    @click="updatetask({ id: ID, update: { completed: !task.completed } })"
    :class="task.completed ? 'bg-pink-1' : 'bg-light-blue-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strike': task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)"
      >
      </q-item-label>
    </q-item-section>

    <q-item-section side v-if="task.duedate">
      <div class="row">
        <div class="column justify-center">
          <q-icon class="q-mr-xs" name="event" size="18px" color="blue" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.duedate | niceDate }}
          </q-item-label>

          <q-item-label class="row justify-end" caption
            ><small>{{ taskDueTime }}</small></q-item-label
          >
        </div>
      </div>
    </q-item-section>

    <!--delete method-->
    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="primary"
          icon="edit"
          @click.stop="showEditTaskModal"
        />
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="promptdelete(ID)"
        />
      </div>
    </q-item-section>

    <!--edit sectin-->

    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :ID="ID"></edit-task>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions, mapState,mapGetters } from "vuex";
import { date } from "quasar";

const { formatDate } = date;

export default {
  props: ["task", "ID"],

  data() {
    return {
      showEditTask: false,
    };
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings",["setting"]),
    taskDueTime() {
      if(this.setting)
     { return formatDate(`${this.task.duedate} ${this.task.duetime}`,'h:mm A')}

      return this.task.duetime
    },
  },



  components: {
    editTask: require("./modal/edit-task.vue").default,
  },
  methods: {
    ...mapActions("tasks", ["updatetask", "deletetask"]),
    showEditTaskModal() {
      this.showEditTask = true;
    },
    // delete method
    promptdelete(ID) {
      //console.log("ID::", ID);

      this.$q.dialog({
          title: "Confirm",
          message: "really delete????",
          cancel: {
            color: "primary",
          },
          persistent: true,
        })
        .onOk(() => {
          //console.log("deleted");
          this.deletetask(ID);
        });
    },
  },

  filters: {
    niceDate(value) {
      //const {formatDate } = date
      return formatDate(value, "YYYY-MMMM-D");
    },
    searchHighlight(value, search) {
      // console.log("value:",value)
      // console.log("search:",search)
      if (search) {
        let searchRegExp = new RegExp(search, "ig");
        console.log("searchRegExp:", searchRegExp);
        return value.replace(
          searchRegExp,
          `<span class="bg-pink-9 text-white">
         ${search}</span>`
        );
      }
      return value;
    },
  },
};
</script>

<style></style>

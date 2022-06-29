<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      standout="bg-blue-1 text-dark"
      v-model="taskToSubmit.name"
      label="Enter Your Task"
      class="col"
      autofocus
      :rules="[(val) => !!val || 'Field is high required']"
      ref="name"
      v-select-all
    >
      <template v-slot:append>
        <q-icon
          name="close"
          v-if="taskToSubmit.name"
          @click="taskToSubmit.name = ''"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import {selectAll} from "src/directive/directive-select-all"
export default {
  name: "modalTaskName",
  props: ["taskToSubmit", "name"],
  directives: {
    selectAll
  },
};
</script>

<style></style>

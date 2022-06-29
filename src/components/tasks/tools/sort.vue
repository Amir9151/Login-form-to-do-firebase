<template>
  <q-select
    :options="options"
    filled
    v-model="sortby"
    label="sort by"
    stack-label
    emit-value
    map-options
    class="cal q-ml-xs"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      options: [
        { label: "Name", value: "name" },
        { label: "Date", value: "duedate" },
      ],
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortby: {
      get() {
        return this.sort;
      },
      set(value) {
        console.log("value sort:", value);
        this.setsort(value);
      },
    },
  },
  methods: {
    ...mapActions("tasks", ["setsort"]),
  },
};
</script>

<style scoped>
.q-select {
  flex: 0 0 120px;
}
</style>

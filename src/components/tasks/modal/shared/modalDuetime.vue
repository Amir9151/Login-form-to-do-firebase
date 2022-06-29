<template>
  <div class="row q-mb-sm" v-if="taskToSubmit.duedate">
          <q-input
            outlined
            v-model="taskToSubmit.duetime"
            label="Due time"
            standout="bg-blue-1 text-dark"
            clearable
            class="col"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.duetime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
</template>

<script>
export default {
  name:"modalDuetime",
  props:['taskToSubmit']

}
</script>

<style>

</style>

<template>
 <div class="row q-mb-sm" >
          <q-input
            outlined
            :value="duedate"
            label="Due date"
            standout="bg-blue-1 text-dark"
            clearable
            @input="$emit('update:duedate',$event)"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date :value="duedate"  @input="$emit('update:duedate',$event)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

</template>

<script>
export default {
  name:"modalDuedate",
  props:["duedate"]

}
</script>

<style>

</style>

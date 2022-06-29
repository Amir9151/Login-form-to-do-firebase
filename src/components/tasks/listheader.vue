<template>
  <q-banner inline-actions dense :class="bgColor" class="list-header text-white  text-center">
    <span class="text-bold text-subtitle1"> <slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  name:"listHeader",
  props:['bgColor']
};
</script>

<style>
.list-header{
  border-top-right-radius:8px ;
  border-top-left-radius:8px ;
}

</style>

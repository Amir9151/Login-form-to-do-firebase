<template>
  <q-item
  :to="link.adress"
  clickable
  exact
>
    <q-item-section
      v-if="link.icon"
      avatar
    >
      <q-icon :name="link.icon" />
    </q-item-section>


    <q-item-section>
      <q-item-label>{{ link.title }}</q-item-label>

      <q-item-label caption>
        {{ link.caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: ["link"]
}
</script>

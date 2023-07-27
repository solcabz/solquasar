<template>
  <q-banner color="dark" rounded class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    <p class="dark">Empty Task Todo!</p>
    <template v-slot:action>
      <q-btn
        @click="$emit('showAddTask')"
        flat
        color="indigo"
        label="Add task"
      />
    </template>
  </q-banner>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dark {
  color: #2b2b2b;
}
</style>

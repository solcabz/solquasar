<template>
  <q-banner rounded class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    Empty Task Todo!
    <template v-slot:action>
      <q-btn
        @click="$emit('showAddTask')"
        flat
        color="primary"
        label="Add task"
      />
    </template>
  </q-banner>
</template>

<script>
export default {};
</script>

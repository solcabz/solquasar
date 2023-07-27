<template>
  <div class="text-left">
    <q-toggle
      v-model="darkmode"
      @click="toggleDarkMode"
      checked-icon="dark_mode"
      color="grey-8"
      unchecked-icon="sunny"
      keep-color
      size="xl"
    >
    </q-toggle>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    return {
      darkmode: ref(false),
      toggleDarkMode() {
        $q.dark.toggle();
      },
    };
  },
};
</script>

<template>
  <div class="text-left">
    <q-toggle
      v-model="darkmode"
      @click="toggleDarkMode"
      checked-icon="dark_mode"
      color="grey"
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

<style lang="scss" scoped>
.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}
.dark {
  background: #333333;
}
</style>

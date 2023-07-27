<template>
  <div class="q-pa-md">
    <!-- <div>
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <q-tab class="text-indigo bg-indigo-1" name="mails" label="Mails" />
        <q-tab class="" name="alarms" label="Alarms" />
        <q-tab class="text-teal" name="movies" label="Movies" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="text-black text-center"
        >
          <q-tab-panel name="mails" bg>
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Ad molestiae non facere animi nobis, similique nemo.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Nostrum necessitatibus expedita dolores? Voluptatem.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div> -->
    <calendar></calendar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
  components: {
    calendar: require("components/Tasks/CalendarPage.vue").default,
  },
};
</script>

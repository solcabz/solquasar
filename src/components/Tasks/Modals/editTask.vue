<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <form @submit.prevent="submitFom">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <!-- <modal-nameInput :name="taskToSubmit.name" /> -->
          <q-input
            outlined
            v-model="taskToSubmit.name"
            :rules="[(val) => !!val || 'Field is required']"
            autofocus
            ref="name"
            label="Task Name"
            class="col"
            color="indigo-4"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.name"
                name="close"
                @click="taskToSubmit.name = ''"
                class="cursor-pointer"
                color="indigo-4"
              />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            label="Due Date"
            outlined
            v-model="taskToSubmit.dueDate"
            color="indigo-4"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueDate"
                name="close"
                @click="cleardueDate"
                class="cursor-pointer"
                color="indigo-4"
              />

              <q-icon name="event" class="cursor-pointer" color="indigo-4">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToSubmit.dueDate" color="indigo-4">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        flat
                        color="indigo-4"
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input
            label="Due Time  "
            outlined
            v-model="taskToSubmit.dueTime"
            class="col"
            color="indigo-4"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueTime"
                name="close"
                @click="taskToSubmit.dueTime = ''"
                class="cursor-pointer"
                color="indigo-4"
              />
              <q-icon
                name="access_time"
                class="cursor-pointer"
                color="indigo-4"
              >
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="taskToSubmit.dueTime" color="indigo-4">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        flat
                        color="indigo-4"
                      />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="save" color="indigo-4" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/modal-Header.vue")
      .default,
    // "modal-nameInput":
    //   require("components/Tasks/Modals/Shared/modalTaskName.vue").default,
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitFom() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit,
      });
      this.$emit("close");
    },
    cleardueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    },
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
};
</script>

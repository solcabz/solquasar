<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-indigo-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox
        keep-color=""
        v-model="taskCompleted"
        @change="emitTaskCompleted"
        :color="!task.completed ? 'indigo-4' : 'green-4'"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrough': task.completed }"
        style="color: #2b2b2b"
      >
        {{ task.name }}</q-item-label
      >
    </q-item-section>

    <q-item-section side>
      <div class="row" style="color: #2b2b2b">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption
            style="color: #2b2b2b"
            >{{ task.dueDate }}</q-item-label
          >
          <q-item-label class="row justify-end" caption style="color: #2b2b2b">
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          color="secondary"
          icon="edit"
        />

        <q-btn
          @click.stop="promtToDelete(id)"
          flat
          round
          color="red-4"
          icon="delete"
        />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <editTask @close="showEditTask = flase" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false,
      taskCompleted: this.task.completed,
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promtToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Realy delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
    emitTaskCompleted() {
      this.$emit("taskCompleted", this.taskCompleted);
    },
  },
  components: {
    editTask: require("components/Tasks/Modals/editTask.vue").default,
  },
};
</script>

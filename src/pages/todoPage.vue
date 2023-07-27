<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col">
        <NoTask
          v-if="!Object.keys(tasksTodo).length"
          @showAddTask="showAddTask = true"
        ></NoTask>
      </div>

      <div class="text-right q-ma-lg">
        <q-btn
          class="bg-indigo-4"
          @click="showAddTask = true"
          round
          dense
          size="24px"
          icon="add"
          text-color="white"
        />
      </div>
    </div>

    <div class="q-my-sm">
      <q-banner
        v-if="Object.keys(tasksTodo).length"
        inline-actions
        rounded
        class="text-center text-white bg-indigo-4"
      >
        <span class="text-bold text-subtitle1">Todo Task</span>
      </q-banner>

      <q-list v-if="Object.keys(tasksTodo).length" separator bordered>
        <task
          v-for="(task, key) in tasksTodo"
          :key="key"
          :task="task"
          :id="key"
        >
        </task>
      </q-list>
    </div>

    <div class="q-my-sm">
      <q-banner
        v-if="Object.keys(tasksCompleted).length"
        inline-actions
        rounded
        class="text-white bg-green-4 text-center"
      >
        <span class="text-bold text-subtitle1">Completed Task</span>
      </q-banner>

      <q-list v-if="Object.keys(tasksCompleted).length" separator bordered>
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        >
        </task>
      </q-list>
    </div>

    <q-dialog v-model="showAddTask">
      <addTask @close="showAddTask = flase" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: false,
      task: { completed: false },
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
  },
  components: {
    task: require("components/Tasks/Task-Todo.vue").default,
    addTask: require("components/Tasks/Modals/addTask.vue").default,
    NoTask: require("components/Tasks/NoTask.vue").default,
  },
  methods: {
    onTaskCompleted(completed) {
      this.task.completed = completed;
    },
  },
};
</script>

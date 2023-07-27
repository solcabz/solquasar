import { uid } from "quasar";

const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "18:30",
    },
    ID2: {
      name: "Go to store",
      completed: false,
      dueDate: "2023/09/22",
      dueTime: "18:30",
    },
    ID3: {
      name: "Go to work",
      completed: true,
      dueDate: "2019/11/12",
      dueTime: "18:30",
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    console.log("payload", payload);
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    console.log("deleted id:", id);
    delete state.tasks[id];
  },
  addTask(state, payload) {
    state.tasks[payload.id] = payload.task;
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task,
    };
    commit("addTask", payload);
  },
};

const getters = {
  tasksTodo: (state) => {
    let tasks = {};
    Object.keys(state.tasks).forEach(function (key) {
      let task = state.tasks[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    // return tasks;

    return tasks;
  },

  tasksCompleted: (state) => {
    let tasks = {};
    Object.keys(state.tasks).forEach(function (key) {
      let task = state.tasks[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    // return tasks;

    return tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

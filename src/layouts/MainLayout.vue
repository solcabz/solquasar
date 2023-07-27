<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-indigo-4" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />
        <q-toolbar-title> Sol Cabreza </q-toolbar-title>

        <q-avatar size="45px" round color="#2c6399" dense>
          <q-img src="../assets/sol.jpg" />
          <q-menu separator style="width: 280px">
            <q-list separator>
              <q-item v-close-popup clickable>
                <q-item-section avatar>
                  <q-icon name="person"></q-icon>
                </q-item-section>
                <q-item-section> Account </q-item-section>
              </q-item>

              <q-item v-close-popup clickable to="/settings">
                <q-item-section avatar>
                  <q-icon name="settings"></q-icon>
                </q-item-section>
                <q-item-section> Settings </q-item-section>
              </q-item>

              <q-item v-close-popup clickable>
                <q-item-section avatar>
                  <q-icon name="logout"></q-icon>
                </q-item-section>
                <q-item-section> Logout </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="home"></q-icon>
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon name="quiz"></q-icon>
            </q-item-section>

            <q-item-section> About </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/todo">
            <q-item-section avatar>
              <q-icon name="list"></q-icon>
            </q-item-section>

            <q-item-section> Todo </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/login">
            <q-item-section avatar>
              <q-icon name="login"></q-icon>
            </q-item-section>

            <q-item-section> Login </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/settings">
            <q-item-section avatar>
              <q-icon name="settings"></q-icon>
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>
        </q-list>

        <toggle class="absolute-bottom"></toggle>
      </q-scroll-area>

      <q-img class="absolute-top bg-indigo-5 q-px-md" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/sol.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Sol Cabreza</div>
          <div>@Solcabreza</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
  components: {
    toggle: require("components/Tasks/ToggleMode.vue").default,
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>

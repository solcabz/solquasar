<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width card" style="max-width: 300px">
      <q-card>
        <q-card-section>
          <h5 class="q-my-md text-center text-bold">Login</h5>
          <q-input
            filled
            label="Email"
            class="q-mb-md"
            v-model="email"
            color="indigo-4"
          />
          <q-input
            filled
            label="Password"
            class="q-mb-sm"
            v-model="password"
            color="indigo-4"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-checkbox
            label="Remember me"
            v-model="rememberMe"
            color="indigo-4"
          />

          <div class="row justify-evenly q-my-sm">
            <q-btn
              class="cursor-pointer"
              clickable
              icon="facebook"
              round
              color="indigo-4"
            ></q-btn>

            <q-btn
              class="cursor-pointer"
              clickable
              icon="discord"
              round
              color="indigo-4"
            ></q-btn>

            <q-btn
              class="cursor-pointer"
              clickable
              icon="catching_pokemon"
              round
              color="indigo-4"
            ></q-btn>
          </div>

          <q-btn
            label="login"
            class="full-width bg-indigo-4"
            color="primary"
          ></q-btn>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      email: "",
      password: ref(""),
      rememberMe: true,
      isPwd: ref(true),
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

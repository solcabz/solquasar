<template>
  <div class="q-pa-md rounded">
    <q-carousel
      class="rounded-borders text-white shadow-1"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <span class="text-bold text-h2 absolute-center">Solcabz</span>
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

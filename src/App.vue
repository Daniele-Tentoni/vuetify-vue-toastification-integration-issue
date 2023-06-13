<template>
  <v-app id="vuetify-app">
    <v-main id="vuetify-main">
      <v-container>
        <v-row align="center">
          <v-spacer></v-spacer>
          <v-col >
            <v-btn @click="loc">Location Error</v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useErrorStore } from "./store/error";

const errorStore = useErrorStore();

function loc() {
  console.warn("LOC");
  errorStore.locationError();
}
</script>

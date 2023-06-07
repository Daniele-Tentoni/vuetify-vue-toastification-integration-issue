<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <HelloWorld />
          </v-col>
          <v-col>
            <v-btn @click="loc">Location Error</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { useErrorStore } from "./store/error";

const errorStore = useErrorStore();

function loc() {
  console.warn("LOC");
  errorStore.locationError();
}
</script>

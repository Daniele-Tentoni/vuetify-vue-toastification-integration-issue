<template>
  <!-- <v-btn @click="reload">Reload</v-btn>-->
  <div class="container">
    <v-container>
      <v-row>
        <v-col> Alert example </v-col>
        <v-col>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
function reload() {
  if (typeof window !== "undefined") {
    window.location.reload();
  }
}
</script>

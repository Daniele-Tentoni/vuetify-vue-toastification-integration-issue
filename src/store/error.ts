import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import MyComponent from "@/components/MyComponent.vue";

const toast = useToast();

export const useErrorStore = defineStore("error", () => {
  const state = ref("");

  function locationError() {
    console.warn("error");
    toast(MyComponent);
  }

  return { state, locationError };
});

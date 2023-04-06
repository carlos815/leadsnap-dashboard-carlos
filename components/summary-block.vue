<template>
  <div
    class="bg-white border border-gray-4 rounded min-w-[180px] max-w-xs w-full xl:max-w-none"
  >
    <div class="flex p-6 justify-between">
      <h1 class="text-5xl font-bold">{{ value }}</h1>
      <img v-bind:src="baseURL + 'assets/' + icon" v-bind:alt="title" />
    </div>
    <hr class="text-gray-4" />
    <h1 class="font-bold px-6 py-2">{{ title }}</h1>
  </div>
</template>


<script >
import { baseURL } from "@/composables/variables";

export default {
  props: ["icon", "title", "value"],
  baseURL: baseURL,
};
</script>




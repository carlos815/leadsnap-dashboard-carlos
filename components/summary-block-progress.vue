<template>
  <div
    class="bg-white border border-gray-4 p-4 rounded min-w-[180px] max-w-xs w-full flex justify-between"
  >
    <div class="flex flex-col justify-center">
      <h1 class="font-bold">{{ title }}</h1>
      <h1 class="text-5xl font-bold text-blue-7">{{ value }}</h1>
    </div>
    <div
      id="graph"
      class="rounded-full h-full w-full max-w-[100px] max-h-[100px] aspect-square before:absolute before:w-20 before:h-20 before:bg-white before:top-1/2 relative before:right-1/2 before:translate-x-1/2 before:-translate-y-1/2 before:rounded-full flex justify-center items-center font-bold text-2xl"
      v-bind:style="{
        background:
          'conic-gradient(#8fc03a 0%,  #24a0d3 ' +
          percentage +
          '%, #d9d9d9 ' +
          percentage +
          '%)',
      }"
    >
      <div class="z-10">
        {{ value }}
      </div>
    </div>
  </div>
</template>


<script setup>
import { baseURL } from "@/composables/variables";

const props = defineProps({
  title: String,
  value: Number,
  total: Number,
});

const percentage = Math.round((props.value / props.total) * 100);
</script>


<style>
div {
}

#scriptSetup {
  color: v-bind("colorFromScriptSetup");
}
</style>




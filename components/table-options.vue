<template>
  <div class="flex justify-between mb-4 flex-wrap gap-4">
    <div class="flex gap-4">
      <button
        class="to-green-1 from-blue-7 bg-gradient-to-l before:bg-white before:w-full before:h-full before:z-10 relative rounded p-[2px] hover:scale-105 transition-transform"
      >
        <span
          class="bg-white py-2 px-4 flex gap-2 items-center font-bold relative right-0 rounded-sm"
        >
          <img
            v-bind:src="baseURL + 'assets/gmb-name.png'"
            alt="Columns icon"
            class="w-[18px] h-[16px]"
          />
          <span> Columns </span>
        </span>
      </button>
      <div class="dropdown relative bg-white h-full rounded">
        <select
          class="border border-gray-4 bg-white rounded shadow-sm w-32 bg-transparent z-30 relative p-2 h-full"
        >
          <option value="" class="bg-white">Live</option>
          <option value="" class="bg-white">Error</option>
          <option value="" class="bg-white">Missing</option>
          <option value="" class="bg-white">Power</option>
        </select>
      </div>
    </div>
    <div>
      <button
        class="bg-turquoise-2 border border-turquoise-3 h-full px-4 font-bold text-white rounded mr-6"
      >
        Sync Citations
      </button>
      <label for="t" class="font-bold mr-2">Search:</label>
      <input
        type="text"
        name=""
        id=""
        class="border border-gray-4 bg-white rounded shadow-sm w-64 bg-transparent z-30 relative p-2 h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { baseURL } from "@/composables/variables";
</script>

<style scoped>
select {
  -webkit-appearance: none;
  background-position-x: 100px;
  @apply bg-transparent z-30 relative p-2;
}

.dropdown::before {
  content: "⏷";
  @apply absolute right-[5px] text-blue-2 z-10 py-2;
}
</style>
<template>
  <div class="flex justify-between mb-4 flex-wrap gap-4">
    <div class="flex gap-4">
      <button
        class="to-green-1 from-blue-7 bg-gradient-to-l before:bg-white before:w-full before:h-full before:z-10 relative rounded p-[2px] hover:scale-105 transition-transform"
      >
        <span
          class="bg-white py-2 px-4 flex gap-2 items-center font-bold relative right-0 rounded-sm h-full"
        >
          <img
            v-bind:src="baseURL + 'assets/gmb-name.png'"
            alt="Columns icon"
            class="w-[18px] h-[16px]"
          />
          <span> Columns </span>
        </span>
      </button>

      <Custom-select
        :options="['Live', 'Error', 'Missing', 'Power']"
        :default="'Live'"
        class="select w-32 border border-gray-4"
      />
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
        class="border border-gray-4 bg-white rounded shadow-sm w-64 bg-transparent relative p-2 h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { baseURL } from "@/composables/variables";
</script>

<style scoped>
select {
}
</style>
<template>
  <header class="my-4">
    <div class="flex items-center">
      <div>
        <h1 class="text-2xl font-bold">Citations</h1>
        <p>BMB locations > Citations</p>
      </div>
      <button
        class="ml-auto bg-green-2 border border-green-3 py-2 px-4 font-bold text-white rounded mr-4"
      >
        Order Citations
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
    <hr class="text-gray-6 my-4" />
  </header>
</template>


<script >
import { baseURL } from "@/composables/variables";

export default {
  props: ["rowdata"],
  baseURL: baseURL,
};
</script>




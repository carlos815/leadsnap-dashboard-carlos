<template>
  <header class="my-4">
    <div class="flex items-center flex-wrap gap-4">
      <div>
        <h1 class="text-2xl font-bold">Citations</h1>
        <p>BMB locations > Citations</p>
      </div>
      <button
        class="md:ml-auto bg-green-2 border border-green-3 py-2 px-4 font-bold text-white rounded mr-4"
      >
        Order Citations
      </button>

      <div class="flex bg-white border border-gray-6 rounded">
        <img
          :src="baseURL + 'assets/gmb-name.png'"
          alt=""
          srcset=""
          class="p-4 border-r border-gray-6"
        />
        <Custom-select
          :options="['GMB Name 2', 'GMB Name 3', 'GMB Name 4', 'GMB Name 5']"
          :default="'GMB Name 2'"
          class="d w-52"
        />
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




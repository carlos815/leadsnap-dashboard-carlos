<template>
  <nav class="bg-blue-2 w-56 min-w-[14rem] p-6 text-white h-full">
    <img
      v-bind:src="baseURL + 'assets/' + 'header-logo.png'"
      alt="Logo"
      srcset=""
      width="16px"
      class="w-full self-center mb-8"
    />

    <div class="flex gap-4 w-full items-center mb-8">
      <img
        v-bind:src="baseURL + 'assets/' + data.profile.img"
        alt="Logo"
        srcset=""
        class="rounded-full overflow-hidden border-2 border-red-300 aspect-square h-full w-1/3"
      />
      <div class="w-1/2">
        <p class="text-white text-xs">Welcome</p>
        <p class="text-turquoise text-sm font-bold">{{ data.profile.name }}</p>
      </div>
    </div>

    <h1></h1>

    <h1 class="font- uppercase mb-2">General</h1>
    <input
      type="text"
      class="bg-blue-4 border-blue-5 border p-4 rounded w-full"
      placeholder="Search... "
    />
  </nav>
</template>


<script setup>
import { baseURL } from "@/composables/variables";

const { data: data } = await useFetch("/api/data");

const props = defineProps({
  ["rowdata"]: Object,
});
</script>




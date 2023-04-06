<template>
  <header class="my-4">
    <h1 class="text-2xl font-bold">Citations</h1>
    <p>BMB locations > Citations</p>
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




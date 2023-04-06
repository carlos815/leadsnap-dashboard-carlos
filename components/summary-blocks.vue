<template>
  <div class="flex gap-6 flex-row my-6 flex-wrap xl:flex-nowrap">
    <Summary-block-progress
      :icon="'citations.png'"
      :title="'Power Citations'"
      :value="60"
      :total="70"
    />
    <Summary-block
      :icon="'power-citations.png'"
      :title="'Total Citations'"
      :value="'55'"
    />
    <Summary-block
      :icon="'citations.png'"
      :title="'Power Citations'"
      :value="'34'"
    />
    <Summary-block :icon="'missing.png'" :title="'Missing'" :value="'21'" />
    <Summary-block :icon="'errors.png'" :title="'Errors'" :value="'08'" />
  </div>
</template>


<script >
import { baseURL } from "@/composables/variables";
import summaryBlock from "./summary-block.vue";

export default {
  components: { summaryBlock },
  props: ["rowdata"],
  baseURL: baseURL,
};
</script>




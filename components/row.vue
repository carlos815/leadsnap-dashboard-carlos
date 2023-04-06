<template>
  <tr class="border border-gray-5">
    <td class="p-5 px-[20px] text-sm border-gray-5 flex gap-x-3">
      <img
        v-bind:src="baseURL + 'assets/' + rowdata.image"
        v-bind:alt="rowdata.image"
        srcset=""
        width="16px"
        class="w-4 h-4 self-center mr-"
      />
      <p>
        {{ rowdata.site }}
      </p>
    </td>
    <td class="p-5 px-[20px] text-sm border border-gray-5">
      {{ rowdata.name }}
    </td>
    <td class="p-5 px-[20px] text-sm border border-gray-5">
      {{ rowdata["in-app"] }}
    </td>
    <td class="p-5 px-[20px] text-sm border border-gray-5">
      {{ rowdata.email }}
    </td>
    <td class="p-5 px-[20px] text-sm border border-gray-5">Action</td>
  </tr>
</template>


<script>
import { baseURL } from "@/composables/variables";

export default {
  props: ["rowdata"],
  baseURL: baseURL,
};
</script>

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
    <td class="text-sm border border-gray-5">
      <div class="flex gap-1 w-full h-full bg p-1 justify-center">
        <button v-bind:disabled="rowdata.view" class="disabled:opacity-50">
          <img
            v-bind:src="baseURL + 'assets/view.png'"
            alt="View"
            srcset=""
            class="self-center"
          />
        </button>
        <button v-bind:disabled="rowdata.reload" class="disabled:opacity-50">
          <img
            v-bind:src="baseURL + 'assets/reload.png'"
            alt="Reload"
            srcset=""
            class="self-center"
          />
        </button>
        <button v-bind:disabled="rowdata.citation" class="disabled:opacity-50">
          <img
            v-bind:src="baseURL + 'assets/citation.png'"
            alt="Citation"
            srcset=""
            class="self-center"
          />
        </button>
      </div>
    </td>
  </tr>
</template>


<script>
import { baseURL } from "@/composables/variables";

export default {
  props: ["rowdata"],
  baseURL: baseURL,
};
</script>

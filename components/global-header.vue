<template>
  <header class="px-8 bg-gray-3 text-right flex justify-between">
    <div class="flex items-center">
      <button class="text-blue-6">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>Menu</title>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Menu">
              <rect
                id="Rectangle"
                fill-rule="nonzero"
                x="0"
                y="0"
                width="24"
                height="24"
              ></rect>
              <line
                x1="5"
                y1="7"
                x2="19"
                y2="7"
                id="Path"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
              ></line>
              <line
                x1="5"
                y1="17"
                x2="19"
                y2="17"
                id="Path"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
              ></line>
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                id="Path"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
              ></line>
            </g>
          </g>
        </svg>
      </button>
      <div><p>Onboarding Progress bar</p></div>
    </div>
    <div class="flex items-center">
      <div class="flex items-center">
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
      </div>
      <div class="flex items-center">
        <div>Image</div>
        <div>Patrick Shannon</div>
        <div>Downbutton</div>
      </div>
    </div>
  </header>
</template>


<script >
import { baseURL } from "@/composables/variables";

export default {
  props: ["rowdata"],
  baseURL: baseURL,
};
</script>




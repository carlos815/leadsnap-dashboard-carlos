<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        :class="option == selected && 'active'"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  @apply relative text-left outline-none h-full leading-[47px];
}

.custom-select .selected {
  cursor: pointer;
  user-select: none;

  @apply bg-white rounded  pl-4;
}

.custom-select .selected.open {
  @apply border border-gray;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #2e4154 transparent transparent transparent;
}

.custom-select .items {
  @apply rounded-b-md overflow-hidden  border-gray absolute bg-gray left-0 right-0 z-10 rounded shadow;
}

.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  @apply border-b border-x border-gray-6 bg-white pl-4 shadow;
}

.custom-select .items div:hover {
  @apply bg-gray-5;
}

.custom-select .items .active {
  @apply border-b-4 border-x-0 border-blue-7;
}

.selectHide {
  display: none;
}
</style>

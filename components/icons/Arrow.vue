<script setup lang="ts">
const props = defineProps<{
  rotate: boolean;
}>();
</script>

<template>
  <svg
    v-bind="$attrs"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    :class="['arrow', { rotate: props.rotate }]"
    viewBox="0 0 16 16"
  >
    <path
      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
    />
  </svg>
</template>

<style lang="scss" scoped>
.arrow {
  transition: transform 0.2s;

  &.rotate {
    transform: rotate(180deg);
  }
}
</style>

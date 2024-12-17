<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <TheHeader></TheHeader>

    <main class="default-layout__main">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
}
</style>

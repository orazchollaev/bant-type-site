<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <TheHeader />

    <main class="default-layout__main">
      <slot></slot>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
}
</style>

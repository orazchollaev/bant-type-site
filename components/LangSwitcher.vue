<script setup lang="ts">
import Arrow from "./icons/Arrow.vue";

import { useI18n } from "#build/imports";

const { locale, locales } = useI18n();

const isOpen = ref<boolean>(false);
const langSwitcher = ref<any>(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const changeLang = (lang: any) => {
  locale.value = lang.code;
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", (e: any) => {
    if (isOpen.value) {
      const target = e.target as HTMLElement;

      if (target && langSwitcher) {
        const isClickInside = langSwitcher.value?.contains(target);
        if (!isClickInside) {
          isOpen.value = false;
        }
      }
    }
  });
});
</script>

<template>
  <div class="lang-switcher" ref="langSwitcher">
    <div class="lang-switcher__head" @click="toggle">
      <span class="lang-switcher__lang">{{ locale }}</span>
      <Arrow :rotate="isOpen"></Arrow>
    </div>

    <div :class="['lang-switcher__body', { open: isOpen }]">
      <div class="lang-switcher__list">
        <div
          class="lang-switcher__item"
          @click="changeLang(localeValue)"
          v-for="(localeValue, _) in locales.filter((item:any)=> item.code !== locale)"
          :key="localeValue.code"
        >
          {{ localeValue.code }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang-switcher {
  position: relative;

  &__head {
    background-color: var(--white);
    color: var(--primary);
    padding: 6px 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;

    &:active {
      background-color: var(--gray);
      color: var(--white);
    }

    span {
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  &__body {
    width: 100%;
    position: absolute;
    top: 120%;
    left: 0;
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: 0.2s;
    border-radius: 6px;

    &.open {
      grid-template-rows: 1fr;
    }
  }

  &__list {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  &__item {
    width: 100%;
    background-color: var(--white);
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primary);
    padding: 6px 0;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: var(--gray);
    }

    &:active {
      background-color: var(--gray);
      color: var(--white);
    }
  }
}
</style>

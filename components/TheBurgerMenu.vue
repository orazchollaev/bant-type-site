<script setup lang="ts">
import Instagram from "./icons/InstagramIcon.vue";
import TikTok from "./icons/TikTokIcon.vue";

const { isOpen = false } = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(["close"]);

onMounted(() => {
  document.addEventListener("click", (e: any) => {
    if (!e.target.classList.contains("header__burger-button-item")) {
      emit("close");
    }
  });
});
</script>

<template>
  <div :class="['burger__overlay', { active: isOpen }]">
    <div class="header__link-list">
      <div class="burger__overlay-logo">
        <img src="/assets/img/logo.jpg" />
      </div>

      <nuxt-link to="#about" class="header__link"> Biz Barada</nuxt-link>
      <nuxt-link to="#products" class="header__link">Önümlerimiz</nuxt-link>
      <nuxt-link to="#contact" class="header__link">Habarlaşmak</nuxt-link>
      <div class="burger__overlay-social-media">
        <a href="https://www.instagram.com/berk_onum" target="_blank"
          ><Instagram width="30" height="30"
        /></a>
        <a href="https://www.tiktok.com/@banttape" target="_blank">
          <TikTok width="30" height="30" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.burger__overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 80%;
  height: 100vh;
  overflow: hidden;
  background: var(--dark-blue);
  transform: translateX(-100%);
  transition: 0.3s ease;
  &-close {
    position: absolute;
    top: 28px;
    left: 20px;
    width: 22px;
    height: 22px;
    background: transparent;
    position: relative;
    span {
      position: absolute;
      top: 50%;
      display: block;
      width: 22px;
      height: 2px;
      background: #fff;
      &:first-child {
        transform: translateY(-50%) rotate(45deg);
      }
      &:last-child {
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
  &.active {
    transition: 0.3s ease;
    transform: translateX(0%);
  }

  &-social-media {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &-logo {
    display: flex;
    align-content: center;
    justify-content: center;
    img {
      width: 50%;
      height: auto;
      border-radius: 10px;
    }
  }
}
.header {
  &__link-list {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  &__link {
    text-decoration: none;
    color: var(--white);
    font-size: 24px;
  }
}
</style>

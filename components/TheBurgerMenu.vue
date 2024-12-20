<script setup lang="ts">
const closeBurger = () => {
  let burgerOverlay = document.querySelector(".burger__overlay");
  burgerOverlay?.classList.toggle("active");
};
</script>

<template>
  <div class="burger__overlay">
    <button class="burger__overlay-close" @click="closeBurger">
      <span></span>
      <span></span>
    </button>
    <div class="header__link-list">
      <nuxt-link to="#about" class="header__link"> Biz Barada</nuxt-link>
      <nuxt-link to="#products" class="header__link">Önümlerimiz</nuxt-link>
      <nuxt-link to="#contact" class="header__link">Habarlaşmak</nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.burger__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
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

<script setup lang="ts">
import Instagram from "./icons/InstagramIcon.vue";
import TikTok from "./icons/TikTokIcon.vue";
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="@/assets/img/logo.jpg" />
      </div>

      <div class="header__link-list">
        <a class="header__link" href="#about"> Biz Barada</a>
        <a class="header__link">Önümlerimiz</a>
        <a class="header__link">Habarlaşmak</a>
      </div>

      <div class="header__right">
        <div class="header__lang-switcher">Türkmençe</div>

        <div class="header__social-media-links">
          <Instagram width="30" height="30"></Instagram>
          <TikTok width="30" height="30"></TikTok>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--dark-blue);
  padding: 10px 0;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    img {
      height: 50px;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  &__link-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  &__link {
    color: var(--white);
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: 100ms;

    &:hover {
      text-decoration: underline;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__lang-switcher {
    color: var(--white);
  }

  &__social-media-links {
    display: flex;
    align-items: center;
    gap: 6px;

    & > * {
      cursor: pointer;
    }
  }
}
</style>

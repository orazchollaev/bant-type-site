<script setup lang="ts">
import Instagram from "./icons/InstagramIcon.vue";
import TikTok from "./icons/TikTokIcon.vue";
import TheBurgerMenu from "./TheBurgerMenu.vue";
import LangSwitcher from "./LangSwitcher.vue";

const isOpen = ref<boolean>(false);
// const currentLanguage = ref("EN"); // Default dil
// const languages = ref({
//   EN: "English",
//   TM: "Türkmençe",
//   RU: "Русский",
// });

// // Terjime edilen sözler
// const translations = ref({
//   EN: {
//     welcome: "Welcome to our website!",
//     description: "This is an example of dynamic language switching.",
//   },
//   tm: {
//     welcome: "Biziň web sahypamyza hoş geldiňiz!",
//     description: "Bu, dinamiki dil üýtgetmegiň mysalydyr.",
//   },
//   RU: {
//     welcome: "Добро пожаловать на наш сайт!",
//     description: "Это пример динамического переключения языка.",
//   },
// });

// const toggleDropdown = () => {
//   isOpen.value = !isOpen.value;
// };

// const changeLanguage = (languageCode) => {
//   currentLanguage.value = languageCode;
//   isOpen.value = false; // Dropdowny ýap
// };

const showBurgerMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="header" id="home">
    <div class="header__container">
      <a href="#" class="header__logo">
        <img src="@/assets/img/logo.jpg" />
      </a>

      <div class="header__link-list">
        <nuxt-link to="#about" class="header__link">{{
          $t("about")
        }}</nuxt-link>
        <nuxt-link to="#products" class="header__link">{{
          $t("products")
        }}</nuxt-link>
        <nuxt-link to="#contact" class="header__link">{{
          $t("contact")
        }}</nuxt-link>
      </div>

      <div class="header__right">
        <!-- <div>
          <div class="dropdown" @click="toggleDropdown">
            <button class="dropdown-button">{{ currentLanguage }}</button>
            <ul class="dropdown-menu">
              <li
                v-for="(language, code) in languages"
                :key="code"
                @click.stop="changeLanguage(code)"
                class="dropdown-item"
              >
                {{ language }}
              </li>
            </ul>
          </div> -->

        <LangSwitcher />

        <div
          @click="showBurgerMenu"
          :class="['header__burger', { open: isOpen }]"
        >
          <button class="header__burger-button">
            <span class="header__burger-button-item"></span>
            <span class="header__burger-button-item"></span>
            <span class="header__burger-button-item"></span>
          </button>
        </div>

        <div class="header__social-media-links">
          <a href="https://www.instagram.com/berk_onum" target="_blank"
            ><Instagram width="30" height="30"
          /></a>
          <a href="https://www.tiktok.com/@banttape" target="_blank">
            <TikTok width="30" height="30" />
          </a>
        </div>
      </div>
    </div>
  </header>

  <Teleport to="body">
    <TheBurgerMenu :is-open="isOpen" @close="isOpen = false" />
  </Teleport>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--dark-blue);
  padding: 10px 0;
  z-index: 10;

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
    @media (max-width: 768px) {
      display: none;
    }
  }

  &__link {
    font-size: 20px;
    color: var(--white);
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: 100ms;

    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      gap: 10px;
    }
  }

  &__lang-switcher {
    color: var(--white);
  }

  &__social-media-links {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      display: none;
    }

    & > * {
      cursor: pointer;
    }
  }
  &__burger {
    display: none;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    width: 30px;
    @media (max-width: 768px) {
      display: flex;
    }
    &-button {
      position: relative;
      height: 100%;
      width: 100%;
      background: transparent;
      span {
        display: block;
        width: 100%;
        height: 4px;
        background: var(--white);
        margin-bottom: 4px;
        user-select: none;
        transition: 0.2s;
      }
    }

    &.open {
      .header__burger-button {
        span {
          margin-left: 2px;
          &:first-child {
            transform: rotate(45deg) translateY(11px);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:last-child {
            transform: rotate(-45deg) translateY(-11px);
          }
        }
      }
    }
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  padding: 8px 12px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>

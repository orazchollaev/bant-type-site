<script setup lang="ts">
import Instagram from "./icons/InstagramIcon.vue";
import TikTok from "./icons/TikTokIcon.vue";
import TheBurgerMenu from "./TheBurgerMenu.vue";
// const isOpen = ref(false);
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
  let burgerOverlay = document.querySelector(".burger__overlay");
  burgerOverlay?.classList.toggle("active");
};
</script>

<template>
  <header class="header" id="home">
    <div class="header__container">
      <a href="#" class="header__logo">
        <img src="@/assets/img/logo.jpg" />
      </a>

      <div class="header__link-list">
        <nuxt-link to="#about" class="header__link"> Biz Barada</nuxt-link>
        <nuxt-link to="#products" class="header__link">Önümlerimiz</nuxt-link>
        <nuxt-link to="#contact" class="header__link">Habarlaşmak</nuxt-link>
      </div>

      <div class="header__right">
        <div>
          <div class="dropdown" @click="toggleDropdown">
            <button class="dropdown-button">{{ currentLanguage }}</button>
            <ul v-if="isOpen" class="dropdown-menu">
              <li
                v-for="(language, code) in languages"
                :key="code"
                @click.stop="changeLanguage(code)"
                class="dropdown-item"
              >
                {{ language }}
              </li>
            </ul>
          </div>
        </div>

        <div class="header__social-media-links">
          <Instagram width="30" height="30" />
          <TikTok width="30" height="30" />
        </div>
      </div>
      <div @click="showBurgerMenu" class="header__burger">
        <button class="header__burger-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <TheBurgerMenu />
    </div>
  </header>
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
      display: none;
    }
  }

  &__lang-switcher {
    color: var(--white);
  }

  &__social-media-links {
    display: flex;
    align-items: center;
    gap: 20px;

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

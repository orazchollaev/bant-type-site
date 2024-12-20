<script setup lang="ts">
import Home from "./icons/Home.vue";
import Phone from "./icons/Phone.vue";
import Message from "./icons/Message.vue";
import Chevron from "./icons/Chevron.vue";
</script>

<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__box">
          <div class="footer__logo">
            <a href="#home" class="footer__logo-img">
              <img src="/assets/img/logo.jpg" alt="" />
            </a>
            <div class="footer__logo-title">
              Band Tape international catring company
            </div>
          </div>
          <div class="footer__links">
            <div class="footer__links-title">Useful Links</div>
            <div class="footer__links-link">
              <div class="footer__icon">
                <Chevron />
              </div>
              <nuxt-link to="#about" class="footer__link">Biz Barada</nuxt-link>
            </div>
            <div class="footer__links-link">
              <div class="footer__icon">
                <Chevron />
              </div>
              <nuxt-link to="#products" class="footer__link"
                >Önümlerimiz</nuxt-link
              >
            </div>
            <div class="footer__links-link">
              <div class="footer__icon">
                <Chevron />
              </div>
              <nuxt-link to="#contact" class="footer__link"
                >Habarlaşmak</nuxt-link
              >
            </div>
          </div>
          <div class="footer__info">
            <div class="footer__info-title">Contact info</div>
            <div class="footer__info-item">
              <div class="info-item__icon">
                <Home />
              </div>
              <div class="info-item__name">Ashgabat c., Olimpic village, 7</div>
            </div>
            <div class="footer__info-item">
              <div class="info-item__icon">
                <Phone />
              </div>
              <div class="info-item__name">+99312 465494 +99312 465495</div>
            </div>
            <div class="footer__info-item">
              <div class="info-item__icon">
                <Message />
              </div>
              <div class="info-item__name">
                operationsmanager@arassadeniz.com
              </div>
            </div>
          </div>
        </div>
        <div class="footer__copyright">
          © 2024 All right reserved by Arassa Deniz
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: var(--primary);
  &__body {
  }

  &__box {
    padding: 90px 0px 65px 0px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 50px 0px 0px 0px;
      gap: 30px;
    }
  }

  &__logo {
  }

  &__logo-img {
    img {
      width: 200px;
      height: 66px;
      border-radius: 10px;
    }
  }

  &__logo-title {
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.6);
  }
  &__links-link {
    display: flex;
    @media (max-width: 768px) {
      padding-left: 20px;
    }
  }

  &__links-title {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 20px;
  }

  &__link {
    margin-left: 10px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  &__info-title {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 20px;
  }

  &__info-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      padding-left: 20px;
    }
  }

  &__copyright {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    padding: 20px 0;
  }
}
.info-item {
  &__icon {
  }

  &__name {
    padding-left: 30px;
    color: rgba(255, 255, 255, 0.6);
    @media (max-width: 768px) {
      font-size: 15px;
      padding-left: 20px;
    }
  }
}
</style>

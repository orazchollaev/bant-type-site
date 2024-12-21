<script setup lang="ts">
const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
</script>

<template>
  <div class="contact" id="contact">
    <div class="contact__container">
      <div class="contact__body">
        <div class="contact__item">
          <div class="contact__title">{{ $t("contact") }}</div>
          <form class="contact__form">
            <input v-model="name" type="text" :placeholder="$t('yourName')" />
            <input
              v-model="email"
              type="email"
              :placeholder="$t('yourEmail')"
            />
            <input v-model="phone" type="text" :placeholder="$t('yourPhone')" />
          </form>
          <div class="contact__texta">
            <textarea
              v-model="message"
              rows="10"
              cols="30"
              :placeholder="$t('yourMessage')"
            ></textarea>
            <div class="contact__button">
              <button>{{ $t("send") }}</button>
            </div>
          </div>
        </div>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091547!2d144.96305771590405!3d-37.813627742021524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb0f0f0b0b0b0b0b!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1646112139081!5m2!1sen!2sau"
            width="100%"
            height="400"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  padding: 20px 0;
  @media (max-width: 426px) {
    padding: 10px 0px;
  }
  &__body {
    width: 100%;
    padding: 0 0 0 50px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    @media (max-width: 768px) {
      padding: 0 0 0 20px;
      flex-direction: column;
      gap: 20px;
    }
    @media (max-width: 426px) {
      gap: 10px;
      padding: 20px;
    }
  }

  &__item {
    margin: 60px 50px 0 0;
    width: 50%;
    @media (max-width: 768px) {
      padding-right: 20px;
      margin: 30px 20px 0 0;
      width: 100%;
    }
    @media (max-width: 426px) {
      padding-right: 10px;
      margin: 15px 10px 0 0;
    }
  }

  &__title {
    font-size: 48px;
    font-weight: 700;
    color: #353539;
    text-transform: capitalize;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 35px;
      margin-bottom: 10px;
    }
    @media (max-width: 426px) {
      font-size: 30px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      font-family: "Nunito";
      width: 100%;
      height: 50px;
      font-size: 1rem;
      border-bottom: 1px solid#98989c;
    }
  }

  &__button {
    button {
      font-family: "Nunito";
      font-size: 1rem;
      background: var(--red);
      color: var(--white);
      padding: 12px 40px;
      text-align: center;
      border-radius: 25px;
      font-weight: 600;
      @media (max-width: 768px) {
        padding: 10px 20px;
      }
      @media (max-width: 426px) {
        padding: 10px 15px;
        font-size: 15px;
      }
    }
  }
  &__texta {
    textarea {
      font-family: "Nunito";
      margin-bottom: 25px;
      resize: none;
      font-size: 1rem;
      width: 100%;
      border-bottom: 1px solid#98989c;
      margin: 10px 0;
      max-height: 160px;
      @media (max-width: 768px) {
        max-height: 100px;
        padding: 10px 15px 15px 0;
      }
      @media (max-width: 426px) {
        padding: 10px 10px 10px 0;
      }
    }
  }
}
.map-container {
  width: 60%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.map-container iframe {
  width: 100%;
  height: 650px;
  border: 0;
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
    padding: 20px 20px 20px 0;
  }
  @media (max-width: 426px) {
    width: 100%;
    height: 400px;
    padding: 10px 10px 10px 0;
  }
}
</style>

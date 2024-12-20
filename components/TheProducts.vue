<script setup lang="ts">
const TheProducts = ref([
  {
    id: 1,
    text: "Professional catering service",
    images:
      "https://www.arassadeniz.com/assets/uploads/media-uploader/60x601727159366.svg",
  },
  {
    id: 2,
    text: "Save nature to save the future",
    images:
      "https://www.arassadeniz.com/assets/uploads/media-uploader/120x120-21727159992.svg",
  },
  {
    id: 3,
    text: "Heath safety environment",
    images:
      "https://www.arassadeniz.com/assets/uploads/media-uploader/120x120-11727160505.svg",
  },
]);
</script>

<template>
  <div class="products" id="products">
    <div class="products__container">
      <div class="products__body">
        <div class="products__titles">
          <h2 class="products__title">Önümlerimiz</h2>
          <p>
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet <br />
            adipiscing sem neque sed ipsum.
          </p>
        </div>
        <div class="products__items">
          <div
            class="products__item"
            v-for="item in TheProducts"
            :key="item.id"
          >
            <div class="products__item-img">
              <img :src="item.images" />
            </div>
            <div class="products__item-title">
              {{ item.text }}
            </div>
            <div class="products__item-text">
              Arassa Deniz is a private company founded on July 1, 2017 through
              transformation and expansion from individual entrepreneur to
              individual enterprise with private investments from the founder.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products {
  background: var(--white);
  &__body {
    padding: 20px 0 80px 0;
  }

  &__titles {
    text-align: center;
    p {
      color: var(--gray);
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
  }

  &__items {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      gap: 20px;
    }
    @media (max-width: 426px) {
      flex-direction: column;
    }
  }

  &__item {
    text-align: center;
  }

  &__item-img {
    margin-bottom: 20px;
    img {
      @media (max-width: 768px) {
        width: 100px;
        height: 100px;
      }
    }
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  &__item-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    color: var(--primary);
    margin-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 21px;
      line-height: 24px;
    }
  }

  &__item-text {
    color: var(--gray);
    @media (max-width: 768px) {
      line-height: 14px;
      line-height: 120%;
    }
  }
}
</style>

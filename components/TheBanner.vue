<template>
  <div class="custom-swiper">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :speed="1500"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <div class="image-container">
            <img :src="slide.image" :alt="`Slide ${index + 1}`" />
            <div :class="['text-overlay', { active: activeSlide === index }]">
              <h1>Bant Tape</h1>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    image: "/slide_1.jpg",
  },
  {
    image: "/slide_2.jpg",
  },
  {
    image: "/slide_3.jpg",
  },
  {
    image: "/slide_4.jpg",
  },
  {
    image: "/slide_5.jpg",
  },
];

const modules = ref<any[]>([Autoplay]);

const activeSlide = ref(0);

const onSlideChange = (swiper: any) => {
  activeSlide.value = swiper.realIndex;
};
</script>

<style scoped lang="scss">
.custom-swiper {
  width: 100%;
  background-color: black;
}

.swiper-slide {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);

  img {
    width: 100vw;
    height: calc(100vh - 70px);
    object-fit: cover;
    object-position: center;
  }
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: var(--light-blue);
  text-align: left;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: opacity 1s ease-in-out;
  @media (max-width: 768px) {
    padding: 10px;
  }

  &.active {
    opacity: 1;

    h1 {
      transform: translateX(0);
    }
  }

  h1 {
    transition: 1s ease-in-out;
    font-size: 40px;
    transform: translateX(-200px);
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
}
</style>

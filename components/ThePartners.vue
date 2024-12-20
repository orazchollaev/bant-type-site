<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Swipers = ref([
  { images: "/awtoguyc.png" },
  { images: "/Balam.png" },
  { images: "/balseker.jpg" },
  { images: "/Çaly.jpg" },
  { images: "Doganlar-Yyldyz.png" },
  { images: "/Kilwan.jpg" },
  { images: "/Salkyn.jpg" },
  { images: "/Taze_Ay.jpg" },
]);

const modules = ref<any[]>([Autoplay]);
</script>

<template>
  <div class="partners">
    <div class="partners__body">
      <div class="partners__swiper">
        <Swiper
          :loop="true"
          :slides-per-view="5"
          :space-between="20"
          :grab-cursor="true"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            425: { slidesPerView: 2 },
          }"
          :speed="1500"
          :modules="modules"
        >
          <SwiperSlide v-for="(swiper, item) in Swipers" :key="item">
            <div class="slide-content">
              <img :src="swiper.images" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partners {
  background-color: #e8eff8;
  &__body {
    padding: 70px 0;
  }

  &__swiper {
  }
}
.slide-content {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
</style>

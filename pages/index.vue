<script setup lang="ts">
import TapeIcon from "~/components/icons/TapeIcon.vue";
import CleanIcon from "~/components/icons/CleanIcon.vue";
import LikeIcon from "~/components/icons/LikeIcon.vue";
import AwardIcon from "~/components/icons/AwardIcon.vue";
import PlayIcon from "~/components/icons/PlayIcon.vue";
import TheProducts from "~/components/TheProducts.vue";
import ThePartners from "~/components/ThePartners.vue";
import TheContact from "~/components/TheContact.vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Bant Tape",
});

const { t } = useI18n();

const aboutCardList = computed<any[]>(() => {
  return [
    {
      icon: markRaw(TapeIcon),
      text: `${t("quality")}`,
      firstColor: "#c000c0",
      secondColor: "#f000f0",
    },
    {
      icon: markRaw(CleanIcon),
      text: `${t("clean")}`,
      firstColor: "#ff90ac",
      secondColor: "#ffc6cf",
    },
    {
      icon: markRaw(LikeIcon),
      text: `${t("mostExport")}`,
      firstColor: "#2134ff",
      secondColor: "#7184ff",
    },
    {
      icon: markRaw(AwardIcon),
      text: `${t("global")}`,
      firstColor: "#1e99f7",
      secondColor: "#4ed9ff",
    },
  ];
});

import VideoModal from "~/components/VideoModal.vue";

const isModalVisible = ref(false);
const currentVideoSrc = ref("");

const openModal = (videoSrc: any) => {
  currentVideoSrc.value = videoSrc;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <div class="page">
    <TheBanner></TheBanner>

    <div class="page__about" id="about">
      <div class="page__about__container">
        <div class="page__about-card-list">
          <div
            class="page__about-card"
            v-for="cardItem in aboutCardList"
            :key="cardItem"
            :style="{
              backgroundImage: `linear-gradient(${cardItem.firstColor}, ${cardItem.secondColor} )`,
            }"
          >
            <div class="page__about-card-body">
              <component
                :is="cardItem.icon"
                class="page__about-card-icon"
                style="width: 40%; height: 5%"
              ></component>
              <span class="page__text">{{ cardItem.text }}</span>
            </div>
          </div>
        </div>

        <div class="page__about-bottom">
          <span class="page__about-description">
            {{ $t("description") }}
          </span>

          <div class="page__about-video-player">
            <video src="../assets/img/video.mp4"></video>
            <button
              @click="openModal('path/to/video.mp4')"
              class="page__about-video-player-btn"
            >
              <PlayIcon></PlayIcon>
            </button>
            <VideoModal
              :show="isModalVisible"
              :videoSrc="currentVideoSrc"
              @close="closeModal"
            />
          </div>
        </div>
      </div>
    </div>
    <TheProducts />
  </div>
  <ThePartners />
  <TheContact />
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;

  &__about {
    width: 100%;
    background-color: var(--dark-gray);
    padding: 20px 0;

    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &-card-list {
      padding: 30px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;
      margin: 0 auto;
      @media (max-width: 768px) {
        gap: 30px;
      }
    }

    &-card {
      width: 300px;
      color: var(--white);
      border-radius: 10px;
      padding: 10px;
      text-align: center;

      @media (max-width: 426px) {
        width: 220px;
      }

      &:hover {
        .page__about-card-icon {
          transform: rotateY(540deg);
        }
      }

      &-icon {
        transition: 1s;
      }
    }
    &-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      @media (max-width: 768px) {
      }
    }

    &-bottom {
      display: flex;
      align-items: center;
      @media (max-width: 426px) {
        flex-direction: column;
        gap: 20px;
      }
    }

    &-description {
      font-size: 36px;
      width: 100%;
      flex: 1 1 50%;
      color: var(--white);
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    &-video-player {
      flex: 1 1 50%;
      position: relative;

      video {
        width: 100%;
        filter: brightness(0.8);
        border-radius: 10px;
      }

      &-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px; // Buton boyutu
        height: 80px;
        border: none;
        background-color: var(--white); // Buton arkaplan rengi
        color: var(--red); // Buton içeriği rengi
        cursor: pointer;
        border-radius: 50%; // Yuvarlak buton
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 20px var(--dark-gray);

        & > * {
          width: 50%;
          height: 50%;
        }

        // İlk dalga efekti (before)
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3); // Dalga rengi
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: wave-animation 2s infinite ease-out;
          pointer-events: none; // Etkileşimi engeller
        }

        // İkinci dalga efekti (after)
        &::after {
          animation-delay: 1s; // Dalga zamanlamasını kaydır
        }
      }

      // Dalga animasyonu tanımı
      @keyframes wave-animation {
        0% {
          width: 80px;
          height: 80px;
        }
        50% {
          width: 120px; // Dalganın büyüklüğü
          height: 120px;
        }

        100% {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  &__text {
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>

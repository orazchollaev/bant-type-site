<script setup lang="ts">
import TapeIcon from "~/components/icons/TapeIcon.vue";
import CleanIcon from "~/components/icons/CleanIcon.vue";
import LikeIcon from "~/components/icons/LikeIcon.vue";
import AwardIcon from "~/components/icons/AwardIcon.vue";
import PlayIcon from "~/components/icons/PlayIcon.vue";

definePageMeta({
  layout: "default",
});

const aboutCardList = ref<any[]>([
  {
    icon: markRaw(TapeIcon),
    text: "Quality",
    firstColor: "#c000c0",
    secondColor: "#f000f0",
  },
  {
    icon: markRaw(CleanIcon),
    text: "Clean",
    firstColor: "#ff90ac",
    secondColor: "#ffc6cf",
  },
  {
    icon: markRaw(LikeIcon),
    text: "Most export",
    firstColor: "#2134ff",
    secondColor: "#7184ff",
  },
  {
    icon: markRaw(AwardIcon),
    text: "Global",
    firstColor: "#1e99f7",
    secondColor: "#4ed9ff",
  },
]);
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
            :style="{
              backgroundImage: `linear-gradient(${cardItem.firstColor}, ${cardItem.secondColor} )`,
            }"
          >
            <component
              :is="cardItem.icon"
              class="page__about-card-icon"
            ></component>
            <span>{{ cardItem.text }}</span>
          </div>
        </div>

        <div class="page__about-bottom">
          <span class="page__about-description">
            Zawod 2014 nji yyl Noyabr ayynda işe başlady. Biziñ harytlarymyz
            önümçilikde harytlary gutulara gaplamada ulanylyar, Awtoulaglary,
            reñklemekde Mebel önümçiliginde ulanylyar
          </span>

          <div class="page__about-video-player">
            <video src="../assets/img/video.mp4"></video>
            <button class="page__about-video-player-btn">
              <PlayIcon></PlayIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin: 0 auto;
    }

    &-card {
      width: 100%;
      aspect-ratio: 1.1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      color: var(--white);
      border-radius: 10px;

      &:hover {
        .page__about-card-icon {
          transform: rotateY(540deg);
        }
      }

      &-icon {
        width: 40%;
        height: 40%;
        transition: 1s;
      }

      span {
        font-size: 24px;
        font-weight: 700;
      }
    }

    &-bottom {
      display: flex;
    }

    &-description {
      width: 100%;
      flex: 1 1 50%;
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
}
</style>

<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">✖</button>
      <video src="/assets/img/video.mp4" controls autoplay>
        <source :src="videoSrc" type="video/mp4" />
        Siziň brauzeriňiz wideo görkezmegi goldamaýar.
      </video>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  videoSrc: String,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
}
.close-button {
  color: var(--white);
  position: absolute;
  top: -5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
video {
  width: 700px;
  height: auto;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 600px;
  }
  @media (max-width: 426px) {
    width: 350px;
  }
}
</style>

<template>
  <div class="modal" v-if="openModal" @click.self="$emit('close')">
    <slot></slot>
    <button class="close" @click="$emit('close')">
      <div v-for="i in 2" :key="i" class="stick"></div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["openModal"]);

computed(() => {
  if (props.openModal) {
    console.log("stop");
  } else {
    console.log("play");
  }
});
</script>

<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.3rem);
}
.close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 3rem;
  top: 3rem;
  width: 6rem;
  height: 6rem;
  position: absolute;
  appearance: none;
  border: none;
  background: none;
  border-radius: 1.5rem;
  cursor: pointer;
}
.stick {
  position: absolute;
  width: 4rem;
  height: 0.45rem;
  background: white;
  transform: rotate(45deg);
  border-radius: 1rem;
}
.stick:nth-child(2) {
  transform: rotate(135deg);
}
</style>

<template>
  <div class="container" @click="toggle = !toggle">
    <div class="subtitles">
      <transition name="le" mode="in-out">
        <div class="title" v-if="toggle">{{ title }}</div>
      </transition>
    </div>
    <div class="gradient" />
    <ClientOnly>
      <transition appear>
        <video muted loop autoplay ref="poster-video" @timeupdate="progress()">
          <source :src="'/video/intro_1080p.mp4'" type="video/mp4" />
          <source
            v-if="false"
            :src="'/video/park_720p.mp4'"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <source v-if="false" :src="'/video/park_480p.mp4'" type="video/mp4" />
        </video>
      </transition>
      <img :src="poster" />
    </ClientOnly>
  </div>
</template>

<script setup>
const route = useRoute();
const poster = setPoster();
const video = useTemplateRef("poster-video");
const title = ref("");
const toggle = ref(false);
watch(title, (a, b) => {
  toggle.value = false;
});
// const test = () => {
//   console.log(video.value.currentTime);
//   console.log(video.value.duration);
//   console.log(video.value.networkState);
//   console.log(video.value.readyState);
//   // video.value.currentTime = 3;
//   // console.log(video.value.currentTime);
//
//   // video.value.pause();
// };
const progress = () => {
  const data = {
    1: "Добро пожаловать в Вереск",
    5: " ",
    15: "Спа Курорт на берегу озера",
    25: "Шикарный Отель",
    30: "Закрытый бассейн",
    35: "СПА комплекс",
  };
  const time = video.value?.currentTime && video.value.currentTime.toFixed();

  if (data[time]) {
    title.value = data[time];
    toggle.value = true;
  }
};
</script>

<style scoped>
.le-enter-active,
.le-leave-active {
  transition: all 1s ease;
  opacity: 1;
  top: 0;
}
.le-enter-from,
.le-leave-to {
  opacity: 0;
  top: -3rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  background: #cecece;
}
.gradient {
  z-index: 10;
  height: 100%;
  width: 100%;
  background: linear-gradient(black, transparent);
  opacity: 0.43;
  position: absolute;
  top: 0;
  left: 0;
}
.subtitles {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.title {
  color: white;
  font-size: 4.5rem;
  position: relative;
}
picture {
  width: 100%;
}
img {
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* overflow: hidden; */
}
</style>

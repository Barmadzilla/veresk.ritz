<template>
  <div class="oval">
    <MenuChevron />
    <img src="~/assets/images/oval_bg.png" />
    <div id="top" />
  </div>
</template>

<script setup></script>

<style scoped>
.oval {
  /* background: yellow; */
  /* background: yellow url("~/assets/images/oval_bg.svg") no-repeat center */
  /*   bottom -0.5px / 100% 100%; */
  height: 6rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
}
.oval img {
  position: relative;
  width: 100%;
  height: 100%;
}
#top {
  position: absolute;
  bottom: 0;
}
</style>

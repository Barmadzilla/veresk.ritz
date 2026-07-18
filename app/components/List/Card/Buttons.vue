<template>
  <div class="buttons">
    <slot />
  </div>
</template>

<style>
.buttons > a:first-child {
  margin-right: 2vw;
}
@media (max-width: 1020px) {
  .buttons {
    margin-right: unset;
  }
}
</style>

<template>
  <div class="footer">
    <ListCardButtons>
      <ButtonNude label="Подробнее" noArrow noBold :to="link" />
    </ListCardButtons>
  </div>
</template>

<script setup>
const props = defineProps(["link"]);
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  /* width: 100%; */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
@media (max-width: 1020px) {
  .footer {
    display: block;
  }
}
</style>
